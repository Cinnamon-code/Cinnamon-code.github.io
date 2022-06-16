import Model from './model'

export type CarouselImg = {
  _id?: string,
  url: string
}

class CarouselImgModel extends Model<CarouselImg> {
  constructor() {super('carouselImg')}
}

export default new CarouselImgModel()
