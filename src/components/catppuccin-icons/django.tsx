import type { SVGProps } from "react";
import * as React from "react";

const SvgDjango = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#a6e3a1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.5 6.5v4.37c0 1.64-.12 2.43-.5 3.1a2.8 2.8 0 0 1-1.5 1.53l-2-1c.94-.43 1.3-.7 1.6-1.28.3-.59.4-1.27.4-3.06V6.5zm0-2h-2v-2h2zm-4 7.71c-1.14.2-1.97.29-2.88.29-2.7 0-4.12-1.16-4.12-3.38 0-2.14 1.72-3.53 4.04-3.53.36 0 .63.03.96.11V2.5h2z" />
      <path d="M3.5 9.08c0 1.12.84 1.47 1.98 1.47.24 0 .7-.01 1.02-.05v-3c-.26-.08-.73-.1-1-.1-1.13 0-2 .53-2 1.68" />
    </g>
  </svg>
);
export default SvgDjango;
