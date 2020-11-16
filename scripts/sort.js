var sortByAge_direction = 0,
  sortByPrice_direction = 1;

function sortByAge() {
  let element = document.querySelector(".search-blocks"),
    search_blocks = "";
  /*сортировка*/
  for (let i = 0; i < cats.length - 1; i++) {
    for (let j = 0; j < cats.length - 1 - i; j++) {
      if (cats[j]["age"] > cats[j + 1]["age"]) {
        let temp = cats[j];
        cats[j] = cats[j + 1];
        cats[j + 1] = temp;
      }
    }
  }
  if (sortByAge_direction == 0) cats.reverse();
  console.log(cats);
  /*вывод*/
  for (let i = 0; i < cats.length; i++) {
    search_blocks =
      search_blocks +
      '<div class="search-item"><img class="preview" src="imgs/cats/' +
      cats[i]["URLphoto"] +
      '"/>';
    if (cats[i]["sale"] != 0) {
      search_blocks =
        search_blocks + '<div class="sale-btn">-' + cats[i]["sale"] + "%</div>";
    }
    if (cats[i]["like"]) {
      search_blocks =
        search_blocks +
        '<img class="like-btn" src="imgs/like.svg"/ onClick="clickedLike(' +
        i +
        ')">';
    } else
      search_blocks =
        search_blocks +
        '<img class="like-btn translucent" src="imgs/like.svg" onClick="clickedLike(' +
        i +
        ')"/>';
    search_blocks =
      search_blocks +
      '<div class="description"><h4 class="title">' +
      cats[i]["name"] +
      "</h4>";
    search_blocks =
      search_blocks +
      '<div class="properties"><div><small>' +
      cats[i]["color"] +
      "</small></div>";
    search_blocks =
      search_blocks +
      "<div><b>" +
      cats[i]["age"] +
      " мес.</b><small>Возраст</small></div>";
    search_blocks =
      search_blocks +
      "<div><b>" +
      cats[i]["feet"] +
      "</b><small>Кол-во лап</small></div></div>";
    let cat_prices = cats[i]["price"]
      .toString()
      .replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
    search_blocks =
      search_blocks + '<div class="price">' + cat_prices + " руб.</div></div>";
    if (cats[i]["stock"]) {
      search_blocks = search_blocks + '<div class="buy-btn">Купить</div></div>';
    } else
      search_blocks =
        search_blocks + '<div class="buy-btn not-stock">Продан</div></div>';
  }
  element.innerHTML = search_blocks;
  /*изменение кнопки*/
  if (sortByAge_direction == 0) {
    sortByAge_direction = 1;
    document.getElementById("age-sort-btn").classList.remove("sort-top");
    document.getElementById("age-sort-btn").classList.add("sort-bottom");
  } else {
    sortByAge_direction = 0;
    document.getElementById("age-sort-btn").classList.remove("sort-bottom");
    document.getElementById("age-sort-btn").classList.add("sort-top");
  }
}

function sortByPrice() {
  let element = document.querySelector(".search-blocks"),
    search_blocks = "";
  /*сортировка*/
  for (let i = 0; i < cats.length - 1; i++) {
    for (let j = 0; j < cats.length - 1 - i; j++) {
      if (cats[j]["price"] > cats[j + 1]["price"]) {
        let temp = cats[j];
        cats[j] = cats[j + 1];
        cats[j + 1] = temp;
      }
    }
  }
  if (sortByPrice_direction == 1) cats.reverse();
  console.log(cats);
  /*вывод*/
  for (let i = 0; i < cats.length; i++) {
    search_blocks =
      search_blocks +
      '<div class="search-item"><img class="preview" src="imgs/cats/' +
      cats[i]["URLphoto"] +
      '"/>';
    if (cats[i]["sale"] != 0) {
      search_blocks =
        search_blocks + '<div class="sale-btn">-' + cats[i]["sale"] + "%</div>";
    }
    if (cats[i]["like"]) {
      search_blocks =
        search_blocks +
        '<img class="like-btn" src="imgs/like.svg" onClick="clickedLike(' +
        i +
        ')"/>';
    } else
      search_blocks =
        search_blocks +
        '<img class="like-btn translucent" src="imgs/like.svg" onClick="clickedLike(' +
        i +
        ')"/>';
    search_blocks =
      search_blocks +
      '<div class="description"><h4 class="title">' +
      cats[i]["name"] +
      "</h4>";
    search_blocks =
      search_blocks +
      '<div class="properties"><div><small>' +
      cats[i]["color"] +
      "</small></div>";
    search_blocks =
      search_blocks +
      "<div><b>" +
      cats[i]["age"] +
      " мес.</b><small>Возраст</small></div>";
    search_blocks =
      search_blocks +
      "<div><b>" +
      cats[i]["feet"] +
      "</b><small>Кол-во лап</small></div></div>";
    let cat_prices = cats[i]["price"]
      .toString()
      .replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
    search_blocks =
      search_blocks + '<div class="price">' + cat_prices + " руб.</div></div>";
    if (cats[i]["stock"]) {
      search_blocks = search_blocks + '<div class="buy-btn">Купить</div></div>';
    } else
      search_blocks =
        search_blocks + '<div class="buy-btn not-stock">Продан</div></div>';
  }
  element.innerHTML = search_blocks;
  /*изменение кнопки*/
  if (sortByPrice_direction == 0) {
    sortByPrice_direction = 1;
    document.getElementById("price-sort-btn").classList.remove("sort-top");
    document.getElementById("price-sort-btn").classList.add("sort-bottom");
  } else {
    sortByPrice_direction = 0;
    document.getElementById("price-sort-btn").classList.remove("sort-bottom");
    document.getElementById("price-sort-btn").classList.add("sort-top");
  }
}

/*коты*/
const cats = [
  {
    name: "Кот полосатый",
    URLphoto: "1.png",
    color: "Коричневый окрас",
    age: 2,
    feet: 4,
    price: 30000,
    like: false,
    sale: 40,
    stock: true,
  },
  {
    name: "Кот полосатый",
    URLphoto: "2.png",
    color: "Коричневый окрас",
    age: 2,
    feet: 4,
    price: 40000,
    like: true,
    sale: 0,
    stock: false,
  },
  {
    name: "Кот полосатый",
    URLphoto: "1.png",
    color: "Коричневый окрас",
    age: 2,
    feet: 4,
    price: 20000,
    like: false,
    sale: 0,
    stock: true,
  },
  {
    name: "Кот полосатый",
    URLphoto: "1.png",
    color: "Коричневый окрас",
    age: 2,
    feet: 4,
    price: 25000,
    like: false,
    sale: 0,
    stock: true,
  },
  {
    name: "Кот полосатый",
    URLphoto: "3.png",
    color: "Коричневый окрас",
    age: 2,
    feet: 4,
    price: 30000,
    like: false,
    sale: 40,
    stock: true,
  },
  {
    name: "Кот полосатый",
    URLphoto: "1.png",
    color: "Коричневый окрас",
    age: 2,
    feet: 4,
    price: 10000,
    like: true,
    sale: 0,
    stock: false,
  },
  {
    name: "Кот полосатый",
    URLphoto: "3.png",
    color: "Коричневый окрас",
    age: 5,
    feet: 3,
    price: 15500,
    like: false,
    sale: 20,
    stock: true,
  },
];
