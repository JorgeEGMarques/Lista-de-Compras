import { Component } from '@angular/core';
import { ShoppingList } from '../shoppingList/shoppingList.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ShoppingList],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {}