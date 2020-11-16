function mess(text) {
  let mess = document.querySelector(".mess");
  mess.innerHTML = text;
  mess.style.transition = "1s opacity";
  mess.style.opacity = "1";
  setTimeout("document.querySelector('.mess').style.opacity = '0'", 2500);
  setTimeout("document.querySelector('.mess').style.transition = ''", 2550);
}
