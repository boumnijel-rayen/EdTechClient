import { Classe } from './Classe';

export class Niveau {
  id: number;
  libelle: string;
  classes: Set<Classe>;

  constructor(id: number, libelle: string, classes: Set<Classe>) {
    this.id = id;
    this.libelle = libelle;
    this.classes = classes;
  }
}
