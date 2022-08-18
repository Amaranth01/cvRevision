console.log("coucou");

let name = document.querySelector("h1");
let subTitle = document.getElementsByClassName("subTitle");

function animateChangeColorTitle() {
    name.style.color = "blanchedalmond";
}

setTimeout(animateChangeColorTitle, 1000);

