import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 5, 8, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(54,162,235,0.2)',
          borderColor: 'rgba(54,162,235,1)',
          pointBackgroundColor: 'rgba(54,162,235,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(54,162,235,1)',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: true
    };

    this.data1 = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    };

    this.options1 = {
      responsive: true,
      maintainAspectRatio: false
    };
  }
}
