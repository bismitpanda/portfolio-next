import * as React from "react";
import type { SVGProps } from "react";

const SvgHugo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#f5c2e7"
        d="M7.991 2.163 2.823 5.317l.031 6.062 5.157 3.009 5.257-3.238-.031-6.155Z"
      />
      <path
        stroke="#cdd6f4"
        d="m6.007 5.095.046 6.269m.051-3.372 3.889-.003m.01-2.902-.028 6.247"
      />
    </g>
  </svg>
);
export default SvgHugo;
