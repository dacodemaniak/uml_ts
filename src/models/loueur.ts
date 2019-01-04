import { Livre } from "./livre";
import { Utilisateur } from "./utilisateur";
import { Emprunteur } from "./emprunteur";

export class Loueur extends Utilisateur {
    private livres: Map<number, Livre>;

    public constructor() {
        super();
        this.livres = new Map<number, Livre>();
    }

    public add(livre: Livre): Loueur {
        const indice: number =  this.livres.size + 1;
        this.livres.set(indice, livre);

        return this;
    }

    public remove(indice: number): Loueur {
        this.livres.delete(indice);
        return this;
    }

    public clone(): Emprunteur {
        const instance: Emprunteur = new Emprunteur();
        instance.nom(this.nom().toString());
        instance.prenom(this.prenom().toString());
        instance.numAdherent(this.numAdherent().toString());

        return instance;
    }

    public find(livre: Livre): number {
        let indice: number = 0;
        this.livres.forEach((alouer: Livre, key: number) => {
            if (alouer === livre) {
                indice = key;
            }
        });
        return indice;
    }

    public asHTML(): string {
        let content: string = '';

        content = super.asHTML();

        content += '<blockquote>Loueur</blockquote>';

        const placeholder: string = '#loueur';

        // Affichage des livres de cet utilisateur
        content += '<h3>En stock</h3>';
        content += '<ul>';
        this.livres.forEach((livre: Livre, key: number) => {
            content += '<li>' + livre.asHTML() + '</li>';
        });
        content += '</ul>';
        const body = document.querySelector(placeholder);

        body.innerHTML = content;

        return;
    }

}