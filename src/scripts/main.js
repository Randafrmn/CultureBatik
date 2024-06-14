import { DataBatiks } from '../data/data';

document.addEventListener('DOMContentLoaded', () => {
    const batikContainer = document.getElementById('batik-container');
    const batiks = DataBatiks.getAll();

      // Create modal element
    const modal = document.createElement("div");
    modal.id = "batik-modal";
    modal.classList.add("modal");
    modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img id="modal-image" src="" alt="">
                <h3 id="modal-title"></h3>
                <p id="modal-sejarah"></p>
                <p id="modal-makna"></p>
            </div>
        `;
    document.body.appendChild(modal);

    const closeModal = () => {
        modal.style.display = "none";
    };

    modal.querySelector(".close").addEventListener("click", closeModal);

    batiks.forEach(batik => {
        const batikCol = document.createElement('div');
        batikCol.classList.add('col-md-4', 'mb-4', 'md:mb-0', 'cursor-pointer');

        const batikCard = document.createElement('div');
        batikCard.classList.add('card', 'batik-card', 'border', 'border-gray-200', 'rounded-lg', 'overflow-hidden', 'h-full', 'bg-[#FFFFFF]');
        batikCard.dataset.batik = JSON.stringify(batik); // Store batik data in dataset

        batikCard.innerHTML = `
            <img src="${batik.motif_batik}" class="card-img-top w-full h-64" alt="${batik.nama_batik}">
            <div class="p-4 rounded-t-sm">
                <a class="block text-xl text-center font-semibold">${batik.nama_batik}</a>
            </div>
        `;

        // Add click event listener to show modal with batik details
        batikCard.addEventListener("click", () => {
            const batikData = JSON.parse(batikCard.dataset.batik);
            document.getElementById("modal-image").src = batikData.motif_batik;
            document.getElementById("modal-title").textContent = batikData.nama_batik;
            document.getElementById("modal-sejarah").textContent = batikData.sejarah;
            document.getElementById("modal-makna").textContent = batikData.makna_batik;
            modal.style.display = "block";
        });

        batikCol.appendChild(batikCard);
        batikContainer.appendChild(batikCol);
    });

});
