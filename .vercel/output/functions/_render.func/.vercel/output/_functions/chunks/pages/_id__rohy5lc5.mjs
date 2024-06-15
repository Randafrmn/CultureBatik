/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, e as renderSlot, f as renderHead, g as addAttribute, h as createAstro } from '../astro_DCcO7XBL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'flowbite';
/* empty css                          */

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 w-full bg-[#F4F0EC] text-sm py-4 dark:bg-neutral-800 shadow-md"> <nav class="max-w-[85rem] w-full mx-auto px-6 sm:flex sm:items-center sm:justify-between" aria-label="Global"> <div class="flex items-center justify-between"> <a class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white" href="/"> <img class="w-10 h-auto" src="/img/LogoCultik.png" alt="Logo">
Cultik
</a> <div class="sm:hidden"> <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10" data-hs-collapse="#navbar-image-and-text-2" aria-controls="navbar-image-and-text-2" aria-label="Toggle navigation"> <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg> <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> <div id="navbar-image-and-text-2" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"> <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5"> <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/" aria-current="page">Home</a> <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/proses">Proses Pembuatan</a> <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/daerah">Daerah Batik</a> <a class="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/about">Tentang Kami</a> </div> </div> </nav> </header> `;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-[#292F36] dark:bg-[#292F36]"> <div class="container mx-auto px-6 mt-16 "> <div class="mx-auto w-full max-w-screen-xl py-6 lg:py-8"> <div class="md:flex md:justify-between"> <div class="mb-6 md:mb-0"> <a href="https://flowbite.com/" class="flex items-center"> <img src="/img/LogoCultik.png" class="h-8 me-3" alt="FlowBite Logo"> <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Cultik</span> </a> </div> <div class="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3"> <div> <h2 class="mb-6 text-sm font-semibold uppercase text-white">Features</h2> <ul class="text-gray-400 font-medium"> <li class="mb-4"> <a href="/" class="hover:underline">Home</a> </li> <li class="mb-4"> <a href="/proses" class="hover:underline">Proses Pembuatan</a> </li> <li class="mb-4"> <a href="/daerah" class="hover:underline">Daerah Batik</a> </li> <li> <a href="/daerah" class="hover:underline">Tentang Cultik</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibol uppercase text-white">Join us</h2> <ul class="text-gray-400 font-medium"> <li class="mb-4"> <a href="https://www.facebook.com/" class="hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a> </li> <li> <a href="https://discord.gg/" class="hover:underline" target="_blank" rel="noopener noreferrer">Discord</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold uppercase text-white">Legal</h2> <ul class="text-gray-400 font-medium"> <li class="mb-4"> <a href="#" class="hover:underline">Privacy Policy</a> </li> <li> <a href="#" class="hover:underline">Terms &amp; Conditions</a> </li> </ul> </div> </div> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"> <span class="text-sm sm:text-center text-gray-400">© 2024 <a href="/" class="hover:underline">Culture Batik</a>. All Rights Reserved.
</span> <div class="flex mt-4 sm:justify-center sm:mt-0"> <a href="https://www.facebook.com/" class="text-gray-500 hover:text-white" target="_blank" rel="noopener noreferrer"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19"> <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">Facebook page</span> </a> <a href="https://discord.gg/" class="text-gray-500 hover:text-white ms-5" target="_blank" rel="noopener noreferrer"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16"> <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path> </svg> <span class="sr-only">Discord community</span> </a> </div> </div> </div> </div> </footer>`;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const pageTitle = "Culture Batik";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', '><link rel="apple-touch-icon" href="/icons/icon192x192.png"><link rel="icon" href="/icons/faviconDark.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet"><title>', "</title>", "</head> <body> ", " ", " ", ' <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script> </body> </html> '])), addAttribute(Astro2.generator, "content"), pageTitle, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/layouts/BaseLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$HeroPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeroPage;
  const { title } = Astro2.props;
  const { description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto"> <div class="container mx-auto"> <div class="relative flex flex-col justify-end items-center"> <img class="hero-image w-full object-cover" src="/img/Carousel3.png" alt=""> <div class="title-page absolute rounded-t-3xl bg-[#FFFFFF] w-72 h-24"> <h1 class="text-[#292F36] text-center font-display text-2xl font-bold mt-4">${title}</h1> <p class="text-[#292F36] text-center text-sm mt-2">${description}</p> </div> </div> </div></div>`;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/components/HeroPage.astro", void 0);

const daerahData = [
  {
    _id: { $oid: "666004a5f259298350a4889b" },
    nama_daerah: "Cirebon",
    alamat: "Jl. Pekiringan No.60, Kota Cirebon, Jawa Barat",
    gambar: "/img/TesItemBatik.png",
    deskripsi: "Cirebon dikenal dengan batik yang memiliki pengaruh budaya Tionghoa, salah satu motif terkenal adalah Mega Mendung.",
    batik: [
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Mega Mendung",
        sejarah: "Motif Mega Mendung berasal dari Cirebon, dipengaruhi oleh budaya Tionghoa yang datang ke Indonesia pada abad ke-16. Motif ini sering ditemukan di karya seni batik Cirebon.",
        makna_batik: "Mega Mendung melambangkan kesabaran, ketenangan, dan keteguhan hati. Bentuk awan yang bergulung-gulung merepresentasikan kondisi hati yang tenang meskipun menghadapi situasi yang sulit."
      }
    ]
  },
  {
    _id: { $oid: "666004a5f259298350a4889d" },
    nama_daerah: "Pekalongan",
    alamat: "Jl. Hayam Wuruk No.200, Kota Pekalongan, Jawa Tengah",
    gambar: "/img/TesItemBatik.png",
    deskripsi: "Pekalongan dikenal sebagai kota batik, terkenal dengan motif-motif batik modern yang berwarna cerah seperti Pastel.",
    batik: [
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Pastel",
        sejarah: "Motif Pastel adalah batik modern yang terinspirasi dari warna-warna lembut pastel. Dikembangkan oleh pengrajin di Pekalongan untuk pasar anak muda.",
        makna_batik: "Motif Pastel melambangkan keceriaan dan kreativitas. Warna-warna lembutnya merefleksikan semangat muda dan inovasi."
      }
    ]
  },
  {
    _id: { $oid: "666004a5f259298350a4889a" },
    nama_daerah: "Yogyakarta",
    alamat: "Jl. Malioboro No.50, Kota Yogyakarta, Daerah Istimewa Yogyakarta",
    gambar: "/img/TesItemBatik.png",
    deskripsi: "Yogyakarta adalah salah satu daerah penghasil batik terbesar di Indonesia, terkenal dengan motif batik klasik seperti Parang dan Kawung.",
    batik: [
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Parang",
        sejarah: "Batik Parang adalah salah satu motif batik tertua di Indonesia, berasal dari keraton Yogyakarta dan Solo. Motif ini diciptakan oleh Sultan Agung Hanyakrakusuma pada abad ke-16.",
        makna_batik: "Motif Parang melambangkan kekuatan, keberanian, dan keteguhan hati. Pola garis-garis menyerupai ombak laut menggambarkan semangat yang tak pernah padam."
      },
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Kawung",
        sejarah: "Motif Kawung telah ada sejak abad ke-9 dan sering digunakan oleh keluarga kerajaan. Motif ini dikenal berasal dari wilayah Jawa Tengah dan Yogyakarta.",
        makna_batik: "Motif Kawung melambangkan keinginan untuk mencapai kesempurnaan dan keseimbangan. Bentuk bulatannya menyerupai buah kawung atau kolang-kaling yang mengandung filosofi kehidupan yang penuh dengan kebijaksanaan."
      },
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Sido Asih",
        sejarah: "Motif Sido Asih berasal dari Solo dan Yogyakarta, sering digunakan dalam upacara pernikahan untuk mendoakan pengantin dengan harapan akan hidup harmonis dan penuh kasih.",
        makna_batik: "Sido Asih melambangkan cinta kasih yang abadi dan kehidupan yang harmonis. Polanya mengandung makna harapan agar pemakainya selalu hidup dalam kasih sayang dan kedamaian."
      }
    ]
  },
  {
    _id: { $oid: "666004a5f259298350a4889e" },
    nama_daerah: "Palembang",
    alamat: "Jl. Jenderal Sudirman No.1, Kota Palembang, Sumatera Selatan",
    gambar: "/img/TesItemBatik.png",
    deskripsi: "Palembang memiliki batik yang kaya dengan warna-warna cerah dan pola yang rumit, mencerminkan kebudayaan Melayu dan pengaruh Tionghoa.",
    batik: [
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Palembang",
        sejarah: "Batik Palembang memiliki motif yang kaya dengan warna-warna cerah dan pola yang rumit, mencerminkan kebudayaan Melayu dan pengaruh Tionghoa.",
        makna_batik: "Motif Palembang melambangkan kemakmuran dan kebahagiaan. Warna-warna cerah dan pola yang rumit mencerminkan keragaman dan kekayaan budaya."
      }
    ]
  },
  {
    _id: { $oid: "666004a5f259298350a4889c" },
    nama_daerah: "Solo",
    alamat: "Jl. Slamet Riyadi No.100, Kota Surakarta, Jawa Tengah",
    gambar: "/img/TesItemBatik.png",
    deskripsi: "Solo merupakan salah satu pusat budaya batik di Indonesia, dengan motif-motif khas seperti Truntum dan Sidomukti.",
    batik: [
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Truntum",
        sejarah: "Motif Truntum diciptakan oleh Kanjeng Ratu Kencana, permaisuri Sunan Paku Buwana III dari Solo, pada abad ke-18 sebagai simbol cinta dan kesetiaan dalam pernikahan.",
        makna_batik: "Truntum melambangkan cinta yang tumbuh kembali dan kesetiaan. Pola bintang-bintang kecil yang tersebar melambangkan cinta yang selalu menerangi dan tak pernah padam."
      },
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Sidomukti",
        sejarah: "Batik Sidomukti adalah motif batik yang berasal dari Solo dan Yogyakarta. Motif ini sering digunakan dalam upacara pernikahan Jawa untuk mendoakan kebahagiaan dan kemakmuran bagi pengantin.",
        makna_batik: "Sidomukti melambangkan kemakmuran, kebahagiaan, dan kehidupan yang mulia. Pola geometrisnya merepresentasikan harapan akan stabilitas dan keberuntungan."
      }
    ]
  },
  {
    _id: { $oid: "666004a5f259298350a4889f" },
    nama_daerah: "Yogyakarta",
    alamat: "Jl. Parangtritis No.300, Kota Yogyakarta, Daerah Istimewa Yogyakarta",
    gambar: "/img/TesItemBatik.png",
    deskripsi: "Yogyakarta juga terkenal dengan berbagai motif batik klasik lainnya seperti Ceplok dan Gurda.",
    batik: [
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Ceplok",
        sejarah: "Motif Ceplok adalah salah satu motif batik klasik yang ditemukan di seluruh Jawa. Bentuknya yang simetris berasal dari pengaruh geometris Hindu-Buddha.",
        makna_batik: "Motif Ceplok melambangkan keselarasan dan keseimbangan. Polanya yang teratur dan simetris mengajarkan tentang harmoni dalam kehidupan."
      },
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Gurda",
        sejarah: "Motif Gurda terinspirasi dari bentuk sayap burung Garuda, simbol kekuatan dan keagungan. Motif ini sering digunakan di keraton Yogyakarta dan Solo.",
        makna_batik: "Gurda melambangkan kekuasaan dan keberanian. Bentuk sayap Garuda yang megah mencerminkan semangat kepemimpinan dan keagungan."
      }
    ]
  }
];

const $$Astro = createAstro();
function getStaticPaths() {
  return daerahData.map((daerah) => ({
    params: { id: daerah._id.$oid }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const getDaerahDetailById = (id2) => {
    return daerahData.find((daerah2) => daerah2._id.$oid === id2);
  };
  const { id } = Astro2.params;
  const daerah = getDaerahDetailById(id);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPage", $$HeroPage, { "title": daerah ? daerah.nama_daerah : "", "description": "Home / Detail Daerah" })} ${daerah ? renderTemplate`${maybeRenderHead()}<div class="container mx-auto my-12 p-6"> <div class="flex flex-col items-center justify-center"> <img class="areas-image w-3/4 mb-4 md:mb-0 rounded-lg shadow-md"${addAttribute(daerah.gambar, "src")}${addAttribute(daerah.nama_daerah, "alt")}> <div class="flex-1 w-3/4"> <h2 class="text-2xl font-bold mb-2 mt-4 text-gray-800">${daerah.nama_daerah}</h2> <p class="font-medium text-lg mb-2 text-gray-600">${daerah.alamat}</p> <p class="text-base leading-relaxed text-justify text-gray-700">${daerah.deskripsi}</p> </div> </div> <div class="container mx-auto mt-12 p-6"> ${daerah.batik.map((batik) => renderTemplate`<div class="flex flex-col items-center justify-center bg-[#F4F0EC] rounded-3xl my-6 p-6"> <h1 class="text-4xl font-bold text-center pb-6">${batik.nama_batik}</h1> <img class="areas-image w-3/4 mb-4 md:mb-4 rounded-lg shadow-md"${addAttribute(batik.motif_batik, "src")}${addAttribute(batik.nama_batik, "alt")}> <div class="flex-1 w-3/4"> <p class="text-base leading-relaxed text-justify text-gray-700">${batik.sejarah}</p> <p class="text-base leading-relaxed mt-2 text-justify text-gray-700">${batik.makna_batik}</p> </div> </div>`)} </div> </div>` : renderTemplate`<div id="detail-container">Data not found ${id}</div>`}` })}`;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/pages/detailDaerah/[id].astro", void 0);

const $$file = "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/pages/detailDaerah/[id].astro";
const $$url = "/detailDaerah/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$HeroPage as $, _id_ as _, $$BaseLayout as a, daerahData as d };
