/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, d as renderComponent } from '../astro_DCcO7XBL.mjs';
import 'kleur/colors';
import 'html-escaper';
import { d as daerahData, $ as $$HeroPage, a as $$BaseLayout } from './_id__rohy5lc5.mjs';
import 'clsx';
/* empty css                          */

const $$AreasBatik = createComponent(($$result, $$props, $$slots) => {
  function truncateText(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  }
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto p-6 mt-28 mb-12 bg-[#F4F0EC] rounded-3xl"> <h2 class="text-center text-4xl font-bold pt-10 pb-6">Daerah Penghasil Batik</h2> <p class="text-center">Indonesia dikenal dengan beragam daerah penghasil batik <br> masing-masing memiliki ciri khas dan keunikan tersendiri.</p> <div id="daerah-container" class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-auto"> ${daerahData.map((daerah) => renderTemplate`<div class="daerah-item"> <img class="daerah-item-image"${addAttribute(daerah.gambar, "src")}${addAttribute(daerah.nama_daerah, "alt")}> <div class="daerah-item-content"> <div class="province"><a${addAttribute(`/detailDaerah/${daerah._id.$oid}`, "href")}>${daerah.nama_daerah}</a></div> <div class="line-item"></div> <div class="daerah-item-bottom"> <div class="city"><p class="city-name">${truncateText(daerah.deskripsi, 3)}</p></div> <div><a${addAttribute(`/detailDaerah/${daerah._id.$oid}`, "href")} class="teenyicons--arrow-right-solid"></a></div> </div> </div> </div>`)} </div> </div>`;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/components/AreasBatik.astro", void 0);

const $$Daerah = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPage", $$HeroPage, { "title": "Daerah Batik", "description": "Home / Daerah Batik" })} ${maybeRenderHead()}<div class="container mx-auto px-6 py-8 my-12"> <div class="flex flex-col md:flex-row items-center justify-between gap-4"> <div class="md:w-6/12 mb-6 md:mb-0"> <h2 class="font-bold text-7xl md:text-5xl mb-4">6 Daerah<br> Penghasil Batik di Indonesia</h2> </div> <div class="md:w-3/6 flex justify-end"> <p class="text-base md:text-lg">Indonesia memiliki beragam daerah penghasil batik, masing-masing dengan keunikan dan ciri khasnya. Setiap daerah tersebut memiliki motif, teknik, dan sejarah yang berbeda dalam pembuatan batik, mencerminkan kekayaan budaya dan tradisi lokal yang diwariskan dari generasi ke generasi.
</p> </div> </div> </div> ${renderComponent($$result2, "AreasBatik", $$AreasBatik, {})} ` })}`;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/pages/daerah.astro", void 0);

const $$file = "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/pages/daerah.astro";
const $$url = "/daerah";

export { $$Daerah as default, $$file as file, $$url as url };
