const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1223344545",
    email: "andre@gmail.com",
    fones: ["554565656", "2345676767"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva";
console.log(cliente)