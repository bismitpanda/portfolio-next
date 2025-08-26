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
    .addName(user.lastName, user.firstName)
    .addAddress(user.location)
    .addPhoneNumber(user.socials.phone.label)
    .addEmail(user.socials.email.label)
    .addURL(user.socials.website.url)
    .addSocial(user.socials.linkedin.url, "LinkedIn")
    .addSocial(user.socials.github.url, "GitHub")
    .addSocial(user.socials.twitter.url, "Twitter")
    .addPhoto(photo.toString("base64"));

  if (user.experience[0]) {
    const company = user.experience[0];
    card.addCompany(company.company).addJobtitle(company.title);
  }

  return new NextResponse(card.toString(), {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": `attachment; filename=${user.username}-vcard.vcf`,
    },
  });
}
