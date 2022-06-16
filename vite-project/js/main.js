import "../styles/style.css";
import "../styles/variables.css";
import { sections } from "../js/arrays";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  EaselPlugin,
  MotionPathPlugin,
  PixiPlugin,
  TextPlugin
);
function sectionCreate(array) {
  array.forEach((section) => {
    if (section.id == 1) {
      document.querySelector(".Front-Page").insertAdjacentHTML(
        "afterbegin",
        `
        <section class="Front-Page">
          <header class="display-name id="header"> 
            <h1>${section.name}</h1>         
            <section class="buttons">
              <button id="btn1" class="btn" onclick="location.href='#Front-Page'">Front Page</button>
              <button id="btn2" class="btn" onclick="location.href='#Eiji-Tsuburaya'">Tsuburaya Productions</button>
              <button id="btn3" class="btn" onclick="location.href='#Iconic-Series'">Iconic Series</button>
              <button id="btn4" class="btn" onclick="location.href='#Hideaki-Anno'">Works inspired by them</button>
              <button id="btn5" class="btn" onclick="location.href='#Latest-Projects'">Latest Projects</button>            <button id="btn6" class="btn">Theme</button>
            </section>
          </header>

        </section>`
      );
    } else if (section.id == 2) {
      document.querySelector(".Eiji-Tsuburaya").insertAdjacentHTML(
        "afterbegin",
        `
        <section class="section-cards">
          <h2 class="display-name  ">${section.name}</h2>
          <div class="each-card2">
            <img class="display-img1" src="${section.pic1}" alt="${section.alt1}"/>
            <p class="p1">something</p>
            <img class="display-img2" src="${section.pic2}" alt="${section.alt2}"/>
          </div>
        </section>`
      );
    } else if (section.id == 3) {
      document.querySelector(".Iconic-Series").insertAdjacentHTML(
        "afterbegin",
        `
        <section class="section-cards">
          <h2 class="display-name  ">${section.name}</h2>
          <div class="each-card3">
            <p class="p2">something</p>
            <img class="display-img3" src="${section.pic1}" alt="${section.alt1}"/>
          </div>
        </section>`
      );
    } else if (section.id == 4) {
      document.querySelector(".Hideaki-Anno").insertAdjacentHTML(
        "afterbegin",
        `
        <section class="section-cards">
          <h2 class="display-name  ">${section.name}</h2>
          <div class="each-card4">
            <img class="display-img4" src="${section.pic1}" alt="${section.alt1}"/>
            <p class=" p3">something</p>
            <img class="display-img5" src="${section.pic2}" alt="${section.alt2}"/>
          </div>
        </section>`
      );
    } else if (section.id == 5) {
      document.querySelector(".Latest-Projects").insertAdjacentHTML(
        "afterbegin",
        `
        <section class="section-cards">
        <h2 class="display-name">${section.name}</h2>
        <div class="each-card5">
        <div class="images3">
        <img class="display-img6" src="${section.pic3}" alt="${section.alt3}"/>
        <img class="display-img7" src="${section.pic2}" alt="${section.alt2}"/>  
        <img class="display-img8" src="${section.pic1}" alt="${section.alt1}"/>
        </div>  
        <p class="p4">something</p>
        </div>
        </section>`
      );
    }
  });
}
sectionCreate(sections);

document.getElementById("btn6").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

gsap.set(".display-img3", { x: 1000 });
gsap.set(".Eiji-Tsuburaya", { autoAlpha: 0 });
gsap.timeline().from("body", { duration: 1.5, opacity: 0 });

const anim1 = gsap.to(".display-img3", {
  x: 0,
  duration: 0.75,
});
ScrollTrigger.create({
  trigger: ".Eiji-Tsuburaya",
  animation: anim1,
  start: "center top",
  end: "+=400px",
  toggleClass: "active",
  scrub: 1,
});

// const anim2 = gsap.timeline().from(".Eiji-Tsuburaya", {
//   autoAlpha: 100,
// });
// ScrollTrigger.create({
//   trigger: ".Front-Page",
//   animation: anim2,
//   start: "center top",
//   end: "+=1200px",
//   toggleClass: "active",
//   scrub: 1,
// });
