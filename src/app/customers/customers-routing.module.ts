import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarrentyRegisterComponent } from './warrenty-register/warrenty-register.component';

const routes: Routes = [
  {path:'register', component:WarrentyRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
