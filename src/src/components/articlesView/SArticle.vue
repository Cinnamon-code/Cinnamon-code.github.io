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
            <el-button :type="like ? 'danger' : 'info'" class="like-btn" @click="likeOrDislike">
              {{ like ? '不' : '' }}喜欢这篇文章
            </el-button>
            <s-card header="其他文章">
              <s-link v-for="o in others" :key="o._id" :to="`/articles/${o._id}`" hover-blue>{{ o.title }}</s-link>
            </s-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="s-article__comment"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Article } from '../../../types/models'
import SCard from '@/components/SCard.vue'
import SLink from '@/components/SLink.vue'
import serverConfig from '@/config/server.config'

export default Vue.extend({
  name: 'SArticle',
  components: { SLink, SCard },
  data() {
    return {
      id: this.$route.params._id,
      art: {} as Partial<Article>,
      others: [] as Partial<Article>[],
      like: false,
    }
  },
  methods: {
    formatDate(_date: string): string {
      const date = new Date(_date)
      const y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate(),
          h = date.getHours(), mm = date.getMinutes()
      return `${ y }/${ m >= 10 ? m : `0${ m }` }/${ d >= 10 ? d : `0${ d }` }
      ${ h >= 10 ? h : `0${ h }` }:${ mm >= 10 ? mm : `0${ mm }` }`
    },
    likeOrDislike() {
      const userInfo = JSON.parse(localStorage.getItem('cinnamon-info') as string)
      if (userInfo) {
        this.$http.post({
          url: `/like/${ this.like ? 'dislike' : 'like' }`,
          data: { userId: userInfo._id, artId: this.id },
        }).then(({ data }) => this.like = data.status)
      } else this.$message.error('只有登录才能喜欢这篇文章哦～')
    },
  },
  watch: {
    '$route.params': {
      handler() { this.$forceUpdate() },
      deep: true,
    },
  },
  created() {
    this.$http.get({ url: `/article/get/${ this.id }` }).then(({ data }) => {
      const { art } = data
      if (data.status) this.art = {
        ...art,
        coverUrl: `${ serverConfig.SERVER_URL }${ art.coverUrl }`,
        updated: this.formatDate(art.updated),
        created: this.formatDate(art.created),
      }
      else this.$message({
        type: 'error', message: data.msg, duration: 1500,
        onClose: () => { this.$router.push('/articles') },
      })
    })

    this.$http.get({ url: '/article/get_all' }).then(({ data }) => {
      const { articles } = data
      this.others = articles.filter((v: Partial<Article>) => v._id !== this.id).splice(0, 10)
    })

    const userInfo = JSON.parse(localStorage.getItem('cinnamon-info') as string)
    if (userInfo) this.$http.get({ url: '/like/get', params: { userId: userInfo._id, artId: this.id } })
        .then(({ data }) => this.like = data.status)
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
      border-radius: 0;
    }
  }

  .s-link {
    //margin: 15px 0;
    padding: 10px 0;
  }
}
</style>
