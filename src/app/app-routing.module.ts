import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { RentalComponent } from './components/rental/rental.component';
import { RentalService } from './services/rental.service';

const routes: Routes = [
  {
    path:"",component:CarComponent
  },{
    path:"cars",component:CarComponent
  },{
    path:"cars/brand/:brandId",component:CarComponent
  },{
    path:"cars/color/:colorId",component:CarComponent
  }, {path:"car/cardetails/:id",component:CardetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
