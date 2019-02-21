(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{236:function(e,t,a){e.exports=a(722)},241:function(e,t,a){},669:function(e,t,a){},722:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(88),i=a.n(r),c=(a(241),a(222)),m=a(223),o=a(232),u=a(224),s=a(233),d=a(38),h=a(15),b=a(723),x=a(724),E=a(725),v=a(726),p=(a(669),a(670),a(671),x.a.Header),g=x.a.Footer,f=(x.a.Sider,x.a.Content),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={matrix:[[1,2],[3,4]],vector:[5,6]},a}return Object(s.a)(t,e),Object(m.a)(t,[{key:"updateMatrix",value:function(e,t,a){var n=this.state.matrix.slice(0);n[e][t]=+a.target.value,this.setState({matrix:n})}},{key:"updateVector",value:function(e,t){var a=this.state.vector.slice(0);a[e]=+t.target.value,this.setState({vector:a})}},{key:"render",value:function(){for(var e=this,t=this.state.matrix,a=this.state.vector,n=d.number(t[0][0]*t[1][1]-t[0][1]*t[1][0]),r=d.fraction(1,n),i=[],c=[],m=[t[1][1],-t[0][1],-t[1][0],t[0][0]],o=0;o<m.length;o++){var u=m[o],s=d.multiply(r,u);c.push(s),i.push(1===s.d?(-1===s.s?"-":"")+s.n:"\\frac{"+(-1===s.s?"-":"")+s.n+"}{"+s.d+"}")}for(var y=[d.add(d.multiply(c[0],a[0]),d.multiply(c[1],a[1])),d.add(d.multiply(c[2],a[0]),d.multiply(c[3],a[1]))],k=[],w=0;w<y.length;w++){var M=y[w];k.push(1===M.d?(-1===M.s?"-":"")+M.n:"\\frac{"+(-1===M.s?"-":"")+M.n+"}{"+M.d+"}")}var B="\\begin{bmatrix}"+i[0]+" & "+i[1]+" \\\\ "+i[2]+" & "+i[3]+" \\end{bmatrix}",A="\\begin{bmatrix}"+t[0][0]+" & "+t[0][1]+" \\\\ "+t[1][0]+" & "+t[1][1]+" \\end{bmatrix}",C="\\begin{bmatrix}"+a[0]+" \\\\ "+a[1]+" \\end{bmatrix}";return l.a.createElement(x.a,{style:{height:"100%"}},l.a.createElement(p,null,l.a.createElement("h1",{style:{color:"white"}},"Solve That System")),l.a.createElement(f,null,l.a.createElement("div",{style:{width:500,margin:"0px auto"}},l.a.createElement(E.a,{type:"flex",justify:"center",align:"middle",style:{padding:2}},l.a.createElement(v.a,null,"Here's a trick I learned in linear algebra for solving a system of two equations in two variables using an inverse matrix. This method actually works for any square system, but finding the inverses of higher rank matrices is significantly less straightforward.")),l.a.createElement(h.BlockMath,null,"\\text{Equations}"),l.a.createElement(E.a,{type:"flex",justify:"center",align:"middle",style:{padding:2}},l.a.createElement(v.a,null,l.a.createElement(b.a,{size:"small",style:{width:30},value:t[0][0],onChange:function(t){return e.updateMatrix(0,0,t)}})),l.a.createElement(v.a,null,l.a.createElement(h.InlineMath,null,"\\thickspace x_1 +\\thickspace")),l.a.createElement(v.a,null,l.a.createElement(b.a,{size:"small",style:{width:30},value:t[0][1],onChange:function(t){return e.updateMatrix(0,1,t)}})),l.a.createElement(v.a,null,l.a.createElement(h.InlineMath,null,"\\thickspace x_2"),l.a.createElement(h.InlineMath,null,"\\thickspace=\\thickspace")),l.a.createElement(v.a,null,l.a.createElement(b.a,{size:"small",style:{width:30},value:a[0],onChange:function(t){return e.updateVector(0,t)}}))),l.a.createElement(E.a,{type:"flex",justify:"center",align:"middle",style:{padding:2}},l.a.createElement(v.a,null,l.a.createElement(b.a,{size:"small",style:{width:30},value:t[1][0],onChange:function(t){return e.updateMatrix(1,0,t)}})),l.a.createElement(v.a,null,l.a.createElement(h.InlineMath,null,"\\thickspace x_1 +\\thickspace")),l.a.createElement(v.a,null,l.a.createElement(b.a,{size:"small",style:{width:30},value:t[1][1],onChange:function(t){return e.updateMatrix(1,1,t)}})),l.a.createElement(v.a,null,l.a.createElement(h.InlineMath,null,"\\thickspace x_2"),l.a.createElement(h.InlineMath,null,"\\thickspace=\\thickspace")),l.a.createElement(v.a,null,l.a.createElement(b.a,{size:"small",style:{width:30},value:a[1],onChange:function(t){return e.updateVector(1,t)}}))),l.a.createElement(h.BlockMath,null,"\\text{Definitions}"),l.a.createElement(h.BlockMath,null,"A\\vec{x} = \\vec{b} \\ni A = "+A+"\\text{and } \\vec{b} = "+C),l.a.createElement(h.BlockMath,null,"A^{-1} = \\dfrac{1}{ac-bd} \\begin{bmatrix}d & -b \\\\ -c & a \\end{bmatrix} \\ni A = \\begin{bmatrix}a & b \\\\ c & d \\end{bmatrix}"),l.a.createElement(h.BlockMath,null,"A\\vec{b} = \\begin{bmatrix}ae + bf \\\\ ce + df \\end{bmatrix} \\ni A = \\begin{bmatrix}a & b \\\\ c & d \\end{bmatrix} \\text{and } \\vec{b} = \\begin{bmatrix}e \\\\ f \\end{bmatrix}"),l.a.createElement(h.BlockMath,null,"A^{-1}A = 1"),l.a.createElement(h.BlockMath,null,"\\vec{x} = A^{-1}\\vec{b}"),l.a.createElement(h.BlockMath,null,"\\text{Solution}"),l.a.createElement(h.BlockMath,null,A+"\\vec{x} = "+C),l.a.createElement(h.BlockMath,null,"A^{-1} = \\dfrac{1}{"+t[0][0]+" \\cdot "+t[1][1]+"-"+t[0][1]+" \\cdot "+t[1][0]+"} \\begin{bmatrix}"+t[1][1]+" & -"+t[0][1]+" \\\\ -"+t[1][0]+" & "+t[0][0]+" \\end{bmatrix}".replace("--","")+"= \\dfrac{1}{"+n+"} \\begin{bmatrix}"+t[1][1]+" & -"+t[0][1]+" \\\\ -"+t[1][0]+" & "+t[0][0]+" \\end{bmatrix}= "+B),l.a.createElement(h.BlockMath,null,"\\vec{x} = "+B+C+" = \\begin{bmatrix}"+i[0]+"\\cdot "+a[0]+"+ "+i[1]+"\\cdot "+a[1]+" \\\\ "+i[2]+"\\cdot "+a[0]+"+ "+i[3]+"\\cdot "+a[1]+" \\end{bmatrix}= \\begin{bmatrix} "+k[0]+" \\\\ "+k[1]+" \\end{bmatrix}"),l.a.createElement(h.BlockMath,null,"\\vec{x} = \\begin{bmatrix} "+k[0]+" \\\\ "+k[1]+" \\end{bmatrix}"),l.a.createElement(h.BlockMath,null,"x_1 = "+k[0]+"\\text{ and } x_2 = "+k[1]))),l.a.createElement(g,null,"(C) Quantum Development - 2019"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[236,1,2]]]);
//# sourceMappingURL=main.4fd499f0.chunk.js.map