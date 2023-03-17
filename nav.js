import { html, render } from "https://unpkg.com/lit-html?module";

let navPages = [
  { name: "Home", link: "/" },
  { name: "About Me!", link: "/bio/bio.html" },
  { name: "Cheatsheet", link: "/cheatsheet/cheat.html" },
  { name: "Gallery", link: "/gallery/gallery.html" },
  { name: "MP0", link: "/MP0_Writeup/writeup.html" },
  { name: "MP1", link: "/MP1_Writeup/writeup.html" },
  { name: "MP2", link: "/MP2_Writeup/writeup.html" },
  { name: "MP3", link: "/MP3_Writeup/writeup.html" },
  { name: "Froggy Friend!", link: "/FinalProjectP/writeup.html" },
];

function makeNav(links) {
  return html`<nav>
    ${links.map((page) => {
      return html`<a href="${page.link}">${page.name}</a>`;
    })}
  </nav>`;
}

render(makeNav(navPages), document.getElementById("nav-container"));
