import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './componentes/header/header.component';
import { JobComponent } from './componentes/activitiescontainer/job/job.component';
import { StudyComponent } from './componentes/activitiescontainer/study/study.component';
import { ActivitiescontainerComponent } from './componentes/activitiescontainer/activitiescontainer.component';

import { ProyectcontainerComponent } from './componentes/proyectcontainer/proyectcontainer.component';
import { ProyectComponent } from './componentes/proyectcontainer/proyect/proyect.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    JobComponent,
    StudyComponent,
    ActivitiescontainerComponent,
    ProyectcontainerComponent,
    ProyectComponent,

    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    
  ],
  exports: [],
})
export class DashboardModule { }
