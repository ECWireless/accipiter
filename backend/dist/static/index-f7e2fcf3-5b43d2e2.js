import{s as b,a2 as j,r as l,p as d,P as x,j as o,bX as k,aj as v,ce as H,ae as I,aL as B,ak as E,a_ as y}from"./sanity-e8d7760d.js";import{useDeskTool as C}from"./index-b167003e-8bdeef8a.js";var u;function L(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function O(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=C();return!(n!=null&&n.length)&&!i?null:o(v,{actions:o(H,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(I,{as:B,"data-as":"a",icon:E,mode:"bleed"}),title:i})}const _=b(j)(u||(u=L([`
  position: relative;
`])));function g(t){const{children:e}=t,{collapsed:s}=y();return o(_,{hidden:s,height:"fill",overflow:"auto",children:e})}function A(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:T,...P}=s,[c,h]=l.useState(null);return d(x,{id:n,minWidth:320,selected:r.isSelected,children:[o(O,{actionHandlers:c==null?void 0:c.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(g,{children:[k.isValidElementType(a)&&l.createElement(a,{...r,...P,ref:h,child:i,paneKey:n}),l.isValidElement(a)&&a]})]})}export{A as default};