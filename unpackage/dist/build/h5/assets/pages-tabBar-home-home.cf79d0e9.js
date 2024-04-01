import{i as e,h as t,r as s,o as l,c as a,w as o,a as i,n as c,b as r,d,t as n,e as u,f as h,I as p,g as m,j as f,F as _,k as g,l as y,m as b,p as k,s as w,q as x,S as C,u as S,v as B}from"./index-ecc6661e.js";import{r as V,_ as j}from"./uni-app.es.8c6d081b.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";const I={en:{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"Search enter content"},"zh-Hans":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"请输入搜索内容"},"zh-Hant":{"uni-search-bar.cancel":"cancel","uni-search-bar.placeholder":"請輸入搜索內容"}},{t:$}=e(I);const L=v({name:"UniSearchBar",emits:["input","update:modelValue","clear","cancel","confirm","blur","focus"],props:{placeholder:{type:String,default:""},radius:{type:[Number,String],default:5},clearButton:{type:String,default:"auto"},cancelButton:{type:String,default:"auto"},cancelText:{type:String,default:"取消"},bgColor:{type:String,default:"#F8F8F8"},maxlength:{type:[Number,String],default:100},value:{type:[Number,String],default:""},modelValue:{type:[Number,String],default:""},focus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:()=>({show:!1,showSync:!1,searchVal:""}),computed:{cancelTextI18n(){return this.cancelText||$("uni-search-bar.cancel")},placeholderText(){return this.placeholder||$("uni-search-bar.placeholder")}},watch:{modelValue:{immediate:!0,handler(e){this.searchVal=e,e&&(this.show=!0)}},focus:{immediate:!0,handler(e){if(e){if(this.readonly)return;this.show=!0,this.$nextTick((()=>{this.showSync=!0}))}}},searchVal(e,t){this.$emit("input",e),this.$emit("update:modelValue",e)}},methods:{searchClick(){this.readonly||this.show||(this.show=!0,this.$nextTick((()=>{this.showSync=!0})))},clear(){this.$emit("clear",{value:this.searchVal}),this.searchVal=""},cancel(){this.readonly||(this.$emit("cancel",{value:this.searchVal}),this.searchVal="",this.show=!1,this.showSync=!1,t())},confirm(){t(),this.$emit("confirm",{value:this.searchVal})},blur(){t(),this.$emit("blur",{value:this.searchVal})},emitFocus(e){this.$emit("focus",e.detail)}}},[["render",function(e,t,f,_,g,y){const b=V(s("uni-icons"),j),k=h,w=p,x=m;return l(),a(k,{class:"uni-searchbar"},{default:o((()=>[i(k,{style:c({borderRadius:f.radius+"px",backgroundColor:f.bgColor}),class:"uni-searchbar__box",onClick:y.searchClick},{default:o((()=>[i(k,{class:"uni-searchbar__box-icon-search"},{default:o((()=>[r(e.$slots,"searchIcon",{},(()=>[i(b,{color:"#c0c4cc",size:"18",type:"search"})]),!0)])),_:3}),g.show||g.searchVal?(l(),a(w,{key:0,focus:g.showSync,disabled:f.readonly,placeholder:y.placeholderText,maxlength:f.maxlength,class:"uni-searchbar__box-search-input","confirm-type":"search",type:"text",modelValue:g.searchVal,"onUpdate:modelValue":t[0]||(t[0]=e=>g.searchVal=e),onConfirm:y.confirm,onBlur:y.blur,onFocus:y.emitFocus},null,8,["focus","disabled","placeholder","maxlength","modelValue","onConfirm","onBlur","onFocus"])):(l(),a(x,{key:1,class:"uni-searchbar__text-placeholder"},{default:o((()=>[d(n(f.placeholder),1)])),_:1})),g.show&&("always"===f.clearButton||"auto"===f.clearButton&&""!==g.searchVal)&&!f.readonly?(l(),a(k,{key:2,class:"uni-searchbar__box-icon-clear",onClick:y.clear},{default:o((()=>[r(e.$slots,"clearIcon",{},(()=>[i(b,{color:"#c0c4cc",size:"20",type:"clear"})]),!0)])),_:3},8,["onClick"])):u("",!0)])),_:3},8,["style","onClick"]),"always"===f.cancelButton||g.show&&"auto"===f.cancelButton?(l(),a(x,{key:0,onClick:y.cancel,class:"uni-searchbar__cancel"},{default:o((()=>[d(n(y.cancelTextI18n),1)])),_:1},8,["onClick"])):u("",!0)])),_:3})}],["__scopeId","data-v-03210105"]]);const F=v({name:"UniSwiperDot",emits:["clickItem"],props:{info:{type:Array,default:()=>[]},current:{type:Number,default:0},dotsStyles:{type:Object,default:()=>({})},mode:{type:String,default:"default"},field:{type:String,default:""}},data:()=>({dots:{width:6,height:6,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}),watch:{dotsStyles(e){this.dots=Object.assign(this.dots,this.dotsStyles)},mode(e){"indexes"===e?(this.dots.width=14,this.dots.height=14):(this.dots.width=6,this.dots.height=6)}},created(){"indexes"===this.mode&&(this.dots.width=12,this.dots.height=12),this.dots=Object.assign(this.dots,this.dotsStyles)},methods:{clickItem(e){this.$emit("clickItem",e)}}},[["render",function(e,t,s,p,b,k){const w=h,x=m;return l(),a(w,{class:"uni-swiper__warp"},{default:o((()=>[r(e.$slots,"default",{},void 0,!0),"default"===s.mode?(l(),a(w,{style:c({bottom:b.dots.bottom+"px"}),class:"uni-swiper__dots-box",key:"default"},{default:o((()=>[(l(!0),f(_,null,g(s.info,((e,t)=>(l(),a(w,{onClick:e=>k.clickItem(t),style:c({width:(t===s.current?2*b.dots.width:b.dots.width)+"px",height:b.dots.width/2+"px","background-color":t!==s.current?b.dots.backgroundColor:b.dots.selectedBackgroundColor,"border-radius":"0px"}),key:t,class:"uni-swiper__dots-item uni-swiper__dots-bar"},null,8,["onClick","style"])))),128))])),_:1},8,["style"])):u("",!0),"dot"===s.mode?(l(),a(w,{style:c({bottom:b.dots.bottom+"px"}),class:"uni-swiper__dots-box",key:"dot"},{default:o((()=>[(l(!0),f(_,null,g(s.info,((e,t)=>(l(),a(w,{onClick:e=>k.clickItem(t),style:c({width:b.dots.width+"px",height:b.dots.height+"px","background-color":t!==s.current?b.dots.backgroundColor:b.dots.selectedBackgroundColor,border:t!==s.current?b.dots.border:b.dots.selectedBorder}),key:t,class:"uni-swiper__dots-item"},null,8,["onClick","style"])))),128))])),_:1},8,["style"])):u("",!0),"round"===s.mode?(l(),a(w,{style:c({bottom:b.dots.bottom+"px"}),class:"uni-swiper__dots-box",key:"round"},{default:o((()=>[(l(!0),f(_,null,g(s.info,((e,t)=>(l(),a(w,{onClick:e=>k.clickItem(t),class:y([[t===s.current&&"uni-swiper__dots-long"],"uni-swiper__dots-item"]),style:c({width:(t===s.current?3*b.dots.width:b.dots.width)+"px",height:b.dots.height+"px","background-color":t!==s.current?b.dots.backgroundColor:b.dots.selectedBackgroundColor,border:t!==s.current?b.dots.border:b.dots.selectedBorder}),key:t},null,8,["onClick","class","style"])))),128))])),_:1},8,["style"])):u("",!0),"nav"===s.mode?(l(),a(w,{key:"nav",style:c({"background-color":s.dotsStyles.backgroundColor,bottom:"0"}),class:"uni-swiper__dots-box uni-swiper__dots-nav"},{default:o((()=>[i(x,{style:c({color:s.dotsStyles.color}),class:"uni-swiper__dots-nav-item"},{default:o((()=>[d(n(s.current+1+"/"+s.info.length+" "+s.info[s.current][s.field]),1)])),_:1},8,["style"])])),_:1},8,["style"])):u("",!0),"indexes"===s.mode?(l(),a(w,{key:"indexes",style:c({bottom:b.dots.bottom+"px"}),class:"uni-swiper__dots-box"},{default:o((()=>[(l(!0),f(_,null,g(s.info,((e,t)=>(l(),a(w,{onClick:e=>k.clickItem(t),style:c({width:b.dots.width+"px",height:b.dots.height+"px",color:t===s.current?b.dots.selectedColor:b.dots.color,"background-color":t!==s.current?b.dots.backgroundColor:b.dots.selectedBackgroundColor,border:t!==s.current?b.dots.border:b.dots.selectedBorder}),key:t,class:"uni-swiper__dots-item uni-swiper__dots-indexes"},{default:o((()=>[i(x,{class:"uni-swiper__dots-indexes-text"},{default:o((()=>[d(n(t+1),1)])),_:2},1024)])),_:2},1032,["onClick","style"])))),128))])),_:1},8,["style"])):u("",!0)])),_:3})}],["__scopeId","data-v-77e8f2a6"]]);const T=v({data:()=>({title:"",info:[{url:"/static/images/swiper_1.png"},{url:"/static/images/swiper_2.png"},{url:"/static/images/swiper_3.png"}],current:0,mode:"default",centerList:[],bottomList:[]}),onShow(){b(),this.title=k("title")||"圈子",document.title=this.title,w({title:this.title}),x("title",this.title);const e=k("centerList")||[{id:1,img:"/static/images/pic_1.jpg",title:"去有你的地方",type:"短剧",price:"80.00"},{id:2,img:"/static/images/pic_1.jpg",title:"隐秘而伟大",type:"短剧",price:"90.00"},{id:3,img:"/static/images/pic_1.jpg",title:"巨富归来",type:"短剧",price:"85.00"}];x("centerList",e),this.centerList=e;const t=k("bottomList")||[{img:"/static/images/pic_2.jpg",title:"父爱如山",type:"短剧",price:"85.00",left:583,used:17},{img:"/static/images/pic_2.jpg",title:"后会有期",type:"短剧",price:"75.00",left:544,used:16},{img:"/static/images/pic_2.jpg",title:"西游记",type:"电视剧",price:"80.00",left:370,used:15},{img:"/static/images/pic_2.jpg",title:"狂飙",type:"电视剧",price:"85.00",left:523,used:12},{img:"/static/images/pic_2.jpg",title:"漫长的季节",type:"电视剧",price:"85.00",left:583,used:17},{img:"/static/images/pic_2.jpg",title:"猎冰",type:"电视剧",price:"85.00",left:583,used:17},{img:"/static/images/pic_2.jpg",title:"繁花",type:"电视剧",price:"85.00",left:583,used:17},{img:"/static/images/pic_2.jpg",title:"汉武大帝",type:"电视剧",price:"85.00",left:583,used:17}];x("bottomList",t),this.bottomList=t},methods:{change(e){this.current=e.detail.current}}},[["render",function(e,t,c,r,u,p){const y=m,b=V(s("uni-search-bar"),L),k=V(s("uni-icons"),j),w=h,x=B,v=C,I=V(s("uni-swiper-dot"),F);return l(),a(w,null,{default:o((()=>[i(w,{class:"top"},{default:o((()=>[i(w,{class:"search-box"},{default:o((()=>[i(y,{class:"title"},{default:o((()=>[d(n(u.title),1)])),_:1}),i(b,{class:"search-bar",radius:"100",placeholder:"输入任务编号搜索",clearButton:"none",cancelButton:"none"}),i(k,{type:"scan",size:"24",color:"#fff"})])),_:1}),i(I,{info:u.info,current:u.current,field:"content",mode:u.mode},{default:o((()=>[i(v,{class:"swiper-box",autoplay:!0,onChange:p.change},{default:o((()=>[(l(!0),f(_,null,g(u.info,((e,t)=>(l(),a(x,{key:t},{default:o((()=>[i(w,{class:"swiper-item"},{default:o((()=>[S("img",{src:e.url,alt:"",srcset:""},null,8,["src"])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["onChange"])])),_:1},8,["info","current","mode"])])),_:1}),i(w,{class:"center"},{default:o((()=>[(l(!0),f(_,null,g(u.centerList,((e,t)=>(l(),a(w,{class:"center-box",key:t},{default:o((()=>[S("img",{src:e.img,alt:""},null,8,["src"]),i(w,{class:"title"},{default:o((()=>[d(n(e.title),1)])),_:2},1024),i(w,{class:"type"},{default:o((()=>[d(n(e.type),1)])),_:2},1024),i(w,{class:"price"},{default:o((()=>[d("+"+n(e.price),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),i(w,{class:"bottom"},{default:o((()=>[i(w,{class:"bottom_nav"},{default:o((()=>[i(w,{class:"title"},{default:o((()=>[d("全部任务")])),_:1}),i(w,{class:"nav"},{default:o((()=>[i(y,{class:"active"},{default:o((()=>[d("默认排序")])),_:1}),i(y,null,{default:o((()=>[d("最新发布")])),_:1}),i(y,null,{default:o((()=>[d("佣金最高")])),_:1})])),_:1})])),_:1}),i(w,{class:"bottom-list"},{default:o((()=>[(l(!0),f(_,null,g(u.bottomList,((e,t)=>(l(),a(w,{class:"bottom-item",key:t},{default:o((()=>[i(w,{class:"img"},{default:o((()=>[S("img",{src:e.img,alt:""},null,8,["src"])])),_:2},1024),i(w,{class:"info"},{default:o((()=>[i(w,{class:"title"},{default:o((()=>[i(y,null,{default:o((()=>[d(n(e.title),1)])),_:2},1024),i(y,null,{default:o((()=>[d("+"+n(e.price),1)])),_:2},1024)])),_:2},1024),i(w,{class:"type"},{default:o((()=>[i(y,null,{default:o((()=>[d("ID:"+n(10320+t),1)])),_:2},1024),i(y,null,{default:o((()=>[d(n(e.type),1)])),_:2},1024)])),_:2},1024),i(w,{class:"left"},{default:o((()=>[i(y,null,{default:o((()=>[d("剩余"+n(e.left)+"个",1)])),_:2},1024),i(y,null,{default:o((()=>[d(n(e.used)+"人已赚",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-2f6b8b41"]]);export{T as default};
