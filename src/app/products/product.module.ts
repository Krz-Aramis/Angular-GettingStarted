import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms' ;
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component' ;
import { StarComponent } from '../shared/star.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    ProductListComponent,
    StarComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id',
        canActivate: [ ProductGuardService ],
        component: ProductDetailComponent }
    ])
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
