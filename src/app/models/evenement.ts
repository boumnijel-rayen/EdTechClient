export class Evenement {
  id!: number;
  nom!: string;
  description!: string;
  date!: Date;
  image : any;

  getImage(): string {
    return 'data:image/jpeg;base64,' + this.image;
  }
}
