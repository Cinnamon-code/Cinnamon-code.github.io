<template>
  <div class="articles">
    <!--    <transition name="fade">-->
    <router-view v-if="$route.params._id" :key="$route.params._id"></router-view>
    <!--    </transition>-->
    <div v-if="!$route.params._id">hello</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ArticlesView',
})
</script>

<style lang="scss" scoped>
//.fade-enter, .fade-leave-to {
//  transform: translateY(30px);
//  opacity: 0;
//}
//
//.fade-enter-active, .fade-leave-active {
//  transition: all .5s ease-in-out;
//}
</style>
