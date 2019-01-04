import { Emprunteur } from './models/emprunteur';
import { AsNomPrenomDate } from './interface/asNomPrenomDate';
import { AsNom } from './interface/asNom';
/**
 * @name main
 * @desc Point d'entrée dans l'application
 * @author Aélion
 * @version 1.0.0
 */

 /**
  * Importer les définitions des classes
  * pour pouvoir créer (instancier) des objets
  * à partir de leur définition
  */
 import { Livre } from './models/livre';
import { Auteur } from './models/auteur';
import { Loueur } from './models/loueur';

 // Créer un auteur
 const isaac: Auteur = new Auteur(new AsNom());
isaac.prenom = 'Isaac';
isaac.nom = 'Asimov';
isaac.setDateNaissance('1920-01-02');
isaac.biographie = 'blah blah blah blah';

const hugo: Auteur = new Auteur(new AsNomPrenomDate());
hugo.nom = 'Hugo';
hugo.prenom = 'Victor';
hugo.setDateNaissance('1812-03-25');

console.log('Auteur : ' + isaac.nom + ' Né le : ' + isaac.getDateNaissance());

 // Créer un objet à partir de la classe
 const lesMiserables: Livre = new Livre();
 lesMiserables.auteur = hugo;
 lesMiserables.isbn = '000222333666';
 lesMiserables.titre = 'Les Misérables';

 const fondation: Livre = new Livre();
 fondation.auteur = isaac;
 fondation.titre = 'Fondation';
 fondation.isbn = '222333555666';

 console.log('Livre : ' + lesMiserables.toString());
 console.log('Livre : ' + fondation.toString());

 // Création d'un Loueur
 const loueur: Loueur = new Loueur();
loueur.nom('Aubert');
loueur.prenom('Jean-Luc');
loueur.numAdherent('00112233');
loueur.add(lesMiserables);
loueur.add(fondation);
loueur.asHTML();

const unAutreEmprunteur: Emprunteur = loueur.clone();
console.log(unAutreEmprunteur.nom());

// Création d'un emprunteur
const emprunteur: Emprunteur = new Emprunteur();
emprunteur.nom('Zetaufré');
emprunteur.prenom('Mélanie');
emprunteur.numAdherent('11223344');
// Louer un bouquin
if (emprunteur.emprunte(loueur, lesMiserables)) {
    alert('Okay, je te laisse le bouquin !');
} else {
    alert('Désolé mon pote, mais je n\'ai plus en stock !');
}

// On essaye de réemprunter le même bouquin
if (unAutreEmprunteur.emprunte(loueur, lesMiserables)) {
    alert('Okay, je te laisse le bouquin !');
} else {
    alert('Désolé mon pote, mais je n\'ai plus en stock !');
}

// Affichage des emprunteurs et loueurs
loueur.asHTML();
emprunteur.asHTML();
unAutreEmprunteur.asHTML();