import { Auteur } from './../models/auteur';
import { ViewInterface } from './viewInterface';

/**
 * @name AsNomPrenomDate
 * @desc Stratégie d'affichage du nom, prénom et de la date
 * @package interface
 * @author Aélion
 * @version 1.0.0
 */

export class AsNomPrenomDate implements ViewInterface {
    public view(auteur: Auteur): string {
        return auteur.nom + ' ' + auteur.prenom + ' (' + auteur.getDateNaissance() +')';
    }
}