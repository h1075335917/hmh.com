"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4583],{4965:(t,e,i)=>{i.r(e),i.d(e,{default:()=>m});var r=i(4848),s=i(6540),l=i(4164),a=i(1779),n=i(8618),h=i(62);let o=[{title:"\u652F\u6301\u6211",description:(0,r.jsxs)(r.Fragment,{children:["\u5728\u8FD9\u91CC\u7ED9\u6211\u4E00\u4E2A\u661F\u6807 ",(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mhuahe/mhuahe.com",children:"GitHub"})]})},{title:"\u5173\u4E8E\u6211",description:(0,r.jsx)(r.Fragment,{children:"\u5728\u4E1A\u7684Java\u5F00\u53D1"})},{title:"\u8054\u7CFB\u6211",description:(0,r.jsx)(r.Fragment,{children:"\u5FAE\u4FE1: mhuahe"})}];function c(t){let{title:e,Svg:i,description:s}=t;return(0,r.jsxs)("div",{className:(0,l.A)("col col--4"),children:[(0,r.jsx)("div",{className:"text--center"}),(0,r.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,r.jsx)("h3",{children:e}),(0,r.jsx)("p",{children:s})]})]})}function g(){return(0,r.jsx)("section",{className:"features_t9lD",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:o.map((t,e)=>(0,r.jsx)(c,{...t},e))})})})}let u=i(9696).A;function d(){let{siteConfig:t}=(0,h.A)();return(0,s.useEffect)(()=>{!async function(){let t=`
      precision mediump float;

      attribute vec2 aPosition;
      attribute vec2 aUV;
      
      varying vec2 vUV;
      varying vec2 vPos;
      
      void main() {
          gl_Position = vec4(aPosition, 0.0, 1.0);
          vUV = aUV;
          vPos = aPosition;
      }
      `,e=`
      precision mediump float;
      
      uniform sampler2D uTexture1;
      uniform sampler2D uTexture2;
      
      uniform float uVar;
      
      varying vec2 vUV;
      varying vec2 vPos;
      
      
      float random (vec2 st) {
          return fract(sin(dot(st.xy,vec2(12.9898,78.233)))* 43758.5453123);
      }
      
      void main() {
          vec4 color1 = texture2D(uTexture1, vUV);
          vec4 color2 = texture2D(uTexture2, vUV);
          vec4 color3 = vec4(vec3(random(vUV)), 1.);
      
          if (color2.r - uVar < 0.0) {
              discard;
          }
      
          gl_FragColor = color1;
      }
     `,[i,r]=await Promise.all([x(u),x(u)]),s=new f(document.querySelector("canvas")),{gl:l}=s;s.init(t,e).loadBuffer(new Float32Array([1,1,1,1,-1,1,0,1,-1,-1,0,0,-1,-1,0,0,1,-1,1,0,1,1,1,1])).setAttrib("aPosition",2,l.FLOAT,!1,16,0).setAttrib("aUV",2,l.FLOAT,!1,16,8).loadTexture(i).setUniform("uTexture1","uniform1i",0).loadTexture(r).setUniform("uTexture2","uniform1i",1);let a=0,n=!1;(function t(){let e=l.getUniformLocation(s.program,"uVar");l.uniform1f(e,n?a-=.01:a+=.01),a>=1&&(n=!0),a<=0&&(n=!1),s.draw(s.gl.TRIANGLES,6),requestAnimationFrame(t)})()}()},[]),(0,r.jsx)("header",{className:(0,l.A)("heroBanner_qdFl"),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("canvas",{width:"300",height:"300",style:{borderRadius:"50%"}}),(0,r.jsx)("h1",{className:"hero__title",children:t.title}),(0,r.jsx)("p",{className:"hero__subtitle",children:t.tagline}),(0,r.jsx)("div",{className:"buttons_AeoN",children:(0,r.jsx)(n.A,{className:"button button--secondary button--lg",to:"/blog",children:"\u524D\u7AEF\u535A\u5BA2 \u2192"})})]})})}function m(){let{siteConfig:t}=(0,h.A)();return(0,r.jsxs)(a.A,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />",children:[(0,r.jsx)(d,{}),(0,r.jsx)("main",{children:(0,r.jsx)(g,{})})]})}class f{gl;program;vs;fs;buffer;textures=[];constructor(t){if(t instanceof HTMLCanvasElement)return this.gl=t.getContext("webgl"),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this;throw Error("please pass canvas element")}init(t,e){let i=this.vs=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(i,t),this.gl.compileShader(i);let r=this.fs=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(r,e),this.gl.compileShader(r);let s=this.program=this.gl.createProgram();return this.gl.attachShader(s,i),this.gl.attachShader(s,r),this.gl.linkProgram(s),this.gl.useProgram(s),this}loadBuffer(t){let e=this.buffer=this.gl.createBuffer();return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,e),this.gl.bufferData(this.gl.ARRAY_BUFFER,t,this.gl.STATIC_DRAW),this}loadTexture(t){let e=this.gl.createTexture();return this.gl.activeTexture(this.gl["TEXTURE"+this.textures.length]),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.textures.push(e),this}setAttrib(t,e,i,r,s,l){let a=this.gl.getAttribLocation(this.program,t);return this.gl.vertexAttribPointer(a,e,i,r,s,l),this.gl.enableVertexAttribArray(a),this}setUniform(t,e,i){let r=this.gl.getUniformLocation(this.program,t);return this.gl[e](r,i),this}draw(t,e){this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.drawArrays(t,0,e)}then(t){return t.call(this),this}}function x(t){return new Promise(e=>{let i=new Image;i.src=t,i.onload=function(){e(i)}})}},9696:(t,e,i)=>{i.d(e,{A:()=>r});let r=i.p+"assets/images/mhuahe-9c4fbc76829292b8a1a3ce7b487caaf7.png"}}]);