<template>
  <section class="swipe">
      <mt-swipe :auto="2000">
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
//   props: ['list'],
  data(){
      return {
          list: [
            // {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509288661&di=7ee474c89dd6b53d246c85db66b9c12b&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.tianqi.com%2Fupload%2Farticle%2F15-09-10%2FrueR_150910014817_1.jpg",url:""},
            {src:"/image/autumn02.jpg",url:""},
            {src:"../../image/autumn03.jpg",url:""},
            {src:"../../image/autumn04.jpg",url:""},
            {src:"../../image/autumn05.jpg",url:""},
        ]
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
