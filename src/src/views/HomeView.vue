<template>
  <div class="home">
    <div class="head-img">
      <img src="@/assets/home_bg.png" alt="head image">
    </div>
    <h1 class="title" @click="$router.push('/articles')">Articles</h1>
    <div class="arts">
      <el-row v-for="i in Math.floor(latestArticles.length / 4)"
              :gutter="25"
              :key="i">
        <el-col v-for="la in latestArticles.slice((i - 1) * 4, i * 4)"
                :key="la.id"
                :span="6">
          <el-card :body-style="{ padding: 0 }" shadow="hover">
            <img src="@/assets/art_bg_1.jpg" alt="image">
            <s-link :to="`/articles/${la.id}`">
              <h3>{{ la.title }}</h3>
            </s-link>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <h1 class="title" @click="$router.push('/gallery')">Life</h1>
    <div class="life">
      <div class="markdown-body">
        <Life></Life>
      </div>
      <el-carousel height="500px"
                   :interval="2000"
                   autoplay
                   loop
                   indicator-position="none">
        <el-carousel-item v-for="ca in carousel"
                          :name="ca.name"
                          :key="ca.id">
          <img :src="ca.url" :alt="ca.name">
        </el-carousel-item>
      </el-carousel>
    </div>
    <footer class="footer">
      <el-divider>🍞</el-divider>
      <h2>肉桂面包</h2>
      <p>关于一个爱吃肉桂面包男孩的网站。</p>
      <p>你可以从这个博客获取一些有用的，没用的，或者不管什么东西。希望能够帮到你。你也可以向我的邮箱留言，可以提建议或者寻求帮助。</p>
      <strong>邮箱：<a href="mailto:shencong2001@live.cn">shencong2001@live.cn</a></strong>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SLink from '@/components/SLink.vue'
import Life from '@/assets/life.md'
// import README from '@/assets/README.md'

type Article = {
  id: string
  title: string,
  // to: string
}

type Carousel = {
  id: string,
  name: string,
  url: string
}

export default Vue.extend({
  name: 'HomeView',
  data() {
    return {
      latestArticles: [] as Article[],
      carousel: [] as Carousel[],
    }
  },
  components: {
    SLink,
    Life,
    // README,
  },
  created() {
    this.latestArticles = [
      { id: 'abcdef', title: 'hello, blog' },
      { id: '12345', title: 'hello, blog' },
      { id: '23456', title: 'hello, blog' },
      { id: '34567', title: 'hello, blog' },
      { id: 'abcdefg', title: 'hello, blog' },
      { id: 'abcdefg', title: 'hello, blog' },
    ]

    this.carousel = [
      { id: '12345', name: '12345', url: require('@/assets/art_bg_1.jpg') },
      { id: '23456', name: '12345', url: require('@/assets/art_bg_1.jpg') },
      { id: '34567', name: '12345', url: require('@/assets/art_bg_1.jpg') },
      { id: '45678', name: '12345', url: require('@/assets/art_bg_1.jpg') },
    ]
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
  & .el-row:first-child {
    margin-bottom: 30px;
  }

  & .el-card {
    border-radius: 0;

    & h3 {
      padding: 0;
      margin: 10px 0 10px 20px;
    }
  }

  & .el-card img {
    width: 100%;
  }
}

.markdown-body {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: 10px 40px;
  margin-bottom: 30px;
}

.el-carousel {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

}

.el-carousel__item {
  text-align: center;

  & img {
    width: 100%;
  }
}

.footer {
  height: 220px;
  margin-top: 80px;
  line-height: 1.5em;

  & a {
    text-decoration: none;
    color: inherit;
    transition: color .3s;

    &:hover {
      color: #002fa7;
    }
  }
}
</style>
