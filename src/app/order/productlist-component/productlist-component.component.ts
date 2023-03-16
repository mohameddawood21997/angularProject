import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';
import { StaticProductsService } from 'src/app/Services/static-products.service';
import { CartProduct } from 'src/app/ViewModels/cart-product';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-productlist-component',
  templateUrl: './productlist-component.component.html',
  styleUrls: ['./productlist-component.component.css']
})
export class ProductlistComponentComponent implements OnChanges ,OnInit{

  constructor(private productServices:StaticProductsService ,private productServ:ProductService,private router:ActivatedRoute){
   
    this.ontotakPriceChanged=new EventEmitter<number>();
    this.inserToOrder=new EventEmitter<CartProduct[]>();
     }
  @Input() sentCatId:number=0;

  apiProducts:Product[]=[];
    // editProduct(id: string) {
    //   this.router.(['/products/edit', id]);
    // }

  ngOnInit(): void{
        this.productServ.getAllProduct().subscribe({
          next:(res)=>{
            this.apiProducts=res;
            console.log(res);
            
          }
        })
  }
   
   selectedId:number=0;
  showDate:Date=new Date();
  totalOrderPrice:number=0;
  // selectedId:number=0;
  insertProToOrder=[];
  


  clientName=" name";

  ngOnChanges():void {
   this.selectedId=this.sentCatId;
  }


  //event
  @Output() ontotakPriceChanged!:EventEmitter<number>

  @Output() inserToOrder!:EventEmitter<CartProduct[]>
  // @Output()  ontotakPriceChanged:EventEmitter<number>=new EventEmitter<number>();
  //out put decorator علشان ابعت للاب

    // ! none null assertion opeartion يعنى مش لازم ادى قيمه ابتداآيه مش هخليه فاضى ابد 
  // productList:IProduct[]=[
  //   {
  //     ID:1,
  //     name:"samsung note10",
  //     quantity:5,
  //     price:200,
  //     img:"assets/images/1.png",
  //     CateogryID:1,
  //   } , {
  //     ID:2,
  //     name:"oppo f11",
  //     quantity:1,
  //     price:200,
  //     img:"assets/images/1.png",
  //     CateogryID:2,
  //   }, {
  //     ID:3,
  //     name:"oppo f9",
  //     quantity:0,
  //     price:200,
  //     img:"assets/images/2.png",
  //     CateogryID:2,
  //   },
  //   {
  //     ID:4,
  //     name:"iphone 11",
  //     quantity:10,
  //     price:200,
  //     img:"assets/images/3.png",
  //     CateogryID:3,
  //   },
  //   {
  //     ID:5,
  //     name:"samsung s30",
  //     quantity:10,
  //     price:200,
  //     img:"assets/images/4.png",
  //     CateogryID:1,
  //   }

  // ]
 
  CartProducts:CartProduct[]=[];
  productList:IProduct[]=this.productServices.productList;
  itemPrd!:CartProduct;
   totalPrices:number=0;
  
    buy(price:number,quan:string) {
    this.totalOrderPrice+=price*+quan;
    this.ontotakPriceChanged.emit(this.totalOrderPrice);
  }
  

  insertToOrder(id:string,QuanNedd:string){
         
      // let  item=this.productList.find((ele)=>ele.ID==id)||{} as CartProduct;
      // let  item=this.productServices.productList.find((ele)=>ele.ID==id) || {} as CartProduct;
      // this.totalPrices=+QuanNedd*item.price;
      //  this.itemPrd={ID:id,name:item?.name,quantity:item?.quantity,
      //   img:item?.img,neededQuan:+QuanNedd,totalPrice:this.totalPrices,
      //   CateogryID:item?.CateogryID,price:item?.price};


      // this.CartProducts.push(this.itemPrd);
      //   this.inserToOrder.emit(this.CartProducts);
        
  } 
  
 buy1(quan:number,prd:IProduct,id:number):number{
// console.log(quan)
   if(prd.ID==id && quan>1)
   {
    prd.quantity= prd.quantity-1;
   }
   console.log(prd.quantity);
   
   return quan;
   
 }
  // trackbyFun(index: number, prd: IProduct): number {
  //   return prd.ID;
  // }


  isTableShow=true;
  isDivShow=false;

  purchase(){
     this.isTableShow =! this.isTableShow;
     this.isDivShow =! this.isDivShow;
  }

  deleteProduct(id:any){
  
    this.productServ.deleteProducts(id).subscribe(
      (product)=>{
        console.log("record deleted successfuly");
        
      }
    )
  console.log(id);
  
  }

}
