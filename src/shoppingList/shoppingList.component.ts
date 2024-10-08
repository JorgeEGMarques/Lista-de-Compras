import { Component } from '@angular/core';
import { ItemForm } from '../itemForm/itemForm.component';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

type Item =  { id: number, name: String, status: String, edit: boolean }

@Component({
    selector: 'shopping-list',
    standalone: true,
    imports: [ItemForm, FormsModule, NgStyle],
    template:`
    <div class="content">
        <item-form class="new-item" (getName)="addNewItem($event)" />
        @for (item of items; track $index) {
            <ul class="item-list">
                <li class="item">
                    @if (!item.edit) {
                        <div id="name">
                            @if (item.status == 'Comprado') {
                                <s id="item-name">{{ item.name }}</s>
                            } @else {
                                <p id="item-name">{{ item.name }}</p>
                            }
                        </div>
                        <div id="buttons">
                            <button (click)="changeItemStatus(item)">{{ item.status }}</button>
                            <img id="edit" src="edit.png" alt="Edit" (click)="edit(item)">
                            <img src="trash.png" alt="Remover" (click)="removeItem(item)">
                        </div>
                    } @else {
                        <label for="text-box">
                            New Name:
                            <input type="text" id="text-box" [(ngModel)]="itemName" />
                        </label>
                        <button (click)="edit(item)">Confirmar</button>
                    }              
                </li>
            </ul>
        }
    </div>

    `,
    styleUrls: ['./shoppingList.component.css', '../itemForm/itemForm.component.css']
})
export class ShoppingList {
    count = 0;
    items: Item[] = [];
    itemName = '';

    addNewItem(itemName: String) {
        this.items.push({ id: this.count , name: itemName, status: 'Comprar', edit: false });
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
        if (item.edit && this.itemName != '') {
            item.name = this.itemName;
        }
        item.edit = !item.edit;
        this.itemName = '';
    }
}