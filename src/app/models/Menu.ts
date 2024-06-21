import { DemandeMenu } from './DemandeMenu';
import { Repas } from './Repas';

export class Menu {
  id!: number;
  nom!: string;
  type!: string;
  demandes!: Set<DemandeMenu>;
  repas!: Set<Repas>;
}
