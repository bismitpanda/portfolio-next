// biome-ignore-all lint/style/noNonNullAssertion: This is ok

import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import { allBlogs } from "../.content-collections/generated";

async function main() {
  const blogFilePath = process.argv[2]!;

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error("Error: OPENROUTER_API_KEY environment variable is required");
    process.exit(1);
  }

  try {
    const blog = allBlogs.find((blog) => blog._meta.filePath === blogFilePath);

    if (!blog) {
      throw new Error(`Blog not found: ${blogFilePath}`);
    }

    const { title, excerpt, tags, slug } = blog;

    const prompt = `Create an abstract, premium, and structural hero image for a technical blog post. The design must emulate the aesthetic of a high-end, contemporary **abstract data plaque or contact card**.

**I. Core Specifications & Constraints**

* **Aspect Ratio:** The image will be square (1:1), but it will be cropped to 2:1 by removing equal portions from the top and bottom. **CRITICAL:** All important visual elements must be **centered horizontally** in the middle horizontal band. Place primary content in the center 60% of the vertical space. The top 20% and bottom 20% will be cropped away, so ensure no critical content appears in these areas.
* **Text Constraint:** **STRICTLY NO TEXT.** The image must be purely visual.
* **Aesthetic Goal:** Modern, minimalist, sophisticated, and professional. The result should look like abstract, corporate branding—not an illustration, diagram, or stock photo.
* **Composition Rule:** Since the image will be cropped to 2:1 (wider than tall), design with a **horizontal emphasis**. Place all primary visual elements (geometric shapes, lines, focal points) in the **center horizontal band** (middle 60% vertically). Use the top and bottom areas only for background gradients or subtle atmospheric elements that can be safely removed.

**II. Dynamic Inputs (Placeholder References)**

* **Title/Concept:** [Title: A string describing the core topic, e.g., 'Generate Beautiful Resumes with React PDF and Next.js']
* **Tags/Keywords:** [Tags: A list of key technical terms, e.g., 'TypeScript, Next.js, React, PDF generation']

**III. Visual Theme and Color Palette**

* **Theme:** **Dark Theme** (Deep charcoal gray, black, or very dark navy background).
* **Monochromatic Base:** The primary elements (lines, shapes) must be rendered in **high-contrast white or light gray**.
* **Accent Color (Optional):** Use one single, extremely subtle accent color (e.g., a faint thin line, a soft glow, or a recessed shadow) to provide visual depth or reference a specific technology from the tags (e.g., a specific shade of React blue or Next.js purple).

**IV. Abstract Composition and Symbolism**

* **Structure:** Create a sense of structured hierarchy using precise geometric forms (rectangles, squares, thin lines) slightly offset or layered, emulating the look of a premium ID card or data array.
* **Symbolism of the Title/Concept:** Abstractly represent the relationship between the technical input (Code/React) and the professional output (Resume/PDF) using abstract visual metaphors:
    * **POSITIVE EXAMPLE (Abstract Flow):** A grid or series of thin, broken lines on the left seamlessly merging into a singular, solid, structured rectangle on the right, using a single elegant dividing line or implied arrow for flow.
    * **NEGATIVE EXAMPLE (Avoid):** Do not use literal icons (like a folder image or a specific logo). Do not use curly braces \`{}\` or code snippets that look like actual programming.
* **Symbolism of the Tags/Keywords:** Integrate subtle visual cues related to the keywords:
    * **POSITIVE EXAMPLE (Geometric Tagging):** Use tiny, sharp geometric shapes (triangles, dots) arranged in a sequence or pattern along the border of the central "card" to suggest categorization or tagging.
    * **NEGATIVE EXAMPLE (Avoid):** Do not write the keywords out. Do not use complex, organic, or overly decorative shapes.

**V. Lighting and Texture**

* **Lighting:** Flat, subtle lighting with a focus on crisp edges and defined shadows to emphasize depth and structure.
* **Texture:** Minimal, almost imperceptible texture (e.g., a faint brushed metal or matte finish) to enhance the premium feel.

**VI. Final Output Check**

The final image must be clean, highly structured, visually impactful, and maintain the aesthetic of a high-end, abstract design piece suitable for a sophisticated technical audience.

**Content:**
Title: ${title}
Excerpt: ${excerpt}
Key Topics: ${tags.join(", ") || "Technical blog post"}

**Visual Elements:**
- Incorporate subtle visual metaphors related to the topic (e.g., code brackets for programming, geometric shapes for design concepts)
- Use negative space effectively
- Consider a subtle icon or symbol related to the main technology/topic
- Maintain visual hierarchy: title prominence > supporting elements
`;

    const outputPath = join(
      process.cwd(),
      "public",
      "images",
      "blogs",
      `${slug}.png`,
    );

    console.log(`\nTitle: ${title}`);
    console.log(`Tags: ${tags.join(", ") || "None"}`);
    console.log(`Output: ${outputPath}\n`);

    console.log("Generating image with GPT-5 Image...");
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "https://bismitpanda.com",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-5-image",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          modalities: ["image", "text"],
        }),
      },
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API error: ${response.status} ${error}`);
    }

    const data = await response.json();
    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!imageUrl) {
      console.error("Response:", JSON.stringify(data, null, 2));
      throw new Error("No image URL in response");
    }

    console.log("Image generated! Downloading...");

    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error(`Failed to download: ${imageResponse.statusText}`);
    }

    const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
    const outputDir = join(outputPath, "..");
    await mkdir(outputDir, { recursive: true });

    console.log("Cropping image to 16:9 aspect ratio...");

    const image = sharp(imageBuffer);
    const metadata = await image.metadata();
    const { width = 1024, height = 1024 } = metadata;

    const targetAspectRatio = 16 / 9;
    const targetWidth = width;
    const targetHeight = Math.round(width / targetAspectRatio);

    const cropTop = Math.round((height - targetHeight) / 2);

    const croppedBuffer = await image
      .extract({
        left: 0,
        top: cropTop,
        width: targetWidth,
        height: targetHeight,
      })
      .toBuffer();

    await writeFile(outputPath, croppedBuffer);

    console.log(`✅ Saved to: ${outputPath}`);
    console.log(
      `   Original: ${width}x${height} → Cropped: ${targetWidth}x${targetHeight} (16:9)`,
    );
  } catch (error) {
    console.error("\nError:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

void main();
