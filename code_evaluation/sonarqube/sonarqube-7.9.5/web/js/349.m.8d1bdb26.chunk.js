(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{1256:function(e,t,n){var r=n(1257);"string"==typeof r&&(r=[[e.i,r,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(369)(r,l);r.locals&&(e.exports=r.locals)},1257:function(e,t,n){(e.exports=n(368)(!1)).push([e.i,".placeholder-bar{display:inline-block;vertical-align:middle;height:8px;background-color:currentColor}",""])},1714:function(e,t,n){"use strict";n.r(t);var r=n(365),l=n(371),a=n(377),c=n(930),o=n(379),s=n(401),i=n(504);n(1256);function m(e){let t=e.color,n=e.width,l=e.height;return r.createElement("span",{className:"placeholder-bar",style:{color:t,width:n,height:l}})}var d=n(0);var u=Object(a.connect)(e=>{const t=Object(o.getGlobalSettingValue)(e,"sonar.prismic.accessToken");return{accessToken:t&&t.value}})(class extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!1},this.fetchProductNews=()=>{const e=this.props,t=e.accessToken,n=e.tag;t&&(this.setState({loading:!0}),Object(c.c)().then(e=>{let r=e.ref;return Object(c.b)({accessToken:t,ref:r,tag:n})}).then(e=>{this.mounted&&this.setState({news:e[0],loading:!1})},()=>{this.mounted&&this.setState({loading:!1})}))}}componentDidMount(){this.mounted=!0,this.fetchProductNews()}componentWillUnmount(){this.mounted=!1}renderPlaceholder(){return r.createElement("a",{className:"rich-item new-loading"},r.createElement("div",{className:"flex-1"},r.createElement("div",{className:"display-inline-flex-center"},r.createElement("h4",null,Object(d.l)("embed_docs.latest_blog")),r.createElement("span",{className:"note spacer-left"},r.createElement(m,{color:"#aaa",width:60}))),r.createElement("p",{className:"little-spacer-bottom"},r.createElement(m,{color:"#aaa",width:84})," ",r.createElement(m,{color:"#aaa",width:48})," ",r.createElement(m,{color:"#aaa",width:24})," ",r.createElement(m,{color:"#aaa",width:72})," ",r.createElement(m,{color:"#aaa",width:24})," ",r.createElement(m,{color:"#aaa",width:48}))),r.createElement(i.a,{className:"flex-0"}))}render(){const e=this.state,t=e.loading,n=e.news;return t?this.renderPlaceholder():n?r.createElement("a",{className:"rich-item",href:"https://blog.sonarsource.com/"+n.uid,rel:"noopener noreferrer",target:"_blank"},r.createElement("div",{className:"flex-1"},r.createElement("div",{className:"display-inline-flex-center"},r.createElement("h4",null,Object(d.l)("embed_docs.latest_blog")),r.createElement(s.a,{date:n.last_publication_date},e=>r.createElement("span",{className:"note spacer-left"},e))),r.createElement("p",{className:"little-spacer-bottom"},n.data.title)),r.createElement(i.a,{className:"flex-0"})):null}}),h=n(411),b=n(372),p=n(14),g=n(388);n.d(t,"default",function(){return E});class E extends r.PureComponent{constructor(){super(...arguments),this.renderSuggestions=e=>{let t=e.suggestions;return 0===t.length?null:r.createElement(r.Fragment,null,this.renderTitle(Object(d.l)("embed_docs.suggestion")),t.map((e,t)=>r.createElement("li",{key:t},r.createElement(l.Link,{onClick:this.props.onClose,target:"_blank",to:e.link},e.text))),r.createElement("li",{className:"divider"}))}}renderTitle(e){return r.createElement("li",{className:"menu-header"},e)}renderIconLink(e,t,n){return r.createElement("a",{href:e,rel:"noopener noreferrer",target:"_blank"},r.createElement("img",{alt:n,className:"spacer-right",height:"18",src:"".concat(Object(b.b)(),"/images/").concat(t),width:"18"}),n)}renderSonarCloudLinks(){return r.createElement(r.Fragment,null,r.createElement("li",{className:"divider"}),r.createElement("li",null,r.createElement("a",{href:"https://community.sonarsource.com/c/help/sc",rel:"noopener noreferrer",target:"_blank"},Object(d.l)("embed_docs.get_help"))),r.createElement("li",{className:"divider"}),this.renderTitle(Object(d.l)("embed_docs.stay_connected")),r.createElement("li",null,this.renderIconLink("https://twitter.com/sonarcloud","embed-doc/twitter-icon.svg","Twitter")),r.createElement("li",null,this.renderIconLink("https://blog.sonarsource.com/product/SonarCloud","sonarcloud-square-logo.svg",Object(d.l)("embed_docs.blog"))),r.createElement("li",null,r.createElement(u,{tag:"SonarCloud"})))}renderSonarQubeLinks(){return r.createElement(r.Fragment,null,r.createElement("li",{className:"divider"}),r.createElement("li",null,r.createElement("a",{href:"https://community.sonarsource.com/",rel:"noopener noreferrer",target:"_blank"},Object(d.l)("embed_docs.get_help"))),r.createElement("li",{className:"divider"}),this.renderTitle(Object(d.l)("embed_docs.stay_connected")),r.createElement("li",null,this.renderIconLink("https://www.sonarsource.com/resources/product-news/","embed-doc/sq-icon.svg",Object(d.l)("embed_docs.news"))),r.createElement("li",null,this.renderIconLink("https://twitter.com/SonarQube","embed-doc/twitter-icon.svg","Twitter")))}render(){return r.createElement(g.a,null,r.createElement("ul",{className:"menu abs-width-240"},r.createElement(h.a.Consumer,null,this.renderSuggestions),r.createElement("li",null,r.createElement(l.Link,{onClick:this.props.onClose,target:"_blank",to:"/documentation"},Object(d.l)("embed_docs.documentation"))),r.createElement("li",null,r.createElement(l.Link,{onClick:this.props.onClose,to:"/web_api"},Object(d.l)("api_documentation.page"))),Object(p.isSonarCloud)()?this.renderSonarCloudLinks():this.renderSonarQubeLinks()))}}},401:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return s});var r=n(365),l=n(359),a=n(13);const c={year:"numeric",month:"short",day:"2-digit"},o={year:"numeric",month:"long",day:"numeric"};function s(e){let t=e.children,n=e.date,s=e.long;return r.createElement(l.FormattedDate,Object.assign({value:Object(a.g)(n)},s?o:c),t)}}}]);
//# sourceMappingURL=349.m.8d1bdb26.chunk.js.map