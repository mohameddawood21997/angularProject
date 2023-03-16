import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  constructor(private activatedRoute:ActivatedRoute,private productSer:StaticProductsService,private location:Location
    ,private productServ:ProductService
    ){}
    // editProduct(id: string) {
    //   this.router.navigate(['/products/edit', id]);
    // }
    categories:Category[]=[];
    productId:string|null="";
    product:Product={} as Product ;
    sub!:Subscription
    ngOnInit(){
     this.productId=this.activatedRoute.snapshot.paramMap.get('id');
    this.sub= this.productServ.getProductById(this.productId).subscribe({
      next:(res)=>{
     this.product=res;
      }
     });
     console.log(this.productId);
     
    }
  
    // goBack(){
    //  this.location.back();
    // }
}
