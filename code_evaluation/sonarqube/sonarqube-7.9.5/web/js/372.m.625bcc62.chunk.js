(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{1707:function(e,s,t){"use strict";t.r(s);var n=t(365),i=t(366);function o(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var t=[],n=!0,i=!1,o=void 0;try{for(var p,l=e[Symbol.iterator]();!(n=(p=l.next()).done)&&(t.push(p.value),!s||t.length!==s);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}return t}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const p=2,l=2,a=4,r=9,c=10;function u(e,s){let t=o(e,2),n=t[0],i=t[1],p=o(s,2),l=p[0];return!(n>p[1]+a||i<l-a)}function h(e){return{component:e.component,textRange:e.textRange||{endLine:0,endOffset:0,startLine:0,startOffset:0}}}function d(e,s){return e.map(e=>{const t=[];for(let n=e.start;n<=e.end;n++)s[n]&&t.push(s[n]);return t}).filter(e=>e.length>0)}function m(e){let s=e.direction,t=e.lines,n=e.snippetIndex,i=e.snippets;const o=i[n],p={start:Math.max(0,o[0].line-("up"===s?c:0)),end:o[o.length-1].line+("down"===s?c:0)},l=[];return i.forEach((e,s)=>{const t={start:e[0].line,end:e[e.length-1].line};s===n?l.push(p):u([t.start,t.end],[p.start,p.end])?(p.start=Math.min(t.start,p.start),p.end=Math.max(t.end,p.end)):l.push(t)}),d(l,t)}var g=t(1042),b=t(1049),L=t(759),y=t(895),P=t(1040),k=t(0),f=t(488);const x=32;class I extends n.PureComponent{constructor(e){super(e),this.doScroll=e=>{this.props.scroll&&this.props.scroll(e);const s=this.node.current;s&&Object(f.a)(e,{leftOffset:x,rightOffset:s.getBoundingClientRect().width-x,parent:s})},this.expandBlock=e=>()=>this.props.expandBlock(this.props.index,e),this.node=n.createRef()}renderLine(e){let s=e.displayDuplications,t=e.index,i=e.issuesForLine,o=e.issueLocations,p=e.line,l=e.snippet,a=e.symbols,r=e.verticalBuffer;const c=Object(y.b)(p,this.props.locations),u=this.props,h=u.duplications,d=u.duplicationsByLine,m=h?h.length:0,g=m&&d&&d[p.line]||[],L=i.some(e=>e.key===this.props.issue.key);return n.createElement(b.a,{branchLike:this.props.branchLike,displayAllIssues:!1,displayCoverage:!0,displayDuplications:s,displayIssues:!L||i.length>1,displayLocationMarkers:!0,duplications:g,duplicationsCount:m,highlighted:!1,highlightedLocationMessage:Object(P.b)(this.props.highlightedLocationMessage,c),highlightedSymbols:Object(P.a)(a,this.props.highlightedSymbols),issueLocations:o,issuePopup:this.props.issuePopup,issues:i,key:p.line,last:!1,line:p,linePopup:this.props.linePopup,loadDuplications:this.props.loadDuplications,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onIssueSelect:()=>{},onIssueUnselect:()=>{},onIssuesClose:this.props.handleCloseIssues,onIssuesOpen:this.props.handleOpenIssues,onLinePopupToggle:this.props.handleLinePopupToggle,onLocationSelect:this.props.onLocationSelect,onSymbolClick:this.props.handleSymbolClick,openIssues:this.props.openIssuesByLine[p.line],previousLine:t>0?l[t-1]:void 0,renderDuplicationPopup:this.props.renderDuplicationPopup,scroll:this.doScroll,secondaryIssueLocations:c,selectedIssue:Object(P.c)(this.props.issue.key,i),verticalBuffer:r})}render(){const e=this.props,s=e.component,t=e.issue,i=e.issuesByLine,o=void 0===i?{}:i,p=e.last,l=e.locationsByLine,a=e.openIssuesByLine,c=e.snippet,u=s.measures&&s.measures.lines&&parseInt(s.measures.lines,10),h=Object(L.e)(c),d=c[c.length-1].line,m=t.textRange?t.textRange.endLine:t.line,b=Math.max(...Object.keys(o).map(e=>parseInt(e,10)).filter(e=>(function(e,s){return e>=s[0].line&&e<=s[s.length-1].line})(e,c)&&(e===m||a[e]))),y=p?Math.max(0,r-(d-b)):0,P=c.some(e=>!!e.duplicated);return n.createElement("div",{className:"source-viewer-code snippet",ref:this.node},n.createElement("table",{className:"source-table"},n.createElement("tbody",null,c[0].line>1&&n.createElement("tr",{className:"expand-block expand-block-above"},n.createElement("td",{colSpan:5},n.createElement("button",{"aria-label":Object(k.l)("source_viewer.expand_above"),onClick:this.expandBlock("up"),type:"button"},n.createElement(g.a,null)))),c.map((e,s)=>this.renderLine({displayDuplications:P,index:s,issuesForLine:o[e.line]||[],issueLocations:l[e.line]||[],line:e,snippet:c,symbols:h[e.line],verticalBuffer:s===c.length-1?y:0})),(!u||c[c.length-1].line<u)&&n.createElement("tr",{className:"expand-block expand-block-below"},n.createElement("td",{colSpan:5},n.createElement("button",{"aria-label":Object(k.l)("source_viewer.expand_below"),onClick:this.expandBlock("down"),type:"button"},n.createElement(g.a,null)))))))}}var S=t(409),O=t(782),v=t(1041),j=t(390);class B extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={additionalLines:{},highlightedSymbols:[],loading:!1,openIssuesByLine:{},snippets:[]},this.expandBlock=(e,s)=>{const t=this.props,n=t.branchLike,i=t.snippetGroup.component.key,o=this.state.snippets[e],p=c+a-1,l="up"===s?{from:Math.max(1,o[0].line-p),to:o[0].line-1}:{from:o[o.length-1].line+1,to:o[o.length-1].line+p};Object(S.s)(Object.assign({key:i},l,Object(j.d)(n))).then(e=>e.reduce((e,s)=>(s.coverageStatus=Object(O.a)(s),e[s.line]=s,e),{})).then(t=>{this.mounted&&this.setState(n=>{let i=n.additionalLines,o=n.snippets;const p=Object.assign({},i,t);return{additionalLines:p,snippets:m({direction:s,lines:Object.assign({},p,this.props.snippetGroup.sources),snippetIndex:e,snippets:o})}})},()=>{})},this.expandComponent=()=>{const e=this.props,s=e.branchLike,t=e.snippetGroup.component.key;this.setState({loading:!0}),Object(S.s)(Object.assign({key:t},Object(j.d)(s))).then(e=>{this.mounted&&this.setState({loading:!1,snippets:[e]})},()=>{this.mounted&&this.setState({loading:!1})})},this.handleLinePopupToggle=e=>{this.props.onLinePopupToggle(Object.assign({},e,{component:this.props.snippetGroup.component.key}))},this.handleOpenIssues=e=>{this.setState(s=>({openIssuesByLine:Object.assign({},s.openIssuesByLine,{[e.line]:!0})}))},this.handleCloseIssues=e=>{this.setState(s=>({openIssuesByLine:Object.assign({},s.openIssuesByLine,{[e.line]:!1})}))},this.handleSymbolClick=e=>{this.setState({highlightedSymbols:e})},this.loadDuplications=e=>{this.props.loadDuplications(this.props.snippetGroup.component.key,e)},this.renderDuplicationPopup=(e,s)=>this.props.renderDuplicationPopup(this.props.snippetGroup.component,e,s)}componentDidMount(){this.mounted=!0,this.createSnippetsFromProps()}componentWillUnmount(){this.mounted=!1}createSnippetsFromProps(){const e=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;return d((n?[h(n),...e]:e).reduce((s,i,o)=>{const a=Math.max(1,i.textRange.startLine-p),c=i.textRange.endLine+(n&&0===o||t&&o===e.length-1?r:l);let h;return s=s.filter(e=>{if(u([e.start,e.end],[a,c])){let s=!1;return h||(h=e,s=!0),h.start=Math.min(a,e.start,h.start),h.end=Math.max(c,e.end,h.end),s}return!0}),void 0===h&&s.push({start:a,end:c}),s},[]),s)}(this.props.snippetGroup.locations,this.props.snippetGroup.sources,this.props.last,this.props.issue.secondaryLocations.length>0?this.props.issue:void 0);this.setState({snippets:e})}renderSnippet(e){let s=e.index,t=e.issuesByLine,i=e.last,o=e.locationsByLine,p=e.snippet;return n.createElement(I,{branchLike:this.props.branchLike,component:this.props.snippetGroup.component,expandBlock:this.expandBlock,handleCloseIssues:this.handleCloseIssues,handleLinePopupToggle:this.handleLinePopupToggle,handleOpenIssues:this.handleOpenIssues,handleSymbolClick:this.handleSymbolClick,highlightedLocationMessage:this.props.highlightedLocationMessage,highlightedSymbols:this.state.highlightedSymbols,index:s,issue:this.props.issue,issuePopup:this.props.issuePopup,issuesByLine:t,key:s,last:i,loadDuplications:this.loadDuplications,locations:this.props.locations,locationsByLine:o,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onLocationSelect:this.props.onLocationSelect,openIssuesByLine:this.state.openIssuesByLine,renderDuplicationPopup:this.renderDuplicationPopup,scroll:this.props.scroll,snippet:p})}render(){const e=this.props,s=e.branchLike,t=e.duplications,o=e.issue,p=e.issuesByLine,l=e.last,a=e.snippetGroup,r=this.state,c=r.loading,u=r.snippets,h=Object(L.d)([o]),d=1===u.length&&a.component.measures&&u[0].length===parseInt(a.component.measures.lines||"",10);return n.createElement("div",{className:i("component-source-container",{"source-duplications-expanded":t&&t.length>0})},n.createElement(v.a,{branchLike:s,expandable:!d,loading:c,onExpand:this.expandComponent,sourceViewerFile:a.component}),u.map((e,s)=>this.renderSnippet({snippet:e,index:s,issuesByLine:l?p:{},locationsByLine:l&&s===u.length-1?h:{},last:l&&s===u.length-1})))}}var C=t(375),E=t(1043),w=t(894),D=t(385),M=t(633),T=t(418),F=t(383),G=t(1044);t.d(s,"default",function(){return _});class _ extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={components:{},duplicationsByLine:{},loading:!0,notAccessible:!1},this.fetchDuplications=(e,s)=>{Object(S.p)(Object.assign({key:e},Object(j.d)(this.props.branchLike))).then(t=>{this.mounted&&this.setState(n=>({duplicatedFiles:t.files,duplications:t.duplications,duplicationsByLine:Object(L.a)(t.duplications),linePopup:1===t.duplications.length?{component:e,index:0,line:s.line,name:"duplications"}:n.linePopup}))},()=>{})},this.handleIssuePopupToggle=(e,s,t)=>{this.setState(n=>{const i=n.issuePopup&&n.issuePopup.name===s&&n.issuePopup.issue===e;return!1===t||i?!0!==t&&i?{issuePopup:void 0}:null:{issuePopup:{issue:e,name:s}}})},this.handleLinePopupToggle=e=>{let s=e.component,t=e.index,n=e.line,i=e.name,o=e.open;this.setState(e=>{const p=void 0!==e.linePopup&&e.linePopup.line===n&&e.linePopup.name===i&&e.linePopup.component===s&&e.linePopup.index===t;return!1===o||p?!0!==o&&p?{linePopup:void 0}:null:{linePopup:{component:s,index:t,line:n,name:i}}})},this.handleCloseLinePopup=()=>{this.setState({linePopup:void 0})},this.renderDuplicationPopup=(e,s,t)=>{const i=this.state,o=i.duplicatedFiles,p=i.duplications;if(!e||!o)return null;const l=Object(G.b)(p,s);return n.createElement(M.a.Consumer,null,s=>{let i=s.openComponent;return n.createElement(E.a,{blocks:Object(G.a)(l,t),branchLike:this.props.branchLike,duplicatedFiles:o,inRemovedComponent:Object(G.c)(l),onClose:this.handleCloseLinePopup,openComponent:i,sourceViewerFile:e})})}}componentDidMount(){this.mounted=!0,this.fetchIssueFlowSnippets(this.props.issue.key)}componentWillReceiveProps(e){e.issue.key!==this.props.issue.key&&this.fetchIssueFlowSnippets(e.issue.key)}componentWillUnmount(){this.mounted=!1}fetchIssueFlowSnippets(e){this.setState({loading:!0}),Object(T.h)(e).then(e=>{this.mounted&&(this.setState({components:e,issuePopup:void 0,linePopup:void 0,loading:!1}),this.props.onLoaded&&this.props.onLoaded())},e=>{let s=e.response;403!==s.status&&Object(F.a)({response:s}),this.mounted&&this.setState({loading:!1,notAccessible:403===s.status})})}render(){const e=this.state,s=e.loading,t=e.notAccessible;if(s)return n.createElement("div",null,n.createElement(C.a,null));if(t)return n.createElement(D.a,{className:"spacer-top",variant:"warning"},Object(k.l)("code_viewer.no_source_code_displayed_due_to_security"));const i=this.state,o=i.components,p=i.duplications,l=i.duplicationsByLine,a=i.linePopup,r=Object(L.b)(this.props.issues),c=function(e,s){let t,n="";const i=[];return e.forEach((e,o)=>{e.component!==n&&(t=Object.assign({},s[e.component]||function(e){return{component:{key:e,measures:{},path:"",project:"",projectName:"",q:"FIL",uuid:""},sources:[]}}(e.component),{locations:[]}),i.push(t),n=e.component),e.index=o,t.locations.push(e)}),i}(this.props.locations,o);return n.createElement("div",null,c.map((e,s)=>{let t={};return a&&e.component.key===a.component&&(t={duplications:p,duplicationsByLine:l,linePopup:{index:a.index,line:a.line,name:a.name}}),n.createElement(w.a.Provider,{key:"".concat(this.props.issue.key,"-").concat(this.props.selectedFlowIndex,"-").concat(s),value:{branchLike:this.props.branchLike,file:e.component}},n.createElement(B,Object.assign({branchLike:this.props.branchLike,highlightedLocationMessage:this.props.highlightedLocationMessage,issue:this.props.issue,issuePopup:this.state.issuePopup,issuesByLine:r[e.component.key]||{},last:s===c.length-1,loadDuplications:this.fetchDuplications,locations:e.locations||[],onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.handleIssuePopupToggle,onLinePopupToggle:this.handleLinePopupToggle,onLocationSelect:this.props.onLocationSelect,renderDuplicationPopup:this.renderDuplicationPopup,scroll:this.props.scroll,snippetGroup:e},t)))}))}}}}]);
//# sourceMappingURL=372.m.625bcc62.chunk.js.map