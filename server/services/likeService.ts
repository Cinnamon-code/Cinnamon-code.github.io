import likeModel, { Like } from '../models/likeModel'
import { ObjectId } from 'bson'
import articleModel from '../models/articleModel'

class LikeService {
  async get(userId: string, artId: string) {
    return await likeModel.find({ userId, artId }, { delete: 1 })
        .then(res => res ? (res.length === 0 ? false : !res[0].delete) : false)
  }

  async like(userId: string, artId: string) {
    const exist = await likeModel.find({ userId, artId }, { _id: 1 })
        .then(res => res ? (res.length === 0 ? null : res[0]) : null)
    if (exist) // 如果已经存在
      await likeModel.update(
          { _id: new ObjectId(exist._id) },
          { $set: { delete: false } },
      )
    else { // 如果不存在
      const like: Like = { userId, artId, delete: false }
      await likeModel.insert([like])
          .then(res => res ? Object.keys(res).length > 0 : false)
    }
    const likes = await articleModel.find({ _id: new ObjectId(artId) }, { likes: 1 })
        .then(res => res[0].likes)
    return await articleModel.update(
        { _id: new ObjectId(artId) },
        { $set: { likes: likes as number + 1 } },
    )
  }

  async dislike(userId: string, artId: string) {
    const like = await likeModel.find({ userId, artId }, { _id: 1 })
        .then(res => res ? (res.length === 0 ? null : res[0]) : null)
    await likeModel.update(
        { _id: new ObjectId(like?._id) },
        { $set: { delete: true } },
    )
    const likes = await articleModel.find({ _id: new ObjectId(artId) }, { likes: 1 })
        .then(res => res[0].likes)
    return await articleModel.update({ _id: new ObjectId(artId) }, { $set: { likes: likes as number - 1 } })
  }
}

export default new LikeService()
