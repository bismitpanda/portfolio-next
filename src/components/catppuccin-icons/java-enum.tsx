import type { SVGProps } from "react";
import * as React from "react";

const SvgJavaEnum = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.625 1.5H14.5v4.875H9.625ZM1.5 9.625h4.875V14.5H1.5Zm8.125 2.438a2.438 2.437 0 1 0 4.875 0 2.438 2.437 0 1 0-4.875 0M1.5 3.938a2.438 2.437 0 1 0 4.875 0 2.438 2.437 0 1 0-4.875 0"
    />
  </svg>
);
export default SvgJavaEnum;
