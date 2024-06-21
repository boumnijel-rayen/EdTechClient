import { Menu } from './Menu';

export class Repas {
  id!: number;
  nom!: string;
  calories!: number;
  poidsCarbs!: number;
  poidsProteines!: number;
  poidsFats!: number;
  menus!: Set<Menu>;
}
