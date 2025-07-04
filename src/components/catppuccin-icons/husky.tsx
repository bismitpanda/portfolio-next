import type { SVGProps } from "react";
import * as React from "react";

const SvgHusky = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m9.63 3.54.48-.84c.94-1.68-1.51-3.13-2.46-1.46l-.47.84c-.94 1.68 1.5 3.14 2.45 1.46m4.09 2.42.47-.84c.95-1.68-1.5-3.13-2.45-1.45l-.47.84c-.95 1.67 1.5 3.13 2.45 1.45m.33 5.23.24-.42c.94-1.68-1.51-3.13-2.46-1.45l-.23.42c-.95 1.67 1.5 3.13 2.45 1.45M5.3 5.44C6.22 3.76 3.77 2.31 2.83 4l-.24.42C1.65 6.1 4.1 7.55 5.04 5.87l.24-.42ZM2.57 9.02l4.06-1.56c1.25-.48 2.6.33 2.83 1.68l.71 4.38c.23 1.41-1.25 2.46-2.45 1.75a1.2 1.2 0 0 1-.4-.38l-.2-.33a5 5 0 0 0-3.9-2.3l-.38-.02a1.16 1.16 0 0 1-.51-.16 1.71 1.71 0 0 1 .24-3.06"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgHusky;
