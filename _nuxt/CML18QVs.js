import{i as G,G as H,H as q,f as U,g as Q,o as z,c as D,a as e,I as a,t as N,d as E,F as Z,J as tt,C as et,b as K,w as ot,_ as nt}from"./DHD9c0uz.js";import{P as $}from"./VijBauLY.js";import{u as st}from"./0HtxBcGp.js";const lt="$s";function O(...n){const i=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(i);const[s,k]=n;if(!s||typeof s!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+s);if(k!==void 0&&typeof k!="function")throw new Error("[nuxt] [useState] init must be a function: "+k);const v=lt+s,t=G(),w=H(t.payload.state,v);if(w.value===void 0&&k){const C=k();if(q(C))return t.payload.state[v]=C,C;w.value=C}return w}const at=""+new URL("eraser_a.Dg72ljsP.png",import.meta.url).href,rt=e("div",{style:{display:"none"}},[e("label",{for:"inputLetter"},[e("b",null,"Input characters:")]),e("div",null,[e("input",{type:"text",id:"inputLetter",placeholder:"e.g. test"})])],-1),it=e("div",{style:{display:"flex"}},[e("div",{class:"col1"}),e("div",{class:"col2",style:{display:"flex","align-items":"center"}},[e("label",{for:"sliderX"},"X"),e("div",null,[e("form",{oninput:"sliderX_value.value=sliderX.value"},[e("div",{style:{display:"flex","flex-flow":"column"}},[e("input",{type:"range",id:"sliderX",min:"-100",max:"100",value:"0",list:"sliderX_datalist"})])]),e("datalist",{id:"sliderX_datalist"},[e("option",{value:"0",label:"0"})])]),e("output",{id:"sliderX_value"},"0")]),e("div",{class:"col3",style:{}})],-1),bt={style:{display:"flex"}},ut=e("div",{class:"col1",style:{}},[e("label",{for:"sliderY"},"Y"),e("div",null,[e("form",{oninput:"sliderY_value.value=sliderY.value"},[e("div",{style:{display:"flex","flex-flow":"column"}},[e("input",{type:"range",id:"sliderY",min:"-100",max:"100",value:"0",list:"sliderY_datalist",orient:"vertical",style:{transform:"rotate(180deg)"}})])]),e("datalist",{id:"sliderY_datalist"},[e("option",{value:"0",label:"0"})])]),e("output",{id:"sliderY_value"},"0")],-1),ct=e("div",{class:"col2",style:{border:"1px solid black"}},[e("div",{id:"canvas",style:{"margin-bottom":"-6px"},oncontextmenu:"return false;"})],-1),dt={class:"col3",style:{}},yt=e("label",{for:"slider_ratio"},"R",-1),gt={style:{display:"flex"}},mt={oninput:"ratio_value2.value=new Intl.NumberFormat('ja-JP', {style: 'percent'}).format(slider_ratio.value / 100)"},vt={style:{display:"flex","flex-flow":"column"}},pt=["min","max","value"],kt=tt('<datalist id="values"><option value="300" label="300"></option><option value="200" label="200"></option><option value="100" label="100"></option><option value="10" label="10"></option></datalist>',1),ft={id:"ratio_value2"},xt=e("br",null,null,-1),wt={class:"nav justify-content-center bg-body-tertiary"},Ct={class:"dropdown"},ht={class:"btn btn-outline-dark btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown","data-bs-auto-close":"outside","aria-expanded":"false"},St=e("div",{id:"canvasCurrentPenThickness"},null,-1),_t={class:"dropdown-menu"},Yt={id:"penThicknessList2"},Xt=e("br",null,null,-1),Bt=e("img",{style:{width:"30px",height:"30px"},src:at},null,-1),It={class:"dropdown",style:{display:"none"}},Lt=e("button",{class:"btn btn-outline-dark btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown","data-bs-auto-close":"outside","aria-expanded":"false",style:{height:"100%"}},[E(" Color"),e("br"),E(" select"),e("br")],-1),Pt={class:"dropdown-menu"},Et={id:"colorList"},Ft=e("br",null,null,-1),Tt={id:"colorList",style:{}};let S,_,I,c,b,d=1,y=1,J=.1,A=3,X=0,P=0,l={x:0,y:0,minX:0,maxX:0,minY:0,maxY:0},f={x:794,y:1123},M=!1;const B=O("penThickness",()=>5),r=O("penColor",()=>"black");let Y=!1,h=!0;const jt=n=>{let i,s,k,v,t=!1;n.preload=()=>{const o=localStorage.getItem("key_test_canvas_buffer");o&&(s=n.loadImage(o)),k=n.loadFont("../KanjiStrokeOrders_v4.004.ttf"),v=new FontFace("KanjiStrokeOrders_prod","url(/sample-kanji-practice/KanjiStrokeOrders_v4.004.ttf)"),document.fonts.add(v),v.load().then(()=>{t=!0,console.log("fontFile_prod.load >>")}),console.log("p5.preload END >>");const m=et();console.log("runtimeConfig.app.baseURL:"),console.log(m.app.baseURL)},n.setup=()=>{i=n.createVector(Math.round(window.innerWidth-80),400),console.log("p5.setup canvasSize:"),console.log(i),n.createCanvas(i.x,i.y),l.minX=-(f.x-50),l.maxX=i.x-50,l.minY=-(f.y-50),l.maxY=i.y-50,n.strokeWeight(10),n.stroke(240),n.noFill(),n.background("gainsboro"),c=n.createGraphics(f.x,f.y),c.class("canvas_buffer"),s&&c.image(s,0,0,f.x,f.y),b=n.createGraphics(f.x,f.y),b.class("canvas_background"),b.background("white"),I=n.select("#slider_ratio")??I,console.log("slider_ratio:"),S=n.select("#sliderX")??S,_=n.select("#sliderY")??_,S.attribute("min",l.minX.toString()),S.attribute("max",l.maxX.toString()),_.attribute("min",l.minY.toString()),_.attribute("max",l.maxY.toString());const o=localStorage.getItem("canvasBase");o&&(l=JSON.parse(o));const m=localStorage.getItem("ratio");m&&(d=parseFloat(m),y=d,I.value(y*100),V(parseInt(I.value().toString())),S.attribute("min",l.minX.toString()),_.attribute("min",l.minY.toString())),b.push(),b.pop()},n.draw=()=>{if(t){b.push(),b.pop();const o=150;u("漢",10,10,o),u("漢",10+(o+5),10,o),u("漢",10+(o+5)*2,10,o),u("",10+(o+5)*3,10,o),u("",10+(o+5)*4,10,o),u("字",10,10+(o+10),o),u("字",10+(o+5),10+(o+10),o),u("字",10+(o+5)*2,10+(o+10),o),u("",10+(o+5)*3,10+(o+10),o),u("",10+(o+5)*4,10+(o+10),o),u("あ",10,10+(o+10)*2,o),u("あ",10+(o+5),10+(o+10)*2,o),u("あ",10+(o+5)*2,10+(o+10)*2,o),u("",10+(o+5)*3,10+(o+10)*2,o),u("",10+(o+5)*4,10+(o+10)*2,o),u("い",10,10+(o+10)*3,o),u("い",10+(o+5),10+(o+10)*3,o),u("い",10+(o+5)*2,10+(o+10)*3,o),u("",10+(o+5)*3,10+(o+10)*3,o),u("",10+(o+5)*4,10+(o+10)*3,o),u("う",10,10+(o+10)*4,o),u("う",10+(o+5),10+(o+10)*4,o),u("う",10+(o+5)*2,10+(o+10)*4,o),u("",10+(o+5)*3,10+(o+10)*4,o),u("",10+(o+5)*4,10+(o+10)*4,o),h=!0,t=!1}if(y=Math.max(J,y),y=Math.min(A,y),y!=d){const o=i.copy().div(2),m=n.createVector(l.x,l.y),F=o.copy().sub(m).copy().div(d),g=o.copy().sub(F.copy().mult(y));l.x=g.x,l.y=g.y,I.value(y*100),V(parseInt(I.value().toString())),i.x*y-50,i.y*y-50,l.minX=-(f.x*y-50),l.minY=-(f.y*y-50),S.attribute("min",l.minX.toString()),_.attribute("min",l.minY.toString()),d=y,h=!0,console.log("canvasSize:"),console.log(i),console.log("center:"),console.log(o)}h&&(n.background("gainsboro"),l.x=Math.max(l.minX,l.x),l.x=Math.min(l.maxX,l.x),l.y=Math.max(l.minY,l.y),l.y=Math.min(l.maxY,l.y),n.image(b,l.x,l.y,c.width*d,c.height*d),n.image(c,l.x,l.y,c.width*d,c.height*d),S.value(l.x),_.value(l.y),Mt(parseInt(S.value().toString())),Ot(parseInt(_.value().toString())),localStorage.setItem("canvasBase",JSON.stringify(l)),localStorage.setItem("ratio",d.toString()),h=!1),M&&(M=!1,console.log("exec pg.reset()"),c.erase(),c.rect(0,0,f.x,f.y),c.noErase(),h=!0,j())},n.mouseClicked=()=>{console.log("mouseClicked >>"),p()&&(C(),j(),h=!0)},n.touchStarted=()=>{p()&&(console.log("touchStarted >>"),setTimeout(()=>{X==0&&(X=n.touches.length)},50))},n.touchEnded=()=>{p()&&(X=0,P=0,j())},n.touchMoved=()=>{if(p()){if(X==2){const o=n.touches[0].x-n.touches[1].x,m=n.touches[0].y-n.touches[1].y,x=Math.sqrt(o**2+m**2);P!=0&&(y=d+Math.sign(x-P)*.5/100),P=x}if(n.mouseButton==="right"||X==2){const o=n.mouseX-n.pmouseX,m=n.mouseY-n.pmouseY;l.x+=o,l.y+=m}(X==1||n.touches.length==0&&n.mouseButton==="left"&&n.mouseIsPressed)&&w(),h=!0,console.log("p5.touches.length:"),console.log(n.touches.length),console.log("count: "+X),console.log("mouseIsPressed: "+n.mouseIsPressed)}};const w=()=>{if(!p())return;const o=()=>{c.strokeWeight(B.value),c.stroke(r.value),c.line((n.mouseX-l.x)/d,(n.mouseY-l.y)/d,(n.pmouseX-l.x)/d,(n.pmouseY-l.y)/d)};Y?(c.erase(),o(),c.noErase()):o()},C=()=>{if(!p())return;const o=()=>{c.strokeWeight(B.value),c.stroke(r.value),c.line((n.mouseX-l.x)/d,(n.mouseY-l.y)/d,(n.mouseX-l.x)/d,(n.mouseY-l.y)/d)};Y?(c.erase(),o(),c.noErase()):o()},p=()=>n.mouseX>=0&&n.mouseX<=i.x&&n.mouseY>=0&&n.mouseY<=i.y;n.mouseWheel=o=>{o.deltaY>0?y-=.05:o.deltaY<0&&(y+=.05),console.log(`[mouseWheel] newRatio: ${y}`)};const u=(o,m,x,F)=>{const g=F;b.push(),b.noFill(),b.stroke("deepskyblue"),b.rect(m,x,g,g),b.drawingContext.setLineDash([5,5]),b.line(m+g/2,x,m+g/2,x+g),b.line(m,x+g/2,m+g,x+g/2),b.pop(),b.push(),b.fill("silver").textSize(g),b.textFont(k),b.drawingContext.font=`${g.toString()}px "KanjiStrokeOrders_prod"`;const L=b.drawingContext.measureText(o),W=L.actualBoundingBoxAscent+L.actualBoundingBoxDescent;b.text(o,m+(g-L.width)/2,x+g-(g-W)/2-L.actualBoundingBoxDescent);let T=new FontFace("KanjiStrokeOrders_test","url(/sample-kanji-practice/KanjiStrokeOrders_v4.004.ttf)");T.load(),document.fonts.add(T),T.load().then(()=>{b.fill("silver").textSize(g),b.drawingContext.font=`${g.toString()}px "KanjiStrokeOrders_test"`;const R=b.drawingContext.measureText(o);R.actualBoundingBoxAscent+R.actualBoundingBoxDescent}),b.pop()}},V=n=>{const i=document.querySelector("#ratio_value2");i&&(i.textContent=new Intl.NumberFormat("ja-JP",{style:"percent"}).format(n/100))},Mt=n=>{const i=document.querySelector("#sliderX_value");i&&(i.textContent=n.toString())},Ot=n=>{const i=document.querySelector("#sliderY_value");i&&(i.textContent=n.toString())},j=()=>{const n=document.querySelector("#canvas .canvas_buffer");if(n){const i=n.toDataURL();localStorage.setItem("key_test_canvas_buffer",i),localStorage.setItem("canvasBase",JSON.stringify(l)),localStorage.setItem("ratio",d.toString())}console.log("targetCanvas:"),console.log(n)},Rt=n=>{const i=n.createVector(30,30);n.setup=()=>{n.createCanvas(i.x,i.y)},n.draw=()=>{n.noLoop(),n.frameRate(2),n.stroke("silver"),n.fill("white"),n.circle(i.x/2,i.y/2,i.x-1),n.fill(r.value),n.circle(i.x/2,i.y/2,B.value),console.log("sketchCurrentPenThickness >> canvasSize:"),console.log(i)},n.touchMoved=()=>{console.log("sketchCurrentPenThickness >> p5.touches.length:"),console.log(n.touches.length)}},Nt=U({__name:"CanvasPracticeSheet",setup(n){const i=()=>{M=!0,console.log("clearCanvas()")};O("isOpenThicknessList",()=>!1);let s=()=>{};const k=()=>{const v=document.getElementById("eraserButton");v&&(Y?v.setAttribute("style","--bs-btn-color: red; --bs-btn-border-color: red; --bs-border-width: 1px; --bs-btn-hover-color: red; --bs-btn-hover-border-color: red;"):v.setAttribute("style","--bs-btn-border-color: #212529;"))};return Q(()=>{console.log("<< onMounted >>");const v=new $(Rt,document.getElementById("canvasCurrentPenThickness")??void 0);new $(jt,document.getElementById("canvas")??void 0),v.draw(),s=()=>{v.draw()};const t=document.querySelector("#slider_ratio");t&&t.addEventListener("input",p=>{p.target instanceof HTMLInputElement&&(y=parseFloat(p.target.value)/100,console.log(`[input.addEventListener] newRatio: ${y}`))});const w=document.querySelector("#sliderX");w&&w.addEventListener("input",p=>{p.target instanceof HTMLInputElement&&(l.x=parseFloat(p.target.value),h=!0,console.log(`[inputX.addEventListener] canvasBase.x: ${l.x}`))});const C=document.querySelector("#sliderY");C&&C.addEventListener("input",p=>{p.target instanceof HTMLInputElement&&(l.y=parseFloat(p.target.value),h=!0,console.log(`[inputY.addEventListener] canvasBase.y: ${l.y}`))})}),(v,t)=>(z(),D(Z,null,[rt,e("div",null,[it,e("div",bt,[ut,ct,e("div",dt,[yt,e("div",gt,[e("form",mt,[e("div",vt,[e("input",{type:"range",id:"slider_ratio",min:a(J)*100,max:a(A)*100,value:a(d)*100,list:"values",orient:"vertical"},null,8,pt)])]),kt]),e("output",ft,N(new Intl.NumberFormat("ja-JP",{style:"percent"}).format(1)),1)])])]),xt,e("ul",wt,[e("div",Ct,[e("button",ht,[E(" Pen: "+N(a(B))+"px ",1),St]),e("ul",_t,[e("div",Yt,[e("button",{type:"button",class:"btn btn-sm btn-outline-dark",onClick:t[0]||(t[0]=()=>{B.value=5,a(s)()})},"Pen 5"),e("button",{type:"button",class:"btn btn-sm btn-outline-dark",onClick:t[1]||(t[1]=()=>{B.value=10,a(s)()})},"Pen 10"),e("button",{type:"button",class:"btn btn-sm btn-outline-dark",onClick:t[2]||(t[2]=()=>{B.value=15,a(s)()})},"Pen 15")])])]),e("button",{id:"eraserButton",type:"button",class:"btn btn-sm btn-outline-dark",onClick:t[3]||(t[3]=()=>{q(Y)?Y.value=!a(Y):Y=!a(Y),k()})},[E("Eraser"),Xt,Bt]),e("div",It,[Lt,e("ul",Pt,[e("div",Et,[e("button",{type:"button",class:"btn btn-sm btn-secondary color-black",style:{color:"white","--bs-btn-bg":"black"},title:"black",onClick:t[4]||(t[4]=()=>{r.value="black",a(s)()})},"Black"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-gray",style:{color:"white","--bs-btn-bg":"gray"},onClick:t[5]||(t[5]=()=>{r.value="gray",a(s)()})},"gray"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-lightgray",style:{"--bs-btn-color":"black","--bs-btn-bg":"lightgray"},onClick:t[6]||(t[6]=()=>{r.value="lightgray",a(s)()})},"lightgray"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-white",style:{"--bs-btn-color":"black","--bs-btn-bg":"white"},onClick:t[7]||(t[7]=()=>{r.value="white",a(s)()})},"white"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-pink",style:{"--bs-btn-color":"black","--bs-btn-bg":"pink"},onClick:t[8]||(t[8]=()=>{r.value="pink",a(s)()})},"pink"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-red",style:{color:"white","--bs-btn-bg":"red"},onClick:t[9]||(t[9]=()=>{r.value="red",a(s)()})},"red"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-brown",style:{color:"white","--bs-btn-bg":"brown"},onClick:t[10]||(t[10]=()=>{r.value="brown",a(s)()})},"brown"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-darkred",style:{color:"white","--bs-btn-bg":"darkred"},onClick:t[11]||(t[11]=()=>{r.value="darkred",a(s)()})},"darkred"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-orange",style:{"--bs-btn-color":"black","--bs-btn-bg":"orange"},onClick:t[12]||(t[12]=()=>{r.value="orange",a(s)()})},"orange"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-gold",style:{"--bs-btn-color":"black","--bs-btn-bg":"gold"},onClick:t[13]||(t[13]=()=>{r.value="gold",a(s)()})},"gold"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-yellow",style:{"--bs-btn-color":"black","--bs-btn-bg":"yellow"},onClick:t[14]||(t[14]=()=>{r.value="yellow",a(s)()})},"yellow"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-khaki",style:{"--bs-btn-color":"black","--bs-btn-bg":"khaki"},onClick:t[15]||(t[15]=()=>{r.value="khaki",a(s)()})},"khaki"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-lime",style:{"--bs-btn-color":"black","--bs-btn-bg":"lime"},onClick:t[16]||(t[16]=()=>{r.value="lime",a(s)()})},"lime"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-green",style:{color:"white","--bs-btn-bg":"green"},onClick:t[17]||(t[17]=()=>{r.value="green",a(s)()})},"Green"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-cyan",style:{"--bs-btn-color":"black","--bs-btn-bg":"cyan"},onClick:t[18]||(t[18]=()=>{r.value="cyan",a(s)()})},"cyan"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-blue",style:{color:"white","--bs-btn-bg":"blue"},onClick:t[19]||(t[19]=()=>{r.value="blue",a(s)()})},"blue"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-steelblue",style:{color:"white","--bs-btn-bg":"steelblue"},onClick:t[20]||(t[20]=()=>{r.value="steelblue",a(s)()})},"steelblue"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-lavender",style:{"--bs-btn-color":"black","--bs-btn-bg":"lavender"},onClick:t[21]||(t[21]=()=>{r.value="lavender",a(s)()})},"lavender"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-indigo",style:{color:"white","--bs-btn-bg":"indigo"},onClick:t[22]||(t[22]=()=>{r.value="indigo",a(s)()})},"indigo"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-purple",style:{color:"white","--bs-btn-bg":"purple"},onClick:t[23]||(t[23]=()=>{r.value="purple",a(s)()})},"purple")])])]),e("button",{type:"button",class:"btn btn-sm btn-warning",onClick:t[24]||(t[24]=w=>i())},"Clear")]),Ft,e("div",Tt,[e("button",{type:"button",class:"btn btn-sm btn-secondary color-black",style:{color:"white","--bs-btn-bg":"black"},title:"black",onClick:t[25]||(t[25]=()=>{r.value="black",a(s)()})},"Black"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-gray",style:{color:"white","--bs-btn-bg":"gray"},onClick:t[26]||(t[26]=()=>{r.value="gray",a(s)()})},"gray"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-lightgray",style:{"--bs-btn-color":"black","--bs-btn-bg":"lightgray"},onClick:t[27]||(t[27]=()=>{r.value="lightgray",a(s)()})},"lightgray"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-white",style:{"--bs-btn-color":"black","--bs-btn-bg":"white"},onClick:t[28]||(t[28]=()=>{r.value="white",a(s)()})},"white"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-pink",style:{"--bs-btn-color":"black","--bs-btn-bg":"pink"},onClick:t[29]||(t[29]=()=>{r.value="pink",a(s)()})},"pink"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-red",style:{color:"white","--bs-btn-bg":"red"},onClick:t[30]||(t[30]=()=>{r.value="red",a(s)()})},"red"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-brown",style:{color:"white","--bs-btn-bg":"brown"},onClick:t[31]||(t[31]=()=>{r.value="brown",a(s)()})},"brown"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-darkred",style:{color:"white","--bs-btn-bg":"darkred"},onClick:t[32]||(t[32]=()=>{r.value="darkred",a(s)()})},"darkred"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-orange",style:{"--bs-btn-color":"black","--bs-btn-bg":"orange"},onClick:t[33]||(t[33]=()=>{r.value="orange",a(s)()})},"orange"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-gold",style:{"--bs-btn-color":"black","--bs-btn-bg":"gold"},onClick:t[34]||(t[34]=()=>{r.value="gold",a(s)()})},"gold"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-yellow",style:{"--bs-btn-color":"black","--bs-btn-bg":"yellow"},onClick:t[35]||(t[35]=()=>{r.value="yellow",a(s)()})},"yellow"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-khaki",style:{"--bs-btn-color":"black","--bs-btn-bg":"khaki"},onClick:t[36]||(t[36]=()=>{r.value="khaki",a(s)()})},"khaki"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-lime",style:{"--bs-btn-color":"black","--bs-btn-bg":"lime"},onClick:t[37]||(t[37]=()=>{r.value="lime",a(s)()})},"lime"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-green",style:{color:"white","--bs-btn-bg":"green"},onClick:t[38]||(t[38]=()=>{r.value="green",a(s)()})},"Green"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-cyan",style:{"--bs-btn-color":"black","--bs-btn-bg":"cyan"},onClick:t[39]||(t[39]=()=>{r.value="cyan",a(s)()})},"cyan"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-blue",style:{color:"white","--bs-btn-bg":"blue"},onClick:t[40]||(t[40]=()=>{r.value="blue",a(s)()})},"blue"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-steelblue",style:{color:"white","--bs-btn-bg":"steelblue"},onClick:t[41]||(t[41]=()=>{r.value="steelblue",a(s)()})},"steelblue"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-lavender",style:{"--bs-btn-color":"black","--bs-btn-bg":"lavender"},onClick:t[42]||(t[42]=()=>{r.value="lavender",a(s)()})},"lavender"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-indigo",style:{color:"white","--bs-btn-bg":"indigo"},onClick:t[43]||(t[43]=()=>{r.value="indigo",a(s)()})},"indigo"),e("button",{type:"button",class:"btn btn-sm btn-secondary color-purple",style:{color:"white","--bs-btn-bg":"purple"},onClick:t[44]||(t[44]=()=>{r.value="purple",a(s)()})},"purple")])],64))}}),Kt={id:"app"},zt={__name:"practiceSheet",setup(n){return st({meta:[{name:"viewport",content:"width=device-width, user-scalable=no"}]}),(i,s)=>{const k=Nt,v=nt;return z(),D("div",Kt,[K(v,{"fallback-tag":"div",fallback:"Loading comments..."},{default:ot(()=>[K(k)]),_:1})])}}};export{zt as default};
