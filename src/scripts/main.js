import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", async () => {
  AOS.init();

  const batikContainer = document.getElementById("batik-container");

  async function fetchBatikData() {
    try {
      const response = await axios.get(
        "https://backend-cultik-l0xm2i4e6-kennis-projects-1f9db525.vercel.app/dataMotifBatik",
      );
      return response.data.data.data_motif_batik;
    } catch (error) {
      console.error("Failed to fetch batik data:", error);
      return [];
    }
  }

  const batiks = await fetchBatikData();
  if (!Array.isArray(batiks)) {
    console.error("Invalid data format:", batiks);
    return;
  }

  const modal = document.createElement("div");
  modal.id = "batik-modal";
  modal.classList.add("modal");
  modal.innerHTML = `
            <div class="modal-content bg-white dark:bg-[#5C3D2E] dark:border-[#543310] dark:text-white">
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

  batiks.forEach((batik) => {
    const batikCol = document.createElement("div");
    batikCol.classList.add("col-md-4", "mb-4", "lg:mb-0", "cursor-pointer");
    batikCol.setAttribute("data-aos", "fade-right");
    batikCol.setAttribute("data-aos-duration", "1000");
    batikCol.setAttribute("data-aos-anchor-placement", "top-bottom");
    batikCol.setAttribute("data-aos-easing", "ease-in-out");

    const batikCard = document.createElement("div");
    batikCard.classList.add(
      "card",
      "batik-card",
      "border",
      "border-gray-200",
      "dark:border-[#715335]",
      "rounded-3xl",
      "overflow-hidden",
      "h-full",
      "bg-[#FFFFFF]",
      "dark:bg-neutral-800",
      "hover:scale-105",
      "transition-transform",
      "duration-300",
    );
    batikCard.dataset.batik = JSON.stringify(batik);

    batikCard.innerHTML = `
            <img src="${batik.motif_batik}" class="card-img-top w-full h-72 md:h-64" alt="${batik.nama_batik}">
            <div class="description-body p-4 rounded-t-sm bg-white dark:bg-[#5C3D2E] dark:text-white">
                <a class="block text-xl text-center font-semibold font-serif">${batik.nama_batik}</a>
            </div>
        `;

    // Add click event listener to show modal with batik details
    batikCard.addEventListener("click", () => {
      const batikData = JSON.parse(batikCard.dataset.batik);
      document.getElementById("modal-image").src = batikData.motif_batik;
      document.getElementById("modal-title").textContent = batikData.nama_batik;
      document.getElementById("modal-sejarah").textContent = batikData.sejarah;
      document.getElementById("modal-makna").textContent =
        batikData.makna_batik;
      modal.style.display = "block";
    });

    batikCol.appendChild(batikCard);
    batikContainer.appendChild(batikCol);
  });
});
