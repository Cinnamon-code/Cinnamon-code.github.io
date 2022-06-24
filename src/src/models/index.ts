export  type Article = {
  _id: string
  title: string,
  coverUrl: string,
  coverId: string,
  digest: string,
  content: string,
  // tags: string[],
  likes: number,
  comments: number,
  created: string,
  updated: string,
  deleted: boolean
}

export type Carousel = {
  id: string,
  url: string,
}
