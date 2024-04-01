import{A as e,o as t,c as a,w as l,b as i,n as r,f as n,z as s,r as o,a as u,l as d,e as h,d as c,t as m,g as f,D as g,C as p,E as b,G as y,H as _,p as v,J as k,q as x,j as C,k as S,F as V}from"./index-ecc6661e.js";import{r as w,_ as L}from"./uni-app.es.8c6d081b.js";import{_ as I}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as F}from"./uni-easyinput.cea202b8.js";const M=e=>"number"==typeof e?e+"px":e;const R=I({name:"UniNavBar",components:{statusBar:I({name:"UniStatusBar",data:()=>({statusBarHeight:20}),mounted(){this.statusBarHeight=e().statusBarHeight+"px"}},[["render",function(e,s,o,u,d,h){const c=n;return t(),a(c,{style:r({height:d.statusBarHeight}),class:"uni-status-bar"},{default:l((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}],["__scopeId","data-v-40847dd0"]])},emits:["clickLeft","clickRight","clickTitle"],props:{dark:{type:Boolean,default:!1},title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:""},backgroundColor:{type:String,default:""},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0},height:{type:[Number,String],default:44},leftWidth:{type:[Number,String],default:60},rightWidth:{type:[Number,String],default:60},stat:{type:[Boolean,String],default:""}},computed:{themeBgColor(){return this.dark?this.backgroundColor?this.backgroundColor:this.dark?"#333":"#FFF":this.backgroundColor||"#FFF"},themeColor(){return this.dark?this.color?this.color:this.dark?"#fff":"#333":this.color||"#333"},navbarHeight(){return M(this.height)},leftIconWidth(){return M(this.leftWidth)},rightIconWidth(){return M(this.rightWidth)}},mounted(){uni.report&&this.stat&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft(){this.$emit("clickLeft")},onClickRight(){this.$emit("clickRight")},onClickTitle(){this.$emit("clickTitle")}}},[["render",function(e,g,p,b,y,_){const v=s("status-bar"),k=w(o("uni-icons"),L),x=n,C=f;return t(),a(x,{class:d(["uni-navbar",{"uni-dark":p.dark,"uni-nvue-fixed":p.fixed}])},{default:l((()=>[u(x,{class:d(["uni-navbar__content",{"uni-navbar--fixed":p.fixed,"uni-navbar--shadow":p.shadow,"uni-navbar--border":p.border}]),style:r({"background-color":_.themeBgColor})},{default:l((()=>[p.statusBar?(t(),a(v,{key:0})):h("",!0),u(x,{style:r({color:_.themeColor,backgroundColor:_.themeBgColor,height:_.navbarHeight}),class:"uni-navbar__header"},{default:l((()=>[u(x,{onClick:_.onClickLeft,class:"uni-navbar__header-btns uni-navbar__header-btns-left",style:r({width:_.leftIconWidth})},{default:l((()=>[i(e.$slots,"left",{},(()=>[p.leftIcon.length>0?(t(),a(x,{key:0,class:"uni-navbar__content_view"},{default:l((()=>[u(k,{color:_.themeColor,type:p.leftIcon,size:"20"},null,8,["color","type"])])),_:1})):h("",!0),p.leftText.length?(t(),a(x,{key:1,class:d([{"uni-navbar-btn-icon-left":!p.leftIcon.length>0},"uni-navbar-btn-text"])},{default:l((()=>[u(C,{style:r({color:_.themeColor,fontSize:"12px"})},{default:l((()=>[c(m(p.leftText),1)])),_:1},8,["style"])])),_:1},8,["class"])):h("",!0)]),!0)])),_:3},8,["onClick","style"]),u(x,{class:"uni-navbar__header-container",onClick:_.onClickTitle},{default:l((()=>[i(e.$slots,"default",{},(()=>[p.title.length>0?(t(),a(x,{key:0,class:"uni-navbar__header-container-inner"},{default:l((()=>[u(C,{class:"uni-nav-bar-text uni-ellipsis-1",style:r({color:_.themeColor})},{default:l((()=>[c(m(p.title),1)])),_:1},8,["style"])])),_:1})):h("",!0)]),!0)])),_:3},8,["onClick"]),u(x,{onClick:_.onClickRight,class:"uni-navbar__header-btns uni-navbar__header-btns-right",style:r({width:_.rightIconWidth})},{default:l((()=>[i(e.$slots,"right",{},(()=>[p.rightIcon.length?(t(),a(x,{key:0},{default:l((()=>[u(k,{color:_.themeColor,type:p.rightIcon,size:"22"},null,8,["color","type"])])),_:1})):h("",!0),p.rightText.length&&!p.rightIcon.length?(t(),a(x,{key:1,class:"uni-navbar-btn-text"},{default:l((()=>[u(C,{class:"uni-nav-bar-right-text",style:r({color:_.themeColor})},{default:l((()=>[c(m(p.rightText),1)])),_:1},8,["style"])])),_:1})):h("",!0)]),!0)])),_:3},8,["onClick","style"])])),_:3},8,["style"])])),_:3},8,["class","style"]),p.fixed?(t(),a(x,{key:0,class:"uni-navbar__placeholder"},{default:l((()=>[p.statusBar?(t(),a(v,{key:0})):h("",!0),u(x,{class:"uni-navbar__placeholder-view",style:r({height:_.navbarHeight})},null,8,["style"])])),_:1})):h("",!0)])),_:3},8,["class"])}],["__scopeId","data-v-4a9dc8f8"]]);const B=I({name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick(e){this.$emit("click",e)}}},[["render",function(e,s,o,p,b,y){const _=g,v=n,k=f;return t(),a(v,{class:d(["uni-card",{"uni-card--full":o.isFull,"uni-card--shadow":o.isShadow,"uni-card--border":o.border}]),style:r({margin:o.isFull?0:o.margin,padding:o.spacing,"box-shadow":o.isShadow?o.shadow:""})},{default:l((()=>[i(e.$slots,"cover",{},(()=>[o.cover?(t(),a(v,{key:0,class:"uni-card__cover"},{default:l((()=>[u(_,{class:"uni-card__cover-image",mode:"widthFix",onClick:s[0]||(s[0]=e=>y.onClick("cover")),src:o.cover},null,8,["src"])])),_:1})):h("",!0)]),!0),i(e.$slots,"title",{},(()=>[o.title||o.extra?(t(),a(v,{key:0,class:"uni-card__header"},{default:l((()=>[u(v,{class:"uni-card__header-box",onClick:s[1]||(s[1]=e=>y.onClick("title"))},{default:l((()=>[o.thumbnail?(t(),a(v,{key:0,class:"uni-card__header-avatar"},{default:l((()=>[u(_,{class:"uni-card__header-avatar-image",src:o.thumbnail,mode:"aspectFit"},null,8,["src"])])),_:1})):h("",!0),u(v,{class:"uni-card__header-content"},{default:l((()=>[u(k,{class:"uni-card__header-content-title uni-ellipsis"},{default:l((()=>[c(m(o.title),1)])),_:1}),o.title&&o.subTitle?(t(),a(k,{key:0,class:"uni-card__header-content-subtitle uni-ellipsis"},{default:l((()=>[c(m(o.subTitle),1)])),_:1})):h("",!0)])),_:1})])),_:1}),u(v,{class:"uni-card__header-extra",onClick:s[2]||(s[2]=e=>y.onClick("extra"))},{default:l((()=>[u(k,{class:"uni-card__header-extra-text"},{default:l((()=>[c(m(o.extra),1)])),_:1})])),_:1})])),_:1})):h("",!0)]),!0),u(v,{class:"uni-card__content",style:r({padding:o.padding}),onClick:s[3]||(s[3]=e=>y.onClick("content"))},{default:l((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),u(v,{class:"uni-card__actions",onClick:s[4]||(s[4]=e=>y.onClick("actions"))},{default:l((()=>[i(e.$slots,"actions",{},void 0,!0)])),_:3})])),_:3},8,["class","style"])}],["__scopeId","data-v-b4135a35"]]);const A=I({name:"uniFormsItem",options:{virtualHost:!0},provide(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:()=>null},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:()=>({errMsg:"",isRequired:!1,userRules:null,localLabelAlign:"left",localLabelWidth:"65px",localLabelPos:"left",border:!1,isFirstBorder:!1}),computed:{msg(){return this.errorMessage||this.errMsg}},watch:{"form.formRules"(e){this.init()},"form.labelWidth"(e){this.localLabelWidth=this._labelWidthUnit(e)},"form.labelPosition"(e){this.localLabelPos=this._labelPosition()},"form.labelAlign"(e){}},created(){this.init(!0),this.name&&this.form&&this.$watch((()=>this.form._getDataValue(this.name,this.form.localData)),((e,t)=>{if(!this.form._isEqual(e,t)){const t=this.itemSetValue(e);this.onFieldChange(t,!1)}}),{immediate:!1})},unmounted(){this.__isUnmounted=!0,this.unInit()},methods:{setRules(e=null){this.userRules=e,this.init(!1)},setValue(){},async onFieldChange(e,t=!0){const{formData:a,localData:l,errShowType:i,validateCheck:r,validateTrigger:n,_isRequiredField:s,_realName:o}=this.form,u=o(this.name);e||(e=this.form.formData[u]);const d=this.itemRules.rules&&this.itemRules.rules.length;if(!this.validator||!d||0===d)return;const h=s(this.itemRules.rules||[]);let c=null;return"bind"===n||t?(c=await this.validator.validateUpdate({[u]:e},a),h||void 0!==e&&""!==e||(c=null),c&&c.errorMessage?("undertext"===i&&(this.errMsg=c?c.errorMessage:""),"toast"===i&&p({title:c.errorMessage||"校验错误",icon:"none"}),"modal"===i&&b({title:"提示",content:c.errorMessage||"校验错误"})):this.errMsg="",r(c||null)):this.errMsg="",c||null},init(e=!1){const{validator:t,formRules:a,childrens:l,formData:i,localData:r,_realName:n,labelWidth:s,_getDataValue:o,_setDataValue:u}=this.form||{};if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(s),this.localLabelPos=this._labelPosition(),this.isRequired=this.required,this.form&&e&&l.push(this),!t||!a)return;this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;const d=n(this.name),h=this.userRules||this.rules;"object"==typeof a&&h&&(a[d]={rules:h},t.updateSchema(a));const c=a[d]||{};this.itemRules=c,this.validator=t,this.itemSetValue(o(this.name,r)),this.isRequired=this._isRequired()},unInit(){if(this.form){const{childrens:e,formData:t,_realName:a}=this.form;e.forEach(((e,l)=>{e===this&&(this.form.childrens.splice(l,1),delete t[a(e.name)])}))}},itemSetValue(e){const t=this.form._realName(this.name),a=this.itemRules.rules||[],l=this.form._getValue(t,e,a);return this.form._setDataValue(t,this.form.formData,l),l},clearValidate(){this.errMsg=""},_isRequired(){return this.required},_justifyContent(){if(this.form){const{labelAlign:e}=this.form;let t=this.labelAlign?this.labelAlign:e;if("left"===t)return"flex-start";if("center"===t)return"center";if("right"===t)return"flex-end"}return"flex-start"},_labelWidthUnit(e){return this.num2px(this.labelWidth?this.labelWidth:e||(this.label?65:"auto"))},_labelPosition(){return this.form&&this.form.labelPosition||"left"},isTrigger:(e,t,a)=>"submit"!==e&&e?"bind":void 0===e?"bind"!==t?t?"submit":""===a?"bind":"submit":"bind":"submit",num2px:e=>"number"==typeof e?`${e}px`:e}},[["render",function(e,s,o,g,p,b){const y=f,_=n;return t(),a(_,{class:d(["uni-forms-item",["is-direction-"+p.localLabelPos,p.border?"uni-forms-item--border":"",p.border&&p.isFirstBorder?"is-first-border":""]])},{default:l((()=>[i(e.$slots,"label",{},(()=>[u(_,{class:d(["uni-forms-item__label",{"no-label":!o.label&&!p.isRequired}]),style:r({width:p.localLabelWidth,justifyContent:p.localLabelAlign})},{default:l((()=>[p.isRequired?(t(),a(y,{key:0,class:"is-required"},{default:l((()=>[c("*")])),_:1})):h("",!0),u(y,null,{default:l((()=>[c(m(o.label),1)])),_:1})])),_:1},8,["class","style"])]),!0),u(_,{class:"uni-forms-item__content"},{default:l((()=>[i(e.$slots,"default",{},void 0,!0),u(_,{class:d(["uni-forms-item__error",{"msg--active":b.msg}])},{default:l((()=>[u(y,null,{default:l((()=>[c(m(b.msg),1)])),_:1})])),_:1},8,["class"])])),_:3})])),_:3},8,["class"])}],["__scopeId","data-v-f7ee578b"]]);var j={email:/^\S+?@\S+?\.\S+?$/,idcard:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i")};const $={int:"integer",bool:"boolean",double:"number",long:"number",password:"string"};function N(e,t=""){["label"].forEach((t=>{void 0===e[t]&&(e[t]="")}));let a=t;for(let l in e){let t=new RegExp("{"+l+"}");a=a.replace(t,e[l])}return a}const T={integer:e=>T.number(e)&&parseInt(e,10)===e,string:e=>"string"==typeof e,number:e=>!isNaN(e)&&"number"==typeof e,boolean:function(e){return"boolean"==typeof e},float:function(e){return T.number(e)&&!T.integer(e)},array:e=>Array.isArray(e),object:e=>"object"==typeof e&&!T.array(e),date:e=>e instanceof Date,timestamp(e){return!(!this.integer(e)||Math.abs(e).toString().length>16)},file:e=>"string"==typeof e.url,email:e=>"string"==typeof e&&!!e.match(j.email)&&e.length<255,url:e=>"string"==typeof e&&!!e.match(j.url),pattern(e,t){try{return new RegExp(e).test(t)}catch(a){return!1}},method:e=>"function"==typeof e,idcard:e=>"string"==typeof e&&!!e.match(j.idcard),"url-https"(e){return this.url(e)&&e.startsWith("https://")},"url-scheme":e=>e.startsWith("://"),"url-web":e=>!1};const D={required:(e,t,a)=>e.required&&function(e,t){return null==e||"string"==typeof e&&!e||!(!Array.isArray(e)||e.length)||"object"===t&&!Object.keys(e).length}(t,e.format||typeof t)?N(e,e.errorMessage||a.required):null,range(e,t,a){const{range:l,errorMessage:i}=e;let r=new Array(l.length);for(let s=0;s<l.length;s++){const e=l[s];T.object(e)&&void 0!==e.value?r[s]=e.value:r[s]=e}let n=!1;return Array.isArray(t)?n=new Set(t.concat(r)).size===r.length:r.indexOf(t)>-1&&(n=!0),n?null:N(e,i||a.enum)},rangeNumber(e,t,a){if(!T.number(t))return N(e,e.errorMessage||a.pattern.mismatch);let{minimum:l,maximum:i,exclusiveMinimum:r,exclusiveMaximum:n}=e,s=r?t<=l:t<l,o=n?t>=i:t>i;return void 0!==l&&s?N(e,e.errorMessage||a.number[r?"exclusiveMinimum":"minimum"]):void 0!==i&&o?N(e,e.errorMessage||a.number[n?"exclusiveMaximum":"maximum"]):void 0!==l&&void 0!==i&&(s||o)?N(e,e.errorMessage||a.number.range):null},rangeLength(e,t,a){if(!T.string(t)&&!T.array(t))return N(e,e.errorMessage||a.pattern.mismatch);let l=e.minLength,i=e.maxLength,r=t.length;return void 0!==l&&r<l?N(e,e.errorMessage||a.length.minLength):void 0!==i&&r>i?N(e,e.errorMessage||a.length.maxLength):void 0!==l&&void 0!==i&&(r<l||r>i)?N(e,e.errorMessage||a.length.range):null},pattern:(e,t,a)=>T.pattern(e.pattern,t)?null:N(e,e.errorMessage||a.pattern.mismatch),format(e,t,a){var l=Object.keys(T),i=$[e.format]?$[e.format]:e.format||e.arrayType;return l.indexOf(i)>-1&&!T[i](t)?N(e,e.errorMessage||a.typeError):null},arrayTypeFormat(e,t,a){if(!Array.isArray(t))return N(e,e.errorMessage||a.typeError);for(let l=0;l<t.length;l++){const i=t[l];let r=this.format(e,i,a);if(null!==r)return r}return null}};class O extends class{constructor(e){this._message=e}async validateRule(e,t,a,l,i){var r=null;let n=t.rules;if(n.findIndex((e=>e.required))<0){if(null==a)return r;if("string"==typeof a&&!a.length)return r}var s=this._message;if(void 0===n)return s.default;for(var o=0;o<n.length;o++){let u=n[o],d=this._getValidateType(u);if(Object.assign(u,{label:t.label||`["${e}"]`}),D[d]&&null!=(r=D[d](u,a,s)))break;if(u.validateExpr){let e=Date.now();if(!1===u.validateExpr(a,i,e)){r=this._getMessage(u,u.errorMessage||this._message.default);break}}if(u.validateFunction&&null!==(r=await this.validateFunction(u,a,l,i,d)))break}return null!==r&&(r=s.TAG+r),r}async validateFunction(e,t,a,l,i){let r=null;try{let n=null;const s=await e.validateFunction(e,t,l||a,(e=>{n=e}));(n||"string"==typeof s&&s||!1===s)&&(r=this._getMessage(e,n||s,i))}catch(n){r=this._getMessage(e,n.message,i)}return r}_getMessage(e,t,a){return N(e,t||e.errorMessage||this._message[a]||t.default)}_getValidateType(e){var t="";return e.required?t="required":e.format?t="format":e.arrayType?t="arrayTypeFormat":e.range?t="range":void 0!==e.maximum||void 0!==e.minimum?t="rangeNumber":void 0!==e.maxLength||void 0!==e.minLength?t="rangeLength":e.pattern?t="pattern":e.validateFunction&&(t="validateFunction"),t}}{constructor(e,t){super(O.message),this._schema=e,this._options=t||null}updateSchema(e){this._schema=e}async validate(e,t){let a=this._checkFieldInSchema(e);return a||(a=await this.invokeValidate(e,!1,t)),a.length?a[0]:null}async validateAll(e,t){let a=this._checkFieldInSchema(e);return a||(a=await this.invokeValidate(e,!0,t)),a}async validateUpdate(e,t){let a=this._checkFieldInSchema(e);return a||(a=await this.invokeValidateUpdate(e,!1,t)),a.length?a[0]:null}async invokeValidate(e,t,a){let l=[],i=this._schema;for(let r in i){let n=i[r],s=await this.validateRule(r,n,e[r],e,a);if(null!=s&&(l.push({key:r,errorMessage:s}),!t))break}return l}async invokeValidateUpdate(e,t,a){let l=[];for(let i in e){let r=await this.validateRule(i,this._schema[i],e[i],e,a);if(null!=r&&(l.push({key:i,errorMessage:r}),!t))break}return l}_checkFieldInSchema(e){var t=Object.keys(e),a=Object.keys(this._schema);if(new Set(t.concat(a)).size===a.length)return"";var l=t.filter((e=>a.indexOf(e)<0));return[{key:"invalid",errorMessage:N({field:JSON.stringify(l)},O.message.TAG+O.message.defaultInvalid)}]}}O.message=new function(){return{TAG:"",default:"验证错误",defaultInvalid:"提交的字段{field}在数据库中并不存在",validateFunction:"验证无效",required:"{label}必填",enum:"{label}超出范围",timestamp:"{label}格式无效",whitespace:"{label}不能为空",typeError:"{label}类型无效",date:{format:"{label}日期{value}格式无效",parse:"{label}日期无法解析,{value}无效",invalid:"{label}日期{value}无效"},length:{minLength:"{label}长度不能少于{minLength}",maxLength:"{label}长度不能超过{maxLength}",range:"{label}必须介于{minLength}和{maxLength}之间"},number:{minimum:"{label}不能小于{minimum}",maximum:"{label}不能大于{maximum}",exclusiveMinimum:"{label}不能小于等于{minimum}",exclusiveMaximum:"{label}不能大于等于{maximum}",range:"{label}必须介于{minimum}and{maximum}之间"},pattern:{mismatch:"{label}格式不匹配"}}};const U=(e,t,a)=>{const l=a.find((e=>{return e.format&&("int"===(t=e.format)||"double"===t||"number"===t||"timestamp"===t);var t})),i=a.find((e=>e.format&&"boolean"===e.format||"bool"===e.format));return l&&(t=t||0===t?J(Number(t))?Number(t):t:null),i&&(t=!!G(t)&&t),t},q=(e,t)=>H(t,e),W=(e,t={})=>{const a=z(e);if("object"==typeof a&&Array.isArray(a)&&a.length>1){return a.reduce(((e,t)=>e+`#${t}`),"_formdata_")}return a[0]||e},E=e=>{let t=e.replace("_formdata_#","");return t=t.split("#").map((e=>J(e)?Number(e):e)),t},P=(e,t,a)=>("object"!=typeof e||z(t).reduce(((e,t,l,i)=>l===i.length-1?(e[t]=a,null):(t in e||(e[t]=/^[0-9]{1,}$/.test(i[l+1])?[]:{}),e[t])),e),e);function z(e){return Array.isArray(e)?e:e.replace(/\[/g,".").replace(/\]/g,"").split(".")}const H=(e,t,a="undefined")=>{let l=z(t).reduce(((e,t)=>(e||{})[t]),e);return l&&void 0===l?a:l},J=e=>!isNaN(Number(e)),G=e=>"boolean"==typeof e;const X=I({name:"uniForms",emits:["validate","submit"],options:{virtualHost:!0},props:{value:{type:Object,default:()=>null},modelValue:{type:Object,default:()=>null},model:{type:Object,default:()=>null},rules:{type:Object,default:()=>({})},errShowType:{type:String,default:"undertext"},validateTrigger:{type:String,default:"submit"},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:"left"},border:{type:Boolean,default:!1}},provide(){return{uniForm:this}},data:()=>({formData:{},formRules:{}}),computed:{localData(){const e=this.model||this.modelValue||this.value;return e?(t=e,JSON.parse(JSON.stringify(t))):{};var t}},watch:{rules:{handler:function(e,t){this.setRules(e)},deep:!0,immediate:!0}},created(){y().$vm.$.appContext.config.globalProperties.binddata||(y().$vm.$.appContext.config.globalProperties.binddata=function(e,t,a){if(a)this.$refs[a].setValue(e,t);else{let a;for(let e in this.$refs){const t=this.$refs[e];if(t&&t.$options&&"uniForms"===t.$options.name){a=t;break}}if(!a)return console.error("当前 uni-froms 组件缺少 ref 属性");a.setValue(e,t)}}),this.childrens=[],this.inputChildrens=[],this.setRules(this.rules)},methods:{setRules(e){this.formRules=Object.assign({},this.formRules,e),this.validator=new O(e)},setValue(e,t){let a=this.childrens.find((t=>t.name===e));return a?(this.formData[e]=U(0,t,this.formRules[e]&&this.formRules[e].rules||[]),a.onFieldChange(this.formData[e])):null},validate(e,t){return this.checkAll(this.formData,e,t)},validateField(e=[],t){e=[].concat(e);let a={};return this.childrens.forEach((t=>{const l=W(t.name);-1!==e.indexOf(l)&&(a=Object.assign({},a,{[l]:this.formData[l]}))})),this.checkAll(a,[],t)},clearValidate(e=[]){e=[].concat(e),this.childrens.forEach((t=>{if(0===e.length)t.errMsg="";else{const a=W(t.name);-1!==e.indexOf(a)&&(t.errMsg="")}}))},submit(e,t,a){for(let l in this.dataValue){this.childrens.find((e=>e.name===l))&&void 0===this.formData[l]&&(this.formData[l]=this._getValue(l,this.dataValue[l]))}return a||console.warn("submit 方法即将废弃，请使用validate方法代替！"),this.checkAll(this.formData,e,t,"submit")},async checkAll(e,t,a,l){if(!this.validator)return;let i,r=[];for(let u in e){const e=this.childrens.find((e=>W(e.name)===u));e&&r.push(e)}a||"function"!=typeof t||(a=t),!a&&"function"!=typeof a&&Promise&&(i=new Promise(((e,t)=>{a=function(a,l){a?t(a):e(l)}})));let n=[],s=JSON.parse(JSON.stringify(e));for(let u in r){const e=r[u];let t=W(e.name);const a=await e.onFieldChange(s[t]);if(a&&(n.push(a),"toast"===this.errShowType||"modal"===this.errShowType))break}Array.isArray(n)&&0===n.length&&(n=null),Array.isArray(t)&&t.forEach((e=>{let t=W(e),a=q(e,this.localData);void 0!==a&&(s[t]=a)})),"submit"===l?this.$emit("submit",{detail:{value:s,errors:n}}):this.$emit("validate",n);let o={};return o=((e={},t)=>{let a=JSON.parse(JSON.stringify(e)),l={};for(let i in a){let e=E(i);P(l,e,a[i])}return l})(s,this.name),a&&"function"==typeof a&&a(n,o),i&&a?i:null},validateCheck(e){this.$emit("validate",e)},_getValue:U,_isRequiredField:e=>{let t=!1;for(let a=0;a<e.length;a++){if(e[a].required){t=!0;break}}return t},_setDataValue:(e,t,a)=>(t[e]=a,a||""),_getDataValue:q,_realName:W,_isRealName:e=>/^_formdata_#*/.test(e),_isEqual:(e,t)=>{if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return e===t;var a=toString.call(e);if(a!==toString.call(t))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t}if("[object Object]"==a){var l=Object.getOwnPropertyNames(e),i=Object.getOwnPropertyNames(t);if(l.length!=i.length)return!1;for(var r=0;r<l.length;r++){var n=l[r];if(e[n]!==t[n])return!1}return!0}return"[object Array]"==a?e.toString()==t.toString():void 0}}},[["render",function(e,r,s,o,d,h){const c=_,m=n;return t(),a(m,{class:"uni-forms"},{default:l((()=>[u(c,null,{default:l((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3})}],["__scopeId","data-v-7b66846a"]]);const K=I({data:()=>({title:"",centerList:[],bottomList:[]}),onShow(){this.title=v("title"),document.title=this.title,this.centerList=v("centerList"),this.bottomList=v("bottomList")},methods:{back(){k({url:"/pages/tabBar/home/home"})},handleTitleChange(e){document.title=e,x("title",e)},handleCenterChange(e,t,a){this.centerList[a][t]=e,x("centerList",this.centerList)},handleBottomChange(e,t,a){this.bottomList[a][t]=e,x("bottomList",this.bottomList)},handleAdd(){this.bottomList.unshift({title:"",type:"",price:"",left:"",used:""}),x("bottomList",this.bottomList)},handleRemove(e){b({title:"提示",content:"确认移除这条数据？",success:function(t){t.confirm&&(this.bottomList.splice(e,1),x("bottomList",this.bottomList))}})}}},[["render",function(e,i,r,s,d,h){const m=w(o("uni-nav-bar"),R),f=w(o("uni-easyinput"),F),g=w(o("uni-card"),B),p=w(o("uni-forms-item"),A),b=w(o("uni-forms"),X),y=w(o("uni-icons"),L),_=n;return t(),a(_,null,{default:l((()=>[u(m,{"left-text":"返回",title:"设置",onClickLeft:h.back},null,8,["onClickLeft"]),u(g,{title:"应用标题",extra:"展示在顶部的文字"},{default:l((()=>[u(f,{type:"text",modelValue:d.title,"onUpdate:modelValue":i[0]||(i[0]=e=>d.title=e),placeholder:"请输入应用标题",onInput:h.handleTitleChange},null,8,["modelValue","onInput"])])),_:1}),u(g,{title:"首页中部卡片数据"},{default:l((()=>[u(b,null,{default:l((()=>[(t(!0),C(V,null,S(d.centerList,((e,i)=>(t(),a(g,{key:i},{default:l((()=>[u(p,{label:"标题"},{default:l((()=>[u(f,{modelValue:e.title,"onUpdate:modelValue":t=>e.title=t,onInput:e=>h.handleCenterChange(e,"title",i)},null,8,["modelValue","onUpdate:modelValue","onInput"])])),_:2},1024),u(p,{label:"类型"},{default:l((()=>[u(f,{modelValue:e.type,"onUpdate:modelValue":t=>e.type=t,onInput:e=>h.handleCenterChange(e,"type",i)},null,8,["modelValue","onUpdate:modelValue","onInput"])])),_:2},1024),u(p,{label:"金额"},{default:l((()=>[u(f,{modelValue:e.price,"onUpdate:modelValue":t=>e.price=t,onInput:e=>h.handleCenterChange(e,"price",i)},null,8,["modelValue","onUpdate:modelValue","onInput"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),u(g,{title:"首页列表数据"},{default:l((()=>[u(b,null,{default:l((()=>[u(_,{class:"add",onClick:h.handleAdd},{default:l((()=>[u(y,{type:"plusempty",size:"14"}),c("插入一条数据")])),_:1},8,["onClick"]),(t(!0),C(V,null,S(d.bottomList,((e,i)=>(t(),a(g,{key:i},{default:l((()=>[u(y,{type:"close",class:"close",size:"24",color:"red",onClick:e=>h.handleRemove(i)},null,8,["onClick"]),u(p,{label:"标题",style:{"margin-top":"12px"}},{default:l((()=>[u(f,{modelValue:e.title,"onUpdate:modelValue":t=>e.title=t,onInput:e=>h.handleBottomChange(e,"title",i)},null,8,["modelValue","onUpdate:modelValue","onInput"])])),_:2},1024),u(p,{label:"类型"},{default:l((()=>[u(f,{modelValue:e.type,"onUpdate:modelValue":t=>e.type=t,onInput:e=>h.handleBottomChange(e,"type",i)},null,8,["modelValue","onUpdate:modelValue","onInput"])])),_:2},1024),u(p,{label:"金额"},{default:l((()=>[u(f,{modelValue:e.price,"onUpdate:modelValue":t=>e.price=t,onInput:e=>h.handleBottomChange(e,"price",i)},null,8,["modelValue","onUpdate:modelValue","onInput"])])),_:2},1024),u(p,{label:"剩余"},{default:l((()=>[u(f,{modelValue:e.left,"onUpdate:modelValue":t=>e.left=t,onInput:e=>h.handleBottomChange(e,"left",i)},null,8,["modelValue","onUpdate:modelValue","onInput"])])),_:2},1024),u(p,{label:"已赚"},{default:l((()=>[u(f,{modelValue:e.used,"onUpdate:modelValue":t=>e.used=t,onInput:e=>h.handleBottomChange(e,"used",i)},null,8,["modelValue","onUpdate:modelValue","onInput"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-d8f24565"]]);export{K as default};
