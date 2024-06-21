import { DemandeMenu } from './DemandeMenu';
import { Repas } from './Repas';

export class Menu {
  id: number;
  nom: string;
  type: string;
  demandes: Set<DemandeMenu>;
  repas: Set<Repas>;

  constructor(
    id: number,
    nom: string,
    type: string,
    demandes: Set<DemandeMenu>,
    repas: Set<Repas>
  ) {
    this.id = id;
    this.nom = nom;
    this.type = type;
    this.demandes = demandes;
    this.repas = repas;
  }
}
