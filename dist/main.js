(()=>{"use strict";function t(t){const e=document.createElement("p");return e.textContent=t,e}const e=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("main-wrapper");const n=document.createElement("img");return n.src="https://t3.ftcdn.net/jpg/04/78/49/04/360_F_478490472_zDi7fiDEhoShE6xcYw08gIcfLw7fZefo.jpg",n.alt="Restaurant",e.appendChild(t("Best food you'll ever have. (source: trust me)")),e.appendChild(t("Made with passion since yesterday.")),e.appendChild(n),e.appendChild(t("Come visit us or not, do whatever!")),e}())};function n(t,e,n){const a=document.createElement("div");a.classList.add("menu-card");const o=document.createElement("img");o.src=`${t}`,o.alt=`${e}`;const c=document.createElement("h2");c.textContent=e;const d=document.createElement("p");return d.textContent=n,a.appendChild(o),a.appendChild(c),a.appendChild(d),a}function a(){const t=document.createElement("header");t.classList.add("header");const a=document.createElement("h1");return a.textContent="Blaze's Restaurant",t.appendChild(a),t.appendChild(function(){const t=document.createElement("nav"),a=document.createElement("button");a.classList.add("button-nav"),a.textContent="Home",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(o(a),e())}));const c=document.createElement("button");c.classList.add("button-nav"),c.textContent="Menu",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(o(c),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("menu-wrapper"),t.appendChild(n("https://images.unsplash.com/photo-1626074577290-bd33faacc121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80","Dumplings","You're my dumpling.")),t.appendChild(n("https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80","Burgers","Eat me :)")),t.appendChild(n("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80","Pizza","Yummy Pizza!")),t.appendChild(n("https://images.unsplash.com/photo-1633896949673-1eb9d131a9b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=666&q=80","Shawarma","Mmmm, what a delight!")),t.appendChild(n("https://images.unsplash.com/photo-1633436375795-12b3b339712f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80","Steak","Yum yum in my tum tum!")),t.appendChild(n("https://images.unsplash.com/photo-1604259597308-5321e8e4789c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80","Poke Bowl","Super healthy!")),t}())}())}));const d=document.createElement("button");return d.classList.add("button-nav"),d.textContent="Contact",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(o(d),function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact-wrapper");const e=document.createElement("p");e.textContent="📞 1 800 A Real Number";const n=document.createElement("p");n.textContent="🏠 This is a real address";const a=document.createElement("p");a.textContent="Feedback is highly appreciated. Don't worry, your village will not be destroyed.";const o=document.createElement("img");return o.src="https://w0.peakpx.com/wallpaper/602/448/HD-wallpaper-akatsuki-organization-anime.jpg",o.alt="Blaze's Edibles",t.appendChild(e),t.appendChild(n),t.appendChild(a),t.appendChild(o),t}())}())})),t.appendChild(a),t.appendChild(c),t.appendChild(d),t}()),t}function o(t){document.querySelectorAll(".button-nav").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const t=document.getElementById("content");t.appendChild(a()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");return e.textContent=`Copyright © ${(new Date).getFullYear()} Blaze`,t.appendChild(e),t}()),o(document.querySelector(".button-nav")),e()}()})();