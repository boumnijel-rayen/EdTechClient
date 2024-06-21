import { Classe } from './Classe';

export class Niveau {
  id!: number;
  libelle!: string;
  classes!: Set<Classe>;
}
