import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import VCard from "vcard-creator";
import { user } from "@/lib/constants";

export const dynamic = "force-static";

export async function GET() {
  const photoPath = path.join(process.cwd(), "public", user.vcardPhoto);
  const photo = await readFile(photoPath);

  const card = new VCard();

  card
    .addName({ familyName: user.lastName, givenName: user.firstName })
    .addAddress({ country: user.location })
    .addPhoneNumber({ number: user.socials.phone.label, type: ["cell"] })
    .addEmail({ address: user.socials.email.label, type: ["internet"] })
    .addUrl({ url: user.socials.website.url, type: ["work"] })
    .addSocial({ url: user.socials.linkedin.url, type: "LinkedIn" })
    .addSocial({ url: user.socials.github.url, type: "GitHub" })
    .addSocial({ url: user.socials.twitter.url, type: "Twitter" })
    .addPhoto({ image: photo.toString("base64") });

  if (user.experience[0]) {
    const company = user.experience[0];
    card.addCompany({ name: company.company }).addJobtitle(company.title);
  }

  return new NextResponse(card.toString(), {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": `attachment; filename=${user.username}-vcard.vcf`,
    },
  });
}
