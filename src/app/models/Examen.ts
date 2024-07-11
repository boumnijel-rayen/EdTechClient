import { Utilisateur } from'./Utilisateur'; 
import { Matiere } from  './Matiere';
import { ExamenKey } from './Keys/ExamenKey';

export class Examen {
  id!: number;
  note!: number;
  etudiant!: Utilisateur;
  matiere!: Matiere;
  enonce!: string;
  description!: string;
  travail!: string;
  deadline!: Date;
}
