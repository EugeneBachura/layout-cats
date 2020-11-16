function clickedLike(num) {
  cats[num]["like"] = !cats[num]["like"];
  let like_el = document.querySelector(
    ".search-blocks > .search-item:nth-child(" + (num + 1) + ") > .like-btn"
  );
  if (cats[num]["like"]) like_el.classList.remove("translucent");
  else like_el.classList.add("translucent");
  mess("Добавлено в избранное");
}
