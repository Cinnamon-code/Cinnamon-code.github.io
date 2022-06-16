import Model from './model'

export type Like = {
  _id?: string,
  userId: string,
  artId: string,
}

class LikeModel extends Model<Like> {
  constructor() {super('like')}
}
