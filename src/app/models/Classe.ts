import { Utilisateur } from './Utilisateur';
import { Niveau } from './Niveau';

export class Classe {
  id: number;
  nom: string;
  specialite: string;
  nbreEtudiant: number;
  nbreCapacite: number;
  etudiants: Set<Utilisateur>;
  niveau: Niveau;

  constructor(
    id: number,
    nom: string,
    specialite: string,
    nbreEtudiant: number,
    nbreCapacite: number,
    etudiants: Set<Utilisateur>,
    niveau: Niveau
  ) {
    this.id = id;
    this.nom = nom;
    this.specialite = specialite;
    this.nbreEtudiant = nbreEtudiant;
    this.nbreCapacite = nbreCapacite;
    this.etudiants = etudiants;
    this.niveau = niveau;
  }
}
