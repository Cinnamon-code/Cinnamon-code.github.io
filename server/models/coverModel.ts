import Model from './model'

export type Cover = {
  _id?: string,
  artId: string,
  url: string
}

class CoverModel extends Model<Cover> {
  constructor() {super('cover')}
}

export default new CoverModel()
