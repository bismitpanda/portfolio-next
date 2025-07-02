import type { SVGProps } from "react";
import * as React from "react";

const SvgTwig = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M.502 7C.876 6.703 1.87 6.356 3 6.513c.724.118 1.466.309 2.507 1.058.52.374.896.867 1.493 1.429m1.985 6.499H4.99c.057-.826.025-1.656-.093-2.475A8 8 0 0 0 3.579 9.19C2.342 7.549.404 7.303.502 7m8.483 8.5L13 15.499c-.143-1.147-.493-2.3-.528-3.455-.05-1.719-.205-4.044 1.621-4.081.907.08 1.294.836 1.4 1.037-.04-.399-.33-1.94-1.493-2.415-1.393-.57-3.333 1.648-3.517 1.967M2 2c.14.214 1.216-.506 2.263-.267C5.367 1.986 6.553 3.656 7 9m3.483-.448A10.26 10.26 0 0 0 8.679 3.66C8.127 2.886 6.215.19 4.1.53 2.74.75 2.123 1.542 2 2"
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 11a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5m3 0a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5"
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgTwig;
