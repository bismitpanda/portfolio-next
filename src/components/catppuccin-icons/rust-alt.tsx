import type { SVGProps } from "react";
import * as React from "react";

const SvgRustAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.165 11.219h4.158M2.505 4.788h7.143c2.2-.001 2.2 3.214 0 3.215H4.703m0-3.215v6.431M8 8.003h1.099c1.214 0 2.198.96 2.198 2.144 0 .592.492 1.072 1.099 1.072h1.217M8 .5l1.477 1.19 1.86-.447.803 1.698 1.874.385-.033 1.868 1.519 1.14-.863 1.67.862 1.67-1.519 1.139.033 1.868-1.876.385-.8 1.698-1.861-.448L8 15.506l-1.477-1.19-1.86.448-.803-1.698-1.874-.385.033-1.868L.5 9.673l.863-1.67L.5 6.333l1.519-1.138-.033-1.868 1.874-.385.803-1.698 1.86.447Z"
    />
  </svg>
);
export default SvgRustAlt;
