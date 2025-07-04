import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderExamples = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M11.5 7.5c-1.682 0-3 1.259-3 2.806 0 1.165.623 1.72 1.115 2.126.316.261.887.418.887.612v.424c-.006.248-.004.505-.004.756 0 .763.332 1.276 1.012 1.276s.992-.513.992-1.276c0-.25.001-.517-.004-.756v-.424c0-.295.596-.473.957-.763.488-.393 1.045-.88 1.045-1.975 0-1.547-1.318-2.806-3-2.806m-.998 5.956h1.996"
        stroke="#f9e2af"
      />
    </g>
  </svg>
);
export default SvgFolderExamples;
