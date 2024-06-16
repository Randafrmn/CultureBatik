/* empty css                          */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro_DCcO7XBL.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeroPage, a as $$BaseLayout } from './_id__B6sHkzv_.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPage", $$HeroPage, { "title": "Tentang Kami", "description": "Home / Tentang Kami" })} ${maybeRenderHead()}<div class="container mx-auto p-6"> <div class="flex justify-center"> <div class="flex flex-col justify-center items-center w-4/5 lg:w-3/5"> <h1 class="text-center text-3xl md:text-7xl mt-10 md:mt-12">We Love Cultik</h1> <p class="text-center text-md md:text-3xl mt-6 md:mt-8">spread batik culture throughout the world with cultik so that batik culture can continue to be recognized.</p> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-14 md:gap-8 mt-12 md:mt-16 "> <div class="flex flex-col justify-center items-center gap-6"> <img class="object-cover rounded-xl w-72 h-72 md:w-80 md:h-80" src="/img/Carousel3.png" alt=""> <h1 class="text-2xl">Randa Firman Putra</h1> </div> <div class="flex flex-col justify-center items-center gap-6"> <img class="object-cover rounded-xl w-72 h-72 md:w-80 md:h-80" src="/img/Carousel3.png" alt=""> <h1 class="text-2xl">Kenni Hashim</h1> </div> <div class="flex flex-col justify-center items-center gap-6"> <img class="object-cover rounded-xl w-72 h-72 md:w-80 md:h-80" src="/img/Carousel3.png" alt=""> <h1 class="text-2xl">Huga Sampurna Kho</h1> </div> </div> </div> ` })}`;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/pages/about.astro", void 0);

const $$file = "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
