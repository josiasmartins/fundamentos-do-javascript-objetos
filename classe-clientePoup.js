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

console.log(andre);

andre.depositar(50);
andre.depositarPoup(50);

console.log(andre);

