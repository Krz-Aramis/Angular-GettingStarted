import { Component, OnInit }  from '@angular/core';
import { IProduct } from './product' ;

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private _defaultTitle: string = 'Product List';
  pageTitle : string ;
  imageWidth : number = 50;
  imageMargin: number = 2;
  showImage : boolean = false ;
  _listFilter: string ;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value ;
    this.filteredProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products ;
  }

  filteredProducts: IProduct[];

  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
  },
  {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
  }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = '';
    this.pageTitle = this._defaultTitle ;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('product-list component OnInit()! ') ;
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
