import type { SVGProps } from "react";
import * as React from "react";

const SvgJavaClass = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13.825 10.605V5.393a1.282 1.287 0 0 0-.647-1.116l-4.53-2.605a1.307 1.313 0 0 0-1.295 0L2.822 4.277c-.4.23-.647.657-.647 1.117v5.212c0 .46.246.886.647 1.116l4.53 2.605a1.307 1.313 0 0 0 1.295 0l4.531-2.605c.4-.231.647-.657.647-1.117M8 14.5V8m0 0 5.65-3.276m-11.3 0L8 8"
      fill="none"
      stroke="#89b4fa"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgJavaClass;
