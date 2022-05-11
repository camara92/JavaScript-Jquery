function exercice1() {
    var resultatsExercice = "Résultat exercice 1 : ";
    var tabNombres = [45, 78, 37, 12, 25, 27];
   
   
    // Saisir votre code ici.
 
     
     for(i=0;i<tabNombres.length;i++) {
       for(j=i+1;j<tabNombres.length;j++) {
         if(tabNombres[i] > tabNombres[j]) {
           small = tabNombres[i];
           tabNombres[i] = tabNombres[j];
           tabNombres[j] = small;
         }
       }
     }
     System.out.println("Le plus petit nombre est : " + tabNombres[0]);
     console.log( System.out.println("Le plus petit nombre est : " + tabNombres[0]));
   }
//  }
  
//    //fin daouda
   
//     return resultatsExercice;
//  }