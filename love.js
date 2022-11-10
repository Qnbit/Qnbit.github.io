let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function() {
    card.setAttribute("style", "opacity:0");
    let x = document.createElement("audio");
    x.setAttribute("src", "qlx.mp3");
    x.setAttribute("autoplay", "autoplay");})
