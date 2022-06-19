import { Collection, MongoClient, Sort } from 'mongodb'
import config from '../config/mongodb.config'
import { ObjectID } from 'bson'

class Model<T> {
  private db: Collection<any> | undefined

  constructor(collectionName: string) {
    MongoClient.connect(config.url,
        (err, db) => {
          if (err) throw err
          this.db = db?.db(config.database).collection(collectionName)
        })
  }

  async insert(contents: T[]): Promise<{ [key: string]: ObjectID } | undefined> {
    // console.log(contents)
    return await this.db?.insertMany(contents).then(r => r.insertedIds)
  }

  async find(condition: Partial<T> = {}, projection: Partial<Record<keyof T, 0 | 1>> = {}): Promise<Partial<T>[]> {
    return await this.db?.find(condition, { projection }).toArray() as Partial<T>[]
  }

  async findTopN(condition: Partial<T> = {}, projection: Partial<Record<keyof T, 0 | 1>> = {},
                 sort: Partial<Record<keyof T, 1 | -1>> = {}, limit: number): Promise<Partial<T>[]> {
    return await this.db?.find(condition, { projection }).sort(sort as Sort).limit(limit).toArray() as Partial<T>[]
  }

  async update(condition: Partial<T> = {}, updates: { $set: Partial<T> } = { $set: {} }): Promise<boolean> {
    const count = await this.db?.updateMany(condition, updates).then(r => r.modifiedCount)
    return !!count
  }
}

export default Model
