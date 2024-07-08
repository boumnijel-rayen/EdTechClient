import { Utilisateur } from './Utilisateur';

export class RendezVous {
  id!: number;
  endTime!: Date;
  startTime!: Date;
  date!: Date;
  statut!: 'EN_COURS' | 'TERMINE' | 'EN_ATTENTE' | 'CANCELED';
  etudiant!: Utilisateur;
  validateur!: Utilisateur;
}
