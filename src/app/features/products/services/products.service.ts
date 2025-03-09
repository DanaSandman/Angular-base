import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ApiService } from '../../../core/http/api.service';

@Injectable({
    providedIn: 'root'
    })
    export class ProductsService {
    private endpoint = 'products';

    constructor(private apiService: ApiService) { }

    getProducts(): Observable<Product[]> {
        return this.apiService.get<Product[]>(this.endpoint);
    }

    getProduct(id: number): Observable<Product> {
        return this.apiService.get<Product>(`${this.endpoint}/${id}`);
    }

    getLimitedProducts(limit: number = 25): Observable<Product[]> {
        return this.apiService.get<Product[]>(`${this.endpoint}?limit=${limit}`);
    }

    getProductsByCategory(category: string): Observable<Product[]> {
        return this.apiService.get<Product[]>(`${this.endpoint}/category/${category}`);
    }

    addProduct(product: Omit<Product, 'id'>): Observable<Product> {
        return this.apiService.post<Product, Omit<Product, 'id'>>(this.endpoint, product);
    }

    updateProduct(id: number, product: Partial<Product>): Observable<Product> {
        return this.apiService.put<Product, Partial<Product>>(`${this.endpoint}/${id}`, product);
    }

    deleteProduct(id: number): Observable<any> {
        return this.apiService.delete<any>(`${this.endpoint}/${id}`);
    }

    getCategories(): Observable<string[]> {
        return this.apiService.get<string[]>(`${this.endpoint}/categories`);
    }
} 