interface Props {
  className?: string;
  width?: number | string;
  height?: number | string;
}

/*
  Official Flarial mark — the dual-chevron logo lifted from main:public/logo.svg.
  Two stacked angled hexes, brand-red front + maroon back. Same colors the C++
  uses for `flariallogo` (#FE4443 family).
*/
export function FlarialLogo({ className, width, height }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 305 268.36"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g transform="translate(5,8.66)">
        <polygon points="100,0 150,86.6 250,86.6 300,0" fill="#822a2b" />
        <polygon
          points="0,173.2 50,259.7 100,173.2 200,173.2 150,86.6 50,86.6"
          fill="#652626"
        />
      </g>
      <g>
        <polygon points="100,0 150,86.6 250,86.6 300,0" fill="#ff4444" />
        <polygon
          points="0,173.2 50,259.7 100,173.2 200,173.2 150,86.6 50,86.6"
          fill="#c33b3a"
        />
      </g>
    </svg>
  );
}
