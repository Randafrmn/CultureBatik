import { DataAlat } from '../data/data';

document.addEventListener('DOMContentLoaded', () => {
    const alatContainer = document.getElementById('alat-container');
    const alatbatiks = DataAlat.getAll();

    alatbatiks.forEach(alat => {
        const alatbatikCol = document.createElement('div');
        alatbatikCol.classList.add('col-md-4', 'mb-4', 'md:mb-0');

        const alatbatikCard = document.createElement('div');
        alatbatikCard.classList.add('card', 'batik-card', 'border', 'border-gray-200', 'rounded-lg', 'overflow-hidden', 'h-full', 'bg-[#FFFFFF]');

        alatbatikCard.innerHTML = `
            <img src="${alat.gambar}" class="card-img-top w-full" alt="${alat.nama_alat}">
            <div class="card-body p-4 rounded-t-sm">
                <h3 class="text-xl text-center">${alat.nama_alat}</h3>
                <p class="text-sm text-center"><strong>Deskripsi :</strong> ${alat.deskripsi}</p>
            </div>
        `;

        alatbatikCol.appendChild(alatbatikCard);
        alatContainer.appendChild(alatbatikCol);
    });
});