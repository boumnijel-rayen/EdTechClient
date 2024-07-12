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
  roles!: Set<Role>|undefined;
  examens!: Set<Examen>|undefined;
  absences!: Set<Absence>|undefined;
  matieres!: Set<Matiere>|undefined;
  classe!: Classe|undefined;
  RendezvousValides!: Set<RendezVous>|undefined;
  RendezvousPasses!: Set<RendezVous>|undefined;
  demandesMenu!: Set<DemandeMenu>|undefined;
  reunions!: Set<ParticipationReunion>|undefined;
}
