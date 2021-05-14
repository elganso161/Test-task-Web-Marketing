let navList = document.querySelector(".nav__list");
let navListBreadcrumb = document.querySelector(".nav__list-breadcrumb");
let contentBlockList = document.querySelector(".content__block-list");

//навигация
fetch(
  "https://raw.githubusercontent.com/aleksey-drozdov/webm-test-data/main/data.json"
)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    data.nav.forEach((elem) => {
      navList.innerHTML += `<li><a href=${elem.href}>${elem.text}</a></li>`;
    });
  });

//хлебные крошки
fetch(
  "https://raw.githubusercontent.com/aleksey-drozdov/webm-test-data/main/data.json"
)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    data.breadcrumbs.forEach((elem) => {
      navListBreadcrumb.innerHTML += `<li><a href=${elem.href}>${elem.text}</a><i></i></li>`;
    });
  });

//карточки
fetch(
  "https://raw.githubusercontent.com/aleksey-drozdov/webm-test-data/main/data.json"
)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    data.stock.forEach((elem) => {
      contentBlockList.innerHTML += `<li>
                <a href=${elem.href}> <img src=${
        "./img/" + elem.image
      } alt="Картинка" /></a>
                <div class="content__block-center">
                  <h3 class="content__title">${elem.title}</h3>
                  <p class="content__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti ratione repudiandae perspiciatis, pariatur tempora corporis, repellat placeat ut ipsam et nulla atque aspernatur qui eius deserunt veritatis ab facilis sunt.</p>
                  <div class="configuration">
                    <p>${elem.year}</p>
                    <p>${elem.mileage + " km"}</p>
                    <p>${elem.axle_configuration}</p>
                  </div>
                </div>
                <div><p>${"$ " + elem.price}</p></div>
              </li>`;
    });
  });
