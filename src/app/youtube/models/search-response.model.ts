export interface RItems {
  kind: string,
  etag: string,
  id: RId,
  snippet: RSnippet,
}

export interface RId {
  kind: string,
  videoId: string,
}


export interface RSnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: RThumbnails,
  channelTitle: string,
  liveBroadcastContent: string,
  publishTime: string,
}

export interface RThumbnails {
  default: RThumbnailItem,
  medium: RThumbnailItem,
  high: RThumbnailItem,
  standard: RThumbnailItem,
  maxres: RThumbnailItem,
}


export interface RThumbnailItem {
  url: string,
  width: number,
  height: number
}
