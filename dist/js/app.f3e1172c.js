(function(e){function t(t){for(var o,r,i=t[0],s=t[1],u=t[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},c={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vip-gem/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"22b8":function(e,t,n){"use strict";n("f6c3")},"3d42":function(e,t,n){e.exports=n.p+"img/frontpage.e5555982.svg"},"9bfc":function(e,t,n){},ccde:function(e,t,n){},cd1b:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(e,t,n,c,a,r){return Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.currentView),{onStartGame:e.startGame},null,8,["onStartGame"])}var a=n("d4ec"),r=n("bee2"),i=n("262e"),s=n("2caf"),u=n("9ab4"),l=n("ce1f"),d=Object(o["withScopeId"])("data-v-00338f84");Object(o["pushScopeId"])("data-v-00338f84");var p=Object(o["createVNode"])("div",{class:"play-button"},null,-1);Object(o["popScopeId"])();var f=d((function(e,t,c,a,r,i){var s=Object(o["resolveComponent"])("inline-svg");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])(s,{src:n("3d42"),onLoaded:t[1]||(t[1]=function(t){return e.svgLoaded()})},null,8,["src"]),Object(o["createVNode"])("div",{onClick:t[2]||(t[2]=function(){return e.openGameScreen&&e.openGameScreen.apply(e,arguments)}),class:"play-game"},[p])],64)})),b=n("6d5e"),m=n.n(b),v=n("cffa"),h=Object(o["defineComponent"])({name:"StartScreen",emits:["startGame"],components:{InlineSvg:m.a},methods:{openGameScreen:function(){this.$emit("startGame",!0)},svgLoaded:function(){var e=v["a"].timeline();v["a"].set(".sunbeam",{opacity:0}),v["a"].set("#logo, .play-game, .cloud",{scale:0,transformOrigin:"50% 50%"}),v["a"].set(".tile",{y:170}),v["a"].set(".gem",{opacity:0}),v["a"].set("#earth",{y:220}),e.to("#preloader",{opacity:0,duration:3,onComplete:this.removePreloader}).to("#earth",{y:0,duration:3},0).to(".cloud",{opacity:1,scale:1,duration:3,delay:-2}).to(".sunbeam",{opacity:1,duration:1,stagger:.1,delay:-1}).to(".tile",{y:0,duration:1,stagger:.1},"<").to(".gem",{opacity:1,duration:1,stagger:.1,ease:"bounce.out"},">-2").to("#logo",{scale:1,duration:2,ease:"bounce.out"},">-2").to(".play-game",{opacity:.9,scale:1,duration:1,ease:"power4.out"},">")},removePreloader:function(){var e=document.getElementById("preloader");null===e||void 0===e||e.remove()}}});n("ef73");h.render=f,h.__scopeId="data-v-00338f84";var g=h,O=Object(o["withScopeId"])("data-v-a9879ee2");Object(o["pushScopeId"])("data-v-a9879ee2");var j={class:"main-screen"};Object(o["popScopeId"])();var y=O((function(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("MainMenu"),s=Object(o["resolveComponent"])("MainGame");return Object(o["openBlock"])(),Object(o["createBlock"])("section",j,[Object(o["createVNode"])(i),Object(o["createVNode"])(s)])})),w=Object(o["withScopeId"])("data-v-3416c4c2");Object(o["pushScopeId"])("data-v-3416c4c2");var S={class:"game__wrapper"},k={class:"game"},B={class:"game__field",ref:"game-field"};Object(o["popScopeId"])();var _=w((function(e,t,n,c,a,r){return Object(o["openBlock"])(),Object(o["createBlock"])("section",S,[Object(o["createVNode"])("div",k,[Object(o["createVNode"])("div",B,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.level.tiles,(function(t,n){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],{key:n},[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(t,(function(t,c){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:c,class:"piece gem"+t.gem,style:{width:e.divWidth+"%",height:e.divHeight+"%",left:100*n/e.columns+"%",top:100*c/e.rows+"%"}},null,6)})),128))],64)})),128))],512)])])})),x=n("dafb"),I=n("2909"),M=(n("d81d"),n("cb29"),function(){function e(t,n){Object(a["a"])(this,e),this.columns=t,this.rows=n,this.tiles=Object(I["a"])(Array(t)).map((function(){return Array(n).fill(0)}))}return Object(r["a"])(e,[{key:"generate",value:function(){for(var e=0;e<this.columns;e++)for(var t=0;t<this.rows;t++)this.tiles[e][t]={gem:Math.floor(1+5*Math.random()),bottom:0}}}]),e}());v["a"].registerPlugin(x["a"]);var V=Object(o["defineComponent"])({name:"MainGame",data:function(){return{field:this.$refs["game-field"],columns:9,rows:9,level:new M(9,9),pieceWidth:0}},computed:{divWidth:function(){return 100/this.columns},divHeight:function(){return 100/this.rows},pieces:function(){return this.columns*this.rows}},methods:{},mounted:function(){this.level.generate();var e=document.querySelectorAll(".piece");x["a"].create(".piece",{type:"x,y",edgeResistance:1,lockAxis:!0,cursor:"grab",onPress:function(){x["a"].get(this.target).applyBounds({minX:-this.target.offsetWidth,minY:-this.target.offsetHeight,maxX:this.target.offsetWidth,maxY:this.target.offsetHeight}),this.startX=this.x,this.startY=this.y},onDrag:function(){var t=e.length;while(--t>-1)this.hitTest(e[t],60)&&console.log("hit")},onDragEnd:function(){var e=this.target;x["a"].get(e).disable(),v["a"].to(e,{duration:.3,x:this.startX,y:this.startY,ease:"bounce.out",onComplete:function(){x["a"].get(e).enable()}})}})}});n("d1fb");V.render=_,V.__scopeId="data-v-3416c4c2";var G=V,C=Object(o["withScopeId"])("data-v-d8ed2b70");Object(o["pushScopeId"])("data-v-d8ed2b70");var N={class:"main-menu__wrapper"},P=Object(o["createVNode"])("div",{class:"main-menu"},[Object(o["createVNode"])("svg",{viewBox:"0 0 85.2 9",xmlns:"http://www.w3.org/2000/svg"},[Object(o["createVNode"])("text",{style:{"line-height":"1.25","text-align":"center"},x:"63",y:"92.1","font-weight":"400","font-size":"10.6","font-family":"sans-serif","text-anchor":"middle",transform:"translate(-21 -84)"},[Object(o["createVNode"])("tspan",{fill:"#6ddcec"},"0")])])],-1);Object(o["popScopeId"])();var A=C((function(e,t,n,c,a,r){return Object(o["openBlock"])(),Object(o["createBlock"])("section",N,[P])})),L=Object(o["defineComponent"])({name:"MainMenu"});n("fc49");L.render=A,L.__scopeId="data-v-d8ed2b70";var W=L,F=Object(o["defineComponent"])({name:"MainScreen",components:{MainGame:G,MainMenu:W}});n("22b8");F.render=y,F.__scopeId="data-v-a9879ee2";var H=F,X=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.currentView="StartScreen",e}return Object(r["a"])(n,[{key:"startGame",value:function(){this.currentView="MainScreen"}}]),n}(l["b"]);X=Object(u["a"])([Object(l["a"])({components:{StartScreen:g,MainScreen:H}})],X);var Y=X;n("d701");Y.render=c;var D=Y,T=n("5502"),E=Object(T["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["createApp"])(D).use(E).mount("#app")},d1fb:function(e,t,n){"use strict";n("cd1b")},d701:function(e,t,n){"use strict";n("9bfc")},df4b:function(e,t,n){},ef73:function(e,t,n){"use strict";n("ccde")},f6c3:function(e,t,n){},fc49:function(e,t,n){"use strict";n("df4b")}});
//# sourceMappingURL=app.f3e1172c.js.map