#!/bin/bash

extract_archive() {
    local file="$1"
    local outdir="$2"

    if [[ -z "$file" || -z "$outdir" ]]; then
        echo "Usage: extract_archive <archive_file> <output_directory>"
        return 1
    fi

    if [[ ! -f "$file" ]]; then
        echo "Error: File '$file' not found"
        return 1
    fi

    mkdir -p "$outdir"

    case "$file" in
    *.tar.gz | *.tgz | *.tar.Z | *.taz)
        echo "Detected gzip compression"
        tar -xzf "$file" -C "$outdir"
        ;;
    *.tar.bz2 | *.tbz2 | *.tbz | *.tar.bz | *.tz2)
        echo "Detected bzip2 compression"
        tar -xjf "$file" -C "$outdir"
        ;;
    *.tar.xz | *.txz)
        echo "Detected xz compression"
        tar -xJf "$file" -C "$outdir"
        ;;
    *.tar.zst | *.tzst)
        echo "Detected zstd compression"
        tar --zstd -xf "$file" -C "$outdir"
        ;;
    *.tar.lzma | *.tlz)
        echo "Detected lzma compression"
        tar --lzma -xf "$file" -C "$outdir"
        ;;
    *.tar)
        echo "Detected tar compression"
        tar -xf "$file" -C "$outdir"
        ;;
    *.zip)
        echo "Detected zip compression"
        unzip -q "$file" -d "$outdir"
        ;;
    *.gz)
        echo "Detected gzip compression"
        gunzip -c "$file" >"$outdir/$(basename "$file" .gz)"
        ;;
    *.bz2)
        echo "Detected bzip2 compression"
        bunzip2 -c "$file" >"$outdir/$(basename "$file" .bz2)"
        ;;
    *.xz)
        echo "Detected xz compression"
        xz -dc "$file" >"$outdir/$(basename "$file" .xz)"
        ;;
    *.zst)
        echo "Detected zstd compression"
        zstd -dc "$file" >"$outdir/$(basename "$file" .zst)"
        ;;
    *.lzma)
        echo "Detected lzma compression"
        lzma -dc "$file" >"$outdir/$(basename "$file" .lzma)"
        ;;
    *)
        echo "Error: Unsupported file format: $file"
        return 1
        ;;
    esac

    if [[ $? -eq 0 ]]; then
        echo "Successfully extracted '$file' to '$outdir'"
    else
        echo "Error: Failed to extract '$file'"
        return 1
    fi
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    extract_archive "$1" "$2"
fi
