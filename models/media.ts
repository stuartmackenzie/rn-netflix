import { ImageProps } from "react-native";
import { AVPlaybackNativeSource } from "expo-av";

export type ImageRef = ImageProps | Readonly<ImageProps>;
export type MediaParams = {
  id: number;
  title: string;
  release: string;
  tags: Array<string>;
  titleImage: ImageRef;
  bg: ImageRef;
  videoUri: string;
  text: string;
};

export class Media {
  id: number;
  title: string;
  release: string;
  tags: Array<string> = [];
  titleImage: ImageRef;
  bg: ImageRef;
  videoUri: string;
  text: string;
  constructor({
    id,
    title,
    release,
    tags,
    titleImage,
    bg,
    videoUri,
    text
  }: MediaParams) {
    this.id = id;
    this.title = title;
    this.release = release;
    this.tags = tags;
    this.titleImage = titleImage;
    this.release = release;
    this.bg = bg;
    this.videoUri = videoUri;
    this.text = text;
  }
}

export type ClipParams = {
  id: number;
  title: string;
  video: AVPlaybackNativeSource;
  poster: ImageRef;
};

export class Clip {
  id: number;
  title: string;
  video: AVPlaybackNativeSource;
  poster: ImageRef;

  constructor({ id, title, video, poster }: ClipParams) {
    this.id = id;
    this.title = title;
    this.video = video;
    this.poster = poster;
  }
}

export type SearchMediaItemParams = {
  id: number;
  title: string;
  image: ImageRef;
};

export class SearchMediaItem {
  id: number;
  title: string;
  image: ImageRef;

  constructor({ id, title, image }: SearchMediaItemParams) {
    this.id = id;
    this.title = title;
    this.image = image;
  }
}

export type MediaDownloadItemParams = {
  id: string;
  title: string;
  text: string | null;
  image: ImageRef;
  status: string | null;
};

export class MediaDownloadItem {
  id: string;
  title: string;
  text: string | null;
  image: ImageRef;
  status: string | null;

  constructor({ id, title, text, image, status }: MediaDownloadItemParams) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.image = image;
    this.status = status;
  }
}

export interface IEpisode {
  id: string;
  ep: number;
  season: number;
  image: ImageRef;
  imageUri: string;
  progress: number;
  videoUri: string;
  title: string;
  synopsis: string;
  duration: number;
  imagePath: string;
}

export interface ITrailer {
  id: string;
  image: ImageRef;
  imageUri: string;
  videoUri: string;
  title: string;
}
