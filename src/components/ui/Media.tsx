import fs from "node:fs";
import path from "node:path";

import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface MediaProps {
  /** Path under `public/`, e.g. `/images/projects/pulse.jpg`. */
  src: string;
  alt: string;
  /** Shown inside the placeholder when the file is not there yet. */
  fallbackLabel?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/** True when the file actually exists in `public/`. */
function existsInPublic(src: string) {
  if (!src) return false;
  if (src.startsWith("http://") || src.startsWith("https://")) return true;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
  } catch {
    return false;
  }
}

/**
 * Renders an image, or a deliberate placeholder when the file has not been
 * added yet. This keeps the layout intact while the data files still point at
 * images that do not exist, and needs no code change once they do: drop the
 * file into `public/` at the path named in the JSON.
 *
 * Fills its parent, so the parent must be `relative` with a set aspect ratio.
 */
export default function Media({
  src,
  alt,
  fallbackLabel,
  sizes = "100vw",
  priority = false,
  className = "",
}: MediaProps) {
  if (existsInPublic(src)) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`absolute inset-0 grid place-items-center bg-raised ${className}`}
    >
      <div
        aria-hidden
        className="backdrop-grid absolute inset-0 opacity-40 [mask-image:none]"
      />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <ImageIcon className="h-6 w-6 text-faint" />
        {fallbackLabel ? (
          <span className="font-mono text-[11px] leading-snug text-faint">
            {fallbackLabel}
          </span>
        ) : null}
        <span className="font-mono text-[10px] text-faint/60">{src}</span>
      </div>
    </div>
  );
}
