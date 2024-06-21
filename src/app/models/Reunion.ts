import { Utilisateur } from './Utilisateur';
import { ParticipationReunion } from './ParticiperReunion';

export class Reunion {
  id!: number;
  sujet!: string;
  description!: string;
  date!: Date;
  organisateur!: Utilisateur;
  participants!: Set<ParticipationReunion>;
}
