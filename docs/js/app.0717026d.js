(function(e){function n(n){for(var r,l,i=n[0],u=n[1],c=n[2],p=0,f=[];p<i.length;p++)l=i[p],a[l]&&f.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(n);while(f.length)f.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var u=t[i];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},a={app:0},o=[];function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/ares-form-builder/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var s=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),a=t.n(r);a.a},"154b":function(e,n,t){"use strict";var r=t("9278"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("HelloWorld")],1)},o=[],l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("draggable",{staticClass:"box",attrs:{group:{name:"people",pull:"clone",put:!1}},model:{value:e.myArray,callback:function(n){e.myArray=n},expression:"myArray"}},e._l(e.myArray,function(n){return t(n.type||"div",{key:n.id,tag:"div",staticClass:"item"},[e._v(e._s(n.name))])}),1),t("div",{staticStyle:{height:"50px"}}),t("draggable",{staticClass:"box",attrs:{group:"people"},on:{change:e.change},model:{value:e.myArray2,callback:function(n){e.myArray2=n},expression:"myArray2"}},e._l(e.myArray2,function(n,r){return t("div",{key:r,staticClass:"item",on:{click:function(n){return e.itemClick(r)}}},[e._v(e._s(n.name))])}),0)],1)},i=[],u=t("310e"),c=t.n(u),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("input",{attrs:{type:"text"}})},p=[],f={name:"v-input",data:function(){return{type:"input",value:"",name:"haha"}}},d=f,m=t("2877"),y=Object(m["a"])(d,s,p,!1,null,"7e12d619",null),v=y.exports,b={name:"HelloWorld",components:{draggable:c.a},data:function(){return{myArray:[{id:1,name:"1"},{id:2,name:"2"},{id:3,name:"3"},{name:"4",key:"fore"},v.data()],myArray2:[{id:4,name:"4"},{id:5,name:"5"},{id:6,name:"6"}]}},methods:{change:function(){console.log(this.myArray2),console.log(v.data())},itemClick:function(e){console.log(e)}}},g=b,h=(t("154b"),Object(m["a"])(g,l,i,!1,null,"5a954d99",null)),_=h.exports,x={name:"app",components:{HelloWorld:_}},O=x,j=(t("034f"),Object(m["a"])(O,a,o,!1,null,null,null)),k=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(k)}}).$mount("#app")},"64a9":function(e,n,t){},9278:function(e,n,t){}});
//# sourceMappingURL=app.0717026d.js.map