import { ImageRef } from "../types";

export type ListItemParams = {
  id: string;
  icon: string;
  text: string;
};

export class ListItem {
  id: string;
  icon: string;
  text: string;
  constructor({ id, icon, text }: ListItemParams) {
    this.id = id;
    this.icon = icon;
    this.text = text;
  }
}

export type GridItemParams = {
  id: number;
  image: ImageRef;
};

export class GridItem {
  id: number;
  image: ImageRef;
  constructor({ id, image }: GridItemParams) {
    this.id = id;
    this.image = image;
  }
}

export type ListControlParams = {
  id: string;
  type: string;
};

export class ListControl {
  id: string;
  type: string;
  constructor({ id, type }: ListControlParams) {
    this.id = id;
    this.type = type;
  }
}

export interface ITab {
  id: string;
  text: string;
  selected: boolean;
}
