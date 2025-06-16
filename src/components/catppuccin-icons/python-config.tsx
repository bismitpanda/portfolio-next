import * as React from "react";
import type { SVGProps } from "react";

const SvgPythonConfig = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.5 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1.75-4 1.75 3-1.75 3h-3.5L8 12.5l1.75-3z"
    />
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.083}>
      <path
        stroke="#89b4fa"
        strokeWidth={0.99969564}
        d="M6.961 4.192h-2.77m5.54 0V1.884C9.73 1.146 9.083.5 8.345.5h-2.77c-.738 0-1.384.646-1.384 1.384v2.308H1.884C1.146 4.192.5 4.838.5 5.577v1.846c0 .738.646 1.384 1.366 1.384"
      />
      <path
        stroke="#f9e2af"
        strokeWidth={0.99969564}
        d="M8.115 8.807H6.038m-2.77 0v2.308c0 .739.647 1.385 1.385 1.385h1.385m6.35-4.55c.071-.164.112-.343.112-.527V5.577c0-.739-.646-1.385-1.366-1.385H9.73c0 1.385 0 1.846-.923 1.846H6.961"
      />
      <path
        stroke="#89b4fa"
        strokeWidth={0.99969564}
        d="M1.866 8.807h1.403c0-1.384 0-1.846.923-1.846h1.846m0-4.615"
      />
      <path stroke="#f9e2af" strokeWidth={0.99969564} d="M6.961 10.654" />
    </g>
  </svg>
);
export default SvgPythonConfig;
