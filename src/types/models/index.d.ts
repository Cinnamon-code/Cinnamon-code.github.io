export declare type Article = {
  _id?: string | ObjectId
  title: string,
  coverUrl: string,
  coverId: string | ObjectId,
  digest: string,
  content: string,
  // tags: string[],
  likes: number,
  comments: number,
  created: Date,
  updated: Date,
  deleted: boolean
}

export declare type Carousel = {
  id: string,
  url: string,
}
