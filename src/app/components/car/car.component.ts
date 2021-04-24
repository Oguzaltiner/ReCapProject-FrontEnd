import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import {Car} from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  Cars:Car[]=[];
  Brands:Brand[]=[];
  Colors:Color[]=[];
  currentCar:Car;
  filterText="";
  brandFilter:number=0;
  colorFilter:number=0;
  constructor(private carService:CarService,private activetedRoute:ActivatedRoute,private brandService:BrandService,private colorService:ColorService) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params=>{
      if (params['brandId'] && params['colorId']) {
        this.brandFilter = params['brandId'];
        this.colorFilter = params['colorId'];
        this.GetCarsBrandAndColor(params['brandId'], params['colorId']);
      }
      else if(params["brandId"]){
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
    this.getBrands();
    this.getColors();
  }
  GetCarsBrandAndColor(brandId: number, colorId: number) {
    this.carService
      .GetCarsBrandAndColor(brandId, colorId)
      .subscribe((response) => {
        this.Cars = response.data;
      });
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
  getBrands(){
    this.brandService.getBrands().subscribe(respose=>{
      this.Brands=respose.data;
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.Colors=response.data;
    })
  }
  selectedColor(colorId: number) {
    if (this.colorFilter == colorId) {
      return true;
    } else {
      return false;
    }
  }
  selectedBrand(brandId: number) {
    if (this.brandFilter == brandId) {
      return true;
    } else {
      return false;
    }
  }


}
