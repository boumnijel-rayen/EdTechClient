import { Utilisateur } from './Utilisateur';
import { Menu } from './Menu';
import { DemandeMenuKey } from './Keys/DemandeMenuKey';

export class DemandeMenu {
  id_demande!: DemandeMenuKey;
  utilisateur!: Utilisateur;
  menu!: Menu;
}
