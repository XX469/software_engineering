(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{1264:function(e,t,a){var l=a(1265);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(369)(l,n);l.locals&&(e.exports=l.locals)},1265:function(e,t,a){(e.exports=a(368)(!1)).push([e.i,".about-page{font-size:14px}.about-page .boxed-group{border:none}.about-page .boxed-group h2{padding-left:0;padding-right:0;font-size:18px}.about-page .boxed-group>h2{padding-top:25px}.about-page .boxed-group h3{font-weight:400;font-size:16px;padding-bottom:12px}.about-page .boxed-group-inner{padding-left:0;padding-right:0;padding-bottom:25px}.about-page-entry{display:flex;justify-content:space-between;align-items:center;margin-bottom:45px;padding:65px 0;border-bottom:1px solid #e6e6e6}.about-page-intro{padding-right:65px;border-right:1px solid #e6e6e6}.about-page-intro>h1{line-height:40px;font-size:26px;font-weight:300}.about-page-intro>.button{height:32px;line-height:30px;padding-left:15px;padding-right:15px;border-radius:3px;font-size:13px;font-weight:400}.about-page-instance{display:flex;align-items:center}.about-page-projects{margin-left:65px;line-height:1.4;font-size:16px;text-align:center;min-width:128px}.about-page-projects-link{display:inline-block;line-height:1;margin-bottom:12px;font-size:32px}.about-page-issue-types{text-align:left}.about-page-issue-types tr+tr td{padding-top:12px}.about-page-issue-types svg{vertical-align:middle;transform:translateY(-1px)}.about-page-issue-type-number{padding-right:16px;text-align:right}.about-page-issue-type-link{font-size:16px;font-weight:700}.about-page-section{padding-top:20px;padding-bottom:10px}.about-page-text{line-height:1.4}.about-page-link-more{border:none}.about-page-link-more>span{border-bottom:1px solid #cae3f2}.about-page-languages{display:flex;justify-content:space-between;margin-top:10px}.about-page-languages>li{line-height:2}.about-quality-model .flex-column+.flex-column{margin-left:30px;padding-left:30px;border-left:1px solid #e6e6e6}.about-quality-model svg{transform:translateY(2px)}.about-page-analyzers{display:flex;justify-content:space-between;margin-top:15px}.about-page-analyzer-box{border:none}.about-page-group-boxes{display:flex;flex-direction:column}.about-page-group-boxes>.boxed-group{flex-grow:1}",""])},1685:function(e,t,a){"use strict";a.r(t);var l=a(473),n=a.n(l),r=a(365),s=a(377),c=a(371),o=a(376),i=a(0);function u(e){let t=e.count,a=e.loading;return r.createElement("div",{className:"about-page-projects"},a?r.createElement("i",{className:"spinner"}):r.createElement("div",null,r.createElement("div",null,r.createElement(c.Link,{className:"about-page-projects-link",to:"/projects"},Object(o.formatMeasure)(t,"INT"))),r.createElement("div",null,Object(i.l)("about_page.projects_analyzed"))))}const m=[{name:"Java",url:"https://redirect.sonarsource.com/plugins/java.html"},{name:"C/C++",url:"https://redirect.sonarsource.com/plugins/cpp.html"},{name:"C#",url:"https://redirect.sonarsource.com/plugins/csharp.html"},{name:"COBOL",url:"https://redirect.sonarsource.com/plugins/cobol.html"},{name:"ABAP",url:"https://redirect.sonarsource.com/plugins/abap.html"},{name:"HTML",url:"https://redirect.sonarsource.com/plugins/web.html"},{name:"RPG",url:"https://redirect.sonarsource.com/plugins/rpg.html"},{name:"JavaScript",url:"https://redirect.sonarsource.com/plugins/javascript.html"},{name:"TypeScript",url:"https://redirect.sonarsource.com/plugins/typescript.html"},{name:"Objective C",url:"https://redirect.sonarsource.com/plugins/objectivec.html"},{name:"XML",url:"https://redirect.sonarsource.com/plugins/xml.html"},{name:"VB.NET",url:"https://redirect.sonarsource.com/plugins/vbnet.html"},{name:"PL/SQL",url:"https://redirect.sonarsource.com/plugins/plsql.html"},{name:"T-SQL",url:"https://redirect.sonarsource.com/plugins/tsql.html"},{name:"Flex",url:"https://redirect.sonarsource.com/plugins/flex.html"},{name:"Python",url:"https://redirect.sonarsource.com/plugins/python.html"},{name:"Groovy",url:"https://redirect.sonarsource.com/plugins/groovy.html"},{name:"PHP",url:"https://redirect.sonarsource.com/plugins/php.html"},{name:"Swift",url:"https://redirect.sonarsource.com/plugins/swift.html"},{name:"Visual Basic",url:"https://redirect.sonarsource.com/plugins/vb.html"},{name:"PL/I",url:"https://redirect.sonarsource.com/plugins/pli.html"}],p=(m.length+1)/2;function d(){return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(i.l)("about_page.languages")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("p",{className:"about-page-text"},Object(i.l)("about_page.languages.text")),r.createElement("ul",{className:"about-page-languages"},m.slice(0,p).map((e,t)=>r.createElement("li",{key:t},r.createElement("a",{href:e.url},e.name),r.createElement("br",null),t+p<m.length&&r.createElement("a",{href:m[t+p].url},m[t+p].name))))))}function g(e){let t=e.link;return r.createElement("div",{className:"big-spacer-top"},r.createElement("a",{className:"about-page-link-more",href:t,rel:"noopener noreferrer",target:"_blank"},r.createElement("span",null,Object(i.l)("about_page.read_more"))))}const b="https://redirect.sonarsource.com/doc/issues.html";function h(){return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(i.l)("about_page.clean_code")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("p",{className:"about-page-text"},Object(i.l)("about_page.clean_code.text")),r.createElement(g,{link:b})))}var E=a(435),f=a(430),v=a(436),x=a(456);function y(){return r.createElement("div",{className:"boxed-group about-quality-model"},r.createElement("h2",null,Object(i.l)("about_page.quality_model")),r.createElement("div",{className:"boxed-group-inner clearfix"},r.createElement("div",{className:"flex-columns"},r.createElement("div",{className:"flex-column flex-column-third"},r.createElement("h3",null,Object(i.l)("metric_domain.Reliability")),r.createElement("div",{className:"pull-left little-spacer-right"},r.createElement(E.a,null)),r.createElement("p",{className:"about-page-text overflow-hidden"},r.createElement("strong",null,Object(i.l)("issue.type.BUG.plural"))," ",Object(i.l)("about_page.quality_model.bugs"))),r.createElement("div",{className:"flex-column flex-column-third"},r.createElement("h3",null,Object(i.l)("metric_domain.Security")),r.createElement("div",{className:"pull-left little-spacer-right"},r.createElement(f.a,null)),r.createElement("p",{className:"about-page-text overflow-hidden"},r.createElement("strong",null,Object(i.l)("issue.type.VULNERABILITY.plural"))," ",Object(i.l)("about_page.quality_model.vulnerabilities")),r.createElement("br",null),r.createElement("div",{className:"pull-left little-spacer-right"},r.createElement(x.a,null)),r.createElement("p",{className:"about-page-text overflow-hidden"},r.createElement("strong",null,Object(i.l)("issue.type.SECURITY_HOTSPOT.plural"))," ",Object(i.l)("about_page.quality_model.security_hotspots"))),r.createElement("div",{className:"flex-column flex-column-third"},r.createElement("h3",null,Object(i.l)("metric_domain.Maintainability")),r.createElement("div",{className:"pull-left little-spacer-right"},r.createElement(v.a,null)),r.createElement("p",{className:"about-page-text overflow-hidden"},r.createElement("strong",null,Object(i.l)("issue.type.CODE_SMELL.plural"))," ",Object(i.l)("about_page.quality_model.code_smells"))))))}const N="https://redirect.sonarsource.com/doc/quality-gates.html";function O(){return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(i.l)("about_page.quality_gates")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("p",{className:"about-page-text"},Object(i.l)("about_page.quality_gates.text")),r.createElement(g,{link:N})))}const j="https://redirect.sonarsource.com/doc/fix-the-leak.html";function k(){return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(i.l)("about_page.fix_the_leak")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("p",{className:"about-page-text"},Object(i.l)("about_page.fix_the_leak_on_new_code.text")),r.createElement(g,{link:j})))}var _=a(468),L=a(372);const T="https://redirect.sonarsource.com/doc/rules.html",S="owasp-a1,owasp-a2,owasp-a3,owasp-a4,owasp-a5,owasp-a6,owasp-a7,owasp-a8,owasp-a9,owasp-a10",w="sans-top25-porous,sans-top25-risky,sans-top25-insecure";function C(e){let t=e.appState;const a=t.organizationsEnabled?t.defaultOrganization:void 0;return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(i.l)("about_page.standards")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("p",{className:"about-page-text"},Object(i.l)("about_page.standards.text")),r.createElement("div",{className:"spacer-top"},r.createElement("ul",{className:"list-inline"},r.createElement("li",null,r.createElement(c.Link,{className:"link-with-icon",to:Object(L.C)({tags:"misra"},a)},r.createElement(_.a,null),r.createElement("span",{className:"little-spacer-left"},"MISRA"))),r.createElement("li",null,r.createElement(c.Link,{className:"link-with-icon",to:Object(L.C)({tags:"cert"},a)},r.createElement(_.a,null),r.createElement("span",{className:"little-spacer-left"},"CERT"))),r.createElement("li",null,r.createElement(c.Link,{className:"link-with-icon",to:Object(L.C)({tags:"cwe"},a)},r.createElement(_.a,null),r.createElement("span",{className:"little-spacer-left"},"CWE"))),r.createElement("li",null,r.createElement(c.Link,{className:"link-with-icon",to:Object(L.C)({tags:S},a)},r.createElement(_.a,null),r.createElement("span",{className:"little-spacer-left"},"OWASP Top 10"))),r.createElement("li",null,r.createElement(c.Link,{className:"link-with-icon",to:Object(L.C)({tags:w},a)},r.createElement(_.a,null),r.createElement("span",{className:"little-spacer-left"},"SANS Top 25"))))),r.createElement(g,{link:T})))}const z=[{key:"sonarqube",link:"https://redirect.sonarsource.com/doc/install-configure-scanner.html"},{key:"msbuild",link:"https://redirect.sonarsource.com/doc/install-configure-scanner-msbuild.html"},{key:"maven",link:"https://redirect.sonarsource.com/doc/install-configure-scanner-maven.html"},{key:"gradle",link:"https://redirect.sonarsource.com/doc/gradle.html"},{key:"jenkins",link:"https://redirect.sonarsource.com/plugins/jenkins.html"},{key:"ant",link:"https://redirect.sonarsource.com/doc/install-configure-scanner-ant.html"}];function A(){return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(i.l)("about_page.scanners")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("p",{className:"about-page-text"},Object(i.l)("about_page.scanners.text")),r.createElement("div",{className:"about-page-analyzers"},z.map(e=>r.createElement("a",{className:"about-page-analyzer-box",href:e.link,key:e.key},r.createElement("img",{alt:Object(i.l)("about_page.scanners",e.key),height:60,src:"".concat(Object(L.b)(),"/images/scanner-logos/").concat(e.key,".svg")}))))))}function I(e){let t=e.bugs,a=e.codeSmells,l=e.loading,n=e.securityHotspots,s=e.vulnerabilities;return r.createElement("div",{className:"about-page-projects"},l?r.createElement("i",{className:"spinner"}):r.createElement("table",{className:"about-page-issue-types"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",{className:"about-page-issue-type-number"},r.createElement(c.Link,{className:"about-page-issue-type-link",to:Object(L.m)({resolved:"false",types:"BUG",s:"CREATION_DATE"})},Object(o.formatMeasure)(t,"SHORT_INT"))),r.createElement("td",null,r.createElement("span",{className:"little-spacer-right"},r.createElement(E.a,null)),Object(i.l)("issue.type.BUG.plural"))),r.createElement("tr",null,r.createElement("td",{className:"about-page-issue-type-number"},r.createElement(c.Link,{className:"about-page-issue-type-link",to:Object(L.m)({resolved:"false",types:"VULNERABILITY",s:"CREATION_DATE"})},Object(o.formatMeasure)(s,"SHORT_INT"))),r.createElement("td",null,r.createElement("span",{className:"little-spacer-right"},r.createElement(f.a,null)),Object(i.l)("issue.type.VULNERABILITY.plural"))),r.createElement("tr",null,r.createElement("td",{className:"about-page-issue-type-number"},r.createElement(c.Link,{className:"about-page-issue-type-link",to:Object(L.m)({resolved:"false",types:"CODE_SMELL",s:"CREATION_DATE"})},Object(o.formatMeasure)(a,"SHORT_INT"))),r.createElement("td",null,r.createElement("span",{className:"little-spacer-right"},r.createElement(v.a,null)),Object(i.l)("issue.type.CODE_SMELL.plural"))),r.createElement("tr",null,r.createElement("td",{className:"about-page-issue-type-number"},r.createElement(c.Link,{className:"about-page-issue-type-link",to:Object(L.m)({resolved:"false",types:"SECURITY_HOTSPOT",s:"CREATION_DATE"})},Object(o.formatMeasure)(n,"SHORT_INT"))),r.createElement("td",null,r.createElement("span",{className:"little-spacer-right"},r.createElement(x.a,null)),Object(i.l)("issue.type.SECURITY_HOTSPOT.plural"))))))}var M=a(403),R=a(602),H=a(409),P=a(418),U=a(545),q=a(715);var B=a(379),D=a(404);a(1264);function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],l=!0,n=!1,r=void 0;try{for(var s,c=e[Symbol.iterator]();!(l=(s=c.next()).done)&&(a.push(s.value),!t||a.length!==t);l=!0);}catch(e){n=!0,r=e}finally{try{l||null==c.return||c.return()}finally{if(n)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"AboutApp",function(){return V});class V extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0,projectsCount:0}}componentDidMount(){this.mounted=!0,this.loadData(),Object(D.b)()}componentWillUnmount(){this.mounted=!1,Object(D.d)()}loadProjects(){return Object(H.w)({ps:1}).then(e=>e.paging.total)}loadIssues(){return Object(P.e)({resolved:!1},"types")}loadCustomText(){return this.props.fetchAboutPageSettings()}loadData(){Promise.all([this.loadProjects(),this.loadIssues(),this.loadCustomText()]).then(e=>{if(this.mounted){const t=Y(e,2),a=t[0],l=t[1],r=n()(l.facet,"val");this.setState({projectsCount:a,issueTypes:r,loading:!1})}},()=>{this.mounted&&this.setState({loading:!1})})}render(){const e=this.props.customText,t=this.state,a=t.loading,l=t.issueTypes,n=t.projectsCount;let s,o,m,p;return!a&&l&&(s=l.BUG&&l.BUG.count,o=l.VULNERABILITY&&l.VULNERABILITY.count,m=l.CODE_SMELL&&l.CODE_SMELL.count,p=l.SECURITY_HOTSPOT&&l.SECURITY_HOTSPOT.count),r.createElement(R.a,{location:this.props.location},r.createElement("div",{className:"page page-limited about-page",id:"about-page"},r.createElement(M.a,{anchor:"about_main"}),r.createElement("div",{className:"about-page-entry"},r.createElement("div",{className:"about-page-intro"},r.createElement("h1",{className:"big-spacer-bottom"},Object(i.l)("layout.sonar.slogan")),!this.props.currentUser.isLoggedIn&&r.createElement(c.Link,{className:"button button-active big-spacer-right",to:"/sessions/new"},Object(i.l)("layout.login")),r.createElement("a",{className:"button",href:"https://redirect.sonarsource.com/doc/home.html",rel:"noopener noreferrer",target:"_blank"},Object(i.l)("about_page.read_documentation"))),r.createElement("div",{className:"about-page-instance"},r.createElement(u,{count:n,loading:a}),r.createElement(I,{bugs:s,codeSmells:m,loading:a,securityHotspots:p,vulnerabilities:o}))),e&&r.createElement("div",{className:"about-page-section",dangerouslySetInnerHTML:{__html:e}}),r.createElement(d,null),r.createElement(y,null),r.createElement("div",{className:"flex-columns"},r.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},r.createElement(h,null)),r.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},r.createElement(k,null))),r.createElement("div",{className:"flex-columns"},r.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},r.createElement(O,null)),r.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},r.createElement(C,{appState:this.props.appState}))),r.createElement(A,null)))}}const G={fetchAboutPageSettings:function(){return e=>Object(U.e)({keys:["sonar.lf.aboutText"].join()}).then(t=>{e(Object(q.c)(t))})}};t.default=Object(s.connect)(e=>{const t=Object(B.getGlobalSettingValue)(e,"sonar.lf.aboutText");return{appState:Object(B.getAppState)(e),currentUser:Object(B.getCurrentUser)(e),customText:t&&t.value}},G)(V)},403:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var l=a(365),n=a(444),r=a(0);function s(e){return l.createElement(n.a.Consumer,null,t=>{let a=t.addA11ySkipLink,n=t.removeA11ySkipLink;return l.createElement(c,Object.assign({addA11ySkipLink:a,removeA11ySkipLink:n},e))})}class c extends l.PureComponent{constructor(){super(...arguments),this.getLink=()=>{const e=this.props,t=e.anchor,a=e.label;return{key:t,label:void 0===a?Object(r.l)("skip_to_content"):a,weight:e.weight}}}componentDidMount(){this.props.addA11ySkipLink(this.getLink())}componentWillUnmount(){this.props.removeA11ySkipLink(this.getLink())}render(){const e=this.props.anchor;return l.createElement("span",{id:"a11y_target__".concat(e)})}}},404:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return s}),a.d(t,"c",function(){return c}),a.d(t,"d",function(){return o});const l="sidebar-page",n="white-page";function r(){i(l,!0)}function s(){i(n,!0)}function c(){i(l,!1)}function o(){i(n,!1)}function i(e,t){document.body.classList.toggle(e,t),document.documentElement&&document.documentElement.classList.toggle(e,t)}},430:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var l=a(365),n=a(370);function r(e){let t=e.className,a=e.fill,r=void 0===a?"currentColor":a,s=e.size;return l.createElement(n.a,{className:t,size:s},l.createElement("path",{d:"M10.8 5H6V3.9a2.28 2.28 0 0 1 2-2.5 2.22 2.22 0 0 1 1.8 1.2.48.48 0 0 0 .7.2.48.48 0 0 0 .2-.7A3 3 0 0 0 8 .4a3.34 3.34 0 0 0-3 3.5v1.2a2.16 2.16 0 0 0-2 2.1v4.4a2.22 2.22 0 0 0 2.2 2.2h5.6a2.22 2.22 0 0 0 2.2-2.2V7.2A2.22 2.22 0 0 0 10.8 5zm-2.2 5.5v1.2H7.4v-1.2a1.66 1.66 0 0 1-1.1-1.6A1.75 1.75 0 0 1 8 7.2a1.71 1.71 0 0 1 .6 3.3z",style:{fill:r}}))}},435:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var l=a(365),n=a(370);function r(e){let t=e.className,a=e.fill,r=void 0===a?"currentColor":a,s=e.size;return l.createElement(n.a,{className:t,size:s},l.createElement("path",{d:"M8.01 10.9885h1v-5h-1v5zm3-2h1.265l.46.771.775-.543-.733-1.228H11.01v-.316l2-2.343v-2.341h-1v1.972l-1 1.172v-1.144h-.029c-.101-.826-.658-1.52-1.436-1.853l1.472-1.349-.676-.736-1.831 1.678-1.831-1.678-.676.736 1.472 1.349c-.778.333-1.335 1.027-1.436 1.853H6.01v1.144l-1-1.172v-1.972h-1v2.341l2 2.343v.316H4.243l-.733 1.228.775.543.46-.771H6.01v.287l-2 1.912v2.801h1v-2.374l1.003-.959c.018 1.289 1.07 2.333 2.363 2.333h.768c.741 0 1.418-.347 1.767-.907.258-.411.304-.887.16-1.365l.939.898v2.374h1v-2.801l-2-1.912v-.287z",fillRule:"evenodd",style:{fill:r}}))}},436:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var l=a(365),n=a(370);function r(e){let t=e.className,a=e.fill,r=void 0===a?"currentColor":a,s=e.size;return l.createElement(n.a,{className:t,size:s},l.createElement("path",{d:"M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-.5 5.5h.9v.9h-.9v-.9zm-3.8.2c-.1 0-.2-.1-.2-.2 0-.4.1-1.2.6-2S5.3 4.2 5.6 4c.2 0 .3 0 .3.1l1.3 2.3c0 .1 0 .2-.1.2-.1.2-.2.3-.3.5-.1.2-.2.4-.2.5 0 .1-.1.2-.2.2l-2.7-.1zM9.9 12c-.3.2-1.1.5-2 .5-.9 0-1.7-.3-2-.5-.1 0-.1-.2-.1-.3l1.3-2.3c0-.1.1-.1.2-.1.2.1.3.1.5.1s.4 0 .5-.1c.1 0 .2 0 .2.1l1.3 2.3c.2.2.2.3.1.3zm2.5-4.1L9.7 8c-.1 0-.2-.1-.2-.2 0-.2-.1-.4-.2-.5 0-.1-.2-.3-.3-.4-.1 0-.1-.1-.1-.2l1.3-2.3c.1-.1.2-.1.3-.1.3.2 1 .7 1.5 1.5s.6 1.6.6 2c0 0-.1.1-.2.1z",style:{fill:r}}))}},456:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var l=a(365),n=a(370);function r(e){let t=e.className,a=e.fill,r=void 0===a?"currentColor":a,s=e.size;return l.createElement(n.a,{className:t,size:s},l.createElement("g",{fill:"none",fillRule:"evenodd"},l.createElement("path",{d:"M10.2764 2.3205c-.437-.905-1.273-1.521-2.227-1.521-1.402 0-2.549 1.333-2.549 2.959v5.541",stroke:r,strokeLinecap:"round",strokeWidth:"1.14"}),l.createElement("path",{d:"M5.2227 5.0215h5.555c1.222 0 2.222 1 2.222 2.222v4.444c0 1.223-1 2.223-2.222 2.223h-5.555c-1.223 0-2.223-1-2.223-2.223v-4.444c0-1.222 1-2.222 2.223-2.222zm2.15279 5.73895h1.25683c.00586-.22266.03663-.4065.09229-.55151.05566-.14502.15527-.28638.29883-.42408l.50537-.47021c.21387-.20801.36914-.41162.46582-.61084.09668-.19922.14502-.42041.14502-.66358 0-.55664-.17944-.98583-.53833-1.2876C9.24243 6.45089 8.73633 6.3 8.083 6.3c-.65626 0-1.16602.16333-1.5293.48999-.36328.32666-.54785.78296-.55371 1.3689h1.48535c.00586-.21973.06299-.39405.17139-.52295.1084-.1289.25049-.19336.42627-.19336.38086 0 .57129.22119.57129.66357 0 .18164-.0564.3479-.1692.49878-.11279.15088-.27758.31714-.49438.49878-.2168.18164-.37353.39624-.47021.6438-.09668.24756-.14502.5852-.14502 1.01294zm-.18018 1.33594c0 .2168.07837.39477.23511.53393.15674.13916.3523.20874.58667.20874.23438 0 .42993-.06958.58667-.20874.15674-.13916.2351-.31714.2351-.53393 0-.2168-.07836-.39478-.2351-.53394-.15674-.13916-.3523-.20874-.58667-.20874-.23438 0-.42993.06958-.58667.20874-.15674.13916-.2351.31714-.2351.53394z",style:{fill:r}})))}},468:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var l=a(365),n=a(370);function r(e){let t=e.className,a=e.fill,r=void 0===a?"currentColor":a,s=e.size;return l.createElement(n.a,{className:t,size:s},l.createElement("path",{d:"M4.303 5.36a.94.94 0 0 0-.944-.945.94.94 0 0 0-.944.944c0 .524.42.944.944.944a.94.94 0 0 0 .944-.944zm7.866 4.246a.95.95 0 0 1-.273.663l-3.62 3.627a.95.95 0 0 1-1.334 0L1.671 8.618C1.295 8.249 1 7.534 1 7.01V3.944A.95.95 0 0 1 1.944 3H5.01c.523 0 1.238.295 1.614.67l5.271 5.265a.98.98 0 0 1 .273.67zm2.831 0a.95.95 0 0 1-.273.663l-3.62 3.627a.98.98 0 0 1-.67.273c-.384 0-.575-.177-.826-.435l3.465-3.465a.95.95 0 0 0 0-1.334L7.805 3.67C7.429 3.295 6.714 3 6.19 3h1.651c.524 0 1.239.295 1.615.67l5.271 5.265a.98.98 0 0 1 .273.67z",style:{fill:r}}))}}}]);
//# sourceMappingURL=321.m.855a3c62.chunk.js.map