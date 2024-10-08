import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'item-form',
    standalone: true,
    imports: [FormsModule],
    templateUrl: 'itemForm.component.html',
    styleUrls: ['./itemForm.component.css']
})
export class ItemForm {
    itemName: String = '';

    ItemForm() {
        if (this.itemName != '') {
            let name = '';
            for (let i = 0; i < this.itemName.length; i++) {
                if (i == 0) {
                    name += this.itemName[0].toUpperCase();
                } else {
                    name += this.itemName[i];
                }
            }
            this.getName.emit(name);            
        }
        this.itemName = '';
    }
    
    @Output() getName = new EventEmitter<String>();
}