import type { SVGProps } from "react";
import * as React from "react";

const SvgShadcnUiDark = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0h256v256H0z" fill="none" />
    <path
      d="m208 128-80 80m64-168L40 192"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={25}
    />
  </svg>
);
export default SvgShadcnUiDark;
