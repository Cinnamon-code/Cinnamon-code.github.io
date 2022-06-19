import userModel, { User } from '../models/userModel'

class UserService {
  async login(username: string, password: string): Promise<Partial<User>[]> {
    return await userModel.find({ username, password }, { username: 1, email: 1 })
  }

  async register(userInfo: User): Promise<boolean> {
    return !!await userModel.insert([userInfo])
  }

  async checkUsername(username: string): Promise<boolean> {
    const result = await userModel.find({username}, {_id: 0, username: 1})
    return result.length === 0
  }
}

export default new UserService()
