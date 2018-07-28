import { Component, OnInit } from '@angular/core';
import { Pessoa } from './../models/Pessoa';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
  providers: [PessoaService]
})
export class PessoaComponent implements OnInit {

  public pessoa: Pessoa;
  public pessoas: Array<Pessoa> = new Array<Pessoa>();
  public cor: string;

  constructor(private service: PessoaService) { }

  ngOnInit() {
    this.pessoas = Array(10).fill(null);
    this.pessoas = this.pessoas.map(pessoa => {
      const idx: number = (Math.floor(Math.random() * 10) + 1);
      return pessoa = this.createPessoa(`Nome ${idx}`, `Cpf ${idx}`, `Email ${idx}`, idx, `http://placekitten.com/100/100`);
    });
    this.service.ola();
  }

  createPessoa(nome: string, cpfCnpj: string, email: string, idade: number, photo: string) {
    return new Pessoa(nome, cpfCnpj, email, idade, photo);
  }

  textCheck($event) {
    console.log(event);
    const charCode: number = $event.charCode;
    if (charCode === 126 || charCode === 231 || charCode === 199) {
      $event.preventDefault();
    }
  }

  public mudaCor(cor: string) {
    this.cor = cor;
  }
}
