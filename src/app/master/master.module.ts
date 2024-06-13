import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';

import { MasterRoutingModule } from './master-routing.module';
import { ViewAllComponent } from './view-all/view-all.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ViewAllComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MasterModule { }
