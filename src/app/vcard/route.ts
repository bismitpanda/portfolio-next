import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import sharp from "sharp";
import VCard from "vcard-creator";
import { user } from "@/lib/constants";

export const dynamic = "force-static";

export async function GET() {
  const card = new VCard();

  card
    .addName(user.lastName, user.firstName)
    .addAddress(user.location)
    .addPhoneNumber(user.socials.phone.label)
    .addEmail(user.socials.email.label)
    .addURL(user.socials.website.url);

  card.addSocial(user.socials.linkedin.url, "LinkedIn");
  card.addSocial(user.socials.github.url, "GitHub");
  card.addSocial(user.socials.twitter.url, "Twitter");

  const photo = await getVCardPhoto(user.avatar);
  if (photo) {
    card.addPhoto(photo.image, photo.mine);
  }

  if (user.experience.length > 0) {
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

async function getVCardPhoto(url: string) {
  try {
    const publicPath = path.join(process.cwd(), "public");
    const photoPath = path.join(publicPath, url);

    const photo = await readFile(photoPath);
    if (photo.length === 0) {
      return null;
    }

    const jpegBuffer = await convertImageToJpeg(photo);
    const image = jpegBuffer.toString("base64");

    return {
      image,
      mine: "jpeg",
    };
  } catch (error) {
    console.error("Error getting VCard photo:", error);
    return null;
  }
}

async function convertImageToJpeg(imageBuffer: Buffer): Promise<Buffer> {
  try {
    const jpegBuffer = await sharp(imageBuffer)
      .jpeg({
        quality: 90,
        progressive: true,
        mozjpeg: true,
      })
      .toBuffer();

    return jpegBuffer;
  } catch (error) {
    console.error("Error converting image to JPEG:", error);
    throw error;
  }
}
