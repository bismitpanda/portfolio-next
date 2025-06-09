import { Resume } from "./_components/resume";
import { renderToBuffer } from "@react-pdf/renderer";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const buffer = await renderToBuffer(<Resume />);

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=resume.pdf",
      "Content-Length": buffer.length.toString(),
    },
  });
}
