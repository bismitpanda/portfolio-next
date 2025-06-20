import * as React from "react";
import type { SVGProps } from "react";

const SvgRuff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#a6e3a1"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.958 1.5a.22.22 0 0 0-.224.217v.65c0 .12-.1.216-.224.216h-.627a.22.22 0 0 0-.224.217v1.733c0 .12-.1.217-.224.217h-.627a.22.22 0 0 0-.225.217v1.191c0 .12-.1.217-.224.217h-.627a.22.22 0 0 0-.224.217v1.191c0 .12-.1.217-.224.217h-.56a.22.22 0 0 0-.224.217v.65c0 .12.1.216.224.216h2.912a.22.22 0 0 1 .224.217v1.192c0 .12-.1.216-.224.216H5.01a.22.22 0 0 0-.224.217v1.192c0 .12-.1.216-.224.216h-.627a.22.22 0 0 0-.224.217v1.733c0 .12.1.217.224.217h1.792a.22.22 0 0 0 .224-.217v-.866h.896a.22.22 0 0 0 .224-.217v-.65c0-.12.1-.217.224-.217h.628a.22.22 0 0 0 .224-.216v-.65c0-.12.1-.217.224-.217h.627a.22.22 0 0 0 .224-.217v-.65c0-.12.1-.216.224-.216h.627a.22.22 0 0 0 .224-.217V9.3c0-.12.1-.217.224-.217h.628a.22.22 0 0 0 .224-.216v-.65c0-.12.1-.217.224-.217h.627a.22.22 0 0 0 .224-.217V6.05a.22.22 0 0 0-.224-.217h-.65a.22.22 0 0 1-.224-.216v-.65c0-.12.1-.217.224-.217h.628a.22.22 0 0 0 .224-.217v-.65c0-.12.1-.216.224-.216h.627a.22.22 0 0 0 .224-.217V1.717a.22.22 0 0 0-.224-.217Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRuff;
