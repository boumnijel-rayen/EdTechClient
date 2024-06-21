import { Utilisateur } from './Utilisateur';
import { Matiere } from './Matiere';
import {AbsenceKey} from './Keys/AbsenceKey';
export class Absence {
  id_abs: AbsenceKey;
  etat: string;
  etudiant: Utilisateur;
  matiere: Matiere;

  constructor(id_abs: AbsenceKey, etat: string, etudiant: Utilisateur, matiere: Matiere) {
    this.id_abs = id_abs;
    this.etat = etat;
    this.etudiant = etudiant;
    this.matiere = matiere;
  }
}
