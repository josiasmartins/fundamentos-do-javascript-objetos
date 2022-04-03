const LIVRO = {
    nome: "React Native",
    editora: "Casa do código",
    paginas: 185,
    anunciar: function() {
        console.log(`A Alura indica o livro ${this.nome}!`)
    }
};

LIVRO.anunciar();

const Livro = function(nome, editora, paginas) {
    gNome = nome;
    gEditora = editora;
    gPaginas = paginas;

    this.getNome = function() {
        return gNome;
    };

    this.getEditora = function() {
        return gEditora;
    }

    this.getPaginas = function() {
        return gPaginas;
    }
};

const GraphQl = new Livro("GraphQl", "Casa do Código", 143);
console.log(GraphQl.getNome());
console.log(GraphQl.getEditora());
console.log(GraphQl.getPaginas());

// prototype
const nome = "Alura";

const temp = new String(nome);
console.log(temp.toString());

//  com Classes do ES6

class LivroClass {
    constructor(nome, editora, paginas) {
        this.nome = nome,
        this.editora = editora,
        this.paginas = paginas
    };

    anunciarTitulo() {
        console.log(`Título: ${this.nome}`)
    };

    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora
         ${this.editora} e tem ${this.paginas} páginas
         `)
    }
};

const NodeJs = new LivroClass(
    "Primeiros passos com NodeJs", "Casa do Código", 195
    );

NodeJs.anunciarTitulo();
NodeJs.descreverTitulo();

console.log(typeof LivroClass);

class LivroColecao extends LivroClass {
    constructor(nome, colecao) {
        super(nome),
        this.nomeColecao = colecao
    };

    descreverColecao() {
        console.log(`
        O livro ${this.nome} faz parte da coleção
        ${this.nomeColecao}
        `)
    }
};

const logicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a Programar");
logicaDeProgramacao.descreverColecao();