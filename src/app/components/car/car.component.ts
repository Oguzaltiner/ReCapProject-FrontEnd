import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Car} from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  Cars:Car[]=[];
  currentCar:Car;
  filterText="";
  constructor(private carService:CarService,private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }
      else{
        this.getCars()
      }
      if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }
      else{
        this.getCars()
      }
    })
    this.getCars();
    this
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.Cars=response.data
    })
  }
  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.Cars=response.data;
    })
  }
  getCarsByColorId(colorId:number){
   this.carService.getCarsByCarId(colorId).subscribe(response=>{
     this.Cars=response.data;
   }) 
  }
  SetCurrentCarDetail(car:Car){
    this.currentCar=car;
  }
}
