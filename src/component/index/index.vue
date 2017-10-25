<template>
  <article class="index">
      <v-swipe :list="lunbos"></v-swipe>
      <v-nav></v-nav>
  </article>
</template>

<script>
import Cswipe from '../common/swipe.vue';
import Cnav from './nav.vue';
import Http from '../../js/common/http.js'

export default {
  data() {
    return {
      lunbos: [
        {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509288661&di=7ee474c89dd6b53d246c85db66b9c12b&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.tianqi.com%2Fupload%2Farticle%2F15-09-10%2FrueR_150910014817_1.jpg",url:""},
        {src:"../../image/autumn02.jpg",url:""},
        {src:"../../image/autumn03.jpg",url:""},
        {src:"../../image/autumn04.jpg",url:""},
        {src:"../../image/autumn05.jpg",url:""},
      ]
    };
  },
  methods: {
    // 获取轮播图数据的方法
    getLunbos() {
      let url = 'http://139.199.192.48:8888/api/getlunbo';
      Http.get(url, body => {
        // 因为公共的轮播图使用的图片地址属性名为src，这里的图片地址名为img，所以转换一下
        this.lunbos = body.message.map(item => (item.src = item.img) && item);
        console.log(this.lunbos);
      });

    }
  },
  // 当组件初始化完毕，数据和事件都也绑定好了的时候被自动调用
  created() {
    // this.getLunbos();
  },
  components: {
    'v-swipe': Cswipe,
    'v-nav': Cnav
  }
}
</script>

<style>

</style>

