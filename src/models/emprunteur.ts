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
}