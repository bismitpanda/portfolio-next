import type { SVGProps } from "react";
import * as React from "react";

const SvgPesdeLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.449}
      d="m32.427.49-1.175.677-9.396-5.425v-10.85l9.396-5.425 9.397 5.425v4.069"
      transform="matrix(.68907 0 0 .69117 -14.561 14.692)"
    />
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.542 13.236V6.893H2.198"
    />
    <ellipse
      cx={5.698}
      cy={9.07}
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx={2.142}
      ry={2.147}
    />
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.391 8.899c-.387-.039-.843-.153-1.211-.389a2.22 2.22 0 0 1-.878-2.639A2.21 2.21 0 0 1 9.69 4.455c1.03.151 1.814 1.152 1.884 2.193H7.362"
    />
    <path
      fill="none"
      stroke="#7f849c"
      d="M15 11.501a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.499h-4.998a.5.5 0 0 1-.5-.5v-2.999a.5.5 0 0 1 .5-.5zm-3.999 0v-1.5a1.5 1.5 0 0 1 3 0v1.5"
    />
  </svg>
);
export default SvgPesdeLock;
