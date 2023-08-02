import{j as o}from"./jsx-runtime-b7c78c49.js";import{T as d,a as T,B as m,b as h}from"./index-074ff265.js";import{r as y}from"./index-a06da399.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";const _={title:"Data Display/Tooltip",component:d,args:{text:"26 de Outubro - Disponível",children:o.jsx(T,{children:"26"})},argTypes:{children:{control:{type:null},description:"Any React node that will trigger the tooltip"},text:{description:"Tooltip text",control:"text"},open:{description:"Boolean controlling open and close",control:"boolean",defaultValue:!0},onOpenChange:{description:"Function controlling open state"}},decorators:[e=>o.jsx(m,{css:{marginTop:"$10",display:"flex",alignItems:"center",justifyContent:"center"},children:e()})]},t={args:{}},u=({onOpenChange:e,open:f,...x})=>{const[n,g]=y.useState(!1);return o.jsx(m,{css:{display:"flex",justifyContent:"center"},children:o.jsx(d,{open:n,...x,children:o.jsx(h,{onClick:()=>g(!n),children:"Show Tooltip"})})})};u.displayName="Toast";const r={args:{text:"This is a controlled tooltip",open:!0},render:e=>o.jsx(u,{open:e.open,...e})};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var l,p,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'This is a controlled tooltip',
    open: true
  },
  render: args => <ControlledToolTip open={args.open} {...args} />
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const b=["Primary","Controlled"];export{r as Controlled,t as Primary,b as __namedExportsOrder,_ as default};
//# sourceMappingURL=Tooltip.stories-9aad5c47.js.map
