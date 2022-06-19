import { Request, Response } from 'express'
import likeService from '../services/likeService'

class LikeController {
  async get(req: Request, res: Response) {
    const { userId, artId } = req.query
    // console.log(req.query)
    const status = await likeService.get(userId as string, artId as string)
    res.send({
      code: status ? 200 : 500,
      status,
      msg: status ? '获取成功。' : '获取失败。',
    })
  }

  async like(req: Request, res: Response) {
    const { userId, artId } = req.body
    const status = await likeService.like(userId, artId)
    res.send({
      code: status ? 200 : 500,
      status,
      msg: status ? '喜欢成功。' : '喜欢失败。',
    })
  }

  async dislike(req: Request, res: Response) {
    const { userId, artId } = req.body
    const status = await likeService.dislike(userId, artId)
    res.send({
      code: status ? 200 : 500,
      status: !status, // 取消成功返回false
      msg: status ? '取消喜欢成功。' : '取消喜欢失败。',
    })
  }
}

export default new LikeController()
