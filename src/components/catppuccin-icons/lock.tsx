import type { SVGProps } from "react";
import * as React from "react";

const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.36 7.104c.482 0 .872.39.872.872v5.23c0 .481-.39.871-.872.871H3.639a.87.87 0 0 1-.872-.871v-5.23c0-.482.39-.872.872-.872zm-6.977 0V4.488a2.617 2.617 0 0 1 5.234 0v2.616"
      fill="none"
      stroke="#7f849c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.744}
    />
  </svg>
);
export default SvgLock;
