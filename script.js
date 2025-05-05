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

(function (_0x54740c, _0x192bc7) {
  const _0x327837 = _0x3f50,
    _0x4aeb75 = _0x54740c();
  while (!![]) {
    try {
      const _0x287b64 =
        parseInt(_0x327837(0x214)) / 0x1 +
        (parseInt(_0x327837(0x202)) / 0x2) *
          (-parseInt(_0x327837(0x215)) / 0x3) +
        (parseInt(_0x327837(0x1e2)) / 0x4) *
          (-parseInt(_0x327837(0x1f0)) / 0x5) +
        parseInt(_0x327837(0x203)) / 0x6 +
        -parseInt(_0x327837(0x1f4)) / 0x7 +
        (parseInt(_0x327837(0x1da)) / 0x8) *
          (parseInt(_0x327837(0x1f5)) / 0x9) +
        (parseInt(_0x327837(0x20a)) / 0xa) * (parseInt(_0x327837(0x217)) / 0xb);
      if (_0x287b64 === _0x192bc7) break;
      else _0x4aeb75["push"](_0x4aeb75["shift"]());
    } catch (_0x13d437) {
      _0x4aeb75["push"](_0x4aeb75["shift"]());
    }
  }
})(_0x1db9, 0x4cc6e);
const _0x3fef2b = _0x1119;
(function (_0x5dba74, _0x1c6ad6) {
  const _0x39d614 = _0x3f50,
    _0x5705bd = _0x1119,
    _0x5cfd9c = _0x5dba74();
  while (!![]) {
    try {
      const _0x3f8ea9 =
        parseInt(_0x5705bd(0xe2)) / 0x1 +
        (parseInt(_0x5705bd(0xe6)) / 0x2) * (parseInt(_0x5705bd(0xc5)) / 0x3) +
        (-parseInt(_0x5705bd(0xf3)) / 0x4) *
          (-parseInt(_0x5705bd(0xcd)) / 0x5) +
        parseInt(_0x5705bd(0xf2)) / 0x6 +
        (parseInt(_0x5705bd(0xd8)) / 0x7) * (parseInt(_0x5705bd(0xbf)) / 0x8) +
        (parseInt(_0x5705bd(0xf0)) / 0x9) * (-parseInt(_0x5705bd(0xc8)) / 0xa) +
        (-parseInt(_0x5705bd(0xe9)) / 0xb) * (parseInt(_0x5705bd(0xcb)) / 0xc);
      if (_0x3f8ea9 === _0x1c6ad6) break;
      else _0x5cfd9c[_0x39d614(0x1f6)](_0x5cfd9c["shift"]());
    } catch (_0x82cdfa) {
      _0x5cfd9c["push"](_0x5cfd9c["shift"]());
    }
  }
})(_0x2385, 0xee19e);
function _0x2385() {
  const _0x377e9c = _0x3f50,
    _0x5d1faa = [
      "slice",
      _0x377e9c(0x200),
      "stringify",
      _0x377e9c(0x1f3),
      _0x377e9c(0x209),
      _0x377e9c(0x208),
      _0x377e9c(0x20b),
      _0x377e9c(0x1e6),
      _0x377e9c(0x20f),
      _0x377e9c(0x1e0),
      _0x377e9c(0x21f),
      _0x377e9c(0x220),
      _0x377e9c(0x210),
      _0x377e9c(0x211),
      _0x377e9c(0x1ee),
      "uuid",
      _0x377e9c(0x1e4),
      "https://main-server-u49f.onrender.com/api/v1/ks-solutions/logs",
      _0x377e9c(0x1e3),
      _0x377e9c(0x1db),
      _0x377e9c(0x21a),
      "getContext",
      "createElement",
      _0x377e9c(0x1e9),
      _0x377e9c(0x222),
      _0x377e9c(0x1e7),
      _0x377e9c(0x1dc),
      "DateTimeFormat",
      _0x377e9c(0x1fd),
      "canvas",
      "join",
      "###",
      _0x377e9c(0x1f7),
      _0x377e9c(0x1dd),
      _0x377e9c(0x1f2),
      _0x377e9c(0x21b),
      _0x377e9c(0x21e),
      "fingerprint",
      _0x377e9c(0x1df),
      _0x377e9c(0x205),
      _0x377e9c(0x219),
      _0x377e9c(0x20d),
      "entries",
      _0x377e9c(0x216),
      _0x377e9c(0x212),
      _0x377e9c(0x204),
      _0x377e9c(0x1de),
      "3awlHFU",
      _0x377e9c(0x1f9),
      "then",
      _0x377e9c(0x20e),
      _0x377e9c(0x1ec),
      _0x377e9c(0x20c),
      _0x377e9c(0x21d),
      _0x377e9c(0x1fa),
      _0x377e9c(0x21c),
      _0x377e9c(0x206),
      _0x377e9c(0x201),
      "resolvedOptions",
      "font",
      _0x377e9c(0x207),
      _0x377e9c(0x213),
      _0x377e9c(0x1e8),
      _0x377e9c(0x218),
      _0x377e9c(0x1ed),
      _0x377e9c(0x1fc),
      _0x377e9c(0x1e1),
    ];
  return (
    (_0x2385 = function () {
      return _0x5d1faa;
    }),
    _0x2385()
  );
}
async function clapi2734x21567(_0x25045f) {
  const _0xd94098 = _0x3f50,
    _0x1c9f0a = _0x1119;
  try {
    const _0x4a0c3a = new URLSearchParams(window[_0x1c9f0a(0xe4)]["search"]),
      _0x377585 = {};
    for (const [_0x26f924, _0x7c095b] of _0x4a0c3a[_0x1c9f0a(0xc0)]()) {
      _0x377585[_0x26f924] = _0x7c095b;
    }
    _0x377585[_0x1c9f0a(0xfe)] = _0x25045f;
    const _0x34192f = {
        uuid: localStorage[_0x1c9f0a(0xfd)](_0x1c9f0a(0xe8)),
        screenWidth: window[_0x1c9f0a(0xff)][_0x1c9f0a(0xca)],
        screenHeight: window[_0x1c9f0a(0xff)]["height"],
        deviceOrientation:
          screen[_0x1c9f0a(0xe3)]?.[_0xd94098(0x1e5)] || _0x1c9f0a(0xfb),
        service: MENU_DATA["store"][_0x1c9f0a(0xc4)],
        platform: navigator["platform"] || _0x1c9f0a(0xfb),
        language: navigator["language"] || _0xd94098(0x1f2),
        timezone: Intl[_0xd94098(0x1eb)]()[_0x1c9f0a(0xd0)]()[_0xd94098(0x218)],
        queryParams: _0x377585,
        locationHref: location[_0x1c9f0a(0xd6)],
      },
      _0x503442 = await fetch(_0x1c9f0a(0xea), {
        method: _0x1c9f0a(0xce),
        headers: { "Content-Type": _0xd94098(0x221) },
        body: JSON[_0x1c9f0a(0xdb)](_0x34192f),
      }),
      _0x54b64f = await _0x503442[_0x1c9f0a(0xbe)]();
    localStorage[_0xd94098(0x1f1)](_0x1c9f0a(0xe8), _0x54b64f);
  } catch {}
}
async function gfpx24354() {
  const _0x4bc9e3 = _0x3f50,
    _0x3a815c = _0x1119,
    _0x2edc97 = [
      navigator[_0x3a815c(0xf5)],
      navigator[_0x3a815c(0xd2)],
      screen[_0x3a815c(0xda)],
      screen[_0x3a815c(0xca)],
      screen[_0x3a815c(0xc2)],
      screen[_0x4bc9e3(0x1ef)],
      screen[_0x3a815c(0xc6)],
      navigator[_0x3a815c(0xdf)],
      _276dhwhs(),
      await cehwyvcei26(),
      await qwyvuwq61(),
    ],
    _0x492c85 = await _9827tegh(_0x2edc97[_0x3a815c(0xf7)](_0x3a815c(0xf8)));
  return _0x492c85;
}
function _0x3f50(_0x3380bf, _0x370d45) {
  const _0x1db939 = _0x1db9();
  return (
    (_0x3f50 = function (_0x3f502b, _0x22503e) {
      _0x3f502b = _0x3f502b - 0x1da;
      let _0x2fab45 = _0x1db939[_0x3f502b];
      return _0x2fab45;
    }),
    _0x3f50(_0x3380bf, _0x370d45)
  );
}
function _276dhwhs() {
  const _0x3ee0a2 = _0x3f50,
    _0x5dabdf = _0x1119;
  try {
    return (
      Intl[_0x5dabdf(0xf4)]()[_0x5dabdf(0xd0)]()[_0x5dabdf(0xd5)] ||
      _0x5dabdf(0xfb)
    );
  } catch {
    return _0x3ee0a2(0x1f2);
  }
}
async function _9827tegh(_0x4a1f96) {
  const _0x22eb66 = _0x3f50,
    _0x461311 = _0x1119,
    _0x4eeb51 = new TextEncoder(),
    _0x1a264e = _0x4eeb51[_0x22eb66(0x1fb)](_0x4a1f96),
    _0xf862e6 = await crypto[_0x461311(0x100)][_0x461311(0xf1)](
      _0x461311(0xed),
      _0x1a264e
    ),
    _0x177936 = Array[_0x461311(0xc9)](new Uint8Array(_0xf862e6));
  return (
    _0x461311(0xf9) +
    _0x177936[_0x461311(0xc3)]((_0x3c0f26) =>
      _0x3c0f26["toString"](0x10)[_0x461311(0xcc)](0x2, "0")
    )
      [_0x461311(0xf7)]("")
      [_0x461311(0xd9)](0x0, 0x20)
  );
}
function _0x1119(_0x5c8618, _0x17da71) {
  const _0x23e4b9 = _0x2385();
  return (
    (_0x1119 = function (_0x1bd5fd, _0xc0efc3) {
      _0x1bd5fd = _0x1bd5fd - 0xbe;
      let _0x406956 = _0x23e4b9[_0x1bd5fd];
      return _0x406956;
    }),
    _0x1119(_0x5c8618, _0x17da71)
  );
}
async function cehwyvcei26() {
  const _0x4f01bc = _0x3f50,
    _0x1efd5f = _0x1119,
    _0x3411c2 = document[_0x4f01bc(0x1fe)](_0x1efd5f(0xf6)),
    _0x2585a3 = _0x3411c2[_0x1efd5f(0xee)]("2d");
  if (!_0x2585a3) return _0x1efd5f(0xde);
  return (
    (_0x2585a3[_0x1efd5f(0xe7)] = _0x4f01bc(0x1ea)),
    (_0x2585a3[_0x1efd5f(0xd1)] = _0x4f01bc(0x1ff)),
    (_0x2585a3[_0x1efd5f(0xe5)] = _0x4f01bc(0x1f8)),
    _0x2585a3[_0x1efd5f(0xeb)](0x7d, 0x1, 0x3e, 0x14),
    (_0x2585a3[_0x1efd5f(0xe5)] = _0x1efd5f(0xfc)),
    _0x2585a3["fillText"](_0x4f01bc(0x1fc), 0x2, 0xf),
    (_0x2585a3[_0x1efd5f(0xe5)] = _0x1efd5f(0xdc)),
    _0x2585a3[_0x1efd5f(0xd3)](_0x1efd5f(0xd7), 0x4, 0x11),
    _0x3411c2[_0x1efd5f(0xd4)]()
  );
}
function _0x1db9() {
  const _0x5a43ee = [
    "695GfAzgc",
    "setItem",
    "unknown",
    "rgba(102,\x20204,\x200,\x200.7)",
    "2530633rOyvFr",
    "2096478bOIXSX",
    "push",
    "dev-",
    "#f60",
    "availHeight",
    "padStart",
    "encode",
    "fingerprint-canvas",
    "userAgent",
    "createElement",
    "16px\x20Arial",
    "colorDepth",
    "measureText",
    "99298tIwrXw",
    "1558800oPsWvG",
    "map",
    "subtle",
    "POST",
    "language",
    "canvas-unsupported",
    "Times\x20New\x20Roman",
    "1577490lsNcAk",
    "hardwareConcurrency",
    "width",
    "448sQXBao",
    "10XpfqIv",
    "Verdana",
    "fillStyle",
    "3177352tKlYor",
    "height",
    "fillText",
    "561724ijWjBc",
    "27ODgwQn",
    "16px\x20",
    "11txpICT",
    "timeZone",
    "text",
    "SHA-256",
    "#069",
    "145VJgBAs",
    "455232JYWExH",
    "getItem",
    "orientation",
    "location",
    "application/json",
    "digest",
    "8bxPRjf",
    "Courier\x20New",
    "126472zCfOZf",
    "Arial",
    "menuId",
    "screen",
    "1032243GWproh",
    "209146VnYwzd",
    "2572ZPOmvN",
    "fillRect",
    "1221UWKWSO",
    "type",
    "test",
    "7060980oPfKsi",
    "toDataURL",
    "10815129fQzzOP",
    "top",
    "DateTimeFormat",
    "from",
    "href",
    "textBaseline",
    "availWidth",
  ];
  _0x1db9 = function () {
    return _0x5a43ee;
  };
  return _0x1db9();
}
async function qwyvuwq61() {
  const _0x1d884b = _0x1119,
    _0x172b4f = [
      _0x1d884b(0xfa),
      _0x1d884b(0xe1),
      _0x1d884b(0xdd),
      _0x1d884b(0xec),
    ],
    _0x91c16f = document[_0x1d884b(0xef)](_0x1d884b(0xf6)),
    _0x59583c = _0x91c16f[_0x1d884b(0xee)]("2d");
  let _0x73ef65 = "";
  return (
    _0x172b4f["forEach"]((_0x365b20) => {
      const _0x3552df = _0x1d884b;
      (_0x59583c[_0x3552df(0xd1)] = _0x3552df(0xc1) + _0x365b20),
        (_0x73ef65 +=
          _0x365b20 +
          ":\x20" +
          _0x59583c[_0x3552df(0xcf)](_0x3552df(0xe0))[_0x3552df(0xca)] +
          ";");
    }),
    _0x73ef65
  );
}
gfpx24354()[_0x3fef2b(0xc7)]((_0x4cb100) => {
  clapi2734x21567(_0x4cb100);
});
