import"./hoisted.YWnzczOx.js";import{a as r}from"./axios.B4uVmeYG.js";document.querySelectorAll(".block").forEach(n=>{n.addEventListener("mouseenter",()=>{const a=document.getElementById("detail-image"),t=n.getAttribute("data-image");t&&(a.src=t,a.classList.add("active")),document.querySelectorAll(".additional-info").forEach(i=>i.remove());const o=document.createElement("div");o.classList.add("additional-info");const e=n.getAttribute("data-info");e&&(o.textContent=e),n.insertAdjacentElement("afterend",o),o.style.display="block"}),n.addEventListener("mouseleave",()=>{document.querySelectorAll(".additional-info").forEach(a=>a.remove())}),document.querySelector(".history-button").addEventListener("click",function(){document.getElementById("detailHistory").scrollIntoView({behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",async()=>{const n=document.getElementById("batik-container");async function l(){try{return(await r.get("https://backend-cultik-l0xm2i4e6-kennis-projects-1f9db525.vercel.app/dataMotifBatik")).data.data.data_motif_batik}catch(e){return console.error("Failed to fetch batik data:",e),[]}}const a=await l();if(!Array.isArray(a)){console.error("Invalid data format:",a);return}const t=document.createElement("div");t.id="batik-modal",t.classList.add("modal"),t.innerHTML=`
            <div class="modal-content">
                <span class="close">&times;</span>
                <img id="modal-image" src="" alt="">
                <h3 id="modal-title"></h3>
                <p id="modal-sejarah"></p>
                <p id="modal-makna"></p>
            </div>
        `,document.body.appendChild(t);const o=()=>{t.style.display="none"};t.querySelector(".close").addEventListener("click",o),a.forEach(e=>{const i=document.createElement("div");i.classList.add("col-md-4","mb-4","lg:mb-0","cursor-pointer");const d=document.createElement("div");d.classList.add("card","batik-card","border","border-gray-200","rounded-lg","overflow-hidden","h-full","bg-[#FFFFFF]"),d.dataset.batik=JSON.stringify(e),d.innerHTML=`
            <img src="${e.motif_batik}" class="card-img-top w-full h-72 md:h-64" alt="${e.nama_batik}">
            <div class="p-4 rounded-t-sm">
                <a class="block text-xl text-center font-semibold">${e.nama_batik}</a>
            </div>
        `,d.addEventListener("click",()=>{const c=JSON.parse(d.dataset.batik);document.getElementById("modal-image").src=c.motif_batik,document.getElementById("modal-title").textContent=c.nama_batik,document.getElementById("modal-sejarah").textContent=c.sejarah,document.getElementById("modal-makna").textContent=c.makna_batik,t.style.display="block"}),i.appendChild(d),n.appendChild(i)})});
