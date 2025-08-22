import type { SVGProps } from "react";
import * as React from "react";

const SvgSlidesk = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <ellipse
      cx={9.785}
      cy={3.453}
      fill="none"
      stroke="#7f849c"
      rx={2.945}
      ry={2.953}
    />
    <ellipse
      cx={8}
      cy={10.895}
      fill="none"
      stroke="#7f849c"
      rx={7.177}
      ry={4.605}
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      d="M8 6.29c3.964 0 7.177 2.062 7.177 4.605S11.964 15.5 8 15.5c-2.742 0-5.125-.987-6.333-2.437"
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      d="M9.31 6.368C5.933 5.98 3.936 7.1 3.76 7.914 3.455 9.336 5.287 9.82 6.84 10.368c2.155.76 2.316 2.167 1.703 3.245-.93 1.64-5.342 1.68-7.15-.915"
    />
    <path
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12.73 3.24 1.085.01m-3.534-.281"
    />
  </svg>
);
export default SvgSlidesk;
