import type { SVGProps } from "react";
import * as React from "react";

const SvgPdf = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.8 14.34c1.81-1.25 3.02-3.16 3.91-5.5.9-2.33 1.86-4.33 1.44-6.63-.06-.36-.57-.73-.83-.7-1.02.06-.95 1.21-.85 1.9.24 1.71 1.56 3.7 2.84 5.56 1.27 1.87 2.32 2.16 3.78 2.26.5.03 1.25-.14 1.37-.58.77-2.8-9.02-.54-12.28 2.08-.4.33-.86 1-.6 1.46.2.36.87.4 1.23.15h0Z"
      fill="none"
      stroke="#f38ba8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPdf;
