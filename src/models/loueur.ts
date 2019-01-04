import { Livre } from "./livre";
import { Utilisateur } from "./utilisateur";

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

}