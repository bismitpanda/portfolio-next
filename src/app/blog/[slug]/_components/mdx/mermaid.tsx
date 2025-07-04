"use client";

import mermaid, { type MermaidConfig } from "mermaid";
import { useEffect, useId, useRef, useState } from "react";

export function Mermaid({ chart }: { chart: string }) {
  const id = useId();
  const [svgString, setSvgString] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    void renderChart();

    async function renderChart() {
      const mermaidConfig: MermaidConfig = {
        startOnLoad: false,
        securityLevel: "loose",
        fontFamily: "JetBrains Mono",
        themeCSS: "margin: 1.5rem auto 0;",
        theme: "dark",
        look: "handDrawn",
      };

      try {
        mermaid.initialize(mermaidConfig);
        const { svg } = await mermaid.render(
          id.replaceAll(":", ""),
          chart.replaceAll("\\n", "\n"),
          // biome-ignore lint/style/noNonNullAssertion: This will be set
          containerRef.current!,
        );
        setSvgString(svg);
      } catch (error) {
        throw new Error("Error while rendering mermaid", { cause: error });
      }
    }
  }, [chart, id]);

  // biome-ignore lint/security/noDangerouslySetInnerHtml: Valid use case
  return <div dangerouslySetInnerHTML={{ __html: svgString }} ref={containerRef} />;
}
