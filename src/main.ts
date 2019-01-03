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

 // Créer un auteur
 const isaac: Auteur = new Auteur();
isaac.prenom = 'Isaac';
isaac.nom = 'Asimov';
isaac.setDateNaissance('1920-01-02');
isaac.biographie = 'blah blah blah blah';

console.log('Auteur : ' + isaac.nom + ' Né le : ' + isaac.getDateNaissance());

 // Créer un objet à partir de la classe
 const lesMiserables: Livre = new Livre();
 lesMiserables.auteur = 'Victor Hugo';
 lesMiserables.isbn = '000222333666';
 lesMiserables.titre = 'Les Misérables';

 const fondation: Livre = new Livre();
 fondation.auteur = 'Isaac Asimov';
 fondation.titre = 'Fondation';
 fondation.isbn = '222333555666';

 console.log('Livre : ' + lesMiserables.titre + ' et ' + fondation.titre);