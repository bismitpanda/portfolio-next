import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderGraphql = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5H12c.8 0 1.5.7 1.5 1.5v.5m-7.5 7H2c-.8 0-1.5-.7-1.5-1.5V3.5c0-.6.4-1 1-1h5c.6 0 1 .4 1 1v1"
    />
    <path
      fill="none"
      stroke="#f5c2e7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 13.615h5.822M9 13.072l2.587-4.345m3.235 4.345-2.588-4.345m3.266 5.175L11.95 15.5l-3.548-1.598V9.547l3.549-1.535L15.5 9.547z"
    />
  </svg>
);
export default SvgFolderGraphql;
