import { Component, OnInit } from '@angular/core';
import { Repas } from '../Models/Repas';
import { RestaurationServiceService } from '../Services/restauration-service.service';

@Component({
  selector: 'app-static-repas',
  templateUrl: './static-repas.component.html',
  styleUrl: './static-repas.component.scss'
})
export class StaticRepasComponent implements OnInit {
  selectedDate: string = '';
  chartData: any;
  chartOptions: any;

  constructor(private restaurationService: RestaurationServiceService) {}

  ngOnInit(): void {
    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Repas Data Chart'
        }
      }
    };
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  showGraph() {
    if (!this.selectedDate) {
      alert('Please select a date');
      return;
    }
    const formattedDate = this.formatDate(new Date(this.selectedDate));
    this.restaurationService.getRepasByDate(formattedDate).subscribe((repas: Repas[]) => {
      const repasMap: { [key: string]: { nom: string, categorie: string, count: number } } = {};

      repas.forEach(r => {
        const key = `${r.nom}-${r.categorie}`;
        if (repasMap[key]) {
          repasMap[key].count++;
        } else {
          repasMap[key] = { nom: r.nom, categorie: r.categorie, count: 1 };
        }
      });

      const labels = Object.values(repasMap).map(r => `${r.nom} (${r.categorie})`);
      const data = Object.values(repasMap).map(r => r.count);

      this.chartData = {
        labels,
        datasets: [
          {
            label: 'Count of Repas',
            data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      };
    });
  }
}