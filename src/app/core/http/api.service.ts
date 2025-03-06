import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ApiOptions } from '../models/http.model';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
    })

    export class ApiService {

    private readonly BASE_URL = environment.apiUrl || '';
    constructor(private http: HttpClient) {}

    get<T>(endpoint: string, options: ApiOptions = {}): Observable<T> {
        return this.request<T>('GET', endpoint, null, options);
    };

    post<T, D = any>(endpoint: string, body: D, options: ApiOptions = {}): Observable<T> {
        return this.request<T>('POST', endpoint, body, options);
    };

    put<T, D = any>(endpoint: string, body: D, options: ApiOptions = {}): Observable<T> {
        return this.request<T>('PUT', endpoint, body, options);
    };

    patch<T, D = any>(endpoint: string, body: D, options: ApiOptions = {}): Observable<T> {
        return this.request<T>('PATCH', endpoint, body, options);
    };

    delete<T>(endpoint: string, options: ApiOptions = {}): Observable<T> {
        return this.request<T>('DELETE', endpoint, null, options);
    };

    private request<T>(method: string, endpoint: string, body: any = null, options: ApiOptions = {}): Observable<T> {
        const url = this.createUrl(endpoint);
        const requestOptions = { ...options, responseType: 'json' as const };

        let request: Observable<any>;

        switch (method) {
            case 'GET':
                request = this.http.get<T>(url, requestOptions);
                break;
            case 'POST':
                request = this.http.post<T>(url, body, requestOptions);
                break;
            case 'PUT':
                request = this.http.put<T>(url, body, requestOptions);
                break;
            case 'PATCH':
                request = this.http.patch<T>(url, body, requestOptions);
                break;
            case 'DELETE':
                request = this.http.delete<T>(url, requestOptions);
                break;
            default:
                throw new Error(`Method ${method} not supported`);
        };

        return request.pipe(catchError(this.handleError));
    };

    private createUrl(endpoint: string): string {
        if (endpoint.startsWith('http')) {
            return endpoint;
        }
        
        return `${this.BASE_URL}/${endpoint.startsWith('/') ? endpoint.slice(1) : endpoint}`;
    };

    private handleError(error: HttpErrorResponse): Observable<never> {
        const errorMessage = error.error instanceof ErrorEvent
            ? `Client error: ${error.error.message}`
            : `Server error ${error.status}: ${error.statusText || ''} ${error.error?.message || ''}`;
        
        console.error(errorMessage, error);
        
        return throwError(() => ({
            status: error.status,
            message: errorMessage,
            error: error.error
        }));
    }
} 