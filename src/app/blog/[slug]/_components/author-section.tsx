import Image from "next/image";

export function AuthorSection() {
  return (
    <div className="rounded-lg border p-4">
      <p className="text-xl font-bold mb-2">About the author</p>
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center justify-start gap-4">
          <div className="size-8 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              alt="Bismit Panda"
              className="size-full object-cover"
              height={32}
              src="/images/photo.png"
              width={32}
            />
          </div>
          <h3 className="font-bold text-lg">Bismit Panda</h3>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">
            Full Stack Developer with a passion for typography and user
            experience. Writing about web development, design, and the
            intersection of technology and creativity.
          </p>
        </div>
      </div>
    </div>
  );
}
