import types from '@/store/mutation-types'
import { State } from '@/store'
import { Article } from '@/models'

export default {
  [types.GOT_ALL_ARTICLES](state: State, articles: Partial<Article>[]) {
    state.articles = articles
  },
  [types.POSTED](state: State) {
    // 清空文章，当进入其他页面时重新取
    state.articles = []
  },
}
