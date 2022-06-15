import articleModel, { Article } from '../models/articleModel'

class ArticleService {
  async submit(contents: Article[]) {
    return await articleModel.insert(contents)
  }

  async getAll() {
    return await articleModel.find()
  }
}

export default new ArticleService()

