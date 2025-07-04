import type { SVGProps } from "react";
import * as React from "react";

const SvgLintStaged = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.28 8.2c-.01.02.13.2.38.36.14.08.3.14.45.16m.45-2.92c-.03.02.56.77 1.42.45"
        stroke="#fab387"
      />
      <path
        d="M3.6 10.45a2 2 0 0 1-.05-.2C3.4 9.69 3.5 9 4.4 8.45c-.67-1.23.66-2.56 1.13-2.6.24 0-.17-2.8 2.84-2.35m.35 1.51c-.16-.14-.97-.54-.35-1.4m2.56 4.72s.1-.33 0-.74a.9.9 0 0 0-.1-.32"
        stroke="#fab387"
      />
      <path
        d="M6.42 11.5h4.96c.6.07 2.03-1.64-.42-3.21-.56.63-1.12 1.2-2.09 1.05"
        stroke="#fab387"
      />
      <path
        d="M14.5 8A6.5 6.5 0 0 1 8 14.5 6.5 6.5 0 0 1 1.5 8 6.5 6.5 0 0 1 8 1.5 6.5 6.5 0 0 1 14.5 8m-11 4.5 9-9"
        stroke="#f38ba8"
      />
    </g>
  </svg>
);
export default SvgLintStaged;
