import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { StaticProductsService } from 'src/app/Services/static-products.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit ,OnDestroy{
  productId:string|null="";
  product:Product={} as Product ;
  constructor(private activatedRoute:ActivatedRoute,private productSer:StaticProductsService,private location:Location
    ,private productServ:ProductService,private categorySer:CategoryService
    ){
  

  }
  categories:Category[]=[];
  // product:Product={} as Product;
 
 sub!:Subscription
  ngOnInit(){
   this.productId=this.activatedRoute.snapshot.paramMap.get('id');
  this.sub= this.productServ.getProductById(this.productId).subscribe({
    next:(res)=>{
   this.product=res;
    }
   });
   console.log(this.productId);

   this.categorySer.getCategories().subscribe({
    next:(res)=>{
      this.categories=res;
      console.log(this.categories);
   
  }
 
    }
   )}
   updateProduct(){
    this.productServ.updateProducts(this.product,this.productId).subscribe(
      (prod)=>{
        console.log("success update record",prod);
        
      }
    )
    // console.log(this.product);
    
   }


  goBack(){
   this.location.back();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
