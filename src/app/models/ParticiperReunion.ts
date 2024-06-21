import { Utilisateur } from './Utilisateur';
import { Reunion } from './Reunion';
import { ParticipationReunionKey } from './Keys/ParticiperReunionKey';

export class ParticipationReunion {
  id_part!: ParticipationReunionKey;
  utilisateur!: Utilisateur;
  reunion!: Reunion;
}
