import { HtmlInterface } from './../interface/htmlInterface';
import { Auteur } from './auteur';

/**
 * @name Livre
 * @desc Définition des attributs d'un livre
 * @author Aélion
 * @package models
 * @version 1.0.0
 */
export class Livre implements HtmlInterface {
    /**
     * @var string
     * N° ISBN
     */
    public isbn: string;

    /**
     * @var string
     * Titre du livre
     */
    public titre: string;

    /**
     * @var Auteur
     * Auteur du livre
     */
    public auteur: Auteur;

    public constructor() {
        console.log('Livre is alive !');
    }

    /**
     * Surcharge (overload) de la méthode toString() générale
     */
    public toString(): string {
        return this.titre + ' écrit par ' + this.auteur.toString();
    }

    public asHTML(): void {
        let content: string = '';

        content += '<h2>' + this.titre + '</h2>';
        content += this.auteur.asHTML();

        const book: any = document.querySelector('#book');

        book.innerHTML += content;
    }
}