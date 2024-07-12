import { Component, OnInit } from '@angular/core';
import { RendezVousServiceService } from '../../Services/rendez-vous-service.service';

@Component({
  selector: 'app-dashboard-rendez-vous',
  templateUrl: './dashboard-rendez-vous.component.html',
  styleUrls: ['./dashboard-rendez-vous.component.scss']
})
export class DashboardRendezVousComponent implements OnInit {
  data: any;
  options: any;
  totalRendezVous: any;

  constructor(private rendezVousService: RendezVousServiceService) {}

  ngOnInit() {
    this.rendezVousService.getRendezVousCountByStatus().subscribe(response => {
      const statuses = Object.keys(response);
      const counts = Object.values(response);

      this.data = {
        labels: statuses,
        datasets: [
          {
            data: counts,
            backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#FF6384'],
            hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D', '#FF6384']
          }
        ]
      };
      this.rendezVousService.getTotalRendezVousCount().subscribe(totalCount => {
      this.totalRendezVous = totalCount;
      });

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem: any) => {
                let label = tooltipItem.label || '';
                if (label) {
                  label += ': ';
                }
                label += Math.round(tooltipItem.raw);
                return label;
              }
            }
          }
        }
      };
    });
  }
}
