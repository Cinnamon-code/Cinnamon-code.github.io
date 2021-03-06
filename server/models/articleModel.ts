import Model from './model'
import { ObjectId } from 'bson'

// article表
export type Article = {
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

class ArticleModel extends Model<Article> {
  constructor() {super('article')}
}

export default new ArticleModel()
