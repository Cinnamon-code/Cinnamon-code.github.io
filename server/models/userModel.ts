import Model from './model'

export type User = {
  _id?: string,
  username: string,
  password?: string,
  email?: string
}

class UserModel extends Model<User> {
  constructor() {super('user')}
}

export default new UserModel()
