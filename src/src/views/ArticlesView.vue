<template>
  <div class="articles">
    <!--        <transition name="fade">-->
    <router-view v-if="$route.params._id" :key="$route.params._id"></router-view>
    <!--        </transition>-->
    <div v-else>
      <s-filter :filter="filter" :on-confirm="confirm"></s-filter>
      <el-empty v-if="$store.state.articles.length === 0" description="还没有文章发布哦，催一下博主吧～"></el-empty>
      <div v-else class="list" :style="{ gridTemplateColumns: `repeat(${rows}, 1fr)` }">
        <s-card shadow="hover" v-for="art in articles" :key="art._id" :body-style="{ padding: '15px' }">
          <template v-slot:header>
            <s-link :to="`/articles/${art._id}`" :hover="false">{{ art.title }}</s-link>
          </template>
          <p>{{ art.digest }}</p>
          <div class="art-info">
            <span class="art-info__updated">
              <span class="title">updated</span> {{ art.updated }}
            </span>
            <span class="art-info__like">
              <span class="title"><span>like</span> {{ art.likes }}</span>
              <span class="title"><span>comments</span> {{ art.comments }}</span>
            </span>
          </div>
        </s-card>
      </div>
      <el-pagination background layout="prev, pager, next" :total="filteredArticles.length"
                     hide-on-single-page @current-change="pageChange" :current-page="currentPage"></el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SFilter from '@/components/filter/SFilter.vue'
import actionTypes from '@/store/action-types'
import SLink from '@/components/SLink.vue'
import { Article } from '@/models'
import SCard from '@/components/SCard.vue'

export default Vue.extend({
  name: 'ArticlesView',
  data() {
    return {
      input: '',
      selected: 'timeDown',
      filter: {
        timeDown: '更新时间 降序', timeUp: '更新时间 升序',
        likeDown: '喜欢数 降序', likeUp: '喜欢数 升序',
        commentsDown: '评论数 降序', commentsUp: '评论数 升序',
      },
      bodyWidth: 0,
      currentPage: 1,
    }
  },
  components: { SCard, SLink, SFilter },
  methods: {
    confirm(input: string, selected: string) {
      this.input = input
      this.selected = selected
      this.currentPage = 1
    },
    pageChange(page: number) {
      this.currentPage = page
      // window.scroll({ top: 0, behavior: 'smooth' })
      window.scroll(0, 0)
    },
  },
  computed: {
    filteredArticles(): Partial<Article>[] {
      return [...this.$store.getters.articlesInView]
          .filter(art => art.originTitle.includes(this.input))
    },
    sortedArticles(): Partial<Article>[] {
      const articles = [...this.filteredArticles]
      return (this.selected === 'timeDown' ? articles :
          articles.sort((art1: Partial<Article>, art2: Partial<Article>) => {
            switch (this.selected) {
              case 'timeUp':
                return +new Date(art1.updated!) - +new Date(art2.updated!)
              case 'likeDown':
                return art2.likes! - art1.likes!
              case 'likeUp':
                return art1.likes! - art2.likes!
              case 'commentsDown':
                return art2.comments! - art1.comments!
              case 'commentsUp':
                return art1.comments! - art2.comments!
            }
            return 0
          }))
    },
    articles(): Partial<Article>[] {
      const articles = [...this.sortedArticles]
      return articles.slice((this.currentPage - 1) * 10, this.currentPage * 10)
    },
    rows(): number { return this.bodyWidth <= 768 ? 1 : 2 },
  },
  created() {
    if (this.$store.state.articles.length === 0)
      this.$store.dispatch(actionTypes.GET_ALL_ARTICLES, this.$http)
  },
  mounted() {
    this.bodyWidth = document.body.clientWidth
    window.onresize = () => this.bodyWidth = document.body.clientWidth
  },
  destroyed() { window.onresize = null },
})
</script>

<style lang="scss" scoped>
//.fade-enter, .fade-leave-to {
//  transform: translateY(-30px);
//  opacity: 0;
//}
//
//.fade-enter-active, .fade-leave-active {
//  transition: all .5s ease-in-out;
//}
//.shuffle-move {
//  transition: transform 1s;
//}
.el-empty {
  margin-top: 40px;
}

.list {
  display: grid;
  grid-gap: 30px;
  margin-top: 40px;

  .s-card {
    position: relative;
    height: 180px;
    //background: url("../assets/art_bg_1.jpg") center 60px/100% auto no-repeat;

    p {
      margin: 0;
      line-height: 1.5em;
    }

    .art-info {
      position: absolute;
      left: 15px;
      right: 15px;
      bottom: 15px;
      color: #c0c4cc;

      .art-info__updated {
        float: left;
      }

      .art-info__like {
        float: right;
      }

      .title {
        font-weight: 500;

        span {
          margin-left: 10px;
        }
      }
    }
  }
}

.el-pagination {
  padding: 0;
  margin-top: 40px;

  .btn-prev {
    margin-left: 0;
  }
}
</style>
