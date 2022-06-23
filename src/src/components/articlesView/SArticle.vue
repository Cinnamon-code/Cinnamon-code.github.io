<template>
  <div class="s-article">
    <div class="s-article__cover">
      <img :src="art.coverUrl" alt="cover">
    </div>
    <div class="s-article__title">
      <h1>{{ art.title }}</h1>
      <span class="option"><span>updated</span>{{ art.updated }}</span>
      <span class="option"><span>created</span>{{ art.created }}</span>
      <span class="option"><span>like</span>{{ art.likes }}</span>
      <span class="option"><span>comments</span>{{ art.comments }}</span>
    </div>
    <div class="s-article__body">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="24" :xl="18" :lg="18">
          <p>{{ art.digest }}</p>
          <el-divider></el-divider>
          <p v-html="art.content"></p>
        </el-col>
        <el-col :xs="24" :sm="24" :xl="6" :lg="6">
          <div class="side">
            <s-button type="danger" :plain="!like" class="like-btn" @click="likeOrDislike">
              {{ like ? '不' : '' }}喜欢这篇文章
            </s-button>
            <el-card header="其他文章" shadow="hover">
              <s-link v-for="o in others" :key="o._id" :to="`/articles/${o._id}`">{{ o.title }}</s-link>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="s-article__comment"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Article } from '@/models'
import SCard from '@/components/SCard.vue'
import SLink from '@/components/SLink.vue'
import actionTypes from '@/store/action-types'
import SButton from '@/components/SButton.vue'

export default Vue.extend({
  name: 'SArticle',
  components: { SButton, SLink },
  data() {
    return {
      id: this.$route.params._id,
      like: false,
    }
  },
  methods: {
    likeOrDislike() {
      this.$store.dispatch(actionTypes.LIKE_OR_DISLIKE, {
        like: this.like,
        $http: this.$http,
        artId: this.id,
        $message: this.$message,
        callback: (status: boolean) => this.like = status,
      })
    },
  },
  created() {
    if (this.$store.state.articles.length === 0) // 如果未缓存
      this.$store.dispatch(actionTypes.GET_ALL_ARTICLES, this.$http)
    this.$store.dispatch(actionTypes.IS_LIKE, {
      $http: this.$http,
      artId: this.id,
      callback: (status: boolean) => this.like = status,
    })
  },
  computed: {
    art(): Partial<Article> {
      const arts = this.$store.state.articles.filter((art: Article) => art._id === this.id)
      if (arts.length === 0) return {}
      return arts[0]
    },
    others(): Partial<Article>[] {
      return this.$store.state.articles
          .filter((v: Partial<Article>) => v._id !== this.id)
          .splice(0, 10)
    },
  },
})
</script>

<style lang="scss" scoped>
.s-article__cover {
  display: flex;
  justify-content: center;
  height: 500px;
}

.s-article__title {
  margin-top: 60px;

  h1 {
    font-size: 45px;
    margin-bottom: 15px;
  }

  .option {
    color: #c0c4cc;
    margin-right: 25px;

    span {
      font-weight: 500;
      margin: 0 10px 0 0;
    }
  }
}

.s-article__body {
  margin-top: 40px;
  //font-size: 1.15em;

  .side {
    position: sticky;
    top: 500px;

    .like-btn {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  .s-link {
    //margin: 15px 0;
    padding: 10px 0;
  }
}
</style>
