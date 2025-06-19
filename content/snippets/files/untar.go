package main

import (
	"archive/tar"
	"archive/zip"
	"compress/bzip2"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"

	"github.com/klauspost/compress/zstd"
	"github.com/klauspost/pgzip"
	"github.com/ulikunitz/xz"
	"github.com/ulikunitz/xz/lzma"
)

var exts = map[string]string{
	".tar":  "tar",
	".zip":  "zip",
	".gz":   "gzip",
	".tgz":  "gzip",
	".taz":  "gzip",
	".bz2":  "bzip2",
	".tz2":  "bzip2",
	".tbz2": "bzip2",
	".tbz":  "bzip2",
	".xz":   "xz",
	".zst":  "zstd",
	".tzst": "zstd",
	".lzma": "lzma",
	".tlz":  "lzma",
}

func extractArchive(filename, outdir string) error {
	if err := os.MkdirAll(outdir, 0755); err != nil {
		return err
	}

	ext := strings.ToLower(filepath.Ext(filename))
	compress, ok := exts[ext]
	if !ok {
		return fmt.Errorf("unsupported extension: %s", ext)
	}

	file, err := os.Open(filename)
	if err != nil {
		return err
	}
	defer file.Close()

	if compress == "zip" {
		return extractZip(file, outdir)
	}
	return extractTar(file, outdir, compress)
}

func sanitizePath(dst, target string) (string, error) {
	target = filepath.Join(dst, target)
	if !strings.HasPrefix(target, filepath.Clean(dst)+string(os.PathSeparator)) {
		return "", fmt.Errorf("unsafe path: %s", target)
	}
	return target, nil
}

func extractZip(file *os.File, dst string) error {
	stat, err := file.Stat()
	if err != nil {
		return err
	}

	r, err := zip.NewReader(file, stat.Size())
	if err != nil {
		return err
	}

	for _, header := range r.File {
		target, err := sanitizePath(dst, header.Name)
		if err != nil {
			continue
		}

		if header.Mode().IsDir() {
			os.MkdirAll(target, 0755)
		} else {
			os.MkdirAll(filepath.Dir(target), 0755)

			src, err := header.Open()
			if err != nil {
				return err
			}

			outFile, err := os.OpenFile(target, os.O_CREATE|os.O_RDWR|os.O_TRUNC, header.Mode())
			if err != nil {
				src.Close()
				return err
			}

			_, err = io.Copy(outFile, src)
			src.Close()
			outFile.Close()

			if err != nil {
				return err
			}
		}
	}
	return nil
}

func extractTar(file *os.File, dst, compress string) error {
	var reader io.Reader = file

	switch compress {
	case "gzip":
		gr, err := pgzip.NewReader(file)
		if err != nil {
			return err
		}
		defer gr.Close()
		reader = gr
	case "bzip2":
		reader = bzip2.NewReader(file)
	case "xz":
		xr, err := xz.NewReader(file)
		if err != nil {
			return err
		}
		reader = xr
	case "lzma":
		lr, err := lzma.NewReader(file)
		if err != nil {
			return err
		}
		reader = lr
	case "zstd":
		zr, err := zstd.NewReader(file)
		if err != nil {
			return err
		}
		defer zr.Close()
		reader = zr
	}

	tarReader := tar.NewReader(reader)

	for {
		header, err := tarReader.Next()
		if err == io.EOF {
			break
		}
		if err != nil {
			return err
		}

		target, err := sanitizePath(dst, header.Name)
		if err != nil {
			continue
		}

		switch header.Typeflag {
		case tar.TypeDir:
			os.MkdirAll(target, 0755)
		case tar.TypeReg:
			os.MkdirAll(filepath.Dir(target), 0755)

			outFile, err := os.OpenFile(target, os.O_CREATE|os.O_RDWR|os.O_TRUNC, os.FileMode(header.Mode))
			if err != nil {
				return err
			}

			_, err = io.Copy(outFile, tarReader)
			outFile.Close()

			if err != nil {
				return err
			}
		}
	}
	return nil
}
