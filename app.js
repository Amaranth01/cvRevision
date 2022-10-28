
/*animate h1*/
let name = document.querySelector("h1");

function animateChangeColorTitle() {
    name.style.color = "blanchedalmond";
}

setTimeout(animateChangeColorTitle, 2000);

/*change color background h2 + h3 */
let subtitle = document.querySelectorAll('.subTitle');

function changeColor() {
     for (let i = 0; i < subtitle.length; i++) {
         subtitle[i].style.backgroundColor = 'darkgreen';
     }
}
setTimeout(changeColor, 3500)

/*Change color label*/
let span = document.querySelectorAll('span');

let color = ['darkred', 'darkgreen', 'darkblue', 'darkgrey', 'darkmagenta', 'darksalmon', 'darkviolet'];

function random() {
    return Math.floor(Math.random() * color.length);
}


function changeLetter() {
    for (let i = 0; i < span.length; i++) {
        span[i].addEventListener('mouseover', function (){
            span[i].style.color = color[random(color)];
            span[i].style.fontStyle = 'italic';
            span[i].style.fontWeight = 'bold';
        });
    }
}

changeLetter();

/*Management Json */
let hobbies = document.querySelector('#hobbies');
const Request = "data.json";

let xhr = new XMLHttpRequest();
xhr.open("GET", Request);

xhr.responseType = "json";
xhr.onload = function () {
    if(xhr.status === 200) {
        let response = xhr.response;
        let ulHobbies = document.createElement('ul');

        let liGame  = document.createElement('li');
        liGame.innerHTML = response.Ul.hobbies;

        let liRead = document.createElement('li');
        liRead.innerHTML = response.Ul.hobbies;

        let liWrite = document.createElement('li');
        liWrite.innerHTML = response.Ul.hobbies;

        let liDog = document.createElement('li');
        liDog.innerHTML = response.Ul.hobbies;

        hobbies.append(ulHobbies)
        ulHobbies.append(liGame);
    }
}
xhr.send();

let language = document.querySelector('#langue');
let computerSkills = document.querySelector('#computerSkill');

const RequestDd = "datadd.json";

let xhrDd = new XMLHttpRequest();
xhrDd.open("GET", RequestDd);

xhrDd.responseType = "json";
xhrDd.onload = function () {
    if (xhrDd.status === 200) {
        let response = xhrDd.response;

        let ddAnglais = document.createElement('dd');
        ddAnglais.innerHTML = response.Dd.langue;

        let ddAllemand = document.createElement('dd');
        ddAllemand.innerHTML = response.Dd.langue;

        let ddSigne = document.createElement('dd');
        ddSigne.innerHTML = response.Dd.langue;

        let ddWP = document.createElement('dd');
        ddWP.innerHTML = response.Dd.skills;

        let ddHTML = document.createElement('dd');
        ddHTML.innerHTML = response.Dd.skills;

        language.append(ddAnglais);
        computerSkills.append(ddWP);
    }
}
xhrDd.send();