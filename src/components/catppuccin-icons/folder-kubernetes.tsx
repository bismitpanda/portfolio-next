import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderKubernetes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        stroke="#cdd6f4"
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
      />
      <g stroke="#89b4fa">
        <circle cx={11.494} cy={11.509} r={2.992} />
        <path d="M11.494 11.51V7.47m0 4.04L9.389 9.83l-1.053-.84m3.158 2.52 1.168 2.425.584 1.214m-1.752-3.64 2.625.6 1.312.3m-3.937-.9 2.105-1.679 1.052-.84m-3.157 2.52-2.625.598-1.313.3m3.938-.899-1.169 2.426-.584 1.213" />
      </g>
    </g>
  </svg>
);
export default SvgFolderKubernetes;
