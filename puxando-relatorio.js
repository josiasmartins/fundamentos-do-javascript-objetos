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
            dataNasc: "20/03/2011",
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014",
        },
    ],
    saldo: 100,
    // função dentro do objeto
    depositar: function (valor) {
        this.saldo += valor;
    },
};
let relatorio = "";
// let info in cliente: faz um loop no objeto
for (let info in cliente) {
    if (
        typeof cliente[info] === "object" ||
        typeof cliente[info] === "function"
    ) {
        // continua a leitura;
        continue;
    } else {
        // acessando a chave
        // relatorio += `${info}`;
        // acessando o valor
        relatorio += `
        ${info} ==> ${cliente[info]}
        `;
    }
}
console.log(relatorio);
