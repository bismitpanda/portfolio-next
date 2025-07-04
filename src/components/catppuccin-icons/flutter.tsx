import type { SVGProps } from "react";
import * as React from "react";

const SvgFlutter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    height={16}
    viewBox="0 0 4.233 4.233"
    width={16}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" strokeLinecap="round" strokeWidth={0.323}>
      <path
        d="M2.146.38.422 2.115l.535.53L3.215.381ZM1.22 2.911l.528-.53.538.528-.533.534Z"
        stroke="#89dceb"
        strokeLinejoin="round"
        strokeWidth={0.264_356_119_999_999_97}
      />
      <path
        d="m1.751 2.38.534.533.929-.933-1.063-.002Z"
        stroke="#89dceb"
        strokeLinejoin="round"
        strokeWidth={0.264_356_119_999_999_97}
      />
      <path
        d="M2.285 2.913s-.531.535-.532.53c0-.006.398.398.398.398h1.064Z"
        stroke="#89b4fa"
        strokeLinejoin="round"
        strokeWidth={0.264_356_119_999_999_97}
      />
      <path
        d="m3.215 3.841-.93-.928-.532.53.398.398"
        stroke="#89b4fa"
        strokeWidth={0.264_356_119_999_999_97}
      />
    </g>
  </svg>
);
export default SvgFlutter;
