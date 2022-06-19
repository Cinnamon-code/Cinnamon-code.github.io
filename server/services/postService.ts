import { Request } from 'express'
import articleModel, { Article } from '../models/articleModel'
import coverModel, { Cover } from '../models/coverModel'
import formidable, { File } from 'formidable'
import path from 'path'
import { ObjectId } from 'bson'

class PostService {
  async upload(req: Request) {
    const form = formidable({
      uploadDir: path.join(__dirname, '../public/cover'),
      keepExtensions: true,
      encoding: 'utf-8',
    })
    return await new Promise<boolean>(resolve => {
      form.parse(req, async (err, fields, files) => {
        if (!err) {
          const { newFilename } = files.cover as File // 解析出文件名
          const filepath = `/cover/${ newFilename }` // 得到文件路径
          const { title, digest, content } = fields // 解析出artId

          const article: Article = { // 构造article对象
            title: title as string, digest: digest as string, content: content as string,
            coverUrl: filepath, coverId: '', likes: 0, comments: 0,
            created: new Date(), updated: new Date(), deleted: false,
          }
          const artIds = await articleModel.insert([article]) // 插入article
          const artId = artIds ? artIds[0] : '' // 拿到artId

          // 构造cover对象
          const cover: Cover = { artId: artId as string, name: newFilename, url: filepath }
          const coverIds = await coverModel.insert([cover]) // 将cover保存
          const coverId = coverIds ? coverIds[0] : '' // 拿到coverId
          const res = await articleModel.update( // 更新art对应的cover
              { _id: new ObjectId(artId as string) },
              { $set: { coverId } },
          )
          resolve(res)
        } else resolve(false)
      })
    })
  }
}

export default new PostService()
