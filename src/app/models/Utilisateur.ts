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
  id!: number;
  nom!: string;
  prenom!: string;
  email!: string;
  password!: string;
  roles!: Set<Role>;
  examens!: Set<Examen>;
  absences!: Set<Absence>;
  matieres!: Set<Matiere>;
  classe!: Classe;
  RendezvousValides!: Set<RendezVous>;
  RendezvousPasses!: Set<RendezVous>;
  demandesMenu!: Set<DemandeMenu>;
  reunions!: Set<ParticipationReunion>;
}
