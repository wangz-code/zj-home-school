import{g as O,A as _,j as b,G as D,H as q,I as it,J as Ae,f as he,h as j,o as w,d as T,k as J,n as x,a as f,i as ve,K as ot,F as Ce,s as pe,q as me,t as Le,m as st,p as at,r as se,v as lt,z as H,l as M,w as we,x as P,C as Te,L as Oe,M as h,_ as ut,y as dt}from"./index-DfJa03zF.js";import{d as Be,e as ct,I as ft,a as ht,c as vt,u as pt,f as I,g as mt,h as yt,j as bt}from"./use-size-BE9IOfrG.js";var ke=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(i,o){return i[0]===n?(r=o,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},t.prototype.set=function(n,r){var i=e(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,i=e(r,n);~i&&r.splice(i,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,o=this.__entries__;i<o.length;i++){var a=o[i];n.call(r,a[1],a[0])}},t}()}(),fe=typeof window<"u"&&typeof document<"u"&&window.document===document,K=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),gt=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(K):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),_t=2;function Et(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&u()}function a(){gt(o)}function u(){var d=Date.now();if(n){if(d-i<_t)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=d}return u}var xt=20,Ct=["top","right","bottom","left","width","height","size","weight"],wt=typeof MutationObserver<"u",Tt=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Et(this.refresh.bind(this),xt)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!fe||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),wt?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!fe||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,i=Ct.some(function(o){return!!~r.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Ve=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},S=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||K},Ie=W(0,0,0,0);function U(e){return parseFloat(e)||0}function je(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,i){var o=e["border-"+i+"-width"];return r+U(o)},0)}function Ot(e){for(var t=["top","right","bottom","left"],n={},r=0,i=t;r<i.length;r++){var o=i[r],a=e["padding-"+o];n[o]=U(a)}return n}function jt(e){var t=e.getBBox();return W(0,0,t.width,t.height)}function $t(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Ie;var r=S(e).getComputedStyle(e),i=Ot(r),o=i.left+i.right,a=i.top+i.bottom,u=U(r.width),d=U(r.height);if(r.boxSizing==="border-box"&&(Math.round(u+o)!==t&&(u-=je(r,"left","right")+o),Math.round(d+a)!==n&&(d-=je(r,"top","bottom")+a)),!Rt(e)){var l=Math.round(u+o)-t,c=Math.round(d+a)-n;Math.abs(l)!==1&&(u-=l),Math.abs(c)!==1&&(d-=c)}return W(i.left,i.top,u,d)}var St=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof S(e).SVGGraphicsElement}:function(e){return e instanceof S(e).SVGElement&&typeof e.getBBox=="function"}}();function Rt(e){return e===S(e).document.documentElement}function zt(e){return fe?St(e)?jt(e):$t(e):Ie}function Nt(e){var t=e.x,n=e.y,r=e.width,i=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,a=Object.create(o.prototype);return Ve(a,{x:t,y:n,width:r,height:i,top:n,right:t+r,bottom:i+n,left:t}),a}function W(e,t,n,r){return{x:e,y:t,width:n,height:r}}var Mt=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=W(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=zt(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),At=function(){function e(t,n){var r=Nt(n);Ve(this,{target:t,contentRect:r})}return e}(),Lt=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new ke,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof S(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new Mt(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof S(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new At(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),De=typeof WeakMap<"u"?new WeakMap:new ke,He=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Tt.getInstance(),r=new Lt(t,n,this);De.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){He.prototype[e]=function(){var t;return(t=De.get(this))[e].apply(t,arguments)}});var Bt=function(){return typeof K.ResizeObserver<"u"?K.ResizeObserver:He}(),$e;(function(e){e[e.ELEMENT=1]="ELEMENT",e[e.FUNCTIONAL_COMPONENT=2]="FUNCTIONAL_COMPONENT",e[e.STATEFUL_COMPONENT=4]="STATEFUL_COMPONENT",e[e.COMPONENT=6]="COMPONENT",e[e.TEXT_CHILDREN=8]="TEXT_CHILDREN",e[e.ARRAY_CHILDREN=16]="ARRAY_CHILDREN",e[e.SLOTS_CHILDREN=32]="SLOTS_CHILDREN",e[e.TELEPORT=64]="TELEPORT",e[e.SUSPENSE=128]="SUSPENSE",e[e.COMPONENT_SHOULD_KEEP_ALIVE=256]="COMPONENT_SHOULD_KEEP_ALIVE",e[e.COMPONENT_KEPT_ALIVE=512]="COMPONENT_KEPT_ALIVE"})($e||($e={}));var Se;(function(e){e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.DEV_ROOT_FRAGMENT=2048]="DEV_ROOT_FRAGMENT",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL"})(Se||(Se={}));const Pe=e=>!!(e&&e.shapeFlag&1),Ge=(e,t)=>!!(e&&e.shapeFlag&6),kt=(e,t)=>!!(e&&e.shapeFlag&8),Ke=(e,t)=>!!(e&&e.shapeFlag&16),Ue=(e,t)=>!!(e&&e.shapeFlag&32),A=e=>{var t,n;if(e)for(const r of e){if(Pe(r)||Ge(r))return r;if(Ke(r,r.children)){const i=A(r.children);if(i)return i}else if(Ue(r,r.children)){const i=(n=(t=r.children).default)==null?void 0:n.call(t);if(i){const o=A(i);if(o)return o}}else if(Be(r)){const i=A(r);if(i)return i}}},G=(e,t=!1)=>{var n,r;const i=[];for(const o of e??[])Pe(o)||Ge(o)||t&&kt(o,o.children)?i.push(o):Ke(o,o.children)?i.push(...G(o.children,t)):Ue(o,o.children)?i.push(...G((r=(n=o.children).default)==null?void 0:r.call(n),t)):Be(o)&&i.push(...G(o,t));return i};var Vt=O({name:"ResizeObserver",emits:["resize"],setup(e,{emit:t,slots:n}){let r;const i=_(),o=b(()=>ct(i.value)?i.value.$el:i.value),a=d=>{d&&(r=new Bt(l=>{const c=l[0];t("resize",c)}),r.observe(d))},u=()=>{r&&(r.disconnect(),r=null)};return D(o,d=>{r&&u(),d&&a(d)}),q(()=>{o.value&&a(o.value)}),it(()=>{u()}),()=>{var d,l;const c=A((l=(d=n.default)==null?void 0:d.call(n))!=null?l:[]);return c?Ae(c,{ref:i},!0):null}}});const It=O({name:"IconHover",props:{prefix:{type:String},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},setup(){return{prefixCls:j("icon-hover")}}});function Dt(e,t,n,r,i,o){return w(),T("span",{class:x([e.prefixCls,{[`${e.prefix}-icon-hover`]:e.prefix,[`${e.prefixCls}-size-${e.size}`]:e.size!=="medium",[`${e.prefixCls}-disabled`]:e.disabled}])},[J(e.$slots,"default")],2)}var Ht=he(It,[["render",Dt]]);const Re=["onFocus","onFocusin","onFocusout","onBlur","onChange","onBeforeinput","onInput","onReset","onSubmit","onInvalid","onKeydown","onKeypress","onKeyup","onCopy","onCut","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onSelect","autocomplete","autofocus","maxlength","minlength","name","pattern","readonly","required"];var Pt=Object.defineProperty,ze=Object.getOwnPropertySymbols,Gt=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable,Ne=(e,t,n)=>t in e?Pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ut=(e,t)=>{for(var n in t||(t={}))Gt.call(t,n)&&Ne(e,n,t[n]);if(ze)for(var n of ze(t))Kt.call(t,n)&&Ne(e,n,t[n]);return e};const qt=(e,t)=>{const n=Ut({},e);for(const r of t)r in n&&delete n[r];return n};function Jt(e,t){const n={};return t.forEach(r=>{const i=r;r in e&&(n[i]=e[i])}),n}function Wt(e){const t=_();function n(){if(!e.value)return;const{selectionStart:i,selectionEnd:o,value:a}=e.value;if(i==null||o==null)return;const u=a.slice(0,Math.max(0,i)),d=a.slice(Math.max(0,o));t.value={selectionStart:i,selectionEnd:o,value:a,beforeTxt:u,afterTxt:d}}function r(){if(!e.value||!t.value)return;const{value:i}=e.value,{beforeTxt:o,afterTxt:a,selectionStart:u}=t.value;if(!o||!a||!u)return;let d=i.length;if(i.endsWith(a))d=i.length-a.length;else if(i.startsWith(o))d=o.length;else{const l=o[u-1],c=i.indexOf(l,u-1);c!==-1&&(d=c+1)}e.value.setSelectionRange(d,d)}return[n,r]}const Yt=5;var Xt=O({name:"DotLoading",props:{size:{type:Number}},setup(e){const t=j("dot-loading");return()=>{const n=e.size?{width:`${e.size}px`,height:`${e.size}px`}:{};return f("div",{class:t,style:{width:e.size?`${e.size*7}px`:void 0,height:e.size?`${e.size}px`:void 0}},[Array(Yt).fill(1).map((r,i)=>f("div",{class:`${t}-item`,key:i,style:n},null))])}}}),ae=O({name:"Spin",props:{size:{type:Number},loading:Boolean,dot:Boolean,tip:String,hideIcon:{type:Boolean,default:!1}},setup(e,{slots:t}){const n=j("spin"),r=ve(ot,void 0),i=b(()=>[n,{[`${n}-loading`]:e.loading,[`${n}-with-tip`]:e.tip&&!t.default}]),o=()=>{if(t.icon){const u=A(t.icon());if(u)return Ae(u,{spin:!0})}return t.element?t.element():e.dot?f(Xt,{size:e.size},null):r!=null&&r.slots.loading?r.slots.loading():f(ft,{spin:!0,size:e.size},null)},a=()=>{var u,d,l;const c=e.size?{fontSize:`${e.size}px`}:void 0,E=!!((u=t.tip)!=null?u:e.tip);return f(Ce,null,[!e.hideIcon&&f("div",{class:`${n}-icon`,style:c},[o()]),E&&f("div",{class:`${n}-tip`},[(l=(d=t.tip)==null?void 0:d.call(t))!=null?l:e.tip])])};return()=>f("div",{class:i.value},[t.default?f(Ce,null,[t.default(),e.loading&&f("div",{class:`${n}-mask`},[f("div",{class:`${n}-mask-icon`},[a()])])]):a()])}});const Me=Object.assign(ae,{install:(e,t)=>{pe(e,t);const n=me(t);e.component(n+ae.name,ae)}}),ye=Symbol("ArcoCard");var le=O({name:"Card",components:{Spin:Me},props:{bordered:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},size:{type:String},headerStyle:{type:Object,default:()=>({})},bodyStyle:{type:Object,default:()=>({})},title:{type:String},extra:{type:String}},setup(e,{slots:t}){const n=j("card"),{size:r}=Le(e),{mergedSize:i}=ht(r),o=b(()=>i.value==="small"||i.value==="mini"?"small":"medium"),a=l=>{const c=G(l);return f("div",{class:`${n}-actions`},[f("div",{class:`${n}-actions-right`},[c.map((E,C)=>f("span",{key:`action-${C}`,class:`${n}-actions-item`},[E]))])])},u=st({hasMeta:!1,hasGrid:!1,slots:t,renderActions:a});at(ye,u);const d=b(()=>[n,`${n}-size-${o.value}`,{[`${n}-loading`]:e.loading,[`${n}-bordered`]:e.bordered,[`${n}-hoverable`]:e.hoverable,[`${n}-contain-grid`]:u.hasGrid}]);return()=>{var l,c,E,C,R,$,y;const z=!!((l=t.title)!=null?l:e.title),L=!!((c=t.extra)!=null?c:e.extra);return f("div",{class:d.value},[(z||L)&&f("div",{class:[`${n}-header`,{[`${n}-header-no-title`]:!z}],style:e.headerStyle},[z&&f("div",{class:`${n}-header-title`},[(C=(E=t.title)==null?void 0:E.call(t))!=null?C:e.title]),L&&f("div",{class:`${n}-header-extra`},[($=(R=t.extra)==null?void 0:R.call(t))!=null?$:e.extra])]),t.cover&&f("div",{class:`${n}-cover`},[t.cover()]),f("div",{class:`${n}-body`,style:e.bodyStyle},[e.loading?f(Me,null,null):(y=t.default)==null?void 0:y.call(t),t.actions&&!u.hasMeta&&a(t.actions())])])}}}),ue=O({name:"CardMeta",props:{title:{type:String},description:{type:String}},setup(e,{slots:t}){const n=j("card-meta"),r=ve(ye);return q(()=>{r&&(r.hasMeta=!0)}),()=>{var i,o,a,u,d,l;const c=!!((i=t.title)!=null?i:e.title),E=!!((o=t.description)!=null?o:e.description);return f("div",{class:n},[(c||E)&&f("div",{class:`${n}-content`},[c&&f("div",{class:`${n}-title`},[(u=(a=t.title)==null?void 0:a.call(t))!=null?u:e.title]),E&&f("div",{class:`${n}-description`},[(l=(d=t.description)==null?void 0:d.call(t))!=null?l:e.description])]),(t.avatar||(r==null?void 0:r.slots.actions))&&f("div",{class:[`${n}-footer `,{[`${n}-footer-only-actions`]:!t.avatar}]},[t.avatar&&f("div",{class:`${n}-avatar`},[t.avatar()]),r&&r.slots.actions&&r.renderActions(r.slots.actions())])])}}});const Zt=O({name:"CardGrid",props:{hoverable:{type:Boolean,default:!1}},setup(e){const t=j("card-grid"),n=ve(ye);return q(()=>{n&&(n.hasGrid=!0)}),{cls:b(()=>[t,{[`${t}-hoverable`]:e.hoverable}])}}});function Ft(e,t,n,r,i,o){return w(),T("div",{class:x(e.cls)},[J(e.$slots,"default")],2)}var de=he(Zt,[["render",Ft]]);const xn=Object.assign(le,{Meta:ue,Grid:de,install:(e,t)=>{pe(e,t);const n=me(t);e.component(n+le.name,le),e.component(n+ue.name,ue),e.component(n+de.name,de)}}),Qt=["border-width","box-sizing","font-family","font-weight","font-size","font-variant","letter-spacing","line-height","padding-top","padding-bottom","padding-left","padding-right","text-indent","text-rendering","text-transform","white-space","overflow-wrap","width"],en=e=>{const t={};return Qt.forEach(n=>{t[n]=e.getPropertyValue(n)}),t},tn=O({name:"Textarea",components:{ResizeObserver:Vt,IconHover:Ht,IconClose:vt},inheritAttrs:!1,props:{modelValue:String,defaultValue:{type:String,default:""},placeholder:String,disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},maxLength:{type:[Number,Object],default:0},showWordLimit:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},autoSize:{type:[Boolean,Object],default:!1},wordLength:{type:Function},wordSlice:{type:Function}},emits:{"update:modelValue":e=>!0,input:(e,t)=>!0,change:(e,t)=>!0,clear:e=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:t,attrs:n}){const{disabled:r,error:i,modelValue:o}=Le(e),a=j("textarea"),{mergedDisabled:u,mergedError:d,eventHandlers:l}=pt({disabled:r,error:i}),c=_(),E=_(),C=_(),R=_(),$=_(e.defaultValue),y=b(()=>{var s;return(s=o.value)!=null?s:$.value}),[z,L]=Wt(c);D(o,s=>{(mt(s)||yt(s))&&($.value="")});const B=b(()=>I(e.maxLength)&&!!e.maxLength.errorOnly),g=b(()=>I(e.maxLength)?e.maxLength.length:e.maxLength),k=s=>{var v;return bt(e.wordLength)?e.wordLength(s):(v=s.length)!=null?v:0},be=b(()=>k(y.value)),qe=b(()=>d.value||!!(g.value&&B.value&&be.value>g.value)),N=_(!1),X=_(!1),Je=b(()=>e.allowClear&&!u.value&&y.value),Z=_(!1),ge=_(""),F=()=>{z(),Oe(()=>{c.value&&y.value!==c.value.value&&(c.value.value=y.value,L())})},V=(s,v=!0)=>{var p,m;g.value&&!B.value&&k(s)>g.value&&(s=(m=(p=e.wordSlice)==null?void 0:p.call(e,s,g.value))!=null?m:s.slice(0,g.value)),$.value=s,v&&t("update:modelValue",s),F()};let Q=y.value;const _e=(s,v)=>{var p,m;s!==Q&&(Q=s,t("change",s,v),(m=(p=l.value)==null?void 0:p.onChange)==null||m.call(p,v))},We=s=>{var v,p;X.value=!0,Q=y.value,t("focus",s),(p=(v=l.value)==null?void 0:v.onFocus)==null||p.call(v,s)},Ye=s=>{var v,p;X.value=!1,t("blur",s),(p=(v=l.value)==null?void 0:v.onBlur)==null||p.call(v,s),_e(y.value,s)},Xe=s=>{var v,p;const{value:m}=s.target;if(s.type==="compositionend"){if(Z.value=!1,ge.value="",g.value&&!B.value&&y.value.length>=g.value&&k(m)>g.value){F();return}t("input",m,s),V(m),(p=(v=l.value)==null?void 0:v.onInput)==null||p.call(v,s)}else Z.value=!0},Ze=s=>{var v,p;const{value:m}=s.target;if(Z.value)ge.value=m;else{if(g.value&&!B.value&&y.value.length>=g.value&&k(m)>g.value&&s.inputType==="insertText"){F();return}t("input",m,s),V(m),(p=(v=l.value)==null?void 0:v.onInput)==null||p.call(v,s)}},Fe=s=>{V(""),_e("",s),t("clear",s)};D(o,s=>{s!==y.value&&V(s??"",!1)});const Qe=s=>qt(n,Re),et=s=>Jt(n,Re),tt=b(()=>[`${a}-wrapper`,{[`${a}-focus`]:X.value,[`${a}-disabled`]:u.value,[`${a}-error`]:qe.value,[`${a}-scroll`]:N.value}]);let Ee;const ee=_(0),te=_(0),ne=b(()=>!I(e.autoSize)||!e.autoSize.minRows?0:e.autoSize.minRows*ee.value+te.value),re=b(()=>!I(e.autoSize)||!e.autoSize.maxRows?0:e.autoSize.maxRows*ee.value+te.value),ie=()=>{const s=en(Ee);ee.value=Number.parseInt(s["line-height"]||0,10),te.value=Number.parseInt(s["border-width"]||0,10)*2+Number.parseInt(s["padding-top"]||0,10)+Number.parseInt(s["padding-bottom"]||0,10),R.value=s,Oe(()=>{var v;const p=(v=C.value)==null?void 0:v.offsetHeight;let m=p??0,xe="hidden";ne.value&&m<ne.value&&(m=ne.value),re.value&&m>re.value&&(m=re.value,xe="auto"),E.value={height:`${m}px`,resize:"none",overflow:xe}})};q(()=>{c.value&&(Ee=window.getComputedStyle(c.value),e.autoSize&&ie()),oe()});const nt=()=>{e.autoSize&&C.value&&ie(),oe()},rt=s=>{c.value&&s.target!==c.value&&(s.preventDefault(),c.value.focus())},oe=()=>{c.value&&(c.value.scrollHeight>c.value.offsetHeight?N.value||(N.value=!0):N.value&&(N.value=!1))};return D(y,()=>{e.autoSize&&C.value&&ie(),oe()}),{prefixCls:a,wrapperCls:tt,textareaRef:c,textareaStyle:E,mirrorRef:C,mirrorStyle:R,computedValue:y,showClearBtn:Je,valueLength:be,computedMaxLength:g,mergedDisabled:u,getWrapperAttrs:Qe,getTextareaAttrs:et,handleInput:Ze,handleFocus:We,handleBlur:Ye,handleComposition:Xe,handleClear:Fe,handleResize:nt,handleMousedown:rt}},methods:{focus(){var e;(e=this.$refs.textareaRef)==null||e.focus()},blur(){var e;(e=this.$refs.textareaRef)==null||e.blur()}}}),nn=["disabled","value","placeholder"];function rn(e,t,n,r,i,o){const a=se("resize-observer"),u=se("icon-close"),d=se("icon-hover");return w(),T("div",Te(e.getWrapperAttrs(e.$attrs),{class:e.wrapperCls,onMousedown:t[7]||(t[7]=(...l)=>e.handleMousedown&&e.handleMousedown(...l))}),[e.autoSize?(w(),T("div",{key:0,ref:"mirrorRef",class:x(`${e.prefixCls}-mirror`),style:lt(e.mirrorStyle)},H(`${e.computedValue}
`),7)):M("v-if",!0),f(a,{onResize:e.handleResize},{default:we(()=>[P("textarea",Te({ref:"textareaRef"},e.getTextareaAttrs(e.$attrs),{disabled:e.mergedDisabled,class:e.prefixCls,style:e.textareaStyle,value:e.computedValue,placeholder:e.placeholder,onInput:t[0]||(t[0]=(...l)=>e.handleInput&&e.handleInput(...l)),onFocus:t[1]||(t[1]=(...l)=>e.handleFocus&&e.handleFocus(...l)),onBlur:t[2]||(t[2]=(...l)=>e.handleBlur&&e.handleBlur(...l)),onCompositionstart:t[3]||(t[3]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionupdate:t[4]||(t[4]=(...l)=>e.handleComposition&&e.handleComposition(...l)),onCompositionend:t[5]||(t[5]=(...l)=>e.handleComposition&&e.handleComposition(...l))}),null,16,nn)]),_:1},8,["onResize"]),J(e.$slots,"suffix"),e.computedMaxLength&&e.showWordLimit?(w(),T("div",{key:1,class:x(`${e.prefixCls}-word-limit`)},H(e.valueLength)+"/"+H(e.computedMaxLength),3)):M("v-if",!0),e.showClearBtn?(w(),T("div",{key:2,class:x(`${e.prefixCls}-clear-btn`),onClick:t[6]||(t[6]=(...l)=>e.handleClear&&e.handleClear(...l))},[f(d,null,{default:we(()=>[f(u)]),_:1})],2)):M("v-if",!0)],16)}var ce=he(tn,[["render",rn]]);const Cn=Object.assign(ce,{install:(e,t)=>{pe(e,t);const n=me(t);e.component(n+ce.name,ce)}}),on=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/,sn={name:"JsonString",props:{jsonValue:{type:String,required:!0}},data(){return{expand:!0,canExtend:!1}},mounted(){this.$refs.itemRef.offsetHeight>this.$refs.holderRef.offsetHeight&&(this.canExtend=!0)},methods:{toggle(){this.expand=!this.expand}},render(){let e=this.jsonValue;const t=on.test(e);let n;return this.expand?(n={class:{"jv-item":!0,"jv-string":!0},ref:"itemRef"},t?(e=`<a href="${e}" target="_blank" class="jv-link">${e}</a>`,n.innerHTML=`"${e.toString()}"`):n.innerText=`"${e.toString()}"`):n={class:{"jv-ellipsis":!0},onClick:this.toggle,innerText:"..."},h("span",{},[this.canExtend&&h("span",{class:{"jv-toggle":!0,open:this.expand},onClick:this.toggle}),h("span",{class:{"jv-holder-node":!0},ref:"holderRef"}),h("span",n)])}},an={name:"JsonUndefined",functional:!0,props:{jsonValue:{type:Object,default:null}},render(){return h("span",{class:{"jv-item":!0,"jv-undefined":!0},innerText:this.jsonValue===null?"null":"undefined"})}},ln={name:"JsonNumber",functional:!0,props:{jsonValue:{type:Number,required:!0}},render(){const e=Number.isInteger(this.jsonValue);return h("span",{class:{"jv-item":!0,"jv-number":!0,"jv-number-integer":e,"jv-number-float":!e},innerText:this.jsonValue.toString()})}},un={name:"JsonBoolean",functional:!0,props:{jsonValue:Boolean},render(){return h("span",{class:{"jv-item":!0,"jv-boolean":!0},innerText:this.jsonValue.toString()})}},dn={name:"JsonObject",props:{jsonValue:{type:Object,required:!0},keyName:{type:String,default:""},depth:{type:Number,default:0},expand:Boolean,sort:Boolean,previewMode:Boolean},data(){return{value:{}}},computed:{ordered(){if(!this.sort)return this.value;const e={};return Object.keys(this.value).sort().forEach(t=>{e[t]=this.value[t]}),e}},watch:{jsonValue(e){this.setValue(e)}},mounted(){this.setValue(this.jsonValue)},methods:{setValue(e){setTimeout(()=>{this.value=e},0)},toggle(){this.$emit("update:expand",!this.expand),this.dispatchEvent()},dispatchEvent(){try{this.$el.dispatchEvent(new Event("resized"))}catch{var e=document.createEvent("Event");e.initEvent("resized",!0,!1),this.$el.dispatchEvent(e)}}},render(){let e=[];if(!this.previewMode&&!this.keyName&&e.push(h("span",{class:{"jv-toggle":!0,open:!!this.expand},onClick:this.toggle})),e.push(h("span",{class:{"jv-item":!0,"jv-object":!0},innerText:"{"})),this.expand){for(let t in this.ordered)if(this.ordered.hasOwnProperty(t)){let n=this.ordered[t];e.push(h(Y,{key:t,style:{display:this.expand?void 0:"none"},sort:this.sort,keyName:t,depth:this.depth+1,value:n,previewMode:this.previewMode}))}}return!this.expand&&Object.keys(this.value).length&&e.push(h("span",{style:{display:this.expand?"none":void 0},class:{"jv-ellipsis":!0},onClick:this.toggle,title:`click to reveal object content (keys: ${Object.keys(this.ordered).join(", ")})`,innerText:"..."})),e.push(h("span",{class:{"jv-item":!0,"jv-object":!0},innerText:"}"})),h("span",e)}},cn={name:"JsonArray",props:{jsonValue:{type:Array,required:!0},keyName:{type:String,default:""},depth:{type:Number,default:0},sort:Boolean,expand:Boolean,previewMode:Boolean},data(){return{value:[]}},watch:{jsonValue(e){this.setValue(e)}},mounted(){this.setValue(this.jsonValue)},methods:{setValue(e,t=0){t===0&&(this.value=[]),setTimeout(()=>{e.length>t&&(this.value.push(e[t]),this.setValue(e,t+1))},0)},toggle(){this.$emit("update:expand",!this.expand);try{this.$el.dispatchEvent(new Event("resized"))}catch{var e=document.createEvent("Event");e.initEvent("resized",!0,!1),this.$el.dispatchEvent(e)}}},render(){let e=[];return!this.previewMode&&!this.keyName&&e.push(h("span",{class:{"jv-toggle":!0,open:!!this.expand},onClick:this.toggle})),e.push(h("span",{class:{"jv-item":!0,"jv-array":!0},innerText:"["})),this.expand&&this.value.forEach((t,n)=>{e.push(h(Y,{key:n,style:{display:this.expand?void 0:"none"},sort:this.sort,depth:this.depth+1,value:t,previewMode:this.previewMode}))}),!this.expand&&this.value.length&&e.push(h("span",{style:{display:void 0},class:{"jv-ellipsis":!0},onClick:this.toggle,title:`click to reveal ${this.value.length} hidden items`,innerText:"..."})),e.push(h("span",{class:{"jv-item":!0,"jv-array":!0},innerText:"]"})),h("span",e)}},fn={name:"JsonFunction",functional:!0,props:{jsonValue:{type:Function,required:!0}},render(){return h("span",{class:{"jv-item":!0,"jv-function":!0},attrs:{title:this.jsonValue.toString()},innerHTML:"&lt;function&gt;"})}},hn={name:"JsonDate",inject:["timeformat"],functional:!0,props:{jsonValue:{type:Date,required:!0}},render(){const e=this.jsonValue,t=this.timeformat;return h("span",{class:{"jv-item":!0,"jv-string":!0},innerText:`"${t(e)}"`})}},vn=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/,pn={name:"JsonString",props:{jsonValue:{type:RegExp,required:!0}},data(){return{expand:!0,canExtend:!1}},mounted(){this.$refs.itemRef.offsetHeight>this.$refs.holderRef.offsetHeight&&(this.canExtend=!0)},methods:{toggle(){this.expand=!this.expand}},render(){let e=this.jsonValue;const t=vn.test(e);let n;return this.expand?(n={class:{"jv-item":!0,"jv-string":!0},ref:"itemRef"},t?(e=`<a href="${e}" target="_blank" class="jv-link">${e}</a>`,n.innerHTML=`${e.toString()}`):n.innerText=`${e.toString()}`):n={class:{"jv-ellipsis":!0},onClick:this.toggle,innerText:"..."},h("span",{},[this.canExtend&&h("span",{class:{"jv-toggle":!0,open:this.expand},onClick:this.toggle}),h("span",{class:{"jv-holder-node":!0},ref:"holderRef"}),h("span",n)])}},Y={name:"JsonBox",inject:["expandDepth","keyClick"],props:{value:{type:[Object,Array,String,Number,Boolean,Function,Date],default:null},keyName:{type:String,default:""},sort:Boolean,depth:{type:Number,default:0},previewMode:Boolean},data(){return{expand:!0}},mounted(){this.expand=this.previewMode||!(this.depth>=this.expandDepth)},methods:{toggle(){this.expand=!this.expand;try{this.$el.dispatchEvent(new Event("resized"))}catch{var e=document.createEvent("Event");e.initEvent("resized",!0,!1),this.$el.dispatchEvent(e)}}},render(){let e=[],t;this.value===null||this.value===void 0?t=an:Array.isArray(this.value)?t=cn:Object.prototype.toString.call(this.value)==="[object Date]"?t=hn:typeof this.value=="object"?t=dn:typeof this.value=="number"?t=ln:typeof this.value=="string"?t=sn:typeof this.value=="boolean"?t=un:typeof this.value=="function"&&(t=fn),this.value.constructor===RegExp&&(t=pn);const n=this.keyName&&this.value&&(Array.isArray(this.value)||typeof this.value=="object"&&Object.prototype.toString.call(this.value)!=="[object Date]");return!this.previewMode&&n&&e.push(h("span",{class:{"jv-toggle":!0,open:!!this.expand},onClick:this.toggle})),this.keyName&&e.push(h("span",{class:{"jv-key":!0},onClick:()=>{this.keyClick(this.keyName)},innerText:`${this.keyName}:`})),e.push(h(t,{class:{"jv-push":!0},jsonValue:this.value,keyName:this.keyName,sort:this.sort,depth:this.depth,expand:this.expand,previewMode:this.previewMode,"onUpdate:expand":r=>{this.expand=r}})),h("div",{class:{"jv-node":!0,"jv-key-node":!!this.keyName&&!n,toggle:!this.previewMode&&n}},e)}},mn=function(e,t){let n=Date.now(),r;return(...i)=>{Date.now()-n<t&&r&&clearTimeout(r),r=setTimeout(()=>{e(...i)},t),n=Date.now()}},yn={name:"JsonViewer",components:{JsonBox:Y},props:{value:{type:[Object,Array,String,Number,Boolean,Function],required:!0},expanded:{type:Boolean,default:!1},expandDepth:{type:Number,default:1},copyable:{type:[Boolean,Object],default:!1},sort:{type:Boolean,default:!1},boxed:{type:Boolean,default:!1},theme:{type:String,default:"light"},timeformat:{type:Function,default:e=>e.toLocaleString()},previewMode:{type:Boolean,default:!1}},provide(){return{expandDepth:this.expandDepth,timeformat:this.timeformat,keyClick:this.keyClick}},data(){return{copied:!1,copiedText:"copy",expandableCode:!1,expandCode:this.expanded}},emits:["onKeyClick"],computed:{jvClass(){return"jv-container jv-"+this.theme+(this.boxed?" boxed":"")}},watch:{value(){this.onResized()},expandDepth(){this.onResized()}},mounted:function(){this.debounceResized=mn(this.debResized.bind(this),200),this.boxed&&this.$refs.jsonBox&&(this.onResized(),this.$refs.jsonBox.$el.addEventListener("resized",this.onResized,!0)),this.copyable},methods:{onResized(){this.debounceResized()},debResized(){this.$nextTick(()=>{this.$refs.jsonBox&&(this.$refs.jsonBox.$el.clientHeight>=250?this.expandableCode=!0:this.expandableCode=!1)})},keyClick(e){this.$emit("onKeyClick",e)},onCopy(){this.copiedText=this.copiedText=="copy"?"Copied":"copy",navigator.clipboard.writeText(JSON.stringify(this.value)),setTimeout(()=>this.copiedText=this.copiedText=="copy"?"Copied":"copy",1500)},toggleExpandCode(){this.expandCode=!this.expandCode}}},bn={key:0,class:x("jv-tooltip right")};function gn(e,t,n,r,i,o){const a=Y;return w(),T("div",{class:x(o.jvClass)},[n.copyable?(w(),T("div",bn,[P("span",{onClick:t[0]||(t[0]=(...u)=>o.onCopy&&o.onCopy(...u)),class:x(["jv-button",{copied:i.copied}])},[J(e.$slots,"copy",{copied:i.copied},()=>[dt(H(i.copiedText),1)])],2)])):M("",!0),P("div",{class:x(["jv-code",{open:i.expandCode,boxed:n.boxed}])},[f(a,{ref:"jsonBox",value:n.value,sort:n.sort,"preview-mode":n.previewMode},null,8,["value","sort","preview-mode"])],2),i.expandableCode&&n.boxed?(w(),T("div",{key:1,class:"jv-more",onClick:t[1]||(t[1]=(...u)=>o.toggleExpandCode&&o.toggleExpandCode(...u))},[P("span",{class:x(["jv-toggle",{open:!!i.expandCode}])},null,2)])):M("",!0)],2)}const wn=ut(yn,[["render",gn]]);export{xn as C,wn as J,Cn as T};
