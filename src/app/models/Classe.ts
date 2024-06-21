import { Utilisateur } from './Utilisateur';
import { Niveau } from './Niveau';

export class Classe {
  id!: number;
  nom!: string;
  specialite!: string;
  nbreEtudiant!: number;
  nbreCapacite!: number;
  etudiants!: Set<Utilisateur>;
  niveau!: Niveau;

}
