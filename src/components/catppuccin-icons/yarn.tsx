import type { SVGProps } from "react";
import * as React from "react";

const SvgYarn = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      strokeWidth={6.22}
    >
      <path
        d="M11.9 65.033s-1.241-16.91 11.549-24.936c0 0-8.286-12.228 0-19.036s12.645-9.145 18.736-8.634c0 0 7.247-20.251 14.643 0 0 0 9.061-7.776 7.844 17.247-.323 6.646-4.717 16.289-7.844 20.326 0 0 8.881 6.323 8.881 25.924 0 0 14.526-7.698 18.663-8.162 4.136-.463 7.724-.011 8.572 2.799s1.245 4.744-1.062 6.558c-2.308 1.813-10.589 4.258-19.484 10.194-8.894 5.936-11.77 4.105-14.208 5.576-2.438 1.472-16.058 7.342-33.033.927 0 0-15.323 4.247-14.195-6.503 0 0-10.684-12.422.938-22.28"
        transform="matrix(.1608 0 0 .16076 -.053 -.054)"
      />
      <path
        d="M27.469 94.285c-1.525-1.407.321-8.703.321-8.703s-1.252 4.723-3.116 7.525"
        transform="matrix(.1608 0 0 .16076 -.053 -.054)"
      />
    </g>
  </svg>
);
export default SvgYarn;
