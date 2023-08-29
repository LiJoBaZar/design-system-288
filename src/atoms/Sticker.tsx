import Image from "next/image";

import Auricular from "../assets/stickers/Auriculares.png";
import Camera from "../assets/stickers/camera.png";
import Camera2 from "../assets/stickers/Camera2.png";
import Smartwatch from "../assets/stickers/Smart.png";


const stickers = {
  Auricular,
  Camera,
  Camera2,
  Smartwatch,
};

export type Stickers = keyof typeof stickers;

export interface StickerProps {
  sticker: Stickers | "random";
  width: number;
  height: number;
}

const getRandomSticker = () => {
  const keys = Object.keys(stickers) as Stickers[];

  return stickers[keys[(keys.length * Math.random()) << 0]];
};

export const Sticker = ({ sticker, width, height }: StickerProps) => {
  const stickerSrc = sticker === "random" ? getRandomSticker() : stickers[sticker];

  return <Image src={stickerSrc} alt="" width={width} height={height} />;
};
