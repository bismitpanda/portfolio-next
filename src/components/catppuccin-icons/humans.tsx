import type { SVGProps } from "react";
import * as React from "react";

const SvgHumans = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none">
      <g clipPath="url(#humans_svg__a)" stroke="#fab387" strokeLinejoin="round">
        <path d="M2.28 1.87C1.1 2.2.32 3.45.53 4.8l1.38 8.6c.14.9.7 1.62 1.44 1.93V3.68c0-.58-.21-.7-.64-.7h-.43v-1.1Zm3.19-.47c.15.23.24.56.24 1v4.53l.31-.4c.62-.83 1.27-1.69 3.02-1.69 2.36 0 3.32 1.28 3.32 2.9v4.83c-.01.43-.02.87.54.87h2.56c.04-.27.05-.55.02-.84l-1.24-9.9C14.07 1.33 12.9.35 11.62.53l-6.15.88Z" />
        <path d="M10.89 15.5c-.54-.14-.78-.68-.78-1.48V8.44c0-.81-.54-1.27-1.72-1.27s-2.68.7-2.68 2.32v6.01z" />
      </g>
      <defs>
        <clipPath id="humans_svg__a">
          <path d="M0 0h16v16H0z" fill="#fff" />
        </clipPath>
      </defs>
    </g>
  </svg>
);
export default SvgHumans;
