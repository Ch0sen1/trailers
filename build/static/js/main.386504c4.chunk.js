(this["webpackJsonpnetflix-clone-diy"]=this["webpackJsonpnetflix-clone-diy"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},106:function(e,t,n){},126:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n.n(c),i=n(41),a=n.n(i),s=(n(77),n(78),n(0)),o=n.n(s),l=n(1),u=n(15),d=(n(80),"f81980ff410e46f422d64ddf3a56dddd"),j={fetchTrending:"/trending/all/week?api_key=".concat(d,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(d,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(d,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(d,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(d,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(d,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(d,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(d,"&with_genres=99")},b=n(63),h=n.n(b).a.create({baseURL:"https://api.themoviedb.org/3"}),f=n(8);var p=function(){var e,t,n=Object(c.useState)([]),r=Object(u.a)(n,2),i=r[0],a=r[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(j.fetchNetflixOriginals);case 2:return t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(f.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(f.jsxs)("div",{className:"banner__contents",children:[Object(f.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(f.jsxs)("div",{className:"banner__buttons",children:[Object(f.jsx)("button",{className:"banner__button",children:"Play"}),Object(f.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(f.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(f.jsx)("div",{className:"banner--fadeBottom"})]})},O=(n(100),n(18));n(101);var v=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(O.f)(),a=function(){window.scrollY>100?r(!0):r(!1)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}}),[]),Object(f.jsx)("div",{className:"nav ".concat(n&&"nav__black"),children:Object(f.jsxs)("div",{className:"nav__content",children:[Object(f.jsx)("img",{onClick:function(){return i.push("/")},className:"nav__logo",src:"https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo-700x394.png",alt:""}),Object(f.jsx)("img",{onClick:function(){return i.push("/profile")},className:"nav__avatar",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:""})]})})},m=(n(106),n(65)),g=n(66),x=n(69),_=n.n(x);var w=function(e){var t=e.title,n=e.fetchUrl,r=e.isLargeRow,i=Object(c.useState)([]),a=Object(u.a)(i,2),s=a[0],d=a[1],j=Object(c.useState)(""),b=Object(u.a)(j,2),p=b[0],O=b[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(n);case 2:t=e.sent,d(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)(m.a,{className:"row__posters",children:s.map((function(e){return Object(f.jsx)("img",{onClick:function(){return t=e.name||e.title||e.orginal_name,console.log(t),void(""!==p?O(""):_()(t).then((function(e){var t=new URLSearchParams(new URL(e).search);O(t.get("v"))})).catch((function(e){return console.log(e)})));var t},className:"row__poster ".concat(r&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),""!==p&&Object(f.jsx)(g.a,{videoId:p,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})};var N=function(){return Object(f.jsxs)("div",{className:"homeScreen",children:[Object(f.jsx)(v,{}),Object(f.jsx)(p,{}),Object(f.jsx)(w,{title:"NETFLIX ORIGINALS",fetchUrl:j.fetchNetflixOriginals,isLargeRow:!0}),Object(f.jsx)(w,{title:"Trending Now",fetchUrl:j.fetchTrending}),Object(f.jsx)(w,{title:"Top Rated",fetchUrl:j.fetchTopRated}),Object(f.jsx)(w,{title:"Action Movies",fetchUrl:j.fetchActionMovies}),Object(f.jsx)(w,{title:"Comedy Movies",fetchUrl:j.fetchComedyMovies}),Object(f.jsx)(w,{title:"Horror Movies",fetchUrl:j.fetchHorrorMovies}),Object(f.jsx)(w,{title:"Romance Movies",fetchUrl:j.fetchRomanceMovies}),Object(f.jsx)(w,{title:"Documentaries",fetchUrl:j.fetchDocumentaries})]})},k=n(71),y=(n(126),n(39)),S=n(53),I=(n(127),n(133),S.a.initializeApp({apiKey:"AIzaSyDg1p-t76IotvW20zwcDbojbZolgp6k3Yo",authDomain:"netflix-clone-diy-2e4a3.firebaseapp.com",projectId:"netflix-clone-diy-2e4a3",storageBucket:"netflix-clone-diy-2e4a3.appspot.com",messagingSenderId:"598919878098",appId:"1:598919878098:web:27a88a5fc7a4c93e51a40b",measurementId:"G-8TEBWSMRLB"}).firestore()),E=S.a.auth(),R=I;n(129);var M=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null);return Object(f.jsx)("div",{className:"signup-screen",children:Object(f.jsxs)("form",{children:[Object(f.jsx)("h1",{children:"Sign In"}),Object(f.jsx)("input",{ref:e,type:"email",placeholder:"Email"}),Object(f.jsx)("input",{ref:t,type:"password",placeholder:"Password"}),Object(f.jsx)("button",{onClick:function(n){n.preventDefault(),Object(y.c)(E,e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},children:"Sign In"}),Object(f.jsxs)("h4",{children:[Object(f.jsx)("span",{className:"signup-screen__grey",children:"New to Netflix? "}),Object(f.jsx)("span",{onClick:function(n){n.preventDefault(),Object(y.a)(E,e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},className:"signup-screen__link",children:"Sign Up now."})]})]})})};var U=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(f.jsxs)("div",{className:"login-screen",children:[Object(f.jsxs)("div",{className:"login-screen__background",children:[Object(f.jsx)("img",{className:"login-screen__logo",src:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(f.jsx)("button",{onClick:function(){return r(!0)},className:"login-screen__button",children:"Sign In"}),Object(f.jsx)("div",{className:"login-screen__gradient"})]}),Object(f.jsx)("div",{className:"login-screen__body",children:n?Object(f.jsx)(M,{}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Unlimited films, TV  programmes and more."}),Object(f.jsx)("h2",{children:"Watch anything. Cannel at any time."}),Object(f.jsx)("h3",{children:"Read to watch? Enter your email to create or restart your membership."}),Object(f.jsx)("div",{className:"login-screen__input",children:Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{type:"email",placeholder:"Email Address",name:"",id:""}),Object(f.jsx)("button",{onClick:function(){return r(!0)},className:"login-screen__getstarted",children:"get started"})]})})]})})]})},C=n(32),L=n(47),T=Object(L.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),A=T.actions,D=A.login,P=A.logout,B=function(e){return e.user.user},z=T.reducer,W=(n(130),n(131),n(70));var F=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(C.c)(B),a=Object(c.useState)(null),s=Object(u.a)(a,2),d=s[0],j=s[1];Object(c.useEffect)((function(){R.collection("customers").doc(i.uid).collection("subscriptions").get().then((function(e){e.forEach(function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j({role:t.data().role,current_period_end:t.data().current_period_end.seconds,current_period_start:t.data().current_period_start.seconds});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[i.uid]),Object(c.useEffect)((function(){R.collection("products").where("active","==",!0).get().then((function(e){var t={};e.forEach(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t[n.id]=n.data(),e.next=3,n.ref.collection("prices").get();case 3:e.sent.docs.forEach((function(e){t[n.id].prices={priceId:e.id,priceData:e.data()}}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r(t)}))}),[]);var b=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.collection("customers").doc(i.uid).collection("checkout_sessions").add({price:t,success_url:window.location.origin,cancel_url:window.location.origin});case 2:e.sent.onSnapshot(function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.data(),c=n.error,r=n.sessionId,c&&alert("An error occured: ".concat(c.message)),!r){e.next=7;break}return e.next=5,Object(W.a)("pk_test_51JppQuKkj70g0AsOjZFgkuWkeeyIlif0GJuX3FYtVz3XLTJ69vXnACnPrTgRKS9b82OREwMg2BA9NPhZZf5v3o2y00zIUizkFt");case 5:e.sent.redirectToCheckout({sessionId:r});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"plansScreen",children:[Object(f.jsx)("br",{}),d&&Object(f.jsxs)("p",{children:["Renewal date:"," ",new Date(1e3*(null===d||void 0===d?void 0:d.current_period_end)).toLocaleDateString()]}),Object.entries(n).map((function(e){var t,n=Object(u.a)(e,2),c=n[0],r=n[1],i=null===(t=r.name)||void 0===t?void 0:t.toLowerCase().includes(null===d||void 0===d?void 0:d.role);return Object(f.jsxs)("div",{className:"".concat(i&&"plansScreen__plan--disabled"," plansScreen__plan"),children:[Object(f.jsxs)("div",{className:"plansScreen__info",children:[Object(f.jsx)("h5",{children:r.name}),Object(f.jsx)("h6",{children:r.description})]}),Object(f.jsx)("button",{onClick:function(){return!i&&b(r.prices.priceId)},children:i?"Current Plan":"Subscribe"})]},c)}))]})};var J=function(e){var t=e.name,n=Object(C.c)(B);return Object(f.jsxs)("div",{className:"profile",children:[Object(f.jsx)(v,{}),Object(f.jsxs)("div",{className:"profile__body",children:[Object(f.jsx)("h1",{children:"Edit Profile"}),Object(f.jsxs)("div",{className:"profile__info",children:[Object(f.jsxs)("div",{className:"profile__img-container",children:[Object(f.jsx)("img",{src:"assets\\images\\netflix_avatar.png",alt:"User Profile",className:"profile__img"}),Object(f.jsx)("h3",{style:{color:"white",letterSpacing:".5px",fontWeight:"400",padding:"5px"},children:t})]}),Object(f.jsxs)("div",{className:"profile__details",children:[Object(f.jsx)("h2",{children:n.email}),Object(f.jsxs)("div",{className:"profile__plans",children:[Object(f.jsx)("h3",{children:"Plans"}),Object(f.jsx)(F,{})]}),Object(f.jsx)("button",{className:"profile__signOut",onClick:function(){return E.signOut()},children:"Sign Out"})]})]})]})]})};var X=function(){var e=Object(C.c)(B),t=Object(C.b)();return Object(c.useEffect)((function(){return Object(y.b)(E,(function(e){e?(console.log(e),t(D({uid:e.uid,email:e.email}))):t(P)}))}),[t]),Object(f.jsx)("div",{className:"app",children:Object(f.jsx)(k.a,{children:e?Object(f.jsxs)(O.c,{children:[Object(f.jsx)(O.a,{path:"/profile",children:Object(f.jsx)(J,{})}),Object(f.jsx)(O.a,{exact:!0,path:"/",children:Object(f.jsx)(N,{})})]}):Object(f.jsx)(U,{})})})},Z=Object(L.a)({reducer:{user:z}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(C.a,{store:Z,children:Object(f.jsx)(X,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){}},[[132,1,2]]]);
//# sourceMappingURL=main.386504c4.chunk.js.map