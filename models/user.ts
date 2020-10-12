import { ImageProps } from "react-native";

export type ImageRef = ImageProps | Readonly<ImageProps>;
export type ProfileParams = { id: number; name: string; image: ImageRef };

export class Profile {
  id: number;
  name: string;
  image: ImageRef;
  constructor({ id, name, image }: ProfileParams) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}
