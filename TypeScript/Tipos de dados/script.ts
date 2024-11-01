
// Tipos primitivos
let valor : boolean = false;
let nome : string = "Jesus";
let idade : number = 30;
let troco : number = 30.50;

// Tipos especiais
let nulo : null = null
let indefinido : undefined = undefined

// Tipos abrangentes
let algo : any = false
let retorno: void



// Tipo objeto - sem previsibilidade

let produto : object = {
    product1: 1,
    product2: 2,
    product3: 3,
    product4: 4,
    product5: 5,
}

// objeto tipado

type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
    disponibilidades:boolean;

};

let meuProduto : ProdutoLoja = {
    nome: "tenis",
    preco: 10,
    unidades: 2,
    disponibilidades: true

}


// Arrays

let dados : string[] = ["Jesus","Jemima", "José"]

let dados2 : Array<string>= ["Jesus","Jemima", "José"]

// Array de multiTypes

let dadosMulti : (string | number)[] = ["Jesus", 33]



// Tuplas

let boleto : [string, number,number]= ["Conta de agua", 200.00, 232213]


// ARRAYS METODS
//  SÃO OS MESMO METODOS DO JAVASCRIPT

// DATES

let aniversario : Date = new Date("2005-05-29 05:00")
console.log(aniversario.toString())


// classes

type bot2 = {
    id: number,
    nome: string
}

interface bot1 {
    id: number,
    nome: string | boolean,
    ola(): string

}

class Ia implements bot2 {
    id: number;
    nome: string;
    constructor(id: number, nome: string){
        this.id = id
        this.nome = nome
    }
    ola(){
        return this.nome
    }
}

class Ai implements bot1 {
    id: number;
    nome: string | boolean;
    constructor(id: number, nome: string | boolean){
        this.id= id
        this.nome= nome
    }
    ola(): string {
        this.nome = "José"
        return this.nome
    }
}