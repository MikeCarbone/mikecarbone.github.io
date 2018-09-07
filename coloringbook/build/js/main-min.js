let paths=document.getElementsByClassName("cycle-js")[0].getElementsByTagName("path"),chosenColor="1074B0";const clearButton=document.getElementById("clear").children[0],eraserButton=document.getElementById("eraser"),backButton=document.getElementById("back"),rightArrow=document.getElementById("right-arrow"),leftArrow=document.getElementById("left-arrow");let priorMoves=[],backCount=0;var slideIndex=1;let colorDisplay=document.getElementById("pickedColor");var grid=document.getElementById("grid"),pageGroup=document.getElementById("pageGroup"),viewAll=document.getElementById("viewAll");let artists;function plusDivs(e){console.log("Adding one"),showDivs(slideIndex+=e),updateCanvas()}function showDivs(e){var t,n=document.getElementsByClassName("cycle-js");for(e>n.length&&(slideIndex=1),e<1&&(slideIndex=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[slideIndex-1].style.display="block",document.getElementById("artistName").innerHTML=artists[slideIndex-1],console.log("SLIDE INDEX: ",slideIndex),console.log(n);let i=slideIndex-1;console.log("Slide index: ",slideIndex),setEventListeners(i)}function showGrid(){slideIndex=1,viewAll.innerHTML="back",pageGroup.style.display="none",grid.style.display="flex"}function hideGrid(e){viewAll.innerHTML="View All Pictures",pageGroup.style.display="block",grid.style.display="none",plusDivs(e-1),priorMoves=[],console.log("new prior: ",priorMoves),console.log(e-1)}function showImage(e){grid.style.display="none",pageGroup.style.display="block",viewAll.innerHTML="View all",showDivs(e)}function initializeButtons(){backButton.addEventListener("click",function(){priorMoves[backCount].el.style.fill=priorMoves[backCount].fill,backCount+=1,updateCanvas()}),eraserButton.addEventListener("click",function(){chosenColor="#FFFFFF",colorDisplay.style.backgroundColor=chosenColor}),clearButton.addEventListener("click",function(){for(const e of paths)"#FFFFFF"==e.getAttribute("fill")&&(e.style.fill="#FFFFFF");updateCanvas(),console.log("Canvas cleared!")}),leftArrow.addEventListener("click",function(){plusDivs(-1)}),rightArrow.addEventListener("click",function(){plusDivs(1)})}function setEventListeners(e){paths=document.getElementsByClassName("cycle-js")[e].getElementsByTagName("path");for(let e of paths)e.style.fill=e.getAttribute("fill"),e.addEventListener("click",function(){"#FFFFFF"==e.getAttribute("fill")?(setUndo(this),this.style.fill=chosenColor,updateCanvas(),backCount=0):console.log("Clicked an outline!")})}function setUndo(e){let t=new Object;t.el=e,t.fill=e.style.fill,priorMoves.push(t),priorMoves.unshift(t),priorMoves[40]&&(priorMoves.length=40)}function instantiateColorCanvases(e,t){let n=document.getElementById(e);new Promise((e,i)=>{var o=document.getElementById(t),l=o.getContext("2d"),d=n.getBoundingClientRect();return o.width=d.width,o.height=d.height,l.drawImage(n,0,0,d.width,d.height),e(o)}).then(function(e){n.style.display="none",e.addEventListener("click",function(t){colorPick(t,e)})},function(e){console.log(e)})}function colorPick(e,t){var n=t.getContext("2d");var i,o,l,d=(o=e,l=(i=t).getBoundingClientRect(),{x:Math.floor((o.clientX-l.left)/(l.right-l.left)*i.width),y:Math.floor((o.clientY-l.top)/(l.bottom-l.top)*i.height)}),s=d.x,c=d.y,a=n.getImageData(s,c,1,1).data,r="#"+("000000"+function(e,t,n){if(e>255||t>255||n>255)throw"Invalid color component";return(e<<16|t<<8|n).toString(16)}(a[0],a[1],a[2])).slice(-6);chosenColor=r,console.log(`Chosen color: ${chosenColor} at X: ${s}, Y: ${c}`),colorDisplay.style.backgroundColor=chosenColor}function updateCanvas(){let e=slideIndex-1;var t,n,i,o;n=document.getElementsByClassName("colorSvg")[0].children[e],i=document.createElement("div"),o=new Image,i.appendChild(n.cloneNode(!0)),t="data:image/svg+xml;base64,"+window.btoa(i.innerHTML),o.src=t,setTimeout(function(){!function(e,t){let n=document.createElement("canvas"),i=n.getContext("2d"),o=e.getBoundingClientRect();document.body.appendChild(n),n.classList.add("canvas-history"),n.setAttribute("viewbox","0 0 "+o.width+" "+o.height),n.setAttribute("width",o.width),n.setAttribute("height",o.height),i.drawImage(t,0,0,o.width,o.height),function(e){let t=document.getElementsByClassName("canvas-history")[0];t&&t.remove();let n=document.getElementById("dl");n.setAttribute("href",""),n.href=document.getElementsByClassName("canvas-history")[0].toDataURL("image/png")}()}(n,o)},100)}artists=["Christina An","Stephen Brennan","John Davalos","Angela Filtz","Travis Hove","Maxime Lewing","Fiona Lynch","Sara Meixner","Elijah Rizzuto Smith","Julia Schultz","Ben Spurr","Anthony Srnka","Clay Tercek","Michael Toone","Ciaran Wagner","Lindsey Wolfe"],showDivs(slideIndex),viewAll.addEventListener("click",showGrid),thumb1.addEventListener("click",function(){hideGrid(1)}),thumb2.addEventListener("click",function(){hideGrid(2)}),thumb3.addEventListener("click",function(){hideGrid(3)}),thumb4.addEventListener("click",function(){hideGrid(4)}),thumb5.addEventListener("click",function(){hideGrid(5)}),thumb6.addEventListener("click",function(){hideGrid(6)}),thumb7.addEventListener("click",function(){hideGrid(7)}),thumb8.addEventListener("click",function(){hideGrid(8)}),thumb9.addEventListener("click",function(){hideGrid(9)}),thumb10.addEventListener("click",function(){hideGrid(10)}),thumb11.addEventListener("click",function(){hideGrid(11)}),thumb12.addEventListener("click",function(){hideGrid(12)}),thumb13.addEventListener("click",function(){hideGrid(13)}),thumb14.addEventListener("click",function(){hideGrid(14)}),thumb15.addEventListener("click",function(){hideGrid(15)}),thumb16.addEventListener("click",function(){hideGrid(16)}),window.addEventListener("load",function(){updateCanvas(),instantiateColorCanvases("colorWheelImg","color-wheel-canvas"),instantiateColorCanvases("colorWheelImg2","mobile-color-wheel-canvas"),initializeButtons(),console.log("All page content loaded")});