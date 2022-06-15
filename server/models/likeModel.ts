import Model from './Model'

type Like = {
  _id?: string,
  userId: string,
  artId: string,
}

class LikeModel extends Model<Like> {
  constructor() {super('like')}
}
