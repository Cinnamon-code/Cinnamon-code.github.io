<template>
  <div class="articles">
    <!--        <transition name="fade">-->
    <router-view v-if="$route.params._id" :key="$route.params._id"></router-view>
    <!--        </transition>-->
    <div v-else>
      <s-filter>
        <s-filter-item condition="按时间升序"></s-filter-item>
      </s-filter>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SFilter from '@/components/filter/SFilter.vue'
import SFilterItem from '@/components/filter/SFilterItem.vue'

export default Vue.extend({
  name: 'ArticlesView',
  components: { SFilterItem, SFilter },
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
</style>
