(this.webpackJsonppart2app=this.webpackJsonppart2app||[]).push([[0],{40:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(16),c=t.n(a),i=(t(7),t(3)),u=t(0),o=function(e){var n=e.filter,t=e.handleFilter;return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{value:n,onChange:t}),Object(u.jsx)("br",{})]})},l=function(e){var n=e.addNewPerson,t=e.newName,r=e.handleNameChange,a=e.newNumber,c=e.handleNumberChange;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{value:t,onChange:r}),Object(u.jsx)("br",{}),"number: ",Object(u.jsx)("input",{value:a,onChange:c})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},s=function(e){var n=e.message;return null===n?null:Object(u.jsx)("div",{className:"notification",children:n})},d=function(e){var n=e.message;return null===n?null:Object(u.jsx)("div",{className:"error",children:n})},j=function(e){return e.person.name.toLowerCase().includes(e.filter.toLowerCase())?Object(u.jsxs)("div",{children:[e.person.name," ",e.person.number," ",Object(u.jsx)("button",{onClick:e.handleDelete,children:"delete"})]}):Object(u.jsx)("div",{})},b=t(6),f=t(4),h=t.n(f),m="/api/persons/",O=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),f=Object(i.a)(c,2),O=f[0],p=f[1],v=Object(r.useState)([]),x=Object(i.a)(v,2),g=x[0],w=x[1],N=Object(r.useState)(""),C=Object(i.a)(N,2),D=C[0],S=C[1],k=Object(r.useState)(null),y=Object(i.a)(k,2),I=y[0],P=y[1],A=Object(r.useState)(null),E=Object(i.a)(A,2),F=E[0],J=E[1];Object(r.useEffect)((function(){h.a.get(m).then((function(e){a(e.data)}))}),[]);var L=function(e,n){!0===window.confirm("Delete ".concat(n," ?"))&&function(e){return h.a.delete("".concat(m).concat(e))}(e).then((function(){a(t.filter((function(n){return n.refid!==e}))),J(null)})).catch((function(r){J("Information of '".concat(n,"' has already been removed from server")),setTimeout((function(){J(null)}),5e3),a(t.filter((function(n){return n.refid!==e})))}))};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(d,{message:F}),Object(u.jsx)(s,{message:I}),Object(u.jsx)(o,{filter:D,handleFilter:function(e){e.preventDefault(),S(e.target.value)}}),Object(u.jsx)("h1",{children:"Add a New"}),Object(u.jsx)(l,{addNewPerson:function(e){if(console.log(e.target),e.preventDefault(),1===t.filter((function(e){return e.name.split(" ").join("")===O.split(" ").join("")})).length){var n=t.find((function(e){return e.name===O}));!0===window.confirm("".concat(O," is already added to phonebook, replace the old number with a new one?"))&&(!function(e,n,t,r){var a="".concat(m).concat(e),c=t.find((function(n){return n.refid===e})),i=Object(b.a)(Object(b.a)({},c),{},{number:n});h.a.put(a,i).then((function(n){r(t.map((function(t){return t.refid!==e?t:n.data})))}))}(n.refid,g,t,a),p(""),w(""))}else{var r={refid:0===t.length?1:parseInt(t[t.length-1].refid)+1,name:O,number:g};(c=r,h.a.post(m,c)).then(a(t.concat(r))),w(""),p(""),P("Added ".concat(r.name)),setTimeout((function(){P(null)}),5e3)}var c},newName:O,handleNameChange:function(e){e.preventDefault(),p(e.target.value)},newNumber:g,handleNumberChange:function(e){e.preventDefault(),w(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)("div",{children:t.map((function(e,n){return Object(u.jsx)(j,{person:e,filter:D,handleDelete:function(){return L(e.refid,e.name)}},n)}))})]})};c.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))},7:function(e,n,t){}},[[40,1,2]]]);
//# sourceMappingURL=main.0cbaa974.chunk.js.map