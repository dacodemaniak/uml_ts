/**
 * @name Utilisateur
 * @desc Définition "abstraite" des utilisateurs
 * @package models
 * @author Aélion
 * @version 1.0.0
 */
export abstract class Utilisateur {
    protected _nom: string;
    protected _prenom: string;
    protected _numAdherent: string;

    /**
     * Définit ou retourne le nom de l'utilisateur
     * @param optional nom: string | null
     * @usage object.nom() => Retourne le _nom de l'utilisateur
     *     object.nom('name') => Affecte 'name' à la propriété _nom
     */
    public nom(nom: string = null): Utilisateur | string {
        if (nom === null) {
            return this._nom;
        }

        this._nom = nom;
        return this;
    }

    public prenom(prenom: string = null): Utilisateur | string {
        if (prenom === null) {
            return this._prenom;
        }

        this._prenom = prenom;
        return this;
    }

    public numAdherent(numAdherent: string = null): Utilisateur | string {
        if (numAdherent === null) {
            return this._numAdherent;
        }

        this._numAdherent = numAdherent;
        return this;
    }
}