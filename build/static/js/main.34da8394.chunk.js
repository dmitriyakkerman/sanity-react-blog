(this["webpackJsonpsanity-react-blog-boilerplate"]=this["webpackJsonpsanity-react-blog-boilerplate"]||[]).push([[0],{122:function(e,t,c){},123:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),i=c(38),l=c.n(i),r=c(9),j=c(3);function b(){return Object(s.jsxs)("div",{className:"rcb-navbar",children:[Object(s.jsx)(r.b,{to:"/",className:"rcb-navbar__brand",children:document.title}),Object(s.jsxs)("ul",{className:"rcb-navbar__links",children:[Object(s.jsx)("li",{className:"rcb-navbar__item",children:Object(s.jsx)(r.c,{to:"/about",className:"rcb-navbar__link",children:"About"})}),Object(s.jsx)("li",{className:"rcb-navbar__item",children:Object(s.jsx)(r.c,{to:"/posts",exact:!0,className:"rcb-navbar__link",children:"Blog"})})]})]})}function o(){return Object(s.jsx)("header",{className:"rcb-header",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(b,{})})})}function m(){return Object(s.jsx)("footer",{className:"rcb-footer",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("ul",{className:"socials",children:[Object(s.jsx)("li",{className:"socials__item",children:Object(s.jsx)("a",{href:"https://github.com/dmitriyakkerman",className:"socials__link",children:Object(s.jsx)("i",{})})}),Object(s.jsx)("li",{className:"socials__item",children:Object(s.jsx)("a",{href:"https://www.linkedin.com/in/dmitriy-akkerman/",className:"socials__link",children:Object(s.jsx)("i",{})})}),Object(s.jsx)("li",{className:"socials__item",children:Object(s.jsx)("a",{href:"https://t.me/mickyholbrook",className:"socials__link",children:Object(s.jsx)("i",{})})}),Object(s.jsx)("li",{className:"socials__item",children:Object(s.jsx)("a",{href:"https://www.instagram.com/michaelholbrook",className:"socials__link",children:Object(s.jsx)("i",{})})}),Object(s.jsx)("li",{className:"socials__item",children:Object(s.jsx)("a",{href:"mailto:dmitriyakkerman@gmail.com",className:"socials__link",children:Object(s.jsx)("i",{})})})]})})})}function d(){return Object(s.jsx)("div",{className:"rcb-home",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("h1",{className:"rcb-home__title",children:["Hey, my name is ",document.title,"!"]}),Object(s.jsxs)("p",{className:"rcb-home__text",children:["Welcome to my blog! ",Object(s.jsx)("br",{}),"You can find Git repository ",Object(s.jsx)("a",{href:"https://github.com/dmitriyakkerman/sanity-react-blog/",children:"here"})]})]})})}var h=c(8),u=c(40),O=c.n(u)()({projectId:"8cng7esn",dataset:"production",useCdn:!0}),x=c(20);function _(){return Object(s.jsxs)("div",{className:"rcb__posts-loader",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})}var p=c.n(x)()(O);function f(){var e,t=Object(a.useState)([]),c=Object(h.a)(t,2),n=c[0],i=c[1],l=Object(a.useState)(!0),r=Object(h.a)(l,2),j=r[0],b=r[1];return Object(a.useEffect)((function(){O.fetch('*[_type == "author"]{\n            name,\n            "bio": bio,\n            "authorImage": image.asset->url\n        }').then((function(e){setTimeout((function(){console.log(e),i(e),b(!1)}),1e3)}))}),[]),Object(s.jsx)("div",{className:"rcb-about",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h2",{className:"title",children:"About Me"}),j?Object(s.jsx)(_,{}):Object(s.jsxs)("div",{className:"rcb-info",children:[Object(s.jsx)("img",{src:(e=n[0].authorImage,p.image(e)).url(),className:"rcb-about__img",alt:n.name}),Object(s.jsx)("div",{className:"rcb-about__bio",children:n[0].bio.map((function(e){return Object(s.jsx)("div",{children:e.children[0].text})}))})]})]})})}var g=function(e){var t=e.post;return Object(s.jsxs)(r.b,{to:"/post/"+t.slug.current,className:"rcb-post",children:[Object(s.jsx)("img",{src:t.mainImage.asset.url,alt:t.mainImage.alt,className:"rcb-post__img"}),Object(s.jsx)("h3",{className:"rcb-post__title",children:t.title})]},t.slug.current)};var N=function(e){var t=e.posts,c=Object(a.useState)(!0),n=Object(h.a)(c,2),i=n[0],l=n[1];return Object(a.useEffect)((function(){setTimeout((function(){l(!1)}),1e3)}),[i]),i||!t.length?Object(s.jsx)(_,{}):Object(s.jsx)("div",{className:"rcb-items",children:t&&t.map((function(e,t){return Object(s.jsx)(g,{post:e},t)}))})};function v(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){O.fetch('*[_type == "post"]{\n            title,\n            slug,\n            publishedAt,\n            mainImage{\n                asset->{\n                    _id,\n                    url\n                },\n                alt\n            }\n        }').then((function(e){setTimeout((function(){n(e)}),1e3)}))}),[]),Object(s.jsx)("div",{className:"rcb-posts",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h2",{className:"title",children:"Blog"}),Object(s.jsx)(N,{posts:c})]})})}var k=c(41),y=c.n(k);function I(){var e=Object(a.useState)(null),t=Object(h.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(!0),l=Object(h.a)(i,2),r=l[0],b=l[1],o=Object(j.f)().slug;return Object(a.useEffect)((function(){O.fetch('*[slug.current == "'.concat(o,'"]{\n            title,\n            _id,\n            slug,\n            publishedAt,\n            mainImage{\n                asset->{\n                    _id,\n                    url\n                }\n            },\n            body,\n            "name": author->name,\n            "authorImage": author->image\n        }')).then((function(e){setTimeout((function(){n(e[0]),b(!1)}),1e3)})).catch(console.error)}),[o]),Object(s.jsx)("div",{className:"rcb-posts",children:Object(s.jsx)("div",{className:"container",children:r?Object(s.jsx)(_,{}):Object(s.jsxs)("div",{className:"single-post",children:[Object(s.jsx)("img",{src:c.mainImage.asset.url,alt:c.title,className:"single-post__img"}),Object(s.jsx)("h2",{className:"single-post__title",children:c.title}),Object(s.jsx)("div",{className:"single-post__date",children:new Date(c.publishedAt).toLocaleDateString()}),Object(s.jsx)("div",{className:"single-post__text",children:Object(s.jsx)(y.a,{blocks:c.body,projectId:"8cng7esn",dataset:"production"})})]})})})}var w=function(){return Object(s.jsx)("div",{className:"rcb",children:Object(s.jsxs)(r.a,{children:[Object(s.jsx)(o,{}),Object(s.jsx)("main",{children:Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{component:d,path:"/",exact:!0}),Object(s.jsx)(j.a,{component:f,path:"/about"}),Object(s.jsx)(j.a,{component:v,path:"/posts"}),Object(s.jsx)(j.a,{component:I,path:"/post/:slug"})]})}),Object(s.jsx)(m,{})]})})},S=(c(122),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,124)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))});l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root")),S()}},[[123,1,2]]]);
//# sourceMappingURL=main.34da8394.chunk.js.map