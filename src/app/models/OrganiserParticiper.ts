import { Utilisateur } from './Utilisateur';
import { OraganiserParticiperKey } from './Keys/OrganiserParticiperKey';
import { TypeUtilisateurEvenement } from './TypeUtilisateurEvenement';
import { Evenement } from './Evenement';
export class OrganiserParticiper {
  id_orgpar!: OraganiserParticiperKey;
  type!: TypeUtilisateurEvenement;
  utilisateur!: Utilisateur;
  evenement!: Evenement;

}
