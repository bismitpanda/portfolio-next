import type { SVGProps } from "react";
import * as React from "react";

const SvgPesde = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.449}
      d="M40.649-15.108v10.85l-9.397 5.425-9.396-5.425v-10.85l9.396-5.425z"
      transform="matrix(.68907 0 0 .69117 -13.535 14.692)"
    />
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.568 13.236V6.893H3.224"
    />
    <ellipse
      cx={6.724}
      cy={9.07}
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx={2.142}
      ry={2.147}
    />
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.427 8.34c-.733.74-2.345.733-3.221.17a2.22 2.22 0 0 1-.878-2.639 2.21 2.21 0 0 1 2.389-1.416c1.03.151 1.814 1.152 1.883 2.193H8.388"
    />
  </svg>
);
export default SvgPesde;
