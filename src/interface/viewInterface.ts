/**
 * @name ViewInterface
 * @desc Interface de définition de la stratégie
 *     d'affichage de l'auteur
 * @package interface
 * @author Aélion
 * @version 1.0.0
 */
import { Auteur } from './../models/auteur';

export interface ViewInterface {
    /**
     * Exposition de la méthode view
     * @param Auteur un auteur
     */
    view(auteur: Auteur): string;
}