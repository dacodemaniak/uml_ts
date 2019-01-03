/**
 * @name Auteur
 * @desc Définition des auteurs de livres
 * @package models
 * @author Aélion
 * @version 1.0.0
 */
export class Auteur {
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
}