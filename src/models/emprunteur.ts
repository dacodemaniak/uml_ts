import { Loueur } from './loueur';
import { Utilisateur } from "./utilisateur";
import { Livre } from "./livre";

/**
 * @name Emprunteur
 * @desc Services fournis par l'emprunteur
 * @author Aélion
 * @package models
 * @version 1.0.0
 */
export class Emprunteur extends Utilisateur {
    private livres: Map<number, Livre>;

    public constructor() {
        super();
        this.livres = new Map<number, Livre>(); 
    }

    public add(livre: Livre): Emprunteur {
        const indice: number = this.livres.size + 1;
        this.livres.set(indice, livre);
        return this;
    }

    public remove(indice: number): Emprunteur {
        this.livres.delete(indice);

        return this;
    }

    public clone(): Loueur {
        const instance: Loueur = new Loueur();
        instance.nom(this.nom().toString());
        instance.prenom(this.prenom().toString());
        instance.numAdherent(this.numAdherent().toString());

        return instance;
    }

    public emprunte(loueur: Loueur, livre: Livre) {
        // On vérifie chez le loueur si le livre est disponible
        let indice: number = -1;
        if ((indice = loueur.find(livre)) !== 0) {
            // Okay, c'est bon... on peut faire le job
            this.add(livre);
            // Mais aussi, supprimer le livre chez le loueur
            loueur.remove(indice);
            return true;
        }

        return false;
    }

    public asHTML(): string {
        let content: string = '';

        content = super.asHTML();

        content += '<blockquote>Emprunteur</blockquote>';

        // Affichage des livres de cet utilisateur
        content += '<h3>En location</h3>';
        content += '<ul>';
        this.livres.forEach((livre: Livre, key: number) => {
            content += '<li>' + livre.asHTML() + '</li>';
        });
        content += '</ul>';

        const placeholder: string = '#emprunteur';



        const body = document.querySelector(placeholder);

        body.innerHTML += content;

        return;
    }
}