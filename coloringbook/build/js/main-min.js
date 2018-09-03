let paths=document.getElementsByClassName("cycle-js")[0].getElementsByTagName("path"),chosenColor="1074B0";const clearButton=document.getElementById("clear").children[0],eraserButton=document.getElementById("eraser"),backButton=document.getElementById("back"),rightArrow=document.getElementById("right-arrow"),leftArrow=document.getElementById("left-arrow");let priorMoves=[],backCount=0;var slideIndex=1;let artists,colorDisplay=document.getElementById("pickedColor");function plusDivs(e){console.log("plus divs added"),showDivs(slideIndex+=e),updateCanvas()}function showDivs(e){var t,n=document.getElementsByClassName("cycle-js");for(e>n.length&&(slideIndex=1),e<1&&(slideIndex=n.length),t=0;t<n.length;t++)n[t].style.display="none";n[slideIndex-1].style.display="block",document.getElementById("artistName").innerHTML=artists[slideIndex-1],setEventListeners(slideIndex-1)}function initializeButtons(){backButton.addEventListener("click",function(){console.log("Undoing..."),priorMoves[backCount].el.style.fill=priorMoves[backCount].fill,backCount+=1,updateCanvas()}),eraserButton.addEventListener("click",function(){chosenColor="#FFFFFF",colorDisplay.style.backgroundColor=chosenColor}),clearButton.addEventListener("click",function(){for(const e of paths)"#FFFFFF"==e.getAttribute("fill")&&(e.style.fill="#FFFFFF");updateCanvas(),console.log("Canvas cleared!")}),leftArrow.addEventListener("click",function(){plusDivs(-1)}),rightArrow.addEventListener("click",function(){plusDivs(1)})}function setEventListeners(e){paths=document.getElementsByClassName("cycle-js")[e].getElementsByTagName("path");for(let e of paths)e.addEventListener("click",function(){"#FFFFFF"==e.getAttribute("fill")?(setUndo(this),this.style.fill=chosenColor,updateCanvas(),backCount=0):console.log("Clicked an outline!")})}function setUndo(e){let t=new Object;t.el=e,t.fill=e.style.fill,priorMoves.push(t),priorMoves.unshift(t),priorMoves[40]&&(priorMoves.length=40)}function instantiateColorCanvases(e,t){let n=document.getElementById(e);new Promise((e,o)=>{var l=document.getElementById(t),i=l.getContext("2d"),a=n.getBoundingClientRect();return l.width=a.width,l.height=a.height,i.drawImage(n,0,0,a.width,a.height),e(l)}).then(function(e){n.style.display="none",e.addEventListener("click",function(t){colorPick(t,e)})},function(e){console.log(e)})}function colorPick(e,t){var n=t.getContext("2d");var o,l,i,a=(l=e,i=(o=t).getBoundingClientRect(),{x:Math.floor((l.clientX-i.left)/(i.right-i.left)*o.width),y:Math.floor((l.clientY-i.top)/(i.bottom-i.top)*o.height)}),s=a.x,c=a.y,r=n.getImageData(s,c,1,1).data,d="#"+("000000"+function(e,t,n){if(e>255||t>255||n>255)throw"Invalid color component";return(e<<16|t<<8|n).toString(16)}(r[0],r[1],r[2])).slice(-6);chosenColor=d,console.log(`Chosen color: ${chosenColor} at X: ${s}, Y: ${c}`),colorDisplay.style.backgroundColor=chosenColor}function updateCanvas(){let e=slideIndex-1;var t,n,o,l;n=document.getElementsByClassName("colorSvg")[0].children[e],o=document.createElement("div"),l=new Image,o.appendChild(n.cloneNode(!0)),t="data:image/svg+xml;base64,"+window.btoa(o.innerHTML),l.src=t,setTimeout(function(){!function(e,t){let n=document.createElement("canvas"),o=n.getContext("2d"),l=e.getBoundingClientRect();document.body.appendChild(n),n.classList.add("canvas-history"),n.setAttribute("viewbox","0 0 "+l.width+" "+l.height),n.setAttribute("width",l.width),n.setAttribute("height",l.height),o.drawImage(t,0,0,l.width,l.height),function(e){let t=document.getElementsByClassName("canvas-history")[0];t&&t.remove();let n=document.getElementById("dl");n.setAttribute("href",""),n.href=document.getElementsByClassName("canvas-history")[0].toDataURL("image/png")}()}(n,l)},100)}artists=["Christina An","Stephen Brennan","John Davalos","Angela Filtz","Travis Hove","Maxime Lewing","Fiona Lynch","Sara Meixner","Elijah Rizzuto Smith","Julia Schultz","Ben Spurr","Anthony Srnka","Clay Tercek","Michael Toone","Ciaran Wagner","Lindsey Wolfe"],showDivs(slideIndex),window.addEventListener("load",function(){updateCanvas(),instantiateColorCanvases("colorWheelImg","color-wheel-canvas"),instantiateColorCanvases("colorWheelImg2","mobile-color-wheel-canvas"),initializeButtons(),console.log("All page content loaded")});