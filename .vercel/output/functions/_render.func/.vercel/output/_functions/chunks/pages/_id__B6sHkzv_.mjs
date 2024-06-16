/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, e as renderSlot, f as renderHead, g as addAttribute, h as createAstro } from '../astro_DCcO7XBL.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import 'flowbite';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<header class="sticky top-0 z-50 w-full bg-[#F4F0EC] text-sm py-4 dark:bg-neutral-800 shadow-md"> <nav class="max-w-[85rem] w-full mx-auto px-6 lg:flex lg:items-center lg:justify-between" aria-label="Global"> <div class="flex items-center justify-between"> <a class="inline-flex items-center gap-x-1 md:gap-x-2 text-xl lg:text-2xl font-serif dark:text-white" href="/"> <img class="w-8 md:w-10 h-auto" src="/img/LogoCultik.png" alt="Logo">
Cultik
</a> <div class="lg:hidden"> <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-md bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10" data-hs-collapse="#navbar-image-and-text-2" aria-controls="navbar-image-and-text-2" aria-label="Toggle navigation"> <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" x2="24" y1="6" y2="6"></line><line x1="2" x2="24" y1="12" y2="12"></line><line x1="2" x2="24" y1="18" y2="18"></line></svg> <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> <div id="navbar-image-and-text-2" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block"> <div class="flex flex-col gap-2 mt-5 lg:flex-row lg:items-center lg:justify-end lg:mt-0 lg:ps-5"> <a id="home-link" class="menus font-medium text-[#292F36] dark:text-neutral-400 hover:bg-[#d6c2ac] dark:hover:bg-neutral-600 px-3 py-2 rounded-lg transition duration-300" href="/" aria-current="page">Home</a> <a id="proses-link" class="menus font-medium text-[#292F36] dark:text-neutral-400 hover:bg-[#d6c2ac] dark:hover:bg-neutral-600 px-3 py-2 rounded-lg transition duration-300" href="/proses">Proses Pembuatan</a> <a id="daerah-link" class="menus font-medium text-[#292F36] dark:text-neutral-400 hover:bg-[#d6c2ac] dark:hover:bg-neutral-600 px-3 py-2 rounded-lg transition duration-300" href="/daerah">Daerah Batik</a> <a id="about-link" class="menus font-medium text-[#292F36] dark:text-neutral-400 hover:bg-[#d6c2ac] dark:hover:bg-neutral-600 px-3 py-2 rounded-lg transition duration-300" href="/about">Tentang Kami</a> </div> </div> </nav> </header> <script>
    document.addEventListener('DOMContentLoaded', () => {
      
      function setActiveLink() {
        const path = window.location.pathname;
        const links = document.querySelectorAll('nav .menus');

        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === path) {
            link.classList.add('active');
          }
        });
      }

      setActiveLink();

      // Toggle mobile menu
      const hamburgerButton = document.getElementById('hamburger-button');
      const mobileMenu = document.getElementById('navbar-image-and-text-2');

      hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

    });
<\/script>`])), maybeRenderHead());
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-[#292F36] dark:bg-[#292F36]"> <div class="container mx-auto px-6 mt-16 "> <div class="mx-auto w-full max-w-screen-xl py-6 lg:py-8"> <div class="md:flex md:justify-between"> <div class="mb-6 md:mb-0"> <a href="https://flowbite.com/" class="flex items-center"> <img src="/img/LogoCultik.png" class="h-6 md:h-8 me-2" alt="FlowBite Logo"> <span class="self-center text-xl lg:text-2xl font-serif whitespace-nowrap text-white">Cultik</span> </a> </div> <div class="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3"> <div> <h2 class="mb-6 text-sm font-semibold uppercase text-white">Features</h2> <ul class="text-gray-400 font-medium"> <li class="mb-4"> <a href="/" class="hover:underline">Home</a> </li> <li class="mb-4"> <a href="/proses" class="hover:underline">Proses Pembuatan</a> </li> <li class="mb-4"> <a href="/daerah" class="hover:underline">Daerah Batik</a> </li> <li> <a href="/daerah" class="hover:underline">Tentang Cultik</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibol uppercase text-white">Join us</h2> <ul class="text-gray-400 font-medium"> <li class="mb-4"> <a href="https://www.facebook.com/" class="hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a> </li> <li> <a href="https://discord.gg/" class="hover:underline" target="_blank" rel="noopener noreferrer">Discord</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold uppercase text-white">Legal</h2> <ul class="text-gray-400 font-medium"> <li class="mb-4"> <a href="#" class="hover:underline">Privacy Policy</a> </li> <li> <a href="#" class="hover:underline">Terms &amp; Conditions</a> </li> </ul> </div> </div> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"> <span class="text-sm sm:text-center text-gray-400">© 2024 <a href="/" class="hover:underline">Culture Batik</a>. All Rights Reserved.
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

const $$Astro = createAstro();
function getStaticPaths() {
  return daerahData.map((daerah) => ({
    params: { id: daerah._id.$oid }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const response = await fetch("https://backend-cultik-l0xm2i4e6-kennis-projects-1f9db525.vercel.app/dataPenghasil");
  const data = await response.json();
  const daerahData2 = data.data.daerah_penghasil;
  const getDaerahDetailById = (id2) => {
    return daerahData2.find((daerah2) => daerah2._id.$oid === id2);
  };
  const { id } = Astro2.params;
  const daerah = getDaerahDetailById(id);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPage", $$HeroPage, { "title": daerah ? daerah.nama_daerah : "", "description": "Home / Detail Daerah" })} ${daerah ? renderTemplate`${maybeRenderHead()}<div class="container mx-auto my-\ p-6"> <div class="flex flex-col items-center justify-center"> <img class="areas-image w-full md:w-3/4 mb-4 md:mb-0 rounded-lg shadow-md"${addAttribute(daerah.gambar, "src")}${addAttribute(daerah.nama_daerah, "alt")}> <div class="flex-1 md:w-3/4"> <h2 class="text-2xl font-bold mb-2 mt-4 text-gray-800">${daerah.nama_daerah}</h2> <p class="font-medium text-lg mb-2 text-gray-600">${daerah.alamat}</p> <p class="text-base leading-relaxed text-justify text-gray-700">${daerah.deskripsi}</p> </div> </div> <div class="container mx-auto mt-12 md:p-6"> ${daerah.batik.map((batik) => renderTemplate`<div class="flex flex-col items-center justify-center bg-[#F4F0EC] rounded-3xl my-6 p-6"> <h1 class="text-2xl md:text-4xl font-bold text-center pb-6">${batik.nama_batik}</h1> <img class="areas-image w-full md:w-3/4 mb-4 md:mb-4 rounded-lg shadow-md"${addAttribute(batik.motif_batik, "src")}${addAttribute(batik.nama_batik, "alt")}> <div class="flex-1 md:w-3/4"> <p class="text-base leading-relaxed text-justify text-gray-700">${batik.sejarah}</p> <p class="text-base leading-relaxed mt-2 text-justify text-gray-700">${batik.makna_batik}</p> </div> </div>`)} </div> </div>` : renderTemplate`<div id="detail-container">Data not found ${id}</div>`}` })}`;
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

export { $$HeroPage as $, _id_ as _, $$BaseLayout as a };
