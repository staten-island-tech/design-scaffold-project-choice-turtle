import "../styles/style.css";
import "../styles/variables.css";
import "../dist/output.css";
// import { sections } from "../js/arrays.js";
import { sections } from "../js/arrays";
console.log(sections);
function sectionCreate(array) {
  array.forEach((section) => {
    if (section.id == 1) {
      console.log(section.name);
      document.querySelector(".Front-Page").insertAdjacentHTML(
        "afterbegin",
        `
        <section class="Front-Page">
        <div class="each-card">
        <header class="display-name text-5xl text-left">${section.name}</header>
        <img class="display-img1" src="${section.pic1}" alt="${section.alt1}"/>
        </div>
        </section>`
      );
    } else if (section.id == 2) {
      console.log(section.name);
      document.querySelector(".Eiji-Tsuburaya").insertAdjacentHTML(
        "afterbegin",
        `
        <section class="Eiji-Tsuburaya">
        <div class="each-card">
        <h2 class="display-name text-3xl text-center">${section.name}</h2>
        <img class="display-img2" src="${section.pic1}" alt="${section.alt1}"/>
        <img class="display-img3" src="${section.pic2}" alt="${section.alt2}"/>
        </div>
        </section>`
      );
    } else if (section.id == 3) {
      console.log(section.name);
      document.querySelector(".Iconic-Series").insertAdjacentHTML(
        "afterbegin",
        `
        <section class="section-cards">
        <div class="each-card">
        <h2 class="display-name text-3xl text-center">${section.name}</h2>
        <img class="display-img4" src="${section.pic1}" alt="${section.alt1}"/>
        </div>
        </section>`
      );
    } else if (section.id == 4) {
      console.log(section.name);
      document.querySelector(".Hideaki-Anno").insertAdjacentHTML(
        "afterbegin",
        `
        <section class="section-cards">
        <div class="each-card">
        <h2 class="display-name text-3xl text-center">${section.name}</h2>
        <img class="display-img5" src="${section.pic1}" alt="${section.alt1}"/>
        <img class="display-img6" src="${section.pic2}" alt="${section.alt2}"/>
        </div>
        </section>`
      );
    } else if (section.id == 5) {
      console.log(section.name);
      document.querySelector(".Latest-Projects").insertAdjacentHTML(
        "afterbegin",
        `
        <section class="section-cards">
        <div class="each-card">
        <h2 class="display-name text-3xl text-center">${section.name}</h2>
        <img class="display-img justify-items-start" src="${section.pic1}" alt="${section.alt1}"/>
        <img class="display-img7" src="${section.pic2}" alt="${section.alt2}"/>
        <img class="display-img8" src="${section.pic3}" alt="${section.alt3}"/>
        </div>
        </section>`
      );
    }
  });
}
sectionCreate(sections);
