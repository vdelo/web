import{r as m,m as W,o as c,i as v,t as L,j as M,b as r,F as N,l as I,k,c as Q,w as V,d as R,g as q,s as ne,_ as D,aS as ae,v as le,ax as G,n as B,bA as O,h as oe,a as E,aQ as X,D as F,y as ie,bB as re,bz as j,by as H}from"./entry.043f00b6.js";import{_ as ue}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as Y,a as ce}from"./InputDefault.a524a8a1.js";const de={key:0,class:"step__title pb-3"},me={class:"step__number"},ve=r("div",{class:"step__delimiter"},null,-1),fe={class:"step__article flex items-center"},_e={class:"step__content"},pe={class:"step__button-wrap"},je={__name:"Steps",props:{steps:{type:Array,default:[]},title:{type:String,default:null},type:{type:String,default:"default"},buttonText:{type:String,default:null}},setup(s){const e=m(!1),l=m(null);return W(()=>{const t=new IntersectionObserver(i=>{i[0].isIntersecting&&(e.value=!0,t.disconnect())});t.observe(l.value)}),(t,i)=>(c(),v("div",{ref_key:"stepsRef",ref:l,class:"step"},[s.title?(c(),v("h3",de,L(s.title),1)):M("",!0),r("div",null,[(c(!0),v(N,null,I(s.steps,(u,o)=>(c(),v("div",{key:o,class:k(["step__block flex items-center",{step__block_visible:e.value,"mb-4 md:mb-6 2xl:mb-0":!s.title}])},[r("div",me,[r("div",{class:k(`step__number-val step__number-val_${s.type}`)},L(o+1),3)]),ve,r("div",fe,[r("div",_e,L(u),1)])],2))),128)),r("div",pe,[s.buttonText?(c(),Q(q(D),{key:0,type:s.type,class:"mx-auto mt-11 px-0 w-full sm:w-72",onClick:i[0]||(i[0]=u=>q(ne).emit("login"))},{default:V(()=>[R(L(s.buttonText),1)]),_:1},8,["type"])):M("",!0)])])],512))}},$={addEventListeners(s,e,l){for(let t=0,i=e.length;t<i;t++)s.addEventListener(e[t],l,{passive:!1})},removeEventListeners(s,e,l){for(let t=0,i=e.length;t<i;t++)s.removeEventListener(e[t],l,{passive:!1})},emitEvent:function(s,e,l){if(s.componentInstance)s.componentInstance.$emit(e,l);else{let t=new window.CustomEvent(e,{detail:l});s.el.dispatchEvent(t)}}},A=["mousedown","touchstart"],P=["mousemove","touchmove"],U=["mouseup","touchend"],J=function(s,e,l){let t=s,i=!0,u=window;typeof e.value=="boolean"?i=e.value:typeof e.value=="object"?(typeof e.value.target=="string"?(t=s.querySelector(e.value.target),t||console.error("There is no element with the current target value.")):typeof e.value.target<"u"&&console.error(`The parameter "target" should be either 'undefined' or 'string'.`),typeof e.value.container=="string"?(u=document.querySelector(e.value.container),u||console.error("There is no element with the current container value.")):typeof e.value.container<"u"&&console.error(`The parameter "container" should be be either 'undefined' or 'string'.`),typeof e.value.active=="boolean"?i=e.value.active:typeof e.value.active<"u"&&console.error(`The parameter "active" value should be either 'undefined', 'true' or 'false'.`)):typeof e.value<"u"&&console.error("The passed value should be either 'undefined', 'true' or 'false' or 'object'.");const o=function(f,h){u===window?window.scrollBy(f,h):(u.scrollLeft+=f,u.scrollTop+=h)},p=function(){let f,h,x,w=!1;t.md=function(n){const a=n instanceof window.MouseEvent,d=a?n.pageX:n.touches[0].pageX,g=a?n.pageY:n.touches[0].pageY,S=document.elementFromPoint(d-window.pageXOffset,g-window.pageYOffset),T=e.arg==="nochilddrag",_=e.modifiers.noleft,y=e.modifiers.noright,b=e.modifiers.nomiddle,C=e.modifiers.noback,z=e.modifiers.noforward,Z=e.arg==="firstchilddrag",ee=S===t,te=S===t.firstChild,se=T?typeof(S==null?void 0:S.dataset.dragscroll)<"u":typeof(S==null?void 0:S.dataset.noDragscroll)>"u";if(!(!ee&&(!se||Z&&!te))&&!(n.button===0&&_)){if(n.button===1&&b||n.button===2&&y||n.button===3&&C||n.button===4&&z)return;x=1,f=a?n.clientX:n.touches[0].clientX,h=a?n.clientY:n.touches[0].clientY}},t.mu=function(n){x=0,w&&$.emitEvent(l,"dragscrollend"),w=!1},t.mm=function(n){const a=n instanceof window.MouseEvent;let d,g;if(x){n.preventDefault(),w||$.emitEvent(l,"dragscrollstart"),w=!0;const S=t.scrollLeft+t.clientWidth>=t.scrollWidth||t.scrollLeft===0,T=t.scrollTop+t.clientHeight>=t.scrollHeight||t.scrollTop===0;d=-f+(f=a?n.clientX:n.touches[0].clientX),g=-h+(h=a?n.clientY:n.touches[0].clientY),e.modifiers.pass?(t.scrollLeft-=e.modifiers.y?-0:d,t.scrollTop-=e.modifiers.x?-0:g,t===document.body&&(t.scrollLeft-=e.modifiers.y?-0:d,t.scrollTop-=e.modifiers.x?-0:g),(S||e.modifiers.y)&&o(-d,0),(T||e.modifiers.x)&&o(0,-g)):(e.modifiers.x&&(g=-0),e.modifiers.y&&(d=-0),t.scrollLeft-=d,t.scrollTop-=g,t===document.body&&(t.scrollLeft-=d,t.scrollTop-=g)),$.emitEvent(l,"dragscrollmove",{deltaX:-d,deltaY:-g})}},$.addEventListeners(t,A,t.md),$.addEventListeners(window,U,t.mu),$.addEventListeners(window,P,t.mm)};i?document.readyState==="complete"?p():window.addEventListener("load",p):($.removeEventListeners(t,A,t.md),$.removeEventListeners(window,U,t.mu),$.removeEventListeners(window,P,t.mm))},he=s=>{const e=s;$.removeEventListeners(e,A,e.md),$.removeEventListeners(window,U,e.mu),$.removeEventListeners(window,P,e.mm)},K={mounted:(s,e,l)=>J(s,e,l),updated:(s,e,l)=>{JSON.stringify(e.value)!==JSON.stringify(e.oldValue)&&J(s,e,l)},unmounted:s=>he(s)};typeof window<"u"&&window.Vue&&(window.VueDragscroll=K);const ge={name:"Partners",directives:{dragscroll:K},props:{whiteType:{type:Boolean,default:!1}},computed:{},methods:{getPartners(){const s="/images/partners",e=this.whiteType?"-w":"";return[{url:"https://sofp.ru/",src:`${s}/partner1${e}.webp`,alt:"Партнер ВДело. Свердловский областной фонд поддержки предпринимательства"},{url:"https://asi.ru/",src:`${s}/partner3${e}.webp`,alt:"Партнер ВДело. Агентство стратегических инициатив"},{url:"https://sk.ru/",src:`${s}/partner4${e}.webp`,alt:"Партнер ВДело. Инновационный центр «Сколково»"},{url:"",src:`${s}/partner5${e}.webp`,alt:"Партнер ВДело. Ассоциация операторов инвестиционных платформ"},{url:"https://ideas-forum.ru/",src:`${s}/partner6${e}.webp`,alt:"Партнер ВДело. Сильные идеи для нового времени"}]}}},ye={class:"container py-10"},we={class:"row"},be=r("div",{class:"w-full xl:w-2/12"},[r("h2",{class:"title mb-24 lg:mb-4",style:{"line-height":"100%"}}," Наши партнеры ")],-1),$e={class:"w-full overflow-scroll scrollbar-hide cursor-grab lg:cursor-auto absolute left-0 xl:w-10/12 lg:relative"},xe={class:"partners__images flex mt-16 lg:mt-0 2xl:mt-2 gap-12 lg:gap-0 lg:justify-between xl:justify-around"},Se=["src","alt"];function ke(s,e,l,t,i,u){const o=ae("dragscroll");return c(),v("section",{class:k(["partners",{"text-white bg-black partners_white-type":l.whiteType}])},[r("div",ye,[r("div",we,[be,le((c(),v("div",$e,[r("div",xe,[(c(!0),v(N,null,I(u.getPartners(),(p,f)=>(c(),v("div",{key:f,class:k(["partners__image",{"pr-14 lg:pr-0":f===u.getPartners().length-1}])},[r("img",{src:p.src,alt:p.alt,draggable:"false"},null,8,Se)],2))),128))])])),[[o]])])])],2)}const He=ue(ge,[["render",ke]]);const Ee={key:0,class:"container"},Le={class:"title pt-8 -mb-12"},Te={class:"container infographic-marquee__container py-20 pb-24"},Ce={class:"infographic-marquee__block px-8 sm:px-12 md:px-16"},Me=["innerHTML"],Ve={class:"infographic-marquee__article"},Je={__name:"InfographicMarquee",props:{type:{type:String,default:"default"},title:{type:String,default:null}},setup(s){const e=m("0"),l=[{num:"1594",text:"компаний"},{num:"6,9 <span>млрд ₽</span>",text:"выдали с 2020 года"},{num:"4691",text:"инвестор"},{num:"513,3 <span>млн ₽</span>",text:"выплатили инвесторам"}],t=async()=>{u.value=-1e3,await p();const n=document.querySelectorAll(".infographic-marquee__block");for(let a=0;a<l.length;a++)l[a].size=n[a].offsetWidth},i=m(0),u=m(0),o=m(800),p=()=>new Promise(n=>setTimeout(n,100)),f=()=>{const n=l.reduce((a,d)=>a+d.size,0);u.value=0,i.value=n},h=async()=>{u.value!==-1e3&&(u.value===l.length&&(f(),o.value=0,await p(),o.value=800),i.value+=l[u.value].size,u.value++)};let x;const w=async()=>{var d;const n=(d=document.querySelector(".infographic-marquee__block:not(.infographic-marquee__block_main)"))==null?void 0:d.firstChild,a=window.getComputedStyle(n).fontSize;a!==e.value&&(e.value=a,await t(),f(),o.value=0,await p(),o.value=800)};return W(async()=>{await t(),f(),window.addEventListener("resize",w,!0),x=setInterval(()=>{h()},2500)}),G(()=>{clearInterval(x),window.removeEventListener("resize",w)}),(n,a)=>(c(),v("section",{class:k(`infographic-marquee infographic-marquee_${s.type}`)},[s.title?(c(),v("div",Ee,[r("h2",Le,L(s.title),1)])):M("",!0),r("div",Te,[r("div",{class:"infographic-marquee__marquee",style:B({transform:`translate(${-i.value}px, 0px)`,transition:`${o.value}ms`})},[(c(!0),v(N,null,I([...l,...l,...l],(d,g)=>(c(),v("div",Ce,[r("div",{innerHTML:d.num,class:k(["infographic-marquee__number",{"infographic-marquee__number_main":u.value+l.length===g}]),style:B({transition:`${o.value}ms`})},null,14,Me),r("div",Ve,L(d.text),1)]))),256))],4)])],2))}};const qe={key:0,class:"container"},Be={class:"title slider-default__title"},ze=["onClick"],Ne={key:0,class:"slider-default__content"},Ie={key:0,class:"slider-default__content slider-default__main-content h-full"},Oe={key:1,class:"container"},Qe={__name:"SliderDefault",props:{slides:{type:Array,default:[]},title:{type:String,default:""},sectionBackground:{type:String,default:"unset"},cardBackground:{type:String,default:"unset"},needBottomSpace:{type:Boolean,default:!1},columnsAdaptive:{type:Boolean,default:!1}},emits:["swipe"],setup(s,{emit:e}){const l=s,t=m([...O(l.slides),...O(l.slides)]);t.value[0].isMain=!0;const i=m(0),u=m(392),o=m(null);function p(){const _=document.querySelector(".slider-default__slide:not(.slider-default__main-slide)");if(!_)return;const y=window.getComputedStyle(_),b=_.offsetWidth,C=parseFloat(y.marginLeft),z=parseFloat(y.marginRight);u.value=b+z+C}function f(_){p(),!(_<0||i.value===_)&&(i.value=_,e("swipe"),setTimeout(()=>{if(t.value.forEach(y=>{y.isMain=!1}),t.value[_].isMain=!0,i.value+l.slides.length*2>t.value.length){const y=O(l.slides);y[0].isMain=!1,t.value.push(...y)}},300))}const h=m(0),x=m(0),w=m(0),n=m(0),a=m(0),d=()=>{a.value=window.innerWidth,setTimeout(()=>{p()},300)},g=_=>{h.value=_.changedTouches[0].screenX,x.value=_.changedTouches[0].screenY},S=_=>{w.value=_.changedTouches[0].screenX,n.value=_.changedTouches[0].screenY;const y=h.value-w.value,b=x.value-n.value;Math.abs(b)>Math.abs(y)||(y>0&&f(i.value+1),y<0&&f(i.value-1))};W(()=>{o.value.addEventListener("touchstart",g,!1),o.value.addEventListener("touchend",S,!1),p(),a.value=window.innerWidth,window.addEventListener("resize",d)}),G(()=>{o.value.removeEventListener("touchstart",g),o.value.removeEventListener("touchend",S),window.removeEventListener("resize",d)});const T=oe(()=>a.value<768);return(_,y)=>(c(),v("section",{class:k(["slider-default overflow-hidden",{"slider-default--adaptive":s.columnsAdaptive}]),style:B(`background-image: ${s.sectionBackground};`)},[s.title?(c(),v("div",qe,[r("div",Be,L(s.title),1)])):M("",!0),r("div",{class:k(["slider-default__container container mx-auto",{"mb-14 md:mb-20":!s.needBottomSpace}])},[r("div",{class:"items-center slider-default__row h-full",style:B(`transform: translateX(${-u.value*i.value}px);`),ref_key:"sliderRef",ref:o},[(c(!0),v(N,null,I(t.value,(b,C)=>(c(),v("div",{key:C,class:k(["slider-default__slide mx-1 sm:mx-2 md:mx-4",{"slider-default__main-slide":!(!b.isMain||q(T)&&s.columnsAdaptive)}]),style:B(`background-color: ${!b.isMain||q(T)&&s.columnsAdaptive?s.cardBackground:"#fff"}`),onClick:z=>f(C)},[E(F,{name:"slide"},{default:V(()=>[!b.isMain||q(T)&&s.columnsAdaptive?(c(),v("div",Ne,[X(_.$slots,"default",{slide:b,index:C})])):M("",!0)]),_:2},1024),E(F,{name:"slide"},{default:V(()=>[b.isMain?(c(),v("div",Ie,[X(_.$slots,"main",{slide:b})])):M("",!0)]),_:2},1024)],14,ze))),128))],4)],2),s.needBottomSpace?(c(),v("div",Oe,[X(_.$slots,"bottom")])):M("",!0)],6))}};const Xe={key:0},Ye={class:"my-4 sm:my-8 space-y-5"},Re=r("span",null,"Я согласен на",-1),De=r("a",{target:"_blank",class:"text-secondary",href:"/docs/Person_data_policy.pdf"}," обработку персональных данных ",-1),Ae=r("div",{class:"text-xs mx-auto mt-6"}," Указанные вами данные доступны только оператору платформы и не передаются третьим лицам. ",-1),Pe={key:1,class:"mt-4"},Ge={__name:"ConclusionModal",setup(s,{expose:e}){const l=m(!1),t=m(null),i=m(null),u=m(!1),o=m({phone:"",name:"",orgName:"",message:""}),p=()=>{l.value=!0},f=m(!1),h=m(!1);async function x(){const w=t.value.validate(),n=i.value.validate();if(!w||!n||!u.value){j("Пожалуйста, заполните все поля и согласитесь на обработку персональных данных!");return}try{h.value=!0;const a={phone:o.value.phone,name:o.value.name,orgName:o.value.orgName||"-",message:o.value.message||"-"};if((await H.getConsultation(a)).data.success)f.value=!0;else throw new Error("NOT SUCCESS")}catch(a){console.log("ERROR SEND QUERY TO GET CONSULTATION"),console.log(a),j("Произошла ошибка при отправлении запроса на получение консультации. Вы можете позвонить напрямую в тех.поддержку по горячему номеру или написав E-mail на соответствующий адрес (данные указаны в шапке сайта)."),await H.sendErrorToLogs({error:JSON.stringify(a),type:3})}finally{h.value=!1}}return e({show:p}),(w,n)=>(c(),Q(re,{modelValue:l.value,"onUpdate:modelValue":n[6]||(n[6]=a=>l.value=a),title:"получить консультацию"},{default:V(()=>[r("div",{class:"conclusion-modal",onClick:n[5]||(n[5]=ie(()=>{},["stop"]))},[f.value?(c(),v("div",Pe,[r("div",null,L(o.value.name)+", ваша заявка успешно отправлена! В ближайшее время наш менеджер свяжется с вами. ",1),E(D,{class:"mx-auto mt-4",onClick:n[4]||(n[4]=a=>l.value=!1)},{default:V(()=>[R(" Спасибо, жду! ")]),_:1})])):(c(),v("div",Xe,[r("div",Ye,[E(Y,{modelValue:o.value.phone,"onUpdate:modelValue":n[0]||(n[0]=a=>o.value.phone=a),ref_key:"phoneInput",ref:t,mask:"+7 (###) ###-##-##",inputmode:"tel",placeholder:"+7 (___) ___-__-__",rules:[a=>!!a&&a.length===18||"Обязательное поле"],label:"Телефон"},null,8,["modelValue","rules"]),E(Y,{modelValue:o.value.name,"onUpdate:modelValue":n[1]||(n[1]=a=>o.value.name=a),ref_key:"nameInput",ref:i,maxlength:80,rules:[a=>!!a||"Обязательное поле"],label:"Имя"},null,8,["modelValue","rules"]),E(Y,{modelValue:o.value.message,"onUpdate:modelValue":n[2]||(n[2]=a=>o.value.message=a),maxlength:80,label:"Текст обращения"},null,8,["modelValue"])]),E(ce,{modelValue:u.value,"onUpdate:modelValue":n[3]||(n[3]=a=>u.value=a),class:"mt-4 justify-center"},{default:V(()=>[Re,De]),_:1},8,["modelValue"]),E(D,{class:"mx-auto mt-4 px-6 sm:px-16",loading:h.value,onClick:x},{default:V(()=>[R(" Отправить заявку ")]),_:1},8,["loading"]),Ae]))])]),_:1},8,["modelValue"]))}};export{He as P,Qe as _,je as a,Ge as b,Je as c};
