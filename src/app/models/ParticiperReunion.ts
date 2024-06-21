import { Utilisateur } from './Utilisateur';
import { Reunion } from './Reunion';
import { ParticipationReunionKey } from './Keys/ParticiperReunionKey';

export class ParticipationReunion {
  id_part: ParticipationReunionKey;
  utilisateur: Utilisateur;
  reunion: Reunion;

  constructor(
    id_part: ParticipationReunionKey,
    utilisateur: Utilisateur,
    reunion: Reunion
  ) {
    this.id_part = id_part;
    this.utilisateur = utilisateur;
    this.reunion = reunion;
  }

  static createParticipationReunion(
    utilisateur: Utilisateur,
    reunion: Reunion
  ): ParticipationReunion {
    const id_part: ParticipationReunionKey = {
      id_user: utilisateur.id,
      id_reunion: reunion.id
    };
    return new ParticipationReunion(id_part, utilisateur, reunion);
  }
}
