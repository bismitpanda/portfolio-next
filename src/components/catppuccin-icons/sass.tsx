import type { SVGProps } from "react";
import * as React from "react";

const SvgSass = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.75 6.38c1.85 1.07 3.35.74 4.83-.2 1.5-.95 2.7-2.78 1.3-4.15-.7-.68-3.25-.8-5.62.19-2.36.99-4.59 3.02-4.74 4.11-.31 2.19 3.15 2.88 3.64 4.23s.28 1.98-.2 2.83c-.5.85-1.96 1.62-2.8.68-.83-.95 1.67-2.75 2.98-3.25 1.3-.5 3.1-.4 3.69.25.58.64-.07 1.79-.03 1.79"
      fill="none"
      stroke="#f5c2e7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSass;
