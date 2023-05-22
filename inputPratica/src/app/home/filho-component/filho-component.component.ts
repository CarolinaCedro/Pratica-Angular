import {Component, Input, OnInit} from '@angular/core';
import {UsuarioModel} from "../usuario-model";

@Component({
  selector: 'app-filho-component',
  templateUrl: './filho-component.component.html',
  styleUrls: ['./filho-component.component.scss']
})
export class FilhoComponentComponent implements OnInit {


  @Input() usersListItem: Array<UsuarioModel> = []
  isDeleted: boolean = false;

  ngOnInit() {
    console.log(this.usersListItem)
  }

  deteleItem(index: number) {
    this.usersListItem.splice(index, 1)
    this.isDeleted = true
    setTimeout(() => {
      this.isDeleted = false;
    },5000)
  }
}
