import type { SVGProps } from "react";
import * as React from "react";

const SvgCertificate = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4" stroke="#f9e2af" />
      <path
        d="M9.86 2.5h.89c.97 0 1.75.78 1.75 1.75v.9m0 3.72v.88c0 .97-.78 1.75-1.75 1.75m-5.5 0c-.97 0-1.75-.78-1.75-1.75v-.88m0-3.73v-.89c0-.97.78-1.75 1.75-1.75h.89"
        stroke="#f38ba8"
      />
      <path
        d="m12.5 5.14.63.62c.68.69.68 1.8 0 2.48l-.64.63M10.5 11.5V15L8 13l-2.5 2v-3.5m-2-2.64-.63-.62a1.75 1.75 0 0 1 0-2.48l.63-.62M6.13 2.5l.63-.63c.69-.68 1.8-.68 2.48 0l.62.63"
        stroke="#f38ba8"
      />
    </g>
  </svg>
);
export default SvgCertificate;
