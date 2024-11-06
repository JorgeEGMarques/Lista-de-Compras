import { Component, OnInit } from '@angular/core';
import { ItemForm } from '../itemForm/itemForm.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListService, Item } from './shoppingList.service';

@Component({
    selector: 'shopping-list',
    standalone: true,
    imports: [ItemForm, FormsModule],
    templateUrl: './shoppingList.component.html',
    styleUrls: ['./shoppingList.component.css', '../itemForm/itemForm.component.css']
})
export class ShoppingList implements OnInit{
    items!: Item[];
    itemName = '';

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit(): void {
        this.shoppingListService.getItems().subscribe((data) => {
            this.items = data;
        });
    }

    addItem(itemName: String) {
        if (this.items.length == 0) {
            this.shoppingListService.addItem({
                id: "0", name: itemName, status: 'Comprar', edit: false
            }).subscribe({
                next: (item) => { this.items.push(item); },
            });
        } else {
            this.shoppingListService.addItem({
                id: (+this.items[this.items.length - 1].id + 1).toString(), name: itemName, status: 'Comprar', edit: false
            }).subscribe({
                next: (item) => { this.items.push(item); },
            });
        }
    }

    updateItemName(item: Item) {
        if (this.itemName != '') {
            item.name = this.itemName;
        }
        this.itemName = '';
        item.edit = !item.edit;

        this.shoppingListService.updateItem(item).subscribe({
            next: (item) => {}
        });
    }

    updateStatus(item: Item) {
        if (item.status == 'Comprar') { item.status = 'Comprado' }
        else { item.status = 'Comprar' };

        this.shoppingListService.updateItem(item).subscribe({
            next: (item) => {}
        });
    }

    deleteItem(item: Item) {
        this.items = this.items.filter((i) => i.id !== item.id);
        this.shoppingListService.deleteItem(+item.id).subscribe();
    }
}