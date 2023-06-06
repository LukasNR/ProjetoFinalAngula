import { Component } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent {
public contatos = [
  {id:1, nome:"Lucas", email:"lucas@gmail.com",},
  {id:2, nome:"Jão", email:"jao@gmail.com"},
  {id:3, nome:"Maria", email:"maria@gmail.com"}]
}
