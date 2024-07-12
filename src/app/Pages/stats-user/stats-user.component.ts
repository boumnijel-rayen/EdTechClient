import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-stats-user',
  templateUrl: './stats-user.component.html',
  styleUrl: './stats-user.component.scss'
})
export class StatsUserComponent implements OnInit{
  
  data: any;
  options: any;

  data1: any;
  options1: any;
  active :any
  archive : any
  desactive: any

  constructor(private userService : UserService, private auth : AuthServiceService){}

  ngOnInit() {
    this.userService.userStatus(this.auth.getToken()).subscribe((rep : any) =>{
      this.active = rep.nbActive
      this.archive = rep.nbArchive
      this.desactive = rep.nbDesactive
      this.data1 = {
        labels: ['Archivé', 'Desactivé', 'Activé'],
        datasets: [
          {
            data: [rep.nbArchive, rep.nbDesactive, rep.nbActive],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      };
      
    }).add(() => {
      this.userService.validationsStats(this.auth.getToken()).subscribe((rep : any) => {
        this.data = {
          labels: [],
          datasets: []
        };

        this.data.datasets = [
          {
            label: 'Comptes validés',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data : []
          },
          {
            label: 'Comptes Crées',
            backgroundColor: 'rgba(54,162,235,0.2)',
            borderColor: 'rgba(54,162,235,1)',
            pointBackgroundColor: 'rgba(54,162,235,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54,162,235,1)',
            data: []
          }
        ]

        for (let i = 0; i < rep.validationsStats.length; i++) {
          this.data.labels.push(rep.validationsStats[i].mois)
          this.data.datasets[0].data.push(rep.validationsStats[i].nb)
          this.data.datasets[1].data.push(rep.creationStats[i].nb)
        }
        
      })
    })
    this.options = {
      responsive: true,
      maintainAspectRatio: true
    };

    

    this.options1 = {
      responsive: true,
      maintainAspectRatio: false
    };
    
  }
}
