<?php
    // démarrage de la session
    session_start();
    if(!isset($_SESSION['utilisateur'])){
        // si la connexion de l'utilisateur n'a pas bien été établie, on le redirige vers la page de connexion
        header("location:index.php");
    }
    $utilisateur = $_SESSION['utilisateur'];
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <title> Liste de tâches - <?=$utilisateur?></title>
        <link rel="stylesheet" type="text/css" href="liste_taches.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
	<link rel="apple-touch-icon" sizes="120x120" href="../../img/package_favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="../../img/package_favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="../../img/package_favicon/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="HTML,CSS,JS,PHP, liste de tâches, base de données">
        <meta name="description" content="Page permettant de gérer des tâches (ajouter, effectuer, supprimer) dans une liste personnelle, après connexion par l'utilisateur">
        <meta name="author" content="Louis Cauvet">
    </head>

    <body>
        <?php
            // lorsque le bouton d'ajout d'une tâche est cliqué
            if(isset($_POST["boutonValidation"])){
                // on récupère le texte rentré par l'utilisateur dans la barre de saisie
                extract($_POST);
                if($zoneSaisie == ""){
                    // on vérifie que tous les champs ont été remplis 
                    $messageErreur = "Veuillez saisir une tâche dans le champ de saisie !";
                } else if(strpos($zoneSaisie,'"')!== FALSE){
                    // on vérifie que la tâche ne contient pas de "
                    $messageErreur = 'Votre tâche de peut pas contenir de "';
                } else {
                    // on ajoute la tâche à la liste
                    include "connexion_bdd.php";
                    ajouterTache($zoneSaisie,$utilisateur);
                }
            }
        ?>
        <header>
            <a id="retourPortfolio" href="../..">Cliquez sur ce lien pour revenir à mon portfolio</a>
        </header>
        <h1 id="titreListeTaches">Votre liste de tâches</h1>
        <div id="zoneListeTaches">
            <div id="listeTaches">
                <div class="erreurFormulaire">
                    <?php 
                        // On affiche un message d'erreur si il est défini
                        if(isset($messageErreur)){
                            echo($messageErreur);
                        }
                    ?>
                </div>
                <form id="ligneSaisie" method="POST" action="">
                    <input id="champSaisie" type="text" name="zoneSaisie" placeholder="Ecrivez votre tâche ici">
                    <button id="boutonAjouter" type="submit" name="boutonValidation">
                        <i class="fa fa-plus"></i> 
                    </button> 
                </form>
                <div id="zoneTaches">
                    <?php
                        // Zone d'insertion des tâches avec PHP 
                        include "connexion_bdd.php";
                        afficherTachesUtilisateur($utilisateur);
                    ?>
                </div>
            </div>
        </div>
        <div id="zoneDeconnexion">
            <a id="boutonDeconnexion" href="deconnexion.php">Déconnexion</a>
        </div>
    </body>