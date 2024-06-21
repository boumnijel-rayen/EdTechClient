import { Utilisateur } from './Utilisateur';
import { Matiere } from './Matiere';
import { ExamenKey } from './Keys/ExamenKey';

export class Examen {
  id_exam: ExamenKey;
  note: number;
  etudiant: Utilisateur;
  matiere: Matiere;

  constructor(id_exam: ExamenKey, note: number, etudiant: Utilisateur, matiere: Matiere) {
    this.id_exam = id_exam;
    this.note = note;
    this.etudiant = etudiant;
    this.matiere = matiere;
  }
}
