import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { Product } from 'src/app/Models/product';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  constructor(private categorySer:CategoryService,private productServ:ProductService, private router:Router ){
      
  }
  categories:Category[]=[];
  product:Product={} as Product;

  ngOnInit(): void {
    this.categorySer.getCategories().subscribe({
    next:(res)=>{
      this.categories=res;
      console.log(this.categories);
      

    }
   })
  }
  saveProduct(){
    //   let prd:Product={
    //   name: "Nokia x",
    //   quantity: 3,
    //   imgURL: "https://fakeimg.pl/200x100/",
    //   cateogryId: "63fe9f609cff10845b00588c",
    //   price: 10000
    // }
    this.productServ.saveNewProduct(this.product).subscribe({
      next:(res)=>{
     console.log(res);
     console.log(this.product);
     this.router.navigate(['/main/products']);
   
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }




}
