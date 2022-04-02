const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1223344545",
    email: "andre@gmail.com",
    fones: ["554565656", "2345676767"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}
// push: adiconaa um novo elemento no final do array
cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
});
// console.log(cliente);
const filhaMaisNova = cliente.dependentes
    // filter: filtra os elementos do array
    .filter(dependente => dependente.dataNasc === "04/01/2014");
console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome);