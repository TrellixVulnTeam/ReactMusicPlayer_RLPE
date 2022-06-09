(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var c=a(4),n=a.n(c),r=a(48),i=a.n(r),s=a(8),o=a.n(s),l=a(13),u=a(3),p=a(15),d=a(14),b=a(12),h=a(0),j=function(e){var t=e.currentSong,a=e.isPlaying,c=e.setIsPlaying,n=e.audioRef,r=e.setSongInfo,i=e.songInfo,s=e.songs,p=e.setCurrentSong,j=e.setSongs,m=function(e){var t=s.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{active:!0}):Object(u.a)(Object(u.a)({},t),{},{active:!1})}));j(t)},g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},f=function(){var e=Object(l.a)(o.a.mark((function e(c){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.findIndex((function(e){return e.id===t.id})),"skip-forward"!==c){e.next=7;break}return e.next=4,p(s[(r+1)%s.length]);case 4:m(s[(r+1)%s.length]),e.next=16;break;case 7:if((r-1)%s.length!==-1){e.next=13;break}return e.next=10,p(s[s.length-1]);case 10:m(s[s.length-1]),e.next=16;break;case 13:return e.next=15,p(s[(r-1)%s.length]);case 15:m(s[(r-1)%s.length]);case 16:a&&n.current.play();case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(i.animationPercentage,"%)")};return Object(h.jsxs)("div",{className:"player",children:[Object(h.jsxs)("div",{className:"time-control",children:[Object(h.jsx)("p",{children:g(i.currentTime)}),Object(h.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],", ").concat(t.color[1],")")},className:"track",children:[Object(h.jsx)("input",{min:0,max:i.duration||0,value:i.currentTime,onChange:function(e){n.current.currentTime=e.target.value,r(Object(u.a)(Object(u.a)({},i),{},{currentTime:e.target.value}))},type:"range"}),Object(h.jsx)("div",{style:v,className:"animate-track"})]}),Object(h.jsx)("p",{children:i.duration?g(i.duration):"0:00"})]}),Object(h.jsxs)("div",{className:"play-control",children:[Object(h.jsx)(d.a,{onClick:function(){return f("skip-back")},className:"skip-back",size:"2x",icon:b.a}),Object(h.jsx)(d.a,{onClick:function(){a?(n.current.pause(),c(!a)):(n.current.play(),c(!a))},className:"play",size:"2x",icon:a?b.d:b.e}),Object(h.jsx)(d.a,{onClick:function(){return f("skip-forward")},className:"skip-forward",size:"2x",icon:b.b})]})]})},m=function(e){var t=e.currentSong;return Object(h.jsxs)("div",{className:"song-container",children:[Object(h.jsx)("img",{alt:t.name,src:t.cover}),Object(h.jsx)("h2",{children:t.name}),Object(h.jsx)("h3",{children:t.artist})]})},g=(a(60),function(e){var t=e.song,a=e.songs,c=e.setCurrentSong,n=e.id,r=e.audioRef,i=e.isPlaying,s=e.setSongs,p=function(){var e=Object(l.a)(o.a.mark((function e(){var l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:l=a.map((function(e){return e.id===n?Object(u.a)(Object(u.a)({},e),{},{active:!0}):Object(u.a)(Object(u.a)({},e),{},{active:!1})})),s(l),i&&r.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{onClick:p,className:"library-song ".concat(t.active?"selected":""),children:[Object(h.jsx)("img",{alt:t.name,src:t.cover}),Object(h.jsxs)("div",{className:"song-description",children:[Object(h.jsx)("h3",{children:t.name}),Object(h.jsx)("h4",{children:t.artist})]})]})}),f=function(e){var t=e.songs,a=e.setCurrentSong,c=e.audioRef,n=e.isPlaying,r=e.setSongs,i=e.libraryStatus;return Object(h.jsxs)("div",{className:"library ".concat(i?"active-library":""),children:[Object(h.jsx)("h2",{children:"Library"}),Object(h.jsx)("div",{className:"library-songs"}),t.map((function(e){return Object(h.jsx)(g,{songs:t,setCurrentSong:a,song:e,id:e.id,audioRef:c,isPlaying:n,setSongs:r},e.id)}))]})},v=function(e){var t=e.setLibraryStatus,a=e.libraryStatus;return Object(h.jsxs)("nav",{children:[Object(h.jsx)("h1",{children:"Tunes"}),Object(h.jsxs)("button",{onClick:function(){return t(!a)},children:["Library",Object(h.jsx)(d.a,{icon:b.c})]})]})},O=(a(119),a(122));var x=function(){return[{name:"Higher",cover:"https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",artist:"Misha, Jussi Halme",audio:"https://mp3.chillhop.com/serve.php/?mp3=15088",color:["#FBA29A","#ED7F77"],id:Object(O.a)(),active:!0},{name:"Travelbag",cover:"https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-300x300.jpg",artist:"mommy, Sleepy Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=19058",color:["#FFFEFA","#588ECE"],id:Object(O.a)(),active:!1},{name:"Nebulae",cover:"https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-300x300.jpg",artist:"cocabona",audio:"https://mp3.chillhop.com/serve.php/?mp3=16071",color:["#FE8271","#3FBBA3"],id:Object(O.a)(),active:!1},{name:"Lonely Waves",cover:"https://chillhop.com/wp-content/uploads/2021/02/80be32197ca7971424bef5e4d0c6810e1d4334c6-300x300.jpg",artist:"C Y G N",audio:"https://mp3.chillhop.com/serve.php/?mp3=14981",color:["#E088DE","#0B102D"],id:Object(O.a)(),active:!1},{name:"Ah Yeah",cover:"https://chillhop.com/wp-content/uploads/2020/10/644dedb802e85f3eb700b8b091e729504b680a9c-300x300.jpg",artist:"Psalm Trees, James Berkeley",audio:"https://mp3.chillhop.com/serve.php/?mp3=10548",color:["#F8EED7","#F5D85F"],id:Object(O.a)(),active:!1},{name:"Point in Space and Time",cover:"https://chillhop.com/wp-content/uploads/2021/01/453b13ae3c0e2eec280fcc6357800b825239806e-300x300.jpg",artist:"Flawed Mangoes",audio:"https://mp3.chillhop.com/serve.php/?mp3=12166",color:["#FFEDBF","#2B9E99"],id:Object(O.a)(),active:!1},{name:"Blue View",cover:"https://chillhop.com/wp-content/uploads/2021/03/e2cf41018e0c244f7f683dd6f6313551996a2952-300x300.jpg",artist:"Leavv",audio:"https://mp3.chillhop.com/serve.php/?mp3=16216",color:["#FDE2B2","#D54B49"],id:Object(O.a)(),active:!1},{name:"Now",cover:"https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",artist:"Misha, Jussi Halme",audio:"https://mp3.chillhop.com/serve.php/?mp3=15080",color:["#A99DAF","#313558"],id:Object(O.a)(),active:!1},{name:"Barrows",cover:"https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-300x300.jpg",artist:"Aarigod",audio:"https://mp3.chillhop.com/serve.php/?mp3=13003",color:["#9FC075","#617D40"],id:Object(O.a)(),active:!1}]};var y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(x()),a=Object(p.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(n[0]),s=Object(p.a)(i,2),d=s[0],b=s[1],g=Object(c.useState)(!1),O=Object(p.a)(g,2),y=O[0],S=O[1],k=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(p.a)(k,2),F=w[0],C=w[1],N=Object(c.useState)(!1),P=Object(p.a)(N,2),E=P[0],T=P[1],B=function(e){var t=e.target.currentTime,a=e.target.duration,c=Math.round(t),n=Math.round(a),r=Math.round(c/n*100);C(Object(u.a)(Object(u.a)({},F),{},{currentTime:t,duration:a,animationPercentage:r}))},D=function(e){var t=n.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{active:!0}):Object(u.a)(Object(u.a)({},t),{},{active:!1})}));r(t)},I=function(){var t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.findIndex((function(e){return e.id===d.id})),t.next=3,b(n[(a+1)%n.length]);case 3:D(n[(a+1)%n.length]),y&&e.current.play();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App ".concat(E?"library-active":""),children:[Object(h.jsx)(v,{libraryStatus:E,setLibraryStatus:T}),Object(h.jsx)(m,{currentSong:d}),Object(h.jsx)(j,{setIsPlaying:S,isPlaying:y,currentSong:d,audioRef:e,setSongInfo:C,songInfo:F,songs:n,setCurrentSong:b,setSongs:r}),Object(h.jsx)(f,{songs:n,setCurrentSong:b,audioRef:e,isPlaying:y,setSongs:r,libraryStatus:E}),Object(h.jsx)("audio",{onTimeUpdate:B,onLoadedMetadata:B,ref:e,src:d.audio,onEnded:I})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,123)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),S()}},[[120,1,2]]]);
//# sourceMappingURL=main.b192c15b.chunk.js.map