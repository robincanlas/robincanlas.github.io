(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return l}));var n=a(22);var l=Object(n.a)({basename:e.env.PUBLIC_URL})}).call(this,a(106))},28:function(e,t,a){e.exports={nav:"_32VlY",name:"_2Vz0L",menu:"Tdn75",tag:"_1-xcM",burger:"afHNY",active:"_2WfGy"}},32:function(e,t,a){e.exports={container:"_2FJb_",contact:"_1SoSr",details:"_1T349",text:"_2hXFo"}},320:function(e,t,a){},321:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a(25),c=a(70),i=a(33),m=a(20),o=a(28),s=a(332),E="https://robincanlas-server.herokuapp.com/photos",h=[{name:"about",url:"/about"},{name:"work",url:"/work"},{name:"photography",url:"/photography"},{name:"contact",url:"/contact"}],u=[{name:"javascript",title:"Javascript"},{name:"typescript",title:"Typescript"},{name:"css",title:"CSS3"},{name:"html5",title:"HTML5"},{name:"reactjs",title:"ReactJS"},{name:"redux",title:"Redux"},{name:"createjs",title:"CreateJS"}];!function(e){e.GET_PHOTOS_REQUEST="GET_PHOTOS_REQUEST",e.GET_PHOTOS_SUCCESS="GET_PHOTOS_SUCCESS",e.GET_PHOTOS_FAILED="GET_PHOTOS_FAILED"}(n||(n={}));var f,p=function(e){var t=Object(l.useState)("/"),a=t[0],n=t[1];return Object(l.useEffect)((function(){n(m.a.location.pathname);var e=m.a.listen((function(){n(m.a.location.pathname)}));return function(){e()}}),[]),l.createElement(s.a,{id:o.nav,className:o.nav,text:!0},l.createElement(s.a.Item,{className:o.name,onClick:function(){return m.a.push("/")},header:!0},l.createElement("span",{className:o.tag},"<"),l.createElement("span",null," robin "),l.createElement("span",{className:o.tag},"/>")),l.createElement(s.a.Menu,{className:o.menu,position:"right"},h.map((function(e){return l.createElement(s.a.Item,{key:e.name,name:e.name,className:e.url===a?o.active:"",onClick:function(){return m.a.push(e.url)}})}))),l.createElement(s.a.Item,{className:o.burger,position:"right"},l.createElement("div",{onClick:e.toggleOverLay},l.createElement("div",null),l.createElement("div",null),l.createElement("div",null))))},v=a(92),d=a(99),g=function(e){return l.createElement("span",{id:v.footer},l.createElement("div",{className:v.hosting},l.createElement("a",{target:"_blank",href:"https://github.com/robincanlas"},l.createElement(d.a,{size:"huge",name:"github"})),l.createElement("a",{target:"_blank",href:"https://bitbucket.org/kristofferrobincanlas"},l.createElement(d.a,{size:"huge",name:"bitbucket"}))),l.createElement("p",null,"© 2020, Designed and Coded by Kristoffer Robin Canlas"))},y=function(){return l.createElement("svg",{width:"264",height:"280",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},l.createElement("defs",null,l.createElement("path",{d:"M12 160c0 66.27 53.73 120 120 120 66.27 0 120-53.73 120-120h12V0H0v160h12z",id:"c"}),l.createElement("path",{d:"M124 144.61V163h4a72 72 0 0172 72v9H0v-9a72 72 0 0172-72h4v-18.39a56.04 56.04 0 01-31.7-44.73A12 12 0 0134 88V74a12 12 0 0110-11.83V56a56 56 0 11112 0v6.17A12 12 0 01166 74v14a12 12 0 01-10.3 11.88 56.04 56.04 0 01-31.7 44.73z",id:"e"}),l.createElement("circle",{id:"a",cx:"120",cy:"120",r:"120"})),l.createElement("g",{fill:"none",fillRule:"evenodd"},l.createElement("g",{transform:"translate(12 40)"},l.createElement("mask",{id:"b",fill:"#fff"},l.createElement("use",{xlinkHref:"#a"})),l.createElement("use",{fill:"#E6E6E6",xlinkHref:"#a"}),l.createElement("g",{mask:"url(#b)",fill:"#3e92a3"},l.createElement("path",{d:"M0 0h240v240H0z"}))),l.createElement("mask",{id:"d",fill:"#fff"},l.createElement("use",{xlinkHref:"#c"})),l.createElement("g",{mask:"url(#d)"},l.createElement("g",{transform:"translate(32 36)"},l.createElement("mask",{id:"f",fill:"#fff"},l.createElement("use",{xlinkHref:"#e"})),l.createElement("use",{fill:"#D0C6AC",xlinkHref:"#e"}),l.createElement("g",{mask:"url(#f)",fill:"#EDB98A"},l.createElement("path",{d:"M-32 0h264v244H-32z"})),l.createElement("path",{d:"M156 79v23a56 56 0 11-112 0V79v15a56 56 0 10112 0V79z",fillOpacity:".1",fill:"#000",mask:"url(#f)"})),l.createElement("g",{transform:"translate(0 170)"},l.createElement("defs",null,l.createElement("path",{d:"M133.96.3A72 72 0 01200 72.04V81H0v-8.95A72 72 0 0167.05.22c-.03.37-.05.75-.05 1.13 0 11.86 15 21.48 33.5 21.48S134 13.2 134 1.35c0-.36-.01-.7-.04-1.06z",id:"g"})),l.createElement("g",{transform:"translate(32 29)"},l.createElement("mask",{id:"h",fill:"#fff"},l.createElement("use",{xlinkHref:"#g"})),l.createElement("use",{fill:"#E6E6E6",xlinkHref:"#g"}),l.createElement("g",{mask:"url(#h)",fill:"#262E33"},l.createElement("path",{d:"M-32-29h264V81H-32z"})),l.createElement("g",{opacity:".6",mask:"url(#h)",fillOpacity:".16",fill:"#000"},l.createElement("ellipse",{cx:"40.5",cy:"27.85",rx:"39.64",ry:"26.91",transform:"translate(60 -25)"}))),l.createElement("path",{d:"M100.78 29.12A72 72 0 0032 101.05V110h69.36C97.96 97.92 96 83.7 96 68.5c0-14.33 1.74-27.77 4.78-39.38zM163.64 110H232v-8.95a72 72 0 00-67.77-71.88C167.27 40.77 169 54.2 169 68.5c0 15.2-1.96 29.42-5.36 41.5z",fill:"#3A4C5A"}),l.createElement("path",{d:"M181 86l9.56-7.17a4 4 0 014.85.05L202 84l-21 2z",fill:"#E6E6E6"}),l.createElement("path",{d:"M101 28c-4 19.33-2.33 46.67 5 82H90L76 74l6-9-6-6 19-30c2.03-.63 4.03-.96 6-1zM163 28c4 19.33 2.33 46.67-5 82h16l14-36-6-9 6-6-19-30a21.45 21.45 0 00-6-1z",fill:"#2F4351"})),l.createElement("g",{fill:"#000"},l.createElement("g",{transform:"translate(78 134)"},l.createElement("defs",null,l.createElement("path",{d:"M35.12 15.13a19 19 0 0037.77-.09c.08-.77-.77-2.04-1.85-2.04H37.1C36 13 35 14.18 35.12 15.13z",id:"i"})),l.createElement("mask",{id:"j",fill:"#fff"},l.createElement("use",{xlinkHref:"#i"})),l.createElement("use",{fillOpacity:".7",xlinkHref:"#i"}),l.createElement("rect",{fill:"#FFF",mask:"url(#j)",x:"39",y:"2",width:"31",height:"16",rx:"5"}),l.createElement("g",{mask:"url(#j)",fill:"#FF4F6D"},l.createElement("g",{transform:"translate(38 24)"},l.createElement("circle",{cx:"11",cy:"11",r:"11"}),l.createElement("circle",{cx:"21",cy:"11",r:"11"})))),l.createElement("path",{d:"M120 130c0 4.42 5.37 8 12 8s12-3.58 12-8",fillOpacity:".16"}),l.createElement("g",{transform:"translate(76 90)",fillOpacity:".6"},l.createElement("circle",{cx:"30",cy:"22",r:"6"}),l.createElement("circle",{cx:"82",cy:"22",r:"6"})),l.createElement("g",{fillOpacity:".6"},l.createElement("path",{d:"M102.55 88.15c-5.81.27-15.2 4.49-14.96 10.34.01.2.3.28.43.13 2.76-2.96 22.32-5.95 29.2-4.36.64.14 1.12-.48.72-.93-3.43-3.85-10.19-5.43-15.4-5.18M162.45 88.15c5.81.27 15.2 4.49 14.96 10.34-.01.2-.3.28-.43.13-2.76-2.96-22.32-5.95-29.2-4.36-.64.14-1.12-.48-.72-.93 3.43-3.85 10.19-5.43 15.4-5.18"}))),l.createElement("defs",null,l.createElement("path",{id:"k",d:"M0 0h264v280H0z"}),l.createElement("path",{d:"M180.15 39.92c-2.76-2.82-5.96-5.21-9.08-7.61-.69-.53-1.39-1.05-2.06-1.6-.15-.12-1.72-1.24-1.9-1.66-.46-.99-.2-.22-.13-1.4.08-1.5 3.13-5.73.85-6.7-1-.43-2.79.7-3.75 1.08a59.49 59.49 0 01-5.73 1.9c.93-1.85 2.7-5.57-.63-4.58-2.6.78-5.03 2.77-7.64 3.7.86-1.4 4.32-5.8 1.2-6.05-.98-.07-3.8 1.75-4.86 2.14a55.8 55.8 0 01-9.63 2.51c-11.2 2.02-24.3 1.45-34.65 6.54-8 3.93-15.88 10.03-20.5 17.8-4.44 7.48-6.1 15.67-7.03 24.25-.69 6.3-.74 12.8-.42 19.12.1 2.07.34 11.61 3.34 8.72 1.5-1.44 1.49-7.25 1.87-9.22.75-3.91 1.47-7.85 2.72-11.64 2.2-6.68 4.81-13.79 10.3-18.39 3.53-2.95 6.01-6.94 9.39-9.92 1.51-1.34.36-1.2 2.8-1.02 1.63.12 3.28.16 4.92.2 3.8.1 7.6.08 11.4.1 7.64.02 15.25.13 22.89-.27 3.4-.18 6.8-.28 10.18-.6 1.9-.17 5.25-1.38 6.8-.45 1.43.84 2.91 3.61 3.94 4.75 2.41 2.67 5.3 4.72 8.12 6.92 5.9 4.57 8.87 10.33 10.66 17.48 1.79 7.13 1.29 13.75 3.5 20.76.38 1.24 1.4 3.36 2.68 1.46.23-.36.17-2.3.17-3.42 0-4.52 1.14-7.91 1.13-12.46-.06-13.83-.5-31.87-10.85-42.44z",id:"m"})),l.createElement("mask",{id:"l",fill:"#fff"},l.createElement("use",{xlinkHref:"#k"})),l.createElement("g",{mask:"url(#l)"},l.createElement("g",{transform:"translate(-1)"},l.createElement("mask",{id:"n",fill:"#fff"},l.createElement("use",{xlinkHref:"#m"})),l.createElement("use",{fill:"#1F3140",xlinkHref:"#m"}),l.createElement("g",{mask:"url(#n)",fill:"#2C1B18"},l.createElement("path",{d:"M0 0h264v280H0z"})))))))},z=a(52),H=a(333),b=function(e){return l.createElement("span",{id:z.overlay,className:e.overlayNav?z.open:""},l.createElement("span",{className:z.bg},l.createElement("span",null,l.createElement("div",{onClick:e.toggleOverlay,className:z.xicon},l.createElement("div",null),l.createElement("div",null))),l.createElement("span",null,h.map((function(t){return l.createElement(H.a,{as:"h1",key:t.name,onClick:function(){return function(t){m.a.push(t),e.toggleOverlay()}(""+t.name)}},t.name)})))))},w=a(53),M=a(326),x=function(e){return l.createElement(M.a,{id:w.container},l.createElement("span",{className:w.intro},l.createElement("span",{className:w.text},l.createElement("p",null,"Kristoffer Robin Canlas"),l.createElement("p",null,"Web Developer")),l.createElement("span",{className:w.picture},l.createElement("span",null,l.createElement(y,null)))))},O=a(95),k=a(328),_=a(327),S=a(330),C=a(69),T=a(31),N=a(335),L=a(154),V=a.n(L);(f||(f={})).getPhotos=function(){var e=Object(N.a)(n.GET_PHOTOS_REQUEST),t=Object(N.a)(n.GET_PHOTOS_SUCCESS),a=Object(N.a)(n.GET_PHOTOS_FAILED);return function(n){n(e()),V.a.get(E).then((function(e){n(t(e.data))})).catch((function(e){n(a(e.data))}))}};var F,j,A,P,B,D=Object(C.b)((function(e,t){return{photography:e.photography}}),(function(e){return{photoActions:Object(T.b)(f,e)}}))((function(e){return Object(l.useEffect)((function(){return e.photoActions.getPhotos(),function(){}}),[]),l.createElement(M.a,{id:O.container},l.createElement(k.a,{active:e.photography.isLoading},l.createElement(_.a,null)),!e.photography.isLoading&&l.createElement("span",{className:O["gallery-list"]},e.photography.photos.map((function(e){return l.createElement("span",{key:e.id},l.createElement(S.a,{src:e.src}))}))))})),I=a(71),R=a(331),G=a(334),J={createjs:l.createElement((function(){return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"48",height:"48",viewBox:"0 0 256 293",transform:"rotate(360)"},l.createElement("title",null,"CreateJS"),l.createElement("path",{d:"M252.08 70.22L131.9 1.03a7.83 7.83 0 00-7.8 0L3.92 70.21A7.82 7.82 0 000 77v138.3a7.82 7.82 0 003.92 6.78l120.18 69.17a7.83 7.83 0 007.8 0l120.18-69.17a7.82 7.82 0 003.92-6.79V77c0-2.8-1.5-5.38-3.92-6.78zM118.84 45.38a1.3 1.3 0 01-.65 1.13l-43 24.77a1.3 1.3 0 000 2.26l43 24.74c.4.24.65.67.65 1.13v17.98a1.3 1.3 0 01-1.95 1.13L38.75 73.55a1.3 1.3 0 010-2.26l78.13-45.02a1.3 1.3 0 011.96 1.13v17.98zm98.4 28.17l-78.2 45a1.3 1.3 0 01-1.94-1.12V99.45c0-.47.25-.9.65-1.13l43.05-24.77a1.3 1.3 0 000-2.26l-43.05-24.81a1.3 1.3 0 01-.65-1.13V27.37a1.3 1.3 0 011.95-1.13l78.2 45.05c.86.5.86 1.76 0 2.26z",fill:"#405261"}),l.createElement("path",{fill:"rgba(0, 0, 0, 0)",d:"M0 0h256v293H0z"}))}),null),css:l.createElement((function(){return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"48",height:"48",viewBox:"0 0 256 361",transform:"rotate(360)"},l.createElement("title",null,"CSS3"),l.createElement("path",{d:"M127.84 360.09L23.66 331.17.45 70.77h255.1l-23.24 260.36-104.47 28.96z",fill:"#264DE4"}),l.createElement("path",{d:"M212.42 314.55l19.86-222.5H128v245.9l84.42-23.4z",fill:"#2965F1"}),l.createElement("path",{d:"M53.67 188.64l2.86 31.93H128v-31.93H53.67zM47.92 124l2.9 31.93H128V124H47.92zM128 271.58l-.14.04-35.57-9.6-2.27-25.48H57.96l4.47 50.15 65.42 18.16.15-.04v-33.23z",fill:"#EBEBEB"}),l.createElement("path",{d:"M60.48 0h38.68v16.18h-22.5v16.17h22.5v16.18H60.49V0zM106.9 0h38.68v14.07h-22.5v2.8h22.5v32.36H106.9V34.46h22.5v-2.81h-22.5V0zM153.32 0H192v14.07h-22.5v2.8H192v32.36h-38.68V34.46h22.5v-2.81h-22.5V0z"}),l.createElement("path",{d:"M202.13 188.64l5.76-64.64h-80v31.93h45l-2.9 32.7h-42.1v31.94h39.33L163.5 262l-35.62 9.62v33.22l65.47-18.14.48-5.4 7.5-84.08.79-8.57z",fill:"#FFF"}),l.createElement("path",{fill:"rgba(0, 0, 0, 0)",d:"M0 0h256v361H0z"}))}),null),html5:l.createElement((function(){return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"48",height:"48",viewBox:"0 0 256 361",transform:"rotate(360)"},l.createElement("title",null,"HTML5"),l.createElement("path",{d:"M255.56 70.77L232.3 331.13l-104.47 28.96-104.18-28.92L.45 70.77h255.1z",fill:"#E44D26"}),l.createElement("path",{d:"M128 337.95l84.42-23.4 19.86-222.5H128v245.9z",fill:"#F16529"}),l.createElement("path",{d:"M82.82 155.93H128V124H47.92l.76 8.57 7.85 88.01H128v-31.93H85.74l-2.92-32.7zM90.02 236.54H57.96l4.47 50.15 65.42 18.16.15-.04v-33.23l-.14.04-35.57-9.6-2.27-25.48z",fill:"#EBEBEB"}),l.createElement("path",{d:"M24.18 0h16.23v16.04h14.85V0h16.23v48.56H55.26V32.3H40.4v16.26H24.18V0zM92.83 16.1H78.54V0h44.82v16.1h-14.3v32.46H92.83V16.1zM130.47 0h16.92l10.41 17.06L168.2 0h16.93v48.56h-16.16V24.49L157.8 41.76h-.28l-11.17-17.27v24.07h-15.88V0zM193.21 0h16.23v32.5h22.83v16.06H193.2V0z"}),l.createElement("path",{d:"M127.89 220.57h39.33L163.5 262l-35.62 9.62v33.22l65.47-18.14.48-5.4 7.5-84.08.79-8.57h-74.24v31.93zM127.89 155.85v.08h77.14l.64-7.18 1.46-16.19.76-8.56h-80v31.86z",fill:"#FFF"}),l.createElement("path",{fill:"rgba(0, 0, 0, 0)",d:"M0 0h256v361H0z"}))}),null),javascript:l.createElement((function(){return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"48",height:"48",viewBox:"0 0 256 256",transform:"rotate(360)"},l.createElement("title",null,"Javascript"),l.createElement("path",{d:"M0 0h256v256H0V0z",fill:"#F7DF1E"}),l.createElement("path",{d:"M67.31 213.93l19.6-11.85c3.77 6.7 7.21 12.37 15.46 12.37 7.9 0 12.89-3.1 12.89-15.12v-81.8h24.05v82.14c0 24.91-14.6 36.26-35.91 36.26-19.25 0-30.42-9.97-36.09-22M152.38 211.35l19.59-11.34c5.16 8.42 11.86 14.61 23.71 14.61 9.97 0 16.33-4.98 16.33-11.86 0-8.25-6.53-11.17-17.53-15.98l-6.01-2.58c-17.36-7.38-28.87-16.66-28.87-36.25 0-18.05 13.74-31.8 35.23-31.8 15.29 0 26.29 5.33 34.2 19.25l-18.74 12.03c-4.13-7.39-8.6-10.31-15.46-10.31-7.05 0-11.52 4.47-11.52 10.31 0 7.22 4.47 10.14 14.78 14.6l6.01 2.59c20.45 8.76 31.97 17.7 31.97 37.8 0 21.65-17.02 33.5-39.87 33.5-22.34 0-36.78-10.64-43.82-24.56"}),l.createElement("path",{fill:"rgba(0, 0, 0, 0)",d:"M0 0h256v256H0z"}))}),null),reactjs:l.createElement((function(){return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"48",height:"48",viewBox:"0 0 256 228",transform:"rotate(360)"},l.createElement("title",null,"ReactJS"),l.createElement("path",{d:"M210.48 73.82a171.49 171.49 0 00-8.24-2.6c.47-1.9.9-3.77 1.28-5.61 6.23-30.28 2.16-54.68-11.77-62.71-13.36-7.7-35.2.33-57.26 19.52a171.23 171.23 0 00-6.37 5.85 155.87 155.87 0 00-4.24-3.91C100.76 3.83 77.58-4.82 63.68 3.23 50.32 10.96 46.37 33.9 51.98 62.6a170.97 170.97 0 001.9 8.48c-3.28.93-6.45 1.92-9.48 2.98C17.31 83.5 0 98.3 0 113.67c0 15.86 18.58 31.78 46.81 41.43a145.52 145.52 0 006.92 2.16 167.47 167.47 0 00-2 9.14c-5.36 28.2-1.18 50.59 12.13 58.26 13.74 7.93 36.8-.22 59.27-19.85a145.57 145.57 0 005.34-4.92 168.06 168.06 0 006.92 6.31c21.76 18.72 43.25 26.28 56.54 18.59 13.73-7.95 18.2-32 12.4-61.27a145.02 145.02 0 00-1.53-6.84c1.62-.48 3.2-.98 4.76-1.5 29.34-9.72 48.44-25.44 48.44-41.51 0-15.42-17.87-30.33-45.52-39.85zm-6.36 70.99c-1.4.46-2.84.9-4.3 1.34a256.55 256.55 0 00-12.97-32.43c5.11-11 9.31-21.77 12.46-31.96 2.62.76 5.16 1.56 7.61 2.4 23.7 8.16 38.14 20.22 38.14 29.5 0 9.9-15.6 22.75-40.94 31.15zm-10.52 20.83c2.57 12.94 2.93 24.64 1.23 33.79-1.52 8.22-4.59 13.7-8.38 15.9-8.07 4.66-25.32-1.4-43.93-17.42a156.73 156.73 0 01-6.43-5.87 256.79 256.79 0 0021.46-27.25c12.37-1.1 24.06-2.89 34.67-5.34.52 2.1.98 4.17 1.38 6.2zM87.28 214.52c-7.89 2.78-14.16 2.86-17.96.67-8.07-4.66-11.43-22.64-6.85-46.75a156.92 156.92 0 011.87-8.5 257.04 257.04 0 0034.5 5 266.31 266.31 0 0021.97 27.14 134.67 134.67 0 01-4.88 4.5c-9.93 8.68-19.88 14.84-28.65 17.93zm-36.93-69.77c-12.48-4.27-22.8-9.81-29.86-15.87-6.35-5.43-9.55-10.83-9.55-15.21 0-9.32 13.9-21.21 37.07-29.3 2.82-.97 5.76-1.9 8.82-2.77a262.3 262.3 0 0012.47 32.33 266.39 266.39 0 00-12.63 32.8 134.72 134.72 0 01-6.32-1.98zm12.38-84.26c-4.81-24.59-1.62-43.14 6.42-47.8 8.57-4.95 27.5 2.12 47.47 19.84a144.32 144.32 0 013.84 3.55 262.1 262.1 0 00-21.81 26.99 267.2 267.2 0 00-34.16 5.3 160.34 160.34 0 01-1.76-7.88zm110.43 27.27a347.8 347.8 0 00-7.79-12.8c8.17 1.03 16 2.4 23.34 4.07a233.53 233.53 0 01-8.19 22.05 381.15 381.15 0 00-7.37-13.32zm-45.04-43.87a233.94 233.94 0 0115.07 18.19 322.04 322.04 0 00-30.26 0 241.31 241.31 0 0115.2-18.19zM82.8 87.83a323.17 323.17 0 00-7.22 13.24 241.44 241.44 0 01-8.14-22.15 247 247 0 0123.21-3.99 321.52 321.52 0 00-7.85 12.9zm8.08 65.35c-8.38-.93-16.29-2.2-23.59-3.8 2.26-7.3 5.04-14.88 8.3-22.6a321.19 321.19 0 007.26 13.26c2.59 4.48 5.28 8.86 8.03 13.14zm37.55 31.03a245.18 245.18 0 01-15.4-18.43c4.9.2 9.9.29 14.97.29 5.22 0 10.38-.12 15.45-.34a232.66 232.66 0 01-15.02 18.48zm52.2-57.81c3.42 7.8 6.3 15.34 8.59 22.52a232 232 0 01-23.88 4.07 382.42 382.42 0 007.86-13.03 347.4 347.4 0 007.42-13.56zm-16.9 8.1a358.56 358.56 0 01-12.29 19.81 329.4 329.4 0 01-23.44.82c-7.97 0-15.72-.24-23.18-.73a310.2 310.2 0 01-12.51-19.84 307.41 307.41 0 01-10.92-20.63 310.28 310.28 0 0110.89-20.64 307.32 307.32 0 0112.4-19.76 307.89 307.89 0 0146.66 0 329.36 329.36 0 0112.35 19.7 358.49 358.49 0 0111.03 20.54 329.47 329.47 0 01-11 20.73zm22.56-122.13c8.57 4.95 11.9 24.88 6.52 51.03-.35 1.67-.73 3.37-1.15 5.09a261.82 261.82 0 00-34.23-5.41 256.84 256.84 0 00-21.64-27 160.79 160.79 0 015.88-5.4c18.9-16.45 36.57-22.95 44.62-18.3zM128 90.81a22.86 22.86 0 110 45.72 22.86 22.86 0 010-45.72z",fill:"#00D8FF"}),l.createElement("path",{fill:"rgba(0, 0, 0, 0)",d:"M0 0h256v228H0z"}))}),null),redux:l.createElement((function(){return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"48",height:"48",viewBox:"0 0 256 244",transform:"rotate(360)"},l.createElement("title",null,"Redux"),l.createElement("path",{d:"M177.38 169.73a18.25 18.25 0 0016.29-18.9 18.3 18.3 0 00-18.24-17.59h-.65a18.23 18.23 0 00-17.6 18.9 18.7 18.7 0 005.21 12.05c-11.07 21.83-28.01 37.8-53.42 51.15-17.27 9.12-35.18 12.38-53.1 10.1-14.66-1.95-26.06-8.47-33.23-19.22-10.43-15.96-11.4-33.23-2.6-50.5 6.18-12.38 15.96-21.5 22.15-26.06a175.7 175.7 0 01-4.24-16.61c-47.24 34.2-42.35 80.47-28.02 102.3 10.75 16.28 32.58 26.38 56.69 26.38 6.51 0 13.03-.65 19.54-2.28 41.7-8.14 73.3-32.9 91.22-69.72zm57.34-40.4c-24.76-28.99-61.25-44.95-102.95-44.95h-5.2a17.9 17.9 0 00-15.97-9.78h-.65a18.23 18.23 0 00-17.6 18.9 18.3 18.3 0 0018.25 17.6h.65a18.35 18.35 0 0015.96-11.08h5.87c24.75 0 48.21 7.16 69.39 21.17 16.28 10.75 28.01 24.76 34.53 41.7 5.54 13.68 5.2 27.04-.65 38.44-9.13 17.27-24.44 26.72-44.63 26.72-13.04 0-25.41-3.91-31.93-6.84a192.49 192.49 0 01-14.66 11.72c14 6.52 28.34 10.1 42.02 10.1 31.28 0 54.4-17.26 63.2-34.53 9.45-18.9 8.8-51.47-15.63-79.16zm-165.5 45.94a18.3 18.3 0 0018.25 17.6h.65a18.23 18.23 0 0017.6-18.9 18.3 18.3 0 00-18.25-17.6h-.65c-.66 0-1.63 0-2.28.33-13.36-22.15-18.9-46.26-16.94-72.32 1.3-19.55 7.81-36.5 19.22-50.5 9.44-12.05 27.69-17.92 40.07-18.24 34.53-.66 49.19 42.35 50.16 59.61 4.24.98 11.4 3.26 16.3 4.9C189.42 27.36 156.84 0 125.57 0c-29.32 0-56.35 21.18-67.1 52.45-15 41.7-5.22 81.77 13.03 113.37-1.63 2.28-2.61 5.87-2.28 9.45z",fill:"#764ABC"}),l.createElement("path",{fill:"rgba(0, 0, 0, 0)",d:"M0 0h256v244H0z"}))}),null),typescript:l.createElement((function(){return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"48",height:"48",viewBox:"0 0 256 256",transform:"rotate(360)"},l.createElement("title",null,"Typescript"),l.createElement("path",{fill:"#007ACC",d:"M0 128v128h256V0H0z"}),l.createElement("path",{d:"M56.61 128.85l-.08 10.48h33.32v94.68h23.57v-94.68h33.32v-10.28c0-5.69-.12-10.44-.28-10.56-.13-.17-20.4-.25-44.99-.2l-44.74.12-.12 10.44zM206.57 118.1a31.87 31.87 0 0116 9.23c2.36 2.52 5.86 7.11 6.14 8.21.08.33-11.05 7.8-17.8 11.99-.24.16-1.22-.9-2.31-2.52-3.3-4.8-6.75-6.87-12.03-7.23-7.76-.53-12.76 3.53-12.72 10.32 0 1.99.29 3.17 1.1 4.8 1.7 3.53 4.88 5.64 14.83 9.95 18.33 7.88 26.17 13.08 31.05 20.48 5.44 8.25 6.66 21.41 2.96 31.2-4.06 10.65-14.14 17.88-28.32 20.28-4.39.77-14.8.65-19.5-.2-10.28-1.83-20.04-6.9-26.05-13.57-2.36-2.6-6.95-9.39-6.67-9.88.13-.16 1.18-.81 2.36-1.5 1.14-.65 5.45-3.13 9.5-5.49l7.36-4.26 1.55 2.27c2.15 3.3 6.87 7.8 9.71 9.3 8.17 4.32 19.38 3.7 24.9-1.25 2.37-2.16 3.34-4.4 3.34-7.68 0-2.97-.36-4.27-1.9-6.5-2-2.85-6.06-5.25-17.6-10.24-13.21-5.7-18.9-9.23-24.1-14.84-3-3.25-5.85-8.45-7.03-12.8-.97-3.61-1.22-12.67-.45-16.33 2.73-12.76 12.36-21.66 26.25-24.3 4.51-.85 15-.53 19.43.57z",fill:"#FFF"}),l.createElement("path",{fill:"rgba(0, 0, 0, 0)",d:"M0 0h256v256H0z"}))}),null)},U=function(e){return l.createElement(M.a,{id:I.container},l.createElement(R.a,{className:I.message},l.createElement("span",null,l.createElement(H.a,{as:"h2"},"Hi,")),l.createElement("p",null,"I'm Kristoffer Robin Canlas, a developer based in Quezon City, Philippines. I have almost 6 years of experience as a Web Developer. My passion is coding and learning new technologies.")),l.createElement(G.a,{className:I.segment},l.createElement(H.a,{as:"h1"},"Skills"),l.createElement("span",null,u.map((function(e){return l.createElement("span",{key:e.name},J[e.name])})))))},Q=function(e){return l.createElement(M.a,null,l.createElement(H.a,null,"WORK"),l.createElement("span",null,"A selection of my web development projects"))},K=a(32),W=function(e){return l.createElement(M.a,{id:K.container},l.createElement("span",{className:K.contact},l.createElement(H.a,{as:"h1"},"Contact Me"),l.createElement("p",null,"I'd love to hear from you! I'm currently available for freelance projects and interested in full-time positions."),l.createElement("p",null,"Here's how you can reach me:"),l.createElement("span",{className:K.details},l.createElement("span",null,l.createElement(d.a,{size:"huge",name:"mail outline"}),l.createElement("div",{className:K.text},"Email"),l.createElement("div",{className:K.text},"kristofferrobincanlas@gmail.com")),l.createElement("span",null,l.createElement(d.a,{size:"huge",name:"mobile alternate"}),l.createElement("div",{className:K.text},"Phone"),l.createElement("div",{className:K.text},"+63906-4636-752")))))},Y=a(68),$=a.n(Y),X=(F=function(e,t){return(F=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}F(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),Z=function(e){function t(t,a){var n=e.call(this,t,a)||this;return n.state={overlayNav:!1},n.toggleOverlay=n.toggleOverlay.bind(n),n}return X(t,e),t.prototype.toggleOverlay=function(){this.setState($()(this.state,{overlayNav:{$set:!this.state.overlayNav}}))},t.prototype.render=function(){return l.createElement(i.b,{history:m.a},l.createElement("span",{className:c.bg}),l.createElement(b,{overlayNav:this.state.overlayNav,toggleOverlay:this.toggleOverlay}),l.createElement("span",{className:c.content},l.createElement(p,{toggleOverLay:this.toggleOverlay}),l.createElement("span",{className:c.body},l.createElement(i.c,null,l.createElement(i.a,{exact:!0,path:"/",component:x}),l.createElement(i.a,{path:"/about",component:U}),l.createElement(i.a,{path:"/work",component:Q}),l.createElement(i.a,{path:"/photography",component:D}),l.createElement(i.a,{path:"/contact",component:W}))),l.createElement(g,null)))},t}(l.Component),q=a(156),ee=a(329),te=function(){return(te=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},ae=Object(ee.a)(((j={})[n.GET_PHOTOS_REQUEST]=function(e,t){return te(te({},e),{isLoading:!0})},j[n.GET_PHOTOS_SUCCESS]=function(e,t){return $()(e,{isLoading:{$set:!1},photos:{$set:t.payload}})},j[n.GET_PHOTOS_FAILED]=function(e,t){return te(te({},e),{isLoading:!1,error:t.payload})},j),{photos:[],isLoading:!0,error:""}),ne=(a(319),a(320),P=Object(T.a)(q.a),B=Object(T.c)({photography:ae}),Object(T.d)(B,A,P));r.render(l.createElement(C.a,{store:ne},l.createElement(Z,null)),document.getElementById("root"))},52:function(e,t,a){e.exports={overlay:"_1CdMz",open:"A9fJs",bg:"_1hT2t",xicon:"_2n5OM"}},53:function(e,t,a){e.exports={container:"qobCh",red:"_1dusO",intro:"_5pvf9",picture:"ABIYn",text:"L2Nc5"}},70:function(e,t,a){e.exports={body:"wSCck",bg:"_1s4h3",content:"L-pvs"}},71:function(e,t,a){e.exports={container:"_2YZJT",message:"_2fnJs",segment:"_1bIDH"}},92:function(e,t,a){e.exports={footer:"_1Qs6e",hosting:"_36JZ2"}},95:function(e,t,a){e.exports={"gallery-list":"_7KMUa"}}},[[321,1,2]]]);