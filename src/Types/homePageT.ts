export enum homeAT {
  FETCH_MUSIC_START = "FETCH_MUSIC_START",
  FETCH_MUSIC_SUCCESS = "FETCH_MUSIC_SUCCESS",
  FETCH_MUSIC_ERROR = "FETCH_MUSIC_ERROR",
  FETCH_MAIN_VIDEO_START = "FETCH_MAIN_VIDEO_START",
  FETCH_MAIN_VIDEO_SUCCESS = "FETCH_MAIN_VIDEO_SUCCESS",
  FETCH_MAIN_VIDEO_ERROR = "FETCH_MAIN_VIDEO_ERROR",
  FETCH_MAIN_PHOTOS_START = "FETCH_MAIN_PHOTOS_START",
  FETCH_MAIN_PHOTOS_SUCCESS = "FETCH_MAIN_PHOTOS_SUCCESS",
}

export type homeACT =
  | fetchMusicStartACT
  | fetchMusicSuccessACT
  | fetchMusicErrorACT
  | fetchMainVideoStartACT
  | fetchMainVideoSuccessACT
  | fetchMainVideoErrorACT
  | fetchMainPhotosStartACT
  | fetchMainPhotosSuccessACT;

export interface fetchMusicStartACT {
  type: homeAT.FETCH_MUSIC_START;
}

export interface fetchMusicSuccessACT {
  type: homeAT.FETCH_MUSIC_SUCCESS;
  music: string;
}

export interface fetchMusicErrorACT {
  type: homeAT.FETCH_MUSIC_ERROR;
}

export interface fetchMainVideoStartACT {
  type: homeAT.FETCH_MAIN_VIDEO_START;
}

export interface fetchMainVideoSuccessACT {
  type: homeAT.FETCH_MAIN_VIDEO_SUCCESS;
  video: string;
}

export interface fetchMainVideoErrorACT {
  type: homeAT.FETCH_MAIN_VIDEO_ERROR;
}

export interface fetchMainPhotosStartACT {
  type: homeAT.FETCH_MAIN_PHOTOS_START;
}

export interface fetchMainPhotosSuccessACT {
  type: homeAT.FETCH_MAIN_PHOTOS_SUCCESS;
  photos: Array<string>;
}
