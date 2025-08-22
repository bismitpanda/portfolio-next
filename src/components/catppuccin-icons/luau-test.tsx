import type { SVGProps } from "react";
import * as React from "react";

const SvgLuauTest = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      d="m10.244 1.75-8.49 8.48c-2.36 2.36 1.18 5.9 3.54 3.54L6 13.063m6.494-6.502 1.28-1.281M9.024.5l6 6M7.5 7.5H4.504"
    />
    <path
      fill="none"
      stroke="#89dceb"
      strokeLinejoin="round"
      d="M9.314 7.624 15.5 9.287 13.85 15.5l-6.226-1.69Z"
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinejoin="round"
      d="m11.482 9.98-.463 1.854 1.853.464.464-1.854z"
    />
  </svg>
);
export default SvgLuauTest;
