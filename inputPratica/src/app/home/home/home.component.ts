import {Component, Input} from '@angular/core';
import {UsuarioModel} from "../usuario-model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input() usersListItem: Array<UsuarioModel> = [];
  @Input() usersListItemTeste: Array<UsuarioModel> = [];
}
