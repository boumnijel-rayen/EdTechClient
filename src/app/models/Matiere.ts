import { Examen } from './Examen';
import { Utilisateur } from './Utilisateur';

export class Matiere {
  id!: number;
  nom!: string;
  description!: string;
  examens!: Set<Examen>;
  enseignants!: Set<Utilisateur>;
}
