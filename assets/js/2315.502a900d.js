"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2315],{646:(t,e,r)=>{r.d(e,{H:()=>l});var a=r(2933);function l(t,e){var r=t.append("foreignObject").attr("width","100000"),l=r.append("xhtml:div");l.attr("xmlns","http://www.w3.org/1999/xhtml");var n=e.label;switch(typeof n){case"function":l.insert(n);break;case"object":l.insert(function(){return n});break;default:l.html(n)}a.AV(l,e.labelStyle),l.style("display","inline-block"),l.style("white-space","nowrap");var i=l.node().getBoundingClientRect();return r.attr("width",i.width).attr("height",i.height),r}},2933:(t,e,r)=>{r.d(e,{AV:()=>d,De:()=>n,c$:()=>h,gh:()=>i,nh:()=>c});var a=r(4963),l=r(9610);function n(t,e){return!!t.children(e).length}function i(t){return s(t.v)+":"+s(t.w)+":"+s(t.name)}var o=/:/g;function s(t){return t?String(t).replace(o,"\\:"):""}function d(t,e){e&&t.attr("style",e)}function c(t,e,r){e&&t.attr("class",e).attr("class",r+" "+t.attr("class"))}function h(t,e){var r=e.graph();if(a.A(r)){var n=r.transition;if(l.A(n))return n(t)}return t}},5937:(t,e,r)=>{r.d(e,{A:()=>n});var a=r(2453),l=r(4886);let n=(t,e)=>a.A.lang.round(l.A.parse(t)[e])},2315:(t,e,r)=>{r.d(e,{diagram:()=>J});var a=r(5860),l=r(697),n=r(6312),i=r(6079),o=r(8585),s=r(3068),d=r(8058),c=r(1176),h=r(2933),p={normal:function(t,e,r,a){var l=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").style("stroke-width",1).style("stroke-dasharray","1,0");h.AV(l,r[a+"Style"]),r[a+"Class"]&&l.attr("class",r[a+"Class"])},vee:function(t,e,r,a){var l=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 L 4 5 z").style("stroke-width",1).style("stroke-dasharray","1,0");h.AV(l,r[a+"Style"]),r[a+"Class"]&&l.attr("class",r[a+"Class"])},undirected:function(t,e,r,a){var l=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 5 L 10 5").style("stroke-width",1).style("stroke-dasharray","1,0");h.AV(l,r[a+"Style"]),r[a+"Class"]&&l.attr("class",r[a+"Class"])}},u=r(646);function g(t,e,r){var a,l=e.label,n=t.append("g");"svg"===e.labelType?(n.node().appendChild(e.label),h.AV(n,e.labelStyle)):"string"!=typeof l||"html"===e.labelType?(0,u.H)(n,e):function(t,e){for(var r=t.append("text"),a=(function(t){for(var e,r="",a=!1,l=0;l<t.length;++l)(e=t[l],a)?("n"===e?r+="\n":r+=e,a=!1):"\\"===e?a=!0:r+=e;return r})(e.label).split("\n"),l=0;l<a.length;l++)r.append("tspan").attr("xml:space","preserve").attr("dy","1em").attr("x","1").text(a[l]);return h.AV(r,e.labelStyle),r}(n,e);var i=n.node().getBBox();switch(r){case"top":a=-e.height/2;break;case"bottom":a=e.height/2-i.height;break;default:a=-i.height/2}return n.attr("transform","translate("+-i.width/2+","+a+")"),n}var f=function(t,e){var r=e.nodes().filter(function(t){return h.De(e,t)}),a=t.selectAll("g.cluster").data(r,function(t){return t});h.c$(a.exit(),e).style("opacity",0).remove();var l=a.enter().append("g").attr("class","cluster").attr("id",function(t){return e.node(t).id}).style("opacity",0).each(function(t){var r=e.node(t),a=n.Ltv(this);n.Ltv(this).append("rect"),g(a.append("g").attr("class","label"),r,r.clusterLabelPos)});return a=a.merge(l),(a=h.c$(a,e).style("opacity",1)).selectAll("rect").each(function(t){var r=e.node(t),a=n.Ltv(this);h.AV(a,r.style)}),a};let y=function(t,e){var r,a=t.selectAll("g.edgeLabel").data(e.edges(),function(t){return h.gh(t)}).classed("update",!0);return a.exit().remove(),a.enter().append("g").classed("edgeLabel",!0).style("opacity",0),(a=t.selectAll("g.edgeLabel")).each(function(t){var r=n.Ltv(this);r.select(".label").remove();var a=e.edge(t),l=g(r,e.edge(t),0).classed("label",!0),i=l.node().getBBox();a.labelId&&l.attr("id",a.labelId),o.A(a,"width")||(a.width=i.width),o.A(a,"height")||(a.height=i.height)}),r=a.exit?a.exit():a.selectAll(null),h.c$(r,e).style("opacity",0).remove(),a};var b=r(5664),w=r(3776);function x(t,e){return t.intersect(e)}var v=function(t,e,r){var a,l=t.selectAll("g.edgePath").data(e.edges(),function(t){return h.gh(t)}).classed("update",!0),i=((a=l.enter().append("g").attr("class","edgePath").style("opacity",0)).append("path").attr("class","path").attr("d",function(t){var r=e.edge(t),a=e.node(t.v).elem,l=w.A(r.points.length).map(function(){var t,e;return t=a.getBBox(),{x:(e=a.ownerSVGElement.getScreenCTM().inverse().multiply(a.getScreenCTM()).translate(t.width/2,t.height/2)).e,y:e.f}});return k(r,l)}),a.append("defs"),a);!function(t,e){var r=t.exit();h.c$(r,e).style("opacity",0).remove()}(l,e);var o=void 0!==l.merge?l.merge(i):l;return h.c$(o,e).style("opacity",1),o.each(function(t){var r=n.Ltv(this),a=e.edge(t);a.elem=this,a.id&&r.attr("id",a.id),h.nh(r,a.class,(r.classed("update")?"update ":"")+"edgePath")}),o.selectAll("path.path").each(function(t){var r=e.edge(t);r.arrowheadId=b.A("arrowhead");var a=n.Ltv(this).attr("marker-end",function(){var t,e;return"url("+(t=location.href,e=r.arrowheadId,t.split("#")[0]+"#"+e)+")"}).style("fill","none");h.c$(a,e).attr("d",function(t){var r,a,l,n;return r=e.edge(t),a=e.node(t.v),l=e.node(t.w),(n=r.points.slice(1,r.points.length-1)).unshift(x(a,n[0])),n.push(x(l,n[n.length-1])),k(r,n)}),h.AV(a,r.style)}),o.selectAll("defs *").remove(),o.selectAll("defs").each(function(t){var a=e.edge(t);(0,r[a.arrowhead])(n.Ltv(this),a.arrowheadId,a,"arrowhead")}),o};function k(t,e){var r=(n.n8j||n.JWy.line)().x(function(t){return t.x}).y(function(t){return t.y});return(r.curve||r.interpolate)(t.curve),r(e)}var m=r(1942),A=function(t,e,r){var a,l=e.nodes().filter(function(t){return!h.De(e,t)}),i=t.selectAll("g.node").data(l,function(t){return t}).classed("update",!0);return i.exit().remove(),i.enter().append("g").attr("class","node").style("opacity",0),(i=t.selectAll("g.node")).each(function(t){var a=e.node(t),l=n.Ltv(this);h.nh(l,a.class,(l.classed("update")?"update ":"")+"node"),l.select("g.label").remove();var i=l.append("g").attr("class","label"),s=g(i,a),d=r[a.shape],c=m.A(s.node().getBBox(),"width","height");a.elem=this,a.id&&l.attr("id",a.id),a.labelId&&i.attr("id",a.labelId),o.A(a,"width")&&(c.width=a.width),o.A(a,"height")&&(c.height=a.height),c.width+=a.paddingLeft+a.paddingRight,c.height+=a.paddingTop+a.paddingBottom,i.attr("transform","translate("+(a.paddingLeft-a.paddingRight)/2+","+(a.paddingTop-a.paddingBottom)/2+")");var p=n.Ltv(this);p.select(".label-container").remove();var u=d(p,c,a).classed("label-container",!0);h.AV(u,a.style);var f=u.node().getBBox();a.width=f.width,a.height=f.height}),a=i.exit?i.exit():i.selectAll(null),h.c$(a,e).style("opacity",0).remove(),i};function S(t,e,r,a){var l=t.x,n=t.y,i=l-a.x,o=n-a.y,s=Math.sqrt(e*e*o*o+r*r*i*i),d=Math.abs(e*r*i/s);a.x<l&&(d=-d);var c=Math.abs(e*r*o/s);return a.y<n&&(c=-c),{x:l+d,y:n+c}}function L(t,e,r){var a=t.x,l=t.y,n=[],i=Number.POSITIVE_INFINITY,o=Number.POSITIVE_INFINITY;e.forEach(function(t){i=Math.min(i,t.x),o=Math.min(o,t.y)});for(var s=a-t.width/2-i,d=l-t.height/2-o,c=0;c<e.length;c++){var h=e[c],p=e[c<e.length-1?c+1:0],u=function(t,e,r,a){var l,n,i,o,s,d,c,h,p,u,g,f,y;if(l=e.y-t.y,i=t.x-e.x,s=e.x*t.y-t.x*e.y,p=l*r.x+i*r.y+s,u=l*a.x+i*a.y+s,(0===p||0===u||!(p*u>0))&&(n=a.y-r.y,o=r.x-a.x,d=a.x*r.y-r.x*a.y,c=n*t.x+o*t.y+d,h=n*e.x+o*e.y+d,!(0!==c&&0!==h&&c*h>0)&&0!=(g=l*o-n*i)))return f=Math.abs(g/2),{x:(y=i*d-o*s)<0?(y-f)/g:(y+f)/g,y:(y=n*s-l*d)<0?(y-f)/g:(y+f)/g}}(t,r,{x:s+h.x,y:d+h.y},{x:s+p.x,y:d+p.y});u&&n.push(u)}return n.length?(n.length>1&&n.sort(function(t,e){var a=t.x-r.x,l=t.y-r.y,n=Math.sqrt(a*a+l*l),i=e.x-r.x,o=e.y-r.y,s=Math.sqrt(i*i+o*o);return n<s?-1:n===s?0:1}),n[0]):(console.log("NO INTERSECTION FOUND, RETURN NODE CENTER",t),t)}function T(t,e){var r,a,l=t.x,n=t.y,i=e.x-l,o=e.y-n,s=t.width/2,d=t.height/2;return Math.abs(o)*s>Math.abs(i)*d?(o<0&&(d=-d),r=0===o?0:d*i/o,a=d):(i<0&&(s=-s),r=s,a=0===i?0:s*o/i),{x:l+r,y:n+a}}var _={rect:function(t,e,r){var a=t.insert("rect",":first-child").attr("rx",r.rx).attr("ry",r.ry).attr("x",-e.width/2).attr("y",-e.height/2).attr("width",e.width).attr("height",e.height);return r.intersect=function(t){return T(r,t)},a},ellipse:function(t,e,r){var a=e.width/2,l=e.height/2,n=t.insert("ellipse",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("rx",a).attr("ry",l);return r.intersect=function(t){return S(r,a,l,t)},n},circle:function(t,e,r){var a=Math.max(e.width,e.height)/2,l=t.insert("circle",":first-child").attr("x",-e.width/2).attr("y",-e.height/2).attr("r",a);return r.intersect=function(t){return S(r,a,a,t)},l},diamond:function(t,e,r){var a=e.width*Math.SQRT2/2,l=e.height*Math.SQRT2/2,n=[{x:0,y:-l},{x:-a,y:0},{x:0,y:l},{x:a,y:0}],i=t.insert("polygon",":first-child").attr("points",n.map(function(t){return t.x+","+t.y}).join(" "));return r.intersect=function(t){return L(r,n,t)},i}};function $(){var t=function(t,e){e.nodes().forEach(function(t){var r=e.node(t);o.A(r,"label")||e.children(t).length||(r.label=t),o.A(r,"paddingX")&&s.A(r,{paddingLeft:r.paddingX,paddingRight:r.paddingX}),o.A(r,"paddingY")&&s.A(r,{paddingTop:r.paddingY,paddingBottom:r.paddingY}),o.A(r,"padding")&&s.A(r,{paddingLeft:r.padding,paddingRight:r.padding,paddingTop:r.padding,paddingBottom:r.padding}),s.A(r,B),d.A(["paddingLeft","paddingRight","paddingTop","paddingBottom"],function(t){r[t]=Number(r[t])}),o.A(r,"width")&&(r._prevWidth=r.width),o.A(r,"height")&&(r._prevHeight=r.height)}),e.edges().forEach(function(t){var r=e.edge(t);o.A(r,"label")||(r.label=""),s.A(r,C)});var r=N(t,"output"),a=N(r,"clusters"),l=N(r,"edgePaths"),i=y(N(r,"edgeLabels"),e),u=A(N(r,"nodes"),e,_);(0,c.Zp)(e),function(t,e){function r(t){var r=e.node(t);return"translate("+r.x+","+r.y+")"}t.filter(function(){return!n.Ltv(this).classed("update")}).attr("transform",r),h.c$(t,e).style("opacity",1).attr("transform",r)}(u,e),function(t,e){function r(t){var r=e.edge(t);return o.A(r,"x")?"translate("+r.x+","+r.y+")":""}t.filter(function(){return!n.Ltv(this).classed("update")}).attr("transform",r),h.c$(t,e).style("opacity",1).attr("transform",r)}(i,e),v(l,e,p),function(t,e){var r=t.filter(function(){return!n.Ltv(this).classed("update")});function a(t){var r=e.node(t);return"translate("+r.x+","+r.y+")"}r.attr("transform",a),h.c$(t,e).style("opacity",1).attr("transform",a),h.c$(r.selectAll("rect"),e).attr("width",function(t){return e.node(t).width}).attr("height",function(t){return e.node(t).height}).attr("x",function(t){return-e.node(t).width/2}).attr("y",function(t){return-e.node(t).height/2})}(f(a,e),e),d.A(e.nodes(),function(t){var r=e.node(t);o.A(r,"_prevWidth")?r.width=r._prevWidth:delete r.width,o.A(r,"_prevHeight")?r.height=r._prevHeight:delete r.height,delete r._prevWidth,delete r._prevHeight})};return t.createNodes=function(e){return arguments.length?(A=e,t):A},t.createClusters=function(e){return arguments.length?(f=e,t):f},t.createEdgeLabels=function(e){return arguments.length?(y=e,t):y},t.createEdgePaths=function(e){return arguments.length?(v=e,t):v},t.shapes=function(e){return arguments.length?(_=e,t):_},t.arrows=function(e){return arguments.length?(p=e,t):p},t}var B={paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10,rx:0,ry:0,shape:"rect"},C={arrowhead:"normal",curve:n.lUB};function N(t,e){var r=t.select("g."+e);return r.empty()&&(r=t.append("g").attr("class",e)),r}var I=r(5900);function E(t,e,r){let a=(e.width+e.height)*.9,l=[{x:a/2,y:0},{x:a,y:-a/2},{x:a/2,y:-a},{x:0,y:-a/2}],n=H(t,a,a,l);return r.intersect=function(t){return L(r,l,t)},n}function M(t,e,r){let a=e.height,l=a/4,n=e.width+2*l,i=[{x:l,y:0},{x:n-l,y:0},{x:n,y:-a/2},{x:n-l,y:-a},{x:l,y:-a},{x:0,y:-a/2}],o=H(t,n,a,i);return r.intersect=function(t){return L(r,i,t)},o}function D(t,e,r){let a=e.width,l=e.height,n=[{x:-l/2,y:0},{x:a,y:0},{x:a,y:-l},{x:-l/2,y:-l},{x:0,y:-l/2}],i=H(t,a,l,n);return r.intersect=function(t){return L(r,n,t)},i}function U(t,e,r){let a=e.width,l=e.height,n=[{x:-2*l/6,y:0},{x:a-l/6,y:0},{x:a+2*l/6,y:-l},{x:l/6,y:-l}],i=H(t,a,l,n);return r.intersect=function(t){return L(r,n,t)},i}function V(t,e,r){let a=e.width,l=e.height,n=[{x:2*l/6,y:0},{x:a+l/6,y:0},{x:a-2*l/6,y:-l},{x:-l/6,y:-l}],i=H(t,a,l,n);return r.intersect=function(t){return L(r,n,t)},i}function z(t,e,r){let a=e.width,l=e.height,n=[{x:-2*l/6,y:0},{x:a+2*l/6,y:0},{x:a-l/6,y:-l},{x:l/6,y:-l}],i=H(t,a,l,n);return r.intersect=function(t){return L(r,n,t)},i}function R(t,e,r){let a=e.width,l=e.height,n=[{x:l/6,y:0},{x:a-l/6,y:0},{x:a+2*l/6,y:-l},{x:-2*l/6,y:-l}],i=H(t,a,l,n);return r.intersect=function(t){return L(r,n,t)},i}function W(t,e,r){let a=e.width,l=e.height,n=[{x:0,y:0},{x:a+l/2,y:0},{x:a,y:-l/2},{x:a+l/2,y:-l},{x:0,y:-l}],i=H(t,a,l,n);return r.intersect=function(t){return L(r,n,t)},i}function j(t,e,r){let a=e.height,l=e.width+a/4,n=t.insert("rect",":first-child").attr("rx",a/2).attr("ry",a/2).attr("x",-l/2).attr("y",-a/2).attr("width",l).attr("height",a);return r.intersect=function(t){return T(r,t)},n}function P(t,e,r){let a=e.width,l=e.height,n=[{x:0,y:0},{x:a,y:0},{x:a,y:-l},{x:0,y:-l},{x:0,y:0},{x:-8,y:0},{x:a+8,y:0},{x:a+8,y:-l},{x:-8,y:-l},{x:-8,y:0}],i=H(t,a,l,n);return r.intersect=function(t){return L(r,n,t)},i}function q(t,e,r){let a=e.width,l=a/2,n=l/(2.5+a/50),i=e.height+n,o=t.attr("label-offset-y",n).insert("path",":first-child").attr("d","M 0,"+n+" a "+l+","+n+" 0,0,0 "+a+" 0 a "+l+","+n+" 0,0,0 "+-a+" 0 l 0,"+i+" a "+l+","+n+" 0,0,0 "+a+" 0 l 0,"+-i).attr("transform","translate("+-a/2+","+-(i/2+n)+")");return r.intersect=function(t){let e=T(r,t),a=e.x-r.x;if(0!=l&&(Math.abs(a)<r.width/2||Math.abs(a)==r.width/2&&Math.abs(e.y-r.y)>r.height/2-n)){let i=n*n*(1-a*a/(l*l));0!=i&&(i=Math.sqrt(i)),i=n-i,t.y-r.y>0&&(i=-i),e.y+=i}return e},o}function H(t,e,r,a){return t.insert("polygon",":first-child").attr("points",a.map(function(t){return t.x+","+t.y}).join(" ")).attr("transform","translate("+-e/2+","+r/2+")")}r(4353),r(6750),r(2838),r(4075);let O=function(t){t.shapes().question=E,t.shapes().hexagon=M,t.shapes().stadium=j,t.shapes().subroutine=P,t.shapes().cylinder=q,t.shapes().rect_left_inv_arrow=D,t.shapes().lean_right=U,t.shapes().lean_left=V,t.shapes().trapezoid=z,t.shapes().inv_trapezoid=R,t.shapes().rect_right_inv_arrow=W},X={},Y=async function(t,e,r,a,l,o){let s=a?a.select(`[id="${r}"]`):(0,n.Ltv)(`[id="${r}"]`),d=l||document;for(let r of Object.keys(t)){let a;let l=t[r],n="default";l.classes.length>0&&(n=l.classes.join(" "));let c=(0,i.k)(l.styles),h=void 0!==l.text?l.text:l.id;if((0,i.m)((0,i.c)().flowchart.htmlLabels)){let t={label:await (0,i.r)(h.replace(/fa[blrs]?:fa-[\w-]+/g,t=>`<i class='${t.replace(":"," ")}'></i>`),(0,i.c)())};(a=(0,u.H)(s,t).node()).parentNode.removeChild(a)}else{let t=d.createElementNS("http://www.w3.org/2000/svg","text");for(let e of(t.setAttribute("style",c.labelStyle.replace("color:","fill:")),h.split(i.e.lineBreakRegex))){let r=d.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","1"),r.textContent=e,t.appendChild(r)}a=t}let p=0,g="";switch(l.type){case"round":p=5,g="rect";break;case"square":case"group":default:g="rect";break;case"diamond":g="question";break;case"hexagon":g="hexagon";break;case"odd":case"odd_right":g="rect_left_inv_arrow";break;case"lean_right":g="lean_right";break;case"lean_left":g="lean_left";break;case"trapezoid":g="trapezoid";break;case"inv_trapezoid":g="inv_trapezoid";break;case"circle":g="circle";break;case"ellipse":g="ellipse";break;case"stadium":g="stadium";break;case"subroutine":g="subroutine";break;case"cylinder":g="cylinder"}i.l.warn("Adding node",l.id,l.domId),e.setNode(o.db.lookUpDomId(l.id),{labelType:"svg",labelStyle:c.labelStyle,shape:g,label:a,rx:p,ry:p,class:n,style:c.style,id:o.db.lookUpDomId(l.id)})}},G=async function(t,e,r){let a,l,o=0;if(void 0!==t.defaultStyle){let e=(0,i.k)(t.defaultStyle);a=e.style,l=e.labelStyle}for(let s of t){o++;let d="L-"+s.start+"-"+s.end,c="LS-"+s.start,h="LE-"+s.end,p={};"arrow_open"===s.type?p.arrowhead="none":p.arrowhead="normal";let u="",g="";if(void 0!==s.style){let t=(0,i.k)(s.style);u=t.style,g=t.labelStyle}else switch(s.stroke){case"normal":u="fill:none",void 0!==a&&(u=a),void 0!==l&&(g=l);break;case"dotted":u="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":u=" stroke-width: 3.5px;fill:none"}p.style=u,p.labelStyle=g,void 0!==s.interpolate?p.curve=(0,i.n)(s.interpolate,n.lUB):void 0!==t.defaultInterpolate?p.curve=(0,i.n)(t.defaultInterpolate,n.lUB):p.curve=(0,i.n)(X.curve,n.lUB),void 0===s.text?void 0!==s.style&&(p.arrowheadStyle="fill: #333"):(p.arrowheadStyle="fill: #333",p.labelpos="c",(0,i.m)((0,i.c)().flowchart.htmlLabels)?(p.labelType="html",p.label=`<span id="L-${d}" class="edgeLabel L-${c}' L-${h}" style="${p.labelStyle}">${await (0,i.r)(s.text.replace(/fa[blrs]?:fa-[\w-]+/g,t=>`<i class='${t.replace(":"," ")}'></i>`),(0,i.c)())}</span>`):(p.labelType="text",p.label=s.text.replace(i.e.lineBreakRegex,"\n"),void 0===s.style&&(p.style=p.style||"stroke: #333; stroke-width: 1.5px;fill:none"),p.labelStyle=p.labelStyle.replace("color:","fill:"))),p.id=d,p.class=c+" "+h,p.minlen=s.length||1,e.setEdge(r.db.lookUpDomId(s.start),r.db.lookUpDomId(s.end),p,o)}},F=async function(t,e,r,a){let o,s;i.l.info("Drawing flowchart");let{securityLevel:d,flowchart:c}=(0,i.c)();"sandbox"===d&&(o=(0,n.Ltv)("#i"+e));let p="sandbox"===d?(0,n.Ltv)(o.nodes()[0].contentDocument.body):(0,n.Ltv)("body"),u="sandbox"===d?o.nodes()[0].contentDocument:document,g=a.db.getDirection();void 0===g&&(g="TD");let f=c.nodeSpacing||50,y=c.rankSpacing||50,b=new l.T({multigraph:!0,compound:!0}).setGraph({rankdir:g,nodesep:f,ranksep:y,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),w=a.db.getSubGraphs();for(let t=w.length-1;t>=0;t--)s=w[t],a.db.addVertex(s.id,s.title,"group",void 0,s.classes);let x=a.db.getVertices();i.l.warn("Get vertices",x);let v=a.db.getEdges(),k=0;for(k=w.length-1;k>=0;k--){s=w[k],(0,n.Ubm)("cluster").append("text");for(let t=0;t<s.nodes.length;t++)i.l.warn("Setting subgraph",s.nodes[t],a.db.lookUpDomId(s.nodes[t]),a.db.lookUpDomId(s.id)),b.setParent(a.db.lookUpDomId(s.nodes[t]),a.db.lookUpDomId(s.id))}await Y(x,b,e,p,u,a),await G(v,b,a);let m=new $;O(m),m.arrows().none=function(t,e,r,a){let l=t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 0 0 L 0 0 z");(0,h.AV)(l,r[a+"Style"])},m.arrows().normal=function(t,e){t.append("marker").attr("id",e).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerUnits","strokeWidth").attr("markerWidth",8).attr("markerHeight",6).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowheadPath").style("stroke-width",1).style("stroke-dasharray","1,0")};let A=p.select(`[id="${e}"]`),S=p.select("#"+e+" g");for(m(S,b),S.selectAll("g.node").attr("title",function(){return a.db.getTooltip(this.id)}),a.db.indexNodes("subGraph"+k),k=0;k<w.length;k++)if("undefined"!==(s=w[k]).title){let t=u.querySelectorAll("#"+e+' [id="'+a.db.lookUpDomId(s.id)+'"] rect'),r=u.querySelectorAll("#"+e+' [id="'+a.db.lookUpDomId(s.id)+'"]'),l=t[0].x.baseVal.value,i=t[0].y.baseVal.value,o=t[0].width.baseVal.value,d=(0,n.Ltv)(r[0]).select(".label");d.attr("transform",`translate(${l+o/2}, ${i+14})`),d.attr("id",e+"Text");for(let t=0;t<s.classes.length;t++)r[0].classList.add(s.classes[t])}if(!c.htmlLabels)for(let t of u.querySelectorAll('[id="'+e+'"] .edgeLabel .label')){let e=t.getBBox(),r=u.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}(0,i.o)(b,A,c.diagramPadding,c.useMaxWidth),Object.keys(x).forEach(function(t){let r=x[t];if(r.link){let l=p.select("#"+e+' [id="'+a.db.lookUpDomId(t)+'"]');if(l){let t=u.createElementNS("http://www.w3.org/2000/svg","a");t.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),t.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),t.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===d?t.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&t.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let e=l.insert(function(){return t},":first-child"),a=l.select(".label-container");a&&e.append(function(){return a.node()});let n=l.select(".label");n&&e.append(function(){return n.node()})}}})},Q=function(t){for(let e of Object.keys(t))X[e]=t[e]},J={parser:a.p,db:a.f,renderer:I.f,styles:I.a,init:t=>{t.flowchart||(t.flowchart={}),t.flowchart.arrowMarkerAbsolute=t.arrowMarkerAbsolute,Q(t.flowchart),a.f.clear(),a.f.setGen("gen-1")}}},5900:(t,e,r)=>{r.d(e,{a:()=>y,f:()=>g});var a=r(697),l=r(6312),n=r(6079),i=r(8995),o=r(646),s=r(5937),d=r(5582);let c={},h=async function(t,e,r,a,l,i){let s=a.select(`[id="${r}"]`);for(let r of Object.keys(t)){let a;let d=t[r],c="default";d.classes.length>0&&(c=d.classes.join(" ")),c+=" flowchart-label";let h=(0,n.k)(d.styles),p=void 0!==d.text?d.text:d.id;if(n.l.info("vertex",d,d.labelType),"markdown"===d.labelType)n.l.info("vertex",d,d.labelType);else if((0,n.m)((0,n.c)().flowchart.htmlLabels)){let t={label:p};(a=(0,o.H)(s,t).node()).parentNode.removeChild(a)}else{let t=l.createElementNS("http://www.w3.org/2000/svg","text");for(let e of(t.setAttribute("style",h.labelStyle.replace("color:","fill:")),p.split(n.e.lineBreakRegex))){let r=l.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","1"),r.textContent=e,t.appendChild(r)}a=t}let u=0,g="";switch(d.type){case"round":u=5,g="rect";break;case"square":case"group":default:g="rect";break;case"diamond":g="question";break;case"hexagon":g="hexagon";break;case"odd":case"odd_right":g="rect_left_inv_arrow";break;case"lean_right":g="lean_right";break;case"lean_left":g="lean_left";break;case"trapezoid":g="trapezoid";break;case"inv_trapezoid":g="inv_trapezoid";break;case"circle":g="circle";break;case"ellipse":g="ellipse";break;case"stadium":g="stadium";break;case"subroutine":g="subroutine";break;case"cylinder":g="cylinder";break;case"doublecircle":g="doublecircle"}let f=await (0,n.r)(p,(0,n.c)());e.setNode(d.id,{labelStyle:h.labelStyle,shape:g,labelText:f,labelType:d.labelType,rx:u,ry:u,class:c,style:h.style,id:d.id,link:d.link,linkTarget:d.linkTarget,tooltip:i.db.getTooltip(d.id)||"",domId:i.db.lookUpDomId(d.id),haveCallback:d.haveCallback,width:"group"===d.type?500:void 0,dir:d.dir,type:d.type,props:d.props,padding:(0,n.c)().flowchart.padding}),n.l.info("setNode",{labelStyle:h.labelStyle,labelType:d.labelType,shape:g,labelText:f,rx:u,ry:u,class:c,style:h.style,id:d.id,domId:i.db.lookUpDomId(d.id),width:"group"===d.type?500:void 0,type:d.type,dir:d.dir,props:d.props,padding:(0,n.c)().flowchart.padding})}},p=async function(t,e,r){let a,i;n.l.info("abc78 edges = ",t);let o=0,s={};if(void 0!==t.defaultStyle){let e=(0,n.k)(t.defaultStyle);a=e.style,i=e.labelStyle}for(let r of t){o++;let d="L-"+r.start+"-"+r.end;void 0===s[d]?s[d]=0:s[d]++,n.l.info("abc78 new entry",d,s[d]);let h=d+"-"+s[d];n.l.info("abc78 new link id to be used is",d,h,s[d]);let p="LS-"+r.start,u="LE-"+r.end,g={style:"",labelStyle:""};switch(g.minlen=r.length||1,"arrow_open"===r.type?g.arrowhead="none":g.arrowhead="normal",g.arrowTypeStart="arrow_open",g.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":g.arrowTypeStart="arrow_cross";case"arrow_cross":g.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":g.arrowTypeStart="arrow_point";case"arrow_point":g.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":g.arrowTypeStart="arrow_circle";case"arrow_circle":g.arrowTypeEnd="arrow_circle"}let f="",y="";switch(r.stroke){case"normal":f="fill:none;",void 0!==a&&(f=a),void 0!==i&&(y=i),g.thickness="normal",g.pattern="solid";break;case"dotted":g.thickness="normal",g.pattern="dotted",g.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":g.thickness="thick",g.pattern="solid",g.style="stroke-width: 3.5px;fill:none;";break;case"invisible":g.thickness="invisible",g.pattern="solid",g.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){let t=(0,n.k)(r.style);f=t.style,y=t.labelStyle}g.style=g.style+=f,g.labelStyle=g.labelStyle+=y,void 0!==r.interpolate?g.curve=(0,n.n)(r.interpolate,l.lUB):void 0!==t.defaultInterpolate?g.curve=(0,n.n)(t.defaultInterpolate,l.lUB):g.curve=(0,n.n)(c.curve,l.lUB),void 0===r.text?void 0!==r.style&&(g.arrowheadStyle="fill: #333"):(g.arrowheadStyle="fill: #333",g.labelpos="c"),g.labelType=r.labelType,g.label=await (0,n.r)(r.text.replace(n.e.lineBreakRegex,"\n"),(0,n.c)()),void 0===r.style&&(g.style=g.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),g.labelStyle=g.labelStyle.replace("color:","fill:"),g.id=h,g.classes="flowchart-link "+p+" "+u,e.setEdge(r.start,r.end,g,o)}},u=async function(t,e,r,o){let s,d;n.l.info("Drawing flowchart");let c=o.db.getDirection();void 0===c&&(c="TD");let{securityLevel:u,flowchart:g}=(0,n.c)(),f=g.nodeSpacing||50,y=g.rankSpacing||50;"sandbox"===u&&(s=(0,l.Ltv)("#i"+e));let b="sandbox"===u?(0,l.Ltv)(s.nodes()[0].contentDocument.body):(0,l.Ltv)("body"),w="sandbox"===u?s.nodes()[0].contentDocument:document,x=new a.T({multigraph:!0,compound:!0}).setGraph({rankdir:c,nodesep:f,ranksep:y,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),v=o.db.getSubGraphs();n.l.info("Subgraphs - ",v);for(let t=v.length-1;t>=0;t--)d=v[t],n.l.info("Subgraph - ",d),o.db.addVertex(d.id,{text:d.title,type:d.labelType},"group",void 0,d.classes,d.dir);let k=o.db.getVertices(),m=o.db.getEdges();n.l.info("Edges",m);let A=0;for(A=v.length-1;A>=0;A--){d=v[A],(0,l.Ubm)("cluster").append("text");for(let t=0;t<d.nodes.length;t++)n.l.info("Setting up subgraphs",d.nodes[t],d.id),x.setParent(d.nodes[t],d.id)}await h(k,x,e,b,w,o),await p(m,x);let S=b.select(`[id="${e}"]`),L=b.select("#"+e+" g");if(await (0,i.r)(L,x,["point","circle","cross"],"flowchart",e),n.u.insertTitle(S,"flowchartTitleText",g.titleTopMargin,o.db.getDiagramTitle()),(0,n.o)(x,S,g.diagramPadding,g.useMaxWidth),o.db.indexNodes("subGraph"+A),!g.htmlLabels)for(let t of w.querySelectorAll('[id="'+e+'"] .edgeLabel .label')){let e=t.getBBox(),r=w.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}Object.keys(k).forEach(function(t){let r=k[t];if(r.link){let a=(0,l.Ltv)("#"+e+' [id="'+t+'"]');if(a){let t=w.createElementNS("http://www.w3.org/2000/svg","a");t.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),t.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),t.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===u?t.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&t.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);let e=a.insert(function(){return t},":first-child"),l=a.select(".label-container");l&&e.append(function(){return l.node()});let n=a.select(".label");n&&e.append(function(){return n.node()})}}})},g={setConf:function(t){for(let e of Object.keys(t))c[e]=t[e]},addVertices:h,addEdges:p,getClasses:function(t,e){return e.db.getClasses()},draw:u},f=(t,e)=>{let r=s.A,a=r(t,"r"),l=r(t,"g"),n=r(t,"b");return d.A(a,l,n,e)},y=t=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.nodeTextColor||t.textColor};
  }
  .cluster-label text {
    fill: ${t.titleColor};
  }
  .cluster-label span,p {
    color: ${t.titleColor};
  }

  .label text,span,p {
    fill: ${t.nodeTextColor||t.textColor};
    color: ${t.nodeTextColor||t.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${t.edgeLabelBackground};
      fill: ${t.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${f(t.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${t.clusterBkg};
    stroke: ${t.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  .cluster span,p {
    color: ${t.titleColor};
  }
  /* .cluster div {
    color: ${t.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`}}]);