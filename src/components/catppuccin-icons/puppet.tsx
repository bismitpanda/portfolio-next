import type { SVGProps } from "react";
import * as React from "react";

const SvgPuppet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.311.5H7.04v3.729H3.311zm0 11.271H7.04V15.5H3.311zm5.648-5.636h3.729v3.729H8.959zm-2.02-2.018 2.056 2.056m-2.057 5.734L8.995 9.85"
    />
  </svg>
);
export default SvgPuppet;
