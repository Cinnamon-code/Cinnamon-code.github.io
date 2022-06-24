import { State } from '@/store/index'
import { Article } from '@/models'

export default {
  latestArticles(state: State) {
    return state.articles.map(v => {
      const art = v as Article
      return {
        ...art,
        title: art.title.length > 8 ? `${ art.title.substring(0, 8) }...` : art.title,
        digest: art.digest.length > 35 ? `${ art.digest.substring(0, 35) }...` : art.digest,
      }
    }).slice(0, 8)
  },
  articlesInView(state: State): (Partial<Article> & { originTitle?: string, originDigest?: string })[] {
    return state.articles.map(v => {
      const art = v as Article
      return {
        ...art,
        title: art.title.length > 20 ? `${ art.title.substring(0, 20) }...` : art.title,
        originTitle: art.title,
        digest: art.digest.length > 55 ? `${ art.digest.substring(0, 55) }...` : art.digest,
        originDigest: art.digest,
      }
    })
  },
}
