"use client";

import mermaid, { type MermaidConfig } from "mermaid";
import { useEffect, useId, useRef, useState } from "react";

export function Mermaid({ chart }: { chart: string }) {
  const id = useId();
  const [svg, setSvg] = useState("");
  const containerRef = useRef<HTMLDivElement>(null!);

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
          containerRef.current,
        );
        setSvg(svg);
      } catch (error) {
        console.error("Error while rendering mermaid", error);
      }
    }
  }, [chart, id]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: svg }} />;
}
