import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface ApiOptions {
    headers?: HttpHeaders | { [header: string]: string | string[] };
    params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> };
    observe?: any;
    reportProgress?: boolean;
    withCredentials?: boolean;
    responseType?: 'json' | 'text' | 'blob' | 'arraybuffer';
}

export interface ApiError {
    status: number;
    message: string;
    error?: any;
} 