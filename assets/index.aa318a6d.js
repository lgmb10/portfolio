import{_ as p,b as w}from"./entry.a50be5fa.js";import{o as l,q as c,B as L,d as $,E as V,z as B,P as o,F as e,C as d,I as t,J as u,L as m,D as v,G as x,H as E,O as I,u as C,_ as k,$ as N,a0 as M,a1 as T}from"./swiper-vue.b406a4ff.js";const A={};function q(n,a){return l(),c("section",null,[L(n.$slots,"default",{},void 0,!0)])}const P=p(A,[["render",q],["__scopeId","data-v-b9d3c693"]]),D=""+new URL("profil.50fd224a.jpg",import.meta.url).href,b=n=>(u("data-v-442e1669"),n=n(),m(),n),j=b(()=>e("div",{class:"title mobile_center"},[e("h1",null,[d("Louis"),e("br"),d(" Gambier")]),e("h2",null,"Développeur Web")],-1)),F=b(()=>e("div",{class:"profile_picture","data-parallax":"-0.6"},[e("div",{class:"img_container"},[e("div",{class:"img_wrapper"},[e("img",{alt:"photo de profile",src:D})])])],-1)),R={class:"mobile_center"},W=b(()=>e("br",null,null,-1)),H=b(()=>e("br",null,null,-1)),O={href:"#parcours"},z=$({__name:"Hero",setup(n){return V(()=>{const a=document.querySelector(".main_inside_wrapper");let i="auto";a&&(i=window.getComputedStyle(a,null).getPropertyValue("height")),document.documentElement.style.setProperty("--hero-height",i),window.addEventListener("resize",()=>{a&&(i=window.getComputedStyle(a,null).getPropertyValue("height")),document.documentElement.style.setProperty("--hero-height",i)})}),(a,i)=>{const h=w,s=P;return l(),B(s,{class:"presentation"},{default:o(()=>[j,F,e("p",R,[d("Bonjour ! Jeune diplomé en master d'informatique, grâce à mes précedentes expériences je me suis spécialisé dans le développement Front-End."),W,H,e("a",O,[d("Découvrez mon profil  "),t(h,{name:"fa6-solid:arrow-down-long"})])])]),_:1})}}});const G=p(z,[["__scopeId","data-v-442e1669"]]),U=""+new URL("f1.a05469b9.png",import.meta.url).href,J=n=>(u("data-v-0ddb3620"),n=n(),m(),n),K={class:"card_container"},Q={class:"techno_container"},X={class:"techno"},Y={key:0,class:"example"},Z={key:0},ee=["href"],te={key:1},ne=J(()=>e("span",null,"-",-1)),se=$({__name:"ExperienceCard",props:{title:String,techno:Array,description:String,example:Array},setup(n){const a=n;return(i,h)=>(l(),c("div",K,[e("div",null,[e("h4",null,v(n.title),1),e("ul",Q,[(l(!0),c(x,null,E(a.techno,s=>(l(),c("li",X,v(s),1))),256))]),e("p",null,v(a.description),1)]),a.example?(l(),c("div",Y,[e("p",null,[d("Exemple"),a.example.length>1?(l(),c("span",Z,"s")):I("",!0),d(" :")]),e("ul",null,[(l(!0),c(x,null,E(a.example,s=>(l(),c(x,null,[e("li",null,[s.link!=null?(l(),c("a",{key:0,href:s.link,target:"_blank"},v(s.title),9,ee)):(l(),c("p",te,v(s.title),1))]),ne],64))),256))])])):I("",!0)]))}});const ie=p(se,[["__scopeId","data-v-0ddb3620"]]),g=n=>(u("data-v-3b0ab2f2"),n=n(),m(),n),ae={class:"experiences"},oe={class:"experience_container"},le=N('<div class="experience" data-v-3b0ab2f2><div data-v-3b0ab2f2><a href="https://www.syneidolab.com/" target="_blank" data-v-3b0ab2f2><h4 data-v-3b0ab2f2>DPS / SyneidoLab</h4></a><h5 data-v-3b0ab2f2>Développeur Front-End</h5></div><p class="duration" data-v-3b0ab2f2><span data-v-3b0ab2f2><span class="duration_detail" data-v-3b0ab2f2>oct </span>2020</span><span data-v-3b0ab2f2> - </span><span data-v-3b0ab2f2><span class="duration_detail" data-v-3b0ab2f2>sep </span>2023</span></p></div>',1),ce={class:"carousel_container"},re=g(()=>e("div",{class:"swiper-button-prev swiper_prev_1"},null,-1)),de=g(()=>e("div",{class:"swiper-button-next swiper_next_1"},null,-1)),_e={class:"experience_container"},pe=N('<div class="experience" data-v-3b0ab2f2><div data-v-3b0ab2f2><a href="https://sofratel.fr/c-a-t/" target="_blank" data-v-3b0ab2f2><h4 data-v-3b0ab2f2>Sofratel CAT</h4></a><h5 data-v-3b0ab2f2>Téléopérateur</h5></div><p class="duration" data-v-3b0ab2f2><span data-v-3b0ab2f2><span class="duration_detail duration_detail_separator" data-v-3b0ab2f2>jul - </span><span class="duration_detail" data-v-3b0ab2f2>sep </span>2019</span></p></div>',1),ue={class:"carousel_container"},me=g(()=>e("div",{class:"swiper-button-prev swiper_prev_2"},null,-1)),he=g(()=>e("div",{class:"swiper-button-next swiper_next_2"},null,-1)),ve=$({__name:"Experiences",setup(n){const a={640:{slidesPerView:2,spaceBetween:32},1280:{slidesPerView:3,spaceBetween:32},1920:{slidesPerView:4,spaceBetween:32}};return(i,h)=>{const s=ie,r=M,S=T;return l(),c("div",ae,[e("div",oe,[le,e("div",ce,[t(S,{breakpoints:a,effect:"cards",modules:["SwiperNavigation"in i?i.SwiperNavigation:C(k)],navigation:{nextEl:".swiper_next_1",prevEl:".swiper_prev_1"},"slides-per-view":1,class:"experiences_swiper"},{default:o(()=>[t(r,null,{default:o(()=>[t(s,{example:[{title:"Agence Pictural",link:"https://www.agencepictural.com/"},{title:"MEL",link:"https://xn--changerarapporte-ipb.fr/participant/"},{title:"Altaprofits"},{title:"Odalys"},{title:"Le Blan Promotion"}],techno:["Nuxt 2","Wordpress","Vanilla"],description:"Développement et intégrations de sites web",title:"Sites web"},null,8,["example"])]),_:1}),t(r,null,{default:o(()=>[t(s,{example:[{title:"Atelier Syneido",link:"https://atelier.syneido.com/"},{title:"Chanel"},{title:"Nocibé"},{title:"Marionnaud"},{title:"MEL"},{title:"Thermor"}],techno:["Vue 2","Vanilla"],description:"Réalisation de landing pages pour du B2B, de présentation produits, ou encore pour la Métropole Lilloise ainsi que pour des projets internes",title:"Landing Pages"},null,8,["example"])]),_:1}),t(r,null,{default:o(()=>[t(s,{example:[{title:"Davril"},{title:"Becity"},{title:"Oney"},{title:"Veralti"}],techno:["Vue 2","Symfony"],description:"Création de formulaires pour le secteur immobilier et le secteur des banques et assurances",title:"Formulaires"})]),_:1}),t(r,null,{default:o(()=>[t(s,{techno:["Nuxt 3"],description:"Création d'un système de thème de couleurs pour un projet interne de génération de landing pages",title:"Outils internes"})]),_:1}),t(r,null,{default:o(()=>[t(s,{example:[{title:"Suzuki"}],techno:["Nuxt 2"],description:"Correction de bugs et modifications lors de phases de TMA",title:"Maintenance"})]),_:1}),t(r,null,{default:o(()=>[t(s,{techno:["Docker","Portainer","Wordpress"],description:"Migration sous docker de projets Wordpress",title:"Migration"})]),_:1}),t(r,null,{default:o(()=>[t(s,{example:[{title:"Auchan"},{title:"Courir"},{title:"Parc Astérix"},{title:"MACSF"},{title:"Thermor"},{title:"Walibi"},{title:"Oney"}],description:"Intégration d'emails et créations d'assets implémnetés dans un outils d'automations de création de newsletter avec de fortes contraintes de compatibilité",title:"Emailing"})]),_:1})]),_:1},8,["modules","navigation"]),re,de])]),e("div",_e,[pe,e("div",ue,[t(S,{breakpoints:a,effect:"cards",modules:["SwiperNavigation"in i?i.SwiperNavigation:C(k)],navigation:{nextEl:".swiper_next_2",prevEl:".swiper_prev_2"},"slides-per-view":1,class:"experiences_swiper_2"},{default:o(()=>[t(r,null,{default:o(()=>[t(s,{description:"Réception d'appels de services d'appel d'urgences de bailleurs sociaux (incendies, inondations, blocage ascenseur, fuites de gaz, etc.)",title:"Réception d'appels d'urgences"})]),_:1}),t(r,null,{default:o(()=>[t(s,{description:"Gestions et suivi de dossiers en cours, contact avec les services d'astreintes et les services publics",title:"Gestion et suivi de dossiers en cours"})]),_:1})]),_:1},8,["modules","navigation"]),me,he])])])}}});const fe=p(ve,[["__scopeId","data-v-3b0ab2f2"]]);const be={},y=n=>(u("data-v-4417a4ef"),n=n(),m(),n),ge={href:"mailto:louisgambier10@gmail.com",target:"_blank",class:"footer_element"},xe=y(()=>e("span",null,null,-1)),we={href:"tel:+33781776431",target:"_blank",class:"footer_element"},$e=y(()=>e("span",null,null,-1)),ye={class:"footer_element"},Se=y(()=>e("p",null,"Lille",-1));function Ee(n,a){const i=w;return l(),c("footer",null,[e("section",null,[e("div",null,[e("a",ge,[t(i,{name:"fa6-solid:envelope"}),d(" louisgambier10@gmail.com ")])]),xe,e("div",null,[e("a",we,[t(i,{name:"fa6-solid:phone"}),d(" 07 81 77 64 31 ")])]),$e,e("div",ye,[t(i,{name:"fa6-solid:map-location-dot"}),Se])])])}const Ie=p(be,[["render",Ee],["__scopeId","data-v-4417a4ef"]]);const Ce={},_=n=>(u("data-v-89ac54cf"),n=n(),m(),n),ke={class:"timeline"},Ne={class:"timeline_wrapper"},Pe=_(()=>e("div",{class:"timeline_date"},[e("span",null,"2023")],-1)),Le=_(()=>e("div",{class:"timeline_description"},[e("p",null,"Mastère - Expert en Ingénierie Informatique. Titre RNCP Niveau 7"),e("p",null,"Efficom. Lille")],-1)),Ve=_(()=>e("div",{class:"timeline_date"},[e("span",null,"2021")],-1)),Be=_(()=>e("div",{class:"timeline_description"},[e("p",null,"Bachelor - Chargé de Projets en Systèmes Informatiques Appliqués. Titre RNCP Niveau 6"),e("p",null,"Efficom. Lille")],-1)),Me=_(()=>e("div",{class:"timeline_date"},[e("span",null,"2020")],-1)),Te=_(()=>e("div",{class:"timeline_description"},[e("p",null,"DUT informatique"),e("p",null,"Institut Universitaire de Technologie A de Lille. Villeneuve-d’Ascq")],-1)),Ae=_(()=>e("div",{class:"timeline_date"},[e("span",null,"2018")],-1)),qe=_(()=>e("div",{class:"timeline_description"},[e("p",null,"Baccalauréat Technologique STI2D spécialité SIN"),e("p",null,"Lycée du Hainaut. Valenciennes.")],-1));function De(n,a){const i=w;return l(),c("article",ke,[e("ul",Ne,[e("li",null,[Pe,t(i,{name:"carbon:branch"}),Le]),e("li",null,[Ve,t(i,{name:"carbon:branch"}),Be]),e("li",null,[Me,t(i,{name:"carbon:branch"}),Te]),e("li",null,[Ae,t(i,{name:"carbon:branch"}),qe])])])}const je=p(Ce,[["render",De],["__scopeId","data-v-89ac54cf"]]);const f=n=>(u("data-v-38bac7a4"),n=n(),m(),n),Fe={class:"content"},Re=f(()=>e("h3",{class:"section_title","data-parallax":"-0.08"},"Mon Parcours",-1)),We=f(()=>e("h3",{class:"section_title","data-parallax":"-0.08"},"Mes Expériences",-1)),He=f(()=>e("h3",{class:"section_title","data-parallax":"-0.08"},"Mes Passions",-1)),Oe=f(()=>e("p",null,"TEST eedsthbrte",-1)),ze=f(()=>e("img",{alt:"",src:U,style:{width:"50%"}},null,-1)),Ge={__name:"index",setup(n){return(a,i)=>{const h=G,s=P;return l(),c("main",Fe,[t(h),t(s,{id:"parcours"},{default:o(()=>[Re,t(je)]),_:1}),t(s,{id:"experiences"},{default:o(()=>[We,t(fe)]),_:1}),t(s,{id:"passions"},{default:o(()=>[He,Oe,ze]),_:1}),t(Ie)])}}},Ke=p(Ge,[["__scopeId","data-v-38bac7a4"]]);export{Ke as default};