import{s,p as t,q as e,B as l,x as a,o as c,c as i,w as n,f as u,j as o,k as d,F as f,e as r,a as _,d as p,g as m,r as L,z as g,t as h}from"./index-0e92d750.js";import{r as y,_ as j}from"./uni-app.es.fa42fef7.js";import{_ as k}from"./_plugin-vue_export-helper.1b428a4d.js";const x=k({data:()=>({selectList:[]}),onShow(){s({title:t("title")||"圈子"}),this.selectList=t("selectList")||[]},methods:{clear(){e("selectList",[]);let s=this;l({title:"提示",content:"确认清空任务数据？",success:function(t){t.confirm&&(s.selectList=[],e("selectList",[]),a({title:"清空成功"}))}})}}},[["render",function(s,t,e,l,a,k){const x=u,b=m,v=y(L("uni-icons"),j);return c(),i(x,{class:"page",onLongpress:k.clear},{default:n((()=>[a.selectList.length?(c(),i(x,{key:0,class:"bottom-list"},{default:n((()=>[(c(!0),o(f,null,d(a.selectList,((s,t)=>(c(),i(x,{class:"bottom-item",key:t},{default:n((()=>[_(x,{class:"img"},{default:n((()=>[g("img",{src:s.img,alt:""},null,8,["src"])])),_:2},1024),_(x,{class:"info"},{default:n((()=>[_(x,{class:"title"},{default:n((()=>[_(b,null,{default:n((()=>[p(h(s.title),1)])),_:2},1024),_(b,null,{default:n((()=>[p("+"+h(s.price),1)])),_:2},1024)])),_:2},1024),_(x,{class:"type"},{default:n((()=>[_(b,null,{default:n((()=>[p("ID:"+h(10320+t),1)])),_:2},1024),_(b,null,{default:n((()=>[p(h(s.type),1)])),_:2},1024)])),_:2},1024),_(x,{class:"left"},{default:n((()=>[_(b,null,{default:n((()=>[p("已接 "+h(s.count),1)])),_:2},1024),_(b,{class:"btn"},{default:n((()=>[p("开始")])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):r("",!0),a.selectList.length?r("",!0):(c(),i(x,{key:1,class:"empty"},{default:n((()=>[_(v,{type:"folder-add",size:"80",color:"#999"}),_(b,null,{default:n((()=>[p("暂无数据")])),_:1})])),_:1}))])),_:1},8,["onLongpress"])}],["__scopeId","data-v-58557eac"]]);export{x as default};
