import type { SVGProps } from "react";
import * as React from "react";

const SvgPackageJson = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.5 6.5v-.17c0-.73-.6-1.33-1.33-1.33H9a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1-1.5-1.5M5.5 5v4.5c0 1.5-.08 1.87-.71 2.5-.5.5-1.5.5-1.5.5-.96-.4-1.2-.66-1.79-1v-7L8 .5l6.5 4v7l-6.5 4-2.49-1.53"
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPackageJson;
