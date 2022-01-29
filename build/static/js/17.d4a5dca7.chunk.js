(this["webpackJsonpeasy-hr"]=this["webpackJsonpeasy-hr"]||[]).push([[17],{422:function(e,t,n){"use strict";var a=n(8),r=n(7),i=n(2),o=n(0),c=(n(10),n(11)),s=n(100),l=n(16),u=n(9),d=n(82),b=n(101);function j(e){return Object(d.a)("MuiContainer",e)}Object(b.a)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var m=n(12),x=n(1),h=["className","component","disableGutters","fixed","maxWidth"],O=Object(u.a)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat(Object(m.a)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,n=e.ownerState;return Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&Object(a.a)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var a=t.breakpoints.values[n];return 0!==a&&(e[t.breakpoints.up(n)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return Object(i.a)({},"xs"===n.maxWidth&&Object(a.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&Object(a.a)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),p=o.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiContainer"}),a=n.className,o=n.component,u=void 0===o?"div":o,d=n.disableGutters,b=void 0!==d&&d,p=n.fixed,f=void 0!==p&&p,v=n.maxWidth,g=void 0===v?"lg":v,y=Object(r.a)(n,h),w=Object(i.a)({},n,{component:u,disableGutters:b,fixed:f,maxWidth:g}),W=function(e){var t=e.classes,n=e.fixed,a=e.disableGutters,r=e.maxWidth,i={root:["root",r&&"maxWidth".concat(Object(m.a)(String(r))),n&&"fixed",a&&"disableGutters"]};return Object(s.a)(i,j,t)}(w);return Object(x.jsx)(O,Object(i.a)({as:u,ownerState:w,className:Object(c.a)(W.root,a),ref:t},y))}));t.a=p},519:function(e,t,n){"use strict";var a=n(15),r=n(8),i=n(7),o=n(2),c=n(0),s=(n(10),n(11)),l=n(100),u=n(14),d=n(81),b=n(12),j=n(9),m=n(16),x=n(63),h=n(23),O=n(60),p=n(82),f=n(101);function v(e){return Object(p.a)("MuiLink",e)}var g=Object(f.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(1),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],W={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=Object(j.a)(O.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(b.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,a=Object(u.b)(t,"palette.".concat(function(e){return W[e]||e}(n.color)))||n.color;return Object(o.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(d.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(r.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),C=c.forwardRef((function(e,t){var n=Object(m.a)({props:e,name:"MuiLink"}),r=n.className,u=n.color,d=void 0===u?"primary":u,j=n.component,O=void 0===j?"a":j,p=n.onBlur,f=n.onFocus,g=n.TypographyClasses,W=n.underline,C=void 0===W?"always":W,S=n.variant,R=void 0===S?"inherit":S,M=Object(i.a)(n,w),G=Object(x.a)(),D=G.isFocusVisibleRef,H=G.onBlur,L=G.onFocus,B=G.ref,F=c.useState(!1),N=Object(a.a)(F,2),V=N[0],A=N[1],I=Object(h.a)(t,B),T=Object(o.a)({},n,{color:d,component:O,focusVisible:V,underline:C,variant:R}),z=function(e){var t=e.classes,n=e.component,a=e.focusVisible,r=e.underline,i={root:["root","underline".concat(Object(b.a)(r)),"button"===n&&"button",a&&"focusVisible"]};return Object(l.a)(i,v,t)}(T);return Object(y.jsx)(k,Object(o.a)({className:Object(s.a)(z.root,r),classes:g,color:d,component:O,onBlur:function(e){H(e),!1===D.current&&A(!1),p&&p(e)},onFocus:function(e){L(e),!0===D.current&&A(!0),f&&f(e)},ref:I,ownerState:T,variant:R},M))}));t.a=C},584:function(e,t,n){"use strict";n.r(t);var a=n(38),r=n(28),i=n(265),o=n(277),c=n(261),s=n(60),l=n(160),u=n(9),d=Object(u.a)("div")((function(e){return{backgroundColor:e.theme.palette.primary.light,minHeight:"100vh"}})),b=n(5),j=n(55),m=n(83),x=n(122),h=n(1),O=["children"],p=function(e){var t=e.children,n=Object(j.a)(e,O);return Object(h.jsx)(x.a,Object(b.a)(Object(b.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(h.jsx)(m.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))},f=n(15),v=n(0),g=n(26),y=n(86),w=n(19),W=n(156),k=n(293),C=n(518),S=n(268),R=n(586),M=n(519),G=n(422),D=Object(W.a)(),H=function(){var e=Object(v.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],r=Object(v.useState)(""),i=Object(f.a)(r,2),c=i[0],s=i[1],l=Object(g.b)(),u=Object(w.f)(),d=Object(g.c)((function(e){return e.auth})),b=d.isAuthenticated,j=d.error;Object(v.useEffect)((function(){b&&u("/"),j&&(console.log(j),l(Object(y.b)()))}),[l,b,j,u]);return Object(h.jsx)(k.a,{theme:D,children:Object(h.jsxs)(G.a,{component:"main",maxWidth:"xs",children:[Object(h.jsx)(S.a,{}),Object(h.jsx)(m.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:Object(h.jsxs)(m.a,{component:"form",onSubmit:function(e){e.preventDefault(),l(Object(y.d)(n,c))},noValidate:!0,sx:{mt:1},children:[Object(h.jsx)(R.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:n,onChange:function(e){return a(e.target.value)}}),Object(h.jsx)(R.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:c,onChange:function(e){return s(e.target.value)}}),Object(h.jsx)(o.a,{container:!0,children:Object(h.jsx)(o.a,{item:!0,xs:!0,children:Object(h.jsx)(M.a,{to:"/password/forgot",variant:"body2",children:"Forgot password?"})})}),Object(h.jsx)(C.a,{type:"submit",id:"login_button",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"})]})})]})})},L=n(141),B=function(){return Object(h.jsxs)(c.a,{direction:"row",justifyContent:"space-between",children:[Object(h.jsx)(s.a,{variant:"subtitle2",component:M.a,href:"https://totalhr.in",target:"_blank",underline:"hover",children:"EasyHR by TotalHR"}),Object(h.jsx)(s.a,{variant:"subtitle2",component:M.a,href:"https://totalhr.in",target:"_blank",underline:"hover",children:"\xa9 totalhr.in"})]})};t.default=function(){var e=Object(r.a)(),t=Object(i.a)(e.breakpoints.down("md"));return Object(h.jsx)(d,{children:Object(h.jsxs)(o.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(o.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(h.jsx)(o.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(h.jsx)(p,{children:Object(h.jsxs)(o.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(h.jsx)(o.a,{item:!0,sx:{mb:3},children:Object(h.jsx)(a.b,{to:"#",children:Object(h.jsx)(L.a,{})})}),Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(o.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(h.jsx)(o.a,{item:!0,children:Object(h.jsx)(c.a,{alignItems:"center",justifyContent:"center",spacing:1,children:Object(h.jsx)(s.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hello, Welcome Back"})})})})}),Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(l.a,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(H,{})})]})})})})}),Object(h.jsx)(o.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(h.jsx)(B,{})})]})})}}}]);
//# sourceMappingURL=17.d4a5dca7.chunk.js.map