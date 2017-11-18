<template>
   <div class="tb_list">
       <v-title :title="title"></v-title>
        <div class="mui-card" v-for="(v,i) in initData" :key="v.e_id">
            <router-link :to="{name:'todayBeforeD',params:{e_id:v.e_id} }">
                <div class="mui-card-footer">{{v.date}}</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        {{v.title}}
                    </div>
                </div>
            </router-link>
        </div>
   </div>
</template>
<script>
import Ctitle from '../common/title.vue';
    export default {
        components:{
        },
        data(){
            return{
                initData:[],
                title:"历史上的今天",
                date:""
            }
        },
        methods:{
            getData(){
                this.$http.jsonp("http://v.juhe.cn/todayOnhistory/queryEvent.php",{params:{
                    key:"d06d39435c4f8f5e77f48d09fa8d3848",
                    date:this.date,
                } }).then(function(res){
                    if(res.status == 200 && res.ok){
                        this.initData = res.body.result;
                        console.log(res);
                    }
                }
                ).catch(function(res){ });

            }
        },
        created(){
            let d = new Date();
            this.date = (d.getMonth()+1)+"/"+(d.getDate());
            this.getData();
        },
        components:{
            "v-title":Ctitle
        }
    }
</script>
<style lang="less">
    .tb_list{
        .mui-card{
            margin:5px 10px;
            .mui-card-footer{
                padding-top:8px;
                padding-bottom:3px;
                min-height:26px;
            }
            .mui-card-content-inner{
                padding-bottom:8px;
                padding-top:5px;
                font-size:16px;
            }
        }
    }

</style>