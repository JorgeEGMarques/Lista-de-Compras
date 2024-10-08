import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'item-form',
    standalone: true,
    imports: [FormsModule],
    template:`
        @if (!isEditing) {
            <button class="button" (click)="showItemForm()">New item</button>
        } @else {
            <label for="text-box">
                Nome do item:
                <input id="text-box" type="text" [(ngModel)]="itemName" />
            </label>
            <button id="add-button" (click)="showItemForm()">Add</button>
        }
    `,
    styleUrls: ['./itemForm.component.css']
})
export class ItemForm {
    isEditing = false;
    itemName: String = '';

    showItemForm() {
        if (this.isEditing && this.itemName != '') {
            this.getName.emit(this.itemName);
        }
        this.isEditing = !this.isEditing;
        this.itemName = '';
    }
    
    @Output() getName = new EventEmitter<String>();
}