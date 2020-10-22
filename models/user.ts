import { ImageRef } from "../types";

export type ProfileParams = {
  id: number;
  name: string;
  image: ImageRef;
  items?: Array<any>;
};

export class Profile {
  id: number;
  name: string;
  image: ImageRef;
  items: Array<any>;
  constructor({ id, name, image, items = [] }: ProfileParams) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.items = items;
  }
}
