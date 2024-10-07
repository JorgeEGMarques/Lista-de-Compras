import { Component } from '@angular/core';
import { ItemForm } from '../itemForm/itemForm.component';

type Item =  { id: number, name: String, status: String }

@Component({
    selector: 'shopping-list',
    standalone: true,
    imports: [ItemForm],
    template:`
    <div class="content">
        <item-form (getName)="addNewItem($event)" />
        @for (item of items; track $index) {
            <div class="item">
                <p>{{ item.name }}</p>
                <div class="buttons">
                    <button>Edit</button>
                    <button (click)="changeItemStatus(item)">{{ item.status }}</button>
                    <button (click)="removeItem(item)">Remove</button>                    
                </div>
            </div>
        }       
    </div>

    `,
    styleUrls: ['./shoppingList.component.css']
})
export class ShoppingList {
    count = 0;
    items: Item[] = [];

    addNewItem(itemName: String) {
        this.items.push({ id: this.count , name: itemName, status: 'Comprar' });
        this.count++;
    }

    changeItemStatus(item: Item) {
        item.status == 'Comprar' ?
            item.status = 'Comprado' : item.status = 'Comprar';
    }

    removeItem(item: Item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }

    edit(item: Item, name: String) {
        item.name = name;
    }
}