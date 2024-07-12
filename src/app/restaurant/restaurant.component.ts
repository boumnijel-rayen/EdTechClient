import { Component, OnInit } from '@angular/core';
import { ImportsModule } from '../imports';
import { DemandeMenu } from '../models/DemandeMenu';
import { Menu } from '../models/Menu';
import { Repas } from '../models/Repas';
// import { DemandeMenu } from '../Models/DemandeMenu';
// import { Menu } from '../Models/Menu';
// import { Repas } from '../Models/Repas';
import { Utilisateur } from '../models/Utilisateur';
import { AuthServiceService } from '../Services/auth-service.service';
import { RestaurationServiceService } from '../Services/restauration-service.service';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  standalone: true,
  imports: [ImportsModule]
})
export class RestaurantComponent implements OnInit {
  availableProducts: Repas[] = [];
  selectedProducts: Repas[] = [];
  draggedProduct: Repas | null = null;
  emailUser: string = this.auth.getEmail();
  nom: String= ",";
  prenom: String= ",";
  id: Number= 5;
  Role: String="sd";

  constructor(private service: RestaurationServiceService,private auth : AuthServiceService,private serviceUser : UserServiceService) {}

  ngOnInit() {
    this.selectedProducts = [];
    this.service.getRepas().subscribe((data: Repas[]) => {
      this.availableProducts = data;
      console.log(data);
    });
  }

  dragStart(event: DragEvent, product: Repas) {
    console.log('Drag start:', product);
    this.draggedProduct = product;
    event.dataTransfer?.setData('product', JSON.stringify(product));
  }

  drop(event: DragEvent) {
    event.preventDefault();
    console.log('Drop event triggered');
    const data = event.dataTransfer?.getData('product');
    if (data) {
      const product = JSON.parse(data) as Repas;
      console.log('Dropped product:', product);
      if (this.selectedProducts.some(p => p.categorie === product.categorie)) {
        alert('Il faut sélectionner un catégorie de chaque repas.');
      }
      else{
        const draggedProductIndex = this.findIndex(product);
        this.selectedProducts = [...this.selectedProducts, product];
        this.availableProducts = this.availableProducts.filter((_, i) => i !== draggedProductIndex);
        this.draggedProduct = null;
        console.log('Selected products:', this.selectedProducts);
        console.log('Available products:', this.availableProducts);
  
      }
    }
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
    console.log('Drag over');
  }

  dragLeave(event: DragEvent) {
    console.log('Drag leave');
  }

  dragEnd() {
    console.log('Drag end');
    this.draggedProduct = null;
  }

  findIndex(product: Repas): number {
    return this.availableProducts.findIndex(p => p.id === product.id);
  }
   // Method to format the date to 'yyyy-MM-dd'
   formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  saveMenu() {
    if (this.selectedProducts.length !== 4) {
      alert('Veuillez compléter la commande de votre menu s\'il vous plaît.');
      return;
    }
  
    this.emailUser = this.auth.getEmail();
  
    this.serviceUser.FindUserByMail(this.emailUser).subscribe(
      (data: Utilisateur) => {
   
        
        this.nom = data.nom;
        this.prenom = data.prenom;
        this.id = data.id;
        console.log('User found:', data);
        const UserMenu : Utilisateur ={
          id: data.id,
          nom: '',
          prenom: '',
          email: '',
          password: '',
          roles: undefined,
          examens: undefined,
          absences: undefined,
          matieres: undefined,
          classe: undefined,
          RendezvousValides: undefined,
          RendezvousPasses: undefined,
          demandesMenu: undefined,
          reunions: undefined
        }
        console.log('User found:', UserMenu);

        // Only create the menu after the user data has been fetched
        const currentDate = this.formatDate(new Date());
        const newMenu: Menu = {
          nom: 'Menu de ' + this.nom + ' ' + this.prenom + ':' + currentDate,
          type: 'Custom',
          repas: this.selectedProducts,
          date: currentDate,
          id: 0,
          id_User: this.id
        };

        // Save the menu
        this.service.addMenu(newMenu).subscribe(response => {
          console.log('Menu saved', response);
          this.selectedProducts = [];
        });
      }
    );
  }
  
    removeProduct(product: Repas) {
      this.selectedProducts = this.selectedProducts.filter(p => p.id !== product.id);
      this.availableProducts = [...this.availableProducts, product];
      console.log('Product removed:', product);
      console.log('Selected products:', this.selectedProducts);
      console.log('Available products:', this.availableProducts);
    }
}