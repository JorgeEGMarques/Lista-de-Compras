import { Component } from '@angular/core';
import { ItemForm } from '../itemForm/itemForm.component';
import { FormsModule } from '@angular/forms';

type Item =  { id: number, name: String, status: String, edit: boolean }

@Component({
    selector: 'shopping-list',
    standalone: true,
    imports: [ItemForm, FormsModule],
    templateUrl: './shoppingList.component.html',
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