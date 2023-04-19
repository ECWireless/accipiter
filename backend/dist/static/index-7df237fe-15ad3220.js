import{r as u,j as i,aj as oe,ae as Y,aL as ae,ak as ie,ce,v as H,x as le,C as ue,aw as de,p as P,P as me,cf as pe,M as fe,cg as he,ch as ye,ci as ge,aA as Te,a_ as Ie,G as V,f as D,ac as $,a5 as Le,bw as Se,a3 as E,a2 as x,af as ve,F as Re,aS as be,cj as _e,aa as q,g as Pe,q as Ce,t as Ee,b6 as F,ck as je,cl as we,k as xe,cm as Ae,cn as De,aR as N,d as Fe,co as Oe,c7 as Me,c8 as ke,aU as $e,cp as qe,cq as Ne,bA as W,bC as We,cr as Be,br as Ue,aV as Ye,b7 as He,cs as Ve,ct as Ge,cu as ze,bs as Ke}from"./sanity-690328e9.js";import{useDeskTool as Xe,useDeskToolSetting as B,Delay as Qe}from"./index-b167003e-a08c83a5.js";import{P as Je}from"./PaneItem-5e36e932-087babdf.js";const U=100,O=2e3,G={by:[{field:"_updatedAt",direction:"desc"}]},Ze={};function et(e,s){return e._id?V(e._id):"item-".concat(s)}function tt(e){return Ae(e).map(s=>({...s.draft||s.published,hasPublished:!!s.published,hasDraft:!!s.draft}))}const nt=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function st(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=e.match(nt);if(!t)return null;const n=(t[1]||t[2]).trim().replace(/^["']|["']$/g,"");if(n[0]==="$"){const r=n.slice(1),c=s[r];return typeof c=="string"?c:null}return n}function rt(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function ot(e){return e.map(s=>[at(s),(s.direction||"").toLowerCase()].map(t=>t.trim()).filter(Boolean).join(" ")).join(",")}function at(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function it(e,s){const t=e.by.map(n=>{if(n.mapWith)return n;const r=ct(s,n.field);return r?ut(r,"datetime")?{...n,mapWith:"dateTime"}:r.jsonType==="string"?{...n,mapWith:"lower"}:n:n});return t.every((n,r)=>n===e.by[r])?e:{...e,by:t}}function ct(e,s){const t=fe(s);let n=e;for(const r of t){if(!n)return;if(typeof r=="string"){n=lt(n,r);continue}if(!(he(r)||ye(r))||n.jsonType!=="array")return;const[o,a]=n.of||[];if(a||!o)return;if(!ge(o)){n=o;continue}const[m,h]=o.to||[];if(h||!m)return;n=m}return n}function lt(e,s){if(!("fields"in e))return;const t=e.fields.find(n=>n.name===s);return t?t.type:void 0}function ut(e,s){let t=e.type;for(;t;){if(t.name===s||!t.type&&t.jsonType===s)return!0;t=t.type}return!1}function dt(e){const{childItemId:s,error:t,filterIsSimpleTypeContraint:n,fullList:r,isActive:c,isLoading:o,items:a,layout:m,onListChange:h,onRetry:l,showIcons:y}=e,v=H(),{collapsed:L}=Te(),{collapsed:S,index:g}=Ie(),[R,b]=u.useState(!1);u.useEffect(()=>{if(S)return;const d=setTimeout(()=>{b(!0)},0);return()=>{clearTimeout(d)}},[S]);const T=u.useCallback(d=>{const I=V(d._id),p=s===I;return i(Je,{icon:y===!1?!1:void 0,id:I,pressed:!c&&p,selected:c&&p,layout:m,schemaType:v.get(d._type),value:d})},[s,c,m,v,y]),f=u.useMemo(()=>{if(!R)return null;if(t)return i(D,{align:"center",direction:"column",height:"fill",justify:"center",children:i($,{width:1,children:P(Le,{paddingX:4,paddingY:5,space:4,children:[i(Se,{as:"h3",children:"Could not fetch list items"}),P(E,{as:"p",children:["Error: ",i("code",{children:t.message})]}),l&&i(x,{children:i(Y,{icon:ve,onClick:l,text:"Retry",tone:"primary"})})]})})});if(a===null)return i(D,{align:"center",direction:"column",height:"fill",justify:"center",children:i(Qe,{ms:300,children:P(Re,{children:[i(be,{muted:!0}),i(x,{marginTop:3,children:i(E,{align:"center",muted:!0,size:1,children:"Loading documents…"})})]})})});if(!o&&a.length===0)return i(D,{align:"center",direction:"column",height:"fill",justify:"center",children:i($,{width:1,children:i(x,{paddingX:4,paddingY:5,children:i(E,{align:"center",muted:!0,size:2,children:n?"No documents of this type":"No matching documents"})})})});const d=r&&a.length===O;return P(x,{padding:2,children:[a.length>0&&i(_e,{gap:1,getItemKey:et,items:a,renderItem:T,onChange:h},"".concat(g,"-").concat(S)),o&&i(q,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:i(E,{align:"center",muted:!0,size:1,children:"Loading…"})}),d&&i(q,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:P(E,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",O," documents"]})})]})},[t,n,r,h,o,a,l,T,R,S,g]);return i(Pe,{overflow:L?void 0:"auto",children:f})}const z=u.memo(e=>{let{index:s,initialValueTemplates:t=[],menuItems:n=[],menuItemGroups:r=[],setLayout:c,setSortOrder:o,title:a}=e;const{features:m}=Xe(),h=u.useMemo(()=>({setLayout:l=>{let{layout:y}=l;c(y)},setSortOrder:l=>{o(l)}}),[c,o]);return i(oe,{backButton:m.backButton&&s>0&&i(Y,{as:ae,"data-as":"a",icon:ie,mode:"bleed"}),title:a,actions:i(ce,{initialValueTemplateItems:t,actionHandlers:h,menuItemGroups:r,menuItems:n})})});z.displayName="DocumentListPaneHeader";const mt={result:null,error:!1},pt=e=>({result:{documents:e},loading:!1,error:!1}),ft=e=>({result:null,loading:!1,error:e}),ht=function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=new De,n=t.next.bind(t);return e.pipe(N(o=>({client:o.client,query:o.query,params:o.params})),Fe(Oe),Me(1),ke()).pipe($e(o=>{const a=qe(o.client,o.query,o.params,s).pipe(N(pt),Ne());return W(F({loading:!0}).pipe(We(400),Be(a)),a)})).pipe(Ue(mt),Ye((o,a)=>He(F(ft(o)),W(Ve(window,"online"),t).pipe(Ge(1),ze(a)))),Ke((o,a)=>({...o,...a,onRetry:n})))};function yt(e){var s;const{apiVersion:t,filter:n,params:r,sortOrder:c}=e,o=Ce(Ee),[a,m]=u.useState(!1),h=u.useRef(a),[l,y]=u.useState(null),v=(l==null?void 0:l.error)||null,L=(l==null?void 0:l.loading)||l===null,S=l==null?void 0:l.onRetry,g=(s=l==null?void 0:l.result)==null?void 0:s.documents,R=u.useMemo(()=>g?tt(g):null,[g]),b=u.useMemo(()=>{const f=c==null?void 0:c.extendedProjection,d=["_id","_type"],I=d.join(","),p=(c==null?void 0:c.by)||[],C=a?O:U,_=p.length>0?p:G.by,j=ot(_);if(f){const A=d.concat(f).join(",");return["*[".concat(n,"] {").concat(A,"}"),"order(".concat(j,") [0...").concat(C,"]"),"{".concat(I,"}")].join("|")}return"*[".concat(n,"]|order(").concat(j,")[0...").concat(C,"]{").concat(I,"}")},[n,a,c]),T=u.useCallback(f=>{let{toIndex:d}=f;L||h.current||d>=U/2&&(m(!0),h.current=!0)},[L]);return u.useEffect(()=>{const f=a?p=>!!p.result:()=>!0;y(p=>p?{...p,loading:!0}:null);const I=ht(F({client:o,query:b,params:r}),{apiVersion:t,tag:"desk.document-list"}).pipe(je(f)).subscribe(y);return()=>I.unsubscribe()},[t,o,a,b,r]),u.useEffect(()=>{y(null),m(!1),h.current=!1},[n,r,c,t]),{error:v,fullList:a,handleListChange:T,isLoading:L,items:R,onRetry:S}}const M=[];function gt(e){const s=u.useRef(e);return we(s.current,e)||(s.current=e),s.current}const Tt=e=>{const{menuItems:s,sortOrderRaw:t,layout:n}=e;return s==null?void 0:s.map(r=>{var c,o,a,m;return(c=r.params)!=null&&c.layout?{...r,selected:n===((o=r.params)==null?void 0:o.layout)}:(a=r==null?void 0:r.params)!=null&&a.by?{...r,selected:xe(t==null?void 0:t.by,((m=r==null?void 0:r.params)==null?void 0:m.by)||M)}:{...r,selected:!1}})},vt=u.memo(function(s){const{childItemId:t,index:n,isActive:r,isSelected:c,pane:o,paneKey:a}=s,m=H(),{name:h}=le(),{defaultLayout:l="default",displayOptions:y,initialValueTemplates:v=M,menuItems:L,menuItemGroups:S,options:g,title:R}=o,{apiVersion:b,defaultOrdering:T=M,filter:f}=g,d=gt(g.params||Ze),I=o.source,p=u.useMemo(()=>st(f,d),[f,d]),C=(y==null?void 0:y.showIcons)!==!1,[_,j]=B(p,"layout",l),A=u.useMemo(()=>(T==null?void 0:T.length)>0?{by:T}:G,[T]),[w,K]=B(p,"sortOrder",A),X=p&&w?it(w,m.get(p)):w,k=ue(X),Q=rt(f),{error:J,fullList:Z,handleListChange:ee,isLoading:te,items:ne,onRetry:se}=yt({filter:f,params:d,sortOrder:k,apiVersion:b}),re=u.useMemo(()=>Tt({menuItems:L,sortOrderRaw:w,layout:_}),[_,L,k]);return i(de,{name:I||h,children:P(me,{currentMaxWidth:350,id:a,maxWidth:640,minWidth:320,selected:c,children:[pe,i(z,{index:n,initialValueTemplates:v,menuItems:re,menuItemGroups:S,setLayout:j,setSortOrder:K,title:R}),i(dt,{childItemId:t,error:J,filterIsSimpleTypeContraint:Q,fullList:Z,isActive:r,isLoading:te,items:ne,layout:_,onListChange:ee,onRetry:se,showIcons:C})]})})});export{vt as default};