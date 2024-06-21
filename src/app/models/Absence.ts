import { Utilisateur } from './Utilisateur';
import { Matiere } from './Matiere';
import {AbsenceKey} from './Keys/AbsenceKey';
export class Absence {
  id_abs!: AbsenceKey;
  etat!: string;
  etudiant!: Utilisateur;
  matiere!: Matiere;


}
