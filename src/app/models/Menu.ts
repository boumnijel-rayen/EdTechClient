import { Repas } from './Repas';
import { Utilisateur } from './Utilisateur';

export class Menu {
  id!: number;
  nom!: string;
  type!: string;
   repas!: Repas[];
   date!: string;  
   id_User!: Number; 
}
