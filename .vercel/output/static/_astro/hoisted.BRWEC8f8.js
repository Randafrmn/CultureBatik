import"./hoisted.DI2eYI3c.js";import{a as c}from"./data.DBxuf8SY.js";document.querySelectorAll(".block").forEach(e=>{e.addEventListener("mouseenter",()=>{const a=document.getElementById("detail-image"),t=e.getAttribute("data-image");t&&(a.src=t,a.classList.add("active")),document.querySelectorAll(".additional-info").forEach(i=>i.remove());const n=document.createElement("div");n.classList.add("additional-info");const d=e.getAttribute("data-info");d&&(n.textContent=d),e.insertAdjacentElement("afterend",n),n.style.display="block"}),e.addEventListener("mouseleave",()=>{document.querySelectorAll(".additional-info").forEach(a=>a.remove())})});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".hero-button").addEventListener("click",function(){document.getElementById("historyPage").scrollIntoView({behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("batik-container"),a=c.getAll(),t=document.createElement("div");t.id="batik-modal",t.classList.add("modal"),t.innerHTML=`
            <div class="modal-content">
                <span class="close">&times;</span>
                <img id="modal-image" src="" alt="">
                <h3 id="modal-title"></h3>
                <p id="modal-sejarah"></p>
                <p id="modal-makna"></p>
            </div>
        `,document.body.appendChild(t);const n=()=>{t.style.display="none"};t.querySelector(".close").addEventListener("click",n),a.forEach(d=>{const i=document.createElement("div");i.classList.add("col-md-4","mb-4","md:mb-0","cursor-pointer");const o=document.createElement("div");o.classList.add("card","batik-card","border","border-gray-200","rounded-lg","overflow-hidden","h-full","bg-[#FFFFFF]"),o.dataset.batik=JSON.stringify(d),o.innerHTML=`
            <img src="${d.motif_batik}" class="card-img-top w-full h-72 md:h-64" alt="${d.nama_batik}">
            <div class="p-4 rounded-t-sm">
                <a class="block text-xl text-center font-semibold">${d.nama_batik}</a>
            </div>
        `,o.addEventListener("click",()=>{const l=JSON.parse(o.dataset.batik);document.getElementById("modal-image").src=l.motif_batik,document.getElementById("modal-title").textContent=l.nama_batik,document.getElementById("modal-sejarah").textContent=l.sejarah,document.getElementById("modal-makna").textContent=l.makna_batik,t.style.display="block"}),i.appendChild(o),e.appendChild(i)})});
