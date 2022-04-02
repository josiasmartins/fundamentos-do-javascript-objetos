const cliente = {
    nome: "André",
    idade: 36,
    cpf: "1222344545",
    email: "andre@email.com"
};

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));

// outra forma
console.log(cliente["nom"]);