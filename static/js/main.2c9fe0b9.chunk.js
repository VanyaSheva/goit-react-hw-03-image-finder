(this["webpackJsonpmodule3.2"]=this["webpackJsonpmodule3.2"]||[]).push([[0],{11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__12jph",Modal:"Modal_Modal__3XJHw"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1WYJM",ImageGalleryItemimage:"ImageGalleryItem_ImageGalleryItemimage__H4ml7"}},13:function(e,t,a){e.exports={Container:"Button_Container__2R0QX",Button:"Button_Button__um0-J"}},25:function(e,t,a){e.exports={wrapper:"Loader_wrapper__2majF"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3JjnP"}},28:function(e,t,a){e.exports=a(73)},73:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),c=a.n(o),l=a(23),i=a.n(l),s=a(9),u=a(3),m=a(4),p=a(6),h=a(5),g=a(7),d=a.n(g),f=a(10),b=a(8),y=a.n(b),v=a(24),_=a.n(v),S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return n=e,_.a.get("https://pixabay.com/api/?key=15609194-ce2174c73742f49a4a6c8544d&q=".concat(n,"&image_type=photo&page=").concat(t,"&per_page=12")).then((function(e){return e.data.hits}))},O=a(25),E=a.n(O),I=(a(51),a(26)),j=a.n(I),C=function(){return c.a.createElement("div",{className:E.a.wrapper},c.a.createElement(j.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,style:{margin:"0 auto"}}))},k=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!1},e.onSubmit=function(){var t=Object(f.a)(d.a.mark((function t(a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState({isLoading:!0}),t.next=4,S(e.props.value).then((function(t){e.props.onSubmit(t)}));case 4:return t.next=6,e.setState({isLoading:!1});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:y.a.Searchbar},c.a.createElement("form",{className:y.a.SearchForm,onSubmit:this.onSubmit},c.a.createElement("button",{type:"submit",className:y.a.SearchFormButton},c.a.createElement("span",{className:y.a.SearchFormButtonLabel},"Search")),c.a.createElement("input",{className:y.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.props.onInputQueryChange,value:this.props.value}))),this.state.isLoading&&c.a.createElement(C,null))}}]),a}(o.Component),w=a(27),L=a.n(w),B=a(12),F=a.n(B),x=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.dataBig,n=e.webformatURL,r=e.onClick;return c.a.createElement("li",{className:F.a.ImageGalleryItem,id:t},c.a.createElement("img",{"data-big":a,src:n,alt:"query",className:F.a.ImageGalleryItemimage,onClick:r}))}}]),a}(o.Component),M=function(e){var t=e.imagesData,a=e.onOpenModal;return c.a.createElement("ul",{className:L.a.ImageGallery},t.map((function(e){return c.a.createElement(x,{key:e.id,webformatURL:e.webformatURL,dataBig:e.largeImageURL,onClick:function(){return a(e.largeImageURL)}})})))},N=a(11),G=a.n(N),q=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleEscPress=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscPress)}},{key:"render",value:function(){var e=this.props.source;return c.a.createElement("div",{className:G.a.Overlay,onClick:this.handleBackdropClick},c.a.createElement("div",{className:G.a.Modal},c.a.createElement("img",{src:e,alt:"bigImg",className:G.a.img})))}}]),a}(o.Component),R=a(13),J=a.n(R),U=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={page:2,isLoading:!1},e.onButtonClick=Object(f.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),e.setState((function(e){return{page:e.page+=1}})),t.next=4,S(e.props.query,e.state.page).then((function(t){e.props.onClick(t)}));case 4:return t.next=6,e.setState({isLoading:!1});case 6:window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 7:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:J.a.Container},this.state.isLoading?c.a.createElement(C,null):c.a.createElement("button",{className:J.a.Button,onClick:this.onButtonClick},"Load More"))}}]),a}(o.Component),D=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={images:[],error:null,query:"",isOpen:!1},e.onInputQueryChange=function(t){e.setState({query:t.target.value})},e.openModal=function(t){e.setState({isOpen:!0}),r=t},e.closeModal=function(){return e.setState({isOpen:!1})},e.onGetImages=function(t){e.setState({images:[]}),e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t))}}))},e.onLoadMore=function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t))}}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.isOpen,n=e.query;return c.a.createElement("div",null,c.a.createElement(k,{onSubmit:this.onGetImages,onInputQueryChange:this.onInputQueryChange,value:n}),t.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(M,{imagesData:t,onOpenModal:this.openModal}),c.a.createElement(U,{onClick:this.onLoadMore,query:n})),a&&c.a.createElement(q,{onClose:this.closeModal,source:r}))}}]),a}(o.Component);i.a.render(c.a.createElement(D,null),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1XCeZ",SearchForm:"Searchbar_SearchForm__24kcj",SearchFormButton:"Searchbar_SearchFormButton__2CRxq",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2w7ej",SearchFormInput:"Searchbar_SearchFormInput__3VfbY",wrapper:"Searchbar_wrapper__2XxNz"}}},[[28,1,2]]]);
//# sourceMappingURL=main.2c9fe0b9.chunk.js.map