/* empty css                          */
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../astro_DCcO7XBL.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeroPage, a as $$BaseLayout } from './_id__rohy5lc5.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPage", $$HeroPage, { "title": "Tentang Kami", "description": "Home / Tentang Kami" })} ` })}`;
}, "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/pages/about.astro", void 0);

const $$file = "C:/Semester 6/Dicoding/Capstone Project/Final/batik-culture/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
