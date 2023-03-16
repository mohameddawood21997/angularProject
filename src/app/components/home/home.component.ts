import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { PromitionAdsService } from 'src/app/Services/promition-ads.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit,OnDestroy{
  title = 'demo';

  clientName:string="mohamed ahmed"

  storeInfo=new StoreData("iti","https://picsum.photos/400/300",['sohag','alex','cairo','Qena']);
  adsSubscribe!:Subscription;

 constructor(private promitionads:PromitionAdsService){

 }
 ngOnInit(): void {
  this.adsSubscribe=this.promitionads.getAds().subscribe({next:(ads)=>{ console.log(ads);

   },error:(error)=>{console.log(error);
   },complete:()=>{console.log('finished');
   }})
 }

  // constructor(public productList:IProduct[]){

  // }
 
  productList:IProduct[]=[
    {
      ID:1,
      name:"shsjh",
      quantity:5,
      price:200,
      img:"shsjh",
      CateogryID:1,
    }
    ,
    {
      ID:2,
      name:"nsns",
      quantity:5,
      price:200,
      img:"jjj.j[g",
      CateogryID:2,
    }

  ]

  ngOnDestroy(): void {
    this.adsSubscribe.unsubscribe();
  }
}
