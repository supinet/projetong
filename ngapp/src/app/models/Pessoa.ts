import { IPessoa } from '../interface/IPessoa';

export class Pessoa implements IPessoa {

    public nome: string;
    public cpfCnpj: string;
    public email: string;
    public idade: number;
    public photo: string;

    constructor(nome: string, cpfCnpj: string, email: string, idade: number, photo: string) {
        this.nome = nome;
        this.cpfCnpj = cpfCnpj;
        this.email = email;
        this.idade = idade;
        this.photo = photo;
    }
}
