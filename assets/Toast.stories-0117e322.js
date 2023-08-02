import{j as t}from"./jsx-runtime-b7c78c49.js";import{c as m,B as x,b as T}from"./index-074ff265.js";import{r as C}from"./index-a06da399.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";const B={title:"Data Display/Toast",component:m,args:{title:"Agendamento realizado",description:"Quarta-feira, 23 de Outubro às 16h"},argTypes:{title:{description:"Toast Title",control:"text"},description:{description:"Toast text",control:"text"},open:{description:"Boolean controlling open and close"},onOpenChange:{description:"Function controlling open state"}}},u=({onOpenChange:r,open:f,...g})=>{const[n,s]=C.useState(!1);return t.jsxs(x,{css:{display:"flex",justifyContent:"center"},children:[t.jsx(T,{onClick:()=>s(!n),children:"Show Toast"}),t.jsx(m,{open:n,onOpenChange:s,...g})]})};u.displayName="Toast";const e={},o={render:r=>t.jsx(u,{...r})};var a,i,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <ControlledToast {...args} />
  // <Toast
  //   open={openState}
  //   onOpenChange={isOpenState}
  //   title="Agendamento realizado"
  //   description="Quarta-feira, 23 de Outubro às 16h"
  // />,
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const _=["Primary","Controlled"];export{o as Controlled,e as Primary,_ as __namedExportsOrder,B as default};
//# sourceMappingURL=Toast.stories-0117e322.js.map
