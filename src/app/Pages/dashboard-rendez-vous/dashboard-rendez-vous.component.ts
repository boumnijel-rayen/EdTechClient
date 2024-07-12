import { Component, OnInit } from '@angular/core';
import { RendezVousServiceService } from '../../Services/rendez-vous-service.service';

interface StatusCount {
  status: string;
  count: number;
  percentage: number;
}

@Component({
  selector: 'app-dashboard-rendez-vous',
  templateUrl: './dashboard-rendez-vous.component.html',
  styleUrls: ['./dashboard-rendez-vous.component.scss']
})
export class DashboardRendezVousComponent implements OnInit {
  data: any;
  options: any;
  totalRendezVous: any;

  highestStatus: StatusCount = { status: '', count: 0, percentage: 0 };
  lowestStatus: StatusCount = { status: '', count: 0, percentage: 0 };
  highLowChartData: any;
  highLowChartOptions: any;

  constructor(private rendezVousService: RendezVousServiceService) {}

  ngOnInit() {
    this.rendezVousService.getRendezVousCountByStatus().subscribe(response => {
      const statuses = Object.keys(response);
      const counts = Object.values(response) as number[];

      this.totalRendezVous = counts.reduce((acc, count) => acc + count, 0);

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

      this.calculateStatusCounts(statuses, counts);
    });
  }

  calculateStatusCounts(statuses: string[], counts: number[]): void {
    const sortedIndexes = counts.map((count, index) => index).sort((a, b) => counts[b] - counts[a]);
    const highestIndex = sortedIndexes[0];
    const lowestIndex = sortedIndexes[sortedIndexes.length - 1];

    this.highestStatus = {
      status: statuses[highestIndex],
      count: counts[highestIndex],
      percentage: (counts[highestIndex] / this.totalRendezVous) * 100
    };

    this.lowestStatus = {
      status: statuses[lowestIndex],
      count: counts[lowestIndex],
      percentage: (counts[lowestIndex] / this.totalRendezVous) * 100
    };

    this.highLowChartData = {
      labels: [this.highestStatus.status, this.lowestStatus.status],
      datasets: [
        {
          data: [this.highestStatus.count, this.lowestStatus.count],
          backgroundColor: ['#36A2EB', '#FF6384']
        }
      ]
    };

    this.highLowChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Highest and Lowest Rendez-Vous Status'
        }
      }
    };
  }
}
