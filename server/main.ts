import express, { NextFunction, Request, Response } from 'express'
import router from './routes'
import path from 'path'

const app = express()

app.use(express.static(path.join(__dirname, './public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', router)

// 若无匹配业务路由，则匹配 404 路由，代表访问路径不存在
app.use(notFound)
/** 若前面的路由抛错，则封装为错误响应返回
 * 错误响应格式为
 * {
 *   error: message
 * }
 */
app.use(errorHandler)

function notFound(req: Request, res: Response) {
  res.status(404)
  res.send({
    error: 'not found',
  })
}

function errorHandler(err: any, req: Request, res: Response, next?: NextFunction) {
  // 抛出的错误可以附带 status 字段，代表 http 状态码
  // 若没有提供，则默认状态码为 500，代表服务器内部错误
  res.status(err.status || 500)
  res.send({ error: err.message })
}

app.listen(8000, () => {
  console.log('started')
})
