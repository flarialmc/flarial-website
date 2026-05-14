/*
  Hero background — full-bleed Mojang "Vibrant Visuals" desert screenshot,
  layered with a deep red halo + vignette + bottom fade.
  Spans the parent's full size (use inside a relative + overflow-hidden parent).
*/
export function HeroBackground() {
  return (
    <>
      {/* Mojang desert screenshot — full bleed. image-set() picks the
          narrow 720px webp on phones so the hero LCP isn't paying for
          desktop pixels it'll never show. */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "image-set(url('/screenshots/desert-720.webp') 1x, url('/screenshots/desert.webp') 2x)",
          backgroundSize: "cover",
          backgroundPosition: "center 38%",
          opacity: 0.55,
          filter: "saturate(0.9) contrast(1.05)",
        }}
      />

      {/* Bottom fade into page bg */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(18,14,15,0.35) 0%, rgba(18,14,15,0.5) 45%, rgba(18,14,15,0.9) 85%, var(--color-bg-base) 100%)",
        }}
      />

      {/* Accent halo */}
      <div
        aria-hidden
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[55%] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,35,58,0.42), rgba(255,35,58,0) 70%)",
          filter: "blur(70px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Side vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 95% 70% at center 45%, rgba(0,0,0,0) 35%, rgba(18,14,15,0.7) 100%)",
        }}
      />
    </>
  );
}
