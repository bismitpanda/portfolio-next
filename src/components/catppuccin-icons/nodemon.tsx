import type { SVGProps } from "react";
import * as React from "react";

const SvgNodemon = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m14.17 5.79-.67-.29c.64-.84.98-2.12.5-4 0 0-.94 2.79-3.11 2.7L8.35 2.57a.7.7 0 0 0-.32-.08h-.05a.74.74 0 0 0-.32.08L5.12 4.2c-2.17.09-3.08-2.7-3.08-2.7-.48 1.88-.18 3.15.46 3.99l-.66.29a.6.6 0 0 0-.34.53l.01 7.88c0 .1.07.2.18.26.1.05.23.05.33 0l3.64-1.82a.6.6 0 0 0 .34-.52V8.34a.6.6 0 0 1 .34-.53l1.32-.73a.74.74 0 0 1 .69 0l1.3.73c.22.11.35.31.35.53v3.78c0 .21.13.41.34.52L14 14.46c.11.05.24.05.35 0a.3.3 0 0 0 .17-.26V6.32a.6.6 0 0 0-.34-.53"
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgNodemon;
