import { Request, Response } from 'express'
import articleService from '../services/articleService'

class ArticleController {
  async submit(req: Request, res: Response): Promise<void> {
    const { body } = req
    // body.tags = JSON.parse(body.tags)
    const result = await articleService.submit(body)
    if (result) res.send({
      code: 200,
      msg: 'success',
    })
    else res.send({
      code: 500,
      msg: 'failed',
    })
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const results = await articleService.getAll()
    res.send({
      code: 200,
      articles: results,
    })
  }
}

export default new ArticleController()
