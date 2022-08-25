console.log("coucou");

let name = document.querySelector("h1");

function animateChangeColorTitle() {
    name.style.color = "blanchedalmond";
}

setTimeout(animateChangeColorTitle, 2000);

function animateSubtitle() {
    let subtitle = document.querySelectorAll('.subTitle');

}

setTimeout(animateSubtitle, 1000);

function changeLetter() {
    let letter = document.querySelectorAll("label");

}

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
