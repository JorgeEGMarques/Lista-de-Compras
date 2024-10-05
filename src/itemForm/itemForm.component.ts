import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'item-form',
    standalone: true,
    imports: [FormsModule],
    template:`
        @if (!isEditing) {
            <button (click)="showItemForm()">New item</button>
        } @else {
            <label for="framework">
                Nome do item:
                <input id="framework" type="text" [(ngModel)]="itemName" />
            </label>
            <button (click)="showItemForm()">Add</button>
        }
  `,
})
export class ItemForm {
    isEditing = false;
    itemName: String = '';

    showItemForm() {
        if (this.isEditing) {
            this.getName.emit(this.itemName);
        }
        this.isEditing = !this.isEditing;
        this.itemName = '';
    }
    
    @Output() getName = new EventEmitter<String>();
}