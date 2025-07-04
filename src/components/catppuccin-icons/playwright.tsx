import type { SVGProps } from "react";
import * as React from "react";

const SvgPlaywright = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 9.5c-1.02.35-1.5 1-1.5 1" stroke="#f38ba8" />
      <path
        d="m5.97 12.36-.1.03c-2.98.8-4.55-2.64-5.03-4.43C.62 7.13.53 6.28.5 5.88c-.03-.46.29-.33.89-.23a6.5 6.5 0 0 0 2.7-.17c.52-.14 1.26-.4 1.74-.65"
        stroke="#f38ba8"
      />
      <path d="M2.5 7.5s.36.56 1.18.31C4.5 7.57 4.5 7 4.5 7" stroke="#f38ba8" />
      <path
        d="M15.05 7.57c-.62 2.33-2.67 6.81-6.52 5.78C4.68 12.3 5.14 7.4 5.77 5.08c.28-1.07.58-1.84.81-2.31.27-.54.53-.18 1.14.32a8.4 8.4 0 0 0 3.14 1.56 8.4 8.4 0 0 0 3.49.22c.78-.13 1.19-.3 1.15.29-.04.52-.16 1.33-.45 2.4Z"
        stroke="#a6e3a1"
      />
      <path
        d="M9.5 7.5s0-.82-.72-1.08-1.28.08-1.28.08m0 3S8 11 9.21 11.33c1.21.34 2.29-.83 2.29-.83M13 9s.18-.87-.58-1.23C11.66 7.4 11 8 11 8"
        stroke="#a6e3a1"
      />
    </g>
  </svg>
);
export default SvgPlaywright;
