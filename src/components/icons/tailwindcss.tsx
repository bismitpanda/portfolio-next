import type { SVGProps } from "react";
import * as React from "react";

const SvgTailwindcss = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 54 33" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#tailwindcss_svg__a)">
      <path
        clipRule="evenodd"
        d="M27 0Q16.2 0 13.5 10.8q4.05-5.4 9.45-4.05c2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2q10.8 0 13.5-10.8-4.05 5.4-9.45 4.05c-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0M13.5 16.2Q2.7 16.2 0 27q4.05-5.4 9.45-4.05c2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4q10.8 0 13.5-10.8-4.05 5.4-9.45 4.05c-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2"
        fill="#38bdf8"
        fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="tailwindcss_svg__a">
        <path d="M0 0h54v32.4H0z" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTailwindcss;
