import type { SVGProps } from "react";
import * as React from "react";

const SvgVanillaExtract = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.378 6.164A2.536 2.587 0 0 0 3.54 8.65m1.838-2.486c1.255-.366 3.914-.6 4.423-2.06m-4.423 2.06C5.378 3.45 8 4.1 8 1.5c1.304 0 2.232 1.371 1.801 2.605m0 0c1.037-.091 1.732 1.125 1.184 1.996m0 0c-.174.277-.461.503-.755.676m.755-.676c1.247.296 1.475 1.44 1.475 2.549"
      fill="none"
      stroke="#f5c2e7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.549 9.917c0-1.69 2.548-1.69 2.548 0 0 .885-.48 1.643-.855 2.411-.513 1.057-.77 1.585-1.233 1.879-.462.293-1.036.293-2.186.293H7.177c-1.15 0-1.724 0-2.186-.293-.462-.294-.72-.822-1.233-1.879-.374-.768-.855-1.526-.855-2.411 0-1.69 2.548-1.69 2.548 0 0-1.69 2.549-1.69 2.549 0 0-1.69 2.549-1.69 2.549 0"
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgVanillaExtract;
