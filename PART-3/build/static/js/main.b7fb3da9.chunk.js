(this.webpackJsonppart2app=this.webpackJsonppart2app||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t(16),r=t.n(c),i=(t(7),t(3)),o=t(0),u=function(e){var n=e.filter,t=e.handleFilter;return Object(o.jsxs)("div",{children:["filter shown with ",Object(o.jsx)("input",{value:n,onChange:t}),Object(o.jsx)("br",{})]})},s=function(e){var n=e.addNewPerson,t=e.newName,a=e.handleNameChange,c=e.newNumber,r=e.handleNumberChange;return Object(o.jsxs)("form",{onSubmit:n,children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{value:t,onChange:a}),Object(o.jsx)("br",{}),"number: ",Object(o.jsx)("input",{value:c,onChange:r})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){var n=e.message;return null===n?null:Object(o.jsx)("div",{className:"notification",children:n})},d=function(e){var n=e.message;return null===n?null:Object(o.jsx)("div",{className:"error",children:n})},j=function(e){return e.person.name.toLowerCase().includes(e.filter.toLowerCase())?Object(o.jsxs)("div",{children:[e.person.name," ",e.person.number," ",Object(o.jsx)("button",{onClick:e.handleDelete,children:"delete"})]}):Object(o.jsx)("div",{})},b=t(6),f=t(4),h=t.n(f),m="/api/persons/",O=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),f=Object(i.a)(r,2),O=f[0],p=f[1],v=Object(a.useState)([]),x=Object(i.a)(v,2),g=x[0],w=x[1],N=Object(a.useState)(""),C=Object(i.a)(N,2),D=C[0],S=C[1],k=Object(a.useState)(null),y=Object(i.a)(k,2),P=y[0],T=y[1],A=Object(a.useState)(null),E=Object(i.a)(A,2),F=E[0],I=E[1];Object(a.useEffect)((function(){h.a.get(m).then((function(e){c(e.data)}))}),[]);var J=function(e,n){!0===window.confirm("Delete ".concat(n," ?"))&&function(e){return h.a.delete("".concat(m).concat(e))}(e).then((function(){c(t.filter((function(n){return n.id!==e}))),I(null)})).catch((function(a){I("Information of '".concat(n,"' has already been removed from server")),setTimeout((function(){I(null)}),5e3),c(t.filter((function(n){return n.id!==e})))}))};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(d,{message:F}),Object(o.jsx)(l,{message:P}),Object(o.jsx)(u,{filter:D,handleFilter:function(e){e.preventDefault(),S(e.target.value)}}),Object(o.jsx)("h1",{children:"Add a New"}),Object(o.jsx)(s,{addNewPerson:function(e){if(console.log(e.target),e.preventDefault(),1===t.filter((function(e){return e.name.split(" ").join("")===O.split(" ").join("")})).length){var n=t.find((function(e){return e.name===O}));!0===window.confirm("".concat(O," is already added to phonebook, replace the old number with a new one?"))&&(function(e,n,t,a){var c=t.find((function(n){return n.id===e})),r=Object(b.a)(Object(b.a)({},c),{},{number:n}),i="".concat(m).concat(e);return h.a.put(i,r).then((function(n){a(t.map((function(t){return t.id!==e?t:n.data})))}))}(n.id,g,t,c).catch((function(e){console.log(e.response.data),I(e.response.data),setTimeout((function(){I(null)}),5e3)})),p(""),w(""))}else{var a={name:O,number:g};(r=a,h.a.post(m,r)).then((function(e){c(t.concat(e.data))})),w(""),p(""),T("Added ".concat(a.name)),setTimeout((function(){T(null)}),5e3)}var r},newName:O,handleNameChange:function(e){e.preventDefault(),p(e.target.value)},newNumber:g,handleNumberChange:function(e){e.preventDefault(),w(e.target.value)}}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)("div",{children:t.map((function(e,n){return Object(o.jsx)(j,{person:e,filter:D,handleDelete:function(){return J(e.id,e.name)}},n)}))})]})};r.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))},7:function(e,n,t){}},[[40,1,2]]]);
//# sourceMappingURL=main.b7fb3da9.chunk.js.map