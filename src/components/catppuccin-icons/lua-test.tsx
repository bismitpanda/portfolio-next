import type { SVGProps } from "react";
import * as React from "react";

const SvgLuaTest = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g fill="none" strokeLinecap="round">
      <path
        stroke="#89b4fa"
        d="m10.244 1.75-8.49 8.48c-2.36 2.36 1.18 5.9 3.54 3.54l.738-.738m5.996-6.004 1.746-1.748M9.024.5l6 6M8.5 7.5H4.504"
      />
      <g strokeLinejoin="round" strokeWidth={1.904}>
        <path
          stroke="#cdd6f4"
          strokeWidth={0.9997332800000001}
          d="M12.874 11.036a.79.79 0 0 1-.787.788.79.79 0 0 1-.788-.788.79.79 0 0 1 .788-.787.79.79 0 0 1 .787.787"
        />
        <path
          stroke="#89b4fa"
          strokeWidth={0.9997332800000001}
          d="M11.036 8.674a3.413 3.413 0 1 0 0 6.826 3.413 3.413 0 0 0 0-6.826m3.676-1.05a.788.788 0 1 0 0 1.575.788.788 0 0 0 0-1.575"
        />
      </g>
    </g>
  </svg>
);
export default SvgLuaTest;
