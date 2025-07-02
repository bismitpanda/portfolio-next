import type { SVGProps } from "react";
import * as React from "react";

const SvgHugo = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M7.991 2.163 2.823 5.317l.031 6.062 5.157 3.009 5.257-3.238-.031-6.155Z"
        stroke="#f5c2e7"
      />
      <path
        d="m6.007 5.095.046 6.269m.051-3.372 3.889-.003m.01-2.902-.028 6.247"
        stroke="#cdd6f4"
      />
    </g>
  </svg>
);
export default SvgHugo;
