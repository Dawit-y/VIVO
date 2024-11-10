import{i as qg,r as ue,R as jt,_ as oe,k as Wg,l as l_,m as cA,n as d_,o as DI,p as SI,q as II,s as Ed,j as lA}from"./index-QQyyaePt.js";function u_(d){var u,p,g="";if(typeof d=="string"||typeof d=="number")g+=d;else if(typeof d=="object")if(Array.isArray(d))for(u=0;u<d.length;u++)d[u]&&(p=u_(d[u]))&&(g&&(g+=" "),g+=p);else for(u in d)d[u]&&(g&&(g+=" "),g+=u);return g}function Fd(){for(var d,u,p=0,g="";p<arguments.length;)(d=arguments[p++])&&(u=u_(d))&&(g&&(g+=" "),g+=u);return g}var h_={exports:{}},Ot={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe=typeof Symbol=="function"&&Symbol.for,$g=fe?Symbol.for("react.element"):60103,Gg=fe?Symbol.for("react.portal"):60106,jd=fe?Symbol.for("react.fragment"):60107,Vd=fe?Symbol.for("react.strict_mode"):60108,Hd=fe?Symbol.for("react.profiler"):60114,Ud=fe?Symbol.for("react.provider"):60109,qd=fe?Symbol.for("react.context"):60110,Kg=fe?Symbol.for("react.async_mode"):60111,Wd=fe?Symbol.for("react.concurrent_mode"):60111,$d=fe?Symbol.for("react.forward_ref"):60112,Gd=fe?Symbol.for("react.suspense"):60113,MI=fe?Symbol.for("react.suspense_list"):60120,Kd=fe?Symbol.for("react.memo"):60115,Yd=fe?Symbol.for("react.lazy"):60116,TI=fe?Symbol.for("react.block"):60121,BI=fe?Symbol.for("react.fundamental"):60117,PI=fe?Symbol.for("react.responder"):60118,NI=fe?Symbol.for("react.scope"):60119;function je(d){if(typeof d=="object"&&d!==null){var u=d.$$typeof;switch(u){case $g:switch(d=d.type,d){case Kg:case Wd:case jd:case Hd:case Vd:case Gd:return d;default:switch(d=d&&d.$$typeof,d){case qd:case $d:case Yd:case Kd:case Ud:return d;default:return u}}case Gg:return u}}}function g_(d){return je(d)===Wd}Ot.AsyncMode=Kg;Ot.ConcurrentMode=Wd;Ot.ContextConsumer=qd;Ot.ContextProvider=Ud;Ot.Element=$g;Ot.ForwardRef=$d;Ot.Fragment=jd;Ot.Lazy=Yd;Ot.Memo=Kd;Ot.Portal=Gg;Ot.Profiler=Hd;Ot.StrictMode=Vd;Ot.Suspense=Gd;Ot.isAsyncMode=function(d){return g_(d)||je(d)===Kg};Ot.isConcurrentMode=g_;Ot.isContextConsumer=function(d){return je(d)===qd};Ot.isContextProvider=function(d){return je(d)===Ud};Ot.isElement=function(d){return typeof d=="object"&&d!==null&&d.$$typeof===$g};Ot.isForwardRef=function(d){return je(d)===$d};Ot.isFragment=function(d){return je(d)===jd};Ot.isLazy=function(d){return je(d)===Yd};Ot.isMemo=function(d){return je(d)===Kd};Ot.isPortal=function(d){return je(d)===Gg};Ot.isProfiler=function(d){return je(d)===Hd};Ot.isStrictMode=function(d){return je(d)===Vd};Ot.isSuspense=function(d){return je(d)===Gd};Ot.isValidElementType=function(d){return typeof d=="string"||typeof d=="function"||d===jd||d===Wd||d===Hd||d===Vd||d===Gd||d===MI||typeof d=="object"&&d!==null&&(d.$$typeof===Yd||d.$$typeof===Kd||d.$$typeof===Ud||d.$$typeof===qd||d.$$typeof===$d||d.$$typeof===BI||d.$$typeof===PI||d.$$typeof===NI||d.$$typeof===TI)};Ot.typeOf=je;h_.exports=Ot;var OI=h_.exports,Yg=OI,LI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},RI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},m_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qg={};Qg[Yg.ForwardRef]=RI;Qg[Yg.Memo]=m_;function dA(d){return Yg.isMemo(d)?m_:Qg[d.$$typeof]||LI}var FI=Object.defineProperty,jI=Object.getOwnPropertyNames,uA=Object.getOwnPropertySymbols,VI=Object.getOwnPropertyDescriptor,HI=Object.getPrototypeOf,hA=Object.prototype;function p_(d,u,p){if(typeof u!="string"){if(hA){var g=HI(u);g&&g!==hA&&p_(d,g,p)}var k=jI(u);uA&&(k=k.concat(uA(u)));for(var y=dA(d),w=dA(u),A=0;A<k.length;++A){var f=k[A];if(!zI[f]&&!(p&&p[f])&&!(w&&w[f])&&!(y&&y[f])){var E=VI(u,f);try{FI(d,f,E)}catch{}}}}return d}var UI=p_;const qI=qg(UI);var f_={};Object.defineProperty(f_,"__esModule",{value:!0});f_.default=WI;function WI(d){return d.displayName||d.name||(typeof d=="string"&&d.length>0?d:"Unknown")}function Dd(d,u,p){return u in d?Object.defineProperty(d,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):d[u]=p,d}function Nd(){return Nd=Object.assign||function(d){for(var u=1;u<arguments.length;u++){var p=arguments[u];for(var g in p)Object.prototype.hasOwnProperty.call(p,g)&&(d[g]=p[g])}return d},Nd.apply(this,arguments)}function $I(d,u){d.prototype=Object.create(u.prototype),d.prototype.constructor=d,d.__proto__=u}function Wn(d){if(d===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}function GI(d){var u=function(p){$I(g,p);function g(){for(var y,w=arguments.length,A=new Array(w),f=0;f<w;f++)A[f]=arguments[f];return y=p.call.apply(p,[this].concat(A))||this,Dd(Wn(Wn(y)),"cachedTheme",void 0),Dd(Wn(Wn(y)),"lastOuterTheme",void 0),Dd(Wn(Wn(y)),"lastTheme",void 0),Dd(Wn(Wn(y)),"renderProvider",function(E){var I=y.props.children;return jt.createElement(d.Provider,{value:y.getTheme(E)},I)}),y}var k=g.prototype;return k.getTheme=function(w){if(this.props.theme!==this.lastTheme||w!==this.lastOuterTheme||!this.cachedTheme)if(this.lastOuterTheme=w,this.lastTheme=this.props.theme,typeof this.lastTheme=="function"){var A=this.props.theme;this.cachedTheme=A(w)}else{var f=this.props.theme;this.cachedTheme=w?Nd({},w,f):f}return this.cachedTheme},k.render=function(){var w=this.props.children;return w?jt.createElement(d.Consumer,null,this.renderProvider):null},g}(jt.Component);return u}function KI(d){return function(p){var g=jt.forwardRef(function(k,y){return jt.createElement(d.Consumer,null,function(w){return jt.createElement(p,Nd({theme:w,ref:y},k))})});return qI(g,p),g}}function YI(d){var u=function(){var g=jt.useContext(d);return g};return u}function QI(d){return{context:d,withTheme:KI(d),useTheme:YI(d),ThemeProvider:GI(d)}}var k_=ue.createContext();QI(k_);var gA=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},po=(typeof window>"u"?"undefined":gA(window))==="object"&&(typeof document>"u"?"undefined":gA(document))==="object"&&document.nodeType===9,ZI={}.constructor;function Eg(d){if(d==null||typeof d!="object")return d;if(Array.isArray(d))return d.map(Eg);if(d.constructor!==ZI)return d;var u={};for(var p in d)u[p]=Eg(d[p]);return u}function Qd(d,u,p){d===void 0&&(d="unnamed");var g=p.jss,k=Eg(u),y=g.plugins.onCreateRule(d,k,p);return y||(d[0],null)}var mA=function(u,p){for(var g="",k=0;k<u.length&&u[k]!=="!important";k++)g&&(g+=p),g+=u[k];return g},bi=function(u){if(!Array.isArray(u))return u;var p="";if(Array.isArray(u[0]))for(var g=0;g<u.length&&u[g]!=="!important";g++)p&&(p+=", "),p+=mA(u[g]," ");else p=mA(u,", ");return u[u.length-1]==="!important"&&(p+=" !important"),p};function fo(d){return d&&d.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function Xs(d,u){for(var p="",g=0;g<u;g++)p+="  ";return p+d}function la(d,u,p){p===void 0&&(p={});var g="";if(!u)return g;var k=p,y=k.indent,w=y===void 0?0:y,A=u.fallbacks;p.format===!1&&(w=-1/0);var f=fo(p),E=f.linebreak,I=f.space;if(d&&w++,A)if(Array.isArray(A))for(var S=0;S<A.length;S++){var v=A[S];for(var D in v){var B=v[D];B!=null&&(g&&(g+=E),g+=Xs(D+":"+I+bi(B)+";",w))}}else for(var N in A){var L=A[N];L!=null&&(g&&(g+=E),g+=Xs(N+":"+I+bi(L)+";",w))}for(var j in u){var F=u[j];F!=null&&j!=="fallbacks"&&(g&&(g+=E),g+=Xs(j+":"+I+bi(F)+";",w))}return!g&&!p.allowEmpty||!d?g:(w--,g&&(g=""+E+g+E),Xs(""+d+I+"{"+g,w)+Xs("}",w))}var JI=/([[\].#*$><+~=|^:(),"'`\s])/g,pA=typeof CSS<"u"&&CSS.escape,Zg=function(d){return pA?pA(d):d.replace(JI,"\\$1")},b_=function(){function d(p,g,k){this.type="style",this.isProcessed=!1;var y=k.sheet,w=k.Renderer;this.key=p,this.options=k,this.style=g,y?this.renderer=y.renderer:w&&(this.renderer=new w)}var u=d.prototype;return u.prop=function(g,k,y){if(k===void 0)return this.style[g];var w=y?y.force:!1;if(!w&&this.style[g]===k)return this;var A=k;(!y||y.process!==!1)&&(A=this.options.jss.plugins.onChangeValue(k,g,this));var f=A==null||A===!1,E=g in this.style;if(f&&!E&&!w)return this;var I=f&&E;if(I?delete this.style[g]:this.style[g]=A,this.renderable&&this.renderer)return I?this.renderer.removeProperty(this.renderable,g):this.renderer.setProperty(this.renderable,g,A),this;var S=this.options.sheet;return S&&S.attached,this},d}(),Dg=function(d){l_(u,d);function u(g,k,y){var w;w=d.call(this,g,k,y)||this;var A=y.selector,f=y.scoped,E=y.sheet,I=y.generateId;return A?w.selectorText=A:f!==!1&&(w.id=I(cA(cA(w)),E),w.selectorText="."+Zg(w.id)),w}var p=u.prototype;return p.applyTo=function(k){var y=this.renderer;if(y){var w=this.toJSON();for(var A in w)y.setProperty(k,A,w[A])}return this},p.toJSON=function(){var k={};for(var y in this.style){var w=this.style[y];typeof w!="object"?k[y]=w:Array.isArray(w)&&(k[y]=bi(w))}return k},p.toString=function(k){var y=this.options.sheet,w=y?y.options.link:!1,A=w?oe({},k,{allowEmpty:!0}):k;return la(this.selectorText,this.style,A)},Wg(u,[{key:"selector",set:function(k){if(k!==this.selectorText){this.selectorText=k;var y=this.renderer,w=this.renderable;if(!(!w||!y)){var A=y.setSelector(w,k);A||y.replaceRule(w,this)}}},get:function(){return this.selectorText}}]),u}(b_),XI={onCreateRule:function(u,p,g){return u[0]==="@"||g.parent&&g.parent.type==="keyframes"?null:new Dg(u,p,g)}},cg={indent:1,children:!0},tM=/@([\w-]+)/,eM=function(){function d(p,g,k){this.type="conditional",this.isProcessed=!1,this.key=p;var y=p.match(tM);this.at=y?y[1]:"unknown",this.query=k.name||"@"+this.at,this.options=k,this.rules=new Zd(oe({},k,{parent:this}));for(var w in g)this.rules.add(w,g[w]);this.rules.process()}var u=d.prototype;return u.getRule=function(g){return this.rules.get(g)},u.indexOf=function(g){return this.rules.indexOf(g)},u.addRule=function(g,k,y){var w=this.rules.add(g,k,y);return w?(this.options.jss.plugins.onProcessRule(w),w):null},u.replaceRule=function(g,k,y){var w=this.rules.replace(g,k,y);return w&&this.options.jss.plugins.onProcessRule(w),w},u.toString=function(g){g===void 0&&(g=cg);var k=fo(g),y=k.linebreak;if(g.indent==null&&(g.indent=cg.indent),g.children==null&&(g.children=cg.children),g.children===!1)return this.query+" {}";var w=this.rules.toString(g);return w?this.query+" {"+y+w+y+"}":""},d}(),nM=/@container|@media|@supports\s+/,iM={onCreateRule:function(u,p,g){return nM.test(u)?new eM(u,p,g):null}},lg={indent:1,children:!0},oM=/@keyframes\s+([\w-]+)/,Sg=function(){function d(p,g,k){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var y=p.match(oM);y&&y[1]?this.name=y[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=k;var w=k.scoped,A=k.sheet,f=k.generateId;this.id=w===!1?this.name:Zg(f(this,A)),this.rules=new Zd(oe({},k,{parent:this}));for(var E in g)this.rules.add(E,g[E],oe({},k,{parent:this}));this.rules.process()}var u=d.prototype;return u.toString=function(g){g===void 0&&(g=lg);var k=fo(g),y=k.linebreak;if(g.indent==null&&(g.indent=lg.indent),g.children==null&&(g.children=lg.children),g.children===!1)return this.at+" "+this.id+" {}";var w=this.rules.toString(g);return w&&(w=""+y+w+y),this.at+" "+this.id+" {"+w+"}"},d}(),rM=/@keyframes\s+/,sM=/\$([\w-]+)/g,Ig=function(u,p){return typeof u=="string"?u.replace(sM,function(g,k){return k in p?p[k]:g}):u},fA=function(u,p,g){var k=u[p],y=Ig(k,g);y!==k&&(u[p]=y)},aM={onCreateRule:function(u,p,g){return typeof u=="string"&&rM.test(u)?new Sg(u,p,g):null},onProcessStyle:function(u,p,g){return p.type!=="style"||!g||("animation-name"in u&&fA(u,"animation-name",g.keyframes),"animation"in u&&fA(u,"animation",g.keyframes)),u},onChangeValue:function(u,p,g){var k=g.options.sheet;if(!k)return u;switch(p){case"animation":return Ig(u,k.keyframes);case"animation-name":return Ig(u,k.keyframes);default:return u}}},cM=function(d){l_(u,d);function u(){return d.apply(this,arguments)||this}var p=u.prototype;return p.toString=function(k){var y=this.options.sheet,w=y?y.options.link:!1,A=w?oe({},k,{allowEmpty:!0}):k;return la(this.key,this.style,A)},u}(b_),lM={onCreateRule:function(u,p,g){return g.parent&&g.parent.type==="keyframes"?new cM(u,p,g):null}},dM=function(){function d(p,g,k){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=p,this.style=g,this.options=k}var u=d.prototype;return u.toString=function(g){var k=fo(g),y=k.linebreak;if(Array.isArray(this.style)){for(var w="",A=0;A<this.style.length;A++)w+=la(this.at,this.style[A]),this.style[A+1]&&(w+=y);return w}return la(this.at,this.style,g)},d}(),uM=/@font-face/,hM={onCreateRule:function(u,p,g){return uM.test(u)?new dM(u,p,g):null}},gM=function(){function d(p,g,k){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=p,this.style=g,this.options=k}var u=d.prototype;return u.toString=function(g){return la(this.key,this.style,g)},d}(),mM={onCreateRule:function(u,p,g){return u==="@viewport"||u==="@-ms-viewport"?new gM(u,p,g):null}},pM=function(){function d(p,g,k){this.type="simple",this.isProcessed=!1,this.key=p,this.value=g,this.options=k}var u=d.prototype;return u.toString=function(g){if(Array.isArray(this.value)){for(var k="",y=0;y<this.value.length;y++)k+=this.key+" "+this.value[y]+";",this.value[y+1]&&(k+=`
`);return k}return this.key+" "+this.value+";"},d}(),fM={"@charset":!0,"@import":!0,"@namespace":!0},kM={onCreateRule:function(u,p,g){return u in fM?new pM(u,p,g):null}},kA=[XI,iM,aM,lM,hM,mM,kM],bM={process:!0},bA={force:!0,process:!0},Zd=function(){function d(p){this.map={},this.raw={},this.index=[],this.counter=0,this.options=p,this.classes=p.classes,this.keyframes=p.keyframes}var u=d.prototype;return u.add=function(g,k,y){var w=this.options,A=w.parent,f=w.sheet,E=w.jss,I=w.Renderer,S=w.generateId,v=w.scoped,D=oe({classes:this.classes,parent:A,sheet:f,jss:E,Renderer:I,generateId:S,scoped:v,name:g,keyframes:this.keyframes,selector:void 0},y),B=g;g in this.raw&&(B=g+"-d"+this.counter++),this.raw[B]=k,B in this.classes&&(D.selector="."+Zg(this.classes[B]));var N=Qd(B,k,D);if(!N)return null;this.register(N);var L=D.index===void 0?this.index.length:D.index;return this.index.splice(L,0,N),N},u.replace=function(g,k,y){var w=this.get(g),A=this.index.indexOf(w);w&&this.remove(w);var f=y;return A!==-1&&(f=oe({},y,{index:A})),this.add(g,k,f)},u.get=function(g){return this.map[g]},u.remove=function(g){this.unregister(g),delete this.raw[g.key],this.index.splice(this.index.indexOf(g),1)},u.indexOf=function(g){return this.index.indexOf(g)},u.process=function(){var g=this.options.jss.plugins;this.index.slice(0).forEach(g.onProcessRule,g)},u.register=function(g){this.map[g.key]=g,g instanceof Dg?(this.map[g.selector]=g,g.id&&(this.classes[g.key]=g.id)):g instanceof Sg&&this.keyframes&&(this.keyframes[g.name]=g.id)},u.unregister=function(g){delete this.map[g.key],g instanceof Dg?(delete this.map[g.selector],delete this.classes[g.key]):g instanceof Sg&&delete this.keyframes[g.name]},u.update=function(){var g,k,y;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(g=arguments.length<=0?void 0:arguments[0],k=arguments.length<=1?void 0:arguments[1],y=arguments.length<=2?void 0:arguments[2]):(k=arguments.length<=0?void 0:arguments[0],y=arguments.length<=1?void 0:arguments[1],g=null),g)this.updateOne(this.get(g),k,y);else for(var w=0;w<this.index.length;w++)this.updateOne(this.index[w],k,y)},u.updateOne=function(g,k,y){y===void 0&&(y=bM);var w=this.options,A=w.jss.plugins,f=w.sheet;if(g.rules instanceof d){g.rules.update(k,y);return}var E=g.style;if(A.onUpdate(k,g,f,y),y.process&&E&&E!==g.style){A.onProcessStyle(g.style,g,f);for(var I in g.style){var S=g.style[I],v=E[I];S!==v&&g.prop(I,S,bA)}for(var D in E){var B=g.style[D],N=E[D];B==null&&B!==N&&g.prop(D,null,bA)}}},u.toString=function(g){for(var k="",y=this.options.sheet,w=y?y.options.link:!1,A=fo(g),f=A.linebreak,E=0;E<this.index.length;E++){var I=this.index[E],S=I.toString(g);!S&&!w||(k&&(k+=f),k+=S)}return k},d}(),w_=function(){function d(p,g){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=oe({},g,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),g.Renderer&&(this.renderer=new g.Renderer(this)),this.rules=new Zd(this.options);for(var k in p)this.rules.add(k,p[k]);this.rules.process()}var u=d.prototype;return u.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},u.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},u.addRule=function(g,k,y){var w=this.queue;this.attached&&!w&&(this.queue=[]);var A=this.rules.add(g,k,y);return A?(this.options.jss.plugins.onProcessRule(A),this.attached?(this.deployed&&(w?w.push(A):(this.insertRule(A),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),A):(this.deployed=!1,A)):null},u.replaceRule=function(g,k,y){var w=this.rules.get(g);if(!w)return this.addRule(g,k,y);var A=this.rules.replace(g,k,y);return A&&this.options.jss.plugins.onProcessRule(A),this.attached?(this.deployed&&this.renderer&&(A?w.renderable&&this.renderer.replaceRule(w.renderable,A):this.renderer.deleteRule(w)),A):(this.deployed=!1,A)},u.insertRule=function(g){this.renderer&&this.renderer.insertRule(g)},u.addRules=function(g,k){var y=[];for(var w in g){var A=this.addRule(w,g[w],k);A&&y.push(A)}return y},u.getRule=function(g){return this.rules.get(g)},u.deleteRule=function(g){var k=typeof g=="object"?g:this.rules.get(g);return!k||this.attached&&!k.renderable?!1:(this.rules.remove(k),this.attached&&k.renderable&&this.renderer?this.renderer.deleteRule(k.renderable):!0)},u.indexOf=function(g){return this.rules.indexOf(g)},u.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},u.update=function(){var g;return(g=this.rules).update.apply(g,arguments),this},u.updateOne=function(g,k,y){return this.rules.updateOne(g,k,y),this},u.toString=function(g){return this.rules.toString(g)},d}(),wM=function(){function d(){this.plugins={internal:[],external:[]},this.registry={}}var u=d.prototype;return u.onCreateRule=function(g,k,y){for(var w=0;w<this.registry.onCreateRule.length;w++){var A=this.registry.onCreateRule[w](g,k,y);if(A)return A}return null},u.onProcessRule=function(g){if(!g.isProcessed){for(var k=g.options.sheet,y=0;y<this.registry.onProcessRule.length;y++)this.registry.onProcessRule[y](g,k);g.style&&this.onProcessStyle(g.style,g,k),g.isProcessed=!0}},u.onProcessStyle=function(g,k,y){for(var w=0;w<this.registry.onProcessStyle.length;w++)k.style=this.registry.onProcessStyle[w](k.style,k,y)},u.onProcessSheet=function(g){for(var k=0;k<this.registry.onProcessSheet.length;k++)this.registry.onProcessSheet[k](g)},u.onUpdate=function(g,k,y,w){for(var A=0;A<this.registry.onUpdate.length;A++)this.registry.onUpdate[A](g,k,y,w)},u.onChangeValue=function(g,k,y){for(var w=g,A=0;A<this.registry.onChangeValue.length;A++)w=this.registry.onChangeValue[A](w,k,y);return w},u.use=function(g,k){k===void 0&&(k={queue:"external"});var y=this.plugins[k.queue];y.indexOf(g)===-1&&(y.push(g),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(w,A){for(var f in A)f in w&&w[f].push(A[f]);return w},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},d}(),AM=function(){function d(){this.registry=[]}var u=d.prototype;return u.add=function(g){var k=this.registry,y=g.options.index;if(k.indexOf(g)===-1){if(k.length===0||y>=this.index){k.push(g);return}for(var w=0;w<k.length;w++)if(k[w].options.index>y){k.splice(w,0,g);return}}},u.reset=function(){this.registry=[]},u.remove=function(g){var k=this.registry.indexOf(g);this.registry.splice(k,1)},u.toString=function(g){for(var k=g===void 0?{}:g,y=k.attached,w=d_(k,["attached"]),A=fo(w),f=A.linebreak,E="",I=0;I<this.registry.length;I++){var S=this.registry[I];y!=null&&S.attached!==y||(E&&(E+=f),E+=S.toString(w))}return E},Wg(d,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),d}(),oa=new AM,Mg=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),Tg="2f1acc6c3a606b082e5eef5e54414ffb";Mg[Tg]==null&&(Mg[Tg]=0);var wA=Mg[Tg]++,AA=function(u){u===void 0&&(u={});var p=0,g=function(y,w){p+=1;var A="",f="";return w&&(w.options.classNamePrefix&&(f=w.options.classNamePrefix),w.options.jss.id!=null&&(A=String(w.options.jss.id))),u.minify?""+(f||"c")+wA+A+p:f+y.key+"-"+wA+(A?"-"+A:"")+"-"+p};return g},A_=function(u){var p;return function(){return p||(p=u()),p}},_M=function(u,p){try{return u.attributeStyleMap?u.attributeStyleMap.get(p):u.style.getPropertyValue(p)}catch{return""}},CM=function(u,p,g){try{var k=g;if(Array.isArray(g)&&(k=bi(g)),u.attributeStyleMap)u.attributeStyleMap.set(p,k);else{var y=k?k.indexOf("!important"):-1,w=y>-1?k.substr(0,y-1):k;u.style.setProperty(p,w,y>-1?"important":"")}}catch{return!1}return!0},vM=function(u,p){try{u.attributeStyleMap?u.attributeStyleMap.delete(p):u.style.removeProperty(p)}catch{}},yM=function(u,p){return u.selectorText=p,u.selectorText===p},__=A_(function(){return document.querySelector("head")});function xM(d,u){for(var p=0;p<d.length;p++){var g=d[p];if(g.attached&&g.options.index>u.index&&g.options.insertionPoint===u.insertionPoint)return g}return null}function EM(d,u){for(var p=d.length-1;p>=0;p--){var g=d[p];if(g.attached&&g.options.insertionPoint===u.insertionPoint)return g}return null}function DM(d){for(var u=__(),p=0;p<u.childNodes.length;p++){var g=u.childNodes[p];if(g.nodeType===8&&g.nodeValue.trim()===d)return g}return null}function SM(d){var u=oa.registry;if(u.length>0){var p=xM(u,d);if(p&&p.renderer)return{parent:p.renderer.element.parentNode,node:p.renderer.element};if(p=EM(u,d),p&&p.renderer)return{parent:p.renderer.element.parentNode,node:p.renderer.element.nextSibling}}var g=d.insertionPoint;if(g&&typeof g=="string"){var k=DM(g);if(k)return{parent:k.parentNode,node:k.nextSibling}}return!1}function IM(d,u){var p=u.insertionPoint,g=SM(u);if(g!==!1&&g.parent){g.parent.insertBefore(d,g.node);return}if(p&&typeof p.nodeType=="number"){var k=p,y=k.parentNode;y&&y.insertBefore(d,k.nextSibling);return}__().appendChild(d)}var MM=A_(function(){var d=document.querySelector('meta[property="csp-nonce"]');return d?d.getAttribute("content"):null}),_A=function(u,p,g){try{"insertRule"in u?u.insertRule(p,g):"appendRule"in u&&u.appendRule(p)}catch{return!1}return u.cssRules[g]},CA=function(u,p){var g=u.cssRules.length;return p===void 0||p>g?g:p},TM=function(){var u=document.createElement("style");return u.textContent=`
`,u},BM=function(){function d(p){this.getPropertyValue=_M,this.setProperty=CM,this.removeProperty=vM,this.setSelector=yM,this.hasInsertedRules=!1,this.cssRules=[],p&&oa.add(p),this.sheet=p;var g=this.sheet?this.sheet.options:{},k=g.media,y=g.meta,w=g.element;this.element=w||TM(),this.element.setAttribute("data-jss",""),k&&this.element.setAttribute("media",k),y&&this.element.setAttribute("data-meta",y);var A=MM();A&&this.element.setAttribute("nonce",A)}var u=d.prototype;return u.attach=function(){if(!(this.element.parentNode||!this.sheet)){IM(this.element,this.sheet.options);var g=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&g&&(this.hasInsertedRules=!1,this.deploy())}},u.detach=function(){if(this.sheet){var g=this.element.parentNode;g&&g.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},u.deploy=function(){var g=this.sheet;if(g){if(g.options.link){this.insertRules(g.rules);return}this.element.textContent=`
`+g.toString()+`
`}},u.insertRules=function(g,k){for(var y=0;y<g.index.length;y++)this.insertRule(g.index[y],y,k)},u.insertRule=function(g,k,y){if(y===void 0&&(y=this.element.sheet),g.rules){var w=g,A=y;if(g.type==="conditional"||g.type==="keyframes"){var f=CA(y,k);if(A=_A(y,w.toString({children:!1}),f),A===!1)return!1;this.refCssRule(g,f,A)}return this.insertRules(w.rules,A),A}var E=g.toString();if(!E)return!1;var I=CA(y,k),S=_A(y,E,I);return S===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(g,I,S),S)},u.refCssRule=function(g,k,y){g.renderable=y,g.options.parent instanceof w_&&this.cssRules.splice(k,0,y)},u.deleteRule=function(g){var k=this.element.sheet,y=this.indexOf(g);return y===-1?!1:(k.deleteRule(y),this.cssRules.splice(y,1),!0)},u.indexOf=function(g){return this.cssRules.indexOf(g)},u.replaceRule=function(g,k){var y=this.indexOf(g);return y===-1?!1:(this.element.sheet.deleteRule(y),this.cssRules.splice(y,1),this.insertRule(k,y))},u.getRules=function(){return this.element.sheet.cssRules},d}(),PM=0,NM=function(){function d(p){this.id=PM++,this.version="10.10.0",this.plugins=new wM,this.options={id:{minify:!1},createGenerateId:AA,Renderer:po?BM:null,plugins:[]},this.generateId=AA({minify:!1});for(var g=0;g<kA.length;g++)this.plugins.use(kA[g],{queue:"internal"});this.setup(p)}var u=d.prototype;return u.setup=function(g){return g===void 0&&(g={}),g.createGenerateId&&(this.options.createGenerateId=g.createGenerateId),g.id&&(this.options.id=oe({},this.options.id,g.id)),(g.createGenerateId||g.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),g.insertionPoint!=null&&(this.options.insertionPoint=g.insertionPoint),"Renderer"in g&&(this.options.Renderer=g.Renderer),g.plugins&&this.use.apply(this,g.plugins),this},u.createStyleSheet=function(g,k){k===void 0&&(k={});var y=k,w=y.index;typeof w!="number"&&(w=oa.index===0?0:oa.index+1);var A=new w_(g,oe({},k,{jss:this,generateId:k.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:w}));return this.plugins.onProcessSheet(A),A},u.removeStyleSheet=function(g){return g.detach(),oa.remove(g),this},u.createRule=function(g,k,y){if(k===void 0&&(k={}),y===void 0&&(y={}),typeof g=="object")return this.createRule(void 0,g,k);var w=oe({},y,{name:g,jss:this,Renderer:this.options.Renderer});w.generateId||(w.generateId=this.generateId),w.classes||(w.classes={}),w.keyframes||(w.keyframes={});var A=Qd(g,k,w);return A&&this.plugins.onProcessRule(A),A},u.use=function(){for(var g=this,k=arguments.length,y=new Array(k),w=0;w<k;w++)y[w]=arguments[w];return y.forEach(function(A){g.plugins.use(A)}),this},d}(),C_=function(u){return new NM(u)},vA=function(){function d(){this.length=0,this.sheets=new WeakMap}var u=d.prototype;return u.get=function(g){var k=this.sheets.get(g);return k&&k.sheet},u.add=function(g,k){this.sheets.has(g)||(this.length++,this.sheets.set(g,{sheet:k,refs:0}))},u.manage=function(g){var k=this.sheets.get(g);if(k)return k.refs===0&&k.sheet.attach(),k.refs++,k.sheet},u.unmanage=function(g){var k=this.sheets.get(g);k&&k.refs>0&&(k.refs--,k.refs===0&&k.sheet.detach())},Wg(d,[{key:"size",get:function(){return this.length}}]),d}(),Jg=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function v_(d){var u=null;for(var p in d){var g=d[p],k=typeof g;if(k==="function")u||(u={}),u[p]=g;else if(k==="object"&&g!==null&&!Array.isArray(g)){var y=v_(g);y&&(u||(u={}),u[p]=y)}}return u}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */C_();var y_=Date.now(),dg="fnValues"+y_,ug="fnStyle"+ ++y_,OM=function(){return{onCreateRule:function(p,g,k){if(typeof g!="function")return null;var y=Qd(p,{},k);return y[ug]=g,y},onProcessStyle:function(p,g){if(dg in g||ug in g)return p;var k={};for(var y in p){var w=p[y];typeof w=="function"&&(delete p[y],k[y]=w)}return g[dg]=k,p},onUpdate:function(p,g,k,y){var w=g,A=w[ug];A&&(w.style=A(p)||{});var f=w[dg];if(f)for(var E in f)w.prop(E,f[E](p),y)}}};function LM(d){var u,p=d.Symbol;return typeof p=="function"?p.observable?u=p.observable:(u=p("observable"),p.observable=u):u="@@observable",u}var lo;typeof self<"u"?lo=self:typeof window<"u"?lo=window:typeof global<"u"?lo=global:typeof module<"u"?lo=module:lo=Function("return this")();var yA=LM(lo),xA=function(u){return u&&u[yA]&&u===u[yA]()},zM=function(u){return{onCreateRule:function(g,k,y){if(!xA(k))return null;var w=k,A=Qd(g,{},y);return w.subscribe(function(f){for(var E in f)A.prop(E,f[E],u)}),A},onProcessRule:function(g){if(!(g&&g.type!=="style")){var k=g,y=k.style,w=function(I){var S=y[I];if(!xA(S))return"continue";delete y[I],S.subscribe({next:function(D){k.prop(I,D,u)}})};for(var A in y)var f=w(A)}}}},RM=/;\n/,FM=function(u){for(var p={},g=u.split(RM),k=0;k<g.length;k++){var y=(g[k]||"").trim();if(y){var w=y.indexOf(":");if(w!==-1){var A=y.substr(0,w).trim(),f=y.substr(w+1).trim();p[A]=f}}}return p},jM=function(u){typeof u.style=="string"&&(u.style=FM(u.style))};function VM(){return{onProcessRule:jM}}var Gn="@global",Bg="@global ",HM=function(){function d(p,g,k){this.type="global",this.at=Gn,this.isProcessed=!1,this.key=p,this.options=k,this.rules=new Zd(oe({},k,{parent:this}));for(var y in g)this.rules.add(y,g[y]);this.rules.process()}var u=d.prototype;return u.getRule=function(g){return this.rules.get(g)},u.addRule=function(g,k,y){var w=this.rules.add(g,k,y);return w&&this.options.jss.plugins.onProcessRule(w),w},u.replaceRule=function(g,k,y){var w=this.rules.replace(g,k,y);return w&&this.options.jss.plugins.onProcessRule(w),w},u.indexOf=function(g){return this.rules.indexOf(g)},u.toString=function(g){return this.rules.toString(g)},d}(),UM=function(){function d(p,g,k){this.type="global",this.at=Gn,this.isProcessed=!1,this.key=p,this.options=k;var y=p.substr(Bg.length);this.rule=k.jss.createRule(y,g,oe({},k,{parent:this}))}var u=d.prototype;return u.toString=function(g){return this.rule?this.rule.toString(g):""},d}(),qM=/\s*,\s*/g;function x_(d,u){for(var p=d.split(qM),g="",k=0;k<p.length;k++)g+=u+" "+p[k].trim(),p[k+1]&&(g+=", ");return g}function WM(d,u){var p=d.options,g=d.style,k=g?g[Gn]:null;if(k){for(var y in k)u.addRule(y,k[y],oe({},p,{selector:x_(y,d.selector)}));delete g[Gn]}}function $M(d,u){var p=d.options,g=d.style;for(var k in g)if(!(k[0]!=="@"||k.substr(0,Gn.length)!==Gn)){var y=x_(k.substr(Gn.length),d.selector);u.addRule(y,g[k],oe({},p,{selector:y})),delete g[k]}}function GM(){function d(p,g,k){if(!p)return null;if(p===Gn)return new HM(p,g,k);if(p[0]==="@"&&p.substr(0,Bg.length)===Bg)return new UM(p,g,k);var y=k.parent;return y&&(y.type==="global"||y.options.parent&&y.options.parent.type==="global")&&(k.scoped=!1),!k.selector&&k.scoped===!1&&(k.selector=p),null}function u(p,g){p.type!=="style"||!g||(WM(p,g),$M(p,g))}return{onCreateRule:d,onProcessRule:u}}var Bd=function(u){return u&&typeof u=="object"&&!Array.isArray(u)},hg="extendCurrValue"+Date.now();function KM(d,u,p,g){var k=typeof d.extend;if(k==="string"){if(!p)return;var y=p.getRule(d.extend);if(!y||y===u)return;var w=y.options.parent;if(w){var A=w.rules.raw[d.extend];ki(A,u,p,g)}return}if(Array.isArray(d.extend)){for(var f=0;f<d.extend.length;f++){var E=d.extend[f],I=typeof E=="string"?oe({},d,{extend:E}):d.extend[f];ki(I,u,p,g)}return}for(var S in d.extend){if(S==="extend"){ki(d.extend.extend,u,p,g);continue}if(Bd(d.extend[S])){S in g||(g[S]={}),ki(d.extend[S],u,p,g[S]);continue}g[S]=d.extend[S]}}function YM(d,u,p,g){for(var k in d)if(k!=="extend"){if(Bd(g[k])&&Bd(d[k])){ki(d[k],u,p,g[k]);continue}if(Bd(d[k])){g[k]=ki(d[k],u,p);continue}g[k]=d[k]}}function ki(d,u,p,g){return g===void 0&&(g={}),KM(d,u,p,g),YM(d,u,p,g),g}function QM(){function d(p,g,k){return"extend"in p?ki(p,g,k):p}function u(p,g,k){if(g!=="extend")return p;if(p==null||p===!1){for(var y in k[hg])k.prop(y,null);return k[hg]=null,null}if(typeof p=="object"){for(var w in p)k.prop(w,p[w]);k[hg]=p}return null}return{onProcessStyle:d,onChangeValue:u}}var EA=/\s*,\s*/g,ZM=/&/g,JM=/\$([\w-]+)/g;function XM(){function d(k,y){return function(w,A){var f=k.getRule(A)||y&&y.getRule(A);return f?f.selector:A}}function u(k,y){for(var w=y.split(EA),A=k.split(EA),f="",E=0;E<w.length;E++)for(var I=w[E],S=0;S<A.length;S++){var v=A[S];f&&(f+=", "),f+=v.indexOf("&")!==-1?v.replace(ZM,I):I+" "+v}return f}function p(k,y,w){if(w)return oe({},w,{index:w.index+1});var A=k.options.nestingLevel;A=A===void 0?1:A+1;var f=oe({},k.options,{nestingLevel:A,index:y.indexOf(k)+1});return delete f.name,f}function g(k,y,w){if(y.type!=="style")return k;var A=y,f=A.options.parent,E,I;for(var S in k){var v=S.indexOf("&")!==-1,D=S[0]==="@";if(!(!v&&!D)){if(E=p(A,f,E),v){var B=u(S,A.selector);I||(I=d(f,w)),B=B.replace(JM,I);var N=A.key+"-"+S;"replaceRule"in f?f.replaceRule(N,k[S],oe({},E,{selector:B})):f.addRule(N,k[S],oe({},E,{selector:B}))}else D&&f.addRule(S,{},E).addRule(A.key,k[S],{selector:A.selector});delete k[S]}}return k}return{onProcessStyle:g}}function Pg(d,u){if(!u)return!0;if(Array.isArray(u)){for(var p=0;p<u.length;p++){var g=Pg(d,u[p]);if(!g)return!1}return!0}if(u.indexOf(" ")>-1)return Pg(d,u.split(" "));var k=d.options.parent;if(u[0]==="$"){var y=k.getRule(u.substr(1));return!y||y===d?!1:(k.classes[d.key]+=" "+k.classes[y.key],!0)}return k.classes[d.key]+=" "+u,!0}function tT(){function d(u,p){return"composes"in u&&(Pg(p,u.composes),delete u.composes),u}return{onProcessStyle:d}}var eT=/[A-Z]/g,nT=/^ms-/,gg={};function iT(d){return"-"+d.toLowerCase()}function E_(d){if(gg.hasOwnProperty(d))return gg[d];var u=d.replace(eT,iT);return gg[d]=nT.test(u)?"-"+u:u}function Od(d){var u={};for(var p in d){var g=p.indexOf("--")===0?p:E_(p);u[g]=d[p]}return d.fallbacks&&(Array.isArray(d.fallbacks)?u.fallbacks=d.fallbacks.map(Od):u.fallbacks=Od(d.fallbacks)),u}function oT(){function d(p){if(Array.isArray(p)){for(var g=0;g<p.length;g++)p[g]=Od(p[g]);return p}return Od(p)}function u(p,g,k){if(g.indexOf("--")===0)return p;var y=E_(g);return g===y?p:(k.prop(y,p),null)}return{onProcessStyle:d,onChangeValue:u}}var H=Jg&&CSS?CSS.px:"px",Sd=Jg&&CSS?CSS.ms:"ms",ao=Jg&&CSS?CSS.percent:"%",rT={"animation-delay":Sd,"animation-duration":Sd,"background-position":H,"background-position-x":H,"background-position-y":H,"background-size":H,border:H,"border-bottom":H,"border-bottom-left-radius":H,"border-bottom-right-radius":H,"border-bottom-width":H,"border-left":H,"border-left-width":H,"border-radius":H,"border-right":H,"border-right-width":H,"border-top":H,"border-top-left-radius":H,"border-top-right-radius":H,"border-top-width":H,"border-width":H,"border-block":H,"border-block-end":H,"border-block-end-width":H,"border-block-start":H,"border-block-start-width":H,"border-block-width":H,"border-inline":H,"border-inline-end":H,"border-inline-end-width":H,"border-inline-start":H,"border-inline-start-width":H,"border-inline-width":H,"border-start-start-radius":H,"border-start-end-radius":H,"border-end-start-radius":H,"border-end-end-radius":H,margin:H,"margin-bottom":H,"margin-left":H,"margin-right":H,"margin-top":H,"margin-block":H,"margin-block-end":H,"margin-block-start":H,"margin-inline":H,"margin-inline-end":H,"margin-inline-start":H,padding:H,"padding-bottom":H,"padding-left":H,"padding-right":H,"padding-top":H,"padding-block":H,"padding-block-end":H,"padding-block-start":H,"padding-inline":H,"padding-inline-end":H,"padding-inline-start":H,"mask-position-x":H,"mask-position-y":H,"mask-size":H,height:H,width:H,"min-height":H,"max-height":H,"min-width":H,"max-width":H,bottom:H,left:H,top:H,right:H,inset:H,"inset-block":H,"inset-block-end":H,"inset-block-start":H,"inset-inline":H,"inset-inline-end":H,"inset-inline-start":H,"box-shadow":H,"text-shadow":H,"column-gap":H,"column-rule":H,"column-rule-width":H,"column-width":H,"font-size":H,"font-size-delta":H,"letter-spacing":H,"text-decoration-thickness":H,"text-indent":H,"text-stroke":H,"text-stroke-width":H,"word-spacing":H,motion:H,"motion-offset":H,outline:H,"outline-offset":H,"outline-width":H,perspective:H,"perspective-origin-x":ao,"perspective-origin-y":ao,"transform-origin":ao,"transform-origin-x":ao,"transform-origin-y":ao,"transform-origin-z":ao,"transition-delay":Sd,"transition-duration":Sd,"vertical-align":H,"flex-basis":H,"shape-margin":H,size:H,gap:H,grid:H,"grid-gap":H,"row-gap":H,"grid-row-gap":H,"grid-column-gap":H,"grid-template-rows":H,"grid-template-columns":H,"grid-auto-rows":H,"grid-auto-columns":H,"box-shadow-x":H,"box-shadow-y":H,"box-shadow-blur":H,"box-shadow-spread":H,"font-line-height":H,"text-shadow-x":H,"text-shadow-y":H,"text-shadow-blur":H};function D_(d){var u=/(-[a-z])/g,p=function(w){return w[1].toUpperCase()},g={};for(var k in d)g[k]=d[k],g[k.replace(u,p)]=d[k];return g}var sT=D_(rT);function ra(d,u,p){if(u==null)return u;if(Array.isArray(u))for(var g=0;g<u.length;g++)u[g]=ra(d,u[g],p);else if(typeof u=="object")if(d==="fallbacks")for(var k in u)u[k]=ra(k,u[k],p);else for(var y in u)u[y]=ra(d+"-"+y,u[y],p);else if(typeof u=="number"&&isNaN(u)===!1){var w=p[d]||sT[d];return w&&!(u===0&&w===H)?typeof w=="function"?w(u).toString():""+u+w:u.toString()}return u}function aT(d){d===void 0&&(d={});var u=D_(d);function p(k,y){if(y.type!=="style")return k;for(var w in k)k[w]=ra(w,k[w],u);return k}function g(k,y){return ra(y,k,u)}return{onProcessStyle:p,onChangeValue:g}}var cT={"background-size":!0,"background-position":!0,border:!0,"border-bottom":!0,"border-left":!0,"border-top":!0,"border-right":!0,"border-radius":!0,"border-image":!0,"border-width":!0,"border-style":!0,"border-color":!0,"box-shadow":!0,flex:!0,margin:!0,padding:!0,outline:!0,"transform-origin":!0,transform:!0,transition:!0},lT={position:!0,size:!0},Id={padding:{top:0,right:0,bottom:0,left:0},margin:{top:0,right:0,bottom:0,left:0},background:{attachment:null,color:null,image:null,position:null,repeat:null},border:{width:null,style:null,color:null},"border-top":{width:null,style:null,color:null},"border-right":{width:null,style:null,color:null},"border-bottom":{width:null,style:null,color:null},"border-left":{width:null,style:null,color:null},outline:{width:null,style:null,color:null},"list-style":{type:null,position:null,image:null},transition:{property:null,duration:null,"timing-function":null,timingFunction:null,delay:null},animation:{name:null,duration:null,"timing-function":null,timingFunction:null,delay:null,"iteration-count":null,iterationCount:null,direction:null,"fill-mode":null,fillMode:null,"play-state":null,playState:null},"box-shadow":{x:0,y:0,blur:0,spread:0,color:null,inset:null},"text-shadow":{x:0,y:0,blur:null,color:null}},mg={border:{radius:"border-radius",image:"border-image",width:"border-width",style:"border-style",color:"border-color"},"border-bottom":{width:"border-bottom-width",style:"border-bottom-style",color:"border-bottom-color"},"border-top":{width:"border-top-width",style:"border-top-style",color:"border-top-color"},"border-left":{width:"border-left-width",style:"border-left-style",color:"border-left-color"},"border-right":{width:"border-right-width",style:"border-right-style",color:"border-right-color"},background:{size:"background-size",image:"background-image"},font:{style:"font-style",variant:"font-variant",weight:"font-weight",stretch:"font-stretch",size:"font-size",family:"font-family",lineHeight:"line-height","line-height":"line-height"},flex:{grow:"flex-grow",basis:"flex-basis",direction:"flex-direction",wrap:"flex-wrap",flow:"flex-flow",shrink:"flex-shrink"},align:{self:"align-self",items:"align-items",content:"align-content"},grid:{"template-columns":"grid-template-columns",templateColumns:"grid-template-columns","template-rows":"grid-template-rows",templateRows:"grid-template-rows","template-areas":"grid-template-areas",templateAreas:"grid-template-areas",template:"grid-template","auto-columns":"grid-auto-columns",autoColumns:"grid-auto-columns","auto-rows":"grid-auto-rows",autoRows:"grid-auto-rows","auto-flow":"grid-auto-flow",autoFlow:"grid-auto-flow",row:"grid-row",column:"grid-column","row-start":"grid-row-start",rowStart:"grid-row-start","row-end":"grid-row-end",rowEnd:"grid-row-end","column-start":"grid-column-start",columnStart:"grid-column-start","column-end":"grid-column-end",columnEnd:"grid-column-end",area:"grid-area",gap:"grid-gap","row-gap":"grid-row-gap",rowGap:"grid-row-gap","column-gap":"grid-column-gap",columnGap:"grid-column-gap"}};function dT(d,u,p){return d.map(function(g){return I_(g,u,p,!1,!0)})}function S_(d,u,p,g){return p[u]==null?d:d.length===0?[]:Array.isArray(d[0])?S_(d[0],u,p,g):typeof d[0]=="object"?dT(d,u,g):[d]}function I_(d,u,p,g,k){if(!(Id[u]||mg[u]))return[];var y=[];if(mg[u]&&(d=uT(d,p,mg[u],g)),Object.keys(d).length)for(var w in Id[u]){if(d[w]){Array.isArray(d[w])?y.push(lT[w]===null?d[w]:d[w].join(" ")):y.push(d[w]);continue}Id[u][w]!=null&&y.push(Id[u][w])}return!y.length||k?y:[y]}function uT(d,u,p,g){for(var k in p){var y=p[k];if(typeof d[k]<"u"&&(g||!u.prop(y))){var w,A=da((w={},w[y]=d[k],w),u)[y];g?u.style.fallbacks[y]=A:u.style[y]=A}delete d[k]}return d}function da(d,u,p){for(var g in d){var k=d[g];if(Array.isArray(k)){if(!Array.isArray(k[0])){if(g==="fallbacks"){for(var y=0;y<d.fallbacks.length;y++)d.fallbacks[y]=da(d.fallbacks[y],u,!0);continue}d[g]=S_(k,g,cT,u),d[g].length||delete d[g]}}else if(typeof k=="object"){if(g==="fallbacks"){d.fallbacks=da(d.fallbacks,u,!0);continue}d[g]=I_(k,g,u,p),d[g].length||delete d[g]}else d[g]===""&&delete d[g]}return d}function hT(){function d(u,p){if(!u||p.type!=="style")return u;if(Array.isArray(u)){for(var g=0;g<u.length;g++)u[g]=da(u[g],p);return u}return da(u,p)}return{onProcessStyle:d}}var ea="",Ng="",M_="",T_="",gT=po&&"ontouchstart"in document.documentElement;if(po){var pg={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},mT=document.createElement("p"),fg=mT.style,pT="Transform";for(var kg in pg)if(kg+pT in fg){ea=kg,Ng=pg[kg];break}ea==="Webkit"&&"msHyphens"in fg&&(ea="ms",Ng=pg.ms,T_="edge"),ea==="Webkit"&&"-apple-trailing-word"in fg&&(M_="apple")}var pt={js:ea,css:Ng,vendor:M_,browser:T_,isTouch:gT};function fT(d){return d[1]==="-"||pt.js==="ms"?d:"@"+pt.css+"keyframes"+d.substr(10)}var kT={noPrefill:["appearance"],supportedProperty:function(u){return u!=="appearance"?!1:pt.js==="ms"?"-webkit-"+u:pt.css+u}},bT={noPrefill:["color-adjust"],supportedProperty:function(u){return u!=="color-adjust"?!1:pt.js==="Webkit"?pt.css+"print-"+u:u}},wT=/[-\s]+(.)?/g;function AT(d,u){return u?u.toUpperCase():""}function Xg(d){return d.replace(wT,AT)}function Yn(d){return Xg("-"+d)}var _T={noPrefill:["mask"],supportedProperty:function(u,p){if(!/^mask/.test(u))return!1;if(pt.js==="Webkit"){var g="mask-image";if(Xg(g)in p)return u;if(pt.js+Yn(g)in p)return pt.css+u}return u}},CT={noPrefill:["text-orientation"],supportedProperty:function(u){return u!=="text-orientation"?!1:pt.vendor==="apple"&&!pt.isTouch?pt.css+u:u}},vT={noPrefill:["transform"],supportedProperty:function(u,p,g){return u!=="transform"?!1:g.transform?u:pt.css+u}},yT={noPrefill:["transition"],supportedProperty:function(u,p,g){return u!=="transition"?!1:g.transition?u:pt.css+u}},xT={noPrefill:["writing-mode"],supportedProperty:function(u){return u!=="writing-mode"?!1:pt.js==="Webkit"||pt.js==="ms"&&pt.browser!=="edge"?pt.css+u:u}},ET={noPrefill:["user-select"],supportedProperty:function(u){return u!=="user-select"?!1:pt.js==="Moz"||pt.js==="ms"||pt.vendor==="apple"?pt.css+u:u}},DT={supportedProperty:function(u,p){if(!/^break-/.test(u))return!1;if(pt.js==="Webkit"){var g="WebkitColumn"+Yn(u);return g in p?pt.css+"column-"+u:!1}if(pt.js==="Moz"){var k="page"+Yn(u);return k in p?"page-"+u:!1}return!1}},ST={supportedProperty:function(u,p){if(!/^(border|margin|padding)-inline/.test(u))return!1;if(pt.js==="Moz")return u;var g=u.replace("-inline","");return pt.js+Yn(g)in p?pt.css+g:!1}},IT={supportedProperty:function(u,p){return Xg(u)in p?u:!1}},MT={supportedProperty:function(u,p){var g=Yn(u);return u[0]==="-"||u[0]==="-"&&u[1]==="-"?u:pt.js+g in p?pt.css+u:pt.js!=="Webkit"&&"Webkit"+g in p?"-webkit-"+u:!1}},TT={supportedProperty:function(u){return u.substring(0,11)!=="scroll-snap"?!1:pt.js==="ms"?""+pt.css+u:u}},BT={supportedProperty:function(u){return u!=="overscroll-behavior"?!1:pt.js==="ms"?pt.css+"scroll-chaining":u}},PT={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},NT={supportedProperty:function(u,p){var g=PT[u];return g&&pt.js+Yn(g)in p?pt.css+g:!1}},B_={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},OT=Object.keys(B_),LT=function(u){return pt.css+u},zT={supportedProperty:function(u,p,g){var k=g.multiple;if(OT.indexOf(u)>-1){var y=B_[u];if(!Array.isArray(y))return pt.js+Yn(y)in p?pt.css+y:!1;if(!k)return!1;for(var w=0;w<y.length;w++)if(!(pt.js+Yn(y[0])in p))return!1;return y.map(LT)}return!1}},P_=[kT,bT,_T,CT,vT,yT,xT,ET,DT,ST,IT,MT,TT,BT,NT,zT],DA=P_.filter(function(d){return d.supportedProperty}).map(function(d){return d.supportedProperty}),RT=P_.filter(function(d){return d.noPrefill}).reduce(function(d,u){return d.push.apply(d,DI(u.noPrefill)),d},[]),na,fi={};if(po){na=document.createElement("p");var bg=window.getComputedStyle(document.documentElement,"");for(var wg in bg)isNaN(wg)||(fi[bg[wg]]=bg[wg]);RT.forEach(function(d){return delete fi[d]})}function Og(d,u){if(u===void 0&&(u={}),!na)return d;if(fi[d]!=null)return fi[d];(d==="transition"||d==="transform")&&(u[d]=d in na.style);for(var p=0;p<DA.length&&(fi[d]=DA[p](d,na.style,u),!fi[d]);p++);try{na.style[d]=""}catch{return!1}return fi[d]}var co={},FT={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},jT=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,$n;function VT(d,u,p){if(u==="var")return"var";if(u==="all")return"all";if(p==="all")return", all";var g=u?Og(u):", "+Og(p);return g||u||p}po&&($n=document.createElement("p"));function SA(d,u){var p=u;if(!$n||d==="content")return u;if(typeof p!="string"||!isNaN(parseInt(p,10)))return p;var g=d+p;if(co[g]!=null)return co[g];try{$n.style[d]=p}catch{return co[g]=!1,!1}if(FT[d])p=p.replace(jT,VT);else if($n.style[d]===""&&(p=pt.css+p,p==="-ms-flex"&&($n.style[d]="-ms-flexbox"),$n.style[d]=p,$n.style[d]===""))return co[g]=!1,!1;return $n.style[d]="",co[g]=p,co[g]}function HT(){function d(k){if(k.type==="keyframes"){var y=k;y.at=fT(y.at)}}function u(k){for(var y in k){var w=k[y];if(y==="fallbacks"&&Array.isArray(w)){k[y]=w.map(u);continue}var A=!1,f=Og(y);f&&f!==y&&(A=!0);var E=!1,I=SA(f,bi(w));I&&I!==w&&(E=!0),(A||E)&&(A&&delete k[y],k[f||y]=I||w)}return k}function p(k,y){return y.type!=="style"?k:u(k)}function g(k,y){return SA(y,bi(k))||k}return{onProcessRule:d,onProcessStyle:p,onChangeValue:g}}function UT(){var d=function(p,g){return p.length===g.length?p>g?1:-1:p.length-g.length};return{onProcessStyle:function(p,g){if(g.type!=="style")return p;for(var k={},y=Object.keys(p).sort(d),w=0;w<y.length;w++)k[y[w]]=p[y[w]];return k}}}var qT=function(u){return u===void 0&&(u={}),{plugins:[OM(),zM(u.observable),VM(),GM(),QM(),XM(),tT(),oT(),aT(u.defaultUnit),hT(),HT(),UT()]}},WT=Number.MIN_SAFE_INTEGER||-1e9,$T=function(){return WT++},GT=ue.createContext({classNamePrefix:"",disableStylesGeneration:!1,isSSR:!po}),IA=new Map,tm=function(u,p){var g=u.managers;if(g)return g[p]||(g[p]=new vA),g[p];var k=IA.get(p);return k||(k=new vA,IA.set(p,k)),k},MA=function(u){var p=u.sheet,g=u.context,k=u.index,y=u.theme;if(p){var w=tm(g,k);w.manage(y),g.registry&&g.registry.add(p)}},KT=function(u){if(u.sheet){var p=tm(u.context,u.index);p.unmanage(u.theme)}},YT=C_(qT()),N_=new WeakMap,O_=function(u){return N_.get(u)},QT=function(u,p){N_.set(u,p)},ZT=function(u){var p=u.styles;return typeof p!="function"?p:p(u.theme)};function JT(d,u){var p;d.context.id&&d.context.id.minify!=null&&(p=d.context.id.minify);var g=d.context.classNamePrefix||"";d.name&&!p&&(g+=d.name.replace(/\s/g,"-")+"-");var k="";return d.name&&(k=d.name+", "),k+=typeof d.styles=="function"?"Themed":"Unthemed",oe({},d.sheetOptions,{index:d.index,meta:k,classNamePrefix:g,link:u,generateId:d.sheetOptions&&d.sheetOptions.generateId?d.sheetOptions.generateId:d.context.generateId})}var XT=function(u){if(!u.context.disableStylesGeneration){var p=tm(u.context,u.index),g=p.get(u.theme);if(g)return g;var k=u.context.jss||YT,y=ZT(u),w=v_(y),A=k.createStyleSheet(y,JT(u,w!==null));return QT(A,{dynamicStyles:w,styles:y}),p.add(u.theme,A),A}},t4=function(u,p){for(var g in p)u.deleteRule(p[g])},e4=function(u,p,g){for(var k in g)p.updateOne(g[k],u)},n4=function(u,p){var g=O_(u);if(g){var k={};for(var y in g.dynamicStyles)for(var w=u.rules.index.length,A=u.addRule(y,g.dynamicStyles[y]),f=w;f<u.rules.index.length;f++){var E=u.rules.index[f];u.updateOne(E,p),k[A===E?y:E.key]=E}return k}},i4=function(u,p){if(!p)return u.classes;var g=O_(u);if(!g)return u.classes;var k={};for(var y in g.styles)k[y]=u.classes[y],y in p&&(k[y]+=" "+u.classes[p[y].key]);return k};function TA(d){return d?ue.useEffect:jt.useInsertionEffect||ue.useLayoutEffect}var Ag={},Jd=function(u,p){p===void 0&&(p={});var g=p,k=g.index,y=k===void 0?$T():k,w=g.theming,A=g.name,f=d_(g,["index","theming","name"]),E=w&&w.context||k_,I=function(D){return typeof u=="function"&&(D||ue.useContext(E))||Ag},S={};return function(D){var B=ue.useRef(!0),N=ue.useContext(GT),L=I(D&&D.theme),j=ue.useMemo(function(){var dt=XT({context:N,styles:u,name:A,theme:L,index:y,sheetOptions:f});return dt&&N.isSSR&&MA({index:y,context:N,sheet:dt,theme:L}),[dt,dt?n4(dt,D):null]},[N,L]),F=j[0],W=j[1];TA(N.isSSR)(function(){F&&W&&!B.current&&e4(D,F,W)},[D]),TA(N.isSSR)(function(){return F&&MA({index:y,context:N,sheet:F,theme:L}),function(){F&&(KT({index:y,context:N,sheet:F,theme:L}),W&&t4(F,W))}},[F]);var it=ue.useMemo(function(){return F&&W?i4(F,W):S},[F,W]);return ue.useDebugValue(it),ue.useDebugValue(L===Ag?"No theme":L),ue.useEffect(function(){B.current=!1}),it}},L_={exports:{}},o4={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},z_={exports:{}},r4=function(u){return!u||typeof u=="string"?!1:u instanceof Array||Array.isArray(u)||u.length>=0&&(u.splice instanceof Function||Object.getOwnPropertyDescriptor(u,u.length-1)&&u.constructor.name!=="String")},s4=r4,a4=Array.prototype.concat,c4=Array.prototype.slice,BA=z_.exports=function(u){for(var p=[],g=0,k=u.length;g<k;g++){var y=u[g];s4(y)?p=a4.call(p,c4.call(y)):p.push(y)}return p};BA.wrap=function(d){return function(){return d(BA(arguments))}};var l4=z_.exports,sa=o4,ga=l4,R_=Object.hasOwnProperty,F_=Object.create(null);for(var _g in sa)R_.call(sa,_g)&&(F_[sa[_g]]=_g);var Fe=L_.exports={to:{},get:{}};Fe.get=function(d){var u=d.substring(0,3).toLowerCase(),p,g;switch(u){case"hsl":p=Fe.get.hsl(d),g="hsl";break;case"hwb":p=Fe.get.hwb(d),g="hwb";break;default:p=Fe.get.rgb(d),g="rgb";break}return p?{model:g,value:p}:null};Fe.get.rgb=function(d){if(!d)return null;var u=/^#([a-f0-9]{3,4})$/i,p=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,g=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,k=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,y=/^(\w+)$/,w=[0,0,0,1],A,f,E;if(A=d.match(p)){for(E=A[2],A=A[1],f=0;f<3;f++){var I=f*2;w[f]=parseInt(A.slice(I,I+2),16)}E&&(w[3]=parseInt(E,16)/255)}else if(A=d.match(u)){for(A=A[1],E=A[3],f=0;f<3;f++)w[f]=parseInt(A[f]+A[f],16);E&&(w[3]=parseInt(E+E,16)/255)}else if(A=d.match(g)){for(f=0;f<3;f++)w[f]=parseInt(A[f+1],0);A[4]&&(A[5]?w[3]=parseFloat(A[4])*.01:w[3]=parseFloat(A[4]))}else if(A=d.match(k)){for(f=0;f<3;f++)w[f]=Math.round(parseFloat(A[f+1])*2.55);A[4]&&(A[5]?w[3]=parseFloat(A[4])*.01:w[3]=parseFloat(A[4]))}else return(A=d.match(y))?A[1]==="transparent"?[0,0,0,0]:R_.call(sa,A[1])?(w=sa[A[1]],w[3]=1,w):null:null;for(f=0;f<3;f++)w[f]=Kn(w[f],0,255);return w[3]=Kn(w[3],0,1),w};Fe.get.hsl=function(d){if(!d)return null;var u=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,p=d.match(u);if(p){var g=parseFloat(p[4]),k=(parseFloat(p[1])%360+360)%360,y=Kn(parseFloat(p[2]),0,100),w=Kn(parseFloat(p[3]),0,100),A=Kn(isNaN(g)?1:g,0,1);return[k,y,w,A]}return null};Fe.get.hwb=function(d){if(!d)return null;var u=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,p=d.match(u);if(p){var g=parseFloat(p[4]),k=(parseFloat(p[1])%360+360)%360,y=Kn(parseFloat(p[2]),0,100),w=Kn(parseFloat(p[3]),0,100),A=Kn(isNaN(g)?1:g,0,1);return[k,y,w,A]}return null};Fe.to.hex=function(){var d=ga(arguments);return"#"+Md(d[0])+Md(d[1])+Md(d[2])+(d[3]<1?Md(Math.round(d[3]*255)):"")};Fe.to.rgb=function(){var d=ga(arguments);return d.length<4||d[3]===1?"rgb("+Math.round(d[0])+", "+Math.round(d[1])+", "+Math.round(d[2])+")":"rgba("+Math.round(d[0])+", "+Math.round(d[1])+", "+Math.round(d[2])+", "+d[3]+")"};Fe.to.rgb.percent=function(){var d=ga(arguments),u=Math.round(d[0]/255*100),p=Math.round(d[1]/255*100),g=Math.round(d[2]/255*100);return d.length<4||d[3]===1?"rgb("+u+"%, "+p+"%, "+g+"%)":"rgba("+u+"%, "+p+"%, "+g+"%, "+d[3]+")"};Fe.to.hsl=function(){var d=ga(arguments);return d.length<4||d[3]===1?"hsl("+d[0]+", "+d[1]+"%, "+d[2]+"%)":"hsla("+d[0]+", "+d[1]+"%, "+d[2]+"%, "+d[3]+")"};Fe.to.hwb=function(){var d=ga(arguments),u="";return d.length>=4&&d[3]!==1&&(u=", "+d[3]),"hwb("+d[0]+", "+d[1]+"%, "+d[2]+"%"+u+")"};Fe.to.keyword=function(d){return F_[d.slice(0,3)]};function Kn(d,u,p){return Math.min(Math.max(u,d),p)}function Md(d){var u=Math.round(d).toString(16).toUpperCase();return u.length<2?"0"+u:u}var d4=L_.exports,j_={exports:{}},u4={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},wi=u4,V_={};for(var Cg in wi)wi.hasOwnProperty(Cg)&&(V_[wi[Cg]]=Cg);var at=j_.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var Me in at)if(at.hasOwnProperty(Me)){if(!("channels"in at[Me]))throw new Error("missing channels property: "+Me);if(!("labels"in at[Me]))throw new Error("missing channel labels property: "+Me);if(at[Me].labels.length!==at[Me].channels)throw new Error("channel and label counts mismatch: "+Me);var h4=at[Me].channels,g4=at[Me].labels;delete at[Me].channels,delete at[Me].labels,Object.defineProperty(at[Me],"channels",{value:h4}),Object.defineProperty(at[Me],"labels",{value:g4})}at.rgb.hsl=function(d){var u=d[0]/255,p=d[1]/255,g=d[2]/255,k=Math.min(u,p,g),y=Math.max(u,p,g),w=y-k,A,f,E;return y===k?A=0:u===y?A=(p-g)/w:p===y?A=2+(g-u)/w:g===y&&(A=4+(u-p)/w),A=Math.min(A*60,360),A<0&&(A+=360),E=(k+y)/2,y===k?f=0:E<=.5?f=w/(y+k):f=w/(2-y-k),[A,f*100,E*100]};at.rgb.hsv=function(d){var u,p,g,k,y,w=d[0]/255,A=d[1]/255,f=d[2]/255,E=Math.max(w,A,f),I=E-Math.min(w,A,f),S=function(v){return(E-v)/6/I+1/2};return I===0?k=y=0:(y=I/E,u=S(w),p=S(A),g=S(f),w===E?k=g-p:A===E?k=1/3+u-g:f===E&&(k=2/3+p-u),k<0?k+=1:k>1&&(k-=1)),[k*360,y*100,E*100]};at.rgb.hwb=function(d){var u=d[0],p=d[1],g=d[2],k=at.rgb.hsl(d)[0],y=1/255*Math.min(u,Math.min(p,g));return g=1-1/255*Math.max(u,Math.max(p,g)),[k,y*100,g*100]};at.rgb.cmyk=function(d){var u=d[0]/255,p=d[1]/255,g=d[2]/255,k,y,w,A;return A=Math.min(1-u,1-p,1-g),k=(1-u-A)/(1-A)||0,y=(1-p-A)/(1-A)||0,w=(1-g-A)/(1-A)||0,[k*100,y*100,w*100,A*100]};function m4(d,u){return Math.pow(d[0]-u[0],2)+Math.pow(d[1]-u[1],2)+Math.pow(d[2]-u[2],2)}at.rgb.keyword=function(d){var u=V_[d];if(u)return u;var p=1/0,g;for(var k in wi)if(wi.hasOwnProperty(k)){var y=wi[k],w=m4(d,y);w<p&&(p=w,g=k)}return g};at.keyword.rgb=function(d){return wi[d]};at.rgb.xyz=function(d){var u=d[0]/255,p=d[1]/255,g=d[2]/255;u=u>.04045?Math.pow((u+.055)/1.055,2.4):u/12.92,p=p>.04045?Math.pow((p+.055)/1.055,2.4):p/12.92,g=g>.04045?Math.pow((g+.055)/1.055,2.4):g/12.92;var k=u*.4124+p*.3576+g*.1805,y=u*.2126+p*.7152+g*.0722,w=u*.0193+p*.1192+g*.9505;return[k*100,y*100,w*100]};at.rgb.lab=function(d){var u=at.rgb.xyz(d),p=u[0],g=u[1],k=u[2],y,w,A;return p/=95.047,g/=100,k/=108.883,p=p>.008856?Math.pow(p,1/3):7.787*p+16/116,g=g>.008856?Math.pow(g,1/3):7.787*g+16/116,k=k>.008856?Math.pow(k,1/3):7.787*k+16/116,y=116*g-16,w=500*(p-g),A=200*(g-k),[y,w,A]};at.hsl.rgb=function(d){var u=d[0]/360,p=d[1]/100,g=d[2]/100,k,y,w,A,f;if(p===0)return f=g*255,[f,f,f];g<.5?y=g*(1+p):y=g+p-g*p,k=2*g-y,A=[0,0,0];for(var E=0;E<3;E++)w=u+1/3*-(E-1),w<0&&w++,w>1&&w--,6*w<1?f=k+(y-k)*6*w:2*w<1?f=y:3*w<2?f=k+(y-k)*(2/3-w)*6:f=k,A[E]=f*255;return A};at.hsl.hsv=function(d){var u=d[0],p=d[1]/100,g=d[2]/100,k=p,y=Math.max(g,.01),w,A;return g*=2,p*=g<=1?g:2-g,k*=y<=1?y:2-y,A=(g+p)/2,w=g===0?2*k/(y+k):2*p/(g+p),[u,w*100,A*100]};at.hsv.rgb=function(d){var u=d[0]/60,p=d[1]/100,g=d[2]/100,k=Math.floor(u)%6,y=u-Math.floor(u),w=255*g*(1-p),A=255*g*(1-p*y),f=255*g*(1-p*(1-y));switch(g*=255,k){case 0:return[g,f,w];case 1:return[A,g,w];case 2:return[w,g,f];case 3:return[w,A,g];case 4:return[f,w,g];case 5:return[g,w,A]}};at.hsv.hsl=function(d){var u=d[0],p=d[1]/100,g=d[2]/100,k=Math.max(g,.01),y,w,A;return A=(2-p)*g,y=(2-p)*k,w=p*k,w/=y<=1?y:2-y,w=w||0,A/=2,[u,w*100,A*100]};at.hwb.rgb=function(d){var u=d[0]/360,p=d[1]/100,g=d[2]/100,k=p+g,y,w,A,f;k>1&&(p/=k,g/=k),y=Math.floor(6*u),w=1-g,A=6*u-y,y&1&&(A=1-A),f=p+A*(w-p);var E,I,S;switch(y){default:case 6:case 0:E=w,I=f,S=p;break;case 1:E=f,I=w,S=p;break;case 2:E=p,I=w,S=f;break;case 3:E=p,I=f,S=w;break;case 4:E=f,I=p,S=w;break;case 5:E=w,I=p,S=f;break}return[E*255,I*255,S*255]};at.cmyk.rgb=function(d){var u=d[0]/100,p=d[1]/100,g=d[2]/100,k=d[3]/100,y,w,A;return y=1-Math.min(1,u*(1-k)+k),w=1-Math.min(1,p*(1-k)+k),A=1-Math.min(1,g*(1-k)+k),[y*255,w*255,A*255]};at.xyz.rgb=function(d){var u=d[0]/100,p=d[1]/100,g=d[2]/100,k,y,w;return k=u*3.2406+p*-1.5372+g*-.4986,y=u*-.9689+p*1.8758+g*.0415,w=u*.0557+p*-.204+g*1.057,k=k>.0031308?1.055*Math.pow(k,1/2.4)-.055:k*12.92,y=y>.0031308?1.055*Math.pow(y,1/2.4)-.055:y*12.92,w=w>.0031308?1.055*Math.pow(w,1/2.4)-.055:w*12.92,k=Math.min(Math.max(0,k),1),y=Math.min(Math.max(0,y),1),w=Math.min(Math.max(0,w),1),[k*255,y*255,w*255]};at.xyz.lab=function(d){var u=d[0],p=d[1],g=d[2],k,y,w;return u/=95.047,p/=100,g/=108.883,u=u>.008856?Math.pow(u,1/3):7.787*u+16/116,p=p>.008856?Math.pow(p,1/3):7.787*p+16/116,g=g>.008856?Math.pow(g,1/3):7.787*g+16/116,k=116*p-16,y=500*(u-p),w=200*(p-g),[k,y,w]};at.lab.xyz=function(d){var u=d[0],p=d[1],g=d[2],k,y,w;y=(u+16)/116,k=p/500+y,w=y-g/200;var A=Math.pow(y,3),f=Math.pow(k,3),E=Math.pow(w,3);return y=A>.008856?A:(y-16/116)/7.787,k=f>.008856?f:(k-16/116)/7.787,w=E>.008856?E:(w-16/116)/7.787,k*=95.047,y*=100,w*=108.883,[k,y,w]};at.lab.lch=function(d){var u=d[0],p=d[1],g=d[2],k,y,w;return k=Math.atan2(g,p),y=k*360/2/Math.PI,y<0&&(y+=360),w=Math.sqrt(p*p+g*g),[u,w,y]};at.lch.lab=function(d){var u=d[0],p=d[1],g=d[2],k,y,w;return w=g/360*2*Math.PI,k=p*Math.cos(w),y=p*Math.sin(w),[u,k,y]};at.rgb.ansi16=function(d){var u=d[0],p=d[1],g=d[2],k=1 in arguments?arguments[1]:at.rgb.hsv(d)[2];if(k=Math.round(k/50),k===0)return 30;var y=30+(Math.round(g/255)<<2|Math.round(p/255)<<1|Math.round(u/255));return k===2&&(y+=60),y};at.hsv.ansi16=function(d){return at.rgb.ansi16(at.hsv.rgb(d),d[2])};at.rgb.ansi256=function(d){var u=d[0],p=d[1],g=d[2];if(u===p&&p===g)return u<8?16:u>248?231:Math.round((u-8)/247*24)+232;var k=16+36*Math.round(u/255*5)+6*Math.round(p/255*5)+Math.round(g/255*5);return k};at.ansi16.rgb=function(d){var u=d%10;if(u===0||u===7)return d>50&&(u+=3.5),u=u/10.5*255,[u,u,u];var p=(~~(d>50)+1)*.5,g=(u&1)*p*255,k=(u>>1&1)*p*255,y=(u>>2&1)*p*255;return[g,k,y]};at.ansi256.rgb=function(d){if(d>=232){var u=(d-232)*10+8;return[u,u,u]}d-=16;var p,g=Math.floor(d/36)/5*255,k=Math.floor((p=d%36)/6)/5*255,y=p%6/5*255;return[g,k,y]};at.rgb.hex=function(d){var u=((Math.round(d[0])&255)<<16)+((Math.round(d[1])&255)<<8)+(Math.round(d[2])&255),p=u.toString(16).toUpperCase();return"000000".substring(p.length)+p};at.hex.rgb=function(d){var u=d.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!u)return[0,0,0];var p=u[0];u[0].length===3&&(p=p.split("").map(function(A){return A+A}).join(""));var g=parseInt(p,16),k=g>>16&255,y=g>>8&255,w=g&255;return[k,y,w]};at.rgb.hcg=function(d){var u=d[0]/255,p=d[1]/255,g=d[2]/255,k=Math.max(Math.max(u,p),g),y=Math.min(Math.min(u,p),g),w=k-y,A,f;return w<1?A=y/(1-w):A=0,w<=0?f=0:k===u?f=(p-g)/w%6:k===p?f=2+(g-u)/w:f=4+(u-p)/w+4,f/=6,f%=1,[f*360,w*100,A*100]};at.hsl.hcg=function(d){var u=d[1]/100,p=d[2]/100,g=1,k=0;return p<.5?g=2*u*p:g=2*u*(1-p),g<1&&(k=(p-.5*g)/(1-g)),[d[0],g*100,k*100]};at.hsv.hcg=function(d){var u=d[1]/100,p=d[2]/100,g=u*p,k=0;return g<1&&(k=(p-g)/(1-g)),[d[0],g*100,k*100]};at.hcg.rgb=function(d){var u=d[0]/360,p=d[1]/100,g=d[2]/100;if(p===0)return[g*255,g*255,g*255];var k=[0,0,0],y=u%1*6,w=y%1,A=1-w,f=0;switch(Math.floor(y)){case 0:k[0]=1,k[1]=w,k[2]=0;break;case 1:k[0]=A,k[1]=1,k[2]=0;break;case 2:k[0]=0,k[1]=1,k[2]=w;break;case 3:k[0]=0,k[1]=A,k[2]=1;break;case 4:k[0]=w,k[1]=0,k[2]=1;break;default:k[0]=1,k[1]=0,k[2]=A}return f=(1-p)*g,[(p*k[0]+f)*255,(p*k[1]+f)*255,(p*k[2]+f)*255]};at.hcg.hsv=function(d){var u=d[1]/100,p=d[2]/100,g=u+p*(1-u),k=0;return g>0&&(k=u/g),[d[0],k*100,g*100]};at.hcg.hsl=function(d){var u=d[1]/100,p=d[2]/100,g=p*(1-u)+.5*u,k=0;return g>0&&g<.5?k=u/(2*g):g>=.5&&g<1&&(k=u/(2*(1-g))),[d[0],k*100,g*100]};at.hcg.hwb=function(d){var u=d[1]/100,p=d[2]/100,g=u+p*(1-u);return[d[0],(g-u)*100,(1-g)*100]};at.hwb.hcg=function(d){var u=d[1]/100,p=d[2]/100,g=1-p,k=g-u,y=0;return k<1&&(y=(g-k)/(1-k)),[d[0],k*100,y*100]};at.apple.rgb=function(d){return[d[0]/65535*255,d[1]/65535*255,d[2]/65535*255]};at.rgb.apple=function(d){return[d[0]/255*65535,d[1]/255*65535,d[2]/255*65535]};at.gray.rgb=function(d){return[d[0]/100*255,d[0]/100*255,d[0]/100*255]};at.gray.hsl=at.gray.hsv=function(d){return[0,0,d[0]]};at.gray.hwb=function(d){return[0,100,d[0]]};at.gray.cmyk=function(d){return[0,0,0,d[0]]};at.gray.lab=function(d){return[d[0],0,0]};at.gray.hex=function(d){var u=Math.round(d[0]/100*255)&255,p=(u<<16)+(u<<8)+u,g=p.toString(16).toUpperCase();return"000000".substring(g.length)+g};at.rgb.gray=function(d){var u=(d[0]+d[1]+d[2])/3;return[u/255*100]};var H_=j_.exports,Ld=H_;function p4(){for(var d={},u=Object.keys(Ld),p=u.length,g=0;g<p;g++)d[u[g]]={distance:-1,parent:null};return d}function f4(d){var u=p4(),p=[d];for(u[d].distance=0;p.length;)for(var g=p.pop(),k=Object.keys(Ld[g]),y=k.length,w=0;w<y;w++){var A=k[w],f=u[A];f.distance===-1&&(f.distance=u[g].distance+1,f.parent=g,p.unshift(A))}return u}function k4(d,u){return function(p){return u(d(p))}}function b4(d,u){for(var p=[u[d].parent,d],g=Ld[u[d].parent][d],k=u[d].parent;u[k].parent;)p.unshift(u[k].parent),g=k4(Ld[u[k].parent][k],g),k=u[k].parent;return g.conversion=p,g}var w4=function(d){for(var u=f4(d),p={},g=Object.keys(u),k=g.length,y=0;y<k;y++){var w=g[y],A=u[w];A.parent!==null&&(p[w]=b4(w,u))}return p},Lg=H_,A4=w4,uo={},_4=Object.keys(Lg);function C4(d){var u=function(p){return p==null?p:(arguments.length>1&&(p=Array.prototype.slice.call(arguments)),d(p))};return"conversion"in d&&(u.conversion=d.conversion),u}function v4(d){var u=function(p){if(p==null)return p;arguments.length>1&&(p=Array.prototype.slice.call(arguments));var g=d(p);if(typeof g=="object")for(var k=g.length,y=0;y<k;y++)g[y]=Math.round(g[y]);return g};return"conversion"in d&&(u.conversion=d.conversion),u}_4.forEach(function(d){uo[d]={},Object.defineProperty(uo[d],"channels",{value:Lg[d].channels}),Object.defineProperty(uo[d],"labels",{value:Lg[d].labels});var u=A4(d),p=Object.keys(u);p.forEach(function(g){var k=u[g];uo[d][g]=v4(k),uo[d][g].raw=C4(k)})});var y4=uo,ia=d4,Re=y4,em=[].slice,U_=["keyword","gray","hex"],zg={};Object.keys(Re).forEach(function(d){zg[em.call(Re[d].labels).sort().join("")]=d});var zd={};function _e(d,u){if(!(this instanceof _e))return new _e(d,u);if(u&&u in U_&&(u=null),u&&!(u in Re))throw new Error("Unknown model: "+u);var p,g;if(d==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(d instanceof _e)this.model=d.model,this.color=d.color.slice(),this.valpha=d.valpha;else if(typeof d=="string"){var k=ia.get(d);if(k===null)throw new Error("Unable to parse color from string: "+d);this.model=k.model,g=Re[this.model].channels,this.color=k.value.slice(0,g),this.valpha=typeof k.value[g]=="number"?k.value[g]:1}else if(d.length){this.model=u||"rgb",g=Re[this.model].channels;var y=em.call(d,0,g);this.color=Rg(y,g),this.valpha=typeof d[g]=="number"?d[g]:1}else if(typeof d=="number")d&=16777215,this.model="rgb",this.color=[d>>16&255,d>>8&255,d&255],this.valpha=1;else{this.valpha=1;var w=Object.keys(d);"alpha"in d&&(w.splice(w.indexOf("alpha"),1),this.valpha=typeof d.alpha=="number"?d.alpha:0);var A=w.sort().join("");if(!(A in zg))throw new Error("Unable to parse color from object: "+JSON.stringify(d));this.model=zg[A];var f=Re[this.model].labels,E=[];for(p=0;p<f.length;p++)E.push(d[f[p]]);this.color=Rg(E)}if(zd[this.model])for(g=Re[this.model].channels,p=0;p<g;p++){var I=zd[this.model][p];I&&(this.color[p]=I(this.color[p]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}_e.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(d){var u=this.model in ia.to?this:this.rgb();u=u.round(typeof d=="number"?d:1);var p=u.valpha===1?u.color:u.color.concat(this.valpha);return ia.to[u.model](p)},percentString:function(d){var u=this.rgb().round(typeof d=="number"?d:1),p=u.valpha===1?u.color:u.color.concat(this.valpha);return ia.to.rgb.percent(p)},array:function(){return this.valpha===1?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var d={},u=Re[this.model].channels,p=Re[this.model].labels,g=0;g<u;g++)d[p[g]]=this.color[g];return this.valpha!==1&&(d.alpha=this.valpha),d},unitArray:function(){var d=this.rgb().color;return d[0]/=255,d[1]/=255,d[2]/=255,this.valpha!==1&&d.push(this.valpha),d},unitObject:function(){var d=this.rgb().object();return d.r/=255,d.g/=255,d.b/=255,this.valpha!==1&&(d.alpha=this.valpha),d},round:function(d){return d=Math.max(d||0,0),new _e(this.color.map(E4(d)).concat(this.valpha),this.model)},alpha:function(d){return arguments.length?new _e(this.color.concat(Math.max(0,Math.min(1,d))),this.model):this.valpha},red:te("rgb",0,de(255)),green:te("rgb",1,de(255)),blue:te("rgb",2,de(255)),hue:te(["hsl","hsv","hsl","hwb","hcg"],0,function(d){return(d%360+360)%360}),saturationl:te("hsl",1,de(100)),lightness:te("hsl",2,de(100)),saturationv:te("hsv",1,de(100)),value:te("hsv",2,de(100)),chroma:te("hcg",1,de(100)),gray:te("hcg",2,de(100)),white:te("hwb",1,de(100)),wblack:te("hwb",2,de(100)),cyan:te("cmyk",0,de(100)),magenta:te("cmyk",1,de(100)),yellow:te("cmyk",2,de(100)),black:te("cmyk",3,de(100)),x:te("xyz",0,de(100)),y:te("xyz",1,de(100)),z:te("xyz",2,de(100)),l:te("lab",0,de(100)),a:te("lab",1),b:te("lab",2),keyword:function(d){return arguments.length?new _e(d):Re[this.model].keyword(this.color)},hex:function(d){return arguments.length?new _e(d):ia.to.hex(this.rgb().round().color)},rgbNumber:function(){var d=this.rgb().color;return(d[0]&255)<<16|(d[1]&255)<<8|d[2]&255},luminosity:function(){for(var d=this.rgb().color,u=[],p=0;p<d.length;p++){var g=d[p]/255;u[p]=g<=.03928?g/12.92:Math.pow((g+.055)/1.055,2.4)}return .2126*u[0]+.7152*u[1]+.0722*u[2]},contrast:function(d){var u=this.luminosity(),p=d.luminosity();return u>p?(u+.05)/(p+.05):(p+.05)/(u+.05)},level:function(d){var u=this.contrast(d);return u>=7.1?"AAA":u>=4.5?"AA":""},isDark:function(){var d=this.rgb().color,u=(d[0]*299+d[1]*587+d[2]*114)/1e3;return u<128},isLight:function(){return!this.isDark()},negate:function(){for(var d=this.rgb(),u=0;u<3;u++)d.color[u]=255-d.color[u];return d},lighten:function(d){var u=this.hsl();return u.color[2]+=u.color[2]*d,u},darken:function(d){var u=this.hsl();return u.color[2]-=u.color[2]*d,u},saturate:function(d){var u=this.hsl();return u.color[1]+=u.color[1]*d,u},desaturate:function(d){var u=this.hsl();return u.color[1]-=u.color[1]*d,u},whiten:function(d){var u=this.hwb();return u.color[1]+=u.color[1]*d,u},blacken:function(d){var u=this.hwb();return u.color[2]+=u.color[2]*d,u},grayscale:function(){var d=this.rgb().color,u=d[0]*.3+d[1]*.59+d[2]*.11;return _e.rgb(u,u,u)},fade:function(d){return this.alpha(this.valpha-this.valpha*d)},opaquer:function(d){return this.alpha(this.valpha+this.valpha*d)},rotate:function(d){var u=this.hsl(),p=u.color[0];return p=(p+d)%360,p=p<0?360+p:p,u.color[0]=p,u},mix:function(d,u){if(!d||!d.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof d);var p=d.rgb(),g=this.rgb(),k=u===void 0?.5:u,y=2*k-1,w=p.alpha()-g.alpha(),A=((y*w===-1?y:(y+w)/(1+y*w))+1)/2,f=1-A;return _e.rgb(A*p.red()+f*g.red(),A*p.green()+f*g.green(),A*p.blue()+f*g.blue(),p.alpha()*k+g.alpha()*(1-k))}};Object.keys(Re).forEach(function(d){if(U_.indexOf(d)===-1){var u=Re[d].channels;_e.prototype[d]=function(){if(this.model===d)return new _e(this);if(arguments.length)return new _e(arguments,d);var p=typeof arguments[u]=="number"?u:this.valpha;return new _e(D4(Re[this.model][d].raw(this.color)).concat(p),d)},_e[d]=function(p){return typeof p=="number"&&(p=Rg(em.call(arguments),u)),new _e(p,d)}}});function x4(d,u){return Number(d.toFixed(u))}function E4(d){return function(u){return x4(u,d)}}function te(d,u,p){return d=Array.isArray(d)?d:[d],d.forEach(function(g){(zd[g]||(zd[g]=[]))[u]=p}),d=d[0],function(g){var k;return arguments.length?(p&&(g=p(g)),k=this[d](),k.color[u]=g,k):(k=this[d]().color[u],p&&(k=p(k)),k)}}function de(d){return function(u){return Math.max(0,Math.min(d,u))}}function D4(d){return Array.isArray(d)?d:[d]}function Rg(d,u){for(var p=0;p<u;p++)typeof d[p]!="number"&&(d[p]=0);return d}var S4=_e;const I4=qg(S4);function ho(){return ho=Object.assign?Object.assign.bind():function(d){for(var u=1;u<arguments.length;u++){var p=arguments[u];for(var g in p)Object.prototype.hasOwnProperty.call(p,g)&&(d[g]=p[g])}return d},ho.apply(this,arguments)}function nm(d,u){if(d==null)return{};var p={},g=Object.keys(d),k,y;for(y=0;y<g.length;y++)k=g[y],!(u.indexOf(k)>=0)&&(p[k]=d[k]);return p}var PA={activeBgColor:"#ed1d24",activeTextColor:"#ffffff",completedBgColor:"#a10308",completedTextColor:"#ffffff",inactiveBgColor:"#e0e0e0",inactiveTextColor:"#ffffff",size:"2em",circleFontSize:"1rem",borderRadius:"50%"},NA=.15,OA=.2,Td=function(u,p){var g=I4(u);return g.isDark()?g.darken(p).hex():g.lighten(p).hex()},M4=Jd({StepMain:{display:"flex",flexDirection:"column",alignItems:"center"},StepButton:function(u){return{border:"none",margin:0,padding:0,cursor:"pointer",borderRadius:u.borderRadius,backgroundColor:u.inactiveBgColor,width:u.size,height:u.size,fontSize:"1em",display:"flex",alignItems:"center",justifyContent:"center","&.active":{backgroundColor:u.activeBgColor,"&:hover":{backgroundColor:Td(u.activeBgColor,NA)},"&:active":{backgroundColor:Td(u.activeBgColor,OA)}},"&.completed":{backgroundColor:u.completedBgColor,"&:hover":{backgroundColor:Td(u.completedBgColor,NA)},"&:active":{backgroundColor:Td(u.completedBgColor,OA)}}}},StepButtonContent:function(u){return{color:u.inactiveTextColor,fontSize:u.circleFontSize,fontVariantNumeric:"tabular-nums","&.active":{color:u.activeTextColor},"&.completed":{color:u.completedTextColor}}}}),im=jt.createContext({activeStep:0,hideConnectors:!1,nonLinear:!1,connectorStateColors:!1}),T4={disabledColor:"#bdbdbd",activeColor:"#ed1d24",completedColor:"#a10308",size:1,style:"solid"},B4=Jd({ConnectorContainer:function(u){return{top:"calc(("+u.stepSize+" - "+u.size+") / 2)",left:"calc(-50% + "+u.stepSize+" - 8px)",right:"calc(50% + "+u.stepSize+" - 8px)",position:"absolute"}},Connector:function(u){return{borderTopStyle:u.style,borderTopWidth:u.size,borderColor:u.disabledColor,display:"block","&.completed":{borderColor:u.completedColor},"&.active":{borderColor:u.activeColor}}}}),LA=function(u,p){typeof u[p]=="number"&&(u[p]=u[p]+"px")},om=jt.createContext({completed:!1,active:!1,disabled:!1,index:0}),P4=function(){var u=jt.useContext(im),p=u.connectorStateColors,g=u.connectorStyleConfig,k=jt.useContext(om),y=k.completed,w=k.active,A=k.stepSize,f=ho({},T4,g,{stepSize:(g==null?void 0:g.stepSize)||A});LA(f,"stepSize"),LA(f,"size");var E=B4(f);return jt.createElement("div",{id:"RFS-ConnectorContainer",className:E.ConnectorContainer},jt.createElement("span",{id:"RFS-Connector",className:Fd(E.Connector,{completed:y&&p},{active:w&&p})}))},N4=["children","contentClasses"],O4=function(u){var p=u.children,g=u.contentClasses,k=nm(u,N4),y=jt.useContext(om),w=y.completed,A=y.disabled,f=y.index;return jt.createElement("button",Object.assign({disabled:A},k),jt.createElement("span",{className:Fd(g,{active:!A&&!w},{completed:w})},p||f+1))},L4=Jd({LabelContainer:function(u){return{width:"100%",fontSize:u.fontSize||"0.875rem",fontWeight:400,lineHeight:1.4}},Label:function(u){return{display:"block",marginTop:16,textAlign:"center",fontWeight:u.fontWeight||500}}}),z4=function(u){var p=u.children,g=u.fontSize,k=u.fontWeight,y=L4({fontSize:g,fontWeight:k});return jt.createElement("div",{id:"RFS-LabelContainer",className:y.LabelContainer},jt.createElement("span",{id:"RFS-Label",className:y.Label},p))},R4=["children","label","styleConfig","completed","active","disabled","className","index"],F4=function(u){var p=u.children,g=u.label,k=g===void 0?"":g,y=u.styleConfig,w=u.completed,A=u.active,f=u.disabled,E=u.className,I=u.index,S=I===void 0?0:I,v=nm(u,R4),D=ue.useContext(im),B=D.activeStep,N=D.hideConnectors,L=D.nonLinear,j=A,F=j===void 0?!1:j,W=w,it=W===void 0?!1:W,dt=f,ct=dt===void 0?!1:dt;B===S?F=A!==void 0?A:!0:!L&&B>S&&!A&&!f?it=w!==void 0?w:!0:!L&&B<S&&!A&&!w&&(ct=f!==void 0?f:!0);var At=ho({},y,{completed:it&&!ct,active:F||!ct}),St=M4(ho({},PA,At.size&&!At.circleFontSize&&{circleFontSize:"calc("+At.size+" / 2)"},At)),Vt={completed:it,active:F,disabled:ct,index:S,stepSize:y&&y.size||PA.size};return ue.createElement(om.Provider,{value:Vt},S!==0&&(N==="inactive"&&(F||it)||N!==!0&&N!=="inactive")&&ue.createElement(P4,null),ue.createElement("div",{id:"RFS-StepMain",className:St.StepMain},ue.createElement(O4,Object.assign({id:"RFS-StepButton",className:Fd(St.StepButton,{active:!ct&&!it},{completed:it},E),contentClasses:St.StepButtonContent},v),p||S+1),k&&ue.createElement(z4,{fontSize:y==null?void 0:y.labelFontSize,fontWeight:y==null?void 0:y.fontWeight},k)))},j4=Jd({StepperContainer:{display:"flex",alignItems:"flex-start",flexDirection:"row",padding:24,fontFamily:"Arial, Helvetica, sans-serif"},StepContainer:{flex:1,position:"relative",paddingLeft:8,paddingRight:8}}),V4=["steps","children","connectorStateColors","className","stepClassName","activeStep","styleConfig","connectorStyleConfig","hideConnectors","nonLinear"],QN=function(u){var p=u.steps,g=u.children,k=u.connectorStateColors,y=k===void 0?!1:k,w=u.className,A=w===void 0?"":w,f=u.stepClassName,E=f===void 0?"":f,I=u.activeStep,S=I===void 0?0:I,v=u.styleConfig,D=u.connectorStyleConfig,B=u.hideConnectors,N=B===void 0?!1:B,L=u.nonLinear,j=L===void 0?!1:L,F=nm(u,V4),W=j4(),it=jt.useMemo(function(){return{activeStep:S,hideConnectors:N,nonLinear:j,connectorStateColors:y&&!j,connectorStyleConfig:D}},[S,N,j,y,D]),dt=p instanceof Array&&p.length>0,ct=dt?p:jt.Children.toArray(g),At=ct.map(function(St,Vt){if(!dt&&!jt.isValidElement(St))return null;var se={className:E,styleConfig:v,index:Vt};return jt.createElement("div",{key:Vt,id:"RFS-StepContainer",className:W.StepContainer},jt.isValidElement(St)?jt.cloneElement(St,ho({},se,St.props)):jt.createElement(F4,Object.assign({},se,typeof St=="object"?St:{})))});return jt.createElement(im.Provider,{value:it},jt.createElement("div",Object.assign({id:"RFS-StepperContainer",className:Fd(W.StepperContainer,A)},F),At))},q_={exports:{}};/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class rm{constructor(u){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof u.crashNumberLimit=="number"?u.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof u.minimumNonErrorTimePeriod=="number"?u.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=p=>{const g="error"in p?p.error:p.reason;g instanceof Error&&this._handleError(g,p)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(u,p){this._listeners[u]||(this._listeners[u]=[]),this._listeners[u].push(p)}off(u,p){this._listeners[u]=this._listeners[u].filter(g=>g!==p)}_fire(u,...p){const g=this._listeners[u]||[];for(const k of g)k.apply(this,[null,...p])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(u,p){if(this._shouldReactToError(u)){this.crashes.push({message:u.message,stack:u.stack,filename:p instanceof ErrorEvent?p.filename:void 0,lineno:p instanceof ErrorEvent?p.lineno:void 0,colno:p instanceof ErrorEvent?p.colno:void 0,date:this._now()});const g=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:u,causesRestart:g}),g?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(u){return u.is&&u.is("CKEditorError")&&u.context!==void 0&&u.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(u)}_shouldRestart(){if(this.crashes.length<=this._crashNumberLimit)return!0;const u=this.crashes[this.crashes.length-1].date,p=this.crashes[this.crashes.length-1-this._crashNumberLimit].date;return(u-p)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function Fg(d,u=new Set){const p=[d],g=new Set;let k=0;for(;p.length>k;){const y=p[k++];if(!(g.has(y)||!H4(y)||u.has(y)))if(g.add(y),Symbol.iterator in y)try{for(const w of y)p.push(w)}catch{}else for(const w in y)w!=="defaultValue"&&p.push(y[w])}return g}function H4(d){const u=Object.prototype.toString.call(d),p=typeof d;return!(p==="number"||p==="boolean"||p==="string"||p==="symbol"||p==="function"||u==="[object Date]"||u==="[object RegExp]"||u==="[object Module]"||d===void 0||d===null||d._watchdogExcluded||d instanceof EventTarget||d instanceof Event)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function W_(d,u,p=new Set){if(d===u&&U4(d))return!0;const g=Fg(d,p),k=Fg(u,p);for(const y of g)if(k.has(y))return!0;return!1}function U4(d){return typeof d=="object"&&d!==null}var $_=typeof global=="object"&&global&&global.Object===Object&&global,q4=typeof self=="object"&&self&&self.Object===Object&&self,an=$_||q4||Function("return this")(),go=an.Symbol,G_=Object.prototype,W4=G_.hasOwnProperty,$4=G_.toString,ta=go?go.toStringTag:void 0;function G4(d){var u=W4.call(d,ta),p=d[ta];try{d[ta]=void 0;var g=!0}catch{}var k=$4.call(d);return g&&(u?d[ta]=p:delete d[ta]),k}var K4=Object.prototype,Y4=K4.toString;function Q4(d){return Y4.call(d)}var Z4="[object Null]",J4="[object Undefined]",zA=go?go.toStringTag:void 0;function _i(d){return d==null?d===void 0?J4:Z4:zA&&zA in Object(d)?G4(d):Q4(d)}function Qn(d){return d!=null&&typeof d=="object"}var X4="[object Symbol]";function tB(d){return typeof d=="symbol"||Qn(d)&&_i(d)==X4}var sm=Array.isArray,eB=/\s/;function nB(d){for(var u=d.length;u--&&eB.test(d.charAt(u)););return u}var iB=/^\s+/;function oB(d){return d&&d.slice(0,nB(d)+1).replace(iB,"")}function xn(d){var u=typeof d;return d!=null&&(u=="object"||u=="function")}var RA=NaN,rB=/^[-+]0x[0-9a-f]+$/i,sB=/^0b[01]+$/i,aB=/^0o[0-7]+$/i,cB=parseInt;function FA(d){if(typeof d=="number")return d;if(tB(d))return RA;if(xn(d)){var u=typeof d.valueOf=="function"?d.valueOf():d;d=xn(u)?u+"":u}if(typeof d!="string")return d===0?d:+d;d=oB(d);var p=sB.test(d);return p||aB.test(d)?cB(d.slice(2),p?2:8):rB.test(d)?RA:+d}var lB="[object AsyncFunction]",dB="[object Function]",uB="[object GeneratorFunction]",hB="[object Proxy]";function K_(d){if(!xn(d))return!1;var u=_i(d);return u==dB||u==uB||u==lB||u==hB}var vg=an["__core-js_shared__"],jA=function(){var d=/[^.]+$/.exec(vg&&vg.keys&&vg.keys.IE_PROTO||"");return d?"Symbol(src)_1."+d:""}();function gB(d){return!!jA&&jA in d}var mB=Function.prototype,pB=mB.toString;function Ci(d){if(d!=null){try{return pB.call(d)}catch{}try{return d+""}catch{}}return""}var fB=/[\\^$.*+?()[\]{}|]/g,kB=/^\[object .+?Constructor\]$/,bB=Function.prototype,wB=Object.prototype,AB=bB.toString,_B=wB.hasOwnProperty,CB=RegExp("^"+AB.call(_B).replace(fB,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function vB(d){if(!xn(d)||gB(d))return!1;var u=K_(d)?CB:kB;return u.test(Ci(d))}function yB(d,u){return d==null?void 0:d[u]}function vi(d,u){var p=yB(d,u);return vB(p)?p:void 0}var jg=vi(an,"WeakMap"),VA=Object.create,xB=function(){function d(){}return function(u){if(!xn(u))return{};if(VA)return VA(u);d.prototype=u;var p=new d;return d.prototype=void 0,p}}();function EB(d,u){var p=-1,g=d.length;for(u||(u=Array(g));++p<g;)u[p]=d[p];return u}var HA=function(){try{var d=vi(Object,"defineProperty");return d({},"",{}),d}catch{}}();function DB(d,u){for(var p=-1,g=d==null?0:d.length;++p<g&&u(d[p],p,d)!==!1;);return d}var SB=9007199254740991,IB=/^(?:0|[1-9]\d*)$/;function MB(d,u){var p=typeof d;return u=u??SB,!!u&&(p=="number"||p!="symbol"&&IB.test(d))&&d>-1&&d%1==0&&d<u}function Y_(d,u,p){u=="__proto__"&&HA?HA(d,u,{configurable:!0,enumerable:!0,value:p,writable:!0}):d[u]=p}function Q_(d,u){return d===u||d!==d&&u!==u}var TB=Object.prototype,BB=TB.hasOwnProperty;function Z_(d,u,p){var g=d[u];(!(BB.call(d,u)&&Q_(g,p))||p===void 0&&!(u in d))&&Y_(d,u,p)}function Xd(d,u,p,g){var k=!p;p||(p={});for(var y=-1,w=u.length;++y<w;){var A=u[y],f=void 0;f===void 0&&(f=d[A]),k?Y_(p,A,f):Z_(p,A,f)}return p}var PB=9007199254740991;function J_(d){return typeof d=="number"&&d>-1&&d%1==0&&d<=PB}function X_(d){return d!=null&&J_(d.length)&&!K_(d)}var NB=Object.prototype;function am(d){var u=d&&d.constructor,p=typeof u=="function"&&u.prototype||NB;return d===p}function OB(d,u){for(var p=-1,g=Array(d);++p<d;)g[p]=u(p);return g}var LB="[object Arguments]";function UA(d){return Qn(d)&&_i(d)==LB}var tC=Object.prototype,zB=tC.hasOwnProperty,RB=tC.propertyIsEnumerable,FB=UA(function(){return arguments}())?UA:function(d){return Qn(d)&&zB.call(d,"callee")&&!RB.call(d,"callee")};function jB(){return!1}var eC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,qA=eC&&typeof module=="object"&&module&&!module.nodeType&&module,VB=qA&&qA.exports===eC,WA=VB?an.Buffer:void 0,HB=WA?WA.isBuffer:void 0,nC=HB||jB,UB="[object Arguments]",qB="[object Array]",WB="[object Boolean]",$B="[object Date]",GB="[object Error]",KB="[object Function]",YB="[object Map]",QB="[object Number]",ZB="[object Object]",JB="[object RegExp]",XB="[object Set]",t3="[object String]",e3="[object WeakMap]",n3="[object ArrayBuffer]",i3="[object DataView]",o3="[object Float32Array]",r3="[object Float64Array]",s3="[object Int8Array]",a3="[object Int16Array]",c3="[object Int32Array]",l3="[object Uint8Array]",d3="[object Uint8ClampedArray]",u3="[object Uint16Array]",h3="[object Uint32Array]",Gt={};Gt[o3]=Gt[r3]=Gt[s3]=Gt[a3]=Gt[c3]=Gt[l3]=Gt[d3]=Gt[u3]=Gt[h3]=!0;Gt[UB]=Gt[qB]=Gt[n3]=Gt[WB]=Gt[i3]=Gt[$B]=Gt[GB]=Gt[KB]=Gt[YB]=Gt[QB]=Gt[ZB]=Gt[JB]=Gt[XB]=Gt[t3]=Gt[e3]=!1;function g3(d){return Qn(d)&&J_(d.length)&&!!Gt[_i(d)]}function cm(d){return function(u){return d(u)}}var iC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,aa=iC&&typeof module=="object"&&module&&!module.nodeType&&module,m3=aa&&aa.exports===iC,yg=m3&&$_.process,mo=function(){try{var d=aa&&aa.require&&aa.require("util").types;return d||yg&&yg.binding&&yg.binding("util")}catch{}}(),$A=mo&&mo.isTypedArray,p3=$A?cm($A):g3,f3=Object.prototype,k3=f3.hasOwnProperty;function oC(d,u){var p=sm(d),g=!p&&FB(d),k=!p&&!g&&nC(d),y=!p&&!g&&!k&&p3(d),w=p||g||k||y,A=w?OB(d.length,String):[],f=A.length;for(var E in d)(u||k3.call(d,E))&&!(w&&(E=="length"||k&&(E=="offset"||E=="parent")||y&&(E=="buffer"||E=="byteLength"||E=="byteOffset")||MB(E,f)))&&A.push(E);return A}function rC(d,u){return function(p){return d(u(p))}}var b3=rC(Object.keys,Object),w3=Object.prototype,A3=w3.hasOwnProperty;function _3(d){if(!am(d))return b3(d);var u=[];for(var p in Object(d))A3.call(d,p)&&p!="constructor"&&u.push(p);return u}function lm(d){return X_(d)?oC(d):_3(d)}function C3(d){var u=[];if(d!=null)for(var p in Object(d))u.push(p);return u}var v3=Object.prototype,y3=v3.hasOwnProperty;function x3(d){if(!xn(d))return C3(d);var u=am(d),p=[];for(var g in d)g=="constructor"&&(u||!y3.call(d,g))||p.push(g);return p}function dm(d){return X_(d)?oC(d,!0):x3(d)}var ua=vi(Object,"create");function E3(){this.__data__=ua?ua(null):{},this.size=0}function D3(d){var u=this.has(d)&&delete this.__data__[d];return this.size-=u?1:0,u}var S3="__lodash_hash_undefined__",I3=Object.prototype,M3=I3.hasOwnProperty;function T3(d){var u=this.__data__;if(ua){var p=u[d];return p===S3?void 0:p}return M3.call(u,d)?u[d]:void 0}var B3=Object.prototype,P3=B3.hasOwnProperty;function N3(d){var u=this.__data__;return ua?u[d]!==void 0:P3.call(u,d)}var O3="__lodash_hash_undefined__";function L3(d,u){var p=this.__data__;return this.size+=this.has(d)?0:1,p[d]=ua&&u===void 0?O3:u,this}function Ai(d){var u=-1,p=d==null?0:d.length;for(this.clear();++u<p;){var g=d[u];this.set(g[0],g[1])}}Ai.prototype.clear=E3;Ai.prototype.delete=D3;Ai.prototype.get=T3;Ai.prototype.has=N3;Ai.prototype.set=L3;function z3(){this.__data__=[],this.size=0}function tu(d,u){for(var p=d.length;p--;)if(Q_(d[p][0],u))return p;return-1}var R3=Array.prototype,F3=R3.splice;function j3(d){var u=this.__data__,p=tu(u,d);if(p<0)return!1;var g=u.length-1;return p==g?u.pop():F3.call(u,p,1),--this.size,!0}function V3(d){var u=this.__data__,p=tu(u,d);return p<0?void 0:u[p][1]}function H3(d){return tu(this.__data__,d)>-1}function U3(d,u){var p=this.__data__,g=tu(p,d);return g<0?(++this.size,p.push([d,u])):p[g][1]=u,this}function En(d){var u=-1,p=d==null?0:d.length;for(this.clear();++u<p;){var g=d[u];this.set(g[0],g[1])}}En.prototype.clear=z3;En.prototype.delete=j3;En.prototype.get=V3;En.prototype.has=H3;En.prototype.set=U3;var ha=vi(an,"Map");function q3(){this.size=0,this.__data__={hash:new Ai,map:new(ha||En),string:new Ai}}function W3(d){var u=typeof d;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?d!=="__proto__":d===null}function eu(d,u){var p=d.__data__;return W3(u)?p[typeof u=="string"?"string":"hash"]:p.map}function $3(d){var u=eu(this,d).delete(d);return this.size-=u?1:0,u}function G3(d){return eu(this,d).get(d)}function K3(d){return eu(this,d).has(d)}function Y3(d,u){var p=eu(this,d),g=p.size;return p.set(d,u),this.size+=p.size==g?0:1,this}function ko(d){var u=-1,p=d==null?0:d.length;for(this.clear();++u<p;){var g=d[u];this.set(g[0],g[1])}}ko.prototype.clear=q3;ko.prototype.delete=$3;ko.prototype.get=G3;ko.prototype.has=K3;ko.prototype.set=Y3;function sC(d,u){for(var p=-1,g=u.length,k=d.length;++p<g;)d[k+p]=u[p];return d}var um=rC(Object.getPrototypeOf,Object),Q3="[object Object]",Z3=Function.prototype,J3=Object.prototype,aC=Z3.toString,X3=J3.hasOwnProperty,tP=aC.call(Object);function eP(d){if(!Qn(d)||_i(d)!=Q3)return!1;var u=um(d);if(u===null)return!0;var p=X3.call(u,"constructor")&&u.constructor;return typeof p=="function"&&p instanceof p&&aC.call(p)==tP}function nP(){this.__data__=new En,this.size=0}function iP(d){var u=this.__data__,p=u.delete(d);return this.size=u.size,p}function oP(d){return this.__data__.get(d)}function rP(d){return this.__data__.has(d)}var sP=200;function aP(d,u){var p=this.__data__;if(p instanceof En){var g=p.__data__;if(!ha||g.length<sP-1)return g.push([d,u]),this.size=++p.size,this;p=this.__data__=new ko(g)}return p.set(d,u),this.size=p.size,this}function bo(d){var u=this.__data__=new En(d);this.size=u.size}bo.prototype.clear=nP;bo.prototype.delete=iP;bo.prototype.get=oP;bo.prototype.has=rP;bo.prototype.set=aP;function cP(d,u){return d&&Xd(u,lm(u),d)}function lP(d,u){return d&&Xd(u,dm(u),d)}var cC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,GA=cC&&typeof module=="object"&&module&&!module.nodeType&&module,dP=GA&&GA.exports===cC,KA=dP?an.Buffer:void 0,YA=KA?KA.allocUnsafe:void 0;function uP(d,u){if(u)return d.slice();var p=d.length,g=YA?YA(p):new d.constructor(p);return d.copy(g),g}function hP(d,u){for(var p=-1,g=d==null?0:d.length,k=0,y=[];++p<g;){var w=d[p];u(w,p,d)&&(y[k++]=w)}return y}function lC(){return[]}var gP=Object.prototype,mP=gP.propertyIsEnumerable,QA=Object.getOwnPropertySymbols,hm=QA?function(d){return d==null?[]:(d=Object(d),hP(QA(d),function(u){return mP.call(d,u)}))}:lC;function pP(d,u){return Xd(d,hm(d),u)}var fP=Object.getOwnPropertySymbols,dC=fP?function(d){for(var u=[];d;)sC(u,hm(d)),d=um(d);return u}:lC;function kP(d,u){return Xd(d,dC(d),u)}function uC(d,u,p){var g=u(d);return sm(d)?g:sC(g,p(d))}function bP(d){return uC(d,lm,hm)}function wP(d){return uC(d,dm,dC)}var Vg=vi(an,"DataView"),Hg=vi(an,"Promise"),Ug=vi(an,"Set"),ZA="[object Map]",AP="[object Object]",JA="[object Promise]",XA="[object Set]",t_="[object WeakMap]",e_="[object DataView]",_P=Ci(Vg),CP=Ci(ha),vP=Ci(Hg),yP=Ci(Ug),xP=Ci(jg),yn=_i;(Vg&&yn(new Vg(new ArrayBuffer(1)))!=e_||ha&&yn(new ha)!=ZA||Hg&&yn(Hg.resolve())!=JA||Ug&&yn(new Ug)!=XA||jg&&yn(new jg)!=t_)&&(yn=function(d){var u=_i(d),p=u==AP?d.constructor:void 0,g=p?Ci(p):"";if(g)switch(g){case _P:return e_;case CP:return ZA;case vP:return JA;case yP:return XA;case xP:return t_}return u});var EP=Object.prototype,DP=EP.hasOwnProperty;function SP(d){var u=d.length,p=new d.constructor(u);return u&&typeof d[0]=="string"&&DP.call(d,"index")&&(p.index=d.index,p.input=d.input),p}var n_=an.Uint8Array;function gm(d){var u=new d.constructor(d.byteLength);return new n_(u).set(new n_(d)),u}function IP(d,u){var p=u?gm(d.buffer):d.buffer;return new d.constructor(p,d.byteOffset,d.byteLength)}var MP=/\w*$/;function TP(d){var u=new d.constructor(d.source,MP.exec(d));return u.lastIndex=d.lastIndex,u}var i_=go?go.prototype:void 0,o_=i_?i_.valueOf:void 0;function BP(d){return o_?Object(o_.call(d)):{}}function PP(d,u){var p=u?gm(d.buffer):d.buffer;return new d.constructor(p,d.byteOffset,d.length)}var NP="[object Boolean]",OP="[object Date]",LP="[object Map]",zP="[object Number]",RP="[object RegExp]",FP="[object Set]",jP="[object String]",VP="[object Symbol]",HP="[object ArrayBuffer]",UP="[object DataView]",qP="[object Float32Array]",WP="[object Float64Array]",$P="[object Int8Array]",GP="[object Int16Array]",KP="[object Int32Array]",YP="[object Uint8Array]",QP="[object Uint8ClampedArray]",ZP="[object Uint16Array]",JP="[object Uint32Array]";function XP(d,u,p){var g=d.constructor;switch(u){case HP:return gm(d);case NP:case OP:return new g(+d);case UP:return IP(d,p);case qP:case WP:case $P:case GP:case KP:case YP:case QP:case ZP:case JP:return PP(d,p);case LP:return new g;case zP:case jP:return new g(d);case RP:return TP(d);case FP:return new g;case VP:return BP(d)}}function tN(d){return typeof d.constructor=="function"&&!am(d)?xB(um(d)):{}}var eN="[object Map]";function nN(d){return Qn(d)&&yn(d)==eN}var r_=mo&&mo.isMap,iN=r_?cm(r_):nN,oN="[object Set]";function rN(d){return Qn(d)&&yn(d)==oN}var s_=mo&&mo.isSet,sN=s_?cm(s_):rN,aN=1,cN=2,lN=4,hC="[object Arguments]",dN="[object Array]",uN="[object Boolean]",hN="[object Date]",gN="[object Error]",gC="[object Function]",mN="[object GeneratorFunction]",pN="[object Map]",fN="[object Number]",mC="[object Object]",kN="[object RegExp]",bN="[object Set]",wN="[object String]",AN="[object Symbol]",_N="[object WeakMap]",CN="[object ArrayBuffer]",vN="[object DataView]",yN="[object Float32Array]",xN="[object Float64Array]",EN="[object Int8Array]",DN="[object Int16Array]",SN="[object Int32Array]",IN="[object Uint8Array]",MN="[object Uint8ClampedArray]",TN="[object Uint16Array]",BN="[object Uint32Array]",Wt={};Wt[hC]=Wt[dN]=Wt[CN]=Wt[vN]=Wt[uN]=Wt[hN]=Wt[yN]=Wt[xN]=Wt[EN]=Wt[DN]=Wt[SN]=Wt[pN]=Wt[fN]=Wt[mC]=Wt[kN]=Wt[bN]=Wt[wN]=Wt[AN]=Wt[IN]=Wt[MN]=Wt[TN]=Wt[BN]=!0;Wt[gN]=Wt[gC]=Wt[_N]=!1;function Pd(d,u,p,g,k,y){var w,A=u&aN,f=u&cN,E=u&lN;if(p&&(w=k?p(d,g,k,y):p(d)),w!==void 0)return w;if(!xn(d))return d;var I=sm(d);if(I){if(w=SP(d),!A)return EB(d,w)}else{var S=yn(d),v=S==gC||S==mN;if(nC(d))return uP(d,A);if(S==mC||S==hC||v&&!k){if(w=f||v?{}:tN(d),!A)return f?kP(d,lP(w,d)):pP(d,cP(w,d))}else{if(!Wt[S])return k?d:{};w=XP(d,S,A)}}y||(y=new bo);var D=y.get(d);if(D)return D;y.set(d,w),sN(d)?d.forEach(function(L){w.add(Pd(L,u,p,L,d,y))}):iN(d)&&d.forEach(function(L,j){w.set(j,Pd(L,u,p,j,d,y))});var B=E?f?wP:bP:f?dm:lm,N=I?void 0:B(d);return DB(N||d,function(L,j){N&&(j=L,L=d[j]),Z_(w,j,Pd(L,u,p,j,d,y))}),w}var PN=1,NN=4;function ON(d,u){return u=typeof u=="function"?u:void 0,Pd(d,PN|NN,u)}var xg=function(){return an.Date.now()},LN="Expected a function",zN=Math.max,RN=Math.min;function FN(d,u,p){var g,k,y,w,A,f,E=0,I=!1,S=!1,v=!0;if(typeof d!="function")throw new TypeError(LN);u=FA(u)||0,xn(p)&&(I=!!p.leading,S="maxWait"in p,y=S?zN(FA(p.maxWait)||0,u):y,v="trailing"in p?!!p.trailing:v);function D(ct){var At=g,St=k;return g=k=void 0,E=ct,w=d.apply(St,At),w}function B(ct){return E=ct,A=setTimeout(j,u),I?D(ct):w}function N(ct){var At=ct-f,St=ct-E,Vt=u-At;return S?RN(Vt,y-St):Vt}function L(ct){var At=ct-f,St=ct-E;return f===void 0||At>=u||At<0||S&&St>=y}function j(){var ct=xg();if(L(ct))return F(ct);A=setTimeout(j,N(ct))}function F(ct){return A=void 0,v&&g?D(ct):(g=k=void 0,w)}function W(){A!==void 0&&clearTimeout(A),E=0,g=f=k=A=void 0}function it(){return A===void 0?w:F(xg())}function dt(){var ct=xg(),At=L(ct);if(g=arguments,k=this,f=ct,At){if(A===void 0)return B(f);if(S)return clearTimeout(A),A=setTimeout(j,u),D(f)}return A===void 0&&(A=setTimeout(j,u)),w}return dt.cancel=W,dt.flush=it,dt}function a_(d){return Qn(d)&&d.nodeType===1&&!eP(d)}var jN="Expected a function";function VN(d,u,p){var g=!0,k=!0;if(typeof d!="function")throw new TypeError(jN);return xn(p)&&(g="leading"in p?!!p.leading:g,k="trailing"in p?!!p.trailing:k),FN(d,u,{leading:g,maxWait:u,trailing:k})}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class pC extends rm{constructor(u,p={}){super(p),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=VN(this._save.bind(this),typeof p.saveInterval=="number"?p.saveInterval:5e3),u&&(this._creator=(g,k)=>u.create(g,k)),this._destructor=g=>g.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(u){this._creator=u}setDestructor(u){this._destructor=u}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(u=>{console.error("An error happened during the editor destroying.",u)}).then(()=>{const u={},p=[],g=this._config.rootsAttributes||{},k={};for(const[w,A]of Object.entries(this._data.roots))A.isLoaded?(u[w]="",k[w]=g[w]||{}):p.push(w);const y={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:p,rootsAttributes:k,_watchdogInitialData:this._data};return delete y.initialData,y.extraPlugins.push(HN),this._initUsingData?this.create(u,y,y.context):a_(this._elementOrData)?this.create(this._elementOrData,y,y.context):this.create(this._editables,y,y.context)}).then(()=>{this._fire("restart")})}create(u=this._elementOrData,p=this._config,g){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=u,this._initUsingData=typeof u=="string"||Object.keys(u).length>0&&typeof Object.values(u)[0]=="string",this._config=this._cloneEditorConfiguration(p)||{},this._config.context=g,this._creator(u,this._config))).then(k=>{this._editor=k,k.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=k.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const u=this._editor;return this._editor=null,u.model.document.off("change:data",this._throttledSave),this._destructor(u)})}_save(){const u=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=u}catch(p){console.error(p,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(u){this._excludedProps=u}_getData(){const u=this._editor,p=u.model.document.roots.filter(A=>A.isAttached()&&A.rootName!="$graveyard"),{plugins:g}=u,k=g.has("CommentsRepository")&&g.get("CommentsRepository"),y=g.has("TrackChanges")&&g.get("TrackChanges"),w={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};p.forEach(A=>{w.roots[A.rootName]={content:JSON.stringify(Array.from(A.getChildren())),attributes:JSON.stringify(Array.from(A.getAttributes())),isLoaded:A._isLoaded}});for(const A of u.model.markers)A._affectsData&&(w.markers[A.name]={rangeJSON:A.getRange().toJSON(),usingOperation:A._managedUsingOperations,affectsData:A._affectsData});return k&&(w.commentThreads=JSON.stringify(k.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),y&&(w.suggestions=JSON.stringify(y.getSuggestions({toJSON:!0,skipNotAttached:!0}))),w}_getEditables(){const u={};for(const p of this.editor.model.document.getRootNames()){const g=this.editor.ui.getEditableElement(p);g&&(u[p]=g)}return u}_isErrorComingFromThisItem(u){return W_(this._editor,u.context,this._excludedProps)}_cloneEditorConfiguration(u){return ON(u,(p,g)=>{if(a_(p)||g==="context")return p})}}class HN{constructor(u){this.editor=u,this._data=u.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",u=>{u.stop(),this.editor.model.enqueueChange({isUndoable:!1},p=>{this._restoreCollaborationData(),this._restoreEditorData(p)}),this.editor.data.fire("ready")},{priority:999})}_createNode(u,p){if("name"in p){const g=u.createElement(p.name,p.attributes);if(p.children)for(const k of p.children)g._appendChild(this._createNode(u,k));return g}else return u.createText(p.data,p.attributes)}_restoreEditorData(u){const p=this.editor;Object.entries(this._data.roots).forEach(([g,{content:k,attributes:y}])=>{const w=JSON.parse(k),A=JSON.parse(y),f=p.model.document.getRoot(g);for(const[E,I]of A)u.setAttribute(E,I,f);for(const E of w){const I=this._createNode(u,E);u.insert(I,f,"end")}}),Object.entries(this._data.markers).forEach(([g,k])=>{const{document:y}=p.model,{rangeJSON:{start:w,end:A},...f}=k,E=y.getRoot(w.root),I=u.createPositionFromPath(E,w.path,w.stickiness),S=u.createPositionFromPath(E,A.path,A.stickiness),v=u.createRange(I,S);u.addMarker(g,{range:v,...f})})}_restoreCollaborationData(){const u=JSON.parse(this._data.commentThreads),p=JSON.parse(this._data.suggestions);u.forEach(g=>{const k=this.editor.config.get("collaboration.channelId"),y=this.editor.plugins.get("CommentsRepository");y.hasCommentThread(g.threadId)&&y.getCommentThread(g.threadId).remove(),y.addCommentThread({channelId:k,...g})}),p.forEach(g=>{const k=this.editor.plugins.get("TrackChangesEditing");if(k.hasSuggestion(g.id)){const y=k.getSuggestion(g.id);y.attributes=g.attributes}else k.addSuggestionData(g)})}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const ca=Symbol("MainQueueId");class UN extends rm{constructor(u,p={}){super(p),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new qN,this._watchdogConfig=p,this._creator=g=>u.create(g),this._destructor=g=>g.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(u){this._creator=u}setDestructor(u){this._destructor=u}get context(){return this._context}create(u={}){return this._actionQueues.enqueue(ca,()=>(this._contextConfig=u,this._create()))}getItem(u){return this._getWatchdog(u)._item}getItemState(u){return this._getWatchdog(u).state}add(u){const p=c_(u);return Promise.all(p.map(g=>this._actionQueues.enqueue(g.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let k;if(this._watchdogs.has(g.id))throw new Error(`Item with the given id is already added: '${g.id}'.`);if(g.type==="editor")return k=new pC(null,this._watchdogConfig),k.setCreator(g.creator),k._setExcludedProperties(this._contextProps),g.destructor&&k.setDestructor(g.destructor),this._watchdogs.set(g.id,k),k.on("error",(y,{error:w,causesRestart:A})=>{this._fire("itemError",{itemId:g.id,error:w}),A&&this._actionQueues.enqueue(g.id,()=>new Promise(f=>{const E=()=>{k.off("restart",E),this._fire("itemRestart",{itemId:g.id}),f()};k.on("restart",E)}))}),k.create(g.sourceElementOrData,g.config,this._context);throw new Error(`Not supported item type: '${g.type}'.`)})))}remove(u){const p=c_(u);return Promise.all(p.map(g=>this._actionQueues.enqueue(g,()=>{const k=this._getWatchdog(g);return this._watchdogs.delete(g),k.destroy()})))}destroy(){return this._actionQueues.enqueue(ca,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(ca,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(u=>{console.error("An error happened during destroying the context or items.",u)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(u=>(this._context=u,this._contextProps=Fg(this._context),Promise.all(Array.from(this._watchdogs.values()).map(p=>(p._setExcludedProperties(this._contextProps),p.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const u=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(p=>p.destroy())).then(()=>this._destructor(u))})}_getWatchdog(u){const p=this._watchdogs.get(u);if(!p)throw new Error(`Item with the given id was not registered: ${u}.`);return p}_isErrorComingFromThisItem(u){for(const p of this._watchdogs.values())if(p._isErrorComingFromThisItem(u))return!1;return W_(this._context,u.context)}}class qN{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(u){this._onEmptyCallbacks.push(u)}enqueue(u,p){const g=u===ca;this._activeActions++,this._queues.get(u)||this._queues.set(u,Promise.resolve());const y=(g?Promise.all(this._queues.values()):Promise.all([this._queues.get(ca),this._queues.get(u)])).then(p),w=y.catch(()=>{});return this._queues.set(u,w),y.finally(()=>{this._activeActions--,this._queues.get(u)===w&&this._activeActions===0&&this._onEmptyCallbacks.forEach(A=>A())})}}function c_(d){return Array.isArray(d)?d:[d]}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const WN=Object.freeze(Object.defineProperty({__proto__:null,ContextWatchdog:UN,EditorWatchdog:pC,Watchdog:rm},Symbol.toStringTag,{value:"Module"})),$N=SI(WN);/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(d,u){(function(p,g){d.exports=g(ue,II(),$N)})(self,(p,g,k)=>(()=>{var y={546:E=>{E.exports=k},949:E=>{E.exports=g},155:E=>{E.exports=p}},w={};function A(E){var I=w[E];if(I!==void 0)return I.exports;var S=w[E]={exports:{}};return y[E](S,S.exports,A),S.exports}A.n=E=>{var I=E&&E.__esModule?()=>E.default:()=>E;return A.d(I,{a:I}),I},A.d=(E,I)=>{for(var S in I)A.o(I,S)&&!A.o(E,S)&&Object.defineProperty(E,S,{enumerable:!0,get:I[S]})},A.o=(E,I)=>Object.prototype.hasOwnProperty.call(E,I),A.r=E=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(E,"__esModule",{value:!0})};var f={};return(()=>{A.r(f),A.d(f,{CKEditor:()=>W,CKEditorContext:()=>L,useMultiRootEditor:()=>P});var E=A(155),I=A.n(E),S=A(949),v=A.n(S);const D=new Array(256).fill("").map((G,q)=>("0"+q.toString(16)).slice(-2));var B=A(546);const N=I().createContext("contextWatchdog");class L extends I().Component{constructor(q,tt){super(q,tt),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(q){return this._shouldComponentUpdate(q)}async _shouldComponentUpdate(q){return q.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(q.config)),q.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(q.config),!0):this.props.children!==q.children}render(){return I().createElement(N.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(q){this.contextWatchdog=new B.ContextWatchdog(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(tt,ot)=>{this.props.onError(ot.error,{phase:"runtime",willContextRestart:ot.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(q).catch(tt=>{this.props.onError(tt,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}L.defaultProps={isLayoutReady:!0,onError:(G,q)=>console.error(G,q)},L.propTypes={id:v().string,isLayoutReady:v().bool,context:v().func,watchdogConfig:v().object,config:v().object,onReady:v().func,onError:v().func};class j{constructor(q,tt){this._releaseLock=null,this._value=null,this._afterMountCallbacks=[],this._state={destroyedBeforeInitialization:!1,mountingInProgress:null},this.release=function(ot){let ht=null;return(...wt)=>(ht||(ht={current:ot(...wt)}),ht.current)}(()=>{const{_releaseLock:ot,_state:ht,_element:wt,_lifecycle:_t}=this;ht.mountingInProgress?ht.mountingInProgress.then(()=>_t.unmount({element:wt,mountResult:this.value})).catch(Tt=>{console.error("Semaphore unmounting error:",Tt)}).then(ot.resolve).then(()=>{this._value=null}):(ht.destroyedBeforeInitialization=!0,ot.resolve())}),this._element=q,this._lifecycle=tt,this._lock()}get value(){return this._value}unsafeSetValue(q){this._value=q,this._afterMountCallbacks.forEach(tt=>tt(q)),this._afterMountCallbacks=[]}runAfterMount(q){const{_value:tt,_afterMountCallbacks:ot}=this;tt?q(tt):ot.push(q)}_lock(){const{_semaphores:q}=j,{_state:tt,_element:ot,_lifecycle:ht}=this,wt=q.get(ot)||Promise.resolve(null),_t=function(){const It={resolve:null,promise:null};return It.promise=new Promise(Ce=>{It.resolve=Ce}),It}();this._releaseLock=_t;const Tt=wt.then(()=>tt.destroyedBeforeInitialization?Promise.resolve(void 0):(tt.mountingInProgress=ht.mount().then(It=>(It&&this.unsafeSetValue(It),It)),tt.mountingInProgress)).then(async It=>{It&&ht.afterMount&&await ht.afterMount({element:ot,mountResult:It})}).then(()=>_t.promise).catch(It=>{console.error("Semaphore mounting error:",It)}).then(()=>{q.get(ot)===Tt&&q.delete(ot)});q.set(ot,Tt)}}j._semaphores=new Map;const F="Lock from React integration (@ckeditor/ckeditor5-react)";class W extends I().Component{constructor(q){super(q),this.domContainer=I().createRef(),this.editorSemaphore=null;const{CKEDITOR_VERSION:tt}=window;if(tt){const[ot]=tt.split(".").map(Number);ot<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get _semaphoreValue(){const{editorSemaphore:q}=this;return q?q.value:null}get watchdog(){const{_semaphoreValue:q}=this;return q?q.watchdog:null}get editor(){const{_semaphoreValue:q}=this;return q?q.instance:null}shouldComponentUpdate(q){const{props:tt,editorSemaphore:ot}=this;return q.id!==tt.id||q.disableWatchdog!==tt.disableWatchdog||(ot&&(ot.runAfterMount(({instance:ht})=>{this._shouldUpdateEditorData(tt,q,ht)&&ht.data.set(q.data)}),"disabled"in q&&ot.runAfterMount(({instance:ht})=>{q.disabled?ht.enableReadOnlyMode(F):ht.disableReadOnlyMode(F)})),!1)}componentDidMount(){this._initLifeCycleSemaphore()}componentDidUpdate(){this._initLifeCycleSemaphore()}componentWillUnmount(){this._unlockLifeCycleSemaphore()}_unlockLifeCycleSemaphore(){this.editorSemaphore&&(this.editorSemaphore.release(),this.editorSemaphore=null)}_initLifeCycleSemaphore(){this._unlockLifeCycleSemaphore(),this.editorSemaphore=new j(this.domContainer.current,{mount:async()=>this._initializeEditor(),afterMount:({mountResult:q})=>{const{onReady:tt}=this.props;tt&&this.domContainer.current!==null&&tt(q.instance)},unmount:async({element:q,mountResult:tt})=>{const{onAfterDestroy:ot}=this.props;try{await this._destroyEditor(tt),q.innerHTML=""}finally{ot&&ot(tt.instance)}}})}render(){return I().createElement("div",{ref:this.domContainer})}async _initializeEditor(){if(this.props.disableWatchdog)return{instance:await this._createEditor(this.domContainer.current,this._getConfig()),watchdog:null};const q=this.context instanceof B.ContextWatchdog?new it(this.context):new W._EditorWatchdog(this.props.editor,this.props.watchdogConfig),tt={current:0};return q.setCreator(async(ot,ht)=>{const{editorSemaphore:wt}=this,{onAfterDestroy:_t}=this.props;tt.current>0&&_t&&wt&&wt.value&&wt.value.instance&&_t(wt.value.instance);const Tt=await this._createEditor(ot,ht);return tt.current>0&&(wt.unsafeSetValue({instance:Tt,watchdog:q}),setTimeout(()=>{this.props.onReady&&this.props.onReady(q.editor)})),tt.current++,Tt}),q.on("error",(ot,{error:ht,causesRestart:wt})=>{(this.props.onError||console.error)(ht,{phase:"runtime",willEditorRestart:wt})}),await q.create(this.domContainer.current,this._getConfig()).catch(ot=>{(this.props.onError||console.error)(ot,{phase:"initialization",willEditorRestart:!1})}),{watchdog:q,instance:q.editor}}_createEditor(q,tt){return this.props.editor.create(q,tt).then(ot=>{"disabled"in this.props&&this.props.disabled&&ot.enableReadOnlyMode(F);const ht=ot.model.document,wt=ot.editing.view.document;return ht.on("change:data",_t=>{this.props.onChange&&this.props.onChange(_t,ot)}),wt.on("focus",_t=>{this.props.onFocus&&this.props.onFocus(_t,ot)}),wt.on("blur",_t=>{this.props.onBlur&&this.props.onBlur(_t,ot)}),ot})}async _destroyEditor(q){const{watchdog:tt,instance:ot}=q;return new Promise((ht,wt)=>{setTimeout(async()=>{try{if(tt)return await tt.destroy(),ht();if(ot)return await ot.destroy(),ht();ht()}catch(_t){console.error(_t),wt(_t)}})})}_shouldUpdateEditorData(q,tt,ot){return q.data!==tt.data&&ot.data.get()!==tt.data}_getConfig(){const q=this.props.config||{};return this.props.data&&q.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...q,initialData:q.initialData||this.props.data||""}}}W.contextType=N,W.propTypes={editor:v().func.isRequired,data:v().string,config:v().object,disableWatchdog:v().bool,watchdogConfig:v().object,onChange:v().func,onReady:v().func,onFocus:v().func,onBlur:v().func,onError:v().func,disabled:v().bool,id:v().any},W._EditorWatchdog=B.EditorWatchdog;class it{constructor(q){this._contextWatchdog=q,this._id=function(){const tt=4294967296*Math.random()>>>0,ot=4294967296*Math.random()>>>0,ht=4294967296*Math.random()>>>0,wt=4294967296*Math.random()>>>0;return"e"+D[255&tt]+D[tt>>8&255]+D[tt>>16&255]+D[tt>>24&255]+D[255&ot]+D[ot>>8&255]+D[ot>>16&255]+D[ot>>24&255]+D[255&ht]+D[ht>>8&255]+D[ht>>16&255]+D[ht>>24&255]+D[255&wt]+D[wt>>8&255]+D[wt>>16&255]+D[wt>>24&255]}()}setCreator(q){this._creator=q}create(q,tt){return this._contextWatchdog.add({sourceElementOrData:q,config:tt,creator:this._creator,id:this._id,type:"editor"})}on(q,tt){this._contextWatchdog.on("itemError",(ot,{itemId:ht,error:wt})=>{ht===this._id&&tt(null,{error:wt,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}function dt(...G){return q=>{G.forEach(tt=>{typeof tt=="function"?tt(q):tt!=null&&(tt.current=q)})}}function ct(G,q){for(const tt of Object.getOwnPropertyNames(q))delete q[tt];for(const[tt,ot]of Object.entries(G))ot!==q&&tt!=="prototype"&&tt!=="__proto__"&&(q[tt]=ot);return q}const At=G=>{const q=(0,E.useRef)();return q.current=G,(0,E.useCallback)((...tt)=>q.current(...tt),[])};function St(G,q){return q.length=0,q.push(...G),q}const Vt=(G,q,tt)=>{((ot,ht)=>{const wt=(0,E.useRef)(null);((_t,Tt)=>{if(_t===Tt)return!0;if(!_t||!Tt)return!1;for(let It=0;It<_t.length;++It)if(_t[It]!==Tt[It])return!1;return!0})(wt.current,ht)||(wt.current=[...ht],ot())})(()=>{G&&G.runAfterMount(q)},[G,...tt])},se="Lock from React integration (@ckeditor/ckeditor5-react)",Ye=(0,E.memo)((0,E.forwardRef)(({id:G,semaphore:q,rootName:tt},ot)=>{const ht=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let wt,_t;return q.runAfterMount(({instance:Tt})=>{ht.current&&(_t=Tt,wt=Tt.ui.view.createEditable(tt,ht.current),Tt.ui.addEditable(wt),Tt.editing.view.forceRender())}),()=>{wt&&ht.current&&_t&&_t.state!=="destroyed"&&_t.ui.removeEditable(wt)}},[q.revision]),I().createElement("div",{key:q.revision,id:G,ref:dt(ot,ht)})}));Ye.displayName="EditorEditable";const wo=(0,E.forwardRef)(({editor:G},q)=>{const tt=(0,E.useRef)(null);return(0,E.useEffect)(()=>{const ot=tt.current;if(!G||!ot)return;const ht=G.ui.view.toolbar.element;return ot&&ot.appendChild(ht),()=>{ot&&ot.removeChild(ht)}},[G&&G.id]),I().createElement("div",{ref:dt(tt,q)})});wo.displayName="EditorToolbarWrapper";const P=G=>{const q=(0,E.useRef)(G.semaphoreElement||null),tt=(()=>{const st=(0,E.useRef)(null),[Kt,nt]=(0,E.useState)(()=>Date.now()),ft=()=>{nt(Date.now())},Bt=(xt=!0)=>{st.current&&(st.current.release(),st.current=null),xt&&nt(Date.now())},Ct=xt=>{st.current&&st.current.runAfterMount(xt)};return{get current(){return st.current},revision:Kt,createAttributeRef:xt=>({get current(){return st.current&&st.current.value?st.current.value[xt]:null}}),unsafeSetValue:xt=>{var ye;(ye=st.current)===null||ye===void 0||ye.unsafeSetValue(xt),ft()},release:Bt,replace:xt=>{Bt(!1),st.current=xt(),ft(),Ct(ft)},runAfterMount:Ct}})(),ot={watchdog:tt.createAttributeRef("watchdog"),instance:tt.createAttributeRef("instance")},ht=(0,E.useContext)(N),[wt,_t]=(0,E.useState)(()=>Object.keys(G.data)),[Tt,It]=(0,E.useState)({...G.data}),[Ce,yt]=(0,E.useState)({...G.rootsAttributes}),Zn=(0,E.useRef)(!0);(0,E.useEffect)(()=>{const st=q.current;if(st&&G.isLayoutReady!==!1)return tt.replace(()=>new j(st,{mount:Lt,afterMount:({mountResult:Kt})=>{const{onReady:nt}=G;nt&&q.current!==null&&nt(Kt.instance)},unmount:async({element:Kt,mountResult:nt})=>{const{onAfterDestroy:ft}=G;try{await Co(nt),Kt.innerHTML=""}finally{ft&&ft(nt.instance)}}})),()=>{tt.release(!1)}},[G.id,G.isLayoutReady]);const yi=()=>{const st=G.config||{};return G.data&&st.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` property. The config value takes precedence over `data` property and will be used when both are specified."),{...st,rootsAttributes:Ce}},ma=At((st,Kt)=>{const nt=st.model.document;if(!G.disableTwoWayDataBinding){const ft={},Bt={};nt.differ.getChanges().forEach(Ct=>{let xt;if(xt=Ct.type=="insert"||Ct.type=="remove"?Ct.position.root:Ct.range.root,!xt.isAttached())return;const{rootName:ye}=xt;ft[ye]=st.getData({rootName:ye})}),nt.differ.getChangedRoots().forEach(Ct=>{if(Ct.state)return void(ft[Ct.name]!==void 0&&delete ft[Ct.name]);const xt=Ct.name;Bt[xt]=st.getRootAttributes(xt)}),Object.keys(ft).length&&It(Ct=>({...Ct,...ft})),Object.keys(Bt).length&&yt(Ct=>({...Ct,...Bt}))}G.onChange&&G.onChange(Kt,st)}),Ao=At((st,Kt,nt)=>{const ft=nt.rootName;G.disableTwoWayDataBinding||(It(Bt=>({...Bt,[ft]:st.getData({rootName:ft})})),yt(Bt=>({...Bt,[ft]:st.getRootAttributes(ft)}))),_t(Bt=>{return Ct=[...Bt,nt.rootName],Array.from(new Set(Ct));var Ct})}),pa=At((st,Kt,nt)=>{const ft=nt.rootName;G.disableTwoWayDataBinding||(It(Bt=>{const{[ft]:Ct,...xt}=Bt;return{...xt}}),yt(Bt=>{const{[ft]:Ct,...xt}=Bt;return{...xt}})),_t(Bt=>Bt.filter(Ct=>Ct!==ft))}),_o=At((st,Kt)=>(ct({...G.rootsAttributes},Ce),ct({...G.data},Tt),St(Object.keys(G.data),wt),G.editor.create(st,Kt).then(nt=>{const ft=nt.getFullData();ct({...ft},Tt),ct({...nt.getRootsAttributes()},Ce),St(Object.keys(ft),wt),G.disabled&&nt.enableReadOnlyMode(se);const Bt=nt.model.document,Ct=nt.editing.view.document;return Bt.on("change:data",xt=>ma(nt,xt)),nt.on("addRoot",(xt,ye)=>Ao(nt,xt,ye)),nt.on("detachRoot",(xt,ye)=>pa(nt,xt,ye)),Ct.on("focus",xt=>{G.onFocus&&G.onFocus(xt,nt)}),Ct.on("blur",xt=>{G.onBlur&&G.onBlur(xt,nt)}),nt}))),Co=st=>{const{watchdog:Kt,instance:nt}=st;return new Promise((ft,Bt)=>{setTimeout(async()=>{try{if(Kt)return await Kt.destroy(),ft();if(nt)return await nt.destroy(),ft();ft()}catch(Ct){console.error(Ct),Bt(Ct)}})})},Lt=async()=>{if(G.disableWatchdog)return{instance:await _o(G.data,yi()),watchdog:null};const st=ht instanceof B.ContextWatchdog?new it(ht):new B.EditorWatchdog(G.editor,G.watchdogConfig),Kt={current:0};return st.setCreator(async(nt,ft)=>{const{onAfterDestroy:Bt}=G;Kt.current>0&&Bt&&ot.instance.current&&Bt(ot.instance.current);const Ct=await _o(nt,ft);return Kt.current>0&&(tt.unsafeSetValue({instance:Ct,watchdog:st}),setTimeout(()=>{G.onReady&&G.onReady(st.editor)})),Kt.current++,Ct}),st.on("error",(nt,{error:ft,causesRestart:Bt})=>{(G.onError||console.error)(ft,{phase:"runtime",willEditorRestart:Bt})}),await st.create(Tt,yi()).catch(nt=>{throw(G.onError||console.error)(nt,{phase:"initialization",willEditorRestart:!1}),nt}),{watchdog:st,instance:st.editor}},xi=(0,E.useCallback)(st=>{tt.runAfterMount(()=>{Zn.current=!0,It(st)})},[It]),Ei=(0,E.useCallback)(st=>{tt.runAfterMount(()=>{Zn.current=!0,yt(st)})},[yt]),Di=I().createElement(wo,{ref:q,editor:ot.instance.current});Vt(tt.current,({instance:st})=>{G.disabled?st.enableReadOnlyMode(se):st.disableReadOnlyMode(se)},[G.disabled]),Vt(tt.current,({instance:st})=>{if(Zn.current){Zn.current=!1;const Kt=Object.keys(Tt),nt=Object.keys(Ce);if(!Kt.every(ee=>nt.includes(ee)))throw console.error("`data` and `attributes` objects must have the same keys (roots)."),new Error("`data` and `attributes` objects must have the same keys (roots).");const ft=st.getFullData(),Bt=st.getRootsAttributes(),{addedKeys:Ct,removedKeys:xt}=((ee,ne)=>{const he=Object.keys(ee),Jn=Object.keys(ne);return{addedKeys:Jn.filter(yo=>!he.includes(yo)),removedKeys:he.filter(yo=>!Jn.includes(yo))}})(ft,Tt||{}),ye=Kt.some(ee=>ft[ee]!==void 0&&JSON.stringify(ft[ee])!==JSON.stringify(Tt[ee])),fa=nt.filter(ee=>JSON.stringify(Bt[ee])!==JSON.stringify(Ce[ee])),vo=ee=>{ee.forEach(ne=>{st.addRoot(ne,{data:Tt[ne]||"",attributes:(Ce==null?void 0:Ce[ne])||{},isUndoable:!0})})},ke=ee=>{ee.forEach(ne=>{st.detachRoot(ne,!0)})},xe=()=>{st.data.set(Tt,{suppressErrorInCollaboration:!0})},ka=(ee,ne)=>{ne.forEach(he=>{Object.keys(Ce[he]).forEach(Jn=>{st.registerRootAttribute(Jn)}),ee.clearAttributes(st.model.document.getRoot(he)),ee.setAttributes(Ce[he],st.model.document.getRoot(he))})};setTimeout(()=>{st.model.change(ee=>{vo(Ct),ke(xt),ye&&xe(),fa.length&&ka(ee,fa)})})}},[Tt,Ce]);const Dn=wt.map(st=>I().createElement(Ye,{key:st,id:st,rootName:st,semaphore:tt}));return{editor:ot.instance.current,editableElements:Dn,toolbarElement:Di,data:Tt,setData:xi,attributes:Ce,setAttributes:Ei}}})(),f})())})(q_);var ZN=q_.exports,Rd={exports:{}};Rd.exports;(function(d,u){(function(p){const g=p.en=p.en||{};g.dictionary=Object.assign(g.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Custom:"Custom","Custom image size":"Custom image size",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown menu":"Dropdown menu","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Entering a to-do list":"Entering a to-do list","Error during image upload":"Error during image upload","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.",File:"File","From computer":"From computer","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar",Image:"Image","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","Image upload complete":"Image upload complete","Image via URL":"Image via URL","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert via URL":"Insert via URL","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Leaving a to-do list":"Leaving a to-do list","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","Link URL must not be empty.":"Link URL must not be empty.","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman",Media:"Media","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus from an editable area back to the parent widget":"Move focus from an editable area back to the parent widget","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.",'Please enter a valid color (e.g. "ff0000").':'Please enter a valid color (e.g. "ff0000").',"Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image (in %0)":"Resize image (in %0)","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor","Rich Text Editor. Editing area: %0":"Rich Text Editor. Editing area: %0",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"The value must not be empty.":"The value must not be empty.","The value should be a plain number.":"The value should be a plain number.","These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Uploading image":"Uploading image","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar","Via URL":"Via URL",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","With file manager":"With file manager","Wrap text":"Wrap text",Yellow:"Yellow","You have no image editing permissions.":"You have no image editing permissions.","You have no image upload permissions.":"You have no image upload permissions."}),g.getPluralForm=function(k){return k!=1}})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(p,g){d.exports=g()}(self,()=>(()=>{var p={9246:(w,A,f)=>{const E=f(6931),I={};for(const v of Object.keys(E))I[E[v]]=v;const S={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};w.exports=S;for(const v of Object.keys(S)){if(!("channels"in S[v]))throw new Error("missing channels property: "+v);if(!("labels"in S[v]))throw new Error("missing channel labels property: "+v);if(S[v].labels.length!==S[v].channels)throw new Error("channel and label counts mismatch: "+v);const{channels:D,labels:B}=S[v];delete S[v].channels,delete S[v].labels,Object.defineProperty(S[v],"channels",{value:D}),Object.defineProperty(S[v],"labels",{value:B})}S.rgb.hsl=function(v){const D=v[0]/255,B=v[1]/255,N=v[2]/255,L=Math.min(D,B,N),j=Math.max(D,B,N),F=j-L;let W,it;j===L?W=0:D===j?W=(B-N)/F:B===j?W=2+(N-D)/F:N===j&&(W=4+(D-B)/F),W=Math.min(60*W,360),W<0&&(W+=360);const dt=(L+j)/2;return it=j===L?0:dt<=.5?F/(j+L):F/(2-j-L),[W,100*it,100*dt]},S.rgb.hsv=function(v){let D,B,N,L,j;const F=v[0]/255,W=v[1]/255,it=v[2]/255,dt=Math.max(F,W,it),ct=dt-Math.min(F,W,it),At=function(St){return(dt-St)/6/ct+.5};return ct===0?(L=0,j=0):(j=ct/dt,D=At(F),B=At(W),N=At(it),F===dt?L=N-B:W===dt?L=.3333333333333333+D-N:it===dt&&(L=.6666666666666666+B-D),L<0?L+=1:L>1&&(L-=1)),[360*L,100*j,100*dt]},S.rgb.hwb=function(v){const D=v[0],B=v[1];let N=v[2];const L=S.rgb.hsl(v)[0],j=1/255*Math.min(D,Math.min(B,N));return N=1-.00392156862745098*Math.max(D,Math.max(B,N)),[L,100*j,100*N]},S.rgb.cmyk=function(v){const D=v[0]/255,B=v[1]/255,N=v[2]/255,L=Math.min(1-D,1-B,1-N);return[100*((1-D-L)/(1-L)||0),100*((1-B-L)/(1-L)||0),100*((1-N-L)/(1-L)||0),100*L]},S.rgb.keyword=function(v){const D=I[v];if(D)return D;let B,N=1/0;for(const F of Object.keys(E)){const W=E[F],it=(j=W,((L=v)[0]-j[0])**2+(L[1]-j[1])**2+(L[2]-j[2])**2);it<N&&(N=it,B=F)}var L,j;return B},S.keyword.rgb=function(v){return E[v]},S.rgb.xyz=function(v){let D=v[0]/255,B=v[1]/255,N=v[2]/255;return D=D>.04045?((D+.055)/1.055)**2.4:D/12.92,B=B>.04045?((B+.055)/1.055)**2.4:B/12.92,N=N>.04045?((N+.055)/1.055)**2.4:N/12.92,[100*(.4124*D+.3576*B+.1805*N),100*(.2126*D+.7152*B+.0722*N),100*(.0193*D+.1192*B+.9505*N)]},S.rgb.lab=function(v){const D=S.rgb.xyz(v);let B=D[0],N=D[1],L=D[2];return B/=95.047,N/=100,L/=108.883,B=B>.008856?B**.3333333333333333:7.787*B+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,L=L>.008856?L**.3333333333333333:7.787*L+.13793103448275862,[116*N-16,500*(B-N),200*(N-L)]},S.hsl.rgb=function(v){const D=v[0]/360,B=v[1]/100,N=v[2]/100;let L,j,F;if(B===0)return F=255*N,[F,F,F];L=N<.5?N*(1+B):N+B-N*B;const W=2*N-L,it=[0,0,0];for(let dt=0;dt<3;dt++)j=D+.3333333333333333*-(dt-1),j<0&&j++,j>1&&j--,F=6*j<1?W+6*(L-W)*j:2*j<1?L:3*j<2?W+(L-W)*(.6666666666666666-j)*6:W,it[dt]=255*F;return it},S.hsl.hsv=function(v){const D=v[0];let B=v[1]/100,N=v[2]/100,L=B;const j=Math.max(N,.01);return N*=2,B*=N<=1?N:2-N,L*=j<=1?j:2-j,[D,100*(N===0?2*L/(j+L):2*B/(N+B)),100*((N+B)/2)]},S.hsv.rgb=function(v){const D=v[0]/60,B=v[1]/100;let N=v[2]/100;const L=Math.floor(D)%6,j=D-Math.floor(D),F=255*N*(1-B),W=255*N*(1-B*j),it=255*N*(1-B*(1-j));switch(N*=255,L){case 0:return[N,it,F];case 1:return[W,N,F];case 2:return[F,N,it];case 3:return[F,W,N];case 4:return[it,F,N];case 5:return[N,F,W]}},S.hsv.hsl=function(v){const D=v[0],B=v[1]/100,N=v[2]/100,L=Math.max(N,.01);let j,F;F=(2-B)*N;const W=(2-B)*L;return j=B*L,j/=W<=1?W:2-W,j=j||0,F/=2,[D,100*j,100*F]},S.hwb.rgb=function(v){const D=v[0]/360;let B=v[1]/100,N=v[2]/100;const L=B+N;let j;L>1&&(B/=L,N/=L);const F=Math.floor(6*D),W=1-N;j=6*D-F,1&F&&(j=1-j);const it=B+j*(W-B);let dt,ct,At;switch(F){default:case 6:case 0:dt=W,ct=it,At=B;break;case 1:dt=it,ct=W,At=B;break;case 2:dt=B,ct=W,At=it;break;case 3:dt=B,ct=it,At=W;break;case 4:dt=it,ct=B,At=W;break;case 5:dt=W,ct=B,At=it}return[255*dt,255*ct,255*At]},S.cmyk.rgb=function(v){const D=v[0]/100,B=v[1]/100,N=v[2]/100,L=v[3]/100;return[255*(1-Math.min(1,D*(1-L)+L)),255*(1-Math.min(1,B*(1-L)+L)),255*(1-Math.min(1,N*(1-L)+L))]},S.xyz.rgb=function(v){const D=v[0]/100,B=v[1]/100,N=v[2]/100;let L,j,F;return L=3.2406*D+-1.5372*B+-.4986*N,j=-.9689*D+1.8758*B+.0415*N,F=.0557*D+-.204*B+1.057*N,L=L>.0031308?1.055*L**.4166666666666667-.055:12.92*L,j=j>.0031308?1.055*j**.4166666666666667-.055:12.92*j,F=F>.0031308?1.055*F**.4166666666666667-.055:12.92*F,L=Math.min(Math.max(0,L),1),j=Math.min(Math.max(0,j),1),F=Math.min(Math.max(0,F),1),[255*L,255*j,255*F]},S.xyz.lab=function(v){let D=v[0],B=v[1],N=v[2];return D/=95.047,B/=100,N/=108.883,D=D>.008856?D**.3333333333333333:7.787*D+.13793103448275862,B=B>.008856?B**.3333333333333333:7.787*B+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,[116*B-16,500*(D-B),200*(B-N)]},S.lab.xyz=function(v){let D,B,N;B=(v[0]+16)/116,D=v[1]/500+B,N=B-v[2]/200;const L=B**3,j=D**3,F=N**3;return B=L>.008856?L:(B-.13793103448275862)/7.787,D=j>.008856?j:(D-.13793103448275862)/7.787,N=F>.008856?F:(N-.13793103448275862)/7.787,D*=95.047,B*=100,N*=108.883,[D,B,N]},S.lab.lch=function(v){const D=v[0],B=v[1],N=v[2];let L;return L=360*Math.atan2(N,B)/2/Math.PI,L<0&&(L+=360),[D,Math.sqrt(B*B+N*N),L]},S.lch.lab=function(v){const D=v[0],B=v[1],N=v[2]/360*2*Math.PI;return[D,B*Math.cos(N),B*Math.sin(N)]},S.rgb.ansi16=function(v,D=null){const[B,N,L]=v;let j=D===null?S.rgb.hsv(v)[2]:D;if(j=Math.round(j/50),j===0)return 30;let F=30+(Math.round(L/255)<<2|Math.round(N/255)<<1|Math.round(B/255));return j===2&&(F+=60),F},S.hsv.ansi16=function(v){return S.rgb.ansi16(S.hsv.rgb(v),v[2])},S.rgb.ansi256=function(v){const D=v[0],B=v[1],N=v[2];return D===B&&B===N?D<8?16:D>248?231:Math.round((D-8)/247*24)+232:16+36*Math.round(D/255*5)+6*Math.round(B/255*5)+Math.round(N/255*5)},S.ansi16.rgb=function(v){let D=v%10;if(D===0||D===7)return v>50&&(D+=3.5),D=D/10.5*255,[D,D,D];const B=.5*(1+~~(v>50));return[(1&D)*B*255,(D>>1&1)*B*255,(D>>2&1)*B*255]},S.ansi256.rgb=function(v){if(v>=232){const B=10*(v-232)+8;return[B,B,B]}let D;return v-=16,[Math.floor(v/36)/5*255,Math.floor((D=v%36)/6)/5*255,D%6/5*255]},S.rgb.hex=function(v){const D=(((255&Math.round(v[0]))<<16)+((255&Math.round(v[1]))<<8)+(255&Math.round(v[2]))).toString(16).toUpperCase();return"000000".substring(D.length)+D},S.hex.rgb=function(v){const D=v.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!D)return[0,0,0];let B=D[0];D[0].length===3&&(B=B.split("").map(L=>L+L).join(""));const N=parseInt(B,16);return[N>>16&255,N>>8&255,255&N]},S.rgb.hcg=function(v){const D=v[0]/255,B=v[1]/255,N=v[2]/255,L=Math.max(Math.max(D,B),N),j=Math.min(Math.min(D,B),N),F=L-j;let W,it;return W=F<1?j/(1-F):0,it=F<=0?0:L===D?(B-N)/F%6:L===B?2+(N-D)/F:4+(D-B)/F,it/=6,it%=1,[360*it,100*F,100*W]},S.hsl.hcg=function(v){const D=v[1]/100,B=v[2]/100,N=B<.5?2*D*B:2*D*(1-B);let L=0;return N<1&&(L=(B-.5*N)/(1-N)),[v[0],100*N,100*L]},S.hsv.hcg=function(v){const D=v[1]/100,B=v[2]/100,N=D*B;let L=0;return N<1&&(L=(B-N)/(1-N)),[v[0],100*N,100*L]},S.hcg.rgb=function(v){const D=v[0]/360,B=v[1]/100,N=v[2]/100;if(B===0)return[255*N,255*N,255*N];const L=[0,0,0],j=D%1*6,F=j%1,W=1-F;let it=0;switch(Math.floor(j)){case 0:L[0]=1,L[1]=F,L[2]=0;break;case 1:L[0]=W,L[1]=1,L[2]=0;break;case 2:L[0]=0,L[1]=1,L[2]=F;break;case 3:L[0]=0,L[1]=W,L[2]=1;break;case 4:L[0]=F,L[1]=0,L[2]=1;break;default:L[0]=1,L[1]=0,L[2]=W}return it=(1-B)*N,[255*(B*L[0]+it),255*(B*L[1]+it),255*(B*L[2]+it)]},S.hcg.hsv=function(v){const D=v[1]/100,B=D+v[2]/100*(1-D);let N=0;return B>0&&(N=D/B),[v[0],100*N,100*B]},S.hcg.hsl=function(v){const D=v[1]/100,B=v[2]/100*(1-D)+.5*D;let N=0;return B>0&&B<.5?N=D/(2*B):B>=.5&&B<1&&(N=D/(2*(1-B))),[v[0],100*N,100*B]},S.hcg.hwb=function(v){const D=v[1]/100,B=D+v[2]/100*(1-D);return[v[0],100*(B-D),100*(1-B)]},S.hwb.hcg=function(v){const D=v[1]/100,B=1-v[2]/100,N=B-D;let L=0;return N<1&&(L=(B-N)/(1-N)),[v[0],100*N,100*L]},S.apple.rgb=function(v){return[v[0]/65535*255,v[1]/65535*255,v[2]/65535*255]},S.rgb.apple=function(v){return[v[0]/255*65535,v[1]/255*65535,v[2]/255*65535]},S.gray.rgb=function(v){return[v[0]/100*255,v[0]/100*255,v[0]/100*255]},S.gray.hsl=function(v){return[0,0,v[0]]},S.gray.hsv=S.gray.hsl,S.gray.hwb=function(v){return[0,100,v[0]]},S.gray.cmyk=function(v){return[0,0,0,v[0]]},S.gray.lab=function(v){return[v[0],0,0]},S.gray.hex=function(v){const D=255&Math.round(v[0]/100*255),B=((D<<16)+(D<<8)+D).toString(16).toUpperCase();return"000000".substring(B.length)+B},S.rgb.gray=function(v){return[(v[0]+v[1]+v[2])/3/255*100]}},9047:(w,A,f)=>{const E=f(9246),I=f(802),S={};Object.keys(E).forEach(v=>{S[v]={},Object.defineProperty(S[v],"channels",{value:E[v].channels}),Object.defineProperty(S[v],"labels",{value:E[v].labels});const D=I(v);Object.keys(D).forEach(B=>{const N=D[B];S[v][B]=function(L){const j=function(...F){const W=F[0];if(W==null)return W;W.length>1&&(F=W);const it=L(F);if(typeof it=="object")for(let dt=it.length,ct=0;ct<dt;ct++)it[ct]=Math.round(it[ct]);return it};return"conversion"in L&&(j.conversion=L.conversion),j}(N),S[v][B].raw=function(L){const j=function(...F){const W=F[0];return W==null?W:(W.length>1&&(F=W),L(F))};return"conversion"in L&&(j.conversion=L.conversion),j}(N)})}),w.exports=S},802:(w,A,f)=>{const E=f(9246);function I(D){const B=function(){const L={},j=Object.keys(E);for(let F=j.length,W=0;W<F;W++)L[j[W]]={distance:-1,parent:null};return L}(),N=[D];for(B[D].distance=0;N.length;){const L=N.pop(),j=Object.keys(E[L]);for(let F=j.length,W=0;W<F;W++){const it=j[W],dt=B[it];dt.distance===-1&&(dt.distance=B[L].distance+1,dt.parent=L,N.unshift(it))}}return B}function S(D,B){return function(N){return B(D(N))}}function v(D,B){const N=[B[D].parent,D];let L=E[B[D].parent][D],j=B[D].parent;for(;B[j].parent;)N.unshift(B[j].parent),L=S(E[B[j].parent][j],L),j=B[j].parent;return L.conversion=N,L}w.exports=function(D){const B=I(D),N={},L=Object.keys(B);for(let j=L.length,F=0;F<j;F++){const W=L[F];B[W].parent!==null&&(N[W]=v(W,B))}return N}},6931:w=>{w.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const D=v},8708:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const D=v},1866:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const D=v},7793:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CCjFA,mDDwEE,sFAAuF,CADvF,+JAAoK,CAFpK,SCnEF,CAFA,mDD+EE,sFAAuF,CADvF,+JAAmK,CAFnK,UC1EF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},7388:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-radius:0;border-width:1px 1px 0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar{border:0;border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DAOC,wCAAsB,CCLxB,eAAgB,CDKd,sBAcD,CCjBD,mKAEC,qCAAsC,CDJpC,2BAA4B,CAC5B,4BCKH,CDCE,8FACC,uBACD,CAEA,2EACC,QAAS,CACT,mDACD,CAEA,0EACC,QACD,CAMH,yCAEC,0CAA2C,CC1B3C,eDoCD,CClCC,yHAEC,qCAAsC,CDyBtC,wBAAyB,CACzB,yBCxBD,CD2BA,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar {
				border: 0;
				border-bottom: 1px solid var(--ck-color-base-border);
			}

			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},4098:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}@media (forced-colors:active){.ck .ck-placeholder,.ck.ck-placeholder{forced-color-adjust:preserve-parent-color}}.ck .ck-placeholder:before,.ck.ck-placeholder:before{cursor:text}@media (forced-colors:none){.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text)}}@media (forced-colors:active){.ck .ck-placeholder:before,.ck.ck-placeholder:before{font-style:italic;margin-left:1px}}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC7BC,8BACC,uCCOA,yCDLA,CACD,CCOA,qDACC,WAmBD,CDvBA,4BACC,qDCMC,6CDJD,CACD,CAZA,8BACC,qDCsBC,iBAAkB,CAMlB,eD1BD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	@mixin ck-media-forced-colors {
		/*
		 * This is needed for Edge on Windows to use the right color for the placeholder content (::before).
		 * See https://github.com/ckeditor/ckeditor5/issues/14907.
		 */
		forced-color-adjust: preserve-parent-color;
	}

	&::before {
		cursor: text;

		@mixin ck-media-default-colors {
			color: var(--ck-color-engine-placeholder-text);
		}

		@mixin ck-media-forced-colors {
			/*
			 * In the high contrast mode there is no telling between regular and placeholder text. Using
			 * italic text to address that issue. See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			font-style: italic;

			/*
			 * Without this margin, the caret will not show up and blink when the user puts the selection
			 * in the placeholder (Edge on Windows). See https://github.com/ckeditor/ckeditor5/issues/14907.
			 */
			margin-left: 1px;
		}
	}
}
`],sourceRoot:""}]);const D=v},8264:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const D=v},6269:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-heading_heading1 .ck-button__label{font-size:20px}.ck.ck-heading_heading2 .ck-button__label{font-size:17px}.ck.ck-heading_heading3 .ck-button__label{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,0CACC,cACD,CAEA,0CACC,cACD,CAEA,0CACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 .ck-button__label {
	font-size: 20px;
}

.ck.ck-heading_heading2 .ck-button__label {
	font-size: 17px;
}

.ck.ck-heading_heading3 .ck-button__label {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const D=v},265:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const D=v},5247:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}@media (forced-colors:active){.ck-content .image>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:none}}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAYD,CAJC,8BAXD,8BAYE,sBAAuB,CACvB,WAEF,CADC,CCdA,4BACC,qEDmBA,iDCjBA,CACD,CDmBA,uCALD,qEAME,cAEF,CADC,CAGD,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@media (forced-colors: active) {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	@mixin ck-media-default-colors {
		animation: ck-image-caption-highlight .6s ease-out;
	}

	@media (prefers-reduced-motion: reduce) {
		animation: none;
	}
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const D=v},4642:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-image-custom-resize-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{display:inline-block}.ck.ck-image-custom-resize-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-image-custom-resize-form{flex-wrap:wrap}.ck.ck-image-custom-resize-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-image-custom-resize-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecustomresizeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,gCAIC,sBAAuB,CAHvB,YAAa,CACb,kBAAmB,CACnB,gBAsBD,CAnBC,uDACC,oBACD,CAEA,0CACC,YACD,CCbA,oCDCD,gCAeE,cAUF,CARE,uDACC,eACD,CAEA,2CACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-image-custom-resize-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: flex-start;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},3350:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-image-insert-url{padding:var(--ck-spacing-large) var(--ck-spacing-large) 0;width:400px}.ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width);padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAKA,wBAEC,yDAA0D,CAD1D,WAOD,CAJC,yDACC,YAAa,CACb,mCACD,CCLD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CACd,UASD,CCpCA,iDD8BE,eC5BF,CAFA,iDDkCE,gBChCF,CDoCA,4CASC,oDACD,CATC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,iDACC,oDAAqD,CACrD,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	width: 400px;
	padding: var(--ck-spacing-large) var(--ck-spacing-large) 0;

	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},7378:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const D=v},3469:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const D=v},6386:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image.image-style-block-align-left,.ck-content .image.image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image.image-style-align-left,.ck-content .image.image-style-align-right{clear:none}.ck-content .image.image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image.image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image.image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image.image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image.image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content p+.image.image-style-align-left,.ck-content p+.image.image-style-align-right,.ck-content p+.image.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAQE,iGAEC,oDACD,CAIA,qFAEC,UACD,CAEA,oCACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,0CACC,UAAW,CACX,0CACD,CAEA,2CACC,WAAY,CACZ,yCACD,CAEA,iDAEC,gBAAiB,CADjB,cAED,CAEA,gDACC,aAAc,CACd,iBACD,CAGD,sCACC,gBAAiB,CACjB,iBACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAGA,+HAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* See: https://github.com/ckeditor/ckeditor5/issues/16317 */
	& .image {
		/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
		confirming successful application of the style if image width exceeds the editor's size.
		See https://github.com/ckeditor/ckeditor5/issues/9342 */
		&.image-style-block-align-left,
		&.image-style-block-align-right {
			max-width: calc(100% - var(--ck-image-style-spacing));
		}

		/* Allows displaying multiple floating images in the same line.
		See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
		&.image-style-align-left,
		&.image-style-align-right {
			clear: none;
		}

		&.image-style-side {
			float: right;
			margin-left: var(--ck-image-style-spacing);
			max-width: 50%;
		}

		&.image-style-align-left {
			float: left;
			margin-right: var(--ck-image-style-spacing);
		}

		&.image-style-align-right {
			float: right;
			margin-left: var(--ck-image-style-spacing);
		}

		&.image-style-block-align-right {
			margin-right: 0;
			margin-left: auto;
		}

		&.image-style-block-align-left {
			margin-left: 0;
			margin-right: auto;
		}
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image.image-style-align-left,
	& p + .image.image-style-align-right,
	& p + .image.image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},7693:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0s,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@media (prefers-reduced-motion:reduce){.ck-image-upload-complete-icon{animation-duration:0s}.ck-image-upload-complete-icon:after{animation:none;height:.45em;opacity:1;width:.3em}}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,qBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFAqCD,CAjCC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAEA,uCA7CD,+BA8CE,qBASF,CAPE,qCACC,cAAe,CAGf,YAAc,CAFd,SAAU,CACV,UAED,CACD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 0ms;

		&::after {
			animation: none;
			opacity: 1;
			width: 0.3em;
			height: 0.45em;
		}
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const D=v},1559:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const D=v},2267:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}@media (prefers-reduced-motion:reduce){.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:none;opacity:1}}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBAMD,CAJC,uCAHD,yFAKE,cAAe,CADf,SAGF,CADC,CAKF,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;

			@media (prefers-reduced-motion: reduce) {
				opacity: 1;
				animation: none;
			}
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const D=v},4062:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},7719:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const D=v},8762:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CChEF,gJDyEG,aCvEH,CFAA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},3817:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-link-form{align-items:flex-start;display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:0 var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAOA,iBAEC,sBAAuB,CADvB,YAkBD,CAfC,2BACC,YACD,CCPA,oCDCD,iBASE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CChBD,CDwBD,iCACC,aAYD,CALE,wHAEC,mCACD,CEhCF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CC1BD,4GDiCE,aC/BF,CDiCE,mEACC,kDACD,CAKF,6CACC,gCAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;
	align-items: flex-start;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: 0 var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},4808:(w,A,f)=>{f.d(A,{A:()=>F});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S),D=f(62),B=f.n(D),N=new URL(f(4782),f.b),L=v()(I()),j=B()(N);L.push([w.id,`.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url(${j});background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}`,"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,wDAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const F=L},1232:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const D=v},6903:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},9968:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const D=v},7141:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const D=v},8991:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-content .todo-list .todo-list__label>input:before{transition:none}}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{transition:none}}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CA4EA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAtFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqFC,CAvED,wDACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAEA,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sDAYE,eAEF,CADC,CAGD,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FAxHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAuHA,CAzGA,wGACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAEA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UASD,CAHC,uCAXD,sGAYE,eAEF,CADC,CAGD,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	[dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const D=v},70:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const D=v},7048:(w,A,f)=>{f.d(A,{A:()=>St});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S),D=f(62),B=f.n(D),N=new URL(f(657),f.b),L=new URL(f(9736),f.b),j=new URL(f(6341),f.b),F=new URL(f(7784),f.b),W=v()(I()),it=B()(N),dt=B()(L),ct=B()(j),At=B()(F);W.push([w.id,`.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(${it})}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(${dt})}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(${ct})}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(${At})}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}`,"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wDACD,CAEA,2EACC,kBAaD,CAXC,wGACC,wDACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,wDACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wDACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const St=W},5651:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap;width:400px}.ck.ck-media-form .ck-labeled-field-view{display:inline-block;width:100%}.ck.ck-media-form .ck-label{display:none}.ck.ck-media-form .ck-input{width:100%}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAAiB,CACjB,WA0BD,CAxBC,yCACC,oBAAqB,CACrB,UACD,CAEA,4BACC,YACD,CAEA,4BACC,UACD,CCnBA,oCDCD,kBAqBE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CC5BD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;
	width: 400px;

	& .ck-labeled-field-view {
		display: inline-block;
		width: 100%;
	}

	& .ck-label {
		display: none;
	}

	& .ck-input {
		width: 100%;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},5506:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);border-radius:0;height:20px;width:20px}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC7BF,+CCME,4BAA6B,CAD7B,yBDHF,CAFA,+CCWE,2BAA4B,CAD5B,wBDRF,CCcC,2CACC,SACD,CAIA,wEACC,SA0CD,CDjED,kFC2BG,2BAA4B,CAD5B,wBDxBH,CC2BG,8FACC,iCACD,CD/BH,kFCoCG,4BAA6B,CAD7B,yBDjCH,CCoCG,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GAKC,6CAA8C,CC/CjD,eAAgB,CD8Cb,WAAY,CADZ,UAcD,CCzDF,+PAEC,qCAED,CD2CG,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CD7ED,8DCgFE,yBD9EF,CAFA,8DCoFE,wBDlFF,CCqFC,gEACC,uCAMD,CD9FD,0EC4FG,sCAAuC,CADvC,cDzFH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},4043:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},2655:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CC7BC,6CDQG,mCCNH,CAFA,6CDYG,oCCVH,CDeA,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},5032:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}@media (prefers-reduced-motion:reduce){.ck .ck-insert-table-dropdown-grid-box{transition:none}}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAcD,CAZC,uCATD,uCAUE,eAWF,CAVC,CAEA,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const D=v},2329:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}@media print{.ck-content .table table{height:auto}}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAeF,aACC,yBACC,WACD,CACD,CAIA,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/**
 * Expanding the table to the full height of the parent container is necessary because tables
 * are rendered inside <figure> elements, which is kinda buggy in table height calculation.
 * While setting \`height: 100%\` fixes the issue in the editing mode described here:
 * https://github.com/ckeditor/ckeditor5/issues/6186
 *
 * it's causing another issue with the table height in the print preview mode here:
 * https://github.com/ckeditor/ckeditor5/issues/16856
 *
 * For now, resetting the height to \`initial\` in the print mode works as a workaround.
 */
@media print {
	.ck-content .table table {
		height: initial;
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const D=v},4143:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}@media (forced-colors:active){.ck-content .table>figcaption{background-color:unset;color:unset}}@media (forced-colors:none){.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAOA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAaD,CCxBC,8BACC,8BDoBA,sBAAuB,CACvB,WCnBA,CACD,CAIA,4BDqBC,qEACC,iDACD,CCnBD,CDsBA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;

	/* Improve placeholder rendering in high-constrast mode (https://github.com/ckeditor/ckeditor5/issues/14907). */
	@mixin ck-media-forced-colors {
		background-color: unset;
		color: unset;
	}
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	@mixin ck-media-default-colors {
		&.table__caption_highlighted {
			animation: ck-table-caption-highlight .6s ease-out;
		}
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const D=v},8986:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},8795:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const D=v},8137:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAWE,8QAGC,2DAA4D,CAC5D,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		/**
		 * While setting outline is fine, the border should not be modified here
		 * because it overrides the default table cell border color which is not expected.
		 * So do not use \`@mixin ck-focus-ring;\` here, or any other border styles.
		 * See more: https://github.com/ckeditor/ckeditor5/issues/16979
		 */
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const D=v},1623:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both;background:var(--ck-color-base-error);border-radius:0;color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}@media (prefers-reduced-motion:reduce){.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:none}}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCA6BD,CA3BC,8EAgBC,iEAAkE,CAblE,qCAAsC,CC3CxC,eAAgB,CD4Cd,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAcD,CC3DD,mMAEC,qCAED,CD4CE,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAIA,uCAlBD,8EAmBE,cAEF,CADC,CAID,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;

			@media (prefers-reduced-motion: reduce) {
				animation: none;
			}
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},5562:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},8423:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},1801:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}.ck.ck-aria-live-region-list{list-style-type:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD,CAEA,6BACC,oBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}

.ck.ck-aria-live-region-list {
	list-style-type: none;
}
`],sourceRoot:""}]);const D=v},5727:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);border-radius:0;max-height:200px;min-width:auto;overflow-y:auto}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{box-shadow:var(--ck-drop-shadow),0 0}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCAMC,0CAA2C,CAC3C,sDAAuD,CCLxD,eAAgB,CDEf,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CCrBA,uHAEC,qCAED,CDRA,wCEAA,oCFyBA,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},9715:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;background:var(--ck-color-button-default-background);border:1px solid transparent;border-radius:0;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}@media (prefers-reduced-motion:reduce){.ck.ck-button,a.ck.ck-button{transition:none}}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit;opacity:.5}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-medium)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background);color:var(--ck-color-button-on-color)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background);color:var(--ck-color-button-action-text)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CEhCC,iDFWC,oBETD,CAFA,iDFeC,qBEbD,CFgBA,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CGzBD,6BA6BC,uBAAwB,CC7BxB,oDAAqC,CDuBrC,4BAA6B,CExB7B,eAAgB,CFOhB,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAwID,CC1IE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CCdA,wIAEC,qCAED,CF0BA,uCA/BD,6BAgCE,eA6GF,CA5GC,CAEA,oFGpCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHyCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CDzEA,qFCmEE,eDjEF,CAFA,qFCuEE,gBDrEF,CCyEA,yEACC,aAAc,CAUd,UACD,CDvFA,6FC+EE,mCD7EF,CAFA,6FCmFE,oCDjFF,CCyFC,oIIxFD,oDJ4FC,CAOA,gLKnGD,kCLqGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAYD,CD5HA,2HCqHG,qCDnHH,CAFA,2HCyHG,oCDvHH,CC8HC,mHACC,WACD,CAID,yCChIA,+CAAqC,CDmIpC,qCACD,CCjIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDuHA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CChJC,mDAAqC,CDoJrC,wCACD,CClJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDwID,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-right: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				margin-left: var(--ck-spacing-medium);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=v},278:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-list-item-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list-item-button{text-align:left}[dir=rtl] .ck.ck-list-item-button{text-align:right}[dir=ltr] .ck.ck-list-item-button.ck-list-item-button_toggleable{padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-list-item-button.ck-list-item-button_toggleable{padding-right:var(--ck-spacing-small)}.ck.ck-list-item-button .ck-list-item-button__check-holder{display:inline-flex;height:.9em;width:.9em}[dir=ltr] .ck.ck-list-item-button .ck-list-item-button__check-holder{margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-list-item-button .ck-list-item-button__check-holder{margin-left:var(--ck-spacing-small)}.ck.ck-list-item-button .ck-list-item-button__check-icon{height:100%}.ck.ck-button.ck-list-item-button{padding:var(--ck-spacing-tiny) calc(var(--ck-spacing-standard)*2)}.ck.ck-button.ck-list-item-button,.ck.ck-button.ck-list-item-button.ck-on{background:var(--ck-color-list-background);color:var(--ck-color-text)}[dir=ltr] .ck.ck-button.ck-list-item-button:has(.ck-list-item-button__check-holder){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-list-item-button:has(.ck-list-item-button__check-holder){padding-right:var(--ck-spacing-small)}.ck.ck-button.ck-list-item-button.ck-button.ck-on:hover,.ck.ck-button.ck-list-item-button.ck-on:hover,.ck.ck-button.ck-list-item-button.ck-on:not(.ck-list-item-button_toggleable),.ck.ck-button.ck-list-item-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-button.ck-list-item-button.ck-button.ck-on:hover:not(.ck-disabled),.ck.ck-button.ck-list-item-button.ck-on:hover:not(.ck-disabled),.ck.ck-button.ck-list-item-button.ck-on:not(.ck-list-item-button_toggleable):not(.ck-disabled),.ck.ck-button.ck-list-item-button:hover:not(.ck-disabled):not(.ck-disabled){color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/listitembutton.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/listitembutton.css"],names:[],mappings:"AAOA,wBAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAsCD,CCzCC,kCDOC,eCLD,CAFA,kCDWC,gBCTD,CAFA,iEDgBE,oCCdF,CAFA,iEDoBE,qCClBF,CDsBA,2DACC,mBAAoB,CAEpB,WAAY,CADZ,UAUD,CCpCA,qED8BE,oCC5BF,CAFA,qEDkCE,mCChCF,CDoCA,yDACC,WACD,CEvCD,kCACC,iEAiCD,CA/BC,0EAEC,0CAA2C,CAC3C,0BACD,CDRA,oFCYE,oCDVF,CAFA,oFCgBE,qCDdF,CCuBA,6OAIC,uDAKD,CAHC,qTACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_dir.css";

.ck.ck-list-item-button {
	min-height: unset;
	width: 100%;
	border-radius: 0;

	@mixin ck-dir ltr {
		text-align: left;
	}

	@mixin ck-dir rtl {
		text-align: right;
	}

	&.ck-list-item-button_toggleable {
		@mixin ck-dir ltr {
			padding-left: var(--ck-spacing-small);
		}

		@mixin ck-dir rtl {
			padding-right: var(--ck-spacing-small);
		}
	}

	& .ck-list-item-button__check-holder {
		display: inline-flex;
		width: .9em;
		height: .9em;

		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-small);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-small);
		}
	}

	& .ck-list-item-button__check-icon {
		height: 100%;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button.ck-list-item-button {
	padding: var(--ck-spacing-tiny) calc(2 * var(--ck-spacing-standard));

	&,
	&.ck-on {
		background: var(--ck-color-list-background);
		color: var(--ck-color-text);
	}

	&:has(.ck-list-item-button__check-holder) {
		@mixin ck-dir ltr {
			padding-left: var(--ck-spacing-small);
		}

		@mixin ck-dir rtl {
			padding-right: var(--ck-spacing-small);
		}
	}

	/*
	 * \`.ck-on\` class and background styling is overridden for \`ck-button\` in many places.
	 * This is a workaround to make sure that the background is not overridden and uses similar
	 * selector specificity as the other overrides.
	 */
	&:hover:not(.ck-disabled),
	&.ck-button.ck-on:hover,
	&.ck-on:not(.ck-list-item-button_toggleable),
	&.ck-on:hover {
		background: var(--ck-color-list-button-hover-background);

		&:not(.ck-disabled) {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const D=v},4391:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;border-radius:0;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);border-radius:0;height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}@media (prefers-reduced-motion:reduce){.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{transition:none}}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CC3BA,0DDgCE,4CC9BF,CAFA,0DDqCE,2CCnCF,CDuCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CEpD9B,eAAgB,CFmDf,iFAAsF,CAEtF,0CA2BD,CE9EA,yIAEC,qCAED,CDXA,2DD8CE,gBC5CF,CAFA,2DDmDE,iBCjDF,CD2DC,2EAOC,yDAA0D,CE/D5D,eAAgB,CF8Dd,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAUD,CErED,6LAEC,qCAAsC,CFsDpC,8CEpDH,CF8DE,uCAZD,2EAaE,eAEF,CADC,CAGD,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DGpFA,kCHsFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CC/GF,2FDsHI,2DCpHJ,CAFA,2FD0HI,oECxHJ",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=v},25:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAGC,eAAgB,CAChB,aAAc,CAFd,eAAiB,CADjB,UAmBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const D=v},7317:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{transition:box-shadow .2s ease}@media (forced-colors:none){.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}}@media (forced-colors:active){.ck.ck-color-grid__tile{height:unset;min-height:unset;min-width:unset;padding:0 var(--ck-spacing-small);width:unset}.ck.ck-color-grid__tile .ck-button__label{display:inline-block}}@media (prefers-reduced-motion:reduce){.ck.ck-color-grid__tile{transition:none}}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css"],names:[],mappings:"AAKA,kBACC,YACD,CCCA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBACC,8BAkED,CC3EC,4BACC,wBDgBA,QAAS,CAJT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CAJV,oCCTA,CDgBA,8HAIC,QACD,CAEA,+DACC,gDACD,CAEA,8BACC,8FACD,CAEA,gGAEC,iGACD,CCjCD,CAZA,8BACC,wBDqDA,YAAa,CAEb,gBAAiB,CADjB,eAAgB,CAEhB,iCAAkC,CAJlC,WClDA,CDwDA,0CACC,oBACD,CCzDD,CD4DA,uCAhDD,wBAiDE,eAkBF,CAjBC,CAEA,oCACC,YAAa,CACb,gBACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAGC,0CACC,aACD,CAIF,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	transition: .2s ease box-shadow;

	@mixin ck-media-default-colors {
		width: var(--ck-color-grid-tile-size);
		height: var(--ck-color-grid-tile-size);
		min-width: var(--ck-color-grid-tile-size);
		min-height: var(--ck-color-grid-tile-size);
		padding: 0;
		border: 0;

		&.ck-on,
		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			/* Disable the default .ck-button's border ring. */
			border: 0;
		}

		&.ck-color-selector__color-tile_bordered {
			box-shadow: 0 0 0 1px var(--ck-color-base-border);
		}

		&.ck-on {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);
		}

		&:focus:not( .ck-disabled ),
		&:hover:not( .ck-disabled ) {
			box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
		}
	}

	/*
	 * In high contrast mode, the colors are replaced with text labels.
	 * See https://github.com/ckeditor/ckeditor5/issues/14907.
	 */
	@mixin ck-media-forced-colors {
		width: unset;
		height: unset;
		min-width: unset;
		min-height: unset;
		padding: 0 var(--ck-spacing-small);

		& .ck-button__label {
			display: inline-block;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		& .ck.ck-icon {
			display: block;
		}
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`],sourceRoot:""}]);const D=v},1905:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const D=v},6309:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CCZD,wMDUG,0BCRH,CDeC,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CErBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CDhBF,gHCoBI,uCDlBJ,CAFA,gHCwBI,sCDtBJ,CC2BC,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const D=v},9819:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog:not(.ck-dialog_modal) .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0;--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width);overscroll-behavior:contain}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{box-shadow:var(--ck-drop-shadow),0 0}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}.ck-dialog-scroll-locked{overflow:hidden}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAiBD,CAdC,kCACC,aACD,CAIC,gFACC,WACD,CAGD,mEACC,kBACD,CC/BD,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eAAgB,CDiBhB,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CAF7C,sCAAuC,CACvC,oCAAqC,CAErC,2BAKD,CC1BC,mEAEC,qCAED,CDOD,cEfC,oCF8BD,CAHC,kCACC,iEACD,CAGD,yBACC,eACD,CAEA,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;
	}

	/* Modals should not be draggable. */
	&:not(.ck-dialog_modal) {
		& .ck.ck-form__header .ck-form__header__label {
			cursor: grab;
		}
	}

	.ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);
	overscroll-behavior: contain;

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

.ck-dialog-scroll-locked {
	overflow: hidden;
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},9822:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const D=v},8149:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);border-radius:0;bottom:0;min-width:100%}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBAIC,oDAAqD,CACrD,sDAAuD,CGvFvD,eAAgB,CHwFhB,QAAS,CAGT,cAuBD,CGhHC,qFAEC,qCAED,CH4ED,uBEpFC,oCFoHD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},3629:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CCnBC,iIAEC,qCAAsC,CDJtC,wBCMD,CDAC,mFCND,eDYC,CCVD,6MAEC,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBCFH,CDQC,kFCdD,eDmBC,CCjBD,2MAEC,qCAAsC,CDYpC,wBAAyB,CACzB,yBCXH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},7218:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-dropdown-menu-list__nested-menu{display:block}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/menu/dropdownmenu.css"],names:[],mappings:"AAKA,uCACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dropdown-menu-list__nested-menu {
	display: block;
}
`],sourceRoot:""}]);const D=v},9554:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button{border-radius:0;padding:var(--ck-spacing-tiny) calc(var(--ck-spacing-standard)*2);width:100%}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button.ck-icon-spacing:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{margin-right:calc(var(--ck-spacing-small)*-1);transform:rotate(-90deg)}[dir=rtl] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{margin-left:calc(var(--ck-spacing-small)*-1);transform:rotate(90deg)}.ck.ck-button.ck-dropdown-menu-list__nested-menu__button.ck-disabled>.ck-dropdown-menu-list__nested-menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=ltr] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-dropdown-menu-list__nested-menu__button>.ck-dropdown-menu-list__nested-menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/menu/dropdownmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/menu/dropdownmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAKA,kGACC,mBAAoB,CACpB,2BACD,CCIA,yDAGC,eAAgB,CADhB,iEAAoE,CADpE,UA2ED,CAvEC,+DACC,wBAAyB,CACzB,eAKD,CAHC,2EACC,0DACD,CAGD,2EACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,uFCvBA,kCDyBA,CAGA,uHACC,+DACD,CAEA,4GACC,mCAeD,CEnDA,sHF0CE,6CAAgD,CAHhD,wBErCF,CAFA,sHFiDE,4CAA+C,CAH/C,uBE5CF,CFmDA,wHClDA,kCDoDA,CAGC,6FACC,oCACD,CAEA,sHAIC,sCAAuC,CAHvC,gCAID,CAIA,6FACC,qCACD,CAEA,sHACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dropdown-menu-list__nested-menu__button > .ck-dropdown-menu-list__nested-menu__button__arrow {
	pointer-events: none;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../../mixins/_disabled.css";
@import "../../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * All menu buttons.
 */
.ck.ck-button.ck-dropdown-menu-list__nested-menu__button {
	width: 100%;
	padding: var(--ck-spacing-tiny) calc(2 * var(--ck-spacing-standard));
	border-radius: 0;

	&:focus {
		border-color: transparent;
		box-shadow: none;

		&:not(.ck-on) {
			background: var(--ck-color-button-default-hover-background);
		}
	}

	& > .ck-button__label {
		flex-grow: 1;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	&.ck-disabled > .ck-button__label {
		@mixin ck-disabled;
	}

	/* Spacing in buttons that miss the icon. */
	&.ck-icon-spacing:not(:has(.ck-button__icon)) > .ck-button__label {
		margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
	}

	& > .ck-dropdown-menu-list__nested-menu__button__arrow {
		width: var(--ck-dropdown-arrow-size);

		@mixin ck-dir ltr {
			transform: rotate(-90deg);

			/* Nudge the arrow gently to the right because its center of gravity is to the left */
			margin-right: calc(-1 * var(--ck-spacing-small));
		}

		@mixin ck-dir rtl {
			transform: rotate(90deg);

			/* Nudge the arrow gently to the left because its center of gravity is to the right (after rotation). */
			margin-left: calc(-1 * var(--ck-spacing-small));
		}
	}

	&.ck-disabled > .ck-dropdown-menu-list__nested-menu__button__arrow {
		@mixin ck-disabled;
	}

	@mixin ck-dir ltr {
		&:not(.ck-button_with-text) {
			padding-left: var(--ck-spacing-small);
		}

		& > .ck-dropdown-menu-list__nested-menu__button__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		&:not(.ck-button_with-text) {
			padding-right: var(--ck-spacing-small);
		}

		& > .ck-dropdown-menu-list__nested-menu__button__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},2171:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-dropdown-menu-menu-item-min-width:18em}.ck.ck-dropdown-menu-list__nested-menu__item{min-width:var(--ck-dropdown-menu-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/menu/dropdownmenulistitem.css"],names:[],mappings:"AAKA,MACC,2CACD,CAEA,6CACC,qDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-menu-menu-item-min-width: 18em;
}

.ck.ck-dropdown-menu-list__nested-menu__item {
	min-width: var(--ck-dropdown-menu-menu-item-min-width);
}
`],sourceRoot:""}]);const D=v},4767:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck-button.ck-dropdown-menu-list__nested-menu__item__button{border-radius:0}.ck-button.ck-dropdown-menu-list__nested-menu__item__button>.ck-spinner-container,.ck-button.ck-dropdown-menu-list__nested-menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck-button.ck-dropdown-menu-list__nested-menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck-button.ck-dropdown-menu-list__nested-menu__item__button:focus{border-color:transparent;box-shadow:none}.ck-button.ck-dropdown-menu-list__nested-menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/menu/dropdownmenulistitembutton.css"],names:[],mappings:"AAQA,4DACC,eA0BD,CAxBC,gLAGC,8BACD,CAEA,kFAEC,4CAA+C,CAC/C,oCACD,CAMA,kEACC,wBAAyB,CACzB,eAKD,CAHC,8EACC,0DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * List item buttons.
 */
.ck-button.ck-dropdown-menu-list__nested-menu__item__button {
	border-radius: 0;

	& > .ck-spinner-container,
	& > .ck-spinner-container .ck-spinner {
		/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
		--ck-toolbar-spinner-size: 20px;
	}

	& > .ck-spinner-container {
		/* These margins are the same as for .ck-icon. */
		margin-left: calc(-1 * var(--ck-spacing-small));
		margin-right: var(--ck-spacing-small);
	}

	/*
	 * Hovered items automatically get focused. Default focus styles look odd
	 * while moving across a huge list of items so let's get rid of them
	 */
	&:focus {
		border-color: transparent;
		box-shadow: none;

		&:not(.ck-on) {
			background: var(--ck-color-button-default-hover-background);
		}
	}
}
`],sourceRoot:""}]);const D=v},3610:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel{max-height:314px;overflow-y:auto;position:absolute;z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-menu-menu-panel-max-width:75vw}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-dropdown-menu-menu-panel-max-width)}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel:after,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel:before{display:none}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_es,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_se{border-top-left-radius:0}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_sw,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_ws{border-top-right-radius:0}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_en,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_ne{border-bottom-left-radius:0}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_nw,.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel.ck-balloon-panel_wn{border-bottom-right-radius:0}.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/menu/dropdownmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/menu/dropdownmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,0DAEC,gBAAiB,CACjB,eAAgB,CAFhB,iBAAkB,CAGlB,mCACD,CCFA,MACC,4CACD,CAEA,0DAGC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CCRT,oCAA8B,CDS9B,kBAAmB,CACnB,sDAgCD,CA7BC,iIAEC,YACD,CAGA,4JAEC,wBACD,CAEA,4JAEC,yBACD,CAEA,4JAEC,2BACD,CAEA,4JAEC,4BACD,CAEA,gEACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel {
	position: absolute;
	max-height: 314px; /* With the default settings, this is equal to 10 menu items. */
	overflow-y: auto;
	z-index: calc(var(--ck-z-panel) + 1);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../../mixins/_rounded.css";
@import "../../../../mixins/_shadow.css";

:root {
	--ck-dropdown-menu-menu-panel-max-width: 75vw;
}

.ck.ck-balloon-panel.ck-dropdown-menu__nested-menu__panel {
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-dropdown-menu-menu-panel-max-width);

	/* Reset balloon styling */
	&::after,
	&::before {
		display: none;
	}

	/* Corner border radius consistent with the button. */
	&.ck-balloon-panel_es,
	&.ck-balloon-panel_se {
		border-top-left-radius: 0;
	}

	&.ck-balloon-panel_ws,
	&.ck-balloon-panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-balloon-panel_en,
	&.ck-balloon-panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-balloon-panel_wn,
	&.ck-balloon-panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},1792:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAQE,oIAGC,gCAAiC,CADjC,6BAED,CAEA,oIAGC,+BAAgC,CADhC,4BAED,CAGD,0CAGC,eAiBD,CAfC,oDAGC,+BAAgC,CADhC,4BAED,CAEA,oDAGC,gCAAiC,CADjC,6BAED,CAEA,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAIA,uCCnDA,eD6DA,CC3DA,qHAEC,qCAED,CD+CE,qKACC,2BACD,CAEA,mKACC,4BACD,CAUD,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		[dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		[dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		[dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		[dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		[dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		[dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},1666:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const D=v},8527:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content *{white-space:normal}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAEA,0EACC,kBACD,CAGA,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},1185:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CCTC,yJAEC,qCAED,CDCA,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},7913:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CCzBC,uCDaE,qCCXF,CAFA,uCDiBE,oCCfF,CDmBA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},9529:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const D=v},7621:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal));--ck-icon-font-size:.8333350694em}.ck.ck-icon{font-size:var(--ck-icon-font-size);height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EAA6E,CAC7E,iCACD,CAEA,YAKC,kCAAmC,CAHnC,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
	--ck-icon-font-size: .8333350694em;
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: var(--ck-icon-font-size);

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},253:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);border-radius:0;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}@media (prefers-reduced-motion:reduce){.ck.ck-input{transition:none}}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}@media (prefers-reduced-motion:reduce){.ck.ck-input.ck-error{animation:none}}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aAGC,2CAA4C,CAC5C,6CAA8C,CCT9C,eAAgB,CDchB,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DAkCD,CCjDC,iEAEC,qCAED,CDaA,uCAdD,aAeE,eA+BF,CA9BC,CAEA,mBEvBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YF2BA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BGnCD,oDHsCC,CAGD,sBAEC,sCAAuC,CADvC,+CAUD,CAPC,uCAJD,sBAKE,cAMF,CALC,CAEA,4BGjDD,iDHmDC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		@media (prefers-reduced-motion: reduce) {
			animation: none;
		}

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},7801:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const D=v},4962:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;top:0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}@media (prefers-reduced-motion:reduce){.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transition:none}}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eDmHD,CCjHC,2FAEC,qCAED,CDEA,mEACC,UAwCD,CAtCC,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAvBvB,KAAQ,CA4BR,+JAQD,CErDD,0FFoBG,MAAS,CAGT,6DAA+D,CAF/D,oBEnBH,CAFA,0FF2BG,OAAU,CAEV,sEAA0E,CAD1E,uBE1BH,CFgDE,uCAlCD,gFAmCE,eAEF,CADC,CASD,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CEtGA,2XF0FE,+HExFF,CAFA,2XF8FE,wIE5FF,CFyGA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},5199:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{background:var(--ck-color-list-background);border-radius:0;list-style-type:none;padding:var(--ck-spacing-small) 0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list__item{cursor:default;min-width:15em}.ck.ck-list__item>.ck-button:not(.ck-list-item-button){border-radius:0;min-height:unset;padding:var(--ck-spacing-tiny) calc(var(--ck-spacing-standard)*2);width:100%}[dir=ltr] .ck.ck-list__item>.ck-button:not(.ck-list-item-button){text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button:not(.ck-list-item-button){text-align:right}.ck.ck-list__item>.ck-button:not(.ck-list-item-button) .ck-button__label{line-height:calc(var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item>.ck-button:not(.ck-list-item-button):active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:not(.ck-list-item-button){background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:not(.ck-list-item-button):active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:not(.ck-list-item-button):hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:not(.ck-list-item-button):focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:not(.ck-list-item-button):hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-button.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-button.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium)}.ck-list .ck-list__group:first-child{padding-top:0}:not(.ck-hidden)~.ck-list .ck-list__group{border-top:1px solid var(--ck-color-base-border)}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large) 0}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;margin:var(--ck-spacing-small) 0;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,YAIC,0CAA2C,CCH3C,eAAgB,CDEhB,oBAAqB,CAIrB,iCACD,CCLC,+DAEC,qCAED,CDGD,kBACC,cAAe,CAGf,cA4DD,CA1DC,uDAIC,eAAgB,CAFhB,gBAAiB,CADjB,iEAAoE,CAEpE,UAwCD,CE/DA,iEF2BE,eEzBF,CAFA,iEF+BE,gBE7BF,CFgCC,yEAEC,qEACD,CAEA,8DACC,eACD,CAEA,6DACC,oDAAqD,CACrD,yCAaD,CAXC,oEACC,eACD,CAEA,qFACC,0DACD,CAEA,qFACC,4CACD,CAGD,+EACC,uDACD,CAMA,mDACC,0CAA2C,CAC3C,aAMD,CAJC,2EACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAiBD,CAdC,qCACC,aACD,CAGA,0CACC,gDACD,CAEA,mCACC,cAAe,CACf,eAAiB,CACjB,0DACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CAKX,gCAAiC,CAJjC,UAKD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);

	/* A spacing at the beginning and end of the list */
	padding: var(--ck-spacing-small) 0;
}

.ck.ck-list__item {
	cursor: default;

	/* Almost as wide as menu bar items. */
	min-width: 15em;

	& > .ck-button:not(.ck-list-item-button) {
		padding: var(--ck-spacing-tiny) calc(2 * var(--ck-spacing-standard));
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-button.ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* Lists come with an inner vertical padding. Don't duplicate it. */
	&:first-child {
		padding-top: 0;
	}

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) 0;
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);

	/* Give the separator some air */
	margin: var(--ck-spacing-small) 0;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},497:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const D=v},4:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const D=v},3344:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);margin-right:calc(var(--ck-spacing-small)*-1);transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small);transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECbD,kCDeC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eA+BD,CA7BC,qHACC,mCAuBD,CErFD,+HFoEG,sCAAuC,CAGvC,6CAAgD,CANhD,wBE/DH,CAFA,+HF6EG,+BAAgC,CAMhC,4CAA+C,CAH/C,oCAAqC,CALrC,uBEzEH,CFqFC,iICpFD,kCDsFC",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);

				/* Nudge the arrow gently to the right because its center of gravity is to the left */
				margin-right: calc(-1 * var(--ck-spacing-small));
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);

				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);

				/* Nudge the arrow gently to the left because its center of gravity is to the right (after rotation). */
				margin-left: calc(-1 * var(--ck-spacing-small));
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},9481:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const D=v},977:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{font-size:var(--ck-icon-font-size)}[dir=ltr] .ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAWC,iEACC,eAoBD,CAlBC,0LAGC,8BACD,CAEA,uFAEC,kCASD,CCzBD,iGDmBG,qCCjBH,CAFA,iGDuBG,oCCrBH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* This ensures margins corresponding to the .ck-icon. */
			font-size: var(--ck-icon-font-size);

			@mixin ck-dir ltr {
				margin-right: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				margin-left: var(--ck-spacing-medium);
			}
		}
	}
}


`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},9108:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);border-radius:0;bottom:0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{box-shadow:var(--ck-drop-shadow),0 0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}.ck.ck-menu-bar .ck-list-item-button:active,.ck.ck-menu-bar .ck-list-item-button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar.ck-menu-bar_focus-border-enabled .ck-list-item-button:active,.ck.ck-menu-bar.ck-menu-bar_focus-border-enabled .ck-list-item-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none;position:relative;z-index:2}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCnDD,MACC,uCACD,CAEA,mDAIC,oDAAqD,CACrD,sDAAuD,CCPvD,eAAgB,CDQhB,QAAS,CACT,kBAAmB,CACnB,iDA0BD,CClCC,6IAEC,qCAED,CDJD,mDEJC,oCFsCD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD,CAKC,uFAEC,wBAAyB,CACzB,eACD,CAIA,yJGhDD,2BAA2B,CDF3B,2CAA8B,CCC9B,YAAa,CHoDX,iBAAkB,CAClB,SAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}

.ck.ck-menu-bar {
	& .ck-list-item-button {
		&:focus,
		&:active {
			border-color: transparent;
			box-shadow: none;
		}
	}

	&.ck-menu-bar_focus-border-enabled .ck-list-item-button {
		&:focus,
		&:active {
			/* Fix truncated shadows due to rendering order. */
			position: relative;
			z-index: 2;

			@mixin ck-focus-ring;
			@mixin ck-box-shadow var(--ck-focus-outer-shadow);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`],sourceRoot:""}]);const D=v},3710:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);border-radius:0;min-height:15px}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBAMC,2CAA4C,CAC5C,wEAAyE,CCZzE,eAAgB,CDShB,eA0LD,CCjMC,iFAEC,qCAED,CDDD,qBEPC,oCFqMD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},991:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const D=v},5380:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},8298:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},2722:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-number,.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAoED,CAlEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA+CF,CA7CE,8CACC,wDAYD,CAVC,4HAEC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CC5DF,0ODmEG,aCjEH,CDmEG,+IACC,kDACD,CDrEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text,
			& .ck-input-number {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},8107:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-ui/theme/mixins/_dir.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CCfD,8FDSG,6BCPH,CAFA,8FDaG,8BCXH,CDeC,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CEhCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CD5DF,6FCkDI,8BDhDJ,CAFA,6FCsDI,6BDpDJ,CCuDG,yFACC,SACD,CAGD,2EACC,UAWD,CD1EF,oMCwEI,4DDtEJ,CC4EA,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-dir $direction {
	[dir="$(direction)"] & {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const D=v},109:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:ck-spinner-rotate 1.5s linear infinite;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@media (prefers-reduced-motion:reduce){.ck.ck-spinner-container{animation-duration:3s}}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent;height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}@keyframes ck-spinner-rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,gDAAiD,CADjD,qCAAsC,CADtC,oCAOD,CAHC,uCALD,yBAME,qBAEF,CADC,CAGD,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCAA6B,CAH7B,qCAAsC,CADtC,oCAKD,CAEA,6BACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite ck-spinner-rotate linear;

	@media (prefers-reduced-motion: reduce) {
		animation-duration: 3s;
	}
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes ck-spinner-rotate {
	to {
		transform: rotate(360deg)
	}
}
`],sourceRoot:""}]);const D=v},1671:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const D=v},2710:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const D=v},9677:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);border-radius:0;padding:0 var(--ck-spacing-small)}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar .ck.ck-toolbar__separator{background:var(--ck-color-toolbar-border);height:var(--ck-icon-size);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eAGC,6CAA8C,CAE9C,+CAAgD,CCFhD,eAAgB,CDChB,iCAuGD,CCtGC,qEAEC,qCAED,CDFA,yCAIC,yCAA0C,CAH1C,0BAA2B,CAU3B,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAEA,qCACC,QACD,CAaA,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		height: var(--ck-icon-size);
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	.ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},9205:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck.ck-balloon-panel.ck-tooltip{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;z-index:calc(var(--ck-z-dialog) + 100);--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);box-shadow:none;padding:0 var(--ck-spacing-medium)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAOA,gCCEC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CDFhB,sCAAyC,CEFzC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAkB/D,eAAgB,CAhBhB,kCFJD,CEMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CAMA,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-balloon-panel.ck-tooltip {
	@mixin ck-unselectable;

	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const D=v},7676:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck-hidden{display:none!important}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{background:transparent;border:0;box-sizing:border-box;height:auto;margin:0;padding:0;position:static;text-decoration:none;transition:none;vertical-align:middle;width:auto;word-wrap:break-word}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAYC,sBAAuB,CADvB,QAAS,CART,qBAAsB,CAEtB,WAAY,CAIZ,QAAS,CACT,SAAU,CAJV,eAAgB,CAOhB,oBAAqB,CAErB,eAAgB,CADhB,qBAAsB,CAVtB,UAAW,CAcX,oBACD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCxFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;

	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const D=v},695:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget{transition:none}}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{box-shadow:var(--ck-inner-shadow),0 0}@media (forced-colors:none){.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background)}}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused:not(td,th),.ck .ck-editor__nested-editable:focus:not(td,th){border:var(--ck-focus-ring);outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}@media (prefers-reduced-motion:reduce){.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{transition:none}}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-ui/theme/mixins/_mediacolors.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CChFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAcD,CAZC,uCAND,eAOE,eAWF,CAVC,CAEA,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAoBD,CAhBC,yGCrCA,qCDoDA,CE/CA,4BACC,yGFmCC,iEEjCD,CACD,CFwCC,+HG/CD,2BAA2B,CAD3B,YHkDC,CAKD,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAwCD,CA3BC,uCAzBD,4EA0BE,eA0BF,CAzBC,CAEA,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAeD,CAVC,kHACC,SAAU,CAGV,+DAKD,CAHC,uCAND,kHAOE,eAEF,CADC,CAKF,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_mediacolors.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	@media (prefers-reduced-motion: reduce) {
		transition: none;
	}

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-box-shadow var(--ck-inner-shadow);
		@mixin ck-media-default-colors {
			background-color: var(--ck-color-widget-editable-focus-background);
		}

		/**
		 * Focus border should not be applied to table cells because it overrides the default table cell border color.
		 * In other words - in some scenarios, the part of the table cell border has focus color style, which is not expected behavior
		 * because it should be the same as the table cell border color.
		 */
		&:not(td, th) {
			@mixin ck-focus-ring;
		}
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);

				@media (prefers-reduced-motion: reduce) {
					transition: none;
				}
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-forced-colors {
	@media (forced-colors: active) {
		& {
			@mixin-content;
		}
	}
}

@define-mixin ck-media-default-colors {
	@media (forced-colors: none) {
		& {
			@mixin-content;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`],sourceRoot:""}]);const D=v},4095:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const D=v},8508:(w,A,f)=>{f.d(A,{A:()=>D});var E=f(2001),I=f.n(E),S=f(935),v=f.n(S)()(I());v.push([w.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button svg{transition:none}}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}@media (prefers-reduced-motion:reduce){.ck .ck-widget .ck-widget__type-around__button:hover,.ck .ck-widget .ck-widget__type-around__button:hover svg line,.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:none}}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAwED,CAhEC,uCATD,+CAUE,eA+DF,CA9DC,CAEA,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAwBD,CAlBC,uCAPD,mDAQE,eAiBF,CAhBC,CAEA,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DA4BD,CAtBE,kEACC,oDACD,CAEA,8DACC,wDACD,CAGD,uCAQE,qLACC,cACD,CAEF,CASD,uKA7FD,SAAU,CACV,mBA8FC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAxKD,SAAU,CACV,mBAyKC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAxNF,SAAU,CACV,mBAyNE,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			@media (prefers-reduced-motion: reduce) {
				transition: none;
			}

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}

			@media (prefers-reduced-motion: reduce) {
				animation: none;

				& svg {
					& polyline {
						animation: none;
					}

					& line {
						animation: none;
					}
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const D=v},935:w=>{w.exports=function(A){var f=[];return f.toString=function(){return this.map(function(E){var I="",S=E[5]!==void 0;return E[4]&&(I+="@supports (".concat(E[4],") {")),E[2]&&(I+="@media ".concat(E[2]," {")),S&&(I+="@layer".concat(E[5].length>0?" ".concat(E[5]):""," {")),I+=A(E),S&&(I+="}"),E[2]&&(I+="}"),E[4]&&(I+="}"),I}).join("")},f.i=function(E,I,S,v,D){typeof E=="string"&&(E=[[null,E,void 0]]);var B={};if(S)for(var N=0;N<this.length;N++){var L=this[N][0];L!=null&&(B[L]=!0)}for(var j=0;j<E.length;j++){var F=[].concat(E[j]);S&&B[F[0]]||(D!==void 0&&(F[5]===void 0||(F[1]="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {").concat(F[1],"}")),F[5]=D),I&&(F[2]&&(F[1]="@media ".concat(F[2]," {").concat(F[1],"}")),F[2]=I),v&&(F[4]?(F[1]="@supports (".concat(F[4],") {").concat(F[1],"}"),F[4]=v):F[4]="".concat(v)),f.push(F))}},f}},62:w=>{w.exports=function(A,f){return f||(f={}),A&&(A=String(A.__esModule?A.default:A),/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),f.hash&&(A+=f.hash),/["'() \t\n]|(%20)/.test(A)||f.needQuotes?'"'.concat(A.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):A)}},2001:w=>{w.exports=function(A){var f=A[1],E=A[3];if(!E)return f;if(typeof btoa=="function"){var I=btoa(unescape(encodeURIComponent(JSON.stringify(E)))),S="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(I),v="/*# ".concat(S," */");return[f].concat([v]).join(`
`)}return[f].join(`
`)}},2591:w=>{var A=[];function f(S){for(var v=-1,D=0;D<A.length;D++)if(A[D].identifier===S){v=D;break}return v}function E(S,v){for(var D={},B=[],N=0;N<S.length;N++){var L=S[N],j=v.base?L[0]+v.base:L[0],F=D[j]||0,W="".concat(j," ").concat(F);D[j]=F+1;var it=f(W),dt={css:L[1],media:L[2],sourceMap:L[3],supports:L[4],layer:L[5]};if(it!==-1)A[it].references++,A[it].updater(dt);else{var ct=I(dt,v);v.byIndex=N,A.splice(N,0,{identifier:W,updater:ct,references:1})}B.push(W)}return B}function I(S,v){var D=v.domAPI(v);return D.update(S),function(B){if(B){if(B.css===S.css&&B.media===S.media&&B.sourceMap===S.sourceMap&&B.supports===S.supports&&B.layer===S.layer)return;D.update(S=B)}else D.remove()}}w.exports=function(S,v){var D=E(S=S||[],v=v||{});return function(B){B=B||[];for(var N=0;N<D.length;N++){var L=f(D[N]);A[L].references--}for(var j=E(B,v),F=0;F<D.length;F++){var W=f(D[F]);A[W].references===0&&(A[W].updater(),A.splice(W,1))}D=j}}},8128:w=>{var A={};w.exports=function(f,E){var I=function(S){if(A[S]===void 0){var v=document.querySelector(S);if(window.HTMLIFrameElement&&v instanceof window.HTMLIFrameElement)try{v=v.contentDocument.head}catch{v=null}A[S]=v}return A[S]}(f);if(!I)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");I.appendChild(E)}},3051:w=>{w.exports=function(A){var f=document.createElement("style");return A.setAttributes(f,A.attributes),A.insert(f,A.options),f}},8021:w=>{w.exports=function(A,f){Object.keys(f).forEach(function(E){A.setAttribute(E,f[E])})}},8639:w=>{var A,f=(A=[],function(S,v){return A[S]=v,A.filter(Boolean).join(`
`)});function E(S,v,D,B){var N;if(D)N="";else{N="",B.supports&&(N+="@supports (".concat(B.supports,") {")),B.media&&(N+="@media ".concat(B.media," {"));var L=B.layer!==void 0;L&&(N+="@layer".concat(B.layer.length>0?" ".concat(B.layer):""," {")),N+=B.css,L&&(N+="}"),B.media&&(N+="}"),B.supports&&(N+="}")}if(S.styleSheet)S.styleSheet.cssText=f(v,N);else{var j=document.createTextNode(N),F=S.childNodes;F[v]&&S.removeChild(F[v]),F.length?S.insertBefore(j,F[v]):S.appendChild(j)}}var I={singleton:null,singletonCounter:0};w.exports=function(S){if(typeof document>"u")return{update:function(){},remove:function(){}};var v=I.singletonCounter++,D=I.singleton||(I.singleton=S.insertStyleElement(S));return{update:function(B){E(D,v,!1,B)},remove:function(B){E(D,v,!0,B)}}}},4782:w=>{w.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzUuNzUgMCAwIDEtLjIxNy4yMDYgNS4yNTEgNS4yNTEgMCAwIDEtOC41MDMtNS45NTUuNy43IDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NHptNS40OTQtNS4zMzVhLjc1Ljc1IDAgMCAxLS4xMi4yNzRsLTEuMTQ3IDEuNjM5YS43NS43NSAwIDEgMS0xLjIyOC0uODZsLjg2LTEuMjNhMy43NSAzLjc1IDAgMCAwLTYuMTQ0LTQuMzAxbC0uODYgMS4yMjlhLjc1Ljc1IDAgMCAxLTEuMjI5LS44NmwxLjE0OC0xLjY0YS43NS43NSAwIDAgMSAuMjE3LS4yMDYgNS4yNTEgNS4yNTEgMCAwIDEgOC41MDMgNS45NTVtLTQuNTYzLTIuNTMyYS43NS43NSAwIDAgMSAuMTg0IDEuMDQ1bC0zLjE1NSA0LjUwNWEuNzUuNzUgMCAxIDEtMS4yMjktLjg2bDMuMTU1LTQuNTA2YS43NS43NSAwIDAgMSAxLjA0NS0uMTg0Ii8+PC9zdmc+"},9736:w=>{w.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjx0aXRsZT5GaWxsIDE8L3RpdGxlPjxwYXRoIGZpbGw9IiNGRkZGRkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTk2Ny40ODQgMEg1Ni41MTdDMjUuMzA0IDAgMCAyNS4zMDQgMCA1Ni41MTd2OTEwLjk2NkMwIDk5OC42OTQgMjUuMjk3IDEwMjQgNTYuNTIyIDEwMjRINTQ3VjYyOEg0MTRWNDczaDEzM1YzNTkuMDI5YzAtMTMyLjI2MiA4MC43NzMtMjA0LjI4MiAxOTguNzU2LTIwNC4yODIgNTYuNTEzIDAgMTA1LjA4NiA0LjIwOCAxMTkuMjQ0IDYuMDg5VjI5OWwtODEuNjE2LjAzN2MtNjMuOTkzIDAtNzYuMzg0IDMwLjQ5Mi03Ni4zODQgNzUuMjM2VjQ3M2gxNTMuNDg3bC0xOS45ODYgMTU1SDcwN3YzOTZoMjYwLjQ4NGMzMS4yMTMgMCA1Ni41MTYtMjUuMzAzIDU2LjUxNi01Ni41MTZWNTYuNTE1QzEwMjQgMjUuMzAzIDk5OC42OTcgMCA5NjcuNDg0IDAiLz48L3N2Zz4="},657:w=>{w.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSlzY2FsZSguOTgwMTIpIj48cmVjdCB3aWR0aD0iNjAuMDk5IiBoZWlnaHQ9IjYwLjA5OSIgeD0iMTc2LjAzMSIgeT0iMjMxLjM5OSIgZmlsbD0iIzM0YTY2OCIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjIzOCIgcnk9IjUuMjM4Ii8+PHBhdGggZmlsbD0iIzVjODhjNSIgZD0ibTIwNi40NzcgMjYwLjktMjguOTg3IDI4Ljk4N2E1LjIyIDUuMjIgMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiLz48cGF0aCBmaWxsPSIjZGQ0YjNlIiBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwN3EuNS43NTMuOTUgMS41MDguNTE1LjcxNS45ODggMS40NGMxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5cS40NzMtLjcyMy45ODgtMS40MzkuNDUtLjc1NS45NS0xLjUwOGMuMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIGN4PSIyMjYuNzQyIiBjeT0iMjM5LjAwMiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiIHJ4PSI1LjgyOCIgcnk9IjUuNTY0Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjlxLS4wMDEtLjU0My0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhxLS4wMDEtLjAwMy0uMDA0LS4wMDVjLTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTVtNC40MyA1LjY2LjAwMy4wMDZ2LS4wMDN6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGZpbGw9IiNjM2MzYzMiIGQ9Im0yMTUuMTg0IDI1MS45MjktNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMiA1LjIgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjl6Ii8+PHBhdGggZmlsbD0iI2ZkZGM0ZiIgZD0ibTIxMi45ODMgMjQ4LjQ5NS0zNi45NTIgMzYuOTUzdi44MTJhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYgMTM2IDAgMCAwLTIuNzY0LTMuOSAzOCAzOCAwIDAgMC0uOTg5LTEuNDQgMzUgMzUgMCAwIDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4="},7784:w=>{w.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwME0xNjMuNCAzMDUuNWM4OC43IDAgMTM3LjItNzMuNSAxMzcuMi0xMzcuMiAwLTIuMSAwLTQuMi0uMS02LjIgOS40LTYuOCAxNy42LTE1LjMgMjQuMS0yNS04LjYgMy44LTE3LjkgNi40LTI3LjcgNy42IDEwLTYgMTcuNi0xNS40IDIxLjItMjYuNy05LjMgNS41LTE5LjYgOS41LTMwLjYgMTEuNy04LjgtOS40LTIxLjMtMTUuMi0zNS4yLTE1LjItMjYuNiAwLTQ4LjIgMjEuNi00OC4yIDQ4LjIgMCAzLjguNCA3LjUgMS4zIDExLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40LTQuMSA3LjEtNi41IDE1LjQtNi41IDI0LjIgMCAxNi43IDguNSAzMS41IDIxLjUgNDAuMS03LjktLjItMTUuMy0yLjQtMjEuOC02di42YzAgMjMuNCAxNi42IDQyLjggMzguNyA0Ny4zLTQgMS4xLTguMyAxLjctMTIuNyAxLjctMy4xIDAtNi4xLS4zLTkuMS0uOSA2LjEgMTkuMiAyMy45IDMzLjEgNDUgMzMuNS0xNi41IDEyLjktMzcuMyAyMC42LTU5LjkgMjAuNi0zLjkgMC03LjctLjItMTEuNS0uNyAyMS4xIDEzLjggNDYuNSAyMS44IDczLjcgMjEuOCIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg=="},6341:w=>{w.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgdmlld0JveD0iMCAwIDUwNCA1MDQiPjx0aXRsZT5nbHlwaC1sb2dvX01heTIwMTY8L3RpdGxlPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAuMTU5aDUwMy44NDFWNTAzLjk0SDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI1MS45MjEuMTU5Yy02OC40MTggMC03Ni45OTcuMjktMTAzLjg2NyAxLjUxNi0yNi44MTQgMS4yMjMtNDUuMTI3IDUuNDgyLTYxLjE1MSAxMS43MS0xNi41NjYgNi40MzctMzAuNjE1IDE1LjA1MS00NC42MjEgMjkuMDU2LTE0LjAwNSAxNC4wMDYtMjIuNjE5IDI4LjA1NS0yOS4wNTYgNDQuNjIxLTYuMjI4IDE2LjAyNC0xMC40ODcgMzQuMzM3LTExLjcxIDYxLjE1MUMuMjkgMTc1LjA4MyAwIDE4My42NjIgMCAyNTIuMDhjMCA2OC40MTcuMjkgNzYuOTk2IDEuNTE2IDEwMy44NjYgMS4yMjMgMjYuODE0IDUuNDgyIDQ1LjEyNyAxMS43MSA2MS4xNTEgNi40MzcgMTYuNTY2IDE1LjA1MSAzMC42MTUgMjkuMDU2IDQ0LjYyMSAxNC4wMDYgMTQuMDA1IDI4LjA1NSAyMi42MTkgNDQuNjIxIDI5LjA1NyAxNi4wMjQgNi4yMjcgMzQuMzM3IDEwLjQ4NiA2MS4xNTEgMTEuNzA5IDI2Ljg3IDEuMjI2IDM1LjQ0OSAxLjUxNiAxMDMuODY3IDEuNTE2IDY4LjQxNyAwIDc2Ljk5Ni0uMjkgMTAzLjg2Ni0xLjUxNiAyNi44MTQtMS4yMjMgNDUuMTI3LTUuNDgyIDYxLjE1MS0xMS43MDkgMTYuNTY2LTYuNDM4IDMwLjYxNS0xNS4wNTIgNDQuNjIxLTI5LjA1NyAxNC4wMDUtMTQuMDA2IDIyLjYxOS0yOC4wNTUgMjkuMDU3LTQ0LjYyMSA2LjIyNy0xNi4wMjQgMTAuNDg2LTM0LjMzNyAxMS43MDktNjEuMTUxIDEuMjI2LTI2Ljg3IDEuNTE2LTM1LjQ0OSAxLjUxNi0xMDMuODY2IDAtNjguNDE4LS4yOS03Ni45OTctMS41MTYtMTAzLjg2Ny0xLjIyMy0yNi44MTQtNS40ODItNDUuMTI3LTExLjcwOS02MS4xNTEtNi40MzgtMTYuNTY2LTE1LjA1Mi0zMC42MTUtMjkuMDU3LTQ0LjYyMS0xNC4wMDYtMTQuMDA1LTI4LjA1NS0yMi42MTktNDQuNjIxLTI5LjA1Ni0xNi4wMjQtNi4yMjgtMzQuMzM3LTEwLjQ4Ny02MS4xNTEtMTEuNzFDMzI4LjkxNy40NDkgMzIwLjMzOC4xNTkgMjUxLjkyMS4xNTltMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1czE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NmMzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjZzLTE3LjIwNyAxNC4yNzUtMjguOTY2IDE4Ljg0NWMtOC44NzcgMy40NS0yMi4yMTYgNy41NTQtNDYuNzc4IDguNjc0LTI2LjU2IDEuMjEyLTM0LjUyNyAxLjQ2OS0xMDEuNzk3IDEuNDY5LTY3LjI3MSAwLTc1LjIzNy0uMjU3LTEwMS43OTgtMS40NjktMjQuNTYyLTEuMTItMzcuOTAxLTUuMjI0LTQ2Ljc3OC04LjY3NC0xMS43NTktNC41Ny0yMC4xNTEtMTAuMDI5LTI4Ljk2Ni0xOC44NDVzLTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2NmMtMy40NS04Ljg3Ny03LjU1NC0yMi4yMTYtOC42NzQtNDYuNzc4LTEuMjEyLTI2LjU2NC0xLjQ2OS0zNC41MzItMS40NjktMTAxLjc5NyAwLTY3LjI2Ni4yNTctNzUuMjM0IDEuNDY5LTEwMS43OTggMS4xMi0yNC41NjIgNS4yMjQtMzcuOTAxIDguNjc0LTQ2Ljc3OCA0LjU3LTExLjc1OSAxMC4wMjktMjAuMTUxIDE4Ljg0NS0yOC45NjZzMTcuMjA3LTE0LjI3NSAyOC45NjYtMTguODQ1YzguODc3LTMuNDUgMjIuMjE2LTcuNTU0IDQ2Ljc3OC04LjY3NCAyNi41NjQtMS4yMTIgMzQuNTMyLTEuNDY5IDEwMS43OTgtMS40NjkiIG1hc2s9InVybCgjYikiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzNzMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0YzQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNtMC0yMTMuMzM4Yy03MS40NDcgMC0xMjkuMzY1IDU3LjkxOC0xMjkuMzY1IDEyOS4zNjUgMCA3MS40NDYgNTcuOTE4IDEyOS4zNjQgMTI5LjM2NSAxMjkuMzY0IDcxLjQ0NiAwIDEyOS4zNjQtNTcuOTE4IDEyOS4zNjQtMTI5LjM2NCAwLTcxLjQ0Ny01Ny45MTgtMTI5LjM2NS0xMjkuMzY0LTEyOS4zNjVNNDE2LjYyNyAxMTcuNjA0YzAgMTYuNjk2LTEzLjUzNSAzMC4yMy0zMC4yMzEgMzAuMjMtMTYuNjk1IDAtMzAuMjMtMTMuNTM0LTMwLjIzLTMwLjIzczEzLjUzNS0zMC4yMzEgMzAuMjMtMzAuMjMxYzE2LjY5NiAwIDMwLjIzMSAxMy41MzUgMzAuMjMxIDMwLjIzMSIvPjwvZz48L3N2Zz4="}},g={};function k(w){var A=g[w];if(A!==void 0)return A.exports;var f=g[w]={id:w,exports:{}};return p[w](f,f.exports,k),f.exports}k.m=p,k.n=w=>{var A=w&&w.__esModule?()=>w.default:()=>w;return k.d(A,{a:A}),A},k.d=(w,A)=>{for(var f in A)k.o(A,f)&&!k.o(w,f)&&Object.defineProperty(w,f,{enumerable:!0,get:A[f]})},k.o=(w,A)=>Object.prototype.hasOwnProperty.call(w,A),k.b=document.baseURI||self.location.href;var y={};return(()=>{let w;k.d(y,{default:()=>sg});try{w={window,document}}catch{w={window:{},document:{}}}const A=w;function f(){try{return navigator.userAgent.toLowerCase()}catch{return""}}const E=f(),I={isMac:S(E),isWindows:v(E),isGecko:D(E),isSafari:B(E),isiOS:N(E),isAndroid:L(E),isBlink:j(E),get isMediaForcedColors(){return!!A.window.matchMedia&&A.window.matchMedia("(forced-colors: active)").matches},get isMotionReduced(){return!!A.window.matchMedia&&A.window.matchMedia("(prefers-reduced-motion)").matches},features:{isRegExpUnicodePropertySupported:F()}};function S(o){return o.indexOf("macintosh")>-1}function v(o){return o.indexOf("windows")>-1}function D(o){return!!o.match(/gecko\/\d+/)}function B(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}function N(o){return!!o.match(/iphone|ipad/i)||S(o)&&navigator.maxTouchPoints>0}function L(o){return o.indexOf("android")>-1}function j(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}function F(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}function W(o,t,e,n){e=e||function(c,l){return c===l};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),r=Array.isArray(t)?t:Array.prototype.slice.call(t),s=function(c,l,h){const m=it(c,l,h);if(m===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const b=dt(c,m),_=dt(l,m),C=it(b,_,h),x=c.length-C,M=l.length-C;return{firstIndex:m,lastIndexOld:x,lastIndexNew:M}}(i,r,e);return n?function(c,l){const{firstIndex:h,lastIndexOld:m,lastIndexNew:b}=c;if(h===-1)return Array(l).fill("equal");let _=[];return h>0&&(_=_.concat(Array(h).fill("equal"))),b-h>0&&(_=_.concat(Array(b-h).fill("insert"))),m-h>0&&(_=_.concat(Array(m-h).fill("delete"))),b<l&&(_=_.concat(Array(l-b).fill("equal"))),_}(s,r.length):function(c,l){const h=[],{firstIndex:m,lastIndexOld:b,lastIndexNew:_}=l;return _-m>0&&h.push({index:m,type:"insert",values:c.slice(m,_)}),b-m>0&&h.push({index:m+(_-m),type:"delete",howMany:b-m}),h}(r,s)}function it(o,t,e){for(let n=0;n<Math.max(o.length,t.length);n++)if(o[n]===void 0||t[n]===void 0||!e(o[n],t[n]))return n;return-1}function dt(o,t){return o.slice(t).reverse()}function ct(o,t,e){e=e||function(x,M){return x===M};const n=o.length,i=t.length;if(n>200||i>200||n+i>300)return ct.fastDiff(o,t,e,!0);let r,s;if(i<n){const x=o;o=t,t=x,r="delete",s="insert"}else r="insert",s="delete";const a=o.length,c=t.length,l=c-a,h={},m={};function b(x){const M=(m[x-1]!==void 0?m[x-1]:-1)+1,T=m[x+1]!==void 0?m[x+1]:-1,O=M>T?-1:1;h[x+O]&&(h[x]=h[x+O].slice(0)),h[x]||(h[x]=[]),h[x].push(M>T?r:s);let z=Math.max(M,T),V=z-x;for(;V<a&&z<c&&e(o[V],t[z]);)V++,z++,h[x].push("equal");return z}let _,C=0;do{for(_=-C;_<l;_++)m[_]=b(_);for(_=l+C;_>l;_--)m[_]=b(_);m[l]=b(l),C++}while(m[l]!==c);return h[l].slice(1)}ct.fastDiff=W;const At=function(){return function o(){o.called=!0}};class St{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=At(),this.off=At()}}const Vt=new Array(256).fill("").map((o,t)=>("0"+t.toString(16)).slice(-2));function se(){const[o,t,e,n]=crypto.getRandomValues(new Uint32Array(4));return"e"+Vt[255&o]+Vt[o>>8&255]+Vt[o>>16&255]+Vt[o>>24&255]+Vt[255&t]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+Vt[255&e]+Vt[e>>8&255]+Vt[e>>16&255]+Vt[e>>24&255]+Vt[255&n]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]}const Ye={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function wo(o,t){const e=Ye.get(t.priority);for(let n=0;n<o.length;n++)if(Ye.get(o[n].priority)<e)return void o.splice(n,0,t);o.push(t)}class P extends Error{constructor(t,e,n){super(function(i,r){const s=new WeakSet,a=(h,m)=>{if(typeof m=="object"&&m!==null){if(s.has(m))return`[object ${m.constructor.name}]`;s.add(m)}return m},c=r?` ${JSON.stringify(r,a)}`:"",l=tt(i);return i+c+l}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new P(t.message,e);throw n.stack=t.stack,n}}function G(o,t){console.warn(...ot(o,t))}function q(o,t){console.error(...ot(o,t))}function tt(o){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${o}`}function ot(o,t){const e=tt(o);return t?[o,t,e]:[o,e]}const ht="43.3.1",wt=new Date(2024,10,6);if(globalThis.CKEDITOR_VERSION)throw new P("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=ht;const _t=Symbol("listeningTo"),Tt=Symbol("emitterId"),It=Symbol("delegations"),Ce=yt(Object);function yt(o){return o?class extends o{on(t,e,n){this.listenTo(this,t,e,n)}once(t,e,n){let i=!1;this.listenTo(this,t,(r,...s)=>{i||(i=!0,r.off(),e.call(this,r,...s))},n)}off(t,e){this.stopListening(this,t,e)}listenTo(t,e,n,i={}){let r,s;this[_t]||(this[_t]={});const a=this[_t];yi(t)||Zn(t);const c=yi(t);(r=a[c])||(r=a[c]={emitter:t,callbacks:{}}),(s=r.callbacks[e])||(s=r.callbacks[e]=[]),s.push(n),function(l,h,m,b,_){h._addEventListener?h._addEventListener(m,b,_):l._addEventListener.call(h,m,b,_)}(this,t,e,n,i)}stopListening(t,e,n){const i=this[_t];let r=t&&yi(t);const s=i&&r?i[r]:void 0,a=s&&e?s.callbacks[e]:void 0;if(!(!i||t&&!s||e&&!a))if(n)Co(this,t,e,n),a.indexOf(n)!==-1&&(a.length===1?delete s.callbacks[e]:Co(this,t,e,n));else if(a){for(;n=a.pop();)Co(this,t,e,n);delete s.callbacks[e]}else if(s){for(e in s.callbacks)this.stopListening(t,e);delete i[r]}else{for(r in i)this.stopListening(i[r].emitter);delete this[_t]}}fire(t,...e){try{const n=t instanceof St?t:new St(this,t),i=n.name;let r=pa(this,i);if(n.path.push(this),r){const a=[n,...e];r=Array.from(r);for(let c=0;c<r.length&&(r[c].callback.apply(this,a),n.off.called&&(delete n.off.called,this._removeEventListener(i,r[c].callback)),!n.stop.called);c++);}const s=this[It];if(s){const a=s.get(i),c=s.get("*");a&&_o(a,n,e),c&&_o(c,n,e)}return n.return}catch(n){P.rethrowUnexpectedError(n,this)}}delegate(...t){return{to:(e,n)=>{this[It]||(this[It]=new Map),t.forEach(i=>{const r=this[It].get(i);r?r.set(e,n):this[It].set(i,new Map([[e,n]]))})}}}stopDelegating(t,e){if(this[It])if(t)if(e){const n=this[It].get(t);n&&n.delete(e)}else this[It].delete(t);else this[It].clear()}_addEventListener(t,e,n){(function(s,a){const c=ma(s);if(c[a])return;let l=a,h=null;const m=[];for(;l!==""&&!c[l];)c[l]={callbacks:[],childEvents:[]},m.push(c[l]),h&&c[l].childEvents.push(h),h=l,l=l.substr(0,l.lastIndexOf(":"));if(l!==""){for(const b of m)b.callbacks=c[l].callbacks.slice();c[l].childEvents.push(h)}})(this,t);const i=Ao(this,t),r={callback:e,priority:Ye.get(n.priority)};for(const s of i)wo(s,r)}_removeEventListener(t,e){const n=Ao(this,t);for(const i of n)for(let r=0;r<i.length;r++)i[r].callback==e&&(i.splice(r,1),r--)}}:Ce}function Zn(o,t){o[Tt]||(o[Tt]=t||se())}function yi(o){return o[Tt]}function ma(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function Ao(o,t){const e=ma(o)[t];if(!e)return[];let n=[e.callbacks];for(let i=0;i<e.childEvents.length;i++){const r=Ao(o,e.childEvents[i]);n=n.concat(r)}return n}function pa(o,t){let e;return o._events&&(e=o._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?pa(o,t.substr(0,t.lastIndexOf(":"))):null}function _o(o,t,e){for(let[n,i]of o){i?typeof i=="function"&&(i=i(t.name)):i=t.name;const r=new St(t.source,i);r.path=[...t.path],n.fire(r,...e)}}function Co(o,t,e,n){t._removeEventListener?t._removeEventListener(e,n):o._removeEventListener.call(t,e,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{yt[o]=Ce.prototype[o]});const Lt=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")},xi=Symbol("observableProperties"),Ei=Symbol("boundObservables"),Di=Symbol("boundProperties"),Dn=Symbol("decoratedMethods"),st=Symbol("decoratedOriginal"),Kt=nt(yt());function nt(o){var t;if(!o)return Kt;class e extends(t=o,t){set(i,r){if(Lt(i))return void Object.keys(i).forEach(a=>{this.set(a,i[a])},this);ft(this);const s=this[xi];if(i in this&&!s.has(i))throw new P("observable-set-cannot-override",this);Object.defineProperty(this,i,{enumerable:!0,configurable:!0,get:()=>s.get(i),set(a){const c=s.get(i);let l=this.fire(`set:${i}`,i,a,c);l===void 0&&(l=a),c===l&&s.has(i)||(s.set(i,l),this.fire(`change:${i}`,i,l,c))}}),this[i]=r}bind(...i){if(!i.length||!xt(i))throw new P("observable-bind-wrong-properties",this);if(new Set(i).size!==i.length)throw new P("observable-bind-duplicate-properties",this);ft(this);const r=this[Di];i.forEach(a=>{if(r.has(a))throw new P("observable-bind-rebind",this)});const s=new Map;return i.forEach(a=>{const c={property:a,to:[]};r.set(a,c),s.set(a,c)}),{to:Bt,toMany:Ct,_observable:this,_bindProperties:i,_to:[],_bindings:s}}unbind(...i){if(!this[xi])return;const r=this[Di],s=this[Ei];if(i.length){if(!xt(i))throw new P("observable-unbind-wrong-properties",this);i.forEach(a=>{const c=r.get(a);c&&(c.to.forEach(([l,h])=>{const m=s.get(l),b=m[h];b.delete(c),b.size||delete m[h],Object.keys(m).length||(s.delete(l),this.stopListening(l,"change"))}),r.delete(a))})}else s.forEach((a,c)=>{this.stopListening(c,"change")}),s.clear(),r.clear()}decorate(i){ft(this);const r=this[i];if(!r)throw new P("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:i});this.on(i,(s,a)=>{s.return=r.apply(this,a)}),this[i]=function(...s){return this.fire(i,s)},this[i][st]=r,this[Dn]||(this[Dn]=[]),this[Dn].push(i)}stopListening(i,r,s){if(!i&&this[Dn]){for(const a of this[Dn])this[a]=this[a][st];delete this[Dn]}super.stopListening(i,r,s)}}return e}function ft(o){o[xi]||(Object.defineProperty(o,xi,{value:new Map}),Object.defineProperty(o,Ei,{value:new Map}),Object.defineProperty(o,Di,{value:new Map}))}function Bt(...o){const t=function(...r){if(!r.length)throw new P("observable-bind-to-parse-error",null);const s={to:[]};let a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(c=>{if(typeof c=="string")a.properties.push(c);else{if(typeof c!="object")throw new P("observable-bind-to-parse-error",null);a={observable:c,properties:[]},s.to.push(a)}}),s}(...o),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new P("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new P("observable-bind-to-extra-callback",this);var i;t.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new P("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),i=this._observable,this._to.forEach(r=>{const s=i[Ei];let a;s.get(r.observable)||i.listenTo(r.observable,"change",(c,l)=>{a=s.get(r.observable)[l],a&&a.forEach(h=>{ye(i,h.property)})})}),function(r){let s;r._bindings.forEach((a,c)=>{r._to.forEach(l=>{s=l.properties[a.callback?0:r._bindProperties.indexOf(c)],a.to.push([l.observable,s]),function(h,m,b,_){const C=h[Ei],x=C.get(b),M=x||{};M[_]||(M[_]=new Set),M[_].add(m),x||C.set(b,M)}(r._observable,a,l.observable,s)})})}(this),this._bindProperties.forEach(r=>{ye(this._observable,r)})}function Ct(o,t,e){if(this._bindings.size>1)throw new P("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const r=n.map(s=>[s,i]);return Array.prototype.concat.apply([],r)}(o,t),e)}function xt(o){return o.every(t=>typeof t=="string")}function ye(o,t){const e=o[Di].get(t);let n;e.callback?n=e.callback.apply(o,e.to.map(i=>i[0][i[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,t)?o[t]=n:o.set(t,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{nt[o]=Kt.prototype[o]});class fa{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}function vo(o){let t=0;for(const e of o)t++;return t}function ke(o,t){const e=Math.min(o.length,t.length);for(let n=0;n<e;n++)if(o[n]!=t[n])return n;return o.length==t.length?"same":o.length<t.length?"prefix":"extension"}function xe(o){return!(!o||!o[Symbol.iterator])}const ka=typeof Ed=="object"&&Ed&&Ed.Object===Object&&Ed;var ee=typeof self=="object"&&self&&self.Object===Object&&self;const ne=ka||ee||Function("return this")(),he=ne.Symbol;var Jn=Object.prototype,yo=Jn.hasOwnProperty,fC=Jn.toString,xo=he?he.toStringTag:void 0;const kC=function(o){var t=yo.call(o,xo),e=o[xo];try{o[xo]=void 0;var n=!0}catch{}var i=fC.call(o);return n&&(t?o[xo]=e:delete o[xo]),i};var bC=Object.prototype.toString;const wC=function(o){return bC.call(o)};var mm=he?he.toStringTag:void 0;const Sn=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":mm&&mm in Object(o)?kC(o):wC(o)},Te=Array.isArray,Ve=function(o){return o!=null&&typeof o=="object"},pm=function(o){return typeof o=="string"||!Te(o)&&Ve(o)&&Sn(o)=="[object String]"};function He(o,t,e={},n=[]){const i=e&&e.xmlns,r=i?o.createElementNS(i,t):o.createElement(t);for(const s in e)r.setAttribute(s,e[s]);!pm(n)&&xe(n)||(n=[n]);for(let s of n)pm(s)&&(s=o.createTextNode(s)),r.appendChild(s);return r}const fm=function(o,t){return function(e){return o(t(e))}},nu=fm(Object.getPrototypeOf,Object);var AC=Function.prototype,_C=Object.prototype,km=AC.toString,CC=_C.hasOwnProperty,vC=km.call(Object);const Be=function(o){if(!Ve(o)||Sn(o)!="[object Object]")return!1;var t=nu(o);if(t===null)return!0;var e=CC.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&km.call(e)==vC},yC=function(){this.__data__=[],this.size=0},Eo=function(o,t){return o===t||o!=o&&t!=t},ba=function(o,t){for(var e=o.length;e--;)if(Eo(o[e][0],t))return e;return-1};var xC=Array.prototype.splice;const EC=function(o){var t=this.__data__,e=ba(t,o);return!(e<0)&&(e==t.length-1?t.pop():xC.call(t,e,1),--this.size,!0)},DC=function(o){var t=this.__data__,e=ba(t,o);return e<0?void 0:t[e][1]},SC=function(o){return ba(this.__data__,o)>-1},IC=function(o,t){var e=this.__data__,n=ba(e,o);return n<0?(++this.size,e.push([o,t])):e[n][1]=t,this};function Si(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}Si.prototype.clear=yC,Si.prototype.delete=EC,Si.prototype.get=DC,Si.prototype.has=SC,Si.prototype.set=IC;const wa=Si,MC=function(){this.__data__=new wa,this.size=0},TC=function(o){var t=this.__data__,e=t.delete(o);return this.size=t.size,e},BC=function(o){return this.__data__.get(o)},PC=function(o){return this.__data__.has(o)},Xn=function(o){if(!Lt(o))return!1;var t=Sn(o);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},iu=ne["__core-js_shared__"];var bm=function(){var o=/[^.]+$/.exec(iu&&iu.keys&&iu.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const NC=function(o){return!!bm&&bm in o};var OC=Function.prototype.toString;const ti=function(o){if(o!=null){try{return OC.call(o)}catch{}try{return o+""}catch{}}return""};var LC=/^\[object .+?Constructor\]$/,zC=Function.prototype,RC=Object.prototype,FC=zC.toString,jC=RC.hasOwnProperty,VC=RegExp("^"+FC.call(jC).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const HC=function(o){return!(!Lt(o)||NC(o))&&(Xn(o)?VC:LC).test(ti(o))},UC=function(o,t){return o==null?void 0:o[t]},ei=function(o,t){var e=UC(o,t);return HC(e)?e:void 0},Do=ei(ne,"Map"),So=ei(Object,"create"),qC=function(){this.__data__=So?So(null):{},this.size=0},WC=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t};var $C=Object.prototype.hasOwnProperty;const GC=function(o){var t=this.__data__;if(So){var e=t[o];return e==="__lodash_hash_undefined__"?void 0:e}return $C.call(t,o)?t[o]:void 0};var KC=Object.prototype.hasOwnProperty;const YC=function(o){var t=this.__data__;return So?t[o]!==void 0:KC.call(t,o)},QC=function(o,t){var e=this.__data__;return this.size+=this.has(o)?0:1,e[o]=So&&t===void 0?"__lodash_hash_undefined__":t,this};function Ii(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}Ii.prototype.clear=qC,Ii.prototype.delete=WC,Ii.prototype.get=GC,Ii.prototype.has=YC,Ii.prototype.set=QC;const wm=Ii,ZC=function(){this.size=0,this.__data__={hash:new wm,map:new(Do||wa),string:new wm}},JC=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null},Aa=function(o,t){var e=o.__data__;return JC(t)?e[typeof t=="string"?"string":"hash"]:e.map},XC=function(o){var t=Aa(this,o).delete(o);return this.size-=t?1:0,t},tv=function(o){return Aa(this,o).get(o)},ev=function(o){return Aa(this,o).has(o)},nv=function(o,t){var e=Aa(this,o),n=e.size;return e.set(o,t),this.size+=e.size==n?0:1,this};function Mi(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}Mi.prototype.clear=ZC,Mi.prototype.delete=XC,Mi.prototype.get=tv,Mi.prototype.has=ev,Mi.prototype.set=nv;const _a=Mi,iv=function(o,t){var e=this.__data__;if(e instanceof wa){var n=e.__data__;if(!Do||n.length<199)return n.push([o,t]),this.size=++e.size,this;e=this.__data__=new _a(n)}return e.set(o,t),this.size=e.size,this};function Ti(o){var t=this.__data__=new wa(o);this.size=t.size}Ti.prototype.clear=MC,Ti.prototype.delete=TC,Ti.prototype.get=BC,Ti.prototype.has=PC,Ti.prototype.set=iv;const Bi=Ti,ov=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n&&t(o[e],e,o)!==!1;);return o},Ca=function(){try{var o=ei(Object,"defineProperty");return o({},"",{}),o}catch{}}(),va=function(o,t,e){t=="__proto__"&&Ca?Ca(o,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):o[t]=e};var rv=Object.prototype.hasOwnProperty;const ou=function(o,t,e){var n=o[t];rv.call(o,t)&&Eo(n,e)&&(e!==void 0||t in o)||va(o,t,e)},Pi=function(o,t,e,n){var i=!e;e||(e={});for(var r=-1,s=t.length;++r<s;){var a=t[r],c=void 0;c===void 0&&(c=o[a]),i?va(e,a,c):ou(e,a,c)}return e},sv=function(o,t){for(var e=-1,n=Array(o);++e<o;)n[e]=t(e);return n},Am=function(o){return Ve(o)&&Sn(o)=="[object Arguments]"};var _m=Object.prototype,av=_m.hasOwnProperty,cv=_m.propertyIsEnumerable;const ya=Am(function(){return arguments}())?Am:function(o){return Ve(o)&&av.call(o,"callee")&&!cv.call(o,"callee")},lv=function(){return!1};var Cm=u&&!u.nodeType&&u,vm=Cm&&!0&&d&&!d.nodeType&&d,ym=vm&&vm.exports===Cm?ne.Buffer:void 0;const Io=(ym?ym.isBuffer:void 0)||lv;var dv=/^(?:0|[1-9]\d*)$/;const xa=function(o,t){var e=typeof o;return!!(t=t??9007199254740991)&&(e=="number"||e!="symbol"&&dv.test(o))&&o>-1&&o%1==0&&o<t},ru=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var $t={};$t["[object Float32Array]"]=$t["[object Float64Array]"]=$t["[object Int8Array]"]=$t["[object Int16Array]"]=$t["[object Int32Array]"]=$t["[object Uint8Array]"]=$t["[object Uint8ClampedArray]"]=$t["[object Uint16Array]"]=$t["[object Uint32Array]"]=!0,$t["[object Arguments]"]=$t["[object Array]"]=$t["[object ArrayBuffer]"]=$t["[object Boolean]"]=$t["[object DataView]"]=$t["[object Date]"]=$t["[object Error]"]=$t["[object Function]"]=$t["[object Map]"]=$t["[object Number]"]=$t["[object Object]"]=$t["[object RegExp]"]=$t["[object Set]"]=$t["[object String]"]=$t["[object WeakMap]"]=!1;const uv=function(o){return Ve(o)&&ru(o.length)&&!!$t[Sn(o)]},su=function(o){return function(t){return o(t)}};var xm=u&&!u.nodeType&&u,Mo=xm&&!0&&d&&!d.nodeType&&d,au=Mo&&Mo.exports===xm&&ka.process;const Ni=function(){try{var o=Mo&&Mo.require&&Mo.require("util").types;return o||au&&au.binding&&au.binding("util")}catch{}}();var Em=Ni&&Ni.isTypedArray;const cu=Em?su(Em):uv;var hv=Object.prototype.hasOwnProperty;const Dm=function(o,t){var e=Te(o),n=!e&&ya(o),i=!e&&!n&&Io(o),r=!e&&!n&&!i&&cu(o),s=e||n||i||r,a=s?sv(o.length,String):[],c=a.length;for(var l in o)!t&&!hv.call(o,l)||s&&(l=="length"||i&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||xa(l,c))||a.push(l);return a};var gv=Object.prototype;const lu=function(o){var t=o&&o.constructor;return o===(typeof t=="function"&&t.prototype||gv)},mv=fm(Object.keys,Object);var pv=Object.prototype.hasOwnProperty;const fv=function(o){if(!lu(o))return mv(o);var t=[];for(var e in Object(o))pv.call(o,e)&&e!="constructor"&&t.push(e);return t},Ea=function(o){return o!=null&&ru(o.length)&&!Xn(o)},To=function(o){return Ea(o)?Dm(o):fv(o)},kv=function(o,t){return o&&Pi(t,To(t),o)},bv=function(o){var t=[];if(o!=null)for(var e in Object(o))t.push(e);return t};var wv=Object.prototype.hasOwnProperty;const Av=function(o){if(!Lt(o))return bv(o);var t=lu(o),e=[];for(var n in o)(n!="constructor"||!t&&wv.call(o,n))&&e.push(n);return e},Oi=function(o){return Ea(o)?Dm(o,!0):Av(o)},_v=function(o,t){return o&&Pi(t,Oi(t),o)};var Sm=u&&!u.nodeType&&u,Im=Sm&&!0&&d&&!d.nodeType&&d,Mm=Im&&Im.exports===Sm?ne.Buffer:void 0,Tm=Mm?Mm.allocUnsafe:void 0;const Bm=function(o,t){if(t)return o.slice();var e=o.length,n=Tm?Tm(e):new o.constructor(e);return o.copy(n),n},Pm=function(o,t){var e=-1,n=o.length;for(t||(t=Array(n));++e<n;)t[e]=o[e];return t},Cv=function(o,t){for(var e=-1,n=o==null?0:o.length,i=0,r=[];++e<n;){var s=o[e];t(s,e,o)&&(r[i++]=s)}return r},Nm=function(){return[]};var vv=Object.prototype.propertyIsEnumerable,Om=Object.getOwnPropertySymbols;const du=Om?function(o){return o==null?[]:(o=Object(o),Cv(Om(o),function(t){return vv.call(o,t)}))}:Nm,yv=function(o,t){return Pi(o,du(o),t)},Lm=function(o,t){for(var e=-1,n=t.length,i=o.length;++e<n;)o[i+e]=t[e];return o},zm=Object.getOwnPropertySymbols?function(o){for(var t=[];o;)Lm(t,du(o)),o=nu(o);return t}:Nm,xv=function(o,t){return Pi(o,zm(o),t)},Rm=function(o,t,e){var n=t(o);return Te(o)?n:Lm(n,e(o))},uu=function(o){return Rm(o,To,du)},Ev=function(o){return Rm(o,Oi,zm)},hu=ei(ne,"DataView"),gu=ei(ne,"Promise"),mu=ei(ne,"Set"),pu=ei(ne,"WeakMap");var Fm="[object Map]",jm="[object Promise]",Vm="[object Set]",Hm="[object WeakMap]",Um="[object DataView]",Dv=ti(hu),Sv=ti(Do),Iv=ti(gu),Mv=ti(mu),Tv=ti(pu),ni=Sn;(hu&&ni(new hu(new ArrayBuffer(1)))!=Um||Do&&ni(new Do)!=Fm||gu&&ni(gu.resolve())!=jm||mu&&ni(new mu)!=Vm||pu&&ni(new pu)!=Hm)&&(ni=function(o){var t=Sn(o),e=t=="[object Object]"?o.constructor:void 0,n=e?ti(e):"";if(n)switch(n){case Dv:return Um;case Sv:return Fm;case Iv:return jm;case Mv:return Vm;case Tv:return Hm}return t});const Bo=ni;var Bv=Object.prototype.hasOwnProperty;const Pv=function(o){var t=o.length,e=new o.constructor(t);return t&&typeof o[0]=="string"&&Bv.call(o,"index")&&(e.index=o.index,e.input=o.input),e},Da=ne.Uint8Array,fu=function(o){var t=new o.constructor(o.byteLength);return new Da(t).set(new Da(o)),t},Nv=function(o,t){var e=t?fu(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.byteLength)};var Ov=/\w*$/;const Lv=function(o){var t=new o.constructor(o.source,Ov.exec(o));return t.lastIndex=o.lastIndex,t};var qm=he?he.prototype:void 0,Wm=qm?qm.valueOf:void 0;const zv=function(o){return Wm?Object(Wm.call(o)):{}},$m=function(o,t){var e=t?fu(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.length)},Rv=function(o,t,e){var n=o.constructor;switch(t){case"[object ArrayBuffer]":return fu(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return Nv(o,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return $m(o,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return Lv(o);case"[object Symbol]":return zv(o)}};var Gm=Object.create;const Fv=function(){function o(){}return function(t){if(!Lt(t))return{};if(Gm)return Gm(t);o.prototype=t;var e=new o;return o.prototype=void 0,e}}(),Km=function(o){return typeof o.constructor!="function"||lu(o)?{}:Fv(nu(o))},jv=function(o){return Ve(o)&&Bo(o)=="[object Map]"};var Ym=Ni&&Ni.isMap;const Vv=Ym?su(Ym):jv,Hv=function(o){return Ve(o)&&Bo(o)=="[object Set]"};var Qm=Ni&&Ni.isSet;const Uv=Qm?su(Qm):Hv;var Zm="[object Arguments]",Jm="[object Function]",Xm="[object Object]",qt={};qt[Zm]=qt["[object Array]"]=qt["[object ArrayBuffer]"]=qt["[object DataView]"]=qt["[object Boolean]"]=qt["[object Date]"]=qt["[object Float32Array]"]=qt["[object Float64Array]"]=qt["[object Int8Array]"]=qt["[object Int16Array]"]=qt["[object Int32Array]"]=qt["[object Map]"]=qt["[object Number]"]=qt[Xm]=qt["[object RegExp]"]=qt["[object Set]"]=qt["[object String]"]=qt["[object Symbol]"]=qt["[object Uint8Array]"]=qt["[object Uint8ClampedArray]"]=qt["[object Uint16Array]"]=qt["[object Uint32Array]"]=!0,qt["[object Error]"]=qt[Jm]=qt["[object WeakMap]"]=!1;const ku=function o(t,e,n,i,r,s){var a,c=1&e,l=2&e,h=4&e;if(n&&(a=r?n(t,i,r,s):n(t)),a!==void 0)return a;if(!Lt(t))return t;var m=Te(t);if(m){if(a=Pv(t),!c)return Pm(t,a)}else{var b=Bo(t),_=b==Jm||b=="[object GeneratorFunction]";if(Io(t))return Bm(t,c);if(b==Xm||b==Zm||_&&!r){if(a=l||_?{}:Km(t),!c)return l?xv(t,_v(a,t)):yv(t,kv(a,t))}else{if(!qt[b])return r?t:{};a=Rv(t,b,c)}}s||(s=new Bi);var C=s.get(t);if(C)return C;s.set(t,a),Uv(t)?t.forEach(function(M){a.add(o(M,e,n,M,t,s))}):Vv(t)&&t.forEach(function(M,T){a.set(T,o(M,e,n,T,t,s))});var x=m?void 0:(h?l?Ev:uu:l?Oi:To)(t);return ov(x||t,function(M,T){x&&(M=t[T=M]),ou(a,T,o(M,e,n,T,t,s))}),a},bu=function(o,t){return ku(o,5,t=typeof t=="function"?t:void 0)},In=function(o){return Ve(o)&&o.nodeType===1&&!Be(o)};class tp{constructor(t,e){this._config=Object.create(null),e&&this.define(ep(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,i=!1){if(Be(e))return void this._setObjectToTarget(t,e,i);const r=e.split(".");e=r.pop();for(const s of r)Be(t[s])||(t[s]=Object.create(null)),t=t[s];if(Be(n))return Be(t[e])||(t[e]=Object.create(null)),t=t[e],void this._setObjectToTarget(t,n,i);i&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const i of n){if(!Be(t[i])){t=null;break}t=t[i]}return t?ep(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(i=>{this._setToTarget(t,i,e[i],n)})}}function ep(o){return bu(o,qv)}function qv(o){return In(o)||typeof o=="function"?o:void 0}function Mn(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function Sa(o){const t=Object.prototype.toString.apply(o);return t=="[object Window]"||t=="[object global]"}const np=Ue(yt());function Ue(o){return o?class extends o{listenTo(t,e,n,i={}){if(Mn(t)||Sa(t)){const r={capture:!!i.useCapture,passive:!!i.usePassive},s=this._getProxyEmitter(t,r)||new Wv(t,r);this.listenTo(s,e,n,i)}else super.listenTo(t,e,n,i)}stopListening(t,e,n){if(Mn(t)||Sa(t)){const i=this._getAllProxyEmitters(t);for(const r of i)this.stopListening(r,e,n)}else super.stopListening(t,e,n)}_getProxyEmitter(t,e){return function(n,i){const r=n[_t];return r&&r[i]?r[i].emitter:null}(this,ip(t,e))}_getAllProxyEmitters(t){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(t,e)).filter(e=>!!e)}}:np}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Ue[o]=np.prototype[o]});class Wv extends yt(){constructor(t,e){super(),Zn(this,ip(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;const e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,n){this.attach(t),yt().prototype._addEventListener.call(this,t,e,n)}_removeEventListener(t,e){yt().prototype._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){const e=n=>{this.fire(t,n)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function ip(o,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=se())}(o);for(const n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}function $v(o){const t=[];let e=o;for(;e&&e.nodeType!=Node.DOCUMENT_NODE;)t.unshift(e),e=e.parentNode;return t}function op(o){const t=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}function rp(o){if(!o.target)return null;const t=o.target.ownerDocument,e=o.clientX,n=o.clientY;let i=null;return t.caretRangeFromPoint&&t.caretRangeFromPoint(e,n)?i=t.caretRangeFromPoint(e,n):o.rangeParent&&(i=t.createRange(),i.setStart(o.rangeParent,o.rangeOffset),i.collapse(!0)),i}function Qt(o){return Object.prototype.toString.call(o)=="[object Text]"}function Ia(o){return Object.prototype.toString.apply(o)=="[object Range]"}function sp(o){return o&&o.parentNode?o.offsetParent===A.document.body?null:o.offsetParent:null}const ap=["top","right","bottom","left","width","height"];class kt{constructor(t){const e=Ia(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),wu(t)||e)if(e){const n=kt.getDomRangeRects(t);Ma(this,kt.getBoundingRect(n))}else Ma(this,t.getBoundingClientRect());else if(Sa(t)){const{innerWidth:n,innerHeight:i}=t;Ma(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else Ma(this,t)}clone(){return new kt(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};if(e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0)return null;{const n=new kt(e);return n._source=this._source,n}}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(cp(t))return e;let n,i=t,r=t.parentNode||t.commonAncestorContainer;for(;r&&!cp(r);){const a=((s=r)instanceof HTMLElement?s.ownerDocument.defaultView.getComputedStyle(s).overflow:"visible")==="visible";i instanceof HTMLElement&&lp(i)==="absolute"&&(n=i);const c=lp(r);if(a||n&&(c==="relative"&&a||c!=="relative")){i=r,r=r.parentNode;continue}const l=new kt(r),h=e.getIntersection(l);if(!h)return null;h.getArea()<e.getArea()&&(e=h),i=r,r=r.parentNode}var s;return e}isEqual(t){for(const e of ap)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}toAbsoluteRect(){const{scrollX:t,scrollY:e}=A.window,n=this.clone().moveBy(t,e);if(wu(n._source)){const i=sp(n._source);i&&function(r,s){const a=new kt(s),c=op(s);let l=0,h=0;l-=a.left,h-=a.top,l+=s.scrollLeft,h+=s.scrollTop,l-=c.left,h-=c.top,r.moveBy(l,h)}(n,i)}return n}excludeScrollbarsAndBorders(){const t=this._source;let e,n,i;if(Sa(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,i=t.getComputedStyle(t.document.documentElement).direction;else{const r=op(t);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,i=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,i==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const i of n)e.push(new kt(i));else{let i=t.startContainer;Qt(i)&&(i=i.parentNode);const r=new kt(i.getBoundingClientRect());r.right=r.left,r.width=0,e.push(r)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of t)n++,e.left=Math.min(e.left,i.left),e.top=Math.min(e.top,i.top),e.right=Math.max(e.right,i.right),e.bottom=Math.max(e.bottom,i.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new kt(e))}}function Ma(o,t){for(const e of ap)o[e]=t[e]}function cp(o){return!!wu(o)&&o===o.ownerDocument.body}function wu(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}function lp(o){return o instanceof HTMLElement?o.ownerDocument.defaultView.getComputedStyle(o).position:"static"}const Yt=class Yt{constructor(t,e){Yt._observerInstance||Yt._createObserver(),this._element=t,this._callback=e,Yt._addElementCallback(t,e),Yt._observerInstance.observe(t)}get element(){return this._element}destroy(){Yt._deleteElementCallback(this._element,this._callback)}static _addElementCallback(t,e){Yt._elementCallbacks||(Yt._elementCallbacks=new Map);let n=Yt._elementCallbacks.get(t);n||(n=new Set,Yt._elementCallbacks.set(t,n)),n.add(e)}static _deleteElementCallback(t,e){const n=Yt._getElementCallbacks(t);n&&(n.delete(e),n.size||(Yt._elementCallbacks.delete(t),Yt._observerInstance.unobserve(t))),Yt._elementCallbacks&&!Yt._elementCallbacks.size&&(Yt._observerInstance=null,Yt._elementCallbacks=null)}static _getElementCallbacks(t){return Yt._elementCallbacks?Yt._elementCallbacks.get(t):null}static _createObserver(){Yt._observerInstance=new A.window.ResizeObserver(t=>{for(const e of t){const n=Yt._getElementCallbacks(e.target);if(n)for(const i of n)i(e)}})}};Yt._observerInstance=null,Yt._elementCallbacks=null;let Po=Yt;function dp(o,t){o instanceof HTMLTextAreaElement&&(o.value=t),o.innerHTML=t}function Li(o){return t=>t+o}function No(o){let t=0;for(;o.previousSibling;)o=o.previousSibling,t++;return t}function up(o,t,e){o.insertBefore(e,o.childNodes[t]||null)}function Oo(o){return o&&o.nodeType===Node.COMMENT_NODE}function fn(o){return!!o&&(Qt(o)?fn(o.parentElement):!!o.getClientRects&&!!o.getClientRects().length)}function Ta({element:o,target:t,positions:e,limiter:n,fitInViewport:i,viewportOffsetConfig:r}){Xn(t)&&(t=t()),Xn(n)&&(n=n());const s=sp(o),a=function(b){b=Object.assign({top:0,bottom:0,left:0,right:0},b);const _=new kt(A.window);return _.top+=b.top,_.height-=b.top,_.bottom-=b.bottom,_.height-=b.bottom,_}(r),c=new kt(o),l=hp(t,a);let h;if(!l||!a.getIntersection(l))return null;const m={targetRect:l,elementRect:c,positionedElementAncestor:s,viewportRect:a};if(n||i){if(n){const b=hp(n,a);b&&(m.limiterRect=b)}h=function(b,_){const{elementRect:C}=_,x=C.getArea(),M=b.map(z=>new gp(z,_)).filter(z=>!!z.name);let T=0,O=null;for(const z of M){const{limiterIntersectionArea:V,viewportIntersectionArea:et}=z;if(V===x)return z;const ut=et**2+V**2;ut>T&&(T=ut,O=z)}return O}(e,m)}else h=new gp(e[0],m);return h}function hp(o,t){const e=new kt(o).getVisible();return e?e.getIntersection(t):null}class gp{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect,e.limiterRect);if(!n)return;const{left:i,top:r,name:s,config:a}=n;this.name=s,this.config=a,this._positioningFunctionCoordinates={left:i,top:r},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const t=this._options.limiterRect;return t?t.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function mp(o){const t=o.parentNode;t&&t.removeChild(o)}function Gv({window:o,rect:t,alignToTop:e,forceScroll:n,viewportOffset:i}){const r=t.clone().moveBy(0,i.bottom),s=t.clone().moveBy(0,-i.top),a=new kt(o).excludeScrollbarsAndBorders(),c=e&&n,l=[s,r].every(C=>a.contains(C));let{scrollX:h,scrollY:m}=o;const b=h,_=m;c?m-=a.top-t.top+i.top:l||(fp(s,a)?m-=a.top-t.top+i.top:pp(r,a)&&(m+=e?t.top-a.top-i.top:t.bottom-a.bottom+i.bottom)),l||(kp(t,a)?h-=a.left-t.left+i.left:bp(t,a)&&(h+=t.right-a.right+i.right)),h==b&&m===_||o.scrollTo(h,m)}function Kv({parent:o,getRect:t,alignToTop:e,forceScroll:n,ancestorOffset:i=0,limiterElement:r}){const s=Au(o),a=e&&n;let c,l,h;const m=r||s.document.body;for(;o!=m;)l=t(),c=new kt(o).excludeScrollbarsAndBorders(),h=c.contains(l),a?o.scrollTop-=c.top-l.top+i:h||(fp(l,c)?o.scrollTop-=c.top-l.top+i:pp(l,c)&&(o.scrollTop+=e?l.top-c.top-i:l.bottom-c.bottom+i)),h||(kp(l,c)?o.scrollLeft-=c.left-l.left+i:bp(l,c)&&(o.scrollLeft+=l.right-c.right+i)),o=o.parentNode}function pp(o,t){return o.bottom>t.bottom}function fp(o,t){return o.top<t.top}function kp(o,t){return o.left<t.left}function bp(o,t){return o.right>t.right}function Au(o){return Ia(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function Yv(o){if(Ia(o)){let t=o.commonAncestorContainer;return Qt(t)&&(t=t.parentNode),t}return o.parentNode}function wp(o,t){const e=Au(o),n=new kt(o);if(e===t)return n;{let i=e;for(;i!=t;){const r=i.frameElement,s=new kt(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),i=i.parent}}return n}const Qv={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},Zv={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Ap={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},Et=Xv(),Jv=Object.fromEntries(Object.entries(Et).map(([o,t])=>{let e;return e=t in Ap?Ap[t]:o.charAt(0).toUpperCase()+o.slice(1),[t,e]}));function zi(o){let t;if(typeof o=="string"){if(t=Et[o.toLowerCase()],!t)throw new P("keyboard-unknown-key",null,{key:o})}else t=o.keyCode+(o.altKey?Et.alt:0)+(o.ctrlKey?Et.ctrl:0)+(o.shiftKey?Et.shift:0)+(o.metaKey?Et.cmd:0);return t}function _u(o){return typeof o=="string"&&(o=function(t){return t.split("+").map(e=>e.trim())}(o)),o.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return zi(e.slice(0,-1));const n=zi(e);return(I.isMac||I.isiOS)&&n==Et.ctrl?Et.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function Ba(o){let t=_u(o);return Object.entries(I.isMac||I.isiOS?Qv:Zv).reduce((e,[n,i])=>(t&Et[n]&&(t&=~Et[n],e+=i),e),"")+(t?Jv[t]:"")}function Cu(o,t){const e=t==="ltr";switch(o){case Et.arrowleft:return e?"left":"right";case Et.arrowright:return e?"right":"left";case Et.arrowup:return"up";case Et.arrowdown:return"down"}}function Xv(){const o={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)o[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)o[t-48]=t;for(let t=112;t<=123;t++)o["f"+(t-111)]=t;return Object.assign(o,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),o}function Ht(o){return Array.isArray(o)?o:[o]}const vu=function(o,t,e){(e!==void 0&&!Eo(o[t],e)||e===void 0&&!(t in o))&&va(o,t,e)},_p=function(o){return function(t,e,n){for(var i=-1,r=Object(t),s=n(t),a=s.length;a--;){var c=s[++i];if(e(r[c],c,r)===!1)break}return t}}(),t1=function(o){return Ve(o)&&Ea(o)},Cp=function(o,t){if((t!=="constructor"||typeof o[t]!="function")&&t!="__proto__")return o[t]},e1=function(o){return Pi(o,Oi(o))},n1=function(o,t,e,n,i,r,s){var a=Cp(o,e),c=Cp(t,e),l=s.get(c);if(l)vu(o,e,l);else{var h=void 0,m=h===void 0;if(m){var b=Te(c),_=!b&&Io(c),C=!b&&!_&&cu(c);h=c,b||_||C?Te(a)?h=a:t1(a)?h=Pm(a):_?(m=!1,h=Bm(c,!0)):C?(m=!1,h=$m(c,!0)):h=[]:Be(c)||ya(c)?(h=a,ya(a)?h=e1(a):Lt(a)&&!Xn(a)||(h=Km(c))):m=!1}m&&(s.set(c,h),i(h,c,n,r,s),s.delete(c)),vu(o,e,h)}},i1=function o(t,e,n,i,r){t!==e&&_p(e,function(s,a){if(r||(r=new Bi),Lt(s))n1(t,e,a,n,o,i,r);else{var c=void 0;c===void 0&&(c=s),vu(t,a,c)}},Oi)},Tn=function(o){return o},o1=function(o,t,e){switch(e.length){case 0:return o.call(t);case 1:return o.call(t,e[0]);case 2:return o.call(t,e[0],e[1]);case 3:return o.call(t,e[0],e[1],e[2])}return o.apply(t,e)};var vp=Math.max;const r1=function(o,t,e){return t=vp(t===void 0?o.length-1:t,0),function(){for(var n=arguments,i=-1,r=vp(n.length-t,0),s=Array(r);++i<r;)s[i]=n[t+i];i=-1;for(var a=Array(t+1);++i<t;)a[i]=n[i];return a[t]=e(s),o1(o,this,a)}},s1=function(o){return function(){return o}},a1=Ca?function(o,t){return Ca(o,"toString",{configurable:!0,enumerable:!1,value:s1(t),writable:!0})}:Tn;var c1=Date.now;const l1=function(o){var t=0,e=0;return function(){var n=c1(),i=16-(n-e);if(e=n,i>0){if(++t>=800)return arguments[0]}else t=0;return o.apply(void 0,arguments)}}(a1),d1=function(o,t){return l1(r1(o,t,Tn),o+"")},u1=function(o,t,e){if(!Lt(e))return!1;var n=typeof t;return!!(n=="number"?Ea(e)&&xa(t,e.length):n=="string"&&t in e)&&Eo(e[t],o)},yp=function(o){return d1(function(t,e){var n=-1,i=e.length,r=i>1?e[i-1]:void 0,s=i>2?e[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,s&&u1(e[0],e[1],s)&&(r=i<3?void 0:r,i=1),t=Object(t);++n<i;){var a=e[n];a&&o(t,a,n,r)}return t})},yu=yp(function(o,t,e){i1(o,t,e)});function h1(o,t,e=1,n){if(typeof e!="number")throw new P("translation-service-quantity-not-a-number",null,{quantity:e});const i=n||A.window.CKEDITOR_TRANSLATIONS,r=function(h){return Object.keys(h).length}(i);r===1&&(o=Object.keys(i)[0]);const s=t.id||t.string;if(r===0||!function(h,m,b){return!!b[h]&&!!b[h].dictionary[m]}(o,s,i))return e!==1?t.plural:t.string;const a=i[o].dictionary,c=i[o].getPluralForm||(h=>h===1?0:1),l=a[s];return typeof l=="string"?l:l[Number(c(e))]}A.window.CKEDITOR_TRANSLATIONS||(A.window.CKEDITOR_TRANSLATIONS={});const g1=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function xp(o){return g1.includes(o)?"rtl":"ltr"}class m1{constructor({uiLanguage:t="en",contentLanguage:e,translations:n}={}){this.uiLanguage=t,this.contentLanguage=e||this.uiLanguage,this.uiLanguageDirection=xp(this.uiLanguage),this.contentLanguageDirection=xp(this.contentLanguage),this.translations=function(i){return Array.isArray(i)?i.reduce((r,s)=>yu(r,s)):i}(n),this.t=(i,r)=>this._t(i,r)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=Ht(e),typeof t=="string"&&(t={string:t});const n=t.plural?e[0]:1;return function(i,r){return i.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(h1(this.uiLanguage,t,n,this.translations),e)}}class Qe extends yt(){constructor(t={},e={}){super();const n=xe(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of t)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new P("collection-add-item-invalid-index",this);let n=0;for(const i of t){const r=this._getItemIdBeforeAdding(i),s=e+n;this._items.splice(s,0,i),this._itemMap.set(r,i),this.fire("add",i,s),n++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new P("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{const e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}forEach(t,e){this._items.forEach(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new P("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(e):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(i,r,s)=>{const a=e._bindToCollection==this,c=e._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{const l=t(r);if(!l)return void this._skippedIndexesFromExternal.push(s);let h=s;for(const m of this._skippedIndexesFromExternal)s>m&&h--;for(const m of e._skippedIndexesFromExternal)h>=m&&h++;this._bindToExternalToInternalMap.set(r,l),this._bindToInternalToExternalMap.set(l,r),this.add(l,h);for(let m=0;m<e._skippedIndexesFromExternal.length;m++)h<=e._skippedIndexesFromExternal[m]&&e._skippedIndexesFromExternal[m]++}};for(const i of e)n(0,i,e.getIndex(i));this.listenTo(e,"add",n),this.listenTo(e,"remove",(i,r,s)=>{const a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,l)=>(s<l&&c.push(l-1),s>l&&c.push(l),c),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],typeof n!="string")throw new P("collection-add-invalid-id",this);if(this.get(n))throw new P("collection-add-item-already-exists",this)}else t[e]=n=se();return n}_remove(t){let e,n,i,r=!1;const s=this._idProperty;if(typeof t=="string"?(n=t,i=this._itemMap.get(n),r=!i,i&&(e=this._items.indexOf(i))):typeof t=="number"?(e=t,i=this._items[e],r=!i,i&&(n=i[s])):(i=t,n=i[s],e=this._items.indexOf(i),r=e==-1||!this._itemMap.get(n)),r)throw new P("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(a),this.fire("remove",i,e),[i,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function ge(o){const t=o.next();return t.done?null:t.value}class re extends Ue(nt()){constructor(){super(),this._elements=new Set,this._externalViews=new Set,this._blurTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}get elements(){return Array.from(this._elements.values())}get externalViews(){return Array.from(this._externalViews.values())}add(t){if(Dp(t))this._addElement(t);else if(Ep(t))this._addView(t);else{if(!t.element)throw new P("focustracker-add-view-missing-element",{focusTracker:this,view:t});this._addElement(t.element)}}remove(t){Dp(t)?this._removeElement(t):Ep(t)?this._removeView(t):this._removeElement(t.element)}_addElement(t){if(this._elements.has(t))throw new P("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>{const e=this.externalViews.find(n=>function(i,r){return Sp(i,r)?!0:!!r.focusTracker.externalViews.find(s=>Sp(i,s))}(t,n));e?this._focus(e.element):this._focus(t)},{useCapture:!0}),this.listenTo(t,"blur",()=>{this._blur()},{useCapture:!0}),this._elements.add(t)}_removeElement(t){this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t)),t===this.focusedElement&&this._blur()}_addView(t){t.element&&this._addElement(t.element),this.listenTo(t.focusTracker,"change:focusedElement",()=>{t.focusTracker.focusedElement?t.element&&this._focus(t.element):this._blur()}),this._externalViews.add(t)}_removeView(t){t.element&&this._removeElement(t.element),this.stopListening(t.focusTracker),this._externalViews.delete(t)}destroy(){this.stopListening(),this._elements.clear(),this._externalViews.clear(),this.isFocused=!1,this.focusedElement=null}_focus(t){this._clearBlurTimeout(),this.focusedElement=t,this.isFocused=!0}_blur(){this.elements.find(t=>t.contains(document.activeElement))||this.externalViews.find(t=>t.focusTracker.isFocused&&!t.focusTracker._blurTimeout)||(this._clearBlurTimeout(),this._blurTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0))}_clearBlurTimeout(){clearTimeout(this._blurTimeout),this._blurTimeout=null}}function Ep(o){return"focusTracker"in o&&o.focusTracker instanceof re}function Dp(o){return In(o)}function Sp(o,t){return!!t.element&&t.element.contains(document.activeElement)&&o.contains(t.element)}class ve{constructor(){this._listener=new(Ue())}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+zi(n),n)})}set(t,e,n={}){const i=_u(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(s,a)=>{n.filter&&!n.filter(a)||(e(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0)},{priority:r})}press(t){return!!this._listener.fire("_keydown:"+zi(t),t)}stopListening(t){this._listener.stopListening(t)}destroy(){this.stopListening()}}function cn(o){return xe(o)?new Map(o):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(o)}function Ip(o,t,e,n){if(Math.max(t.length,o.length)>1e4)return o.slice(0,e).concat(t).concat(o.slice(e+n,o.length));{const i=Array.from(o);return i.splice(e,n,...t),i}}function xu(o,t){let e;function n(...i){n.cancel(),e=setTimeout(()=>o(...i),t)}return n.cancel=()=>{clearTimeout(e)},n}function Eu(o,t){return!!(e=o.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(t));var e}function Du(o,t){return!!(e=o.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}const p1=f1();function Mp(o,t){const e=String(o).matchAll(p1);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}function f1(){const o=new RegExp("\\p{Regional_Indicator}{2}","u").source,t="(?:"+[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")].map(e=>e.source).join("|")+")";return new RegExp(`${o}|${t}(?:‍${t})*`,"ug")}class Ze extends Qe{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(e,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(e,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(const e of this)this._renderViewIntoCollectionParent(e)}delegate(...t){if(!t.length||!t.every(e=>typeof e=="string"))throw new P("ui-viewcollection-delegate-wrong-events",this);return{to:e=>{for(const n of this)for(const i of t)n.delegate(i).to(e);this.on("add",(n,i)=>{for(const r of t)i.delegate(r).to(e)}),this.on("remove",(n,i)=>{for(const r of t)i.stopDelegating(r,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}remove(t){return super.remove(t)}}class Je extends yt(){constructor(t){super(),Object.assign(this,Np(Pp(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,intoFragment:!1,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new P("ui-template-revert-not-applied",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)Na(n)?yield n:Su(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,i)=>new k1({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:i}),if:(n,i,r)=>new Tp({observable:t,emitter:e,attribute:n,valueIfTrue:i,callback:r})}}static extend(t,e){if(t._isRendered)throw new P("template-extend-render",[this,t]);Rp(t,Np(Pp(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new P("ui-template-wrong-syntax",this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),Pa(this.text)?this._bindToObservable({schema:this.text,updater:b1(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){if(!this.attributes)return;const e=t.node,n=t.revertData;for(const i in this.attributes){const r=e.getAttribute(i),s=this.attributes[i];n&&(n.attributes[i]=r);const a=Fp(s)?s[0].ns:null;if(Pa(s)){const c=Fp(s)?s[0].value:s;n&&jp(i)&&c.unshift(r),this._bindToObservable({schema:c,updater:w1(e,i,a),data:t})}else if(i=="style"&&typeof s[0]!="string")this._renderStyleAttribute(s[0],t);else{n&&r&&jp(i)&&s.unshift(r);const c=s.map(l=>l&&l.value||l).reduce((l,h)=>l.concat(h),[]).reduce(Lp,"");Ri(c)||e.setAttributeNS(a,i,c)}}}_renderStyleAttribute(t,e){const n=e.node;for(const i in t){const r=t[i];Pa(r)?this._bindToObservable({schema:[r],updater:A1(n,i),data:e}):n.style[i]=r}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,i=t.isApplying;let r=0;for(const s of this.children)if(Iu(s)){if(!i){s.setParent(e);for(const a of s)n.appendChild(a.element)}}else if(Na(s))i||(s.isRendered||s.render(),n.appendChild(s.element));else if(Mn(s))n.appendChild(s);else if(i){const a={children:[],bindings:[],attributes:{}};t.revertData.children.push(a),s._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:a})}else n.appendChild(s.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(i=>{const[r,s]=e.split("@");return i.activateDomEventListener(r,s,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const i=n.revertData;Bp(t,e,n);const r=t.filter(s=>!Ri(s)).filter(s=>s.observable).map(s=>s.activateAttributeListener(t,e,n));i&&i.bindings.push(r)}_revertTemplateFromNode(t,e){for(const i of e.bindings)for(const r of i)r();if(e.text)return void(t.textContent=e.text);const n=t;for(const i in e.attributes){const r=e.attributes[i];r===null?n.removeAttribute(i):n.setAttribute(i,r)}for(let i=0;i<e.children.length;++i)this._revertTemplateFromNode(n.childNodes[i],e.children[i])}}class Lo{constructor(t){this.attribute=t.attribute,this.observable=t.observable,this.emitter=t.emitter,this.callback=t.callback}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const i=()=>Bp(t,e,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,i),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,i)}}}class k1 extends Lo{constructor(t){super(t),this.eventNameOrFunction=t.eventNameOrFunction}activateDomEventListener(t,e,n){const i=(r,s)=>{e&&!s.target.matches(e)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(s):this.observable.fire(this.eventNameOrFunction,s))};return this.emitter.listenTo(n.node,t,i),()=>{this.emitter.stopListening(n.node,t,i)}}}class Tp extends Lo{constructor(t){super(t),this.valueIfTrue=t.valueIfTrue}getValue(t){return!Ri(super.getValue(t))&&(this.valueIfTrue||!0)}}function Pa(o){return!!o&&(o.value&&(o=o.value),Array.isArray(o)?o.some(Pa):o instanceof Lo)}function Bp(o,t,{node:e}){const n=function(r,s){return r.map(a=>a instanceof Lo?a.getValue(s):a)}(o,e);let i;i=o.length==1&&o[0]instanceof Tp?n[0]:n.reduce(Lp,""),Ri(i)?t.remove():t.set(i)}function b1(o){return{set(t){o.textContent=t},remove(){o.textContent=""}}}function w1(o,t,e){return{set(n){o.setAttributeNS(e,t,n)},remove(){o.removeAttributeNS(e,t)}}}function A1(o,t){return{set(e){o.style[t]=e},remove(){o.style[t]=null}}}function Pp(o){return bu(o,t=>{if(t&&(t instanceof Lo||Su(t)||Na(t)||Iu(t)))return t})}function Np(o){if(typeof o=="string"?o=function(t){return{text:[t]}}(o):o.text&&function(t){t.text=Ht(t.text)}(o),o.on&&(o.eventListeners=function(t){for(const e in t)Op(t,e);return t}(o.on),delete o.on),!o.text){o.attributes&&function(e){for(const n in e)e[n].value&&(e[n].value=Ht(e[n].value)),Op(e,n)}(o.attributes);const t=[];if(o.children)if(Iu(o.children))t.push(o.children);else for(const e of o.children)Su(e)||Na(e)||Mn(e)?t.push(e):t.push(new Je(e));o.children=t}return o}function Op(o,t){o[t]=Ht(o[t])}function Lp(o,t){return Ri(t)?o:Ri(o)?t:`${o} ${t}`}function zp(o,t){for(const e in t)o[e]?o[e].push(...t[e]):o[e]=t[e]}function Rp(o,t){if(t.attributes&&(o.attributes||(o.attributes={}),zp(o.attributes,t.attributes)),t.eventListeners&&(o.eventListeners||(o.eventListeners={}),zp(o.eventListeners,t.eventListeners)),t.text&&o.text.push(...t.text),t.children&&t.children.length){if(o.children.length!=t.children.length)throw new P("ui-template-extend-children-mismatch",o);let e=0;for(const n of t.children)Rp(o.children[e++],n)}}function Ri(o){return!o&&o!==0}function Na(o){return o instanceof lt}function Su(o){return o instanceof Je}function Iu(o){return o instanceof Ze}function Fp(o){return Lt(o[0])&&o[0].ns}function jp(o){return o=="class"||o=="style"}var _1=k(2591),K=k.n(_1),C1=k(8639),Y=k.n(C1),v1=k(8128),Q=k.n(v1),y1=k(8021),Z=k.n(y1),x1=k(3051),J=k.n(x1),Oa=k(7676),zo={attributes:{"data-cke":!0}};zo.setAttributes=Z(),zo.insert=Q().bind(null,"head"),zo.domAPI=Y(),zo.insertStyleElement=J(),K()(Oa.A,zo),Oa.A&&Oa.A.locals&&Oa.A.locals;class lt extends Ue(nt()){constructor(t){super(),this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new Qe,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t,n.t=t&&t.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Je.bind(this,this)}createCollection(t){const e=new Ze(t);return this._viewCollections.add(e),e}registerChild(t){xe(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){xe(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new Je(t)}extendTemplate(t){Je.extend(this.template,t)}render(){if(this.isRendered)throw new P("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}function La({emitter:o,activator:t,callback:e,contextElements:n,listenerOptions:i}){o.listenTo(document,"mousedown",(r,s)=>{if(!t())return;const a=typeof s.composedPath=="function"?s.composedPath():[],c=typeof n=="function"?n():n;for(const l of c)if(l.contains(s.target)||a.includes(l))return;e()},i)}function Mu(o){return class extends o{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...t){super(...t),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function za({view:o}){o.listenTo(o.element,"submit",(t,e)=>{e.preventDefault(),o.fire("submit")},{useCapture:!0})}function E1({keystrokeHandler:o,focusTracker:t,gridItems:e,numberOfColumns:n,uiLanguageDirection:i}){const r=typeof n=="number"?()=>n:n;function s(l){return h=>{const m=e.find(C=>C.element===t.focusedElement),b=e.getIndex(m),_=l(b,e);e.get(_).focus(),h.stopPropagation(),h.preventDefault()}}function a(l,h){return l===h-1?0:l+1}function c(l,h){return l===0?h-1:l-1}o.set("arrowright",s((l,h)=>i==="rtl"?c(l,h.length):a(l,h.length))),o.set("arrowleft",s((l,h)=>i==="rtl"?a(l,h.length):c(l,h.length))),o.set("arrowup",s((l,h)=>{let m=l-r();return m<0&&(m=l+r()*Math.floor(h.length/r()),m>h.length-1&&(m-=r())),m})),o.set("arrowdown",s((l,h)=>{let m=l+r();return m>h.length-1&&(m=l%r()),m}))}class $ extends nt(){constructor(t){super(),this._disableStack=new Set,this.editor=t,this.set("isEnabled",!0)}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Vp,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Vp),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}static get isOfficialPlugin(){return!1}static get isPremiumPlugin(){return!1}}function Vp(o){o.return=!1,o.stop()}class bt extends nt(){constructor(t){super(),this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(t,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",e=>{if(!this.affectsData)return;const n=t.model.document.selection,i=n.getFirstPosition().root.rootName!="$graveyard"&&t.model.canEditAt(n);(t.isReadOnly||this._isEnabledBasedOnSelection&&!i)&&(e.return=!1,e.stop())},{priority:"highest"}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(t){this._affectsData=t}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Hp,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Hp),this.refresh())}execute(...t){}destroy(){this.stopListening()}}function Hp(o){o.return=!1,o.stop()}class Up extends bt{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...t){const e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={}){wo(this._childCommandsDefinitions,{command:t,priority:e.priority||"normal"}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}class qp extends yt(){constructor(t,e=[],n=[]){super(),this._plugins=new Map,this._context=t,this._availablePlugins=new Map;for(const i of e)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new P("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){const i=this,r=this._context;(function C(x,M=new Set){x.forEach(T=>{c(T)&&(M.has(T)||(M.add(T),T.pluginName&&!i._availablePlugins.has(T.pluginName)&&i._availablePlugins.set(T.pluginName,T),T.requires&&C(T.requires,M)))})})(t),b(t);const s=[...function C(x,M=new Set){return x.map(T=>c(T)?T:i._availablePlugins.get(T)).reduce((T,O)=>M.has(O)?T:(M.add(O),O.requires&&(b(O.requires,O),C(O.requires,M).forEach(z=>T.add(z))),T.add(O)),new Set)}(t.filter(C=>!h(C,e)))];(function(C,x){for(const M of x){if(typeof M!="function")throw new P("plugincollection-replace-plugin-invalid-type",null,{pluginItem:M});const T=M.pluginName;if(!T)throw new P("plugincollection-replace-plugin-missing-name",null,{pluginItem:M});if(M.requires&&M.requires.length)throw new P("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:T});const O=i._availablePlugins.get(T);if(!O)throw new P("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:T});const z=C.indexOf(O);if(z===-1){if(i._contextPlugins.has(O))return;throw new P("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:T})}if(O.requires&&O.requires.length)throw new P("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:T});C.splice(z,1,M),i._availablePlugins.set(T,M)}})(s,n);const a=s.map(C=>{let x=i._contextPlugins.get(C);return x=x||new C(r),i._add(C,x),x});return _(a,"init").then(()=>_(a,"afterInit")).then(()=>a);function c(C){return typeof C=="function"}function l(C){return c(C)&&!!C.isContextPlugin}function h(C,x){return x.some(M=>M===C||m(C)===M||m(M)===C)}function m(C){return c(C)?C.pluginName||C.name:C}function b(C,x=null){C.map(M=>c(M)?M:i._availablePlugins.get(M)||M).forEach(M=>{(function(T,O){if(!c(T))throw O?new P("plugincollection-soft-required",r,{missingPlugin:T,requiredBy:m(O)}):new P("plugincollection-plugin-not-found",r,{plugin:T})})(M,x),function(T,O){if(l(O)&&!l(T))throw new P("plugincollection-context-required",r,{plugin:m(T),requiredBy:m(O)})}(M,x),function(T,O){if(O&&h(T,e))throw new P("plugincollection-required",r,{plugin:m(T),requiredBy:m(O)})}(M,x)})}function _(C,x){return C.reduce((M,T)=>T[x]?i._contextPlugins.has(T)?M:M.then(T[x].bind(T)):M,Promise.resolve())}}destroy(){const t=[];for(const[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new P("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}class Wp{constructor(t){this._contextOwner=null;const{translations:e,...n}=t||{};this.config=new tp(n,this.constructor.defaultConfig);const i=this.constructor.builtinPlugins;this.config.define("plugins",i),this.plugins=new qp(this,i);const r=this.config.get("language")||{};this.locale=new m1({uiLanguage:typeof r=="string"?r:r.ui,contentLanguage:this.config.get("language.content"),translations:e}),this.t=this.locale.t,this.editors=new Qe}initPlugins(){const t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(const n of t.concat(e)){if(typeof n!="function")throw new P("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new P("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new P("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}class Ra extends nt(){constructor(t){super(),this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}static get isOfficialPlugin(){return!1}static get isPremiumPlugin(){return!1}}var Fa=k(4098),Ro={attributes:{"data-cke":!0}};Ro.setAttributes=Z(),Ro.insert=Q().bind(null,"head"),Ro.domAPI=Y(),Ro.insertStyleElement=J(),K()(Fa.A,Ro),Fa.A&&Fa.A.locals&&Fa.A.locals;const ja=new WeakMap;let $p=!1;function Gp({view:o,element:t,text:e,isDirectHost:n=!0,keepOnFocus:i=!1}){const r=o.document;function s(a){ja.get(r).set(t,{text:a,isDirectHost:n,keepOnFocus:i,hostElement:n?t:null}),o.change(c=>Tu(r,c))}ja.has(r)||(ja.set(r,new Map),r.registerPostFixer(a=>Tu(r,a)),r.on("change:isComposing",()=>{o.change(a=>Tu(r,a))},{priority:"high"})),t.is("editableElement")&&t.on("change:placeholder",(a,c,l)=>{s(l)}),t.placeholder?s(t.placeholder):e&&s(e),e&&function(){$p||G("enableplaceholder-deprecated-text-option"),$p=!0}()}function D1(o,t){return!t.hasClass("ck-placeholder")&&(o.addClass("ck-placeholder",t),!0)}function S1(o,t){return!!t.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",t),!0)}function I1(o,t){if(!o.isAttached()||Array.from(o.getChildren()).some(i=>!i.is("uiElement")))return!1;const e=o.document,n=e.selection.anchor;return(!e.isComposing||!n||n.parent!==o)&&(!!t||!e.isFocused||!!n&&n.parent!==o)}function Tu(o,t){const e=ja.get(o),n=[];let i=!1;for(const[r,s]of e)s.isDirectHost&&(n.push(r),Kp(t,r,s)&&(i=!0));for(const[r,s]of e){if(s.isDirectHost)continue;const a=M1(r);a&&(n.includes(a)||(s.hostElement=a,Kp(t,r,s)&&(i=!0)))}return i}function Kp(o,t,e){const{text:n,isDirectHost:i,hostElement:r}=e;let s=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),s=!0),(i||t.childCount==1)&&I1(r,e.keepOnFocus)?D1(o,r)&&(s=!0):S1(o,r)&&(s=!0),s}function M1(o){if(o.childCount){const t=o.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}class ii{is(){throw new Error("is() method is abstract")}}const Yp=function(o){return ku(o,4)};class oi extends yt(ii){constructor(t){super(),this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new P("view-node-not-found-in-parent",this);return t}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=ke(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire(`change:${t}`,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=Yp(this);return delete t.parent,t}}oi.prototype.is=function(o){return o==="node"||o==="view:node"};class zt extends oi{constructor(t,e){super(t),this._textData=e}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof zt&&(this===t||this.data===t.data)}_clone(){return new zt(this.document,this.data)}}zt.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class ln extends ii{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.data.length)throw new P("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new P("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(t={}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}ln.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class dn{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(const e of t)for(const n of this._patterns){const i=Qp(e,n);if(i)return{element:e,pattern:n,match:i}}return null}matchAll(...t){const e=[];for(const n of t)for(const i of this._patterns){const r=Qp(n,i);r&&e.push({element:n,pattern:i,match:r})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;const t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function Qp(o,t){if(typeof t=="function")return t(o);const e={};return t.name&&(e.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(t.name,o.name),!e.name)||t.attributes&&(e.attributes=function(n,i){const r=new Set(i.getAttributeKeys());return Be(n)?(n.style!==void 0&&G("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&G("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),Bu(n,r,s=>i.getAttribute(s))}(t.attributes,o),!e.attributes)||t.classes&&(e.classes=function(n,i){return Bu(n,i.getClassNames(),()=>{})}(t.classes,o),!e.classes)||t.styles&&(e.styles=function(n,i){return Bu(n,i.getStyleNames(!0),r=>i.getStyle(r))}(t.styles,o),!e.styles)?null:e}function Bu(o,t,e){const n=function(s){return Array.isArray(s)?s.map(a=>Be(a)?(a.key!==void 0&&a.value!==void 0||G("matcher-pattern-missing-key-or-value",a),[a.key,a.value]):[a,!0]):Be(s)?Object.entries(s):[[s,!0]]}(o),i=Array.from(t),r=[];if(n.forEach(([s,a])=>{i.forEach(c=>{(function(l,h){return l===!0||l===h||l instanceof RegExp&&h.match(l)})(s,c)&&function(l,h,m){if(l===!0)return!0;const b=m(h);return l===b||l instanceof RegExp&&!!String(b).match(l)}(a,c,e)&&r.push(c)})}),n.length&&!(r.length<n.length))return r}const Va=function(o){return typeof o=="symbol"||Ve(o)&&Sn(o)=="[object Symbol]"};var T1=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,B1=/^\w*$/;const Pu=function(o,t){if(Te(o))return!1;var e=typeof o;return!(e!="number"&&e!="symbol"&&e!="boolean"&&o!=null&&!Va(o))||B1.test(o)||!T1.test(o)||t!=null&&o in Object(t)};function Nu(o,t){if(typeof o!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,i=t?t.apply(this,n):n[0],r=e.cache;if(r.has(i))return r.get(i);var s=o.apply(this,n);return e.cache=r.set(i,s)||r,s};return e.cache=new(Nu.Cache||_a),e}Nu.Cache=_a;const P1=Nu,N1=function(o){var t=P1(o,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t};var O1=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,L1=/\\(\\)?/g,z1=N1(function(o){var t=[];return o.charCodeAt(0)===46&&t.push(""),o.replace(O1,function(e,n,i,r){t.push(i?r.replace(L1,"$1"):n||e)}),t});const R1=z1,F1=function(o,t){for(var e=-1,n=o==null?0:o.length,i=Array(n);++e<n;)i[e]=t(o[e],e,o);return i};var Zp=he?he.prototype:void 0,Jp=Zp?Zp.toString:void 0;const j1=function o(t){if(typeof t=="string")return t;if(Te(t))return F1(t,o)+"";if(Va(t))return Jp?Jp.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},Ou=function(o){return o==null?"":j1(o)},Ha=function(o,t){return Te(o)?o:Pu(o,t)?[o]:R1(Ou(o))},V1=function(o){var t=o==null?0:o.length;return t?o[t-1]:void 0},Fi=function(o){if(typeof o=="string"||Va(o))return o;var t=o+"";return t=="0"&&1/o==-1/0?"-0":t},Lu=function(o,t){for(var e=0,n=(t=Ha(t,o)).length;o!=null&&e<n;)o=o[Fi(t[e++])];return e&&e==n?o:void 0},Xp=function(o,t,e){var n=-1,i=o.length;t<0&&(t=-t>i?0:i+t),(e=e>i?i:e)<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+t];return r},H1=function(o,t){return t.length<2?o:Lu(o,Xp(t,0,-1))},U1=function(o,t){return t=Ha(t,o),(o=H1(o,t))==null||delete o[Fi(V1(t))]},q1=function(o,t){return o==null||U1(o,t)},Fo=function(o,t,e){var n=o==null?void 0:Lu(o,t);return n===void 0?e:n},W1=function(o,t,e,n){if(!Lt(o))return o;for(var i=-1,r=(t=Ha(t,o)).length,s=r-1,a=o;a!=null&&++i<r;){var c=Fi(t[i]),l=e;if(c==="__proto__"||c==="constructor"||c==="prototype")return o;if(i!=s){var h=a[c];(l=void 0)==void 0&&(l=Lt(h)?h:xa(t[i+1])?[]:{})}ou(a,c,l),a=a[c]}return o},$1=function(o,t,e){return o==null?o:W1(o,t,e)};class zu{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=function(n){let i=null,r=0,s=0,a=null;const c=new Map;if(n==="")return c;n.charAt(n.length-1)!=";"&&(n+=";");for(let l=0;l<n.length;l++){const h=n.charAt(l);if(i===null)switch(h){case":":a||(a=n.substr(r,l-r),s=l+1);break;case'"':case"'":i=h;break;case";":{const m=n.substr(s,l-s);a&&c.set(a.trim(),m.trim()),a=null,r=l+1;break}}else h===i&&(i=null)}return c}(t);for(const[n,i]of e)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(Lt(t))for(const[n,i]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=Ru(t);q1(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!Lt(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([e])=>e)}clear(){this._styles={}}getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),i=Fo(this._styles,n);i&&!Object.keys(i).length&&this.remove(n)}}class G1{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(Lt(e))Fu(n,Ru(t),e);else if(this._normalizers.has(t)){const i=this._normalizers.get(t),{path:r,value:s}=i(e);Fu(n,r,s)}else Fu(n,t,e)}getNormalized(t,e){if(!t)return yu({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if(typeof n=="string")return Fo(e,n);const i=n(t,e);if(i)return i}return Fo(e,Ru(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){const e=new Set;for(const n of this._consumables.keys()){const i=this.getNormalized(n,t);i&&(typeof i!="object"||Object.keys(i).length)&&e.add(n)}for(const n of Object.keys(t))e.add(n);return Array.from(e)}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function Ru(o){return o.replace("-",".")}function Fu(o,t,e){let n=e;Lt(e)&&(n=yu({},Fo(o,t),e)),$1(o,t,n)}class Pe extends oi{constructor(t,e,n,i){if(super(t),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=e,this._attrs=function(r){const s=cn(r);for(const[a,c]of s)c===null?s.delete(a):typeof c!="string"&&s.set(a,String(c));return s}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");tf(this._classes,r),this._attrs.delete("class")}this._styles=new zu(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){const e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof Pe))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t){return this._styles.getStyleNames(t)}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new dn(...t);let n=this.parent;for(;n&&!n.is("documentFragment");){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){const e=[];if(t)for(const i of this.getChildren())e.push(i._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new zt(r,s)]:(xe(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new zt(r,a):a instanceof ln?new zt(r,a.data):a))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){const n=String(e);this._fireChange("attributes",this),t=="class"?tf(this._classes,n):t=="style"?this._styles.setTo(n):this._attrs.set(t,n)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(const e of Ht(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(const e of Ht(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),typeof t!="string"?this._styles.set(t):this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(const e of Ht(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function tf(o,t){const e=t.split(/\s+/);o.clear(),e.forEach(n=>o.add(n))}Pe.prototype.is=function(o,t){return t?t===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class jo extends Pe{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=K1}}function K1(){const o=[...this.getChildren()],t=o[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const e of o)if(!e.is("uiElement"))return null;return this.childCount}jo.prototype.is=function(o,t){return t?t===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ua extends nt(jo){constructor(t,e,n,i){super(t,e,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",r=>r&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}Ua.prototype.is=function(o,t){return t?t===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const ef=Symbol("rootName");class nf extends Ua{constructor(t,e){super(t,e),this.rootName="main"}get rootName(){return this.getCustomProperty(ef)}set rootName(t){this._setCustomProperty(ef,t)}set _name(t){this.name=t}}nf.prototype.is=function(o,t){return t?t===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class ri{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new P("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new P("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this._position=X._createAt(t.startPosition):this._position=X._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(t){let e,n;do n=this.position,e=this.next();while(!e.done&&t(e.value));e.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof zt){if(t.isAtEnd)return this._position=X._createAfter(n),this._next();i=n.data[t.offset]}else i=n.getChild(t.offset);if(i instanceof Pe){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(t))return{done:!0,value:void 0};t.offset++}else t=new X(i,0);return this._position=t,this._formatReturnValue("elementStart",i,e,t,1)}if(i instanceof zt){if(this.singleCharacters)return t=new X(i,0),this._position=t,this._next();let r,s=i.data.length;return i==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new ln(i,0,s),t=X._createAfter(r)):(r=new ln(i,0,i.data.length),t.offset++),this._position=t,this._formatReturnValue("text",r,e,t,s)}if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;const s=new ln(n,t.offset,r);return t.offset+=r,this._position=t,this._formatReturnValue("text",s,e,t,r)}return t=X._createAfter(n),this._position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof zt){if(t.isAtStart)return this._position=X._createBefore(n),this._previous();i=n.data[t.offset-1]}else i=n.getChild(t.offset-1);if(i instanceof Pe)return this.shallow?(t.offset--,this._position=t,this._formatReturnValue("elementStart",i,e,t,1)):(t=new X(i,i.childCount),this._position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,e,t));if(i instanceof zt){if(this.singleCharacters)return t=new X(i,i.data.length),this._position=t,this._previous();let r,s=i.data.length;if(i==this._boundaryStartParent){const a=this.boundaries.start.offset;r=new ln(i,a,i.data.length-a),s=r.data.length,t=X._createBefore(r)}else r=new ln(i,0,i.data.length),t.offset--;return this._position=t,this._formatReturnValue("text",r,e,t,s)}if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{const a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=t.offset-a}t.offset-=r;const s=new ln(n,t.offset,r);return this._position=t,this._formatReturnValue("text",s,e,t,r)}return t=X._createBefore(n),this._position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,i,r){return e instanceof ln&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=X._createAfter(e.textNode):(i=X._createAfter(e.textNode),this._position=i)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=X._createBefore(e.textNode):(i=X._createBefore(e.textNode),this._position=i))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:r}}}}class X extends ii{constructor(t,e){super(),this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof Ua);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=X._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new ri(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return i===0?null:e[i-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const i=ke(e,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return e[i]<n[i]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new ri(t)}clone(){return new X(this.parent,this.offset)}static _createAt(t,e){if(t instanceof X)return new this(t.parent,t.offset);{const n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new P("view-createpositionat-offset-required",n)}return new X(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new X(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new P("view-position-after-root",t,{root:t});return new X(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new X(t.textNode,t.offsetInText);if(!t.parent)throw new P("view-position-before-root",t,{root:t});return new X(t.parent,t.index)}}X.prototype.is=function(o){return o==="position"||o==="view:position"};class gt extends ii{constructor(t,e=null){super(),this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new ri({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(qa,{direction:"backward"}),e=this.end.getLastMatchingPosition(qa);return t.parent.is("$text")&&t.isAtStart&&(t=X._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=X._createAfter(e.parent)),new gt(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(qa);if(t.isAfter(this.end)||t.isEqual(this.end))return new gt(t,t);let e=this.end.getLastMatchingPosition(qa,{direction:"backward"});const n=t.nodeAfter,i=e.nodeBefore;return n&&n.is("$text")&&(t=new X(n,0)),i&&i.is("$text")&&(e=new X(i,i.data.length)),new gt(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new gt(this.start,t.start)),this.containsPosition(t.end)&&e.push(new gt(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new gt(e,n)}return null}getWalker(t={}){return t.boundaries=this,new ri(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new gt(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new ri(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new ri(t);yield e.position;for(const n of e)yield n.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,i){return new this(new X(t,e),new X(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(X._createBefore(t),e)}}function qa(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}gt.prototype.is=function(o){return o==="range"||o==="view:range"};class Xe extends yt(ii){constructor(...t){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",t.length&&this.setTo(...t)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=vo(this.getRanges());if(e!=vo(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let r of t.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...t){let[e,n,i]=t;if(typeof n=="object"&&(i=n,n=void 0),e===null)this._setRanges([]),this._setFakeOptions(i);else if(e instanceof Xe||e instanceof ju)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof gt)this._setRanges([e],i&&i.backward),this._setFakeOptions(i);else if(e instanceof X)this._setRanges([new gt(e)]),this._setFakeOptions(i);else if(e instanceof oi){const r=!!i&&!!i.backward;let s;if(n===void 0)throw new P("view-selection-setto-required-second-parameter",this);s=n=="in"?gt._createIn(e):n=="on"?gt._createOn(e):new gt(X._createAt(e,n)),this._setRanges([s],r),this._setFakeOptions(i)}else{if(!xe(e))throw new P("view-selection-setto-not-selectable",this);this._setRanges(e,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new P("view-selection-setfocus-no-ranges",this);const n=X._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new gt(n,i),!0):this._addRange(new gt(i,n)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof gt))throw new P("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new P("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new gt(t.start,t.end))}}Xe.prototype.is=function(o){return o==="selection"||o==="view:selection"};class ju extends yt(ii){constructor(...t){super(),this._selection=new Xe,this._selection.delegate("change").to(this),t.length&&this._selection.setTo(...t)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(...t){this._selection.setTo(...t)}_setFocus(t,e){this._selection.setFocus(t,e)}}ju.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class ji extends St{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Vu=Symbol("bubbling contexts");function Hu(o){return class extends o{fire(t,...e){try{const n=t instanceof St?t:new St(this,t),i=Uu(this);if(!i.size)return;if(Vo(n,"capturing",this),Vi(i,"$capture",n,...e))return n.return;const r=n.startRange||this.selection.getFirstRange(),s=r?r.getContainedElement():null,a=!!s&&!!of(i,s);let c=s||function(l){if(!l)return null;const h=l.start.parent,m=l.end.parent,b=h.getPath(),_=m.getPath();return b.length>_.length?h:m}(r);if(Vo(n,"atTarget",c),!a){if(Vi(i,"$text",n,...e))return n.return;Vo(n,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(Vi(i,"$root",n,...e))return n.return}else if(c.is("element")&&Vi(i,c.name,n,...e))return n.return;if(Vi(i,c,n,...e))return n.return;c=c.parent,Vo(n,"bubbling",c)}return Vo(n,"bubbling",this),Vi(i,"$document",n,...e),n.return}catch(n){P.rethrowUnexpectedError(n,this)}}_addEventListener(t,e,n){const i=Ht(n.context||"$document"),r=Uu(this);for(const s of i){let a=r.get(s);a||(a=new(yt()),r.set(s,a)),this.listenTo(a,t,e,n)}}_removeEventListener(t,e){const n=Uu(this);for(const i of n.values())this.stopListening(i,t,e)}}}{const o=Hu(Object);["fire","_addEventListener","_removeEventListener"].forEach(t=>{Hu[t]=o.prototype[t]})}function Vo(o,t,e){o instanceof ji&&(o._eventPhase=t,o._currentTarget=e)}function Vi(o,t,e,...n){const i=typeof t=="string"?o.get(t):of(o,t);return!!i&&(i.fire(e,...n),e.stop.called)}function of(o,t){for(const[e,n]of o)if(typeof e=="function"&&e(t))return n;return null}function Uu(o){return o[Vu]||(o[Vu]=new Map),o[Vu]}class Wa extends Hu(nt()){constructor(t){super(),this._postFixers=new Set,this.selection=new ju,this.roots=new Qe({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.forEach(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(e=n(t),e)break;while(e)}}const ag=class ag extends Pe{constructor(t,e,n,i){super(t,e,n,i),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=Y1}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new P("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t=!1){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}};ag.DEFAULT_PRIORITY=10;let Bn=ag;function Y1(){if(qu(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(qu(o)>1)return null;o=o.parent}return!o||qu(o)>1?null:this.childCount}function qu(o){return Array.from(o.getChildren()).filter(t=>!t.is("uiElement")).length}Bn.prototype.is=function(o,t){return t?t===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Wu extends Pe{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=Q1}_insertChild(t,e){if(e&&(e instanceof oi||Array.from(e).length>0))throw new P("view-emptyelement-cannot-add",[this,e]);return 0}}function Q1(){return null}Wu.prototype.is=function(o,t){return t?t===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class $a extends Pe{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=J1}_insertChild(t,e){if(e&&(e instanceof oi||Array.from(e).length>0))throw new P("view-uielement-cannot-add",[this,e]);return 0}render(t,e){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function Z1(o){o.document.on("arrowKey",(t,e)=>function(n,i,r){if(i.keyCode==Et.arrowright){const s=i.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||i.shiftKey){const c=s.focusNode,l=s.focusOffset,h=r.domPositionToView(c,l);if(h===null)return;let m=!1;const b=h.getLastMatchingPosition(_=>(_.item.is("uiElement")&&(m=!0),!(!_.item.is("uiElement")&&!_.item.is("attributeElement"))));if(m){const _=r.viewPositionToDom(b);a?s.collapse(_.parent,_.offset):s.extend(_.parent,_.offset)}}}}(0,e,o.domConverter),{priority:"low"})}function J1(){return null}$a.prototype.is=function(o,t){return t?t===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class $u extends Pe{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=X1}_insertChild(t,e){if(e&&(e instanceof oi||Array.from(e).length>0))throw new P("view-rawelement-cannot-add",[this,e]);return 0}render(t,e){}}function X1(){return null}$u.prototype.is=function(o,t){return t?t===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class si extends yt(ii){constructor(t,e){super(),this._children=[],this._customProperties=new Map,this.document=t,e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new zt(r,s)]:(xe(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new zt(r,a):a instanceof ln?new zt(r,a.data):a))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}si.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class rf{constructor(t){this._cloneGroups=new Map,this._slotFactory=null,this.document=t}setSelection(...t){this.document.selection._setTo(...t)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new si(this.document,t)}createText(t){return new zt(this.document,t)}createAttributeElement(t,e,n={}){const i=new Bn(this.document,t,e);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(t,e,n={},i={}){let r=null;Be(n)?i=n:r=n;const s=new jo(this.document,t,e,r);return i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}createEditableElement(t,e,n={}){const i=new Ua(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(t,e,n={}){const i=new Wu(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(t,e,n){const i=new $a(this.document,t,e);return n&&(i.render=n),i}createRawElement(t,e,n,i={}){const r=new $u(this.document,t,e);return n&&(r.render=n),i.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),r}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){Be(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof X?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new P("view-writer-break-non-container-element",this.document);if(!e.parent)throw new P("view-writer-break-root",this.document);if(t.isAtStart)return X._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(X._createAfter(e),n);const i=new gt(t,X._createAt(e,"end")),r=new X(n,0);this.move(i,r)}return X._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new X(s,a))}const i=n.getChild(e-1),r=n.getChild(e);if(!i||!r)return t;if(i.is("$text")&&r.is("$text"))return af(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){const s=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new X(i,s))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new P("view-writer-merge-containers-invalid-position",this.document);const i=e.getChild(e.childCount-1),r=i instanceof zt?X._createAt(i,"end"):X._createAt(e,"end");return this.move(gt._createIn(n),X._createAt(e,"end")),this.remove(gt._createOn(n)),r}insert(t,e){cf(e=xe(e)?[...e]:[e],this.document);const n=e.reduce((s,a)=>{const c=s[s.length-1],l=!a.is("uiElement");return c&&c.breakAttributes==l?c.nodes.push(a):s.push({breakAttributes:l,nodes:[a]}),s},[]);let i=null,r=t;for(const{nodes:s,breakAttributes:a}of n){const c=this._insertNodes(r,s,a);i||(i=c.start),r=c.end}return i?new gt(i,r):new gt(t)}remove(t){const e=t instanceof gt?t:gt._createOn(t);if(Ho(e,this.document),e.isCollapsed)return new si(this.document);const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,s=i.offset-n.offset,a=r._removeChildren(n.offset,s);for(const l of a)this._removeFromClonedElementsGroup(l);const c=this.mergeAttributes(n);return e.start=c,e.end=c.clone(),new si(this.document,a)}clear(t,e){Ho(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const r=i.item;let s;if(r.is("element")&&e.isSimilar(r))s=gt._createOn(r);else if(!i.nextPosition.isAfter(t.start)&&r.is("$textProxy")){const a=r.getAncestors().find(c=>c.is("element")&&e.isSimilar(c));a&&(s=gt._createIn(a))}s&&(s.end.isAfter(t.end)&&(s.end=t.end),s.start.isBefore(t.start)&&(s.start=t.start),this.remove(s))}}move(t,e){let n;if(e.isAfter(t.end)){const i=(e=this._breakAttributes(e,!0)).parent,r=i.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=i.childCount-r}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof Bn))throw new P("view-writer-wrap-invalid-attribute",this.document);if(Ho(t,this.document),t.isCollapsed){let i=t.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(i=i.getLastMatchingPosition(s=>s.item.is("uiElement"))),i=this._wrapPosition(i,e);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(t.start)&&this.setSelection(i),new gt(i)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof Bn))throw new P("view-writer-unwrap-invalid-attribute",this.document);if(Ho(t,this.document),t.isCollapsed)return t;const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,i.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new gt(a,c)}rename(t,e){const n=new jo(this.document,t,e.getAttributes());return this.insert(X._createAfter(e),n),this.move(gt._createIn(e),X._createAt(n,0)),this.remove(gt._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return X._createAt(t,e)}createPositionAfter(t){return X._createAfter(t)}createPositionBefore(t){return X._createBefore(t)}createRange(t,e){return new gt(t,e)}createRangeOn(t){return gt._createOn(t)}createRangeIn(t){return gt._createIn(t)}createSelection(...t){return new Xe(...t)}createSlot(t="children"){if(!this._slotFactory)throw new P("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let i,r;if(i=n?Gu(t):t.parent.is("$text")?t.parent.parent:t.parent,!i)throw new P("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(t,!0):t.parent.is("$text")?Ku(t):t;const s=i._insertChild(r.offset,e);for(const h of e)this._addToClonedElementsGroup(h);const a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;const l=this.mergeAttributes(a);return new gt(c,l)}_wrapChildren(t,e,n,i){let r=e;const s=[];for(;r<n;){const c=t.getChild(r),l=c.is("$text"),h=c.is("attributeElement");if(h&&this._wrapAttributeElement(i,c))s.push(new X(t,r));else if(l||!h||ty(i,c)){const m=i._clone();c._remove(),m._appendChild(c),t._insertChild(r,m),this._addToClonedElementsGroup(m),s.push(new X(t,r))}else this._wrapChildren(c,0,c.childCount,i);r++}let a=0;for(const c of s)c.offset-=a,c.offset!=e&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return gt._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,i){let r=e;const s=[];for(;r<n;){const c=t.getChild(r);if(c.is("attributeElement"))if(c.isSimilar(i)){const l=c.getChildren(),h=c.childCount;c._remove(),t._insertChild(r,l),this._removeFromClonedElementsGroup(c),s.push(new X(t,r),new X(t,r+h)),r+=h,n+=h-1}else this._unwrapAttributeElement(i,c)?(s.push(new X(t,r),new X(t,r+1)),r++):(this._unwrapChildren(c,0,c.childCount,i),r++);else r++}let a=0;for(const c of s)c.offset-=a,!(c.offset==e||c.offset==n)&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return gt._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=this._wrapChildren(r,n.offset,i.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new gt(a,c)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return sf(t.clone());t.parent.is("$text")&&(t=Ku(t));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const i=new gt(t,t.getShiftedBy(1));this.wrap(i,e);const r=new X(n.parent,n.index);n._remove();const s=r.nodeBefore,a=r.nodeAfter;return s instanceof zt&&a instanceof zt?af(s,a):sf(r)}_wrapAttributeElement(t,e){if(!lf(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!lf(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,i=t.end;if(Ho(t,this.document),t.isCollapsed){const c=this._breakAttributes(t.start,e);return new gt(c,c)}const r=this._breakAttributes(i,e),s=r.parent.childCount,a=this._breakAttributes(n,e);return r.offset+=r.parent.childCount-s,new gt(a,r)}_breakAttributes(t,e=!1){const n=t.offset,i=t.parent;if(t.parent.is("emptyElement"))throw new P("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new P("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new P("view-writer-cannot-break-raw-element",this.document);if(!e&&i.is("$text")&&Yu(i.parent)||Yu(i))return t.clone();if(i.is("$text"))return this._breakAttributes(Ku(t),e);if(n==i.childCount){const r=new X(i.parent,i.index+1);return this._breakAttributes(r,e)}if(n===0){const r=new X(i.parent,i.index);return this._breakAttributes(r,e)}{const r=i.index+1,s=i._clone();i.parent._insertChild(r,s),this._addToClonedElementsGroup(s);const a=i.childCount-n,c=i._removeChildren(n,a);s._appendChild(c);const l=new X(i.parent,r);return this._breakAttributes(l,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const i of t.getChildren())this._addToClonedElementsGroup(i);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const i of t.getChildren())this._removeFromClonedElementsGroup(i);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function Gu(o){let t=o.parent;for(;!Yu(t);){if(!t)return;t=t.parent}return t}function ty(o,t){return o.priority<t.priority||!(o.priority>t.priority)&&o.getIdentity()<t.getIdentity()}function sf(o){const t=o.nodeBefore;if(t&&t.is("$text"))return new X(t,t.data.length);const e=o.nodeAfter;return e&&e.is("$text")?new X(e,0):o}function Ku(o){if(o.offset==o.parent.data.length)return new X(o.parent.parent,o.parent.index+1);if(o.offset===0)return new X(o.parent.parent,o.parent.index);const t=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new zt(o.root.document,t)),new X(o.parent.parent,o.parent.index+1)}function af(o,t){const e=o.data.length;return o._data+=t.data,t._remove(),new X(o,e)}const ey=[zt,Bn,jo,Wu,$u,$a];function cf(o,t){for(const e of o){if(!ey.some(n=>e instanceof n))throw new P("view-writer-insert-invalid-node-type",t);e.is("$text")||cf(e.getChildren(),t)}}function Yu(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function Ho(o,t){const e=Gu(o.start),n=Gu(o.end);if(!e||!n||e!==n)throw new P("view-writer-invalid-range-container",t)}function lf(o,t){return o.id===null&&t.id===null}const df=o=>o.createTextNode(" "),uf=o=>{const t=o.createElement("span");return t.dataset.ckeFiller="true",t.innerText=" ",t},hf=o=>{const t=o.createElement("br");return t.dataset.ckeFiller="true",t},Uo="⁠".repeat(7);function Ne(o){return typeof o=="string"?o.substr(0,7)===Uo:Qt(o)&&o.data.substr(0,7)===Uo}function Hi(o){return o.data.length==7&&Ne(o)}function gf(o){const t=typeof o=="string"?o:o.data;return Ne(o)?t.slice(7):t}function ny(o,t){if(t.keyCode==Et.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){const n=e.getRangeAt(0).startContainer,i=e.getRangeAt(0).startOffset;Ne(n)&&i<=7&&e.collapse(n,0)}}}var Ga=k(8264),qo={attributes:{"data-cke":!0}};qo.setAttributes=Z(),qo.insert=Q().bind(null,"head"),qo.domAPI=Y(),qo.insertStyleElement=J(),K()(Ga.A,qo),Ga.A&&Ga.A.locals&&Ga.A.locals;class iy extends nt(){constructor(t,e){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=t,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),I.isBlink&&!I.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()})}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new P("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){if(this.isComposing&&!I.isAndroid)return;let t=null;const e=!(I.isBlink&&!I.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t&&t.parent.is("$text")&&(t=X._createBefore(t.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){const n=this.domConverter.viewPositionToDom(t),i=n.parent.ownerDocument;Ne(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=mf(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.childNodes),i=Array.from(this.domConverter.viewChildrenToDom(t,{withChildren:!1})),r=this._diffNodeLists(n,i),s=this._findUpdateActions(r,n,i,oy);if(s.indexOf("update")!==-1){const a={equal:0,insert:0,delete:0};for(const c of s)if(c==="update"){const l=a.equal+a.insert,h=a.equal+a.delete,m=t.getChild(l);!m||m.is("uiElement")||m.is("rawElement")||this._updateElementMappings(m,n[h]),mp(i[l]),a.equal++}else a[c]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("$text")?X._createBefore(t.parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&Qt(e.parent)&&Ne(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!Ne(t))throw new P("view-renderer-filler-was-lost",this);Hi(t)?t.remove():t.data=t.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;const a=s.findAncestor(c=>c.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(e))return!1;const i=t.nodeBefore,r=t.nodeAfter;return!(i instanceof zt||r instanceof zt)&&!!(n!==e.getFillerOffset()||i&&i.is("element","br"))&&(!I.isAndroid||!i&&!r)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t);let i=this.domConverter.viewToDom(t).data;const r=e.inlineFillerPosition;r&&r.parent==t.parent&&r.offset==t.index&&(i=Uo+i),this._updateTextNode(n,i)}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(e){for(const n of e.attributes){const i=n.name;t.hasAttribute(i)||this.domConverter.removeDomElementAttribute(e,i)}for(const n of t.getAttributeKeys())this.domConverter.setDomElementAttribute(e,n,t.getAttribute(n),t)}}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;if(I.isAndroid){let m=null;for(const b of Array.from(n.childNodes)){if(m&&Qt(m)&&Qt(b)){n.normalize();break}m=b}}const i=e.inlineFillerPosition,r=n.childNodes,s=Array.from(this.domConverter.viewChildrenToDom(t,{bind:!0}));i&&i.parent===t&&mf(n.ownerDocument,s,i.offset);const a=this._diffNodeLists(r,s),c=this._findUpdateActions(a,r,s,ry);let l=0;const h=new Set;for(const m of c)m==="delete"?(h.add(r[l]),mp(r[l])):m!=="equal"&&m!=="update"||l++;l=0;for(const m of c)m==="insert"?(up(n,l,s[l]),l++):m==="update"?(this._updateTextNode(r[l],s[l].data),l++):m==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[l])),l++);for(const m of h)m.parentNode||this.domConverter.unbindDomElement(m)}_diffNodeLists(t,e){return t=function(n,i){const r=Array.from(n);return r.length==0||!i||r[r.length-1]==i&&r.pop(),r}(t,this._fakeSelectionContainer),ct(t,e,sy.bind(null,this.domConverter))}_findUpdateActions(t,e,n,i){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let r=[],s=[],a=[];const c={equal:0,insert:0,delete:0};for(const l of t)l==="insert"?a.push(n[c.equal+c.insert]):l==="delete"?s.push(e[c.equal+c.delete]):(r=r.concat(ct(s,a,i).map(h=>h==="equal"?"update":h)),r.push("equal"),s=[],a=[]),c[l]++;return r.concat(ct(s,a,i).map(l=>l==="equal"?"update":l))}_updateTextNode(t,e){const n=t.data;n!=e&&(I.isAndroid&&this.isComposing&&n.replace(/\u00A0/g," ")==e.replace(/\u00A0/g," ")||this._updateTextNodeInternal(t,e))}_updateTextNodeInternal(t,e){const n=W(t.data,e);for(const i of n)i.type==="insert"?t.insertData(i.index,i.values.join("")):t.deleteData(i.index,i.howMany)}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(I.isBlink&&!I.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(t)):this.isComposing&&I.isAndroid||this._updateDomSelection(t))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){const a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent=" ",a}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=e.getSelection(),r=e.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);e.setBaseAndExtent(n.parent,n.offset,i.parent,i.offset),I.isGecko&&function(r,s){let a=r.parent,c=r.offset;if(Qt(a)&&Hi(a)&&(c=No(a)+1,a=a.parentNode),a.nodeType!=Node.ELEMENT_NODE||c!=a.childNodes.length-1)return;const l=a.childNodes[c];l&&l.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(i,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const t of this.domDocuments){const e=t.getSelection();if(e.rangeCount){const n=t.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&e.removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function mf(o,t,e){const n=t instanceof Array?t:t.childNodes,i=n[e];if(Qt(i))return i.data=Uo+i.data,i;{const r=o.createTextNode(Uo);return Array.isArray(t)?n.splice(e,0,r):up(t,e,r),r}}function oy(o,t){return Mn(o)&&Mn(t)&&!Qt(o)&&!Qt(t)&&!Oo(o)&&!Oo(t)&&o.tagName.toLowerCase()===t.tagName.toLowerCase()}function ry(o,t){return Mn(o)&&Mn(t)&&Qt(o)&&Qt(t)}function sy(o,t,e){return t===e||(Qt(t)&&Qt(e)?t.data===e.data:!(!o.isBlockFiller(t)||!o.isBlockFiller(e)))}const ay=hf(A.document),cy=df(A.document),ly=uf(A.document),Ka="data-ck-unsafe-attribute-",pf="data-ck-unsafe-element";class Ya{constructor(t,{blockFillerMode:e,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new dn,this._inlineObjectElementMatcher=new dn,this._elementsWithTemporaryCustomProperties=new Set,this.document=t,this.renderingMode=n,this.blockFillerMode=e||(n==="editing"?"br":"nbsp"),this.preElements=["pre","textarea"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?A.document:A.document.implementation.createHTMLDocument("")}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new Xe(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const n of t.children)this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);const n=new DOMParser().parseFromString(e,"text/html"),i=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)i.appendChild(r[0]);const s=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),a=[];let c;for(;c=s.nextNode();)a.push(c);for(const l of a){for(const m of l.getAttributeNames())this.setDomElementAttribute(l,m,l.getAttribute(m));const h=l.tagName.toLowerCase();this._shouldRenameElement(h)&&(bf(h),l.replaceWith(this._createReplacementDomElement(h,l)))}for(;t.firstChild;)t.firstChild.remove();t.append(i)}viewToDom(t,e={}){if(t.is("$text")){const n=this._processDataFromViewText(t);return this._domDocument.createTextNode(n)}{const n=t;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let i;if(n.is("documentFragment"))i=this._domDocument.createDocumentFragment(),e.bind&&this.bindDocumentFragments(i,n);else{if(n.is("uiElement"))return i=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),e.bind&&this.bindElements(i,n),i;this._shouldRenameElement(n.name)?(bf(n.name),i=this._createReplacementDomElement(n.name)):i=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(i,this),e.bind&&this.bindElements(i,n);for(const r of n.getAttributeKeys())this.setDomElementAttribute(i,r,n.getAttribute(r),n)}if(e.withChildren!==!1)for(const r of this.viewChildrenToDom(n,e))i instanceof HTMLTemplateElement?i.content.appendChild(r):i.appendChild(r);return i}}setDomElementAttribute(t,e,n,i){const r=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(e);r||G("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),function(s){try{A.document.createAttribute(s)}catch{return!1}return!0}(e)?(t.hasAttribute(e)&&!r?t.removeAttribute(e):t.hasAttribute(Ka+e)&&r&&t.removeAttribute(Ka+e),t.setAttribute(r?e:Ka+e,n)):G("domconverter-invalid-attribute-detected",{domElement:t,key:e,value:n})}removeDomElementAttribute(t,e){e!=pf&&(t.removeAttribute(e),t.removeAttribute(Ka+e))}*viewChildrenToDom(t,e={}){const n=t.getFillerOffset&&t.getFillerOffset();let i=0;for(const r of t.getChildren()){n===i&&(yield this._getBlockFiller());const s=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!ge(r.getAttributes());if(s&&this.renderingMode=="data")if(r.is("rawElement")){const a=this._domDocument.createElement(r.name);r.render(a,this),yield*[...a.childNodes]}else yield*this.viewChildrenToDom(r,e);else s&&G("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,e);i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),i=this._domDocument.createRange();return i.setStart(e.parent,e.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(t){const e=t.parent;if(e.is("$text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let i=t.offset;return Ne(n)&&(i+=7),{parent:n,offset:i}}{let n,i,r;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;r=n.childNodes[0]}else{const s=t.nodeBefore;if(i=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(s),!i)return null;n=i.parentNode,r=i.nextSibling}return Qt(r)&&Ne(r)?{parent:r,offset:7}:{parent:n,offset:i?No(i)+1:0}}}domToView(t,e={}){const n=[],i=this._domToView(t,e,n),r=i.next().value;return r?(i.next(),this._processDomInlineNodes(null,n,e),r.is("$text")&&r.data.length==0?null:r):null}*domChildrenToView(t,e={},n=[]){let i=[];i=t instanceof HTMLTemplateElement?[...t.content.childNodes]:[...t.childNodes];for(let r=0;r<i.length;r++){const s=i[r],a=this._domToView(s,e,n),c=a.next().value;c!==null&&(this._isBlockViewElement(c)&&this._processDomInlineNodes(t,n,e),yield c,a.next())}this._processDomInlineNodes(t,n,e)}domSelectionToView(t){if(function(i){if(!I.isGecko||!i.rangeCount)return!1;const r=i.getRangeAt(0).startContainer;try{Object.prototype.toString.call(r)}catch{return!0}return!1}(t))return new Xe([]);if(t.rangeCount===1){let i=t.getRangeAt(0).startContainer;Qt(i)&&(i=i.parentNode);const r=this.fakeSelectionToView(i);if(r)return r}const e=this.isDomSelectionBackward(t),n=[];for(let i=0;i<t.rangeCount;i++){const r=t.getRangeAt(i),s=this.domRangeToView(r);s&&n.push(s)}return new Xe(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new gt(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,No(t));const n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return X._createBefore(n);if(Qt(t)){if(Hi(t))return this.domPositionToView(t.parentNode,No(t));const i=this.findCorrespondingViewText(t);let r=e;return i?(Ne(t)&&(r-=7,r=r<0?0:r),new X(i,r)):null}if(e===0){const i=this.mapDomToView(t);if(i)return new X(i,0)}else{const i=t.childNodes[e-1];if(Qt(i)&&Hi(i)||i&&this.isBlockFiller(i))return this.domPositionToView(i.parentNode,No(i));const r=Qt(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new X(r.parent,r.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(Hi(t))return null;const e=this.getHostViewElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const r=i.nextSibling;return r instanceof zt?r:null}}else{const i=this.mapDomToView(t.parentNode);if(i){const r=i.getChild(0);return r instanceof zt?r:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:n,scrollY:i}=A.window,r=[];ff(e,s=>{const{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),e.focus(),ff(e,s=>{const[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),A.window.scrollTo(n,i)}}_clearDomSelection(){const t=this.mapViewToDom(this.document.selection.editableElement);if(!t)return;const e=t.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(e);n&&n.rangeCount>0&&e.removeAllRanges()}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(ay):!(t.tagName!=="BR"||!kf(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(ly)||function(e,n){return e.isEqualNode(cy)&&kf(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=this._domDocument.createRange();try{e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset)}catch{return!1}const n=e.collapsed;return e.detach(),n}getHostViewElement(t){const e=$v(t);for(e.pop();e.length;){const n=e.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}registerInlineObjectMatcher(t){this._inlineObjectElementMatcher.add(t)}_clearTemporaryCustomProperties(){for(const t of this._elementsWithTemporaryCustomProperties)t._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return df(this._domDocument);case"markedNbsp":return uf(this._domDocument);case"br":return hf(this._domDocument)}}_isDomSelectionPositionCorrect(t,e){if(Qt(t)&&Ne(t)&&e<7||this.isElement(t)&&Ne(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(t,e,n){if(this.isBlockFiller(t))return null;const i=this.getHostViewElement(t);if(i)return i;if(Oo(t)&&e.skipComments)return null;if(Qt(t)){if(Hi(t))return null;{const r=t.data;if(r==="")return null;const s=new zt(this.document,r);return n.push(s),s}}{let r=this.mapDomToView(t);if(r)return this._isInlineObjectElement(r)&&n.push(r),r;if(this.isDocumentFragment(t))r=new si(this.document),e.bind&&this.bindDocumentFragments(t,r);else{r=this._createViewElement(t,e),e.bind&&this.bindElements(t,r);const a=t.attributes;if(a)for(let c=a.length,l=0;l<c;l++)r._setAttribute(a[l].name,a[l].value);if(this._isViewElementWithRawContent(r,e))return r._setCustomProperty("$rawContent",t.innerHTML),this._isBlockViewElement(r)||n.push(r),r;if(Oo(t))return r._setCustomProperty("$rawContent",t.data),r}yield r;const s=[];if(e.withChildren!==!1)for(const a of this.domChildrenToView(t,e,s))r._appendChild(a);if(this._isInlineObjectElement(r))n.push(r),this._processDomInlineNodes(null,s,e);else for(const a of s)n.push(a)}}_processDomInlineNodes(t,e,n){if(!e.length||t&&!this.isDocumentFragment(t)&&!this._isBlockDomElement(t))return;let i=!1;for(let r=0;r<e.length;r++){const s=e[r];if(!s.is("$text")){i=!1;continue}let a,c=!1;if(this._isPreFormatted(s))a=gf(s.data);else{a=s.data.replace(/[ \n\t\r]{1,}/g," "),c=/[^\S\u00A0]/.test(a.charAt(a.length-1));const l=r>0?e[r-1]:null,h=r+1<e.length?e[r+1]:null,m=!l||l.is("element")&&l.name=="br"||i,b=!h&&!Ne(s.data);n.withChildren!==!1&&(m&&(a=a.replace(/^ /,"")),b&&(a=a.replace(/ $/,""))),a=gf(a),a=a.replace(/ \u00A0/g,"  ");const _=h&&h.is("element")&&h.name!="br",C=h&&h.is("$text")&&h.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(a)||!h||_||C)&&(a=a.replace(/\u00A0$/," ")),(m||l&&l.is("element")&&l.name!="br")&&(a=a.replace(/^\u00A0/," "))}a.length==0&&s.parent?(s._remove(),e.splice(r,1),r--):(s._data=a,i=c)}e.length=0}_processDataFromViewText(t){let e=t.data;if(this._isPreFormatted(t))return e;if(e.charAt(0)==" "){const n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(e.charAt(e.length-1)==" "){const n=this._getTouchingInlineViewNode(t,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!i||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(this._isPreFormatted(t))return!1;const e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_isPreFormatted(t){if(function(e,n){return e.getAncestors().some(i=>i.is("element")&&n.includes(i.name))}(t,this.preElements))return!0;for(const e of t.getAncestors({parentFirst:!0}))if(e.is("element")&&e.hasStyle("white-space")&&e.getStyle("white-space")!=="inherit")return["pre","pre-wrap","break-spaces"].includes(e.getStyle("white-space"));return!1}_getTouchingInlineViewNode(t,e){const n=new ri({startPosition:e?X._createAfter(t):X._createBefore(t),direction:e?"forward":"backward"});for(const{item:i}of n){if(i.is("$textProxy"))return i;if(!i.is("element")||!i.getCustomProperty("dataPipeline:transparentRendering")){if(i.is("element","br"))return null;if(this._isInlineObjectElement(i))return i;if(i.is("containerElement"))return null}}return null}_isBlockDomElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isBlockViewElement(t){return t.is("element")&&this.blockElements.includes(t.name)}_isInlineObjectElement(t){return!!t.is("element")&&(t.name=="br"||this.inlineObjectElements.includes(t.name)||!!this._inlineObjectElementMatcher.match(t))}_createViewElement(t,e){if(Oo(t))return new $a(this.document,"$comment");const n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new Pe(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&t.is("element")&&!!this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){const e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e){const n=this._domDocument.createElement("span");if(n.setAttribute(pf,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(const i of e.getAttributeNames())n.setAttribute(i,e.getAttribute(i))}return n}}function ff(o,t){let e=o;for(;e;)t(e),e=e.parentElement}function kf(o,t){const e=o.parentNode;return!!e&&!!e.tagName&&t.includes(e.tagName.toLowerCase())}function bf(o){o==="script"&&G("domconverter-unsafe-script-element-detected"),o==="style"&&G("domconverter-unsafe-style-element-detected")}class un extends Ue(){constructor(t){super(),this._isEnabled=!1,this.view=t,this.document=t.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const wf=yp(function(o,t){Pi(t,Oi(t),o)});class Ui{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,wf(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Pn extends un{constructor(){super(...arguments),this.useCapture=!1,this.usePassive=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture,usePassive:this.usePassive})})}stopObserving(t){this.stopListening(t)}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Ui(this.view,e,n))}}class dy extends Pn{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(t){const e={keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return zi(this)}};this.fire(t.type,t,e)}}const Qu=function(){return ne.Date.now()};var uy=/\s/;const hy=function(o){for(var t=o.length;t--&&uy.test(o.charAt(t)););return t};var gy=/^\s+/;const my=function(o){return o&&o.slice(0,hy(o)+1).replace(gy,"")};var py=/^[-+]0x[0-9a-f]+$/i,fy=/^0b[01]+$/i,ky=/^0o[0-7]+$/i,by=parseInt;const Af=function(o){if(typeof o=="number")return o;if(Va(o))return NaN;if(Lt(o)){var t=typeof o.valueOf=="function"?o.valueOf():o;o=Lt(t)?t+"":t}if(typeof o!="string")return o===0?o:+o;o=my(o);var e=fy.test(o);return e||ky.test(o)?by(o.slice(2),e?2:8):py.test(o)?NaN:+o};var wy=Math.max,Ay=Math.min;const ai=function(o,t,e){var n,i,r,s,a,c,l=0,h=!1,m=!1,b=!0;if(typeof o!="function")throw new TypeError("Expected a function");function _(O){var z=n,V=i;return n=i=void 0,l=O,s=o.apply(V,z)}function C(O){var z=O-c;return c===void 0||z>=t||z<0||m&&O-l>=r}function x(){var O=Qu();if(C(O))return M(O);a=setTimeout(x,function(z){var V=t-(z-c);return m?Ay(V,r-(z-l)):V}(O))}function M(O){return a=void 0,b&&n?_(O):(n=i=void 0,s)}function T(){var O=Qu(),z=C(O);if(n=arguments,i=this,c=O,z){if(a===void 0)return function(V){return l=V,a=setTimeout(x,t),h?_(V):s}(c);if(m)return clearTimeout(a),a=setTimeout(x,t),_(c)}return a===void 0&&(a=setTimeout(x,t)),s}return t=Af(t)||0,Lt(e)&&(h=!!e.leading,r=(m="maxWait"in e)?wy(Af(e.maxWait)||0,t):r,b="trailing"in e?!!e.trailing:b),T.cancel=function(){a!==void 0&&clearTimeout(a),l=0,n=c=i=a=void 0},T.flush=function(){return a===void 0?s:M(Qu())},T};class _y extends un{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=ai(e=>{this.document.fire("selectionChangeDone",e)},200)}observe(){const t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new Xe(e.getRanges(),{backward:e.isBackward,fake:!1});t!=Et.arrowleft&&t!=Et.arrowup||n.setTo(n.getFirstPosition()),t!=Et.arrowright&&t!=Et.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const Cy=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},vy=function(o){return this.__data__.has(o)};function Qa(o){var t=-1,e=o==null?0:o.length;for(this.__data__=new _a;++t<e;)this.add(o[t])}Qa.prototype.add=Qa.prototype.push=Cy,Qa.prototype.has=vy;const yy=Qa,xy=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n;)if(t(o[e],e,o))return!0;return!1},Ey=function(o,t){return o.has(t)},_f=function(o,t,e,n,i,r){var s=1&e,a=o.length,c=t.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(o),h=r.get(t);if(l&&h)return l==t&&h==o;var m=-1,b=!0,_=2&e?new yy:void 0;for(r.set(o,t),r.set(t,o);++m<a;){var C=o[m],x=t[m];if(n)var M=s?n(x,C,m,t,o,r):n(C,x,m,o,t,r);if(M!==void 0){if(M)continue;b=!1;break}if(_){if(!xy(t,function(T,O){if(!Ey(_,O)&&(C===T||i(C,T,e,n,r)))return _.push(O)})){b=!1;break}}else if(C!==x&&!i(C,x,e,n,r)){b=!1;break}}return r.delete(o),r.delete(t),b},Dy=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n,i){e[++t]=[i,n]}),e},Sy=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n){e[++t]=n}),e};var Cf=he?he.prototype:void 0,Zu=Cf?Cf.valueOf:void 0;const Iy=function(o,t,e,n,i,r,s){switch(e){case"[object DataView]":if(o.byteLength!=t.byteLength||o.byteOffset!=t.byteOffset)return!1;o=o.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=t.byteLength||!r(new Da(o),new Da(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Eo(+o,+t);case"[object Error]":return o.name==t.name&&o.message==t.message;case"[object RegExp]":case"[object String]":return o==t+"";case"[object Map]":var a=Dy;case"[object Set]":var c=1&n;if(a||(a=Sy),o.size!=t.size&&!c)return!1;var l=s.get(o);if(l)return l==t;n|=2,s.set(o,t);var h=_f(a(o),a(t),n,i,r,s);return s.delete(o),h;case"[object Symbol]":if(Zu)return Zu.call(o)==Zu.call(t)}return!1};var My=Object.prototype.hasOwnProperty;const Ty=function(o,t,e,n,i,r){var s=1&e,a=uu(o),c=a.length;if(c!=uu(t).length&&!s)return!1;for(var l=c;l--;){var h=a[l];if(!(s?h in t:My.call(t,h)))return!1}var m=r.get(o),b=r.get(t);if(m&&b)return m==t&&b==o;var _=!0;r.set(o,t),r.set(t,o);for(var C=s;++l<c;){var x=o[h=a[l]],M=t[h];if(n)var T=s?n(M,x,h,t,o,r):n(x,M,h,o,t,r);if(!(T===void 0?x===M||i(x,M,e,n,r):T)){_=!1;break}C||(C=h=="constructor")}if(_&&!C){var O=o.constructor,z=t.constructor;O==z||!("constructor"in o)||!("constructor"in t)||typeof O=="function"&&O instanceof O&&typeof z=="function"&&z instanceof z||(_=!1)}return r.delete(o),r.delete(t),_};var vf="[object Arguments]",yf="[object Array]",Za="[object Object]",xf=Object.prototype.hasOwnProperty;const By=function(o,t,e,n,i,r){var s=Te(o),a=Te(t),c=s?yf:Bo(o),l=a?yf:Bo(t),h=(c=c==vf?Za:c)==Za,m=(l=l==vf?Za:l)==Za,b=c==l;if(b&&Io(o)){if(!Io(t))return!1;s=!0,h=!1}if(b&&!h)return r||(r=new Bi),s||cu(o)?_f(o,t,e,n,i,r):Iy(o,t,c,e,n,i,r);if(!(1&e)){var _=h&&xf.call(o,"__wrapped__"),C=m&&xf.call(t,"__wrapped__");if(_||C){var x=_?o.value():o,M=C?t.value():t;return r||(r=new Bi),i(x,M,e,n,r)}}return!!b&&(r||(r=new Bi),Ty(o,t,e,n,i,r))},Ja=function o(t,e,n,i,r){return t===e||(t==null||e==null||!Ve(t)&&!Ve(e)?t!=t&&e!=e:By(t,e,n,i,o,r))},Py=function(o,t,e){var n=(e=typeof e=="function"?e:void 0)?e(o,t):void 0;return n===void 0?Ja(o,t,void 0,e):!!n};class Ef extends un{constructor(t){super(t),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=t.domConverter,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.add(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}stopObserving(t){if(this._domElements.delete(t),this.isEnabled){this._mutationObserver.disconnect();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;const e=this.domConverter,n=new Set,i=new Set;for(const s of t){const a=e.mapDomToView(s.target);a&&(a.is("uiElement")||a.is("rawElement")||s.type!=="childList"||this._isBogusBrMutation(s)||i.add(a))}for(const s of t){const a=e.mapDomToView(s.target);if((!a||!a.is("uiElement")&&!a.is("rawElement"))&&s.type==="characterData"){const c=e.findCorrespondingViewText(s.target);c&&!i.has(c.parent)?n.add(c):!c&&Ne(s.target)&&i.add(e.mapDomToView(s.target.parentNode))}}const r=[];for(const s of n)r.push({type:"text",node:s});for(const s of i){const a=e.mapViewToDom(s),c=Array.from(s.getChildren()),l=Array.from(e.domChildrenToView(a,{withChildren:!1}));Py(c,l,Ny)||r.push({type:"children",node:s})}r.length&&this.document.fire("mutations",{mutations:r})}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}function Ny(o,t){if(!Array.isArray(o))return o===t||!(!o.is("$text")||!t.is("$text"))&&o.data===t.data}class Xa extends Pn{constructor(t){super(t),this._renderTimeoutId=null,this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>this._handleFocus()),e.on("blur",(n,i)=>this._handleBlur(i)),e.on("beforeinput",()=>{e.isFocused||this._handleFocus()},{priority:"highest"})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(t){this.fire(t.type,t)}destroy(){this._clearTimeout(),super.destroy()}_handleFocus(){this._clearTimeout(),this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this._renderTimeoutId=null,this.flush(),this.view.change(()=>{})},50)}_handleBlur(t){const e=this.document.selection.editableElement;e!==null&&e!==t.target||(this.document.isFocused=!1,this._isFocusChanging=!1,this.view.change(()=>{}))}_clearTimeout(){this._renderTimeoutId&&(clearTimeout(this._renderTimeoutId),this._renderTimeoutId=null)}}class Oy extends un{constructor(t){super(t),this.mutationObserver=t.getObserver(Ef),this.focusObserver=t.getObserver(Xa),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=ai(e=>{this.document.fire("selectionChangeDone",e)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=ai(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(e),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"selectionchange",()=>{this.document.isComposing&&!I.isAndroid||(this._handleSelectionChange(e),this._documentIsSelectingInactivityTimeoutDebounced())}),this.listenTo(this.view.document,"compositionstart",()=>{this._handleSelectionChange(e)},{priority:"lowest"}),this._documents.add(e))}stopObserving(t){this.stopListening(t)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(t){if(!this.isEnabled)return;const e=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(e.anchorNode))return;this.mutationObserver.flush();const n=this.domConverter.domSelectionToView(e);if(n.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(n)||!this.domConverter.isDomSelectionCorrect(e))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(n))this.view.forceRender();else{const i={oldSelection:this.selection,newSelection:n,domSelection:e};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class Ly extends Pn{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0},{priority:"low"}),e.on("compositionend",()=>{e.isComposing=!1},{priority:"low"})}onDomEvent(t){this.fire(t.type,t,{data:t.data})}}class Df{constructor(t,e={}){this._files=e.cacheFiles?Sf(t):null,this._native=t}get files(){return this._files||(this._files=Sf(this._native)),this._files}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}setDragImage(t,e,n){this._native.setDragImage(t,e,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function Sf(o){const t=Array.from(o.files||[]),e=Array.from(o.items||[]);return t.length?t:e.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class zy extends Pn{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(t){const e=t.getTargetRanges(),n=this.view,i=n.document;let r=null,s=null,a=[];if(t.dataTransfer&&(r=new Df(t.dataTransfer)),t.data!==null?s=t.data:r&&(s=r.getData("text/plain")),i.selection.isFake)a=Array.from(i.selection.getRanges());else if(e.length)a=e.map(c=>{const l=n.domConverter.domPositionToView(c.startContainer,c.startOffset),h=n.domConverter.domPositionToView(c.endContainer,c.endOffset);return l?n.createRange(l,h):h?n.createRange(h):void 0}).filter(c=>!!c);else if(I.isAndroid){const c=t.target.ownerDocument.defaultView.getSelection();a=Array.from(n.domConverter.domSelectionToView(c).getRanges())}if(I.isAndroid&&t.inputType=="insertCompositionText"&&s&&s.endsWith(`
`))this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:[n.createRange(a[0].end)]});else if(t.inputType=="insertText"&&s&&s.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/powered-by-ckeditor/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...e?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[e]}]:[],n],on:{dragstart:i.to(r=>r.preventDefault())}}]})}}function Yk(o,t,e){return(n,i)=>{const r=new kt(o);if(r.width<350||r.height<50)return null;let s;s=t.position==="inside"?r.bottom-i.height:r.bottom-i.height/2,s-=t.verticalOffset;const a=e(r,i),c=n.clone().moveTo(a,s).getIntersection(i.clone().moveTo(a,s)).getVisible();return!c||c.getArea()<i.getArea()?null:{top:s,left:a,name:`position_${t.position}-side_${t.side}`,config:{withArrow:!1}}}}function Qk(o){const t=o.config.get("ui.poweredBy"),e=t&&t.position||"border";return{position:e,label:"Powered by",verticalOffset:e==="inside"?5:0,horizontalOffset:5,side:o.locale.contentLanguageDirection==="ltr"?"right":"left",...t}}var qc=k(1801),Nr={attributes:{"data-cke":!0}};Nr.setAttributes=Z(),Nr.insert=Q().bind(null,"head"),Nr.domAPI=Y(),Nr.insertStyleElement=J(),K()(qc.A,Nr),qc.A&&qc.A.locals&&qc.A.locals;const Zk={POLITE:"polite",ASSERTIVE:"assertive"};class Px{constructor(t){this.editor=t,t.once("ready",()=>{for(const e of Object.values(Zk))this.announce("",e)})}announce(t,e=Zk.POLITE){const n=this.editor;if(!n.ui.view)return;this.view||(this.view=new Nx(n.locale),n.ui.view.body.add(this.view));const{politeness:i,isUnsafeHTML:r}=typeof e=="string"?{politeness:e}:e;let s=this.view.regionViews.find(a=>a.politeness===i);s||(s=new Ox(n,i),this.view.regionViews.add(s)),s.announce({announcement:t,isUnsafeHTML:r})}}class Nx extends lt{constructor(t){super(t),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class Ox extends lt{constructor(t,e){super(t.locale),this.setTemplate({tag:"div",attributes:{"aria-live":e,"aria-relevant":"additions"},children:[{tag:"ul",attributes:{class:["ck","ck-aria-live-region-list"]}}]}),t.on("destroy",()=>{this._pruneAnnouncementsInterval!==null&&(clearInterval(this._pruneAnnouncementsInterval),this._pruneAnnouncementsInterval=null)}),this.politeness=e,this._domConverter=t.data.htmlProcessor.domConverter,this._pruneAnnouncementsInterval=setInterval(()=>{this.element&&this._listElement.firstChild&&this._listElement.firstChild.remove()},5e3)}announce({announcement:t,isUnsafeHTML:e}){if(!t.trim().length)return;const n=document.createElement("li");e?this._domConverter.setContentOf(n,t):n.innerText=t,this._listElement.appendChild(n)}get _listElement(){return this.element.querySelector("ul")}}var Wc=k(9481),Or={attributes:{"data-cke":!0}};Or.setAttributes=Z(),Or.insert=Q().bind(null,"head"),Or.domAPI=Y(),Or.insertStyleElement=J(),K()(Wc.A,Or),Wc.A&&Wc.A.locals&&Wc.A.locals;class $c extends zn{constructor(t,e){super(t);const n=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:n.to("mouseenter")}}),this.delegate("mouseenter").to(e)}}const Ki={toggleMenusAndFocusItemsOnHover(o){o.on("menu:mouseenter",t=>{if(o.isFocusBorderEnabled||o.isOpen){if(o.isOpen)for(const e of o.menus){const n=t.path[0],i=n instanceof $c&&n.children.first===e;e.isOpen=(t.path.includes(e)||i)&&e.isEnabled}t.source.focus()}})},focusCycleMenusOnArrows(o){const t=o.locale.uiLanguageDirection==="rtl";function e(n,i){const r=o.children.getIndex(n),s=n.isOpen,a=o.children.length,c=o.children.get((r+a+i)%a);n.isOpen=!1,s&&(c.isOpen=!0),c.buttonView.focus()}o.on("menu:arrowright",n=>{e(n.source,t?-1:1)}),o.on("menu:arrowleft",n=>{e(n.source,t?1:-1)})},closeMenusWhenTheBarCloses(o){o.on("change:isOpen",()=>{o.isOpen||o.menus.forEach(t=>{t.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(o){o.on("menu:change:isOpen",(t,e,n)=>{n&&o.menus.filter(i=>t.source.parentMenuView===i.parentMenuView&&t.source!==i&&i.isOpen).forEach(i=>{i.isOpen=!1})})},closeOnClickOutside(o){La({emitter:o,activator:()=>o.isOpen,callback:()=>o.close(),contextElements:()=>o.children.map(t=>t.element)})},enableFocusHighlightOnInteraction(o){let t=!1;o.on("change:isOpen",(e,n,i)=>{i||(t||(o.isFocusBorderEnabled=!1),t=!1)}),o.listenTo(o.element,"keydown",()=>{t=!0},{useCapture:!0}),o.listenTo(o.element,"keyup",()=>{t=!1},{useCapture:!0}),o.listenTo(o.element,"focus",()=>{t&&(o.isFocusBorderEnabled=!0)},{useCapture:!0})}},Fn={openAndFocusPanelOnArrowDownKey(o){o.keystrokes.set("arrowdown",(t,e)=>{o.focusTracker.focusedElement===o.buttonView.element&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),e())})},openOnArrowRightKey(o){const t=o.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";o.keystrokes.set(t,(e,n)=>{o.focusTracker.focusedElement===o.buttonView.element&&o.isEnabled&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),n())})},openOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!0})},toggleOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!o.isOpen})},openAndFocusOnEnterKeyPress(o){o.keystrokes.set("enter",(t,e)=>{o.focusTracker.focusedElement===o.buttonView.element&&(o.isOpen=!0,o.panelView.focus(),e())})},closeOnArrowLeftKey(o){const t=o.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";o.keystrokes.set(t,(e,n)=>{o.isOpen&&(o.isOpen=!1,o.focus(),n())})},closeOnEscKey(o){o.keystrokes.set("esc",(t,e)=>{o.isOpen&&(o.isOpen=!1,o.focus(),e())})},closeOnParentClose(o){o.parentMenuView.on("change:isOpen",(t,e,n)=>{n||t.source!==o.parentMenuView||(o.isOpen=!1)})}},Lx={southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,t)=>({top:o.bottom,left:o.left-t.width+o.width,name:"sw"}),northEast:(o,t)=>({top:o.top-t.height,left:o.left,name:"ne"}),northWest:(o,t)=>({top:o.top-t.height,left:o.left-t.width+o.width,name:"nw"}),eastSouth:o=>({top:o.top,left:o.right-5,name:"es"}),eastNorth:(o,t)=>({top:o.top-t.height,left:o.right-5,name:"en"}),westSouth:(o,t)=>({top:o.top,left:o.left-t.width+5,name:"ws"}),westNorth:(o,t)=>({top:o.top-t.height,left:o.left-t.width+5,name:"wn"})},zx=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"previewMergeFields",items:["menuBar:previewMergeFields"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:insertImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment","menuBar:insertMergeField"]},{groupId:"insertMinorWidgets",items:["menuBar:mediaEmbed","menuBar:insertTemplate","menuBar:specialCharacters","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:multiLevelList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function Rx({normalizedConfig:o,locale:t,componentFactory:e,extraItems:n}){const i=tn(o);return Jk(o,i,n),function(r,s){const a=s.removeItems,c=[];s.items=s.items.filter(({menuId:l})=>!a.includes(l)||(c.push(l),!1)),Yi(s.items,l=>{l.groups=l.groups.filter(({groupId:h})=>!a.includes(h)||(c.push(h),!1));for(const h of l.groups)h.items=h.items.filter(m=>{const b=eb(m);return!a.includes(b)||(c.push(b),!1)})});for(const l of a)c.includes(l)||G("menu-bar-item-could-not-be-removed",{menuBarConfig:r,itemName:l})}(o,i),Jk(o,i,i.addItems),function(r,s,a){Yi(s.items,c=>{for(const l of c.groups)l.items=l.items.filter(h=>{const m=typeof h=="string"&&!a.has(h);return m&&!s.isUsingDefaultConfig&&G("menu-bar-item-unavailable",{menuBarConfig:r,parentMenuConfig:tn(c),componentName:h}),!m})})}(o,i,e),tb(o,i),function(r,s){const a=s.t,c={File:a({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:a({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:a({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:a({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:a({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:a({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:a({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:a({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:a({string:"Font",id:"MENU_BAR_MENU_FONT"})};Yi(r.items,l=>{l.label in c&&(l.label=c[l.label])})}(i,t),i}function Jk(o,t,e){const n=[];if(e.length!=0){for(const r of e){const s=jx(r.position),a=Vx(r.position);if(typeof(i=r)=="object"&&"menu"in i)if(a){const c=t.items.findIndex(l=>l.menuId===a);c!=-1?s==="before"?(t.items.splice(c,0,r.menu),n.push(r)):s==="after"&&(t.items.splice(c+1,0,r.menu),n.push(r)):Xk(t,r.menu,a,s)&&n.push(r)}else s==="start"?(t.items.unshift(r.menu),n.push(r)):s==="end"&&(t.items.push(r.menu),n.push(r));else Fx(r)?Yi(t.items,c=>{if(c.menuId===a)s==="start"?(c.groups.unshift(r.group),n.push(r)):s==="end"&&(c.groups.push(r.group),n.push(r));else{const l=c.groups.findIndex(h=>h.groupId===a);l!==-1&&(s==="before"?(c.groups.splice(l,0,r.group),n.push(r)):s==="after"&&(c.groups.splice(l+1,0,r.group),n.push(r)))}}):Xk(t,r.item,a,s)&&n.push(r)}var i;for(const r of e)n.includes(r)||G("menu-bar-item-could-not-be-added",{menuBarConfig:o,addedItemConfig:r})}}function Xk(o,t,e,n){let i=!1;return Yi(o.items,r=>{for(const{groupId:s,items:a}of r.groups){if(i)return;if(s===e)n==="start"?(a.unshift(t),i=!0):n==="end"&&(a.push(t),i=!0);else{const c=a.findIndex(l=>eb(l)===e);c!==-1&&(n==="before"?(a.splice(c,0,t),i=!0):n==="after"&&(a.splice(c+1,0,t),i=!0))}}}),i}function tb(o,t){const e=t.isUsingDefaultConfig;let n=!1;t.items=t.items.filter(i=>!!i.groups.length||(vh(o,i,e),!1)),t.items.length?(Yi(t.items,i=>{i.groups=i.groups.filter(r=>!!r.items.length||(n=!0,!1));for(const r of i.groups)r.items=r.items.filter(s=>!(nb(s)&&!s.groups.length)||(vh(o,s,e),n=!0,!1))}),n&&tb(o,t)):vh(o,o,e)}function vh(o,t,e){e||G("menu-bar-menu-empty",{menuBarConfig:o,emptyMenuConfig:t})}function Yi(o,t){if(Array.isArray(o))for(const n of o)e(n);function e(n){t(n);for(const i of n.groups)for(const r of i.items)nb(r)&&e(r)}}function Fx(o){return typeof o=="object"&&"group"in o}function jx(o){return o.startsWith("start")?"start":o.startsWith("end")?"end":o.startsWith("after")?"after":"before"}function Vx(o){const t=o.match(/^[^:]+:(.+)/);return t?t[1]:null}function eb(o){return typeof o=="string"?o:o.menuId}function nb(o){return typeof o=="object"&&"menuId"in o}class Hx extends nt(){constructor(t){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[],this._extraMenuBarElements=[],this._lastFocusedForeignElement=null;const e=t.editing.view;this.editor=t,this.componentFactory=new Mx(t),this.focusTracker=new re,this.tooltipManager=new Ah(t),this.poweredBy=new Tx(t),this.ariaLiveAnnouncer=new Px(t),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this._bindBodyCollectionWithFocusTracker(),this.isReady=!0}),this.listenTo(e.document,"layoutChanged",this.update.bind(this)),this.listenTo(e,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null,this.editor.keystrokes.stopListening(t);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor),this.focusTracker.add(e);const n=()=>{this.editor.editing.view.getDomRoot(t)||this.editor.keystrokes.listenTo(e)};this.isReady?n():this.once("ready",n)}removeEditableElement(t){const e=this._editableElementsMap.get(t);e&&(this._editableElementsMap.delete(t),this.editor.keystrokes.stopListening(e),this.focusTracker.remove(e),e.ckeditorInstance=null)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(t,e={}){t.isRendered?(this.focusTracker.add(t),this.editor.keystrokes.listenTo(t.element)):t.once("render",()=>{this.focusTracker.add(t),this.editor.keystrokes.listenTo(t.element)}),this._focusableToolbarDefinitions.push({toolbarView:t,options:e})}extendMenuBar(t){this._extraMenuBarElements.push(t)}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_initMenuBar(t){const e=t.element;this.focusTracker.add(e),this.editor.keystrokes.listenTo(e);const n=function(i){let r;return r="items"in i&&i.items?{items:i.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1,...i}:{items:tn(zx),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0,...i},r}(this.editor.config.get("menuBar")||{});t.fillFromConfig(n,this.componentFactory,this._extraMenuBarElements),this.editor.keystrokes.set("Esc",(i,r)=>{e.contains(this.editor.ui.focusTracker.focusedElement)&&(this._lastFocusedForeignElement?(this._lastFocusedForeignElement.focus(),this._lastFocusedForeignElement=null):this.editor.editing.view.focus(),r())}),this.editor.keystrokes.set("Alt+F9",(i,r)=>{e.contains(this.editor.ui.focusTracker.focusedElement)||(this._saveLastFocusedForeignElement(),t.isFocusBorderEnabled=!0,t.focus(),r())})}_readViewportOffsetFromConfig(){const t=this.editor,e=t.config.get("ui.viewportOffset");if(e)return e;const n=t.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const t=this.editor;let e;t.keystrokes.set("Alt+F10",(n,i)=>{this._saveLastFocusedForeignElement();const r=this._getCurrentFocusedToolbarDefinition();r&&e||(e=this._getFocusableCandidateToolbarDefinitions());for(let s=0;s<e.length;s++){const a=e.shift();if(e.push(a),a!==r&&this._focusFocusableCandidateToolbar(a)){r&&r.options.afterBlur&&r.options.afterBlur();break}}i()}),t.keystrokes.set("Esc",(n,i)=>{const r=this._getCurrentFocusedToolbarDefinition();r&&(this._lastFocusedForeignElement?(this._lastFocusedForeignElement.focus(),this._lastFocusedForeignElement=null):t.editing.view.focus(),r.options.afterBlur&&r.options.afterBlur(),i())})}_saveLastFocusedForeignElement(){const t=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(t)&&!Array.from(this.editor.editing.view.domRoots.values()).includes(t)&&(this._lastFocusedForeignElement=t)}_getFocusableCandidateToolbarDefinitions(){const t=[];for(const e of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=e;(fn(n.element)||i.beforeFocus)&&t.push(e)}return t.sort((e,n)=>ib(e)-ib(n)),t}_getCurrentFocusedToolbarDefinition(){for(const t of this._focusableToolbarDefinitions)if(t.toolbarView.element&&t.toolbarView.element.contains(this.focusTracker.focusedElement))return t;return null}_focusFocusableCandidateToolbar(t){const{toolbarView:e,options:{beforeFocus:n}}=t;return n&&n(),!!fn(e.element)&&(e.focus(),!0)}_handleScrollToTheSelection(t,e){const n={top:0,bottom:0,left:0,right:0,...this.viewportOffset};e.viewportOffset.top+=n.top,e.viewportOffset.bottom+=n.bottom,e.viewportOffset.left+=n.left,e.viewportOffset.right+=n.right}_bindBodyCollectionWithFocusTracker(){const t=this.view.body;for(const e of t)this.focusTracker.add(e.element);t.on("add",(e,n)=>{this.focusTracker.add(n.element)}),t.on("remove",(e,n)=>{this.focusTracker.remove(n.element)})}}function ib(o){const{toolbarView:t,options:e}=o;let n=10;return fn(t.element)&&n--,e.isContextual&&n--,n}var Gc=k(1185),Lr={attributes:{"data-cke":!0}};Lr.setAttributes=Z(),Lr.insert=Q().bind(null,"head"),Lr.domAPI=Y(),Lr.insertStyleElement=J(),K()(Gc.A,Lr),Gc.A&&Gc.A.locals&&Gc.A.locals;class Ux extends lt{constructor(t){super(t),this.body=new ux(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class qx extends Ux{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const t=this.t,e=new mc;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class Wx extends lt{constructor(t,e,n){super(t),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const t=this._editingView;function e(n){t.change(i=>{const r=t.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",r),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}t.isRenderingInProgress?function n(i){t.once("change:isRenderingInProgress",(r,s,a)=>{a?n(i):e(i)})}(this):e(this)}}class $x extends Wx{constructor(t,e,n,i={}){super(t,e,n),this._options=i,this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}})}render(){super.render();const t=this._editingView;t.change(e=>{const n=t.document.getRoot(this.name);e.setAttribute("aria-label",this.getEditableAriaLabel(),n)})}getEditableAriaLabel(){const t=this.locale.t,e=this._options.label,n=this._editableElement,i=this.name;if(typeof e=="string")return e;if(typeof e=="object")return e[i];if(typeof e=="function")return e(this);if(n){const r=n.getAttribute("aria-label");if(r)return r}return t("Rich Text Editor. Editing area: %0",i)}}class yh extends Ra{static get pluginName(){return"Notification"}static get isOfficialPlugin(){return!0}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=t.namespace?`show:${t.type}:${t.namespace}`:`show:${t.type}`;this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class ob extends nt(){constructor(t,e){super(),e&&wf(this,e),t&&this.set(t)}}var Kc=k(991),zr={attributes:{"data-cke":!0}};zr.setAttributes=Z(),zr.insert=Q().bind(null,"head"),zr.domAPI=Y(),zr.insertStyleElement=J(),K()(Kc.A,zr),Kc.A&&Kc.A.locals&&Kc.A.locals;var Yc=k(5380),Rr={attributes:{"data-cke":!0}};Rr.setAttributes=Z(),Rr.insert=Q().bind(null,"head"),Rr.domAPI=Y(),Rr.insertStyleElement=J(),K()(Yc.A,Rr),Yc.A&&Yc.A.locals&&Yc.A.locals;const Qc=Li("px");class Zc extends ${constructor(t){super(t),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.decorate("getPositionOptions"),this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}static get isOfficialPlugin(){return!0}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this._view||this._createPanelView(),this.hasView(t.view))throw new P("contextualballoon-add-view-exist",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new P("contextualballoon-remove-view-not-exist",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this.getPositionOptions()),this._fakePanelsView.updatePosition()}getPositionOptions(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&(t.limiter||(t=Object.assign({},t,{limiter:this.positionLimiter})),t=Object.assign({},t,{viewportOffsetConfig:this.editor.ui.viewportOffset})),t}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new P("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}_createPanelView(){this._view=new An(this.editor.locale),this.editor.ui.view.body.add(this._view),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new Gx(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[r,i])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new Kx(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this.getPositionOptions()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}}class Gx extends lt{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new re,this.buttonPrevView=this._createButtonView(e("Previous"),rt.previousArrow),this.buttonNextView=this._createButtonView(e("Next"),rt.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new vt(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class Kx extends lt{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",Qc),left:n.to("left",Qc),width:n.to("width",Qc),height:n.to("height",Qc)}},children:this.content}),this.on("change:numberOfPanels",(i,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(t){for(;t--;){const e=new lt;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:i}=new kt(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:i})}}}var Jc=k(8298),Fr={attributes:{"data-cke":!0}};Fr.setAttributes=Z(),Fr.insert=Q().bind(null,"head"),Fr.domAPI=Y(),Fr.insertStyleElement=J(),K()(Jc.A,Fr),Jc.A&&Jc.A.locals&&Jc.A.locals;const Qi=Li("px");class Yx extends lt{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Je({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?Qi(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new Je({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?Qi(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_stickyTopOffset",n=>n&&Qi(n)),bottom:e.to("_stickyBottomOffset",n=>n&&Qi(n)),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(A.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const t=new kt(this.limiterElement);let e=t.getVisible();if(e){const n=new kt(A.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,e=e.getIntersection(n)}if(e&&t.top<e.top){const n=e.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>e.bottom){const i=Math.max(t.bottom-e.bottom,0)+this.limiterBottomOffset;t.bottom-i>t.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(i):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<t.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=t,this._stickyBottomOffset=null,this._marginLeft=Qi(-A.window.scrollX)}_stickToBottomOfLimiter(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=t,this._marginLeft=Qi(-A.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new kt(this.contentPanelElement)}}class Qx extends _c{constructor(t,e){const n=t.t,i=Object.assign({},{showResetButton:!0,showIcon:!0,creator:jc},e);super(t,i.creator),this.label=e.label,this._viewConfig=i,this._viewConfig.showIcon&&(this.iconView=new We,this.iconView.content=rt.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new vt(t),this.resetButtonView.set({label:n("Clear"),icon:rt.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",r=>!r),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class Zx extends lt{constructor(){super();const t=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",t.if("isVisible","ck-hidden",e=>!e)],tabindex:-1},children:[{tag:"span",children:[{text:[t.to("primaryText")]}]},{tag:"span",children:[{text:[t.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class Jx extends lt{constructor(t){super(t),this.children=this.createCollection(),this.focusTracker=new re,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new on({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const t of this.children)this.focusTracker.add(t.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var rb=/[\\^$.*+?()[\]{}|]/g,Xx=RegExp(rb.source);const sb=function(o){return(o=Ou(o))&&Xx.test(o)?o.replace(rb,"\\$&"):o};var Xc=k(8107),jr={attributes:{"data-cke":!0}};jr.setAttributes=Z(),jr.insert=Q().bind(null,"head"),jr.domAPI=Y(),jr.insertStyleElement=J(),K()(Xc.A,jr),Xc.A&&Xc.A.locals&&Xc.A.locals;class t5 extends lt{constructor(t,e){super(t),this._config=e,this.filteredView=e.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new re,this.keystrokes=new ve,this.resultsView=new Jx(t),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),e.infoView&&e.infoView.instance?this.infoView=e.infoView.instance:(this.infoView=new Zx,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new on({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:i,totalItemsCount:r})=>{this.resultsCount=i,this.totalItemsCount=r}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",e.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const t=e=>e.stopPropagation();for(const e of this.focusableChildren)this.focusTracker.add(e.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search(""),this.filteredView.element.scrollTo(0,0)}search(t){const e=t?new RegExp(sb(t),"ig"):null,n=this.filteredView.filter(e);this.fire("search",{query:t,...n})}_createSearchTextQueryView(){const t=new Qx(this.locale,this._config.queryView);return this.listenTo(t.fieldView,"input",()=>{this.search(t.fieldView.element.value)}),t.on("reset",()=>this.reset()),t.bind("isEnabled").to(this),t}_enableDefaultInfoViewBehavior(){const t=this.locale.t,e=this.infoView;function n(i,{query:r,resultsCount:s,totalItemsCount:a}){return typeof i=="function"?i(r,s,a):i}this.on("search",(i,r)=>{if(r.resultsCount)e.set({isVisible:!1});else{const s=this._config.infoView&&this._config.infoView.text;let a,c;r.totalItemsCount?s&&s.notFound?(a=s.notFound.primary,c=s.notFound.secondary):(a=t("No results found"),c=""):s&&s.noSearchableItems?(a=s.noSearchableItems.primary,c=s.noSearchableItems.secondary):(a=t("No searchable items"),c=""),e.set({primaryText:n(a,r),secondaryText:n(c,r),isVisible:!0})}})}}var tl=k(5727),Vr={attributes:{"data-cke":!0}};Vr.setAttributes=Z(),Vr.insert=Q().bind(null,"head"),Vr.domAPI=Y(),Vr.insertStyleElement=J(),K()(tl.A,Vr),tl.A&&tl.A.locals&&tl.A.locals;const so=class so extends t5{constructor(t,e){super(t,e),this._config=e;const n=Li("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const i=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[i.if("isVisible","ck-hidden",r=>!r),i.to("_position",r=>`ck-search__results_${r}`)],style:{width:i.to("_width",n)}}}),this.focusTracker.on("change:isFocused",(r,s,a)=>{this._updateResultsVisibility(),a?this.resultsView.element.scrollTop=0:e.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(r,s)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,s())}),this.listenTo(A.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(r,{value:s})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=s,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new kt(this.queryView.fieldView.element).width;const t=so._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:so.defaultResultsPositions});this.resultsView._position=t?t.name:"s"}_updateResultsVisibility(){const t=this._config.queryMinChars===void 0?0:this._config.queryMinChars,e=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&e>=t}};so.defaultResultsPositions=[t=>({top:t.bottom,left:t.left,name:"s"}),(t,e)=>({top:t.top-e.height,left:t.left,name:"n"})],so._getOptimalPosition=Ta;let ab=so;var el=k(9529),Hr={attributes:{"data-cke":!0}};Hr.setAttributes=Z(),Hr.insert=Q().bind(null,"head"),Hr.domAPI=Y(),Hr.insertStyleElement=J(),K()(el.A,Hr),el.A&&el.A.locals&&el.A.locals;var nl=k(109),Ur={attributes:{"data-cke":!0}};Ur.setAttributes=Z(),Ur.insert=Q().bind(null,"head"),Ur.domAPI=Y(),Ur.insertStyleElement=J(),K()(nl.A,Ur),nl.A&&nl.A.locals&&nl.A.locals;var il=k(2710),qr={attributes:{"data-cke":!0}};qr.setAttributes=Z(),qr.insert=Q().bind(null,"head"),qr.domAPI=Y(),qr.insertStyleElement=J(),K()(il.A,qr),il.A&&il.A.locals&&il.A.locals;var ol=k(3344),Wr={attributes:{"data-cke":!0}};Wr.setAttributes=Z(),Wr.insert=Q().bind(null,"head"),Wr.domAPI=Y(),Wr.insertStyleElement=J(),K()(ol.A,Wr),ol.A&&ol.A.locals&&ol.A.locals;class e5 extends di{constructor(t){super(t);const e=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",n=>String(n)),"data-cke-tooltip-disabled":e.to("isOn")},on:{mouseenter:e.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new We;return t.content=gr,t.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),t}}var rl=k(9108),$r={attributes:{"data-cke":!0}};$r.setAttributes=Z(),$r.insert=Q().bind(null,"head"),$r.domAPI=Y(),$r.insertStyleElement=J(),K()(rl.A,$r),rl.A&&rl.A.locals&&rl.A.locals;class n5 extends lt{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",e.to("position",n=>`ck-menu-bar__menu__panel_position_${n}`),e.if("isVisible","ck-hidden",n=>!n)],tabindex:"-1"},children:this.children,on:{selectstart:e.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(t=1){this.children.length&&(t===1?this.children.first.focus():this.children.last.focus())}}var sl=k(4),Gr={attributes:{"data-cke":!0}};Gr.setAttributes=Z(),Gr.insert=Q().bind(null,"head"),Gr.domAPI=Y(),Gr.insertStyleElement=J(),K()(sl.A,Gr),sl.A&&sl.A.locals&&sl.A.locals;const vd=class vd extends lt{constructor(t){super(t);const e=this.bindTemplate;this.buttonView=new e5(t),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new n5(t),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new ve,this.focusTracker=new re,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",e.to("class"),e.if("isEnabled","ck-disabled",n=>!n),e.if("parentMenuView","ck-menu-bar__menu_top-level",n=>!n)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),Fn.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(Fn.openOnButtonClick(this),Fn.openOnArrowRightKey(this),Fn.closeOnArrowLeftKey(this),Fn.openAndFocusOnEnterKeyPress(this),Fn.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),Fn.openAndFocusPanelOnArrowDownKey(this),Fn.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(t,e)=>{this.fire("arrowright"),e()}),this.keystrokes.set("arrowleft",(t,e)=>{this.fire("arrowleft"),e()})}_repositionPanelOnOpen(){this.on("change:isOpen",(t,e,n)=>{if(!n)return;const i=vd._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=i?i.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:t,southWest:e,northEast:n,northWest:i,westSouth:r,eastSouth:s,westNorth:a,eastNorth:c}=Lx;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[s,c,r,a]:[t,e,n,i]:this.parentMenuView?[r,a,s,c]:[e,t,i,n]}};vd._getOptimalPosition=Ta;let jn=vd;class al extends Ic{constructor(t){super(t),this.role="menu",this.items.on("change",this._setItemsCheckSpace.bind(this))}_setItemsCheckSpace(){const t=Array.from(this.items).some(e=>{const n=cb(e);return n&&n.isToggleable});this.items.forEach(e=>{const n=cb(e);n&&(n.hasCheckSpace=t)})}}function cb(o){return o instanceof zn?o.children.map(t=>function(e){return typeof e=="object"&&"buttonView"in e&&e.buttonView instanceof vt}(t)?t.buttonView:t).find(t=>t instanceof di):null}class lb extends hx{constructor(t){super(t),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var cl=k(497),Kr={attributes:{"data-cke":!0}};Kr.setAttributes=Z(),Kr.insert=Q().bind(null,"head"),Kr.domAPI=Y(),Kr.insertStyleElement=J(),K()(cl.A,Kr),cl.A&&cl.A.locals&&cl.A.locals;const db=["mouseenter","arrowleft","arrowright","change:isOpen"];class i5 extends lt{constructor(t){super(t),this.menus=[];const e=t.t,n=this.bindTemplate;this.set({isOpen:!1,isFocusBorderEnabled:!1}),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar",n.if("isFocusBorderEnabled","ck-menu-bar_focus-border-enabled")],"aria-label":e("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(t,e,n=[]){const i=Rx({normalizedConfig:t,locale:this.locale,componentFactory:e,extraItems:n}).items.map(r=>this._createMenu({componentFactory:e,menuDefinition:r}));this.children.addMany(i)}render(){super.render(),Ki.toggleMenusAndFocusItemsOnHover(this),Ki.closeMenusWhenTheBarCloses(this),Ki.closeMenuWhenAnotherOnTheSameLevelOpens(this),Ki.focusCycleMenusOnArrows(this),Ki.closeOnClickOutside(this),Ki.enableFocusHighlightOnInteraction(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const t of this.children)t.isOpen=!1}registerMenu(t,e=null){e?(t.delegate(...db).to(e),t.parentMenuView=e):t.delegate(...db).to(this,n=>"menu:"+n),t._attachBehaviors(),this.menus.push(t)}_createMenu({componentFactory:t,menuDefinition:e,parentMenuView:n}){const i=this.locale,r=new jn(i);return this.registerMenu(r,n),r.buttonView.set({label:e.label}),r.once("change:isOpen",()=>{const s=new al(i);s.ariaLabel=e.label,r.panelView.children.add(s),s.items.addMany(this._createMenuItems({menuDefinition:e,parentMenuView:r,componentFactory:t}))}),r}_createMenuItems({menuDefinition:t,parentMenuView:e,componentFactory:n}){const i=this.locale,r=[];for(const s of t.groups){for(const a of s.items){const c=new $c(i,e);if(Lt(a))c.children.add(this._createMenu({componentFactory:n,menuDefinition:a,parentMenuView:e}));else{const l=this._createMenuItemContentFromFactory({componentName:a,componentFactory:n,parentMenuView:e});if(!l)continue;c.children.add(l)}r.push(c)}s!==t.groups[t.groups.length-1]&&r.push(new fh(i))}return r}_createMenuItemContentFromFactory({componentName:t,parentMenuView:e,componentFactory:n}){const i=n.create(t);return i instanceof jn||i instanceof we||i instanceof lb?(this._registerMenuTree(i,e),i.on("execute",()=>{this.close()}),i):(G("menu-bar-component-unsupported",{componentName:t,componentView:i}),null)}_registerMenuTree(t,e){if(!(t instanceof jn))return void t.delegate("mouseenter").to(e);this.registerMenu(t,e);const n=t.panelView.children.filter(r=>r instanceof al)[0];if(!n)return void t.delegate("mouseenter").to(e);const i=n.items.filter(r=>r instanceof zn);for(const r of i)this._registerMenuTree(r.children.get(0),t)}_setupIsOpenUpdater(){let t;this.on("menu:change:isOpen",(e,n,i)=>{clearTimeout(t),i?this.isOpen=!0:t=setTimeout(()=>{this.isOpen=Array.from(this.children).some(r=>r.isOpen)},0)})}}class o5 extends Hx{constructor(t,e){super(t),this.view=e,this._toolbarConfig=Vk(t.config.get("toolbar")),this._elementReplacer=new fa,this.listenTo(t.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,i=e.editing.view,r=n.editable,s=i.document.getRoot();r.name=s.rootName,n.render();const a=r.element;this.setEditableElement(r.name,a),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(a),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),n.menuBarView&&this._initMenuBar(n.menuBarView),this._initDialogPluginIntegration(),this._initContextualBalloonIntegration(),this.fire("ready")}destroy(){super.destroy();const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.getDomRoot(t.editable.name)&&e.detachDomRoot(t.editable.name),t.destroy()}_initToolbar(){const t=this.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:e})=>e||0),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(t.toolbar)}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),i=t.sourceElement;let r;const s=t.config.get("placeholder");s&&(r=typeof s=="string"?s:s[this.view.editable.name]),!r&&i&&i.tagName.toLowerCase()==="textarea"&&(r=i.getAttribute("placeholder")),r&&(n.placeholder=r),Gp({view:e,element:n,isDirectHost:!1,keepOnFocus:!0})}_initContextualBalloonIntegration(){if(!this.editor.plugins.has("ContextualBalloon"))return;const{stickyPanel:t}=this.view,e=this.editor.plugins.get("ContextualBalloon");e.on("getPositionOptions",i=>{const r=i.return;if(!r||!t.isSticky||!t.element)return;const s=new kt(t.element).height,a=typeof r.target=="function"?r.target():r.target,c=typeof r.limiter=="function"?r.limiter():r.limiter;if(a&&c&&new kt(a).height>=new kt(c).height-s)return;const l={...r.viewportOffsetConfig},h=(l.top||0)+s;i.return={...r,viewportOffsetConfig:{...l,top:h}}},{priority:"low"});const n=()=>{e.visibleView&&e.updatePosition()};this.listenTo(t,"change:isSticky",n),this.listenTo(this.editor.ui,"change:viewportOffset",n)}_handleScrollToTheSelectionWithStickyPanel(t,e,n){const i=this.view.stickyPanel;if(i.isSticky){const r=new kt(i.element).height;e.viewportOffset.top+=r}else{const r=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(i,"change:isSticky",r),setTimeout(()=>{this.stopListening(i,"change:isSticky",r)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const t=this.view.stickyPanel,e=this.editor.plugins.get("Dialog");e.on("show",()=>{const n=e.view;n.on("moveTo",(i,r)=>{if(!t.isSticky||n.wasMoved)return;const s=new kt(t.contentPanelElement);r[1]<s.bottom+ar.defaultOffset&&(r[1]=s.bottom+ar.defaultOffset)},{priority:"high"})},{priority:"low"})}}var ll=k(7388),Yr={attributes:{"data-cke":!0}};Yr.setAttributes=Z(),Yr.insert=Q().bind(null,"head"),Yr.domAPI=Y(),Yr.insertStyleElement=J(),K()(ll.A,Yr),ll.A&&ll.A.locals&&ll.A.locals;class r5 extends qx{constructor(t,e,n={}){super(t),this.stickyPanel=new Yx(t),this.toolbar=new kh(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),n.useMenuBar&&(this.menuBarView=new i5(t)),this.editable=new $x(t,e,void 0,{label:n.label})}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class s5 extends gh(hh){constructor(t,e={}){if(!dl(t)&&e.initialData!==void 0)throw new P("editor-create-initial-data",null);super(e),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(s){return dl(s)?(a=s,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):s;var a}(t)),dl(t)&&(this.sourceElement=t),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=this.config.get("menuBar"),r=new r5(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n,useMenuBar:i.isVisible,label:this.config.get("label")});this.ui=new o5(this,r),function(s){if(!Xn(s.updateSourceElement))throw new P("attachtoform-missing-elementapi-interface",s);const a=s.sourceElement;if(function(c){return!!c&&c.tagName.toLowerCase()==="textarea"}(a)&&a.form){let c;const l=a.form,h=()=>s.updateSourceElement();Xn(l.submit)&&(c=l.submit,l.submit=()=>{h(),c.apply(l)}),l.addEventListener("submit",h),s.on("destroy",()=>{l.removeEventListener("submit",h),c&&(l.submit=c)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const i=new this(t,e);n(i.initPlugins().then(()=>i.ui.init(dl(t)?t:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function dl(o){return In(o)}class Qr extends Pn{constructor(t){super(t),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const e=this.document;function n(i){return(r,s)=>{s.preventDefault();const a=s.dropRange?[s.dropRange]:null,c=new St(e,i);e.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target,domEvent:s.domEvent}),c.stop.called&&s.stopPropagation()}}this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){const e="clipboardData"in t?t.clipboardData:t.dataTransfer,n=t.type=="drop"||t.type=="paste",i={dataTransfer:new Df(e,{cacheFiles:n})};if(t.type=="drop"||t.type=="dragover"){const r=rp(t);i.dropRange=r&&this.view.domConverter.domRangeToView(r)}this.fire(t.type,t,i)}}const ub=["figcaption","li"],hb=["ol","ul"];function gb(o){if(o.is("$text")||o.is("$textProxy"))return o.data;if(o.is("element","img")&&o.hasAttribute("alt"))return o.getAttribute("alt");if(o.is("element","br"))return`
`;let t="",e=null;for(const n of o.getChildren())t+=a5(n,e)+gb(n),e=n;return t}function a5(o,t){return t?o.is("element","li")&&!o.isEmpty&&o.getChild(0).is("containerElement")||hb.includes(o.name)&&hb.includes(t.name)?`

`:o.is("containerElement")||t.is("containerElement")?ub.includes(o.name)||ub.includes(t.name)?`
`:o.is("element")&&o.getCustomProperty("dataPipeline:transparentRendering")||t.is("element")&&t.getCustomProperty("dataPipeline:transparentRendering")?"":`
