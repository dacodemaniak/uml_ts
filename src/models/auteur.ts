import { HtmlInterface } from './../interface/htmlInterface';
import { ViewInterface } from './../interface/viewInterface';
/**
 * @name Auteur
 * @desc Définition des auteurs de livres
 * @package models
 * @author Aélion
 * @version 1.0.0
 */
export class Auteur implements HtmlInterface {
    /**
     * @var string
     * Nom de l'auteur
     */
    public nom: string;

    /**
     * @var string
     * Prénom de l'auteur
     */
    public prenom: string;

    /**
     * @var Date
     * Date de naissance
     */
    private dateNaissance: Date;

    /**
     * @var string
     * Biographie de l'auteur
     */
    public biographie: string;

    private viewMode: ViewInterface;

    public constructor(viewStrategy: ViewInterface) {
        this.viewMode = viewStrategy;
        this.biographie = null;
    }

    /**
     * Définit la date de naissance de l'auteur
     * @param date: string Date sous la forme d'une chaîne
     * @return void
     */
    public setDateNaissance(date: string): void {
        this.dateNaissance = new Date(date);
    }

    public getDateNaissance(): string {
        const month: number = this.dateNaissance.getMonth() + 1;
        const date: string = this.dateNaissance.getDate().toString() + '-' + 
            month.toString() + '-' +
            this.dateNaissance.getFullYear().toString();
        return date;
    }

    public toString() {
        return this.viewMode.view(this);
    }

    public asHTML(): string {
        let content: string = '';
        content += '<dl>';
        content += '<dt><em>' + this.nom + ' ' + this.prenom  + '</em></dt>';
        content += '<dd><ul>'; 
        content += '<li>' + this.getDateNaissance() + '</li>';
        if (this.biographie !== null) {
            content += '<li>' + this.biographie + '</li>';
        }
        content += '</ul></dd>';
        content += '</dl>';

        return content;
    }
}