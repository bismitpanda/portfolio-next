import type { SVGProps } from "react";
import * as React from "react";

const SvgPoetryLock = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <radialGradient
        cx={0}
        cy={0}
        gradientTransform="matrix(10.5875 0 0 10.784 4.993 -.868)"
        gradientUnits="userSpaceOnUse"
        id="poetry-lock_svg__a"
        r={1}
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={1} />
      </radialGradient>
    </defs>
    <path
      d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="m0 0 7.778 7.923q.104-.107.205-.215Z" fill="url(#poetry-lock_svg__a)" />
    <path
      d="M.5.5h10a10 10 0 0 1-3.306 7.43"
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m7.25 7.835 1.058 1.16.529.58m-1.408 2.094A12.9 12.9 0 0 1 2.69 13.51L.501 10.5"
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.32 7.814A10 10 0 0 1 .5 10.5V.5z"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPoetryLock;
