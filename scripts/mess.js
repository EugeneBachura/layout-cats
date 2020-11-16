function mess(text) {
    let mess = document.querySelector('.mess');
    mess.innerHTML = text;
    mess.style.opacity = "1";
    mess.style.transition = "1.55s opacity";
    setTimeout("document.querySelector('.mess').style.opacity = '0'", 1500);
    setTimeout("document.querySelector('.mess').style.transition = ''", 1550);
}