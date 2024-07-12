export class Evenement {
  id!: number;
  nom!: string;
  description!: string;
  dateDeb!: Date;
  dateFin!: Date;
  annulation : boolean =false;
  image : any;

  getImage(): string {
    return 'data:image/jpeg;base64,' + this.image;
  }
}
