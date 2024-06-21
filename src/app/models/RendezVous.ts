import { Utilisateur } from './Utilisateur';

export class RendezVous {
  id!: number;
  date!: Date;
  statut!: string;
  etudiant!: Utilisateur;
  validateur!: Utilisateur;
}
