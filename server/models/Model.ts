import { Collection, MongoClient } from 'mongodb'
import { DATABASE } from '../config'

class Model<T> {
  private db: Collection<any> | undefined

  constructor(collectionName: string) {
    MongoClient.connect(DATABASE.url,
        (err, db) => {
          if (err) throw err
          this.db = db?.db(DATABASE.database).collection(collectionName)
        })
  }

  async insert(contents: T[]) {
    // console.log(contents)
    const count = await this.db?.insertMany(contents).then(r => r.insertedCount)
    return !!count
  }

  async find(condition: object = {}, projection: object = {}) {
    return await this.db?.find(condition, { projection }).toArray()
  }

  async update(condition: Partial<T> = {}, updates: object = { $set: {} }) {
    const count = await this.db?.updateMany(condition, updates).then(r => r.modifiedCount)
    return !!count
  }
}

export default Model
