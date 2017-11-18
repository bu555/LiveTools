<template>
  <section class="swipe">
      <mt-swipe :auto="25000">
        <mt-swipe-item v-for="(item, i) in list" :key="i">
            <a :href="item.url">
                <img :src="item.src" />
                <!-- <img src="../../image/autumn03.jpg" /> -->
            </a>
        </mt-swipe-item>
      </mt-swipe>
  </section>
</template>

<script>
export default {
  props: ['list'],
  data(){
      return {
      }
  }
};
</script>

<style lang="less">
    .swipe {
        height: 180px;
        img {
            width: 100%;
            height: 100%;
            // opacity:.2;
        }
    }
</style>
