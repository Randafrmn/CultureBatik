import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

document.addEventListener('DOMContentLoaded', async () => {
    AOS.init();

    const alatContainer = document.getElementById('alat-container');

    // Fungsi untuk mengambil data alat dari API pakai Axios
    async function fetchAlatData() {
        try {
        const response = await axios.get('https://backend-cultik-l0xm2i4e6-kennis-projects-1f9db525.vercel.app/alatBatik');
        return response.data.data.data_alat_batik;
        } catch (error) {
        console.error('Failed to fetch batik data:', error);
        return [];
        }
    }

    const alatbatiks = await fetchAlatData();
    if (!Array.isArray(alatbatiks)) {
        console.error('Invalid data format:', alatbatiks);
        return;
    }

    alatbatiks.forEach(alat => {
        const alatbatikCol = document.createElement('div');
        alatbatikCol.classList.add('col-md-4', 'mb-4', 'md:mb-0');
        alatbatikCol.setAttribute('data-aos', 'fade-right');
        alatbatikCol.setAttribute('data-aos-duration', '1000');
        alatbatikCol.setAttribute('data-aos-anchor-placement', 'top-bottom');
        alatbatikCol.setAttribute('data-aos-easing', 'ease-in-out');  

        const alatbatikCard = document.createElement('div');
        alatbatikCard.classList.add('card', 'batik-card', 'border', 'border-gray-200', 'rounded-lg', 'overflow-hidden', 'h-full', 'bg-[#FFFFFF]');

        alatbatikCard.innerHTML = `
            <img src="${alat.gambar}" class="card-img-top w-full h-96 object-cover" alt="${alat.nama_alat}">
            <div class="card-body p-4 rounded-t-sm">
                <h3 class="text-xl text-center">${alat.nama_alat}</h3>
                <p class="text-sm text-center">${alat.deskripsi}</p>
            </div>
        `;

        alatbatikCol.appendChild(alatbatikCard);
        alatContainer.appendChild(alatbatikCol);
    });
});