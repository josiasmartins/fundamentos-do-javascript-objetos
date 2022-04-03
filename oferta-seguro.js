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
function oferecerSeguro(obj) {
    // Object.keys: traz todas as chaves do nosso objeto cliente
    const propsClientes = Object.keys(obj);
    // includes: faz uma busca no array;
    if (propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
};
// Object.value(): traz o valor do objeto
console.log(Object.values(cliente));
// Object.entries traz o chaves e valores
console.log(Object.entries(cliente))
oferecerSeguro(cliente)