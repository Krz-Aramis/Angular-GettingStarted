import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list.component' ;
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
