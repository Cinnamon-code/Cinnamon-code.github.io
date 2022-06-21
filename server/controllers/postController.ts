import { Request, Response } from 'express'
import postService from '../services/postService'


class PostController {
  async upload(req: Request, res: Response) {
    // console.log(req)
    const status = await postService.upload(req)
    res.send({
      code: status ? 200 : 500,
      status,
      msg: status ? '提交成功。' : '提交失败，请重试。',
    })
  }
}

export default new PostController()
