import { Component } from '@angular/core';
import { ItemForm } from '../itemForm/itemForm.component';
import { FormsModule } from '@angular/forms';

type Item =  { id: number, name: String, status: String }

@Component({
    selector: 'shopping-list',
    standalone: true,
    imports: [ItemForm, FormsModule],
    template:`
    <div class="content">
        <item-form class="new-item" (getName)="addNewItem($event)" />
        @for (item of items; track $index) {
            <div class="item">
                <div class="buttons">
                    @if (!isEditing) {
                        <p id="item-name">{{ item.name }}</p>
                        <button (click)="edit(item)">Edit</button>
                        <button (click)="changeItemStatus(item)">{{ item.status }}</button>
                        <button (click)="removeItem(item)">Remove</button>
                    } @else {
                        <label for="text-box">
                            New Name:
                            <input type="text" id="text-box" [(ngModel)]="itemName" />
                        </label>
                        <button (click)="edit(item)">Confirmar</button>
                    }              
                </div>
            </div>
        }
    </div>

    `,
    styleUrls: ['./shoppingList.component.css', '../itemForm/itemForm.component.css']
})
export class ShoppingList {
    count = 0;
    items: Item[] = [];
    isEditing = false;
    itemName = '';

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

    edit(item: Item) {
        if (this.isEditing && this.itemName != '') {
            item.name = this.itemName;
        }
        this.isEditing = !this.isEditing;
    }
}