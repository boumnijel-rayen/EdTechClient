import { Utilisateur } from './Utilisateur';
import { OraganiserParticiperKey } from './Keys/OrganiserParticiperKey';
import { TypeUtilisateurEvenement } from './TypeUtilisateurEvenement';
import { Evenement } from './Evenement';
export class OrganiserParticiper {
  id_orgpar: OraganiserParticiperKey;
  type: TypeUtilisateurEvenement;
  utilisateur: Utilisateur;
  evenement: Evenement;

  constructor(
    id_orgpar: OraganiserParticiperKey,
    type: TypeUtilisateurEvenement,
    utilisateur: Utilisateur,
    evenement: Evenement
  ) {
    this.id_orgpar = id_orgpar;
    this.type = type;
    this.utilisateur = utilisateur;
    this.evenement = evenement;
  }

  static createOrganiserParticiper(
    utilisateur: Utilisateur,
    evenement: Evenement,
    type: TypeUtilisateurEvenement
  ): OrganiserParticiper {
    const id_orgpar: OraganiserParticiperKey = {
      id_user: utilisateur.id,
      id_evenement: evenement.id
    };
    return new OrganiserParticiper(id_orgpar, type, utilisateur, evenement);
  }
}
