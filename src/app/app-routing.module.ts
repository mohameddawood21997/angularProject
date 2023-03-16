import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DetailsComponent } from './components/details/details.component';
import { EditProductComponent } from './components/editProducts/edit-product/edit-product.component';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderComponent } from './order/productlist-component/order/order.component';
import { ProductlistComponentComponent } from './order/productlist-component/productlist-component.component';

const routes: Routes = [
  {path:'',redirectTo:"/Home",pathMatch:"full"},
  {path:'Home',component:HomeComponent},
  {path:'products',component:ProductlistComponentComponent},
  {path:"editPro/:id",component:EditProductComponent},
  // {path:"products/edit/:id",component:EditProductComponent},
  {path:'order',component:OrderComponent},
  
  { path:"main",component:MainLayoutComponent,
  children:[
    {path:"",component:ProductlistComponentComponent},
    {path:"products",component:ProductlistComponentComponent},
    {path:'products/addProduct',component:AddProductComponent},
    // {path:"editProducts/:id",component:EditProductComponent},
    // {path:"editPro/:id",component:EditProductComponent},
    {path:"order",component:OrderComponent},
  
    {path:"products/:id",component:DetailsComponent},
  



  ],
 
},

{
  path: 'users',
  loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
},

{path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
