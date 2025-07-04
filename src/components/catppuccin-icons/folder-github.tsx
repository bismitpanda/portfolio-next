import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderGithub = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M10 14.907c-1.5.5-1.25-.657-2-.907m5 1.5v-1.062c0-.447-.238-.67-.5-.938 1.225-.134 2.5-.58 2.5-2.633 0-.534-.205-.965-.569-1.348a1.9 1.9 0 0 0-.043-1.428s-.482-.134-1.532.58a5.3 5.3 0 0 0-2.712 0c-1.05-.714-1.531-.58-1.531-.58a1.9 1.9 0 0 0-.044 1.428c-.364.383-.568.814-.569 1.348 0 2.053 1.275 2.5 2.5 2.633-.262.268-.544.58-.5.938V15.5"
        stroke="#7f849c"
      />
    </g>
  </svg>
);
export default SvgFolderGithub;
