
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

let jsonDataObjectHobbies = `{
    "listeHobbies": {        
        "hobbies": [
            "Les jeux vidéo",
            "la lecture",
            "La rédaction",
            "Le dressage canin"
        ]
    },
}`;

let json = JSON.stringify(jsonDataObjectHobbies);

document.querySelector('#hobbies').innerHTML = json;

let jsonSataObjectSkill = `{
    "listSkill" : {
        "ComputerSkill": [
            "logiciel": "Maîtrise de Wordpress, Gimp, PHPStorm",
            "Language": "Maîtrise du langage HTML, CSS, JS, PHP, SQL"
        ]
    },
}`;

let jsonSkill = JSON.stringify(jsonSataObjectSkill);
document.querySelector('#computerSkill').innerHTML = jsonSkill;

let jsonDD = `{
    "langue": {
        "anglais": "niveau intermédiaire",
        "Allemand": "niveau débutant",
        "Langue des signes": "niveau intermédiaire"
  }
}`;
let jsonLanguage = JSON.stringify(jsonDD);
document.querySelector('#languageSkill').innerHTML = jsonLanguage;
