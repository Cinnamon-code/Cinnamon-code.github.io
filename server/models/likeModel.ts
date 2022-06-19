import Model from './model'
import { ObjectId } from 'bson'

export type Like = {
  _id?: string | ObjectId,
  userId: string,
  artId: string,
  delete: boolean
}

class LikeModel extends Model<Like> {
  constructor() {super('like')}
}

export default new LikeModel()
