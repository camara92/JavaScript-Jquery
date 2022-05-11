/*
   EXERCICE 1 : Parcours d'un tableau
   
   Vous devez modifier en JavaScript le code de la 
   fonction "exercice1()" ci-dessous, afin de parcourir
   le tableau "tabNombres" avec une boucle "For", et retourner
   une chaine de caractères affichant les informations suivantes :
      - La plus petite valeur présente dans le tableau
      - La plus grande valeur présente dans le tableau
      - La somme des valeurs présentes dans le tableau
      - La moyenne des valeurs présentes dans le tableau.
      
   Merci de ne pas utiliser les fonctions Math.min ni Math.max 
   pour effectuer cet exercice.
   
   Par exemple, pour le tableau [45, 78, 37, 12, 25, 27]
   L'output devrait afficher exactement :
   Résultat exercice 1 : 
      - Plus petit nombre : 12
      - Plus grand nombre : 78
      - Somme des nombres : 224
      - Moyenne des nombres : 37
*/

function exercice1() {
    var resultatsExercice = "Résultat exercice 1 : ";
    var tabNombres = [45, 78, 37, 12, 25, 27];
   
   
    // Saisir votre code ici.
    //petit nombre dans le tableau 
    //plus grand nombre 

   function min(tabNombres) {
     var result = tabNombres[0];
     for(var i = 1; i < tabNombres.length; i++) {
     if (tabNombres[i] < result) {
         result = tabNombres[i];
     }
     }  
     return result;
 }
   
    return resultatsExercice;
 }
 
 function max(tabNombres) {
    var result = tabNombres[0];
    for(var i = 1; i < tabNombres.length; i++) {
    if (tabNombres[i] >result) {
        result = tabNombres[i];
    }
    }  
    return result;
}


 
 
 
 
 /*********************************************************************/
 /*
    EXERCICE 2 :  Chaînes de caractères
    Vous devez modifier en JavaScript le code de la fonction 
    "exercice2()" ci-dessous, pour parcourir une chaine de caractères
    listant des noms d'animaux séparés par des virgules, afin de 
    séparer les animaux dont le nom contient un accent [é, è] de 
    ceux qui n'en contiennent pas, et d'afficher au final deux 
    chaines, triées par ordre alphabétique.
    Par exemple : 
    Pour la chaîne "guépard,chien,chèvre,chat,vipère,couleuvre,éléphant"
    L'output devrait afficher exactement :
    Résultat exercice 2 :
       - Animaux avec accents : chèvre, éléphant, guépard, vipère
       - Animaux sans accents : chat, chien, couleuvre
 */
 

   
    // Saisir votre code ici.
   

    function exercice2() {
       var resultatsExercice = "Résultat exercice 2 : ";
       var animaux = "guépard,chien,chèvre,chat,vipère,couleuvre,éléphant";
      
    
    
       // Saisir votre code ici.
     //véri
    
      if(animaux.match(/é || è/))
        alert('oui');
      else
        alert('Non rien');
      
       return resultatsExercice;
    }
    
   
    
 
 
 
 
 
 /*********************************************************************/
 /*
    EXERCICE 3 :  Lecture de code
    
    La fonction de l'exercice ci-dessous effectue des opérations 
    sur le module formation de Foederis.
    
    Détaillez en quelques lignes ce que fait le code ci-dessous
    
    Votre réponse ici :
    cette troisième question fait référence à des valeurs qui se trouvent dans le tableau puis il y a une appelation par la fonction join
    afin de recupérer les données puis faire une requête et une fois la requête recupéreé. 
    On associe la premiere valeur de ce tableau au var idEvaluationDeFormation.
    puis on vérifie si la case doit être saisie on fait la relance par mail 
    - si terminée : clotrue dossier par l'identifiant (par exempel un user)
    sinon : une erreur. 
    
 */
 
 function exercice3() {
    var formations = [18489415, 17915615, 15612315, 14915651];
    var chaineFormations = formations.join(",");
    var requete = "SELECT id, statut FROM evaluation_formation WHERE id_formation IN ("+chaineFormations+")";
    var evaluationsDeFormation = selectQuery(requete);
    for (var i in evaluationsDeFormation){
       var idEvaluation = evaluationsDeFormation[i][0];
       var statutEvaluation = evaluationsDeFormation[i][1];
       if (statutEvaluation == "A_REMPLIR") {
          sendEmailRelance(idEvaluation);
       }
       else if (statutEvaluation == "TERMINEE") {
          clotureDossierEvaluation(idEvaluation);
       }
       else {
          log("Erreur de statut de l'évaluation");
       }
    }
 }
 
 
 
 
 
 
 
 
 /*********************************************************************/
 /**************** NE PAS MODIFIER LE CODE CI-DESSOUS *****************/
 /*********************************************************************/
 $("#result").html(exercice1()); // Ne pas modifier cette ligne
 $("#result").append("<div style='margin:40px;'></div>"); // Ne pas modifier cette ligne
 $("#result").append(exercice2()); // Ne pas modifier cette ligne