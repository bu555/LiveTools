import queryJQ from "./queryJQ.js";
const Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const solarTermInfo = ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'];
const Nayi={
    甲子:["海中金"],乙丑:["海中金"],丙寅:["炉中火"],丁卯:["炉中火"],戊辰:["大林木"],己巳:["大林木"],庚午:["路旁土"],辛未:["路旁土"],壬申:["剑锋金"],癸酉:["剑锋金"],
    甲戌:["山头火"],乙亥:["山头火"],丙子:["涧下水"],丁丑:["涧下水"],戊寅:["城墙土"],己卯:["城墙土"],庚辰:["白腊金"],辛巳:["白腊金"],壬午:["杨柳木"],癸未:["杨柳木"],
    甲申:["泉中水"],乙酉:["泉中水"],丙戌:["屋上土"],丁亥:["屋上土"],戊子:["霹雳火"],己丑:["霹雳火"],庚寅:["松柏木"],辛卯:["松柏木"],壬辰:["长流水"],癸巳:["长流水"],
    甲午:["沙中金"],乙未:["沙中金"],丙申:["山下火"],丁酉:["山下火"],戊戌:["平地木"],己亥:["平地木"],庚子:["壁上土"],辛丑:["壁上土"],壬寅:["金箔金"],癸卯:["金箔金"],
    甲辰:["覆灯火"],乙巳:["覆灯火"],丙午:["天河水"],丁未:["天河水"],戊申:["大驿土"],己酉:["大驿土"],庚戌:["钗钏金"],辛亥:["钗钏金"],壬子:["桑柘木"],癸丑:["桑柘木"],
    甲寅:["大溪水"],乙卯:["大溪水"],丙辰:["沙中土"],丁巳:["沙中土"],戊午:["天上火"],己未:["天上火"],庚申:["石榴木"],辛酉:["石榴木"],壬戌:["大海水"],癸亥:["大海水"]
    };
const cangGan={
    子:"癸",
    丑:"己癸辛",
    寅:"甲丙戊",
    卯:"乙",
    辰:"戊乙癸",
    巳:"丙戊庚",
    午:"丁己",
    未:"己丁乙",
    申:"庚壬戊",
    酉:"辛",
    戌:"戊辛丁",
    亥:"壬甲",
}
const wuXing={

}
// *根据年、月、日、时、性别，返回bz信息
let BZ = {
     //计算四柱
    getInfo:function(year,month,day,hour,minute,second,nz,yz,rz,sex){
       let shizhu = BZ.calcShizhu(rz,hour); //计算时柱
        //八字的信息
       let sizhuObj = { 
           nGan:{
               zi:nz.substr(0,1)
            },
           nZhi:{
               zi:nz.substr(1,1)
            },
           yGan:{
               zi:yz.substr(0,1)
            },
           yZhi:{
               zi:yz.substr(1,1)
            },
           rGan:{
               zi:rz.substr(0,1)
            },
           rZhi:{
               zi:rz.substr(1,1)
            },
           sGan:{
               zi:shizhu.substr(0,1)
            },
           sZhi:{
               zi:shizhu.substr(1,1)
            },
       }
       for(let key in sizhuObj){
           let ry = sizhuObj.rGan.zi;
        //    如果是日元，不计算十神，只区分男女
           if(key=="rGan"){
                sizhuObj[key].shishen = "元" + (sex==1?"男":"女");
           }else{
               if(cangGan[sizhuObj[key].zi]){ //如果是地支，找出藏干
                   let ziStr = cangGan[sizhuObj[key].zi];//获取藏干字符串
                   sizhuObj[key].canggan = ziStr;
                   sizhuObj[key].shishen = '';
                   for(let i=0;i<ziStr.length;i++){
                    sizhuObj[key].shishen += BZ.calcShiShen(ziStr[i],ry);
                   }
               }else{  //如果是天干
                 sizhuObj[key].shishen = BZ.calcShiShen(sizhuObj[key].zi,ry);
               }
           }
       }
       let dayun = BZ.calcDayun(yz,nz,sex); //大运（10步）
       let liunianObj = BZ.calcLiunian(year,month,day); //计算流年信息
        //计算小运
       let xiaoyunTime = BZ.calcQiyun(year,month,day,hour,minute,second,nz,sex); //多少毫秒后开始走运
       let xiaoyun = (Math.round(xiaoyunTime/1000/3600/2))*10*24*3600*1000; //时辰数*10天*24小时*3600 = 总毫秒数
       let ryMs = Date.parse(year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second);
       let qiyunDate = new Date(ryMs + xiaoyun);
       console.log(new Date(ryMs + xiaoyun).toLocaleDateString() );
       xiaoyun = qiyunDate.getFullYear() - year;
    //    return false;
    //    let ys = Math.floor(xiaoyun/12); //多少年
    //    let ms = xiaoyun%12;  //余下多少个月
    //    if((parseInt(month)+ms) >= 12){
    //        ys + 1;
    //    }
       //计算大运+流年
       let dayunAndLiunian = [];
       if(xiaoyun!=0){
           dayunAndLiunian.push({
               dayun:"小運",
               liunian:liunianObj.slice(0,xiaoyun)
           });
       }
    //    if(Math.abs(xiaoyun)!=0){
    //        dayunAndLiunian.push({
    //            dayun:"小運",
    //            liunian:liunianObj.slice(0,xiaoyun)
    //        });
    //    }
       
       for(let i=0;i<dayun.length;i++){
            dayunAndLiunian.push({
                dayun:dayun[i],
                liunian:liunianObj.slice(xiaoyun,(xiaoyun+10))
            });
            xiaoyun += 10;
        }
       return {
           sex:sex==1?"乾造":"坤造",
           sizhu:sizhuObj,
           dayunAndLiunian:dayunAndLiunian,
           nayin:Nayi[rz][0]
       }
       
    },
    // 计算时柱
    calcShizhu:function(rz,h) {
        /** 计算时柱（论日上起时） 甲己还加甲， 乙庚丙作初， 丙辛从戊起， 丁壬庚子居， 戊癸何方发， 壬子是真途. */
        let szIndex = Math.ceil( h/2 ) % 12; //时支所在索引
        let rg = rz.substr(0, 1); //日干
        let st = 0;
        if (rg === "甲" || rg === "己") {
            st = 0; //"甲";
        } else if (rg === "乙" || rg === "庚") {
            st = 2; //"丙";
        } else if (rg === "丙" || rg === "辛") {
            st = 4;//"戊";
        } else if (rg === "丁" || rg === "壬") {
            st = 6;//"庚";
        } else if (rg === "戊" || rg === "癸") {
            st = 8;//"壬";
        }
        return Gan[(szIndex + st) % 10] + Zhi[szIndex];
    },
    //计算大运  以月柱做顺逆排序
    calcDayun(yz,nz,sex){ //传入yz月柱、rz日柱、sex性别（乾1坤0，返回字符串的数组
        let gan = yz.substr(0,1);
        let zhi = yz.substr(1,1); //分解干、支
        let nIndex = Gan.indexOf(nz[0])%2; //阳年还是阴年（0阳 1阴）
        let count = 10; //默认计算10步大运
        let ganIndex = Gan.indexOf(gan); //查找干所在索引
        let zhiIndex = Zhi.indexOf(zhi); //查找支所在索引
        let ganArr = []; //存干  
        let zhiArr = []; //存支
        let dayun = []; //存放大运和对应的流年
        if((sex==1 && nIndex==0)||(sex==0 && nIndex==1)){ //阳男或阴女
            for(let i=0 ; i<count ; i++){
                ganArr[i] = Gan[++ganIndex%10]; //干为10进
                zhiArr[i] = Zhi[++zhiIndex%12]; //支为12进
            }
        }else if((sex==1 && nIndex==1)||(sex==0 && nIndex==0)){ //阴男或阳女
            for(let i=0 ; i<count ; i++){
                ganArr[i] = Gan[(--ganIndex+10)%10]; //干为10进
                zhiArr[i] = Zhi[(--zhiIndex+12)%12]; //支为12进
            }
        }
        //拼接大运
        for(let i=0;i<ganArr.length;i++){

            dayun.push(ganArr[i]+zhiArr[i]);
        }
        return dayun;
    },
    //计算流年与岁数
    calcLiunian(year,month,day){
        let nz = Gan[(year-1900+6)%10]+Zhi[(year-1900)%12];//计算公历对应的年柱(用于显示大运和流年)
        let gan = nz.substr(0,1);
        let zhi = nz.substr(1,1); //分解干、支
        let ganIndex;
        let zhiIndex;
        ganIndex = Gan.indexOf(gan); //查找干所在索引
        zhiIndex = Zhi.indexOf(zhi); //查找支所在索引 
        let ganArr = []; //存干  
        let zhiArr = []; //存支
        let liunian = []; //存流年
        for(let i=0;i<100;i++){
            ganArr.push(Gan[(ganIndex++)%10]);
            zhiArr.push(Zhi[(zhiIndex++)%12]);
        }
        //拼接流年
        for(let i=0;i<ganArr.length;i++){
            liunian.push({
                nian: ganArr[i]+zhiArr[i],
                sui: i+1,
                year:(year-0)+i
            });
        }
        return liunian;
    },
    //计算起运时间  
    calcQiyun(year,month,day,hour,minute,second,nz,sex){
        let ngIndex = Gan.indexOf(nz.substr(0,1)); //判定年柱阴阳
        //判断公历年是否是闰年
        let isLeapYear = (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0); 
        //阳年男或阴年女正推
        //计算要找第几个节令
        let jieNum = month*2 - 1; //当月是第几个节令
        let jieqiMs = Date.parse(queryJQ(year,jieNum)); //当月节令毫秒值
        console.log(queryJQ(year,jieNum));
        let ryMs = Date.parse(year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second);
        // let dayNum = BZ.getTerm(year,jieNum); //节令在当月的几号
        if((ngIndex%2==0&&sex==1) || (ngIndex%2==1&&sex==0)){ //阳年男或阴年女
            if(jieqiMs>ryMs){
                return (jieqiMs-ryMs);  //多少毫秒后是节令
                // return Math.floor((dayNum-day)/3); //三天计一年
            }else if(jieqiMs<=ryMs){
                if(month<12){ //去找下一个月的节令
                    jieNum = jieNum + 2; 
                }else{ //如果是12月
                    jieNum = 1;
                    year=parseInt(year)+1;
                }
                let nextMs = Date.parse(queryJQ(year,jieNum)); //下个节令毫秒
                return (nextMs - ryMs); //距离多久起运（毫秒）
            }
        }else if((ngIndex%2==1&&sex==1) || (ngIndex%2==0&&sex==0)){ //阴男或阳女
            if(jieqiMs>ryMs){ //节令在日后面
                if(month>1){ //去找前一个月月令
                    jieNum = jieNum -2;
                }else{
                    jieNum = 23;
                    year = year-1;
                }
                let prevMs = Date.parse(queryJQ(year,jieNum)); //上个节令毫秒
                return (jieqiMs-ryMs);
            }else if(jieqiMs<ryMs){
                return (ryMs-jieqiMs); //距离多久起运（毫秒）
            }
        }
        // let ngIndex = Gan.indexOf(nz.substr(0,1)); //判定年柱阴阳
        // //判断公历年是否是闰年
        // let isLeapYear = (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0); 
        // //阳年男或阴年女正推
        // //计算要找第几个节令
        // let jieNum = month*2 - 1; //当月是第几个节令
        // let jieqiMs = Date.parse(queryJQ(year,jieNum)); //当月节令毫秒值
        // let ryMs = Date.parse(year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second);
        // console.log(typeof ryMs);
        // // let dayNum = BZ.getTerm(year,jieNum); //节令在当月的几号
        // if((ngIndex%2==0&&sex==1) || (ngIndex%2==1&&sex==0)){ //阳年男或阴年女
        //     if(jieqiMs>ryMs){
        //         return (jieqiMs-ryMs);  //多少毫秒后是节令
        //         // return Math.floor((dayNum-day)/3); //三天计一年
        //     }else if(dayNum<day){
        //         if(month<12){ //去找下一个月的节令
        //             jieNum = jieNum + 2; 
        //         }else{ //如果是12月
        //             jieNum = 1;
        //             year=parseInt(year)+1;
        //         }
        //         let dayNum = BZ.getTerm(year,jieNum); //节令在几号
        //         if(month==4||month==6||month==9||month==11){
        //             return (30 - day + dayNum)*4; //一天计四个月
        //             // return Math.floor((30 - day + dayNum)/3);
        //         }else if(month==2){
        //             let days = isLeapYear?29:28;
        //             return (days - day + dayNum)*4; //一天计四个月
        //             // return Math.floor((days - day + dayNum)/3);
        //         }else{
        //             return (31 - day + dayNum)*4; //一天计四个月
        //             // return Math.floor((31 - day + dayNum)/3);
        //         }
        //     }else{
        //         return 2; //折中一下，算2个月
        //     }
        // }else if((ngIndex%2==1&&sex==1) || (ngIndex%2==0&&sex==0)){ //阴男或阳女
        //     if(dayNum>day){ //节令在日后面
        //         if(month>1){ //去找前一个月月令
        //             jieNum = jieNum -2;
        //         }else{
        //             jieNum = 23;
        //             year = year-1;
        //         }
        //         let dayNum = BZ.getTerm(year,jieNum); //节令在几号
        //         month = month - 1;//上一个月
        //         if(month==4||month==6||month==9||month==11){ 
        //             return (30 - dayNum + day)*4; //一天计四个月
        //             // return Math.floor((30 - dayNum + day)/3);
        //         }else if(month==2){
        //             let days = isLeapYear?29:28;
        //             return (days - dayNum + day)*4; //一天计四个月
        //         }else{
        //             return  (31 - dayNum + day)*4; //一天计四个月
        //             // return  Math.floor((31 - dayNum + day)/3);
        //         }
        //     }else if(dayNum<day){
        //         return (day-dayNum)*4; //一天计四个月
        //     }else{
        //         return 2; //折中一下，算2个月
        //     }
        // }
    },
    //查询第几个节气在当月第几号
    getTerm(y, n) { 
        if (y < 1900 || y > 2100 || n < 1 || n > 24) {
            return -1;
        }
        let yearData = solarTermInfo[y - 1900];
        let twoMonthData = new Array(6);
        for (var i = 0; i < 6; i++) {
            twoMonthData[i] = parseInt('0x' + yearData.substr(i * 5, 5)).toString();
        }
        let data;
        let op = (n - 1) % 4;
        let listNum = Math.floor((n - 1) / 4);
        switch (op) {
            case 0:
                data = twoMonthData[listNum].substr(0, 1);
                break;
            case 1:
                data = twoMonthData[listNum].substr(1, 2);
                break;
            case 2:
                data = twoMonthData[listNum].substr(3, 1);
                break;
            case 3:
                data = twoMonthData[listNum].substr(4, 2);
                break;
            default:
                return -1;
        }
        if((ngIndex%2==0&&sex==1) || (ngIndex%2==1&&sex==0)){ //阳年男或阴年女
            if(jieqiMs>ryMs){
                return (jieqiMs-ryMs);  //多少毫秒后是节令
                // return Math.floor((dayNum-day)/3); //三天计一年
            }else if(dayNum<day){
                if(month<12){ //去找下一个月的节令
                    jieNum = jieNum + 2; 
                }else{ //如果是12月
                    jieNum = 1;
                    year=parseInt(year)+1;
                }
                let dayNum = BZ.getTerm(year,jieNum); //节令在几号
                if(month==4||month==6||month==9||month==11){
                    return (30 - day + dayNum)*4; //一天计四个月
                    // return Math.floor((30 - day + dayNum)/3);
                }else if(month==2){
                    let days = isLeapYear?29:28;
                    return (days - day + dayNum)*4; //一天计四个月
                    // return Math.floor((days - day + dayNum)/3);
                }else{
                    return (31 - day + dayNum)*4; //一天计四个月
                    // return Math.floor((31 - day + dayNum)/3);
                }
            }else{
                return 2; //折中一下，算2个月
            }
        }else if((ngIndex%2==1&&sex==1) || (ngIndex%2==0&&sex==0)){ //阴男或阳女
            if(dayNum>day){ //节令在日后面
                if(month>1){ //去找前一个月月令
                    jieNum = jieNum -2;
                }else{
                    jieNum = 23;
                    year = year-1;
                }
                let dayNum = BZ.getTerm(year,jieNum); //节令在几号
                month = month - 1;//上一个月
                if(month==4||month==6||month==9||month==11){ 
                    return (30 - dayNum + day)*4; //一天计四个月
                    // return Math.floor((30 - dayNum + day)/3);
                }else if(month==2){
                    let days = isLeapYear?29:28;
                    return (days - dayNum + day)*4; //一天计四个月
                }else{
                    return  (31 - dayNum + day)*4; //一天计四个月
                    // return  Math.floor((31 - dayNum + day)/3);
                }
            }else if(dayNum<day){
                return (day-dayNum)*4; //一天计四个月
            }else{
                return 2; //折中一下，算2个月
            }
        }
    },
    //查询第几个节气在当月第几号
    getTerm(y, n) { 
        if (y < 1900 || y > 2100 || n < 1 || n > 24) {
            return -1;
        }
        let yearData = solarTermInfo[y - 1900];
        let twoMonthData = new Array(6);
        for (var i = 0; i < 6; i++) {
            twoMonthData[i] = parseInt('0x' + yearData.substr(i * 5, 5)).toString();
        }
        let data;
        let op = (n - 1) % 4;
        let listNum = Math.floor((n - 1) / 4);
        switch (op) {
            case 0:
                data = twoMonthData[listNum].substr(0, 1);
                break;
            case 1:
                data = twoMonthData[listNum].substr(1, 2);
                break;
            case 2:
                data = twoMonthData[listNum].substr(3, 1);
                break;
            case 3:
                data = twoMonthData[listNum].substr(4, 2);
                break;
            default:
                return -1;
        }
        return parseInt(data);
    },
    //判断五行
    calcWuXing(gan){
    	let wux="";
        if(gan=="甲"||gan=="乙") wux="木";
        if(gan=="丙"||gan=="丁") wux="火";
        if(gan=="戊"||gan=="己") wux="土";
        if(gan=="庚"||gan=="辛") wux="金";
        if(gan=="壬"||gan=="癸") wux="水";
        return wux;
    },
    //推算十神 传参干和日元
    calcShiShen(gan,ry){  
        let ryIndex = Gan.indexOf(ry);
        let gIndex = Gan.indexOf(gan);
        let shishen = "";
        if(ryIndex-gIndex==0) shishen="比";
        if(ryIndex%2==0){
            if(ryIndex-gIndex==-1) shishen="劫";
            if(ryIndex-gIndex==-2||ryIndex-gIndex==8) shishen="食";
            if(ryIndex-gIndex==-3||ryIndex-gIndex==7) shishen="傷";
            if(ryIndex-gIndex==-4||ryIndex-gIndex==6) shishen="才";
            if(ryIndex-gIndex==-5||ryIndex-gIndex==5) shishen="財";
            if(ryIndex-gIndex==-6||ryIndex-gIndex==4) shishen="殺";
            if(ryIndex-gIndex==-7||ryIndex-gIndex==3) shishen="官";
            if(ryIndex-gIndex==-8||ryIndex-gIndex==2) shishen="梟";
            if(ryIndex-gIndex==-9||ryIndex-gIndex==1) shishen="印";
        }
        if(ryIndex%2==1){
            if(ryIndex-gIndex==1) shishen="劫";
            if(ryIndex-gIndex==2||ryIndex-gIndex==-8) shishen="梟";
            if(ryIndex-gIndex==3||ryIndex-gIndex==-7) shishen="印";
            if(ryIndex-gIndex==4||ryIndex-gIndex==-6) shishen="殺";
            if(ryIndex-gIndex==5||ryIndex-gIndex==-5) shishen="官";
            if(ryIndex-gIndex==6||ryIndex-gIndex==-4) shishen="才";
            if(ryIndex-gIndex==7||ryIndex-gIndex==-3) shishen="財";
            if(ryIndex-gIndex==8||ryIndex-gIndex==-2) shishen="食";
            if(ryIndex-gIndex==9||ryIndex-gIndex==-1) shishen="傷";
        }
        return shishen;
    },
}
exports.cangGan =  cangGan;
exports.BZ =  BZ;