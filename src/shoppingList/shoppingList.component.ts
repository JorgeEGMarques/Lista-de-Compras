import { Component } from '@angular/core';
import { ItemForm } from '../itemForm/itemForm.component';
import { FormsModule } from '@angular/forms';

type Item =  { id: number, name: String, status: String, edit: boolean }

@Component({
    selector: 'shopping-list',
    standalone: true,
    imports: [ItemForm, FormsModule],
    template:`
    <div class="content">
        <item-form class="new-item" (getName)="addNewItem($event)" />
        @for (item of itens; track $index) {
            <ul class="item-list">
                <li class="item">
                    @if (!item.edit) {
                        <div id="name">
                            <p id="item-name">{{ item.name }}</p>
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
        <h3>Comprados:</h3>
        @for (item of itensComprados; track $index) {
            <ul class="item-list">
                <li class="item">
                    @if (!item.edit) {
                        <div id="name">
                            <s id="item-name">{{ item.name }}</s>
                        </div>
                        <div id="buttons">
                            <button id="comprado" (click)="changeItemStatus(item)">{{ item.status }}</button>
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
    itens: Item[] = [];
    itensComprados: Item[] = [];
    itemName = '';

    addNewItem(itemName: String) {
        this.itens.push({ id: this.count , name: itemName, status: 'Comprar', edit: false });
        this.count++;
    }

    changeItemStatus(item: Item) {
        item.status == 'Comprar' ?
            item.status = 'Comprado' : item.status = 'Comprar';
        if (item.status == 'Comprado') {
            this.itensComprados.push(item);
            const index = this.itens.indexOf(item);
            this.itens.splice(index, 1);
        } else {
            this.itens.push(item);
            const index = this.itensComprados.indexOf(item);
            this.itensComprados.splice(index, 1);
        }
    }

    removeItem(item: Item) {
        if (item.status == 'Comprado') {
            const index = this.itensComprados.indexOf(item);
            this.itensComprados.splice(index, 1);
        } else {
            const index = this.itens.indexOf(item);
            this.itens.splice(index, 1);
        }
    }

    edit(item: Item) {
        if (item.edit && this.itemName != '') {
            item.name = this.itemName;
        }
        item.edit = !item.edit;
        this.itemName = '';
    }
}