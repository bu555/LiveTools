<template>
   <div class="bazi_home">
       <v-title :title="title"></v-title>  
       <!-- <Icon class="mv-icon-reduce"></Icon> -->
        <div class="calendar-view">
            <div class="item">
                <div></div>
                <div>生肖</div>
                <div>月</div>
                <div>日</div>
                <div>干支</div>
                <div>干支</div>
                <div>干支</div>
                <div>week</div>
                <div>term</div>
            </div>
            <div class="item">
                <div>solarLunar</div>
                <div> {{this.solarLunarInfo.lYear}} {{this.solarLunarInfo.animal}}</div>
                <div>{{this.solarLunarInfo.lMonth}}{{this.solarLunarInfo.isLeap ?'闰':''}}</div>
                <div>{{this.solarLunarInfo.lDay}} {{this.solarLunarInfo.term}}</div>
                <div>{{this.solarLunarInfo.gzYear}}</div>
                <div>{{this.solarLunarInfo.gzMonth}}</div>
                <div>{{this.solarLunarInfo.gzDay}}</div>
                <div>{{this.solarLunarInfo.ncWeek}}</div>
            </div>
            <div class="item">
                <div>LunarCalendar</div>
                <div> {{this.LunarCalendarInfo.lunarYear}} {{this.LunarCalendarInfo.zodiac}}</div>
                <div> {{this.LunarCalendarInfo.lunarMonth}}</div>
                <div> {{this.LunarCalendarInfo.lunarDay}} {{this.LunarCalendarInfo.term}}</div>
                <div> {{this.LunarCalendarInfo.GanZhiYear}}</div>
                <div> {{this.LunarCalendarInfo.GanZhiMonth}}</div>
                <div> {{this.LunarCalendarInfo.GanZhiDay}}</div>
                <div> {{this.LunarCalendarInfo.worktime}}</div>
            </div>
            <div class="item">
                <div>LunarSolarConverter</div>
                <div>{{this.lunar1.lunarYear}}</div>
                <div>{{this.lunar1.lunarMonth}}</div>
                <div>{{this.lunar1.lunarDay}}</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="info-box">

          <div class="input-box text-box" style="display:flex;line-height:40px">
            <input type="text" name="year" v-model="year"><span style="padding:0 4px">年</span> 
            <input type="text" name="month"  v-model="month"><span style="padding:0 4px">月</span>  
            <input type="text" name="day"  v-model="day"><span style="padding:0 4px">日</span>  
            <input type="text" name="hour"  v-model="hour"><span style="padding:0 4px">时</span>  
          </div>
          <div class="input-box input-radio-box" style="display:flex;">
            <label for="radio1"> 男 </label>
            <input type="radio" name="sex" id="radio1" checked value="1">
            <label for="radio0"> 女 </label>
            <input type="radio" name="sex" id="radio0"value="0">
          </div>

            <mu-raised-button label="确 定" @click="confirmBtn" class="demo-raised-button" primary/>
            <mu-raised-button label="保 存" @click="saveBtn" class="demo-raised-button" primary/>
            <mu-raised-button label="getAll" @click="getBtn" class="demo-raised-button" primary/>
            <mu-raised-button label="删除" @click="delBtn" class="demo-raised-button" primary/>
            
        </div>
        <div class="bz-view" style="display:none">
            <div class="gan">
                <div></div>
                <div class="zi">{{bzInfo.sizhu.sGan.zi}}<span class="ss-text">{{bzInfo.sizhu.sGan.shishen}}</span></div>
                <div class="zi">{{bzInfo.sizhu.rGan.zi}}<span class="riyuan">{{bzInfo.sizhu.rGan.shishen}}</span></div>
                <div class="zi">{{bzInfo.sizhu.yGan.zi}}<span class="ss-text">{{bzInfo.sizhu.yGan.shishen}}</span></div>
                <div class="zi">{{bzInfo.sizhu.nGan.zi}}<span class="ss-text">{{bzInfo.sizhu.nGan.shishen}}</span></div>
                <div class="zi">{{dyGan.zi}}<span class="ss-text">{{dyGan.shishen}}</span></div>
                <div class="zi">{{lnGan.zi}}<span class="ss-text">{{lnGan.shishen}}</span></div>
            </div>
            <div class="zhi">
                <div></div>
                <div class="zi">{{bzInfo.sizhu.sZhi.zi}}<span class="ss-text">{{bzInfo.sizhu.sZhi.shishen}}</span></div>
                <div class="zi">{{bzInfo.sizhu.rZhi.zi}}<span class="ss-text">{{bzInfo.sizhu.rZhi.shishen}}</span></div>
                <div class="zi">{{bzInfo.sizhu.yZhi.zi}}<span class="ss-text">{{bzInfo.sizhu.yZhi.shishen}}</span></div>
                <div class="zi">{{bzInfo.sizhu.nZhi.zi}}<span class="ss-text">{{bzInfo.sizhu.nZhi.shishen}}</span></div>
                <div class="zi">{{dyZhi.zi}}<span class="ss-text">{{dyZhi.shishen}}</span></div>
                <div class="zi">{{lnZhi.zi}}<span class="ss-text">{{lnZhi.shishen}}</span></div>
            </div>
            <div class="dayun-box">
                <div class="sui">
                    <div class="dayun-title">歲</div>
                    <div v-for="(v,i) in bzInfo.dayunAndLiunian.slice(0,-1)" :key="i">{{v.liunian[0].sui}}</div>
                </div>
                <div class="year">
                    <div class="dayun-title">年</div>
                    <div v-for="(v,i) in bzInfo.dayunAndLiunian.slice(0,-1)" :key="i">{{v.liunian[0].year}}</div>
                </div>
                <div class="dayun">
                    <div class="dayun-title">大運</div>
                    <div  v-for="(v,i) in bzInfo.dayunAndLiunian.slice(0,-1)" v-on:click="changeDayun(v.liunian[0].year,$event)" :key="i" ref="dayunItem">{{v.dayun}} </div>
                </div>
            </div>
            <div class="liunian-box">
                <div class="sui">
                    <div class="dayun-title">歲</div>
                    <div v-for="(v,i) in liunianActiveObj.liunian" :key="i">{{v.sui}}</div>
                </div>
                <div class="year">
                    <div class="dayun-title">年</div>
                    <div v-for="(v,i) in liunianActiveObj.liunian" :key="i">{{v.year}}</div>
                </div>
                <div class="dayun">
                    <div class="dayun-title">流年</div>
                    <div v-for="(v,i) in liunianActiveObj.liunian" :key="i" ref="liunianItem" @click="changeLiunian(v.year)">{{v.nian}}</div>
                </div>
            </div>
        </div>
   </div>
</template>
<script>
 /**
 * Author: buzhiguang
 * Date: 2017-10-7
 */
import {
  Lunar,
  Solar,
  LunarSolarConverter
} from "../../js/tools/calendar/LunarSolarConverter.js";  //农历、公历互转
import Ctitle from "../common/title.vue";
import solarLunar from "../../js/tools/calendar/solarLunar/solarLunar.js"; //1900年至2100年公历、农历互转
import {BZ,cangGan }from "../../js/tools/calendar/calcBZ.js"; //计算bz
import {isLeapYear,getYearTerm,lunarToSolar,solarToLunar,getTerm} from "../../js/tools/calendar/LunarCalendar.js";  //1891-2100年计算日历的插件
export default {
  data() {
    return {
      title: "bz", //标题

      year: 0, //年
      month: 0, //月
      day: 0, //日
      hour: 0, //时
      dateInfo: null, //存储所有日期信息
      bzInfo: null, //存储所有bz信息

      //按year更新的动态的liunian数组
      liunianActiveObj: {},
      activeLiuNian:"",//当前流年
      activeDaYun:"", //当前大运
      lnGan:{zi:"",shishen:""},
      lnZhi:{zi:"",shishen:"",canggan:""},
      dyGan:{zi:"",shishen:""},
      dyZhi:{zi:"",shishen:"",canggan:""},
      sex:0,

      solarLunarInfo:null, //solarLunar插件计算的信息
      lunar1:null, //LunarSolarConverter计算的信息
      LunarCalendarInfo:null, //LunarCalendar计算的信息
    };
  },
  computed: {},
  methods: {
    delBtn(){
        this.$http.post("http://localhost:8889/api/user/del",{_id:"5a0bde609ec70af4382c9e0a"},{
         headers:{'content-type':'application/x-www-form-urlencoded' },
         emulateJSON:true,
       }).then(res=>{
          console.log(res)
        });
    },
    getBtn(){
       this.$http.get("http://localhost:8889/api/goods/list").then(res=>{
         console.log(res);
       });
    },
    saveBtn(){
      //  this.$http.get("http://localhost:8889/api/goods/list").then(res=>{
      //    console.log(res);{name:"yinz",info:"2012-5-5 17:55"}
      //  });
       this.$http.post("http://localhost:8889/api/goods/add",{name:"bzm",info:"2017-5-7 17:57"},{
         headers:{'content-type':'application/x-www-form-urlencoded' },
         emulateJSON:true,
       }).then(res=>{
         console.log(res);
       });
    },
    //新日期后点击确定按钮
    confirmBtn(){
      this.calc(); //计算bz信息
      this.calcLiuNianArr(2017); //计算当前年份所属流年
      var _this = this;
      setTimeout(function(){
        _this.activeRed();
      },7)
    },
    //点击或改变大运  更新动态大运，更新页面流年数组,并将当前标红
    changeDayun(year,event){
        var index = this.calcLiuNianArr(year); //更新页面流年数组，同时返回所在this.bzInfo.dayunAndLiunian索引
        var _this = this;
        setTimeout(function(){
          _this.activeRed();
        },7);
    },
    //点击或改变流年  更新动态流年，并且将当前流年标红色
    changeLiunian(year){
      var _this = this;
        this.liunianActiveObj.liunian.forEach(function(v,i){
          if(v.year == year){
            _this.$refs.liunianItem.forEach(function(v,j){
                v.classList.remove("active-red");
            });
            _this.activeLiuNian = v.nian; //更新动态流年
            _this.$refs.liunianItem[i].classList.add("active-red");
          }
        })
        setTimeout(function(){ //休眠，待数据渲染到页面后执行
            _this.setBzColor();
        },15);
      this.getShiShen();//更新十神
      return -1;
    },
    //根据年份，计算要显示的流年数组
    calcLiuNianArr(year){
        var _this = this;
        var index = -1;
        this.bzInfo.dayunAndLiunian.forEach(function(v,i){
          v.liunian.forEach(function(v,j){
              if(v.year == year){
                var len = _this.bzInfo.dayunAndLiunian[i].liunian.length;
                if(len==10){
                    _this.liunianActiveObj = _this.bzInfo.dayunAndLiunian[i];
                }else{
                  for(var k=0;k<(10-len);k++){
                    _this.bzInfo.dayunAndLiunian[i].liunian.push({});
                    }
                    _this.liunianActiveObj = _this.bzInfo.dayunAndLiunian[i];
                }
                index = i;
              }
          })
        });
        return index;
    },
    //对大运和流年标示红色（注：Dom渲染完成后才可调用）
    activeRed(){
        var _this = this;
      // 判断流年是否存在当前年份，如是将其标红，如不是将第一个标红
        var nowYear = new Date().getFullYear();
        var flag = false; //假设当前年不存在这个流年数组
        this.liunianActiveObj.liunian.forEach(function(v,i){
          if(v.year == nowYear){
            _this.$refs.liunianItem.forEach(function(v,j){
              v.classList.remove("active-red");
              });
              _this.$refs.liunianItem[i].classList.add("active-red");
              _this.activeLiuNian = _this.$refs.liunianItem[i].innerHTML.trim(); //流年变动
              flag = true;
            }
        })
        //如果不存在就将首个流年标红
        if(!flag){
              this.$refs.liunianItem.forEach(function(v,j){
                  v.classList.remove("active-red");
              });

            this.$refs.liunianItem[0].classList.add("active-red");
            this.activeLiuNian = this.$refs.liunianItem[0].innerHTML.trim(); //流年变动
        }
        //将大运标红
        this.$refs.dayunItem.forEach(function(v,i){
            if((v.innerHTML.trim()) == _this.liunianActiveObj.dayun){
              v.classList.add("active-red");
            }else{
              v.classList.remove("active-red");
            }
        });
        this.activeDaYun = this.liunianActiveObj.dayun;
        this.getShiShen(); //更新大运柱流年柱
        setTimeout(function(){ //休眠，待数据渲染到页面后执行
          _this.setBzColor();
        },22)
    },
    //计算流年和大运的藏干、十神
    getShiShen(){
        var _this = this;
        var ry = this.bzInfo.sizhu.rGan.zi;
        this.lnZhi.shishen = "";
        this.lnGan.shishen = "";
        this.dyZhi.shishen = "";
        this.dyGan.shishen = "";
        this.lnGan.zi = this.activeLiuNian.trim().substr(0,1); //流年干
        this.lnGan.shishen = BZ.calcShiShen(this.lnGan.zi,ry); //计算流年干十神 （传参 干和日柱）
        this.lnZhi.zi = this.activeLiuNian.trim().substr(1,1); //流年支
        //取出藏干
        this.lnZhi.canggan = cangGan[this.lnZhi.zi]; 
        //藏干计算十神
        (this.lnZhi.canggan.split("")).forEach(function(v,i){
           _this.lnZhi.shishen += BZ.calcShiShen(v,ry);
        })
        this.dyGan.zi = this.activeDaYun.trim().substr(0,1); //大运干
        if(this.dyGan.zi!="小"){
            this.dyGan.shishen = BZ.calcShiShen(this.dyGan.zi,ry); //传参 干和日柱
        }
        this.dyZhi.zi = this.activeDaYun.trim().substr(1,1); //大运支
        if(this.dyZhi.zi!="運"){
            this.dyZhi.canggan = cangGan[this.dyZhi.zi];
            (this.dyZhi.canggan.split("")).forEach(function(v,i){
                _this.dyZhi.shishen += BZ.calcShiShen(v,ry);
            })
        }
        
    },
    // 设置八字的颜色
    setBzColor(){
        var zis = document.querySelectorAll(".zi");
        zis.forEach(function(v,i){
          v.setAttribute('class','');
        });
        for(var i=0;i<zis.length;i++){
          var text = zis[i].innerHTML.trim().substr(0,1);
            if(text=="甲"||text=="乙"||text=="寅"||text=="卯"){
              zis[i].setAttribute('class','zi wood');
            }else if(text=="丙"||text=="丁"||text=="午"||text=="巳"){
              zis[i].setAttribute('class','zi fire');
            }else if(text=="戊"||text=="己"||text=="辰"||text=="戌"||text=="丑"||text=="未"){
              zis[i].setAttribute('class','zi soil');
            }else if(text=="庚"||text=="辛"||text=="申"||text=="酉"){
              zis[i].setAttribute('class','zi gold');
            }else if(text=="壬"||text=="癸"||text=="子"||text=="亥"){
              zis[i].setAttribute('class','zi water');
            }else{  //针对小运二字
              zis[i].setAttribute('class','zi xiaoyun-color');
            }
        }
    },
    calc() {
      //获取选中的性别
      // let radios = document.querySelectorAll(".info-box input[type=radio]");
      let radios = document.querySelectorAll(".info-box input[type=radio]");
      for(var i=0;i<radios.length;i++){
        if(radios[i].checked == true){
          this.sex = radios[i].value;
        }
      }
      //公历转成农历
      const toLunar = solarLunar.solar2lunar(this.year-0, this.month-0, this.day-0); // 输入的日子为公历
      console.log(toLunar);
      //输入阳历年月日时、六柱、性别，计算出bzInfo
      this.bzInfo = BZ.getInfo(
        parseInt(this.year), //公历年
        parseInt(this.month),//公历月
        parseInt(this.day), //公历日
        parseInt(this.hour), //公历时
        45, //分
        10, //秒
        toLunar.gzYear, //干支年
        toLunar.gzMonth, //干支月
        toLunar.gzDay, //干支日
        this.sex, //性别(1男 0女)
      );

      this.solarLunarInfo = solarLunar.solar2lunar(this.year, this.month, this.day); // 输入的日子为公历
      // console.log(this.solarLunarInfo);

        var converter = new LunarSolarConverter();
        var solar = new Solar(); //阳历
        solar.solarYear = this.year-0;
        solar.solarMonth = this.month-0;
        solar.solarDay = this.day-0;
        this.lunar1 = converter.SolarToLunar(solar);//阳历转阴历
        // console.log(this.lunar1);

        this.LunarCalendarInfo = solarToLunar(this.year,this.month,this.day);  //将公历转换为农历
        // console.log(this.LunarCalendarInfo)
        var d2 = lunarToSolar(2017,6,22); //农历转换为公历
        // console.log("(1996,12,1",d2)

      // //转成农历
      // const toLunar = solarLunar.solar2lunar(this.year-0, this.month-0, this.day-0); // 输入的日子为公历
      // console.log(toLunar);
      // //输入阳历年月日时，六柱，性别
      // var bzInfo = BZ.getInfo(
      //   parseInt(this.year),
      //   parseInt(this.month),
      //   parseInt(this.day),
      //   parseInt(this.hour),
      //   toLunar.gzYear,
      //   toLunar.gzMonth,
      //   toLunar.gzDay,
      //   1
      // );
      // // var bzInfo = BZ.getInfo(1986,4,30,18,"丙寅","壬辰","甲辰",1);
      // // var bzInfo = BZ.getInfo(1982,7,30,8,"壬戌","丁未","甲寅",0);
      // // this.changeYear(); //设置以今年作为显示起始
      // console.log(bzInfo);
      // this.bzInfo = bzInfo;

      // const solar2lunarData = solarLunar.solar2lunar(2017, 7, 23); // 输入的日子为公历
      // console.log("农历2：",solar2lunarData);
      // const lunar2solarData = solarLunar.lunar2solar(2017, 7, 22); // 输入的日子为农历(越界返回-1)
      // console.log("农历3：",lunar2solarData);

      //   var converter = new LunarSolarConverter();
      //   var solar = new Solar(); //阳历
      //   solar.solarYear = 2017;
      //   solar.solarMonth = 7;
      //   solar.solarDay = 23;
      //   var lunar1 = converter.SolarToLunar(solar);//阳历转阴历
      //   console.log("农历4",lunar1);

      //   var lunar = new Lunar();
      //   lunar.isleap = false;
      //   lunar.lunarYear = 1996;
      //   lunar.lunarMonth = 12;
      //   lunar.lunarDay = 1;
      //   var solar1 = converter.LunarToSolar(lunar); //阴历转阳历
      //   // console.log(solar1);
    },

  },
  components: {
    "v-title": Ctitle
  },
  watch:{
    // "activeLiuNian":"getShiShen",
    // "activeDaYun":"getShiShen"
  },
  mounted() {
    //初始挂载完后标红色
    this.activeRed();
  },
  created() {
    //初始给时间赋值（当前日期）
    var nowDate = new Date();
    // this.year = nowDate.getFullYear();
    this.year = 2017;
    this.month = 2;
    this.day = 2;
    this.hour = 22;
    // this.month = nowDate.getMonth() + 1;
    // this.day = nowDate.getDate();
    // this.hour = nowDate.getHours();
    this.sex = 1;
    this.calc(); //计算出bzInfo
    this.calcLiuNianArr(nowDate.getFullYear()); //计算出当前年份所属流年组
  }
};
</script>
<style lang="less" scoped>
.bazi_home {
  div.info-box {
    padding: 10px;
    .input-radio-box {
      line-height: 15px;
      margin-bottom:8px;
    }
    input[type=radio] {
      margin:0 16px 0 5px 
    }
    .text-box input {
      padding:1vw 2vw;
    }
  }
  .inputs {
    width: 22%;
  }
  div.select-box .inputs:first-of-type {
    width: 30%;
  }
  div.mu-dropDown-menu-text {
    border: 1px solid #ccc;
  }
  .mu-popover .mu-menu-item {
    padding: 0px 8px !important;
  }
  .calendar-view {
      .item {
          display: -webkit-flex; /* Safari */
          display: flex;
          div {
            width:13vw;
            background-color: skyblue;
            padding:0.5vw;
            font-size:2vw;
          }
      }
  }
  .bz-view {
    background:#ccc;
    padding:1vw;
    div.gan,
    div.zhi {
      display: -webkit-flex; /* Safari */
      display: flex;
      div {
        width: 15vw;
        padding: 0vw;
        font-size: 7vw;
        font-family: "Microsoft YaHei";
        position: relative;
        font-weight: 500;
        span {
          position: absolute;
          top: 1vw;
          right: 1.5vw;
          font-size: 2vw;
          width: 3vw;
          line-height: 3.5vw;
        }
      }
    }
    div.zhi {
      div > span {
        top: 1px;
      }
      padding-bottom:1vw;
    }
    div.zi {
      // text-shadow:1px 1px 2px black;
      text-shadow:2px 2px 1px black;
      span {
      text-shadow:none;
      }
    }
    .riyuan {
      color: red;
    }
    div.sui {
      display: -webkit-flex; /* Safari */
      display: flex;
      div {
        width: 10vw;
        padding: 0vw;
        text-align: center;
        font-size: 1vw;
        font-family: "Microsoft YaHei";
      }
    }
    div.year {
      display: -webkit-flex; /* Safari */
      display: flex;
      div {
        width: 10vw;
        padding: 0vw;
        text-align: center;
        font-size: 1vw;
        font-family: "Microsoft YaHei";
      }
    }
    div.dayun {
      display: -webkit-flex; /* Safari */
      display: flex;
      div {
        width: 10vw;
        padding: 0 1vw;
        text-align: center;
        font-size: 4.5vw;
        font-family: "Microsoft YaHei";
      }
    }
     .dayun-box {
       padding-top:5px;
       padding-bottom:5px;
       background-color: #dcd8d8;
     }
    //dayun标题颜色
    .dayun-box div.dayun-title,.liunian-box div.dayun-title {
      color:#7e57c0;
      width:5vw;
    }
    // active color 激活颜色
    .active-red {
      color: #fb03f1;
    }
    //十神文字颜色
    .ss-text {
      color:#1a1a1a;
    }
    //五行颜色
    .wood {
      color:#06ab11;
    }
    .fire {
      color:#fe3000;
    }
    .soil {
      color:#964900;
    }
    .gold {
      color:#fb9900;
    }
    .water {
      color:#1f16c3;
    }
    //小运文字颜色
    .xiaoyun-color {
      color:#958596;
    }
  }
}
</style>