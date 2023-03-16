import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CartProduct } from 'src/app/ViewModels/cart-product';
import { ICategory } from 'src/app/ViewModels/icategory';
import { ProductlistComponentComponent } from '../productlist-component.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  implements AfterViewInit{

  @ViewChild('clientinp') inp!:ElementRef;
  @ViewChild(ProductlistComponentComponent) productListObj!:ProductlistComponentComponent;//  اقدر استدعى فى فانكشن او ميثود من البرودكت هنا
  

  ngAfterViewInit(): void{
    this.inp.nativeElement.style.backgroundColor='red';
    this.inp.nativeElement.value='hellow mr ';
    
  }
  totalOrderPrice:number=0;
  selectedId:number=0;
 CartsProducts:CartProduct[]=[];
  categories:ICategory[]=[{ 
    ID:1,
    catName:"samsung"},{  
       ID:2,
      catName:"oppo",
      },{ID:3,catName:"iphone"}
                           ];

        calcOrderPrice(e:number){
 this.totalOrderPrice=e;
        }

        addTocart(e:CartProduct[]){
         this.CartsProducts=e;
         console.log(this.CartsProducts)
        }

        deleteFromCart(id:number){
            this.CartsProducts=this.CartsProducts.filter((ele)=>ele.ID!=id);
            
        }
}
