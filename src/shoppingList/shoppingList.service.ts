import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

export interface Item { id: String, name: String, status: String, edit: boolean }

@Injectable({
    providedIn: 'root',
})

export class ShoppingListService {
    private apiUrl = 'http://localhost:3000/shopping-list';
    constructor(private httpClient: HttpClient) {}

    getItems(): Observable<Item[]> {
        return this.httpClient.get<Item[]>(this.apiUrl);
    }

    getItem(id: number): Observable<Item> {
        return this.httpClient.get<Item>(`${this.apiUrl}/${id}`);
    }

    addItem(item: Item): Observable<Item> {
        return this.httpClient.post<Item>(this.apiUrl, item);
    }

    updateItem(item: Item): Observable<Item> {
        return this.httpClient.put<Item>(
            `${this.apiUrl}/${item.id}`,
            item
        );
    }

    deleteItem(id: number) {
        return this.httpClient.delete<Item>(`${this.apiUrl}/${id}`);
    }
}