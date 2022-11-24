export interface IItems {
  kind: string,
  etag: string,
  id: string,
  snippet: ISnipet,
  statistics: IStatistics
}

export interface ISnipet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IThumbnails,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: Ilocalized,
}

export interface IStatistics {
  viewCount: string,
  likeCount: string,
  favoriteCount: string,
  commentCount: string
}

export interface IThumbnails {
  default: IThumbnailItem,
  medium: IThumbnailItem,
  high: IThumbnailItem,
  standard: IThumbnailItem,
  maxres: IThumbnailItem,
}

export interface Ilocalized {
  title: string,
  description: string,
}

export interface IThumbnailItem {
  url: string,
  width: number,
  height: number
}
