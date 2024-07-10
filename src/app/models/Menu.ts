import { DemandeMenu } from './DemandeMenu';
import { Repas } from './Repas';

export class Menu {
  id!: number;
  nom!: string;
  type!: string;
   repas!: Repas[];
}
