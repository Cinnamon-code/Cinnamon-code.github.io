import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'
import userService from '../services/userService'
import { secretKey } from '../main'
import { User } from '../models/userModel'

class UserController {
  async login(req: Request, res: Response): Promise<void> {
    const { body: { username, password } } = req
    const result = await userService.login(username, password)
    if (result.length === 0) res.send({
      code: 401,
      status: false,
      msg: '用户名或密码错误，请重试。',
    })
    else {
      const userInfo: Partial<User> = result[0]
      const token = sign(userInfo, secretKey, { expiresIn: '24h' })
      res.send({
        code: 200,
        status: true,
        msg: '登录成功。',
        userInfo: {
          ...userInfo,
          root: userInfo.username === 'cinnamons',
        },
        token,
      })
    }
  }

  async register(req: Request, res: Response): Promise<void> {
    const { body } = req
    const result = await userService.register(body)
    if (result) res.send({
      code: 200,
      status: true,
      msg: '注册成功，请登录。',
    })
    else res.send({
      code: 500,
      status: false,
      msg: '注册失败，请重试。',
    })
  }

  async checkUsername(req: Request, res: Response): Promise<void> {
    const { body: { username } } = req
    const result = await userService.checkUsername(username)
    res.send({
      code: 200,
      result,
    })
  }
}

export default new UserController()
