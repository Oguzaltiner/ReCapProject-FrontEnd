import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl='https://localhost:44347/api/';
  constructor(private httpClient:HttpClient) { }
  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbyBrandId?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarsByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbyColorId?colorId="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardetailbycarId?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);

  }
}
