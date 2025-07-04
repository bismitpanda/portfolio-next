import type { SVGProps } from "react";
import * as React from "react";

const SvgDenoLock = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"
        stroke="#7f849c"
      />
      <path
        d="M12.5 6.5a6 6 0 1 0-5 5.92m.17-.92-.84-3.33C5.07 8.1 3.5 7.08 3.5 5.83 3.5 4.54 5 3.5 6.83 3.5c1.84 0 2.67.67 3.34 2l.62 2m-3.29-2"
        stroke="#cdd6f4"
      />
    </g>
  </svg>
);
export default SvgDenoLock;
