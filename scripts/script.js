
/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function aficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span");
    // Ecriture du texte a incérer
    let affichageScore = `${score} sur ${nbMotsProposes}`; // L’interpolation permet de générer facilement des chaînes de caractères complexes en utilisant des backticks.
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore;

    // console.log("Votre score est de " + score + " sur " + nbMotsProposes);
    
}

function afficherProposition(proposition) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu(){
    let i = 0;
    let score = 0;
    afficherProposition(listeMots[i]);
    let btnValiderMot = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");
    btnValiderMot.addEventListener("click", () => {
        console.log(inputEcriture.value);
        if (inputEcriture.value === listeMots[i]){
            score++
        }
        i++;
        aficherResultat(score, i)
        inputEcriture.value = "";
        if ( listeMots[i] === undefined){
            afficherProposition("Le jeux est fini");
            btnValiderMot.disabled = true

        } else {
            afficherProposition(listeMots[i])
        }

    })

    aficherResultat(score, i)

}
