import type { SVGProps } from "react";
import * as React from "react";

const SvgVala = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cba6f7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.121 8.65c-.09-3.733-.195-7.6-.195-7.6M3.178 7.59s-.184-.01-.395-.033c-1.02-.113-1.52-.573-1.638-1.506-.096-.93.19-1.86.795-2.575A8.26 8.26 0 0 1 6.533.656 7 7 0 0 1 7.921.528L8.875.5l.032 1.368c.018.753.055 11.049.088 13.62M14.873.5c-.012.034-1.502 3.55-3.01 7.6L9 15.5H6.376c0-1-.24-6.144-.255-6.85"
    />
  </svg>
);
export default SvgVala;
