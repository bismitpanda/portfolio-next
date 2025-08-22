import type { SVGProps } from "react";
import * as React from "react";

const SvgMdbook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15.5 4.39-2.794 8.978s-.399 1.464-1.596 1.464H2.33S.5 14.233.5 13.002c0-1.23 4.024-11.207 4.024-11.207s.177-.627 1.087-.627 7.095.029 7.095.029 1.597-.067 1.098 1.097c-.5 1.164-2.76 9.212-2.76 9.212s-.2 1.13-1.331 1.13-9.02-.107-9.02-.107"
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.977 5.964 1.166-3.316.714 2.85 2.49-2.693-.943 3.402M5.538 7.712l-1.035 3.08s3.55.687 4.098-1.125-3.063-1.955-3.063-1.955"
    />
  </svg>
);
export default SvgMdbook;
