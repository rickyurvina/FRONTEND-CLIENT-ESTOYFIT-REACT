_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[68],{"/F2V":function(a,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gymBranch/customComponents/RelatedProducts",function(){return e("T0LH")}])},JX7q:function(a,t,e){"use strict";function n(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}e.d(t,"a",(function(){return n}))},T0LH:function(a,t,e){"use strict";e.r(t);var n=e("wx14"),c=e("1OyB"),s=e("vuIU"),r=e("JX7q"),i=e("Ji7U"),l=e("md7G"),o=e("foSv"),u=e("rePB"),d=e("q1tI"),f=e.n(d),p=e("YFqc"),m=e.n(p),h=e("a6RD"),v=e.n(h),N=f.a.createElement;function b(a){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var e,n=Object(o.a)(a);if(t){var c=Object(o.a)(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return Object(l.a)(this,e)}}var w=v()((function(){return e.e(7).then(e.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),y={loop:!0,nav:!1,dots:!0,autoplayHoverPause:!0,autoplay:!0,navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],responsive:{0:{items:1},576:{items:2},768:{items:2},1024:{items:3},1200:{items:4}}},O=function(a){Object(i.a)(e,a);var t=b(e);function e(){var a;Object(c.a)(this,e);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return a=t.call.apply(t,[this].concat(s)),Object(u.a)(Object(r.a)(a),"state",{display:!1,modalOpen:!1,modalData:null}),Object(u.a)(Object(r.a)(a),"openModal",(function(){a.setState({modalOpen:!0})})),Object(u.a)(Object(r.a)(a),"closeModal",(function(){a.setState({modalOpen:!1})})),Object(u.a)(Object(r.a)(a),"handleModalData",(function(t){a.setState({modalData:t})})),a}return Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({display:!0})}},{key:"render",value:function(){var a=this,t=this.props.products;this.state.modalOpen;return N(f.a.Fragment,null,N("div",{className:"related-products-area"},N("div",{className:"container"},N("div",{className:"section-title"},N("h2",null,N("span",{className:"dot"})," Related Products")),N("div",{className:"row"},this.state.display?N(w,Object(n.a)({className:"trending-products-slides-two owl-carousel owl-theme"},y),t.map((function(t,e){return N("div",{className:"col-lg-12 col-md-12",key:e},N("div",{className:"single-product-box"},N("div",{className:"product-image"},N(m.a,{href:"/product/[id]",as:"/product/".concat(t.id)},N("a",null,N("img",{src:t.image,alt:"image"}),N("img",{src:t.imageHover,alt:"image"}))),N("ul",null,N("li",null,N(m.a,{href:"#"},N("a",{"data-tip":"Quick View","data-place":"left",onClick:function(e){e.preventDefault(),a.openModal(),a.handleModalData(t)}},N("i",{className:"far fa-eye"})))),N("li",null,N(m.a,{href:"#"},N("a",{"data-tip":"Add to Wishlist","data-place":"left"},N("i",{className:"far fa-heart"})))),N("li",null,N(m.a,{href:"#"},N("a",{"data-tip":"Add to Compare","data-place":"left"},N("i",{className:"fas fa-sync"})))))),N("div",{className:"product-content"},N("h3",null,N(m.a,{href:"/product/[id]",as:"/product/".concat(t.id)},N("a",null,t.title))),N("div",{className:"product-price"},N("span",{className:"new-price"},"$",t.price)),N("div",{className:"rating"},N("i",{className:"fas fa-star"}),N("i",{className:"fas fa-star"}),N("i",{className:"fas fa-star"}),N("i",{className:"fas fa-star"}),N("i",{className:"far fa-star"})))))}))):""))))}}]),e}(d.Component);t.default=O},wx14:function(a,t,e){"use strict";function n(){return(n=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n])}return a}).apply(this,arguments)}e.d(t,"a",(function(){return n}))}},[["/F2V",0,1,2,4]]]);