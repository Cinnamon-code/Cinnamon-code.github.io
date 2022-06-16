import articleModel, { Article } from '../models/articleModel'

class ArticleService {
  async submit(contents: Article): Promise<boolean> {
    return await articleModel.insert([contents])
  }

  async getAll(): Promise<Partial<Article>[]> {
    return await articleModel.find()
  }
}

export default new ArticleService()

