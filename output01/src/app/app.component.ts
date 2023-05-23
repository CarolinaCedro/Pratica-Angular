import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  textoRecebido: string = ""
  listaItens: Array<string> = []

  addItemOnTextArea(value: string) {
    this.textoRecebido = value
    this.listaItens.push(value)
  }

}
