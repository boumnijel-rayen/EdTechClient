import { Utilisateur } from './Utilisateur';

export class RendezVous {
  id: number;
  date: Date;
  statut: string;
  etudiant: Utilisateur;
  validateur: Utilisateur;

  constructor(
    id: number,
    date: Date,
    statut: string,
    etudiant: Utilisateur,
    validateur: Utilisateur
  ) {
    this.id = id;
    this.date = date;
    this.statut = statut;
    this.etudiant = etudiant;
    this.validateur = validateur;
  }
}
