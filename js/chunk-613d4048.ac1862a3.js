(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-613d4048"],{"4d63":function(e,t,r){var n=r("83ab"),s=r("da84"),a=r("94ca"),c=r("7156"),i=r("9bf2").f,o=r("241c").f,u=r("44e7"),h=r("ad6d"),l=r("9f7f"),f=r("6eeb"),d=r("d039"),p=r("69f3").set,g=r("2626"),v=r("b622"),m=v("match"),x=s.RegExp,S=x.prototype,w=/a/g,b=/a/g,T=new x(w)!==w,_=l.UNSUPPORTED_Y,k=n&&a("RegExp",!T||_||d((function(){return b[m]=!1,x(w)!=w||x(b)==b||"/a/i"!=x(w,"i")})));if(k){var O=function(e,t){var r,n=this instanceof O,s=u(e),a=void 0===t;if(!n&&s&&e.constructor===O&&a)return e;T?s&&!a&&(e=e.source):e instanceof O&&(a&&(t=h.call(e)),e=e.source),_&&(r=!!t&&t.indexOf("y")>-1,r&&(t=t.replace(/y/g,"")));var i=c(T?new x(e,t):x(e,t),n?this:S,O);return _&&r&&p(i,{sticky:r}),i},R=function(e){e in O||i(O,e,{configurable:!0,get:function(){return x[e]},set:function(t){x[e]=t}})},y=o(x),H=0;while(y.length>H)R(y[H++]);S.constructor=O,O.prototype=S,f(s,"RegExp",O)}g("RegExp")},ca77:function(e,t,r){},efe3:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-container"},[r("form",{staticClass:"search-form",attrs:{action:"/"}},[r("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词",background:"#3296fa"},on:{search:e.onSearch,cancel:e.onCancel,focus:function(t){e.isResultShow=!1}},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1),e.isResultShow?r("searchResult",{attrs:{"search-text":e.searchText}}):e.searchText?r("searchSuggesiton",{attrs:{"search-text":e.searchText},on:{search:e.onSearch}}):r("searchHistory",{attrs:{"search-histories":e.searchHistories},on:{"clear-search-histories":function(t){e.searchHistories=[]},search:e.onSearch}})],1)},s=[],a=(r("c975"),r("a434"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-history"},[r("van-cell",{attrs:{title:"搜索历史"}},[e.isDeleteShow?r("div",[r("span",{on:{click:function(t){return e.$emit("clear-search-histories")}}},[e._v("全部删除")]),e._v(" "),r("span",{on:{click:function(t){e.isDeleteShow=!1}}},[e._v("完成")])]):r("van-icon",{attrs:{name:"delete"},on:{click:function(t){e.isDeleteShow=!0}}})],1),e._l(e.searchHistories,(function(t,n){return r("van-cell",{key:n,attrs:{title:t},on:{click:function(r){return e.onSearchItemClick(t,n)}}},[r("van-icon",{directives:[{name:"show",rawName:"v-show",value:e.isDeleteShow,expression:"isDeleteShow"}],attrs:{name:"close"}})],1)}))],2)}),c=[],i={name:"searchHistory",props:{searchHistories:{type:Array,required:!0}},data:function(){return{isDeleteShow:!1}},created:function(){},methods:{onSearchItemClick:function(e,t){this.isDeleteShow?this.searchHistories.splice(t,1):this.$emit("search",e)}}},o=i,u=r("2877"),h=Object(u["a"])(o,a,c,!1,null,"0079e9ac",null),l=h.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-suggesiton"},e._l(e.suggestions,(function(t,n){return r("van-cell",{key:n,attrs:{icon:"search"},on:{click:function(r){return e.$emit("search",t)}}},[r("div",{attrs:{slot:"title"},domProps:{innerHTML:e._s(e.highlight(t))},slot:"title"})])})),1)},d=[],p=(r("4d63"),r("ac1f"),r("25f0"),r("5319"),r("96cf"),r("1da1")),g=r("b775"),v=function(e){return Object(g["a"])({method:"GET",url:"/app/v1_0/suggestion",params:{q:e}})},m=function(e){return Object(g["a"])({method:"GET",url:"/app/v1_0/search",params:e})},x=r("2ef0"),S={name:"searchSuggesiton",props:{searchText:{type:String,required:!0}},data:function(){return{suggestions:[]}},watch:{searchText:{handler:Object(x["debounce"])((function(e){this.loadSearchSuggestions(e)}),200),immediate:!0}},created:function(){},methods:{loadSearchSuggestions:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v(e);case 3:n=r.sent,s=n.data,t.suggestions=s.data.options,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),t.$toast("数据获取失败，请稍后重试");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},highlight:function(e){var t='<span style="color:#3296fa">'.concat(this.searchText,"</span>"),r=new RegExp(this.searchText,"gi");return e.replace(r,t)}}},w=S,b=Object(u["a"])(w,f,d,!1,null,"ac70d366",null),T=b.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-result"},[r("van-list",{attrs:{finished:e.finished,"finished-text":"没有更多了",error:e.error,"error-text":"加载失败，请点击重试"},on:{"update:error":function(t){e.error=t},load:e.onLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.list,(function(e,t){return r("van-cell",{key:t,attrs:{title:e.title}})})),1)],1)},k=[],O=r("2909"),R={name:"searchResult",props:{searchText:{type:String,required:!0}},data:function(){return{list:[],loading:!1,finished:!1,page:1,perPage:20,error:!1}},created:function(){},methods:{onLoad:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var r,n,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m({page:e.page,per_page:e.perPage,q:e.searchText});case 3:r=t.sent,n=r.data,s=n.data.results,s.length?((a=e.list).push.apply(a,Object(O["a"])(s)),e.loading=!1,e.page++):e.finished=!0,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),e.error=!0,e.loading=!1;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}},y=R,H=Object(u["a"])(y,_,k,!1,null,"7d6d11ac",null),E=H.exports,j=r("5d2d"),C={name:"SearchIndex",components:{searchHistory:l,searchSuggesiton:T,searchResult:E},data:function(){return{searchText:"",isResultShow:!1,searchHistories:Object(j["a"])("TOUTIAO_SEARCH_HISTORIES")||[]}},watch:{searchHistories:function(e){Object(j["b"])("TOUTIAO_SEARCH_HISTORIES",e)}},created:function(){},methods:{onSearch:function(e){this.searchText=e;var t=this.searchHistories.indexOf(e);-1!==t&&this.searchHistories.splice(t,1),this.searchHistories.unshift(e),this.isResultShow=!0},onCancel:function(){this.$router.back()}}},I=C,$=(r("ff71"),Object(u["a"])(I,n,s,!1,null,"a17ddbba",null));t["default"]=$.exports},ff71:function(e,t,r){"use strict";r("ca77")}}]);
//# sourceMappingURL=chunk-613d4048.ac1862a3.js.map