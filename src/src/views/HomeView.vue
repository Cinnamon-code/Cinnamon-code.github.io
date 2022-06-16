<template>
  <div class="home">
    <div class="head-img">
      <img src="@/assets/home_bg.png" alt="head image">
    </div>
    <h1 class="title" @click="$router.push('/articles')">Articles</h1>
    <div class="arts">
      <el-row :gutter="25"
              v-for="i in Math.floor(latestArticles.length / 4)" :key="i">
        <el-col :span="6"
                v-for="la in latestArticles.slice((i - 1) * 4, i * 4)" :key="la.id">
          <el-card :body-style="{ padding: 0 }" shadow="hover">
            <img src="@/assets/art_bg_1.jpg" alt="image">
            <s-link :to="`/articles/${la.id}`">
              <h3>{{ la.title }}</h3>
            </s-link>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <h1 class="title" @click="$router.push('/life')">Life</h1>
    <div class="life">
      <div class="markdown-body">
        <Life></Life>
      </div>
      <el-row :gutter="0">
        <el-col :xl="18" :lg="17" :sm="15" :xs="24">
          <el-carousel height="450px" :interval="3000" autoplay loop indicator-position="none">
            <el-carousel-item v-for="ca in carousel" :name="ca.name" :key="ca.id">
              <img :src="ca.url" :alt="ca.name">
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

type Article = {
  id: string
  title: string,
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
      isLogin: 0, // 0 login, 1 register, 2 has logged in
    }
  },
  methods: {},
  components: { SHomeForm, SLink, Life },
  created() {
    this.latestArticles = [
      { id: 'abcdef', title: 'hello, blog' },
      { id: '12345', title: 'hello, blog' },
      { id: '23456', title: 'hello, blog' },
      { id: '34567', title: 'hello, blog' },
      { id: 'abcdefg', title: 'hello, blog' },
      { id: 'abcdefg', title: 'hello, blog' },
    ]

    this.carousel = [{ id: '12345', name: '12345', url: require('@/assets/home_bg.png') }]
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

.life {
  .markdown-body {
    //box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding: 10px 40px;
    margin-bottom: 30px;
    border: 1px solid #EAEEF5;
    transition: box-shadow .3s;

    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }

  .el-carousel {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .el-carousel__item {
    text-align: center;

    img {
      width: 100%;
      height: 100%;
      //object-fit: none;
    }
  }
}
</style>
