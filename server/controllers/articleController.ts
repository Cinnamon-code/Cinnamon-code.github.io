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

  async getLatest(req: Request, res: Response) {
    const results = await articleService.getLatest()
    res.send({
      code: 200,
      articles: results,
    })
  }

  async get(req: Request, res: Response) {
    const { _id } = req.params
    const result = await articleService.get(_id).then(res => res.length > 0 ? res[0] : null)
    if (result) res.send({
      code: 200,
      status: true,
      msg: '文章获取成功。',
      art: result,
    })
    else res.send({
      code: 500,
      status: false,
      msg: '文章不存在，获取失败。',
    })
  }
}

export default new ArticleController()
