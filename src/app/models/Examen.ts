import { Utilisateur } from './Utilisateur';
import { Matiere } from './Matiere';
import { ExamenKey } from './Keys/ExamenKey';

export class Examen {
  id_exam!: ExamenKey;
  note!: number;
  etudiant!: Utilisateur;
  matiere!: Matiere;
  enonce!: string;
  travail!: string;
}
