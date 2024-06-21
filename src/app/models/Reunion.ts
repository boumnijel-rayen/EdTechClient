import { Utilisateur } from './Utilisateur';
import { ParticipationReunion } from './ParticiperReunion';

export class Reunion {
  id: number;
  sujet: string;
  description: string;
  date: Date;
  organisateur: Utilisateur;
  participants: Set<ParticipationReunion>;

  constructor(
    id: number,
    sujet: string,
    description: string,
    date: Date,
    organisateur: Utilisateur,
    participants: Set<ParticipationReunion>
  ) {
    this.id = id;
    this.sujet = sujet;
    this.description = description;
    this.date = date;
    this.organisateur = organisateur;
    this.participants = participants;
  }
}
