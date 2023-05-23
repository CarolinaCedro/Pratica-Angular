import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-component-filho',
  templateUrl: './component-filho.component.html',
  styleUrls: ['./component-filho.component.scss']
})
export class ComponentFilhoComponent {

  //o tipo sempre será do tipo EventEmitter e SEMPRE devera ser instanciado passando a tipagem
  @Output() newItemEvent = new EventEmitter<string>()
  item: string = "";

  addNewItem(value: string) {
    if(value == ""){
      window.confirm("Impossivel registrar valores nulos")
    }else{
      this.newItemEvent.emit(value)
      this.item = ""
    }

  }


}
