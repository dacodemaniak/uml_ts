import { Auteur } from './../models/auteur';
import { ViewInterface } from './viewInterface';

/**
 * @name AsNomPrenom
 * @desc Stratégie d'affichage du nom et du prénom
 * @package interface
 * @author Aélion
 * @version 1.0.0
 */

export class AsNomPrenom implements ViewInterface {
    public view(auteur: Auteur): string {
        return auteur.nom + ' ' + auteur.prenom;
    }
}