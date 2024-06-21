export class Evenement {
  id: number;
  nom: string;
  description: string;
  date: Date;

  constructor(id: number, nom: string, description: string, date: Date) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.date = date;
  }
}
