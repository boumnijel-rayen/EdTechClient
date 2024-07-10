import { Component, OnInit } from '@angular/core';
import { ImportsModule } from '../imports';
import { DemandeMenu } from '../Models/DemandeMenu';
import { Menu } from '../Models/Menu';
import { Repas } from '../Models/Repas';
import { RestaurationServiceService } from '../Services/restauration-service.service';

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

  constructor(private service: RestaurationServiceService) {}

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
  saveMenu() {
    if (this.selectedProducts.length !== 4) {
      alert('Veuillez compléter la commande de votre menu sil vous plaît.');
      return;
    }
    const newMenu: Menu = {
      nom: 'Menufromangular',
      type: 'Custom',
      repas: this.selectedProducts,
      id: 0    };

    this.service.addMenu(newMenu).subscribe(response => {
      console.log('Menu saved', response);
      this.selectedProducts = [];
    });}
    removeProduct(product: Repas) {
      this.selectedProducts = this.selectedProducts.filter(p => p.id !== product.id);
      this.availableProducts = [...this.availableProducts, product];
      console.log('Product removed:', product);
      console.log('Selected products:', this.selectedProducts);
      console.log('Available products:', this.availableProducts);
    }
}