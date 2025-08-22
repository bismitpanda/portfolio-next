import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderJavascript = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
    />
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.734 13.981c0 .839.652 1.519 1.456 1.519.805 0 1.456-.68 1.456-1.519v-3.544m4.854.587c-.242-.337-.608-.587-1.165-.587h-.582c-.644 0-1.165.566-1.165 1.265 0 .7.521 1.266 1.165 1.266h.582c.643 0 1.165.567 1.165 1.266s-.522 1.266-1.165 1.266h-.582c-.583 0-.951-.31-1.165-.694"
    />
  </svg>
);
export default SvgFolderJavascript;
