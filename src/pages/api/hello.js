import { pipeline } from "@xenova/transformers";

const imageToText = async (url) => {
  const captioner = await pipeline(
    "image-to-text",
    "Xenova/vit-gpt2-image-captioning"
  );
  const output = await captioner(url);

  return output?.[0]?.generated_text;
};

export default async function handler(req, res) {
  const ans = await imageToText(
    "https://pbs.twimg.com/media/GOrHYdiX0AAmn4J.jpg"
  );

  res.status(200).json({ name: ans });
}
