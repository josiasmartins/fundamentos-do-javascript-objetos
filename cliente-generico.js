function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
};

// new Cliente: cria uma nova instanica do Cliente
const andre = new Cliente("Andre", "434443434", "andr@gmail.com", 100);

console.log(andre);