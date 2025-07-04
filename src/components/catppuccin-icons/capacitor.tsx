import type { SVGProps } from "react";
import * as React from "react";

const SvgCapacitor = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m14.36 9.2-1.52 1.5c-.08.09-.14.15-.27.03-1.5-1.52-6.4-6.4-7.32-7.31-.09-.1-.08-.15 0-.24l1.62-1.6c.1-.1.16-.1.25 0L9.64 4.1c.07.07.13.16.25.17l2.68-2.69c.1-.1.17-.11.27 0l1.56 1.54c.14.13.13.2 0 .33l-2.52 2.5c-.17.17-.15.25.01.4l2.47 2.47c.16.15.15.23 0 .37zM3.44 5.28c-.11-.11-.18-.11-.29 0-.5.52-1.02 1.03-1.53 1.53-.15.14-.13.22 0 .35L4.1 9.64c.17.16.16.25 0 .41-.84.82-1.66 1.66-2.5 2.49-.12.12-.15.2 0 .33.51.5 1.02 1.02 1.52 1.54.12.12.19.12.3 0 .58-.59 2.4-2.4 2.75-2.71 1.36 1.37 2.27 2.27 2.7 2.72.1.09.17.1.26 0l1.6-1.61c.1-.09.1-.15 0-.23L3.45 5.29Z"
      fill="none"
      stroke="#89dceb"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCapacitor;
