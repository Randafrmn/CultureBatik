import"./hoisted.DI2eYI3c.js";import{D as i}from"./data.DBxuf8SY.js";document.querySelectorAll(".block").forEach(e=>{e.addEventListener("mouseenter",()=>{const n=document.getElementById("process-image"),t=document.getElementById("process-image-second"),a=e.getAttribute("data-image-process"),d=e.getAttribute("data-image-process-second");a&&(n.src=a,n.classList.add("active")),d&&(t.src=d,t.classList.add("active")),document.querySelectorAll(".additional-info").forEach(r=>r.remove());const o=document.createElement("div");o.classList.add("additional-info");const s=e.getAttribute("data-info-process"),c=e.getAttribute("data-info-process-second");s&&(o.textContent=s),c&&(o.textContent+=" "+c),e.insertAdjacentElement("afterend",o),o.style.display="block"}),e.addEventListener("mouseleave",()=>{document.querySelectorAll(".additional-info").forEach(n=>n.remove())})});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("alat-container");i.getAll().forEach(t=>{const a=document.createElement("div");a.classList.add("col-md-4","mb-4","md:mb-0");const d=document.createElement("div");d.classList.add("card","batik-card","border","border-gray-200","rounded-lg","overflow-hidden","h-full","bg-[#FFFFFF]"),d.innerHTML=`
            <img src="${t.gambar}" class="card-img-top w-full" alt="${t.nama_alat}">
            <div class="card-body p-4 rounded-t-sm">
                <h3 class="text-xl text-center">${t.nama_alat}</h3>
                <p class="text-sm text-center"><strong>Deskripsi :</strong> ${t.deskripsi}</p>
            </div>
        `,a.appendChild(d),e.appendChild(a)})});