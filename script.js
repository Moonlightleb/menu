loader();

const categories = [
  {
    name: "Sandwiches",
    icon: "./icons/sandwiches.png",
    picture: "./images/sandwiches.jpg",
  },
  {
    name: "Burgers",
    icon: "./icons/burger.png",
    picture: "./images/burgers.jpg",
  },
  { name: "Pizza", icon: "./icons/pizzas.png", picture: "./images/pizzas.jpg" },
  {
    name: "Platters",
    icon: "./icons/plates.png",
    picture: "./images/platters.jpg",
  },
  {
    name: "Salads",
    icon: "./icons/salads.png",
    picture: "./images/salads.jpg",
  },
  { name: "Fries", icon: "./icons/fries.png", picture: "./images/fries.jpg" },
  {
    name: "Desserts",
    icon: "./icons/cake.png",
    picture: "./images/desserts.jpg",
  },
  {
    name: "Drinks",
    icon: "./icons/drinks.png",
    picture: "./images/drinks.webp",
  },
];

const data = [
  {
    name: "Steak and Cheese",
    description: "Steak, cheese, mushrooms, mayo, lettuce, pickles.",
    category: "Sandwiches",
    price: 6,
  },
  {
    name: "Philadelphia Steak",
    description:
      "Steak, cheese, mushrooms, onions, peppers, soy sauce, mayo, lettuce, pickles.",
    category: "Sandwiches",
    price: 6.5,
  },
  {
    name: "Chicken Steak",
    description: "Grilled chicken, cheese, mushrooms, mayo, lettuce, pickles.",
    category: "Sandwiches",
    price: 5,
  },
  {
    name: "Chicken Fajitas",
    description:
      "Grilled chicken, cheese, mushrooms, onions, peppers, soy sauce, mayo, lettuce, pickles.",
    category: "Sandwiches",
    price: 6,
  },
  {
    name: "Tawouk",
    description: "Grilled Tawouk, fries, mayo, lettuce, pickles.",
    category: "Sandwiches",
    price: 4,
  },
  {
    name: "Sujuk",
    description: "Sujuk, mayo, lettuce, tomatoes, pickles.",
    category: "Sandwiches",
    price: 3.5,
  },
  {
    name: "Cheese Sujuk",
    description: "Sujuk, cheese, mayo, lettuce, tomatoes, pickles.",
    category: "Sandwiches",
    price: 4.5,
  },
  {
    name: "Submarine",
    description:
      "Cheese, ham, salami, mayo, mustard, tomatoes, lettuce, pickles.",
    category: "Sandwiches",
    price: 5,
  },
  {
    name: "Hot Dog",
    description: "Hot dog, ketchup, mayo, mustard, tomatoes, lettuce, pickles.",
    category: "Sandwiches",
    price: 2.5,
  },
  {
    name: "Tuna Fish",
    description: "Tuna, mayo, mustard, lettuce, tomatoes, pickles.",
    category: "Sandwiches",
    price: 4,
  },
  {
    name: "Hamburger",
    description: "Beef patty, sauce, coleslaw, tomatoes, pickles.",
    category: "Burgers",
    price: 3,
  },
  {
    name: "Cheese Burger",
    description: "Beef patty, cheese, sauce, coleslaw, tomatoes, pickles.",
    category: "Burgers",
    price: 3.5,
  },
  {
    name: "Double Cheese Burger",
    description:
      "2 Beef patties, 2 cheese slices, sauce, coleslaw, tomatoes, pickles.",
    category: "Burgers",
    price: 6,
  },
  {
    name: "Zoro Burger",
    description:
      "Beef patty, cheese, ham, salami, sauce, coleslaw, tomatoes, pickles.",
    category: "Burgers",
    price: 5.5,
  },
  {
    name: "Chicken Breast Burger",
    description: "Grilled chicken, fries, garlic, mayo, lettuce, pickles.",
    category: "Burgers",
    price: 3,
  },
  {
    name: "Crispy Chicken Burger",
    description:
      "Crispy chicken, cheese, fries, garlic, mayo, lettuce, pickles.",
    category: "Burgers",
    price: 4,
  },
  {
    name: "BBQ Chicken Burger",
    description:
      "Crispy chicken, cheese, fries, Barbecue, mayo, lettuce, pickles.",
    category: "Burgers",
    price: 4,
  },
  {
    name: "Pizza Pepperoni",
    description: "Pepperoni, cheese, mushrooms, sauce.",
    category: "Pizza",
    price: 8,
  },
  {
    name: "Pizza Chicken",
    description: "Chicken, cheese, mushrooms, sauce.",
    category: "Pizza",
    price: 8,
  },
  {
    name: "Pizza BBQ Chicken",
    description: "Chicken, cheese, mushrooms, Barbecue sauce.",
    category: "Pizza",
    price: 8,
  },
  {
    name: "Pizza Regular",
    description: "Ham, salami, cheese, olives, mushrooms, green pepper, sauce.",
    category: "Pizza",
    price: 8,
  },
  {
    name: "Pizza Margherita",
    description: "Cheese, sauce.",
    category: "Pizza",
    price: 6,
  },
  {
    name: "Pizza Vegetarian",
    description: "Cheese, mushrooms, corn, green pepper, olives, sauce.",
    category: "Pizza",
    price: 7,
  },
  {
    name: "Pizza Sujuk",
    description: "Cheese, sujuk, sauce, tomatoes.",
    category: "Pizza",
    price: 8,
  },
  {
    name: "Pizza Tuna",
    description: "Tuna, mushrooms, tomatoes, green pepper, onions, sauce.",
    category: "Pizza",
    price: 7,
  },
  {
    name: "Hamburger Platter",
    description:
      "2 Beef patties served with coleslaw, fries and one burger bun.",
    category: "Platters",
    price: 7,
  },
  {
    name: "Cheese Burger Platter",
    description:
      "2 Beef patties with cheese served with coleslaw, fries and one burger bun.",
    category: "Platters",
    price: 9,
  },
  {
    name: "Chicken Tenders",
    description:
      "5 pieces of crispy chicken, served with coleslaw, fries and garlic mayo dip.",
    category: "Platters",
    price: 7,
  },
  {
    name: "Chicken Fajitas Platter",
    description: "Fajitas sandwich served with french fries and coleslaw.",
    category: "Platters",
    price: 8,
  },
  {
    name: "Tawouk Platter",
    description:
      "Grilled tawouk served with coleslaw, fries, garlic mayo dip and lebanese bread.",
    category: "Platters",
    price: 8,
  },
  {
    name: "Chicken Breast Burger Platter",
    description:
      "2 Grilled chicken served with coleslaw, fries, garlic mayo dip and one burger bun.",
    category: "Platters",
    price: 7,
  },
  {
    name: "Chicken Caesar Salad",
    description: "Iceberg, grilled chicken, croutons, caesar sauce.",
    category: "Salads",
    price: 5,
  },
  {
    name: "Crab Salad",
    description: "Crab, lettuce, corn, carrots.",
    category: "Salads",
    price: 5,
  },
  // {
  //   name: "Mixed Salad",
  //   description:
  //     "Lettuce, tomatoes,cucumbers, palmitos, artichokes, corn, asparagus.",
  //   category: "Salad",
  //   price: 0,
  // },
  {
    name: "Chef Salad",
    description: "Lettuce, tomatoes, cucumbers, tuna, ham, corn, cheese.",
    category: "Salads",
    price: 5,
  },
  {
    name: "Season Salad",
    description: "Lettuce, tomatoes, cucumbers, corn.",
    category: "Salads",
    price: 3,
  },
  {
    name: "Cabbage Salad",
    description: "Cabbage, mayonnaise, corn.",
    category: "Salads",
    price: 2,
  },
  {
    name: "Fries Plate",
    description: "",
    category: "Fries",
    price: 2.5,
  },
  {
    name: "Fries Box",
    description: "",
    category: "Fries",
    price: 2,
  },
  {
    name: "Fries Sandwich",
    description: "",
    category: "Fries",
    price: 2.5,
  },
  {
    name: "Tiramisu",
    description: "",
    category: "Desserts",
    price: 3,
  },
  {
    name: "ChocoBa",
    description: "Burger bread, chocolate, bananas.",
    category: "Desserts",
    price: 2,
  },
  {
    name: "Soft Drinks",
    description: "",
    category: "Drinks",
    price: 1,
  },
  {
    name: "Water (Small)",
    description: "",
    category: "Drinks",
    price: 0.5,
  },
  {
    name: "Water (Big)",
    description: "",
    category: "Drinks",
    price: 1,
  },
  {
    name: "Nescafe",
    description: "",
    category: "Drinks",
    price: 1.5,
  },
  {
    name: "Cappuccino",
    description: "",
    category: "Drinks",
    price: 2,
  },
  {
    name: "Tea",
    description: "",
    category: "Drinks",
    price: 1.5,
  },
  {
    name: "Green Tea",
    description: "",
    category: "Drinks",
    price: 1.5,
  },
  {
    name: "Camomile",
    description: "",
    category: "Drinks",
    price: 1.5,
  },
  {
    name: "Beer Almaza",
    description: "",
    category: "Drinks",
    price: 2,
  },
  {
    name: "Beer Heineken",
    description: "",
    category: "Drinks",
    price: 2.5,
  },
  {
    name: "Mexican Beer",
    description: "",
    category: "Drinks",
    price: 3,
  },
  {
    name: "Ananas Extra",
    description: "",
    category: "Drinks",
    price: 1,
  },
  {
    name: "Perrier",
    description: "",
    category: "Drinks",
    price: 1,
  },
];

const menuBtnDOM = document.getElementById("btn-group");
const menuBodyDOM = document.getElementById("menu-body");
const btnDom = document.querySelector("#btn-group");

displayMenu();

const scrollLinks = document.querySelectorAll(".reference");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = btnDom.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight - 7;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});

function loader() {
  let loaded = false;
  const progressBar = document.getElementById("progress");
  const content = document.getElementById("content");
  window.onload = function () {
    loaded = true;
    progressBar.style.width = `100%`;
    setTimeout(() => {
      content.style.display = "block";
      progressBar.parentElement.style.display = "none";
    }, 150);
  };

  document.addEventListener("DOMContentLoaded", function () {
    let width = 20;
    progressBar.style.width = `${width}%`;
    let interval = setInterval(function () {
      if (loaded === true) return clearInterval(interval);
      width += 5;
      progressBar.style.width = width + "%";
      if (width >= 80) clearInterval(interval);
    }, 100);
    let SlowInterval = setInterval(function () {
      if (loaded === true) return clearInterval(SlowInterval);
      width += 1;
      progressBar.style.width = width + "%";
      if (width > 80 && width >= 98) clearInterval(SlowInterval);
    }, 500);
  });
}

function displayMenu() {
  menuBtnDOM.innerHTML = "";
  menuBodyDOM.innerHTML = "";
  // <img src="${category.icon}">
  categories.forEach((category) => {
    menuBtnDOM.innerHTML += `
      <button onclick="click_Tag('${category.name}')">
        <a style="display: none" class="reference" href="#${category.name}"></a>
        <div>${category.name}</div>
      </button>`;

    const section = document.createElement("section");
    section.id = category.name;
    section.innerHTML += `
      <div class="section-header">
        <img src="${category.picture}" />
        <p>${capitalizeFirstLetter(category.name)}</p>
      </div>`;

    const article = document.createElement("article");
    section.appendChild(article);
    const newItems = data.filter((i) => i.category === category.name);
    newItems.forEach((item) => {
      article.innerHTML += `
        <div class="item">
          <div class="item-name">${item.name}</div>
          <div class=item-details>
            <div class="description">${item.description}</div>
            <div class="price">${setPrice(item.price)}</div>
          </div>
        </div>`;
    });
    menuBodyDOM.appendChild(section);
  });
}

function capitalizeFirstLetter(s) {
  if (s && typeof s === "string") {
    return s[0].toUpperCase() + s.slice(1);
  }
  return s;
}

function setPrice(p) {
  if (typeof p === "number") {
    return `${p}$`;
  } else if (typeof p === "string") {
    return p;
  }
  return "";
}

function click_Tag(id) {
  const link = document.querySelector(`a[href="#${id}"]`);
  link && link.click();
}

//show and remove whatsapp and back to top links
const wpBtn = document.getElementById("wp-btn");
const upBtn = document.getElementById("up-btn");
const appearPoint = window.innerHeight * 0.1;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition >= appearPoint) {
    wpBtn.style.display = "flex";
    upBtn.style.display = "flex";
  } else {
    wpBtn.style.display = "flex";
    upBtn.style.display = "none";
  }
});
