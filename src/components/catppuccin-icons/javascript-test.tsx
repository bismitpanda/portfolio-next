import type { SVGProps } from "react";
import * as React from "react";

const SvgJavascriptTest = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 7.5H4.98M9.5.5l6 6m-4.78-4.75-8.49 8.48a2.5 2.5 0 1 0 3.54 3.54l8.48-8.49M15.5 12c-.33-.33-.83-.5-1.5-.5-1 0-1.5.5-1.5 1s.5 1 1.5 1 1.5.5 1.5 1-.5 1-1.5 1c-.67 0-1.17-.17-1.5-.5m-2-3.5v3a1 1 0 1 1-2 0"
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgJavascriptTest;
