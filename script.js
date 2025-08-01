loader();

document.title = MENU_DATA.store.storeName;

if (MENU_DATA.store.storeLogo) {
  const link = document.createElement("link");
  link.rel = "shortcut icon";
  link.href = MENU_DATA.store.storeLogo;
  link.type = "image/x-icon";
  document.head.appendChild(link);
}

const categories = MENU_DATA.sub_categories
  .sort((a, b) => a.order - b.order)
  .filter((c) => !c.hide)
  .map((c) => ({
    name: c.label,
    icon: c.img,
    picture: c.bgImg,
    _id: c._id,
  }));

const data = MENU_DATA.items
  .sort((a, b) => a.order - b.order)
  .filter((c) => !c.hide)
  .map((c) => ({
    name: c.label,
    description: c.description,
    category: c.subcategoryId,
    price: c.price,
  }));

const menuBtnDOM = document.getElementById("btn-group");
const menuBodyDOM = document.getElementById("menu-body");
const menuHeader = document.getElementById("header");
const btnDom = document.querySelector("#btn-group");
const content = document.getElementById("content");

menuHeader.innerHTML = `
  ${
    MENU_DATA.store.storeLogo
      ? `
          <div class="img-header">
            <img
              src="${MENU_DATA.store.storeLogo}"
              alt="${MENU_DATA.store.storeName}"
              class="bg-image" />
          </div>
        `
      : ""
  }
  ${
    MENU_DATA.store.sm?.locationUrl
      ? `
          <div class="details">
            <a
              class="a-white"
              href="${MENU_DATA.store.sm.locationUrl}"
              target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-geo-fill"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411" />
              </svg>
              ${MENU_DATA.store.sm.location ? MENU_DATA.store.sm.location : ""}
            </a>
          </div>
        `
      : ""
  }
  ${
    MENU_DATA.store.sm?.instagramUrl || MENU_DATA.store.sm?.facebookUrl
      ? `
          <div class="details-insta-fb">
            ${
              MENU_DATA.store.sm?.instagramUrl
                ? `
                    <a
                      class="a-white"
                      href="${MENU_DATA.store.sm.instagramUrl}"
                      target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-instagram"
                        viewBox="0 0 16 16">
                        <path
                          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </a>
                  `
                : `
                    <a
                      class="a-white"
                      href="${MENU_DATA.store.sm.facebookUrl}"
                      target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16">
                        <path
                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </a>
                  `
            }
            <span>${MENU_DATA.store.storeName}</span>
            ${
              MENU_DATA.store.sm?.facebookUrl &&
              MENU_DATA.store.sm?.instagramUrl
                ? `
                    <a
                      class="a-white"
                      href="${MENU_DATA.store.sm.facebookUrl}"
                      target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16">
                        <path
                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </a>
                   `
                : ""
            }
          </div>
        `
      : ""
  }
  ${
    MENU_DATA.store.phoneNumber
      ? `
          <div class="details">
            <a href="tel:${MENU_DATA.store.phoneNumber}" class="a-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              ${
                MENU_DATA.store.displayedPhoneNumber
                  ? MENU_DATA.store.displayedPhoneNumber
                  : MENU_DATA.store.phoneNumber
              }
            </a>
          </div>
        `
      : ""
  }
`;

if (MENU_DATA.store.sm?.whatsappUrl) {
  const wp = document.createElement("div");
  wp.id = "wp-btn";
  wp.innerHTML = `
    <a href="${MENU_DATA.store.sm.whatsappUrl}" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-whatsapp"
        viewBox="0 0 16 16">
        <path
          d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
      </svg>
    </a>
  `;
  content.appendChild(wp);
}

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
  categories.forEach((category) => {
    menuBtnDOM.innerHTML += `
      <button onclick="click_Tag('${category._id}')">
        <a style="display: none" class="reference" href="#${category._id}"></a>
        <div>${category.name}</div>
      </button>`;

    const section = document.createElement("section");
    section.id = category._id;
    section.innerHTML += `
      <div class="section-header">
        ${
          category.picture
            ? `<img src="${category.picture}" alt="${category.name}"/>`
            : ""
        }
        <p>${capitalizeFirstLetter(category.name)}</p>
      </div>`;

    const article = document.createElement("article");
    section.appendChild(article);
    const newItems = data.filter((i) => i.category === category._id);
    newItems.forEach((item) => {
      article.innerHTML += `
        <div class="item">
          <div class="item-name">${item.name}</div>
          <div class=item-details>
            <div class="description">${item.description || ""}</div>
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
    return `${p}${MENU_DATA.store.currency}`;
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
    if (wpBtn) {
      wpBtn.style.display = "flex";
    }
    upBtn.style.display = "flex";
  } else {
    if (wpBtn) {
      wpBtn.style.display = "flex";
    }
    upBtn.style.display = "none";
  }
});

async function callLogApi() {
  try {
    const params = new URLSearchParams(window.location.search);
    const queryParams = {};
    for (const [key, value] of params.entries()) {
      queryParams[key] = value;
    }

    const payload = {
      uuid: localStorage.getItem("uuid"),
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      deviceOrientation: screen.orientation?.type || "unknown",
      service: MENU_DATA.store.menuId,

      platform: navigator.platform || "unknown",
      language: navigator.language || "unknown",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      queryParams,
      locationHref: location.href,
    };

    const response = await fetch(
      "https://main-server-u49f.onrender.com/api/v1/ks-solutions/logs",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const uuid = await response.text();
    localStorage.setItem("uuid", uuid);
  } catch {}
}

callLogApi();
