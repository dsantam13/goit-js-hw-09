!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body"),a=document.createElement("div");n.append(a),a.append(e,t),a.style.display="flex",a.style.justifyContent="center",a.style.alignItems="center",e.style.marginRight="10px",document.querySelectorAll("button").forEach((function(e){e.style.padding="10px 20px"}));var d=null;t.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,d=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,clearInterval(d)}))}();
//# sourceMappingURL=01-color-switcher.fafa45f1.js.map
