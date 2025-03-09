import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  categories: string[] = [];
  @Output() filterChange = new EventEmitter<string>();
  
  constructor(private productsService: ProductsService) { }
  
  ngOnInit(): void {
    this.loadCategories();
  }
  
  loadCategories(): void {
    this.productsService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  
  onCategoryChange(category: string): void {
    this.filterChange.emit(category);
  }
} 