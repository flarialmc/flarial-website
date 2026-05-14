/*
  Pixelated Minecraft-style grass-and-dirt strip rendered entirely in SVG.
  Sits beneath the hero — gives the page a real "Minecraft" anchor without
  pulling external screenshots.
*/

const GRASS = "#5DA84A";
const GRASS_DARK = "#3F7A33";
const DIRT = "#7A4E2A";
const DIRT_DARK = "#5C3A1E";
const STONE = "#6B6E72";

/* Column heights (in cells) — a chunky, slightly irregular skyline */
const COLUMNS = [
  4, 5, 5, 6, 7, 6, 5, 4, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 3, 4, 5, 6, 6, 5,
  4, 5, 6, 7, 8, 7, 5, 4, 3, 4, 4, 5, 6, 7, 7, 6,
];

export function PixelLandscape({
  className,
  cell = 16,
}: {
  className?: string;
  cell?: number;
}) {
  const cols = COLUMNS.length;
  const maxH = Math.max(...COLUMNS);
  const w = cols * cell;
  const h = maxH * cell;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden
      style={{ display: "block", width: "100%", height: "auto" }}
    >
      {COLUMNS.map((tall, i) => {
        const x = i * cell;
        const topY = (maxH - tall) * cell;
        return (
          <g key={i}>
            {/* Grass cap */}
            <rect x={x} y={topY} width={cell} height={cell} fill={GRASS} />
            <rect x={x} y={topY} width={cell} height={2} fill={GRASS_DARK} opacity="0.55" />
            <rect x={x} y={topY + cell - 2} width={cell} height={2} fill={GRASS_DARK} opacity="0.35" />

            {/* Dirt layers */}
            {Array.from({ length: Math.max(0, tall - 2) }).map((_, j) => {
              const dy = topY + cell + j * cell;
              const variant = (i + j) % 3;
              return (
                <g key={j}>
                  <rect x={x} y={dy} width={cell} height={cell} fill={DIRT} />
                  {variant === 0 ? (
                    <rect x={x + 2} y={dy + 3} width={3} height={3} fill={DIRT_DARK} />
                  ) : null}
                  {variant === 1 ? (
                    <rect x={x + cell - 6} y={dy + cell - 6} width={3} height={3} fill={DIRT_DARK} />
                  ) : null}
                  {variant === 2 ? (
                    <rect x={x + 5} y={dy + cell - 5} width={2} height={2} fill={DIRT_DARK} />
                  ) : null}
                </g>
              );
            })}

            {/* Stone foot */}
            {tall >= 2 ? (
              <rect
                x={x}
                y={topY + (tall - 1) * cell}
                width={cell}
                height={cell}
                fill={STONE}
                opacity="0.85"
              />
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
