import type { SVGProps } from "react";
import * as React from "react";

const SvgFolderXcode = (props: SVGProps<SVGSVGElement>) => (
  <svg height={16} width={16} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2c-.83 0-1.5-.67-1.5-1.5V3.5c0-.55.45-1 1-1h5c.55 0 1 .45 1 1v1"
        stroke="#cdd6f4"
      />
      <path
        d="M14.59 11.761v2.09c0 .868-.699 1.566-1.567 1.566h-1.245m-2.532 0h-.401a1.563 1.563 0 0 1-1.567-1.567V9.671c0-.868.699-1.567 1.567-1.567h1.527m-1.407 5.908 2.532-4.501m-1.125 0 .83 1.477m1.543 2.743.158.281m-4.218-1.407h1.675"
        stroke="#89b4fa"
        strokeWidth={0.562_828_2}
      />
      <g strokeWidth={1.884}>
        <path
          d="M14 12 .34 25.7c-1.443 1.447-3.267-.727-1.996-2.003l13.66-13.7"
          stroke="#cdd6f4"
          transform="matrix(.28528 -.08959 .08932 .28431 8.46 8.178)"
        />
        <path
          d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5m-.408.569 3.854-4.031"
          stroke="#7f849c"
          transform="matrix(.28528 -.08959 .08932 .28431 8.46 8.178)"
        />
      </g>
    </g>
  </svg>
);
export default SvgFolderXcode;
