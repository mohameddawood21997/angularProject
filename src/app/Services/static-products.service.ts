import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn:    'root' //AppModule    بنخليها متشافه فى اى حتى انا عاوزها
})
export class StaticProductsService {
  productList:IProduct[];
  constructor() {
   this.productList=[
      {
        ID:1,
        name:"samsung note10",
        quantity:5,
        price:200,
        img:"assets/images/1.png",
        CateogryID:1,
      } , {
        ID:2,
        name:"oppo f11",
        quantity:1,
        price:200,
        img:"assets/images/1.png",
        CateogryID:2,
      }, {
        ID:3,
        name:"oppo f9",
        quantity:0,
        price:200,
        img:"assets/images/2.png",
        CateogryID:2,
      },
      {
        ID:4,
        name:"iphone 11",
        quantity:10,
        price:200,
        img:"assets/images/3.png",
        CateogryID:3,
      },
      {
        ID:5,
        name:"samsung s30",
        quantity:10,
        price:200,
        img:"assets/images/4.png",
        CateogryID:1,
      }
  
    ]
   }

   getAllProduct(){
    return this.productList
   }
   getProductById(id:number):IProduct|undefined{
return this.productList.find(prd=>prd.ID==id)
   }

   getProductByCatId(catId:number){
    return this.productList.filter(prd=>prd.CateogryID==catId)
   }
}
