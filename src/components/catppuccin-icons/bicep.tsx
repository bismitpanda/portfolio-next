import type { SVGProps } from "react";
import * as React from "react";

const SvgBicep = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <ellipse
      cx={12.07}
      cy={12.842}
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx={2.667}
      ry={2.658}
    />
    <ellipse
      cx={3.159}
      cy={12.074}
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx={1.895}
      ry={1.889}
    />
    <path
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.05 10.191 8.837-.005m-9.057 3.74 8.767 1.533M8.43.5 7.246 1.726l-.36 1.862 1.346 1.237 1.81-.532 1.172-1.272m-9.11 7.483L6.922 3.75m-.894 6.164 1.718-5.181"
    />
  </svg>
);
export default SvgBicep;
