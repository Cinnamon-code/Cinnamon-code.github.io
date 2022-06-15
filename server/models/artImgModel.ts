import Model from './Model'

type ArtImg = {
  _id?: string,
  artId: string,
  url: string
}

class ArtImgModel extends Model<ArtImg> {
  constructor() {super('artImg')}
}

export default new ArtImgModel()
