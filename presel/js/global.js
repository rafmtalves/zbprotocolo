!function(e){var t,n,o,a,s,i,d,r=e("body"),l=r.find(".custom-header"),c=l.find(".site-branding"),h=r.find(".navigation-top"),u=h.find(".wrap"),m=h.find(".menu-item"),f=h.find(".menu-toggle"),g=r.find(".menu-scroll-down"),b=r.find("#secondary"),w=r.find(".entry-content"),v=r.find(".format-quote blockquote"),p=r.hasClass("twentyseventeen-front-page")||r.hasClass("home blog"),y="site-navigation-fixed",C=0;function T(){t=h.height(),n=h.outerHeight(),o=2*parseFloat(u.css("padding-top")),a=2*m.outerHeight(),s=t<=o+a}function k(){"none"===f.css("display")&&(s?(i=p&&(r.hasClass("has-header-image")||r.hasClass("has-header-video"))?l.innerHeight()-n:l.innerHeight(),e(window).scrollTop()>=i?h.addClass(y):h.removeClass(y)):h.removeClass(y))}function x(){"none"===f.css("display")?p?c.css("margin-bottom",n):l.css("margin-bottom",n):(l.css("margin-bottom","0"),c.css("margin-bottom","0"))}function q(t){var n,o;!r.hasClass("has-sidebar")||void 0===b||b.length<1||r.hasClass("search")||r.hasClass("single-attachment")||r.hasClass("error404")||r.hasClass("twentyseventeen-front-page")||(n=b.offset(),o=n.top+(b.height()+28),w.find(t).each((function(){var t=e(this);t.offset().top>o?t.addClass("below-entry-meta"):t.removeClass("below-entry-meta")})))}function E(){var e=document.createElement("div");try{return!(!("backgroundAttachment"in e.style)||/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream)&&(e.style.backgroundAttachment="fixed","fixed"===e.style.backgroundAttachment)}catch(e){return!1}}e("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]",".site-content-contain").filter(":visible").on("focus",(function(){if(h.hasClass("site-navigation-fixed")){var t=e(window).scrollTop(),n=h.height(),o=e(this).offset().top,a=o-t;e("#wpadminbar").length&&(a-=e("#wpadminbar").height()),a<n&&e(window).scrollTo(o-(n+50),0)}})),e(document).ready((function(){var t;h.length&&(T(),k()),g.length&&(e("body").hasClass("admin-bar")&&(C-=32),e("body").hasClass("blog")&&(C-=30),h.length||(n=0),g.on("click",(function(t){t.preventDefault(),e(window).scrollTo("#primary",{duration:600,offset:{top:C-n}})}))),x(),e(twentyseventeenScreenReaderText.quote).prependTo(v),q("blockquote.alignleft, blockquote.alignright"),!0==((t=document.createElement("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===("undefined"!=typeof SVGRect&&t.firstChild&&t.firstChild.namespaceURI))&&(document.documentElement.className=document.documentElement.className.replace(/(\s*)no-svg(\s*)/,"$1svg$2")),!0===E()&&(document.documentElement.className+=" background-fixed")})),h.length&&(e(window).on("scroll",(function(){k(),x()})),e(window).on("resize",(function(){T(),setTimeout(k,500)}))),e(window).on("resize",(function(){clearTimeout(d),d=setTimeout((function(){q("blockquote.alignleft, blockquote.alignright")}),300),setTimeout(x,1e3)})),e(document).on("wp-custom-header-video-loaded",(function(){r.addClass("has-header-video")}))}(jQuery);