import type { SVGProps } from "react";
import * as React from "react";

const SvgSwift = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.34 10.2c.34-1.08 1.1-5.07-4.45-8.62a.48.48 0 0 0-.6.07.44.44 0 0 0-.02.6c.03.02 2.07 2.5 1.34 5.34-1.26-.86-6.24-4.81-6.24-4.81L7.25 7.5 1.9 4.05S5.68 8.7 8 10.45c-1.12.4-3.56.82-6.78-1.18a.48.48 0 0 0-.58.06.44.44 0 0 0-.08.56c.11.18 2.7 4.36 8.14 4.36 1.5 0 2.37-.42 3.08-.77.43-.2.77-.37 1.14-.37.93 0 1.54.92 1.54.93.1.14.27.22.44.21a.46.46 0 0 0 .4-.28c.67-1.55-.49-3.2-.96-3.78h0Z"
      fill="none"
      stroke="#fab387"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSwift;
