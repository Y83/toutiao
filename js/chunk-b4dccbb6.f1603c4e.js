(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4dccbb6"],{1748:function(t,e,n){},2423:function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return f})),n.d(e,"i",(function(){return d}));var r=n("b775"),a=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_1/articles",params:t})},i=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})},c=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})},o=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})},s=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})},u=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})},l=function(t,e){return Object(r["a"])({method:"GET",url:"/app/v1_0/users/".concat(t,"/articles"),params:e})};function f(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/article/collections",params:t})}function d(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/histories",params:t})}},2909:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){if(Array.isArray(t))return r(t)}n.d(e,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("b0c0"),n("25f0");function c(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return a(t)||i(t)||c(t)||o()}},"32b4":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.value,(function(e,r){return n("div",{key:r},[t._t("default",null,{item:e})],2)})),0)},a=[],i=n("2909"),c=(n("96cf"),n("1da1")),o={name:"LoadingList",props:{fn:{type:Function,required:!0},value:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,finished:!1,page:1}},created:function(){},methods:{onLoad:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fn({page:t.page,per_page:20});case 2:r=e.sent,a=r.data,c=a.data.results,(n=t.value).push.apply(n,Object(i["a"])(c)),console.log(c),t.loading=!1,c.length?t.page++:t.finished=!0;case 9:case"end":return e.stop()}}),e)})))()}}},s=o,u=n("2877"),l=Object(u["a"])(s,r,a,!1,null,"6e8b0de4",null);e["a"]=l.exports},"4df4":function(t,e,n){"use strict";var r=n("0366"),a=n("7b0b"),i=n("9bdd"),c=n("e95a"),o=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,f,d,p,v=a(t),m="function"==typeof this?this:Array,b=arguments.length,h=b>1?arguments[1]:void 0,_=void 0!==h,g=u(v),y=0;if(_&&(h=r(h,b>2?arguments[2]:void 0,2)),void 0==g||m==Array&&c(g))for(e=o(v.length),n=new m(e);e>y;y++)p=_?h(v[y],y):v[y],s(n,y,p);else for(f=g.call(v),d=f.next,n=new m;!(l=d.call(f)).done;y++)p=_?i(f,h,[l.value,y],!0):l.value,s(n,y,p);return n.length=y,n}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),i="["+a+"]",c=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,c;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(c=i.prototype)&&c!==n.prototype&&a(t,c),t}},"8fb2":function(t,e,n){"use strict";n("1748")},"9bdd":function(t,e,n){var r=n("825a"),a=n("2a62");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(c){throw a(t),c}}},a630:function(t,e,n){var r=n("23e7"),a=n("4df4"),i=n("1c7e"),c=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:c},{from:a})},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),i=n("94ca"),c=n("6eeb"),o=n("5135"),s=n("c6b6"),u=n("7156"),l=n("c04e"),f=n("d039"),d=n("7c73"),p=n("241c").f,v=n("06cf").f,m=n("9bf2").f,b=n("58a8").trim,h="Number",_=a[h],g=_.prototype,y=s(d(g))==h,C=function(t){var e,n,r,a,i,c,o,s,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=b(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(i=u.slice(2),c=i.length,o=0;o<c;o++)if(s=i.charCodeAt(o),s<48||s>a)return NaN;return parseInt(i,r)}return+u};if(i(h,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var O,j=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof j&&(y?f((function(){g.valueOf.call(n)})):s(n)!=h)?u(new _(C(e)),n,j):C(e)},w=r?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;w.length>E;E++)o(_,O=w[E])&&!o(j,O)&&m(j,O,v(_,O));j.prototype=g,g.constructor=j,c(a,h,j)}},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,i=Function.prototype,c=i.toString,o=/^\s*function ([^ (]*)/,s="name";r&&!(s in i)&&a(i,s,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(t){return""}}})},c24f:function(t,e,n){"use strict";n.d(e,"i",(function(){return a})),n.d(e,"j",(function(){return i})),n.d(e,"g",(function(){return c})),n.d(e,"f",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"l",(function(){return f})),n.d(e,"k",(function(){return d})),n.d(e,"e",(function(){return p})),n.d(e,"d",(function(){return v})),n.d(e,"c",(function(){return m}));n("d3b7"),n("25f0");var r=n("b775"),a=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/authorizations",data:t})},i=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/sms/codes/"+t})},c=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user"})},o=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/channels"})},s=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:t}})},u=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/followings/"+t})},l=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/profile"})},f=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})};function d(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})}var p=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/users/".concat(t)})};function v(t,e){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/followings",params:e,data:{target:t.toString()}})}function m(t,e){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/followers",params:e,data:{target:t.toString()}})}},c52c:function(t,e,n){"use strict";n("e06e")},e06e:function(t,e,n){},e382:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-container"},[n("van-nav-bar",{staticClass:"page-nav-bar",attrs:{"left-arrow":"",title:t.user.name,fixed:""},on:{"click-left":function(e){return t.$router.back()}}}),t.user.id?n("div",{staticClass:"user-info"},[n("div",{staticClass:"base-info"},[n("van-image",{staticClass:"avatar",attrs:{round:"",fit:"cover",src:t.user.photo}}),n("div",{staticClass:"right-area"},[n("div",{staticClass:"stats-wrap"},[n("div",{staticClass:"stats-item"},[n("span",{staticClass:"count"},[t._v(t._s(t.user.art_count))]),n("span",{staticClass:"text"},[t._v("发布")])]),n("div",{staticClass:"stats-item"},[n("span",{staticClass:"count"},[t._v(t._s(t.user.follow_count))]),n("span",{staticClass:"text"},[t._v("关注")])]),n("div",{staticClass:"stats-item"},[n("span",{staticClass:"count"},[t._v(t._s(t.user.fans_count))]),n("span",{staticClass:"text"},[t._v("粉丝")])]),n("div",{staticClass:"stats-item"},[n("span",{staticClass:"count"},[t._v(t._s(t.user.like_count))]),n("span",{staticClass:"text"},[t._v("获赞")])])]),n("follow-user",{attrs:{"user-id":t.user.id},model:{value:t.user.is_following,callback:function(e){t.$set(t.user,"is_following",e)},expression:"user.is_following"}})],1)],1),n("div",{staticClass:"label-info"},[t.user.is_media?n("div",[n("span",[t._v("认证：")]),n("span",[t._v(t._s(t.user.certi))])]):t._e(),n("div",[n("span",[t._v("简介：")]),n("span",[t._v(t._s(t.user.intro))])])])]):t._e(),n("loading-list",{staticClass:"list",attrs:{fn:t.getArticlesByUser},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item;return[n("article-item",{attrs:{article:e}})]}}])})],1)},a=[],i=(n("b0c0"),n("a9e3"),n("96cf"),n("1da1")),c=n("c24f"),o=n("32b4"),s=n("f50e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-item",on:{click:function(e){t.$router.push({name:"article",params:{articleId:t.article.art_id.toString()}})}}},[n("div",{staticClass:"author"},[n("van-image",{staticClass:"avatar",attrs:{round:"",fit:"cover",src:"https://img.yzcdn.cn/vant/cat.jpeg"}}),n("div",[n("div",{staticClass:"name"},[t._v(t._s(t.article.aut_name))]),n("div",{staticClass:"date"},[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])],1),t.article.cover.type?n("div",{staticClass:"title-cover"},[n("div",{staticClass:"title"},[t._v(t._s(t.article.title))]),n("van-image",{staticClass:"cover",attrs:{fit:"cover",src:t.article.cover.images[0]}})],1):n("div",{staticClass:"title"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"action"},[n("div",{staticClass:"action-item"},[n("van-icon",{staticClass:"comment-icon",attrs:{name:"comment-o"}}),n("span",[t._v(t._s(t.article.comm_count))])],1),n("div",{staticClass:"action-item"},[n("van-icon",{attrs:{name:"good-job-o"}}),n("span",[t._v(t._s(t.article.like_count))])],1),n("div",{staticClass:"action-item"},[n("van-icon",{attrs:{name:"star-o"}}),n("span",[t._v(t._s(t.article.collect_count))])],1)])])},l=[],f={name:"",components:{},props:{article:{type:Object,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},methods:{}},d=f,p=(n("c52c"),n("2877")),v=Object(p["a"])(d,u,l,!1,null,"2f961702",null),m=v.exports,b=n("2423"),h={name:"UserIndex",components:{LoadingList:o["a"],FollowUser:s["a"],ArticleItem:m},props:{userId:{type:[Number,String,Object],required:!0}},data:function(){return{user:{},getArticlesByUser:b["g"].bind(null,this.userId)}},computed:{},watch:{},created:function(){this.loadUser(),this.$store.commit("removeCachePage","LayoutIndex")},mounted:function(){this.$store.commit("addCachePage","UserIndex")},methods:{loadUser:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c["e"])(t.userId);case 3:n=e.sent,r=n.data,t.user=r.data,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$toast("获取用户数据失败");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},beforeRouteLeave:function(t,e,n){var r=this.$options.name;"article"!==t.name&&this.$store.commit("removeCachePage",r),n()}},_=h,g=(n("8fb2"),Object(p["a"])(_,r,a,!1,null,"ec5897f4",null));e["default"]=g.exports},f50e:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.value?n("van-button",{attrs:{round:"",size:"small",loading:t.loading},on:{click:t.onFollow}},[t._t("default",[t._v(t._s("已关注"))])],2):n("van-button",{attrs:{type:"info",color:"#3296fa",round:"",size:"small",icon:"plus",loading:t.loading},on:{click:t.onFollow}},[t._v("关注")])},a=[],i=(n("a9e3"),n("96cf"),n("1da1")),c=n("c24f"),o={name:"FollowUser",props:{value:{type:Boolean,required:!0},userId:{type:[Number,String,Object],required:!0}},data:function(){return{loading:!1}},created:function(){},methods:{onFollow:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.loading=!0,e.prev=1,!t.value){e.next=7;break}return e.next=5,Object(c["b"])(t.userId);case 5:e.next=9;break;case 7:return e.next=9,Object(c["a"])(t.userId);case 9:t.$emit("input",!t.value),e.next=17;break;case 12:e.prev=12,e.t0=e["catch"](1),n="操作失败，请重试！",e.t0.response&&400===e.t0.response.status&&(n="不能关注自己！"),t.$toast(n);case 17:t.loading=!1;case 18:case"end":return e.stop()}}),e,null,[[1,12]])})))()}}},s=o,u=n("2877"),l=Object(u["a"])(s,r,a,!1,null,"49e2c028",null);e["a"]=l.exports},fb6a:function(t,e,n){"use strict";var r=n("23e7"),a=n("861d"),i=n("e8b5"),c=n("23cb"),o=n("50c4"),s=n("fc6a"),u=n("8418"),l=n("b622"),f=n("1dde"),d=n("ae40"),p=f("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),m=l("species"),b=[].slice,h=Math.max;r({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,e){var n,r,l,f=s(this),d=o(f.length),p=c(t,d),v=c(void 0===e?d:e,d);if(i(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[m],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return b.call(f,p,v);for(r=new(void 0===n?Array:n)(h(v-p,0)),l=0;p<v;p++,l++)p in f&&u(r,l,f[p]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-b4dccbb6.f1603c4e.js.map