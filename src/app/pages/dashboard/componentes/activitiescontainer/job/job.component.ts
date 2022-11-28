import { Component, OnInit } from '@angular/core';
import { PortfolioService} from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  miJob: any;

  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(db => {
      this.miJob = db.job;
    })
  }

}
