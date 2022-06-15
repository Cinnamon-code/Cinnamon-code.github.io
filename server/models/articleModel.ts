import Model from './Model'

// article表
export type Article = {
  _id?: string
  title: string,
  cover: string,
  tags: string[],
  likes: number,
  comments: number,
  content: string,
  created: Date,
  updated: Date,
  deleted: boolean
}

class ArticleModel extends Model<Article> {
  constructor() {super('article')}
}

export default new ArticleModel()
