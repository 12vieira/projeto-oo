export class Carro {
    // metodo construtor e atributos
    constructor (
        public modelo: string,
        private _fabricante: string,
        public ano: number,
        public cor: string,
        public preco: number
    ) {}

    get fabricante(){
        return this._fabricante.toUpperCase();
    }



}

/*
class Carroteste {
    
    //atributos
    modelo: string;
    fabricante: string;
    ano: number;
    cor: string;
    preco: number;

    //metodo construtor
    constructor(modelo: string, fabricante: string, ano: number, cor: string, preco: number){
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
    }


}*/

