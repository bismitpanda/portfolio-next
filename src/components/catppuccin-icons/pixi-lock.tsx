import * as React from "react";
import type { SVGProps } from "react";

const SvgPixiLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#7f849c"
      d="M15 11.5c.27 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zm-4 0V10a1.5 1.5 0 0 1 3 0v1.5"
    />
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.043 4.989 9.146 9.94"
    />
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.39 3.123-.35-1.907 1.799.747 1.814-.87-.244 1.908 1.57 1.48-2.119.213-.716 1.892-.991-1.694-2.028-.213Zm4.428 5.33s-.582.495-1.057.064c-.474-.432.128-1.308.56-1.726s1.366-.95 1.787-.527c.616.62-.238 1.226-.238 1.226"
    />
    <path
      fill="none"
      stroke="#f9e2af"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.59 9.358s-1.354 1.145-1.96.632c-.607-.513.164-1.555.716-2.052.553-.498 1.71-1.129 2.205-.59.497.538-.965 2.003-.965 2.003"
    />
  </svg>
);
export default SvgPixiLock;
