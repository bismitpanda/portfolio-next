import type { SVGProps } from "react";
import * as React from "react";

const SvgNextjsIconDark = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask
      height={180}
      id="nextjs_icon_dark_svg__a"
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
      width={180}
      x={0}
      y={0}
    >
      <circle cx={90} cy={90} fill="#000" r={90} />
    </mask>
    <g mask="url(#nextjs_icon_dark_svg__a)">
      <circle cx={90} cy={90} fill="#000" r={87} stroke="#fff" strokeWidth={6} />
      <path
        d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90 90 0 0 0 9.509-7.325"
        fill="url(#nextjs_icon_dark_svg__b)"
      />
      <path d="M115 54h12v72h-12z" fill="url(#nextjs_icon_dark_svg__c)" />
    </g>
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="nextjs_icon_dark_svg__b"
        x1={109}
        x2={144.5}
        y1={116.5}
        y2={160.5}
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="nextjs_icon_dark_svg__c"
        x1={121}
        x2={120.799}
        y1={54}
        y2={106.875}
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgNextjsIconDark;
