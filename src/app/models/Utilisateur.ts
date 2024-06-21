import { Role } from './Role';
import { Examen } from './Examen';
import { Absence } from './Absence';
import { Matiere } from './Matiere';
import { Classe } from './Classe';
import { RendezVous } from './RendezVous';
import { DemandeMenu } from './DemandeMenu';
import { ParticipationReunion } from './ParticiperReunion';
//import { GrantedAuthority, SimpleGrantedAuthority } from 'spring-security-core';

export class Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  roles: Set<Role>;
  examens: Set<Examen>;
  absences: Set<Absence>;
  matieres: Set<Matiere>;
  classe: Classe;
  RendezvousValides: Set<RendezVous>;
  RendezvousPasses: Set<RendezVous>;
  demandesMenu: Set<DemandeMenu>;
  reunions: Set<ParticipationReunion>;

  constructor(
    id: number,
    nom: string,
    prenom: string,
    email: string,
    password: string,
    roles: Set<Role>,
    examens: Set<Examen>,
    absences: Set<Absence>,
    matieres: Set<Matiere>,
    classe: Classe,
    RendezvousValides: Set<RendezVous>,
    RendezvousPasses: Set<RendezVous>,
    demandesMenu: Set<DemandeMenu>,
    reunions: Set<ParticipationReunion>
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
    this.roles = roles;
    this.examens = examens;
    this.absences = absences;
    this.matieres = matieres;
    this.classe = classe;
    this.RendezvousValides = RendezvousValides;
    this.RendezvousPasses = RendezvousPasses;
    this.demandesMenu = demandesMenu;
    this.reunions = reunions;
  }
}
