const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1223344545",
    email: "andre@gmail.com",
    fones: ["554565656", "2345676767"],
    dependentes: [
        {
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,
    // função dentro do objeto
    depositar: function (valor) {
        this.saldo += valor;
    }
};
console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo)


const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
// Object.create(): cria um novo objeto utilizando
//                  como protótipo e objeto via parâmetro
const objPersonagem2 = Object.create(objPersonagem);
objPersonagem2.nome = "Gandalf, o Cinzento";

console.log(objPersonagem) // Gandalf
console.log(objPersonagem2) // Gandalf, o Cinzento