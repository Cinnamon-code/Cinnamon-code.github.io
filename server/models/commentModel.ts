import Model from './model'

export type Comment = {
  _id?: string
  userId: string,
  artId: string,
  content: string,
  created: Date,
  deleted: boolean
}

class CommentModel extends Model<Comment> {
  constructor() {super('comment')}
}

export default new CommentModel()
