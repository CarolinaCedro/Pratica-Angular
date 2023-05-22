import {Component, DoCheck, Output} from '@angular/core';
import {UsuarioModel} from "../usuario-model";

@Component({
  selector: 'app-pai-component',
  templateUrl: './pai-component.component.html',
  styleUrls: ['./pai-component.component.scss']
})
export class PaiComponentComponent  implements DoCheck{

  public usersList: Array<UsuarioModel> =  JSON.parse(localStorage.getItem("list") || '[]');
  // JSON.parse(localStorage.getItem("list") || '[]');

  public nome: string = "";
  public email: string = "";
  public idade: number = 0;
  public profissao: string = "";
  public cidade: string = "";
  isSaved: boolean = false;
  isErrorSaved: boolean = false;




  ngDoCheck() {
    this.setLocalStorage()
  }

  save() {

    let isValid = this.isValidValueFromForm(this.nome, this.email, this.idade, this.profissao, this.cidade)

    if (isValid) {
      this.usersList.push({
        nome: this.nome,
        email: this.email,
        idade: this.idade,
        profissao: this.profissao,
        cidade: this.cidade
      })
      this.nome = ""
      this.email = ""
      this.idade = 0
      this.profissao = ""
      this.cidade = ""
      this.isSaved = true;
      this.isErrorSaved = false
      setTimeout(() => {
        this.isSaved = false;
      }, 5000);
    }else{
      this.isErrorSaved = true
      setTimeout(() => {
        this.isErrorSaved = false
      },5000)
    }

  }

  isValidValueFromForm(nome: string, email: string, idade: number, profissao: string, cidade: string,): boolean {
    return !(nome == "" || email == "" || idade == 0 || profissao == "" || cidade == "");
  }

  public setLocalStorage() {
    if (this.usersList) {
      localStorage.setItem('list', JSON.stringify(this.usersList));
    }
  }

}
