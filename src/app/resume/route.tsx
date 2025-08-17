import { renderToBuffer } from "@react-pdf/renderer";
import { Resume } from "./_components/resume";

export const dynamic = "force-static";

export async function GET() {
  const buffer = await renderToBuffer(<Resume />);

  // @ts-expect-error This will be an error
  return new Response(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=resume.pdf",
      "Content-Length": buffer.length.toString(),
    },
  });
}
