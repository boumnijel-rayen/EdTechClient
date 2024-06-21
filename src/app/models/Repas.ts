import { Menu } from './Menu';

export class Repas {
  id: number;
  nom: string;
  calories: number;
  poidsCarbs: number;
  poidsProteines: number;
  poidsFats: number;
  menus: Set<Menu>;

  constructor(
    id: number,
    nom: string,
    calories: number,
    poidsCarbs: number,
    poidsProteines: number,
    poidsFats: number,
    menus: Set<Menu>
  ) {
    this.id = id;
    this.nom = nom;
    this.calories = calories;
    this.poidsCarbs = poidsCarbs;
    this.poidsProteines = poidsProteines;
    this.poidsFats = poidsFats;
    this.menus = menus;
  }
}
