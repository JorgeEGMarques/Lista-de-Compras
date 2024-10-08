import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingList } from '../shoppingList/shoppingList.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ShoppingList],
    template:`
        <main class="main">
            <div class="content">
                <shopping-list />
            </div>
        </main>
    `,
})
export class AppComponent {}