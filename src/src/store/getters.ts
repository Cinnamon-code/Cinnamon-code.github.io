import { State } from '@/store/index'
import { Article } from '@/models'

export default {
  latestArticles(state: State) {
    return state.articles.map((v: Partial<Article>): Partial<Article> => ({
      ...v,
      title: v.title!.length > 8 ? `${ v.title!.substring(0, 8) }...` : v.title,
      digest: v.digest!.length > 35 ? `${ v.digest!.substring(0, 35) }...` : v.digest,
    })).slice(0, 8)
  },
  articlesInView(state: State) {
    return state.articles.map((v: Partial<Article>): Partial<Article> & { originTitle?: string, originDigest?: string } => ({
      ...v,
      title: v.title!.length > 20 ? `${ v.title!.substring(0, 20) }...` : v.title,
      originTitle: v.title,
      digest: v.digest!.length > 55 ? `${ v.digest!.substring(0, 55) }...` : v.digest,
      originDigest: v.digest,
    }))
  },
}
