import type { SVGProps } from "react";
import * as React from "react";

const SvgPandaCss = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M7.18 1.55c-.7.08-1.36.22-2 .47a5.27 5.27 0 0 0-3.05 2.84c-.45 1-.61 2.05-.63 3.14-.02 1.15.12 2.28.35 3.4.2 1.02.47 2.02.86 2.98.03.09.08.12.18.12h4.74a2 2 0 0 0 .14 0l-.02-.06-.3-.66c-.2-.41-.4-.83-.57-1.25A13.6 13.6 0 0 1 5.8 8.5a5.1 5.1 0 0 1 .12-1.84c.2-.69.6-1.17 1.29-1.38a3.1 3.1 0 0 1 1.89.02c.55.19.92.58 1.07 1.16.12.45.12.9.03 1.35-.07.35-.2.66-.46.92-.45.45-1 .56-1.61.52l-.33-.03-.15-.02v.13c.04.1.06.21.08.32.06.25.12.5.2.76.15.48.32.96.52 1.43a8.74 8.74 0 0 0 4.05-1.3l.06-.04a3.87 3.87 0 0 0 1.39-1.48c.53-1.02.63-2.1.47-3.22a4.54 4.54 0 0 0-1.54-2.88 5.4 5.4 0 0 0-2.06-1.1c-1.2-.34-2.41-.39-3.65-.28Z"
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPandaCss;
