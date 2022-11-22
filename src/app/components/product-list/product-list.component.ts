import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: IProduct[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(): any {
    this.productsService.getProducts().pipe(
      take(1)
    ).subscribe(productList => {
      this.products = productList;
    });
  }

}
