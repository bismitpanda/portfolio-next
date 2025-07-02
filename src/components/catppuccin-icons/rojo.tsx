import type { SVGProps } from "react";
import * as React from "react";

const SvgRojo = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m2.438 12.065 4.12-10.127m-2.581.897s4.842-2.752 6.86-.352c1.539 2.275-6.443 5.255-6.443 5.255S3.96 9.79 13.562 14.5"
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgRojo;
