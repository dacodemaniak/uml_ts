import { Auteur } from './../models/auteur';
import { ViewInterface } from './viewInterface';

/**
 * @name AsNom
 * @desc Stratégie d'affichage du nom uniquement
 * @package interface
 * @author Aélion
 * @version 1.0.0
 */
export class AsNom implements ViewInterface {
    public view(auteur: Auteur): string {
        return auteur.nom;
    }
}