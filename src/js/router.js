// 导入包
import VueRouter from 'vue-router';

// 导入index组件
import Cindex from '../component/index/index.vue';
// 导入news组件
import CnewsList from '../component/news/list.vue';
import CnewsDetails from '../component/news/details.vue';
// 导入photo组件
import CphotoList from '../component/photo/list.vue';
import CphotoDetails from '../component/photo/details.vue';
// 导入photo组件
import CgoodsList from '../component/goods/list.vue';
import CgoodsDetails from '../component/goods/details.vue';
// 导入shopcast组件
import CshopcartList from '../component/shopcart/list.vue';
import CshopcartOrder from '../component/shopcart/order.vue';
// 导入user组件
import CuserLogin from '../component/user/login.vue';

import CtbList from '../component/todayBefore/tb_list.vue'
import CtbDetails from '../component/todayBefore/tb_details.vue'

//http vue-rosource
import Chttp from '../component/http_demo/http_demo.vue'

//bazi
import CbaziHome from '../component/bazi/bazi_home.vue'

// 导出一个路由实例
export default new VueRouter({
    routes: [

        // 首页
        { path: '/', redirect: '/index' },
        { path: '/index', component: Cindex },

        // 新闻详细
        { path: '/news/list', component: CnewsList, name: 'newsL' },
        { path: '/news/details/:id', component: CnewsDetails, name: 'newsD' },

        // 图片分享
        { path: '/photo/list/:id', component: CphotoList, name: 'photoL' },
        { path: '/photo/details/:id', component: CphotoDetails, name: 'photoD' },
        
        // 商品购买
        { path: '/goods/list', component: CgoodsList, name: 'goodsL' },
        { path: '/goods/details/:id', component: CgoodsDetails, name: 'goodsD' },
        
        // 购物车
        { path: '/shopcart/list', component: CshopcartList, name: 'shopcartL' },
        { path: '/shopcart/order', component: CshopcartOrder, name: 'shopcartD' },

        // 用户
        { path: '/user/login', component: CuserLogin, name: 'login' },

        //历史上的今天
        { path: '/todayBefore/tb_list', component: CtbList, name: 'todayBeforeL' },
        { path: '/todayBefore/tb_details/:e_id', component: CtbDetails, name: 'todayBeforeD' },

        //http demo
        { path:'/http_demo/http_demo',component:Chttp,name:'httpD'},

        //bz
        { path:'/bazi/bazi_home',component:CbaziHome,name:'baziH'}
    ]
});
