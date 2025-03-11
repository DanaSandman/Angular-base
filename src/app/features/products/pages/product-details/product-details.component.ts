import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { IconType } from '../../../../shared/icon/icon.types';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  loading = true;
  error = '';
  iconTypes = IconType;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadProduct(id);
    });
  }

  loadProduct(id: number): void {
    this.loading = true;
    this.productsService.getProduct(id).subscribe({
      next: (product) => {
        this.product = product;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'שגיאה בטעינת המוצר: ' + err.message;
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  addToCart(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    //TODO: Add to cart logic
    console.log('Adding to cart:', this.product);
    // cartService.addToCart(this.product);
  }
}
