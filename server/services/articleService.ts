import articleModel, { Article } from '../models/articleModel'
import { ObjectId } from 'bson'

class ArticleService {
  async submit(contents: Article): Promise<boolean> {
    return !!await articleModel.insert([contents])
  }

  async getAll(): Promise<Partial<Article>[]> {
    return await articleModel.find()
  }

  async getLatest(): Promise<Partial<Article>[]> {
    return await articleModel.findTopN({},
        { _id: 1, title: 1, digest: 1, coverUrl: 1, likes: 1, comments: 1 }, { updated: -1 }, 8)
  }

  async get(_id: string) {
    return await articleModel.find({ _id: new ObjectId(_id) }, { coverId: 0 })
  }
}

export default new ArticleService()

