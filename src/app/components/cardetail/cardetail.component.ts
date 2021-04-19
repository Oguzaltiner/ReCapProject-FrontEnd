import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {
  carDetail : CarDetail[]=[] 
  constructor(private carService:CarService , private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarDetailsByCarId(params["id"]);
      }
    })
  }
  getCarDetailsByCarId(id:number)
  {
    this.carService.getCarDetailsByCarId(id).subscribe((response)=>{ 
      this.carDetail=response.data
    })
    
  }
}
