import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingList } from '../shoppingList/shoppingList.component';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ShoppingList, AsyncPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    constructor(public auth: AuthService) {}
}