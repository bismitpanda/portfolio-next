import type { SVGProps } from "react";
import * as React from "react";

const SvgBrowserslist = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" stroke="#f9e2af" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.51 7.22a4.23 4.23 0 0 1-1.5-4.56 5.42 5.42 0 0 0-3.3.81A4.34 4.34 0 0 1 7.3 1.5a5.47 5.47 0 0 0-2.25 2.6 4.3 4.3 0 0 1-1.5-1.4 5.4 5.4 0 0 0-.36 3.37c-.62.07-1.24 0-2.01-.28a5.5 5.5 0 0 0 1.66 3c-.47.42-1.01.72-1.82.94.75.8 1.87 1.3 3.05 1.5a4.3 4.3 0 0 1-.96 1.78 5.45 5.45 0 0 0 3.37-.53c.22.59.31 1.2.24 2.02 1.53-.66 3.03-2.61 3.28-4.91 1.27-.21 2.06-.64 2.7-.98" />
      <path d="M14.52 8a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1m-4.5 1.34c0-.6-.36-1.27-.45-1.89-.06-.4-.15-.8-.09-1.52 0-.66.62-2.1 1.16-2.99" />
    </g>
  </svg>
);
export default SvgBrowserslist;
