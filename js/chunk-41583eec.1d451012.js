(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41583eec"],{"01c2":function(t,a,s){},"1f60":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.sousou,expression:"sousou"}],staticStyle:{width:"60%","margin-top":"20px","margin-bottom":"10px",height:"20px"},attrs:{placeholder:"输入歌曲名字/歌手/歌词"},domProps:{value:t.sousou},on:{change:t.slgedan,input:function(a){a.target.composing||(t.sousou=a.target.value)}}}),s("ul",{staticClass:"gedan"},t._l(t.ret,(function(a){return s("li",{key:a.id,staticClass:"gelan"},[s("div",{staticClass:"mvimg"},[s("img",{attrs:{src:a.cover,alt:""},on:{click:function(s){return t.bofang(a)}}})]),s("div",{staticClass:"mvjj"},[s("h3",{staticClass:"mname"},[t._v(t._s(a.name))]),s("p",[s("span",{staticStyle:{"font-weight":"bold","padding-right":"10px"}},[t._v("播放量:")]),t._v(t._s(a.playCount))])])])})),0)])},n=[],i={name:"mv",data:function(){return{sousou:"",ret:[]}},methods:{slgedan:function(){var t=this;this.$axios.get("https://api.imjad.cn/cloudmusic/",{params:{type:"search",s:this.sousou,search_type:1004}}).then((function(a){a.data.result?t.ret=a.data.result.mvs:alert("搜索结果为空！")}))},bofang:function(t){var a=this;this.$axios.get("https://api.imjad.cn/cloudmusic/",{params:{type:"mv",id:t.id,search_type:1004}}).then((function(t){a.$router.push({name:"mvbofang",params:{mvlist:t.data.data}})}))}}},o=i,u=(s("3188"),s("2877")),c=Object(u["a"])(o,e,n,!1,null,"991d3056",null);a["default"]=c.exports},3188:function(t,a,s){"use strict";var e=s("01c2"),n=s.n(e);n.a}}]);
//# sourceMappingURL=chunk-41583eec.1d451012.js.map