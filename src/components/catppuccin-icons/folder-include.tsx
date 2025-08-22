import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderInclude = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
    />
    <circle
      cx={11.623}
      cy={11.623}
      r={3.877}
      fill="none"
      stroke="#74c7ec"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill="none"
      stroke="#74c7ec"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.634 9.708v3.838m1.919-1.92H9.715"
    />
  </svg>
);
export default SvgFolderInclude;
