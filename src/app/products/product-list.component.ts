import { Component, OnInit }  from '@angular/core';
import { IProduct } from './product' ;
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ ProductService ]
})
export class ProductListComponent implements OnInit {

  private _defaultTitle: string = 'Product List';
  pageTitle : string ;
  imageWidth : number = 50;
  imageMargin: number = 2;
  showImage : boolean = false ;
  _listFilter: string ;
  errorMessage: string ;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value ;
    this.filteredProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products ;
  }

  filteredProducts: IProduct[];

  products: IProduct[] ;

  constructor(private _productService: ProductService ) {
    this.pageTitle = this._defaultTitle ;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.listFilter = '';
    this._productService.getProducts()
                        .subscribe(
                          products => {
                            this.products = products;
                            this.filteredProducts = this.products;
                          },
                          error => this.errorMessage = <any>error
                        );
  }

  performFilter(filterBy: string) : IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => 
                                 product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = this._defaultTitle + ' ' + message ;
  }

}
