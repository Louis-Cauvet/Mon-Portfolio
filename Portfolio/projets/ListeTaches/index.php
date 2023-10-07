<?php
// Démarrage de session afin que chaque utilisateur puisse se connecter à sa propre page
session_start();
?>


<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>Connexion Utilisateur - Louis Cauvet</title>
        <link rel="stylesheet" type="text/css" href="connexion_style.css">
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
        <meta name="keywords" content="HTML,CSS,JS,PHP, connexion-utilisateur, base de données">
        <meta name="description" content="Page permettant de saisir des données de connexion précédemment enregistrées dans une base de données afin de se connecter">
        <meta name="author" content="Louis Cauvet">
    </head>

    <body>
        <header>
            <a id="retourPortfolio" href="../..">Cliquez sur ce lien pour revenir à mon portfolio</a>
        </header>
        <div id="zoneConnexion">
            <div id="fenetreConnexion">
                <form id="formulaireConnexion" action="" method="POST" autocomplete="off">
                    <fieldset id="regroupementFormulaire">
                        <legend id="titreFormulaire">Connexion</legend>
                        <div id="succesInscription">
                            <?php 
                            if(isset($_SESSION['message'])){
                                echo($_SESSION['message']);
                            }
                            ?>
                        </div>
                        <div class="erreurFormulaire">
                            <?php 
                            if(isset($_POST['boutonConnexion'])){   
                                // on extrait les données du formulaire
                                extract($_POST); 
                                // destruction de la variable contenant le message de réussite de l'inscription (s'il existe)
                                unset($_SESSION['message']);                          
                                // on vérifie si des champs ont été laissés vides
                                if(isset($adresseMail) && isset($mdp) && $adresseMail == "" || $mdp == ""){
                                    // si un au moins un des champs est vide, on définit un message d'erreur à afficher        
                                    $erreurChamps = "Tous les champs sont obligatoires, veuillez les remplir !";
                                } else {
                                    // on vérifie que les champs renseignés sont corrects
                                    include "connexion_bdd.php";
                                    connexionUtilisateur($adresseMail, $mdp);
                                }
                            } 
                            // on affiche un message d'erreur s'il est défini
                            if(isset($erreurChamps)){
                                echo($erreurChamps);
                            }
                            ?>
                        </div>
                        <label class="labelFormulaire" for="adresseMail">Adresse mail</label>
                        <input id="adresseMail" class="champFormulaire" type="text" id="champLogin" name="adresseMail">
                        <label class="labelFormulaire" for="mdp">Mot de passe</label>
                        <label class="regroupementMdp">
                            <input id="mdp" class="champFormulaire champMdp" type="password" name="mdp">
                            <div class="iconeMdp">
                                <i class="oeil fa fa-eye-slash" onclick="afficheMdp(1)"></i>
                            </div>
                        </label>
                        <input id="boutonValidationConnexion" type="submit" value="Je me connecte !" name="boutonConnexion">
                    </fieldset>
                </form>
                <p id="texteInscription">Vous n'êtes pas encore inscrit ? <a id="lienInscription" href="Inscription.php">Créez un compte !</a></p>
            </div>
        </div>
        <script src="connexion_script.js" type="text/javascript"></script>
        <noscript>Désolé, votre navigateur ne prend pas en charge le Javascript</noscript>
    </body>

</html>