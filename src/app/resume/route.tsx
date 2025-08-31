import { renderToBuffer } from "@react-pdf/renderer";
import { NextResponse } from "next/server";
import { Resume } from "./_components/resume";

export const dynamic = "force-static";

export async function GET() {
  const buffer = await renderToBuffer(<Resume />);

  return new NextResponse(Buffer.from(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=resume.pdf",
      "Content-Length": buffer.length.toString(),
    },
  });
}
