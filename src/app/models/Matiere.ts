import { Examen } from './Examen';
import { Utilisateur } from './Utilisateur';

export class Matiere {
  id: number;
  nom: string;
  description: string;
  examens: Set<Examen>;
  enseignants: Set<Utilisateur>;

  constructor(
    id: number,
    nom: string,
    description: string,
    examens: Set<Examen>,
    enseignants: Set<Utilisateur>
  ) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.examens = examens;
    this.enseignants = enseignants;
  }
}
