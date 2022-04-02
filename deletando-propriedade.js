const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
};

// deletar um atributo no objeto
delete objPersonagem.aliado;
// com colchete;
delete objPersonagem["status"];
console.log(objPersonagem.aliado);