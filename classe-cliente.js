class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email,
        this.cpf = cpf;
        this.saldo = saldo;
    };

    depositar(valor) {
        this.saldo += valor;
    };

    exibirSaldo() {
        console.log(this.saldo);
    }
};

const andre = new Cliente("Andre","andre@gmail.com", "34456576767", 100);

andre.exibirSaldo()

console.log(andre);


const pessoa = {
    nome: "Ana",
    email: "a@gmail.com",
    imprimeNome: function() {
        console.log(`${pessoa.nome}`)
    }
};

function imprimeNomeEmail() {
    console.log(`nome: ${this.nome}, email: ${this.email}`);
};

const pessoa1 = {
    nome: "Ana",
    email: "a@gmail.com",
    imprimeInfo: imprimeNomeEmail
};

const pessoa2 = {
    nome: "Ana",
    email: "p@gmail.com",
    imprimeInfo: imprimeNomeEmail
};

pessoa1.imprimeInfo()
pessoa2.imprimeInfo()

pessoa.imprimeNome();


// MANIPULAR OS VALORES DO THIS
function imprimeNomeEmail(tipoCliente) {
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`);
};

function imprimeNomeEmailAgencia(tipoCliente, agencia) {
    console.log(
        `${tipoCliente} da agência ${agencia}: - 
        nome: ${this.nome}, email: ${this.email}`
    )
};

const cliente1 = {
    nome: "Carlos",
    email: "c@gmail.com",
};

const cliente2 = {
    nome: "Fred",
    email: "f@gmail.com"
};
// call(): o primeiro parametro refere o contexto do this;
// o segundo parametro são os argumentos que a função deve receber;
imprimeNomeEmail.call(cliente1, "cliente especial");
imprimeNomeEmail.call(cliente2, "cliente estudante");

const clienteEspecial = ["cliente especial", "Rio de Janeiro"];
const clienteEstudante = ["cliente estudante", "Fortaleza"];

// apply: primeiro parametro se refere ao this;
// o segundo passar um array de dados;
imprimeNomeEmailAgencia.apply(cliente1, clienteEspecial);
imprimeNomeEmailAgencia.apply(cliente2, clienteEstudante);


// BIND 
const personagem = {
    nome: "Princesa Leia",
    apresentar: function() {
        return `a personagem é ${this.nome}`
    }
};

const personagemGenerico = personagem.apresentar();
console.log(personagemGenerico);

const personagemDefinido = personagemGenerico.bind(personagem);





