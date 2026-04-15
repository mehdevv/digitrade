import { cn } from "@/lib/utils";

/** Monogram asset (from `public/digitrade-logo.png`, synced from brand artwork). */
const LOGO_SRC = "/digitrade-logo.png";

type LogoMarkProps = {
  className?: string;
  alt?: string;
};

export function LogoMark({ className, alt = "Digitrade" }: LogoMarkProps) {
  return (
    <img
      src={LOGO_SRC}
      alt={alt}
      width={48}
      height={48}
      decoding="async"
      className={cn("object-contain", className)}
    />
  );
}
