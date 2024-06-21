export class OraganiserParticiperKey {
  id_evenement: number;
  id_user: number;

  constructor(id_evenement: number, id_user: number) {
    this.id_evenement = id_evenement;
    this.id_user = id_user;
  }
}
