/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../astro_DCcO7XBL.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$BaseLayout } from './_id__B6sHkzv_.mjs';
import 'clsx';
/* empty css                          */
import 'flowbite';

const $$Fact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-6 my-11 md:mt-24"> <div class="grid  grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 mx-auto"> <div class="flex flex-col mx-auto items-center justify-start text-center w-2/3 lg:w-3/4"> <h1 class="text-lg md:text-2xl mb-3">Warisan Budaya</h1> <p class="text-base lg:text-lg mt-1 mb-7 flex-grow">Batik Indonesia diakui oleh UNESCO sebagai Warisan Budaya Takbenda pada 2 Oktober 2009. Pengakuan ini menunjukkan betapa pentingnya batik sebagai bagian dari identitas dan kebudayaan Indonesia.</p> <div class="flex items-center gap-4"> <a href="#detailHistory">Read More</a> <a class="teenyicons--arrow-right-solid" href="#detailHistory"></a> </div> </div> <div class="flex flex-col mx-auto items-center justify-start text-center w-2/3 lg:w-3/4"> <h1 class="text-lg md:text-2xl mb-3">Teknik Pembuatan</h1> <p class="text-base lg:text-lg mt-1 mb-7 flex-grow">Batik dibuat dengan teknik yang unik, yaitu dengan menutupi kain menggunakan lilin panas. Pola batik dibuat dengan menggambar lilin panas di atas kain, yang kemudian dicelupkan ke dalam pewarna.</p> <div class="flex items-center gap-4"> <a href="/proses">Read More</a> <a class="teenyicons--arrow-right-solid" href="/proses"></a> </div> </div> <div class="flex flex-col mx-auto items-center justify-start text-center w-2/3 lg:w-3/4"> <h1 class="text-lg md:text-2xl mb-3">Simbolis</h1> <p class="text-base lg:text-lg mt-1 mb-7 flex-grow">Batik memiliki beragam pola dan motif, masing-masing dengan makna simbolis dan filosofi tersendiri. Setiap daerah di Indonesia memiliki motif batik yang khas.</p> <div class="flex items-center gap-4"> <a href="/daerah">Read More</a> <a class="teenyicons--arrow-right-solid" href="/daerah"></a> </div> </div> </div> </div>`;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/components/Fact.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div class="container mx-auto relative"> <img class="w-full object-cover hero" src="/img/herofix.jpeg" alt="Batik"> <div class="absolute inset-0 flex flex-col items-left justify-center text-white md:ml-6 p-12 sm:p-12 md:p-12 hero-container"> <h2 class="hero-title md:text-4xl font-bold md:mb-4 text-[#F4F0EC]">The Art of Batik</h2> <p class="hero-subtitle text-lg mb-4 md:w-1/2">Discover the intricate patterns and rich history of <span class="text-[#CDA274] md:text-xl md:font-bold font-serif">Indonesian Batik</span><span class="text-white">, </span><span class="md:block md:leading-loose">a cultural heritage that weaves tradition and art.</span></p> <button class="bg-[#292F36] hover:bg-[#CDA274] transition duration-300 ease-in-out text-white font-bold py-2 px-4 md:rounded-2xl rounded-md w-28 h-8 md:w-44 md:h-14 hero-button">
Let's Go!
</button> </div> </div> <script>
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.hero-button');

    button.addEventListener('click', function() {
        const factPage = document.getElementById('historyPage');
        factPage.scrollIntoView({ behavior: 'smooth' });
    });
});
<\/script>`])), maybeRenderHead());
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/components/Hero.astro", void 0);

const $$MotifBatik = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto p-6 mt-20 md:mt-28 mb-12 bg-[#F4F0EC] rounded-3xl"> <h2 class="text-center text-3xl md:text-4xl font-bold pt-10 pb-6">Macam Motif Batik</h2> <p class="text-center text-base md:text-lg">Menapaki Jejak Sejarah dan Makna Mendalam di Balik Ragam Motif Batik Indonesia <span class="md:block md:leading-loose"> yang Kaya Akan Budaya dan Kearifan Lokal</span></p> <div id="batik-container" class="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-4 mx-auto"></div> </div> `;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/components/MotifBatik.astro", void 0);

const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-6 "> <h2 class="text-center text-4xl font-bold md:pt-10 md:pb-6">Galeri Batik</h2> <div id="default-carousel" class="relative w-full" data-carousel="slide"> <div class="relative h-96 overflow-hidden rounded-xl md:h-96"> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="/img/Carousel1.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="/img/Carousel2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="/img/Carousel3.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="/img/Carousel2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img src="/img/Carousel2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> </div> </div> <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"> <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button> <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button> <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button> <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button> <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button> </div> <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"> <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path> </svg> <span class="sr-only">Previous</span> </span> </button> <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"> <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="sr-only">Next</span> </span> </button> </div> </div>`;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/components/Carousel.astro", void 0);

const $$AccordionCommunity = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-6 py-14 my-0 md:my-28 bg-[#F4F0EC] rounded-3xl"> <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6"> <div class="mb-6 md:mb-0"> <h2 class="font-bold text-4xl lg:text-7xl mb-4">Cultik Community</h2> <p class="mb-4 text-sm md:text-lg">Komunitas Cultik adalah sebuah platform dinamis yang menghubungkan individu-individu dengan minat dan gairah yang sama dalam bidang budaya, seni, dan kreativitas.</p> </div> <div id="accordion-collapse" data-accordion="collapse"> <!-- Accordion Item 1 --> <h2 id="accordion-collapse-heading-1"> <button type="button" class="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-black border border-b-0 rounded-t-xl  dark:text-gray-400 bg-[#FFFFFF] hover:bg-[#F3F4F6] gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1"> <span class="text-[#292F36]">Tentang Komunitas Kami</span> <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path> </svg> </button> </h2> <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1"> <div class="p-4 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"> <p class="accordion-subtitle mb-2 text-gray-500 dark:text-gray-400">
Misi kami adalah membangun komunitas yang inklusif dan mendukung, di mana setiap anggotanya dapat berkembang dan berkontribusi dalam bidang yang mereka cintai.
</p> <p class="accordion-subtitle text-gray-500 dark:text-gray-400">
Visi kami adalah menjadi pusat kreativitas yang memupuk inovasi dan kolaborasi dalam budaya dan seni.
</p> </div> </div> <!-- Accordion Item 2 --> <h2 id="accordion-collapse-heading-2"> <button type="button" class="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-black border border-b-0 dark:text-gray-400 bg-[#FFFFFF] hover:bg-[#F3F4F6] gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2"> <span class="text-[#292F36]">Acara dan Kegiatan</span> <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path> </svg> </button> </h2> <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2"> <div class="p-4 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"> <p class="accordion-subtitle mb-2 text-gray-500 dark:text-gray-400">
Kami mengadakan berbagai workshop seni dan budaya yang dipimpin oleh para ahli di bidangnya. Dari seni lukis hingga tari tradisional, ada sesuatu untuk semua orang.
</p> </div> </div> <!-- Accordion Item 3 --> <h2 id="accordion-collapse-heading-3"> <button type="button" class="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-black border border-b-0 dark:text-gray-400 bg-[#FFFFFF] hover:bg-[#F3F4F6] gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3"> <span class="text-[#292F36]">Kolaborasi dan Proyek</span> <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path> </svg> </button> </h2> <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3"> <div class="p-4 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"> <p class="accordion-subtitle text-gray-500 dark:text-gray-400">
Kami mendukung kolaborasi antar anggota komunitas untuk membangun proyek yang berdampak positif di masyarakat.
</p> <p class="accordion-subtitle text-gray-500 dark:text-gray-400">
Partisipasi dalam inisiatif sosial yang bertujuan untuk menggunakan seni dan budaya sebagai alat perubahan sosial.
</p> </div> </div> <!-- Accordion Item 4 --> <h2 id="accordion-collapse-heading-4"> <button type="button" class="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-black border border-b-0 dark:text-gray-400 bg-[#FFFFFF] hover:bg-[#F3F4F6] gap-3" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4"> <span class="text-[#292F36]">Keanggotaan dan Manfaat</span> <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path> </svg> </button> </h2> <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4"> <div class="p-4 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"> <p class="accordion-subtitle mb-2 text-gray-500 dark:text-gray-400">
Dapatkan akses eksklusif ke acara dan workshop kami dengan menjadi anggota Komunitas Cultik.
</p> <p class="accordion-subtitle text-gray-500 dark:text-gray-400">
Perluas jaringan Anda dengan bertemu dan berkolaborasi dengan sesama pecinta budaya dan seni dari berbagai latar belakang.
</p> </div> </div> <!-- Accordion Item 5 --> <h2 id="accordion-collapse-heading-5"> <button type="button" class="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-black border border-b-0 dark:text-gray-400 bg-[#FFFFFF] hover:bg-[#F3F4F6] gap-3" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5"> <span class="text-[#292F36]">Kontak dan Dukungan</span> <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path> </svg> </button> </h2> <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-5"> <div class="p-4 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"> <p class="accordion-subtitle mb-2 text-gray-500 dark:text-gray-400">
Jika Anda memiliki pertanyaan atau ingin berpartisipasi dalam acara kami, jangan ragu untuk menghubungi kami.
</p> <p class="accordion-subtitle text-gray-500 dark:text-gray-400">
Dukung Komunitas Cultik dengan berdonasi atau menjadi sponsor untuk membantu kami terus mengadakan acara dan kegiatan yang bermanfaat.
</p> <p class="accordion-subtitle text-gray-500 dark:text-gray-400">
Ikuti kami di media sosial untuk mendapatkan update terbaru tentang acara dan kegiatan kami.
</p> </div> </div> </div> </div> </div>`;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/components/AccordionCommunity.astro", void 0);

const $$Modal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/components/Modal.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Fact", $$Fact, {})} ${maybeRenderHead()}<div id="historyPage" class="container mx-auto px-6 py-8 md:my-28 bg-[#F4F0EC] rounded-3xl"> <div class="flex flex-col lg:flex-row items-center justify-between"> <div class="lg:w-6/12 mb-6 md:mb-0"> <h2 class="font-bold text-5xl md:text-7xl mb-4">Sejarah <br> Singkat Batik</h2> <p class="text-base mb-4 md:text-lg">Batik adalah salah satu warisan budaya Indonesia yang paling terkenal di dunia. Kata "batik" berasal dari bahasa Jawa, yaitu "amba" yang berarti menulis dan "titik" yang berarti titik. Batik merujuk pada teknik pembuatan kain dengan menggunakan malam (lilin) untuk melindungi bagian-bagian tertentu dari kain saat dicelup ke dalam pewarna.</p> <button type="button" class="bg-[#292F36] hover:bg-[#CDA274] transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded-xl w-32 h-11 history-button">Read More</button> </div> <div class="lg:w-5/12 mt-8 lg:mt-0 flex justify-end"> <img src="/img/TesItemBatik.png" class="sectionPicture1" alt=""> </div> </div> </div> <div id="detailHistory" class="container mx-auto px-6 my-24 md:my-28"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="relative"> <img id="detail-image" class="detail-image md:w-5/12 rounded-3xl object-cover" src="/img/Carousel1.png" alt="Detail Image"> </div> <div class="list-group"> <a class="block py-3 px-5 hover:bg-gray-100 transition duration-300 ease-in-out rounded-lg shadow-md border border-gray-200 cursor-pointer" data-target="detail-1" data-image="/img/Carousel1.png" data-info="Perkembangan awal batik merupakan bagian penting dalam sejarah batik, menandai awal dari keberadaannya sebagai warisan budaya yang kaya dan berharga. Pada awalnya, batik telah menjadi bagian integral dari kehidupan masyarakat di berbagai daerah di Indonesia.">01. Perkembangan Awal</a> <a class="block py-3 px-5 hover:bg-gray-100 transition duration-300 ease-in-out rounded-lg shadow-md border border-gray-200 cursor-pointer" data-target="detail-2" data-image="/img/Carousel2.png" data-info="Pada masa kolonial, batik mengalami perubahan signifikan. Kolonial Belanda membawa pengaruh besar dalam teknik dan motif batik. Batik Belanda, atau yang dikenal sebagai batik Belanda (Batik Belanda), mulai bermunculan dengan motif yang lebih bervariasi, menggabungkan elemen-elemen budaya Eropa dengan keindahan tradisional batik Indonesia.">02. Masa Kolonial</a> <a class="block py-3 px-5 hover:bg-gray-100 transition duration-300 ease-in-out rounded-lg shadow-md border border-gray-200 cursor-pointer" data-target="detail-3" data-image="/img/Carousel3.png" data-info="Batik Pekalongan memiliki tempat istimewa dalam sejarah batik Indonesia. Terkenal dengan motif-motifnya yang kaya warna dan inovatif, batik Pekalongan menjadi pusat kreativitas dan eksperimen. Pengrajin batik Pekalongan tidak hanya menggunakan teknik tradisional, tetapi juga terus berinovasi dengan warna dan desain baru yang menarik perhatian pasar lokal dan internasional.">03. Batik Pekalongan</a> <a class="block py-3 px-5 hover:bg-gray-100 transition duration-300 ease-in-out rounded-lg shadow-md border border-gray-200 cursor-pointer" data-target="detail-4" data-image="/img/Carousel1.png" data-info="Era modernisasi membawa batik ke panggung dunia. Pada tahun 2009, UNESCO mengakui batik sebagai Warisan Budaya Takbenda Manusia, mengukuhkan posisinya sebagai simbol identitas dan kebanggaan nasional Indonesia. Pengakuan ini mendorong inovasi dan adaptasi lebih lanjut dalam industri batik, dengan desainer kontemporer menggabungkan motif batik dalam koleksi fashion modern mereka.">04. Modernisasi dan Pengakuan Dunia</a> <a class="block py-3 px-5 hover:bg-gray-100 transition duration-300 ease-in-out rounded-lg shadow-md border border-gray-200 cursor-pointer" data-target="detail-5" data-image="/img/Carousel2.png" data-info="Batik kontemporer adalah bukti kemampuan seni ini untuk terus berkembang dan beradaptasi dengan zaman. Desainer muda dan seniman modern menggabungkan teknik batik tradisional dengan ide-ide dan teknologi baru, menciptakan karya yang segar dan inovatif. Batik kontemporer sering kali memadukan motif klasik dengan gaya urban dan modern, membuatnya populer di kalangan generasi muda.">05. Batik Kontemporer</a> </div> </div> </div> ${renderComponent($$result2, "MotifBatik", $$MotifBatik, {})} ${renderComponent($$result2, "Carousel", $$Carousel, {})} ${renderComponent($$result2, "AccordionCommunity", $$AccordionCommunity, {})} <div class="container mx-auto p-6"> <div class="flex justify-center items-center mt-16 md:my-24"> <div class="flex flex-col justify-center items-center bg-[#292F36] md:w-3/4 h-52 md:h-60 gap-4 p-4 md:p-6 rounded-3xl"> <h1 class="text-lg text-center md:text-3xl text-white font-display">Gabung Komunitas Cultik?</h1> <p class="text-sm text-center md:text-lg text-white font-display">Temukan Manfaat Bergabung dengan Komunitas Cultik</p> <a href="#" class="bg-[#CDA274] hover:bg-[#ffffff] transition duration-300 ease-in-out text-white hover:text-black font-bold py-2 px-4 rounded-md md:rounded-xl w-28 h-8 md:w-32 md:h-11 mt-4 md:mt-0 flex items-center justify-center font-sans">Join Us</a> </div> </div> </div> ${renderComponent($$result2, "Modal", $$Modal, {})} ` })} `;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/pages/index.astro", void 0);

const $$file = "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
