import type { SVGProps } from "react";
import * as React from "react";

const SvgSuperCollider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.5 4.616v6.952l5.116 2.781V7.481L3.138 5.638V9.91l1.89.971V9.122l-.455-.217m3.85 5.595V7.698L14.5 5.822v6.785l-4.086 1.24V9.524l2.161-.57v1.76l-.574.1m2.195-6.55L8.794 1.5 2.496 3.31l4.998 2.646 4.423-1.223-3.275-1.759-2.28.704 1.25.754.692-.218"
    />
  </svg>
);
export default SvgSuperCollider;
