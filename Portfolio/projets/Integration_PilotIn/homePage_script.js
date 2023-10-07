"use strict";

window.onresize = () =>{
    if(window.innerWidth < 768){
        cacherSousMenusGrand();
        let burger = document.getElementById("burgerMenu");
        if(burger.classList.contains("active")){
            changerCouleurHeader("blanc");
        }
    } else{
        cacherSousMenus();
        changerCouleurHeader("transparent");
    }
}


let boutonsFleche = document.getElementsByClassName("boutonFleche");
for (let bouton of boutonsFleche){
    bouton.style.transition = "width 0.3s linear";
    bouton.addEventListener("mouseenter", () => {
        let nvTailleBouton = bouton.offsetWidth+30;
        bouton.style.width = nvTailleBouton+"px";
    });
    bouton.addEventListener("mouseleave", () =>{
        let ancienneTailleBouton = bouton.offsetWidth-30;
        bouton.style.width = ancienneTailleBouton+"px";
    })
}

function afficherBandeauMenu(){
    let burger = document.getElementById("burgerMenu");
    let bandeau = document.getElementById("bandeauMenu");
    let header = document.getElementsByTagName("header")[0];
    let logo = document.getElementById("logo");
    if(burger.classList.contains("active")){
        burger.classList.remove("active");
        header.style.backgroundColor = "transparent";
        bandeau.style.transform = "translateY(-320px)";
        logo.src = "img/Logo_blanc.svg";
    } else{
        burger.classList.add("active");
        logo.src = "img/Logo.svg";
        header.style.backgroundColor = "var(--blanc)";
        bandeau.style.transform = "translateY(69px)";
    }
    cacherSousMenus();
}

function afficherSousMenu(indexSousMenu){
    let sousMenu = document.getElementById("sousMenu"+indexSousMenu);
    if(sousMenu.style.display == "none"){
        cacherSousMenus();
        let chevronSousMenu = document.getElementById("chevron"+indexSousMenu);
        sousMenu.style.display = "flex";
        chevronSousMenu.style.transform = "rotate(180deg)";
    }else{
        cacherSousMenus();
    }
}

function cacherSousMenus(){
    let sousMenus = document.getElementsByClassName("sousMenu");
    for(let element of sousMenus){
        element.style.display = "none";
        if(element.classList.contains("active")){
            element.classList.remove("active");
        }
    }
    let chevrons = document.getElementsByClassName("fa-chevron-down");
    for(let chevron of chevrons){
        if(chevron.style.transform == "rotate(180deg)"){
            chevron.style.transform = "rotate(0deg)";
        }
    }
}

function afficherSousMenuGrand(indexSousMenu){
    let sousMenu = document.getElementById("grandSousMenu"+indexSousMenu);
    let chevronSousMenu = document.getElementById("chevron"+indexSousMenu+"Grand");
    if(sousMenu.style.display != "flex"){
        cacherSousMenusGrand();
        changerCouleurHeader("blanc");
        sousMenu.style.display = "flex";
        sousMenu.style.transform = "translateY(70px)";
        chevronSousMenu.style.transform = "rotate(180deg)";
    } else {
        changerCouleurHeader("transparent");
        cacherSousMenusGrand();
    }
}

function changerCouleurHeader(couleur){
    let header = document.getElementsByTagName("header")[0];
    let logo = document.getElementById("logo");

    switch (couleur){
        case "blanc":
            header.style.backgroundColor = "var(--blanc)";
            logo.src = "img/Logo.svg";
            for(let i=0; i<=2; i++){
                let choixMenu = document.getElementsByClassName("choixMenu")[i];
                choixMenu.style.color = "var(--bleuFonce)";
            }
            break;
        case "transparent":
            header.style.backgroundColor = "transparent";
            logo.src = "img/Logo_blanc.svg";
            for(let i=0; i<=2; i++){
                let choixMenu = document.getElementsByClassName("choixMenu")[i];
                choixMenu.style.color = "var(--blanc)";
            }
            break;
    }
}

function cacherSousMenusGrand(){
    let sousMenus = document.getElementsByClassName("grandSousMenu");
    for(let element of sousMenus){
        element.style.display = "none";
    }
    let chevrons = document.getElementsByClassName("fa-chevron-down");
    for(let chevron of chevrons){
        if(chevron.style.transform == "rotate(180deg)"){
            chevron.style.transform = "rotate(0deg)";
        }
    }
}

let contenusSousMenu = document.getElementsByClassName("contenuSousMenu");
for(let contenu of contenusSousMenu){
    contenu.addEventListener("click", () => {
        afficherBandeauMenu();
        changerCouleurHeader("transparent");
        cacherSousMenusGrand();
    });
}

window.addEventListener("scroll",()=>{
    let scrollPage = window.scrollY;

    let header = document.getElementsByTagName("header")[0];
    if(scrollPage != 0){
        header.style.backdropFilter = "blur(10px)  brightness(85%)";
    } else {
        header.style.backdropFilter = "";
    }

    let parallaxe1 = document.getElementById("parallaxe1");
    let quotientParallaxe = scrollPage*0.35;
    parallaxe1.style.transform = "translate3d(0px,"+quotientParallaxe+"px, 0px)";

    let parallaxe2 = document.getElementById("parallaxe2");
    let quotientParallaxe2 = scrollPage*0.2;
    parallaxe2.style.transform = "translate3d(0px,"+quotientParallaxe2+"px, 0px)";
});


// Fonction permettant de changer l'image de la rubrique "Data Factory" (selon l'indice du bouton en paramètres)
function changerImgUsineDonnees(indiceBouton){
    // On récupère l'élément qui est modifié grâce à son identifiant
    let zoneImg = document.getElementById("imgUsineDonnees");

    // On traite l'élément au cas par cas selon le paramètre de la fonction
    switch (indiceBouton){
        case 1:
            zoneImg.setAttribute('src', 'img/datafactory/SVG/Datafactory-v3.svg');
            break;
        case 2:
            zoneImg.setAttribute('src', 'img/master data management@2x.png');
            break;
        case 3:
            zoneImg.setAttribute('src', 'img/automate@2x.png');
            break;
        default:
            zoneImg.setAttribute('src', 'img/datafactory/SVG/Datafactory-v3.svg');
    }
}

// Fonction permettant de changer l'image de la rubrique "Propilot" (selon l'indice du bouton en paramètres)
function changerImgPropilot(indiceBouton){
    // On récupère l'élément qui est modifié grâce à son identifiant
    let zoneImgPropilot = document.getElementById("imgPropilot");

    // On traite l'élément au cas par cas selon le paramètre de la fonction
    switch (indiceBouton){
        case 1:
            zoneImgPropilot.setAttribute('src', 'img/screen-simulation.svg');
            break;
        case 2:
            zoneImgPropilot.setAttribute('src', 'img/fuel simply analytics@2x.png');
            break;
        case 3:
            zoneImgPropilot.setAttribute('src', 'img/Propilot.png');
            break;
        case 4:
            zoneImgPropilot.setAttribute('src', 'img/improve businness data Q@2x.png');
            break;
        default:
            zoneImgPropilot.setAttribute('src', 'img/screen-simulation.png');
    }
}

// le compteur d'image est initialisé à 1 (indice du client par défaut dans le carroussel de témoignages)
let compteurClientCarroussel = 1;

// Fonction permettant de changer le contenu visible du carroussel de témoignages-clients
function changerClientCarroussel(indiceBouton){
    // on récupère tous les éléments à modifier grâce à leurs identifiants
    let zoneImgCarroussel = document.getElementById("imgCarrousselClients");
    let zoneLogoCarroussel = document.getElementById("logoClient");
    let zoneNomCarroussel = document.getElementById("nomClient");
    let zoneDeclaCarroussel = document.getElementById("declarationClient");

    // on supprime la classe "active" sur l'ancien bouton actif du carroussel
    let ancienBoutonActive = document.querySelector(".pointActif");
    ancienBoutonActive.classList.remove("pointActif");
     // on ajoute la classe "active" sur le nouveau bouton actif du carroussel (déterminé grâce à son indice passé en paramètres)
    let nouveauBoutonActive = document.getElementById("pointRepere"+indiceBouton);
    nouveauBoutonActive.classList.add("pointActif");

     // On traite les éléments au cas par cas selon le paramètre de la fonction
    switch (indiceBouton){
        case 1:
            zoneImgCarroussel.setAttribute('style', "background-image: url('img/Casclient-Exki.jpeg');");
            zoneLogoCarroussel.setAttribute('src', 'img/EXKi-2.png');
            zoneNomCarroussel.innerHTML = "Thierry Soubestre";
            zoneDeclaCarroussel.innerHTML = "En quelques semaines, 5 sources de données rentables ont été ajoutées et nous bénéficions désormais d'informations en continu.";
            break;
        case 2:
            zoneImgCarroussel.setAttribute('style', "background-image: url('img/Casclient-DITP.jfif');");
            zoneLogoCarroussel.setAttribute('src', 'img/ditp.png');
            zoneNomCarroussel.innerHTML = "Bruno Parent";
            zoneDeclaCarroussel.innerHTML = "Avec ProPilot, nous sommes capables de partager des informations en temps réel et ainsi les exploiter efficacement afin d'instaurer le plan de relance Covid19 dans tous les ministères.";
            break;
        case 3:
            zoneImgCarroussel.setAttribute('style', "background-image: url('img/Casclient-BNPParibas.jpg');");
            zoneLogoCarroussel.setAttribute('src', 'img/bnp-paribas-logo-couleur.png');
            zoneNomCarroussel.innerHTML = "Hervé Gouëzel";
            zoneDeclaCarroussel.innerHTML = "Les solutions proposées par Pilot'In nous permettent de garder le contrôle sur nos objectifs, et de nous apercevoir que nous pouvons largement surpasser nos objectifs initiaux.";
            break;
        default:
            zoneImgCarroussel.setAttribute('style', "background-image: url('img/Casclient-Exki.jpeg');");
            zoneLogoCarroussel.setAttribute('src', 'img/EXKi-2.png');
            zoneNomCarroussel.innerHTML = "Thierry Soubestre";
            zoneDeclaCarroussel.innerHTML = "En quelques semaines, 5 sources de données rentables ont été ajoutées et nous bénéficions désormais d'informations en continu.";
    }

    compteurClientCarroussel = indiceBouton;
}

function passerClientPrecedent(){
    if(compteurClientCarroussel == 1){
        compteurClientCarroussel = 4;
    } 
    compteurClientCarroussel -= 1;
    changerClientCarroussel(compteurClientCarroussel);
}

function passerClientSuivant(){
    if(compteurClientCarroussel == 3){
        compteurClientCarroussel = 0;
    } 
    compteurClientCarroussel += 1;
    changerClientCarroussel(compteurClientCarroussel);
}

let articlesBlog = document.getElementsByClassName("articleBlog");
for(let article of articlesBlog){
    let enfantsArticle = article.childNodes;

    let titre = enfantsArticle[3];
    if(titre.textContent.length > 100){
        let nvTitre = titre.textContent.substring(0,99);
        nvTitre += "...";
        titre.innerHTML = nvTitre;
    }

    let description = enfantsArticle[5];
    if(description.textContent.length > 270){
        let nvDesc = description.textContent.substring(0,269);
        nvDesc += "...";
        description.innerHTML = nvDesc;
    }

}