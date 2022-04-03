// JSON.stringify: transform o objeto do javaScript em JSON
const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJs",
    autor: "João rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
});

console.table(jsonLivro);

// processo inverso
const objLivro = JSON.parse(jsonLivro);
console.table(objLivro);