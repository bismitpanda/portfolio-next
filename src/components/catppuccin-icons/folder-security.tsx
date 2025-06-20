import * as React from "react";
import type { SVGProps } from "react";

const SvgFolderSecurity = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <path
      fill="none"
      stroke="#cdd6f4"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
    />
    <path
      fill="none"
      stroke="#f2cdcd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.42}
      d="M7.684 7.575h.01m9.5 2.964h5.122l-3.414 6.918-3.015-4.269m2.527-5.12-3.902 7.907-10.135-5.14a2.848 2.886 0 0 1-1.269-3.863l1.347-2.758A2.848 2.886 0 0 1 8.279 2.93Zm-15.608 9.39h3.668A1.951 1.977 0 0 0 8.23 16.37l1.405-2.866m-6.829 5.93v-3.953"
      transform="matrix(-.4104 0 0 .41613 16.655 7.41)"
    />
  </svg>
);
export default SvgFolderSecurity;
