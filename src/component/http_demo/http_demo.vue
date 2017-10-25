<template>
    <div class="vue-r">
        <h4>vue-resoure demo</h4>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    data(){
        return{
            apiUrl:'',
            initData:[],
        }
    },
    methods: {
        sendHttp(){
            //vue-resource:12kb IE9以上 支持拦截器 （1.下包-2.引入-3.use）
            //方式一：全局Vue对象使用Vue.http.get(url,[options]).then(successCallback,errorCallback).catch(callback);
            //方式二：Vue实例调用 vm.$http.post(url,[body],[options]).then(successCallback,errorCallback).catch(callback);
            //跨域时设置请求时是否带上凭证: Vue.http.options.xhr = { withCredentials: true }; 
            Vue.http.jsonp('http://v.juhe.cn/todayOnhistory/queryEvent.php', 
                {   
                    params:{key:"d06d39435c4f8f5e77f48d09fa8d3848",date:"4/30"}, //url参数
                    //body:{},  //POST的请求体:object,FormData,string格式
                    //headers:{}, //请求头
                    //timeout:10000, //超时时间(ms)
                    //before:function(request){ console.log(request)}, //发送前的处理函数
                    //progress:function(event){},//progressEvent回调处理函数
                    //credentials:true, //跨域请求时是否使用凭证
                    //emulateJSON:true, //将request body以application/x-www-form-urlencoded content type发送  Vue.http.options.emulateJSON = true; 
                }
            ).then(res=>{    //成功函数 successCallback
                        if(res.status==200&&res.ok){
                            this.$set('initData',res.body.result);
                            console.log(res);
                            // response.text(); //以字符串形式返回response body
                            // response.json(); //以JSON形式返回response body
                            // response.blob(); //以二进制形式返回response body
                            // response.ok;     //响应的HTTP状态码为200-299之间时，该属性为true
                            // response.status; //响应的HTTP状态码
                            // response.headers; //响应头object
                        }
                    },res=>{ 
                        //失败函数  errorCallback --只在响应失败时调用 
                }).catch(res=>{});  //catchCallback --整个响应过程出错就会调用 
                
            //interceptors拦截器：发送前、后的公共行为统一在main设置
            //流程：发送请求前→interceptors→处理请求→发送请求后(接收响应)→interceptors→成功回调|失败回调
            //如：  Vue.http.interceptors.push((request, next) => {  
                //     var tokens = localStorage.getItem('token');  
                //     request.headers.set('Authorization', tokens);  
                //     help.showLoading = true;  
                //     next((response) => {  
                //         help.showLoading = false;  
                //         return response  
                //     })  
                // })  

        }
    },
    created(){
        this.sendHttp();
    }
}
</script>
<style>

</style>


