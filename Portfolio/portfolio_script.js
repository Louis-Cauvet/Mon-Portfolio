// on active le mode strict pour une meilleure écriture de code
"use strict";

// cette variable définit le projet personnel qui apparaît à l'écran
let compteurImgCarroussel = 1;
changerProjetCaroussel(compteurImgCarroussel);

calibrerAffichageSlider("Experiences");
window.addEventListener("resize", () => {
  calibrerAffichageSlider("Experiences");
});

window.addEventListener("scroll", () => {
  let scrollPage = window.scrollY;

  // let header = document.getElementsByTagName("nav")[0];
  // if (scrollPage != 0) {
  //   header.style.backdropFilter = "blur(10px)  brightness(85%)";
  // } else {
  //   header.style.backdropFilter = "";
  // }
});

function afficheMenu() {
  let iconeBurger = document.getElementById("burger");
  iconeBurger.classList.toggle("active");
}

// on indique les différentes chaines de caractères qui se relaient lors de l'animation du "typing", ainsi que la vitesse
var policeTape = new Typed(".typing", {
  strings: ["étudiant en développement web", "alternant dans une agence web", "ravi de vous voir ici !"],
  typeSpeed: 110,
  BackSpeed: 100,
  loop: true,
});

function afficherSlider(rubriqueVoulue) {
  const slider = document.getElementById("blocOngletsSlider");
  const boutonExperiences = document.getElementById("boutonExperiences");
  const boutonFormation = document.getElementById("boutonFormation");

  switch (rubriqueVoulue) {
    case "experiences":
      if (boutonExperiences.classList.contains("inactive")) {
        slider.style.transform = "translateX(0vw)";
        boutonExperiences.classList.remove("inactive");
        boutonFormation.classList.add("inactive");
        setTimeout(() => {
          calibrerAffichageSlider("Experiences");
        }, 800);
      }
      break;

    case "formation":
      if (boutonFormation.classList.contains("inactive")) {
        slider.style.transform = "translateX(-100vw)";
        boutonFormation.classList.remove("inactive");
        boutonExperiences.classList.add("inactive");
        setTimeout(() => {
          calibrerAffichageSlider("Formation");
        }, 800);
      }
      break;

    default:
  }
}

function calibrerAffichageSlider(rubrique) {
  const slider = document.getElementById("blocOngletsSlider");
  const rubriqueAccordeon = document.getElementById("accordeon" + rubrique);
  slider.style.maxHeight = rubriqueAccordeon.clientHeight + "px";
}

const listeDetails = document.getElementsByTagName("details");
for (let i = 0; i < listeDetails.length; i++) {
  const detail = listeDetails[i];
  detail.addEventListener("toggle", () => {
    const idRubriqueDetail = detail.parentNode.getAttribute("id");
    if (idRubriqueDetail === "accordeonExperiences") {
      calibrerAffichageSlider("Experiences");
    } else {
      calibrerAffichageSlider("Formation");
    }
  });
}

function changerProjetCaroussel(indiceBouton) {
  compteurImgCarroussel = indiceBouton;

  const navigAncienProjet = document.getElementsByClassName("projetActif")[0];
  navigAncienProjet.classList.remove("projetActif");
  const navigNouveauProjet = document.getElementById("navigProjet" + indiceBouton);
  navigNouveauProjet.classList.add("projetActif");

  const zoneCaroussel = document.getElementById("carousselProjets");
  const titreCaroussel = document.getElementById("titreProjet");
  const descriptionCaroussel = document.getElementById("descriptionProjet");
  const lienProjet = document.getElementById("lienProjet");

  switch (indiceBouton) {
    case 1:
      zoneCaroussel.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('img/capturesProjets/Pokedex.png')";
      lienProjet.style.display = "block";
      lienProjet.href = "projets/Pokedex/pokedex.html";
      titreCaroussel.innerHTML = "Pokedex";
      descriptionCaroussel.innerHTML =
        "Ce projet m'a permis de découvrir la récupération de données à partir d'API (<a href='https://pokeapi.co/' class='switchCouleur'>PokeApi</a> et <a href='https://api-pokemon-fr.vercel.app/' id='lienProjet' class='switchCouleur'>Vercel API Pokemon</a>), ainsi que leur traitement pour obtenir le rendu souhaité.";
      break;
    case 2:
      zoneCaroussel.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('img/capturesProjets/ListeTaches.png')";
      lienProjet.style.display = "block";
      lienProjet.href = "projets/ListeTaches/index.php";
      titreCaroussel.innerHTML = "Liste de tâches personnelle";
      descriptionCaroussel.innerHTML = "Ce projet m'a permis de mettre en application la connexion et l'exploitation d'une base de données, ainsi que l'affichage dynamique via PHP des informations concernant uniquement l'utilisateur connecté.";
      break;
    case 3:
      zoneCaroussel.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('img/capturesProjets/RoueChance.png')";
      lienProjet.style.display = "block";
      lienProjet.href = "projets/RoueChance/roue_chance.html";
      titreCaroussel.innerHTML = "Roue de la chance";
      descriptionCaroussel.innerHTML = "Ce projet m'a permis de travailler la génération de graphiques avec Chart.js, la gestion de tableaux (contenant les informations sur le graphique à générer), ainsi que le contrôle d'animations.";
      break;
    case 4:
      zoneCaroussel.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('img/capturesProjets/Calculatrice.png')";
      lienProjet.style.display = "block";
      lienProjet.href = "projets/Calculatrice/calculatrice.html";
      titreCaroussel.innerHTML = "Calculatrice";
      descriptionCaroussel.innerHTML = "Ce projet m'a permis de gérer la manipulation de variables, ainsi que le bon affichage du résultat.";
      break;
    case 5:
      zoneCaroussel.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('img/capturesProjets/IntegrationPilotin.png')";
      lienProjet.style.display = "block";
      lienProjet.href = "projets/Integration_PilotIn/homePage.html";
      titreCaroussel.innerHTML = "Intégration de maquette";
      descriptionCaroussel.innerHTML =
        "Ce projet est issu d'un test technique réalisé pour l'entreprise <a href='https://www.pilot-in.com/' class='switchCouleur'>Pilot'In</a> dans le cadre de ma recherche d'alternance, qui consistait à intégrer au mieux une page web à partir de sa maquette Figma. J'ai également pris soin de rédiger les contenus pour un aspect plus achevé.</br> <a class='switchCouleur' href='https://www.figma.com/file/z577l0sEm9inh2t81JetRP/Test_Dev-Pilot'in?type=design&node-id=6082-91978&mode=design&t=cuHt3ibOHSWYeqqH-0'>Visualiser la maquette à intégrer 👈🏼</a>";
      break;
    case 6:
      zoneCaroussel.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('img/capturesProjets/Portfolio.png')";
      lienProjet.style.display = "none";
      titreCaroussel.innerHTML = "Mon portfolio";
      descriptionCaroussel.innerHTML = "Vous vous y trouvez actuellement ! J'ai choisi de développer un site à page unique afin de supprimer les temps d'attente liés au chargement de pages.";
      break;
    default:
      zoneCaroussel.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('img/capturesProjets/Pokedex.png')";
      lienProjet.style.display = "block";
      lienProjet.href = "projets/Pokedex/pokedex.html";
      titreCaroussel.innerHTML = "Pokedex";
      descriptionCaroussel.innerHTML =
        "Ce projet m'a permis de découvrir la récupération de données à partir d'API (<a href='https://pokeapi.co/' class='switchCouleur'>PokeApi</a> et <a href='https://api-pokemon-fr.vercel.app/' id='lienProjet' class='switchCouleur'>Vercel API Pokemon</a>), ainsi que leur traitement pour obtenir le rendu souhaité.";
  }
}

function afficherProjetPrecedent() {
  if (compteurImgCarroussel == 1) {
    compteurImgCarroussel = 7;
  }
  changerProjetCaroussel(compteurImgCarroussel - 1);
}

function afficherProjetSuivant() {
  if (compteurImgCarroussel == 6) {
    compteurImgCarroussel = 0;
  }
  changerProjetCaroussel(compteurImgCarroussel + 1);
}
