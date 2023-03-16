import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductlistComponentComponent } from './order/productlist-component/productlist-component.component';
import { FormsModule } from '@angular/forms';
import { LigthboxDirective } from './Directives/ligthbox.directive';
import { SquarePipe } from './pipes/square.pipe';
import { CardPipe } from './pipes/card.pipe';
import { OrderComponent } from './order/productlist-component/order/order.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { DetailsComponent } from './components/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/editProducts/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductlistComponentComponent,
    LigthboxDirective,
    SquarePipe,
    CardPipe,
    OrderComponent,
    NotFoundComponent,
    MainLayoutComponent,
    DetailsComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
