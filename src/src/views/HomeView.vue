<template>
  <div class="home">
    <div class="head-img">
      <img src="@/assets/home_bg.png" alt="head image">
    </div>
    <h1 class="title" @click="$router.push('/articles')">Articles</h1>
    <div class="arts">
      <div class="arts-inner" v-if="latestArticles.length !== 0">
        <el-row :gutter="30"
                v-for="i in Math.ceil(latestArticles.length / blocks)" :key="i">
          <el-col :span="24 / blocks"
                  v-for="la in latestArticles.slice((i - 1) * blocks, i * blocks)" :key="la._id">
            <el-card :body-style="{ padding: 0 }" shadow="hover">
              <div class="art-img">
                <img :src="la.coverUrl" alt="image">
              </div>
              <s-link :to="`/articles/${la._id}`">
                <h3>{{ la.title }}</h3>
                <p>{{ la.digest || '' }}</p>
              </s-link>
              <div class="like-comment">
                <span>{{ la.likes }} <span>like</span></span>
                <span>{{ la.comments }} <span>comments</span></span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <el-empty v-else description="还没有文章发布哦，催一下博主吧～"></el-empty>
    </div>
    <h1 class="title" @click="$router.push('/life')">Life</h1>
    <div class="life">
      <div class="markdown-body">
        <Life></Life>
      </div>
      <el-row :gutter="0">
        <el-col :xl="18" :lg="17" :sm="15" :xs="24">
          <el-carousel height="450px" :interval="3000" autoplay loop indicator-position="none">
            <el-carousel-item v-for="ca in carousel" :key="ca.id">
              <img :src="ca.url" alt="carousel">
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :xl="6" :lg="7" :sm="9" :xs="24">
          <s-home-form :is-login="isLogin"
                       @switch="isLogin = isLogin === 0 ? 1 : 0"
                       @login="isLogin = 2" @logout="isLogin = 0"></s-home-form>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SLink from '@/components/SLink.vue'
import Life from '@/assets/life.md'
import SHomeForm from '@/components/homeView/SHomeForm.vue'
import { Article, Carousel } from '../../types/models'
import serverConfig from '@/config/server.config'

export default Vue.extend({
  name: 'HomeView',
  data() {
    return {
      latestArticles: [] as Article[],
      carousel: [] as Carousel[],
      isLogin: 0, // 0 login, 1 register, 2 has logged in
      bodyWidth: 0,
    }
  },
  methods: {},
  computed: {
    blocks(): number {
      return this.bodyWidth <= 768 ? 2 : 4
    },
  },
  components: { SHomeForm, SLink, Life },
  created() {
    this.$http.get({ url: '/article/get_latest' }).then(({ data }) => {
      this.latestArticles = data.articles.filter((v: Partial<Article>) => !v.deleted)
          .map((v: Partial<Article>): Partial<Article> => ({
            ...v,
            title: v.title!.length > 8 ? `${ v.title!.substring(0, 8) }...` : v.title,
            digest: v.digest!.length > 35 ? `${ v.digest!.substring(0, 35) }...` : v.digest,
            coverUrl: `${ serverConfig.SERVER_URL }${ v.coverUrl }`,
          }))
    })
    this.carousel = [{ id: '12345', url: require('@/assets/home_bg.png') }]
  },
  mounted() {
    this.bodyWidth = document.body.clientWidth
    window.onresize = () => this.bodyWidth = document.body.clientWidth
  },
})
</script>

<style lang="scss" scoped>
.head-img > img {
  width: 100%;
}

.title {
  margin: 80px 0 30px 0;

  &:hover {
    cursor: pointer;
  }
}

.arts {
  .el-row:first-child {
    margin-bottom: 30px;
  }

  .el-card {
    position: relative;
    border-radius: 0;
    height: 425px;

    .art-img {
      display: flex;
      justify-content: center;
      height: 250px;
      text-align: center;
    }

    h3 {
      padding: 0;
      margin: 20px 20px;
    }

    p {
      padding: 0 20px;
    }

    .like-comment {
      position: absolute;
      right: 0;
      bottom: 15px;
      color: #c0c4cc;

      span > span {
        margin-right: 20px;
        font-weight: 500;
      }
    }
  }
}

.life {
  .markdown-body {
    margin-bottom: 30px;
  }

  .el-carousel {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .el-carousel__item {
    display: flex;
    justify-content: center;

    img {
      flex: 1;
    }
  }
}
</style>
