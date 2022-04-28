import "../styles/style.css";
import "../dist/output.css";
import { items_array } from "../js/array.js";
console.log(items_array);
const DOMSelectors = {
  cart: document.getElementById("cart"),
  container: document.getElementById("item-container"),
  button: document.getElementById("Add-button"),
};

function addItem(index) {
  console.log("Added");
  let item = items_array[index];
  items_array[index].count++;
  if (items_array[index].count == 1) {
    DOMSelectors.cart.insertAdjacentHTML(
      "beforeend",
      `
    <div id="cart-${item.id}" class="grid place-items-center h-96 grid-cols-1 grid-rows-3 gap: 1rem rounded-xl md:p-0 dark:bg-slate-800 w-96  text-white font-size 2rem transition ease-in-out delay-150 bg-stone-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 flex justify-around">
    <h2>${item.name}</h2>
    <img
    id="${item.id}"
    class="h-32"
    src="${item.img}"
    alt="${item.alt}"
    />
    <h3>Amount: ${item.count}</h3>
    </div>
    `
    );
  } else {
    document.getElementById(`cart-${item.id}`).remove();
    DOMSelectors.cart.insertAdjacentHTML(
      "beforeend",
      `
    <div id="cart-${item.id}" class="grid place-items-center h-96 grid-cols-1 grid-rows-3 gap: 1rem rounded-xl md:p-0 dark:bg-slate-800 w-96  text-white font-size 2rem transition ease-in-out delay-150 bg-stone-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 flex justify-around">
    <h2>${item.name}</h2>
    <img
    id="${item.id}"
    class="h-32"
    src="${item.img}"
    alt="${item.alt}"
    />
    <h3>Amount: ${item.count}</h3>
    </div>
    `
    );
  }
}

function test() {
  console.log("test");
}

for (let index = 0; index < items_array.length; index++) {
  // needed this for the index of the item in the array
  let item = items_array[index];
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
  <div id="${item.name}-${item.id}" class="grid place-items-center h-96 grid-cols-1 grid-rows-3 gap: 1rem  rounded-xl md:p-0 dark:bg-slate-800 w-96  text-white font-size 2rem transition ease-in-out delay-150 bg-stone-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 flex justify-around">
    <h2>${item.name}</h2>
    <img
      id="${item.id}"
      class="h-32"
      src="${item.img}"
      alt="${item.alt}"
    />
    <h2 id="item-item" class=""></h2>

    <button class="text-neutral-300 bg-stone-800 border-radius: 1.5rem border-width:50px rounded-xl"> 
      <h3 id="price" class="text-neutral-300 text-align: center;">
        $${item.price}
      </h3>
      Add To Cart
    </button>
  </div>
  `
  );
  DOMSelectors.container.lastElementChild.children[3].addEventListener(
    "click",
    () => {
      addItem(index);
    }
  );
}

// const apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
// const DOMSelectors = {
//   display: document.getElementById("display"),
//   form: document.getElementById("form"),
//   textbox: document.querySelectorAll(".form"),
// };
// DOMSelectors.form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   document.querySelector(".display").innerHTML = "";
//   let query = document.getElementById("query").value;
//   async function getData() {
//     try {
//       const response = await fetch(`${apiUrl}?fname=${query}`);
//       const api = await response.json();
//       console.log(api);
//       const data = api.data.map((api, index) => ({
//         name: `${api.name}`,
//         id: index + 1,
//         card_images: api.card_images[0].image_url,
//         race: api.race,
//         type: api.type,
//         lvl: api.level,
//         atk: api.atk,
//         def: api.def,
//         desc: api.desc,
//       }));
//       const SortData = data.sort(function (data1, data2) {
//         return data2.id - data1.id;
//       });
//       const SearchCard = SortData;
//       console.log(SearchCard);
//       function displayCards(Card) {
//         SearchCard.forEach((Cards) => {
//           document.querySelector(".display").insertAdjacentHTML(
//             "afterbegin",
//             `
//       <section class="display">
//       <div class="each-card">
//       <h2 class="display-name">${Cards.name}</h2>
//       <img class="display-img" src="${Cards.card_images}" alt= A picture of the card ${Cards.name}/>
//       <h2 class="display-level">Level: ${Cards.lvl}</h2>
//       <h2 class="display-race/type">${Cards.race}/${Cards.type}</h2>
//       <h2 class="display-atk/def">${Cards.atk}/${Cards.def}</h2>
//       <p class="display-desc">${Cards.desc}</p>
//       </div>
//       </section>`
//           );
//         });
//       }
//       displayCards();
//       document
//         .getElementById("Switch-Theme")
//         .addEventListener("click", function () {
//           if (document.body.classList.contains("dark")) {
//             document.body.classList.add("light");
//             document.body.classList.remove("dark");
//           } else {
//             document.body.classList.add("dark");
//             document.body.classList.remove("light");
//           }
//         });
//     } catch (err) {
//       console.error(err);
//       alert(
//         "Something went wrong, either your keyword can't be found in the database or my code is messed up (If there's hyphens in the name, dont forget to put it inside. Its punctuation sensitive!)."
//       );
//     }
//   }
//   getData();
// });
// document.getElementById("Switch-Theme").addEventListener("click", function () {
//   if (document.body.classList.contains("dark")) {
//     document.body.classList.add("light");
//     document.body.classList.remove("dark");
//   } else {
//     document.body.classList.add("dark");
//     document.body.classList.remove("light");
//   }
// });
