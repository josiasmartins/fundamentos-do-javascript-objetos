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
// exntends: herda da classe Cliente
class ClientePoup extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoup) {
        // super: pega os atributos da classe Cliente
        super(nome, email, cpf, saldo);
        this.saldoPoup = saldoPoup;
    }

    depositarPoup(valor) {
        this.saldoPoup += valor;
    }
};

const andre = new ClientePoup("Andre", "a@gmail.com", "2434456565", 100, 200);

// console.log(andre);

andre.depositar(50);
andre.depositarPoup(50);

// console.log(andre);


const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];
const numeros = [...numerosPares, ...numerosImpares];
console.log(numeros);

// const num1 = 1;
// const num2 = 2;
// outra forma de fazer 
const [num1, num2, ...outrosNumeros] = [1, 2, 4, 5];
console.log(num1, num2, outrosNumeros);

const [nome1 = "Ju"] = [];
console.log(nome1);

const pessoa = {
    nome: "Ju",
    idade: 25
};
const pessoaComTelefone = {
    ...pessoa, telefone: 121323434
};
console.log(pessoa, pessoaComTelefone);
// const { idade } = pessoa: cria uma 
// variavel chamado idade, igual do objeto e chama
const { idade } = pessoa
console.log(idade);

function imprimeDados(dados) {
    // faz um filtro nos dados do objeto pessoa
    const { nome, idade } = dados;

    console.log(nome, idade);
};
imprimeDados(pessoa)

