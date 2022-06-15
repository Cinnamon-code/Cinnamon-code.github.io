import Model from './Model'

type Cover = {
  _id?: string,
  artId: string,
  url: string
}

class CoverModel extends Model<Cover> {
  constructor() {super('cover')}
}

export default new CoverModel()
