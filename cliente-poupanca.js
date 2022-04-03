function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
};

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    // Cliente.call(): chama as propriedades do Cliente 
    //                 para dentro da poupança
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
};

const ju = new ClientePoupanca("Ju", "3435455", "ju@gmail.com", 100, 200);

console.log(ju);

// adiconada uma nova função no prototype
ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor;
};

ju.depositarPoup(30);
console.log(ju.saldoPoup);