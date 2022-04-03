const clientes = [
  {
    nome: "Andre",
    cpf: "1223344545",
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
  },
  {
    nome: "Juliana",
    cpf: "43455656676",
    dependentes: [
      {
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/08/2020",
      },
    ],
  },
];
// ... spred operators: operador de espalhamento
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];
console.table(listaDependentes);


const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro };
console.log(guerreiro);
