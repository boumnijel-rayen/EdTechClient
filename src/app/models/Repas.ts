import { Menu } from './Menu';

export class Repas {
  id!: number;
  nom!: string;
  calories!: number;
  categorie!: string;
  poidsCarbs!: number;
  poidsProteines!: number;
  poidsFats!: number;
  image: string | undefined;
  menus: Set<Menu> | undefined;
}
