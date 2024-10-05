import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShoppingList } from '../shoppingList/shoppingList.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, FormsModule, ShoppingList],
    template:`
        <main class="main">
            <div class="content">
                <shopping-list />
            </div>
        </main>
    `,
})
export class AppComponent {}