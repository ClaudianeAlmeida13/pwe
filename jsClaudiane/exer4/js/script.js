var passagHomens = [];
var passagMulheres = [];
var sexo, nome;

var totalPassageiros = prompt("Quantos passageiros vão entrar?");

for (var i = 0; i < totalPassageiros; i++) {
    // Leitura do sexo
    sexo = prompt(`Qual o sexo do passageiro ${i + 1} (H ou M)?`).toUpperCase();
    // Leitura do nome de cada passageiro
    nome = prompt(`Qual o nome do passageiro ${i + 1}?`);
    if (sexo === "H") {
        passagHomens.push(nome);
    } else if (sexo === "M") {
        passagMulheres.push(nome);
    } else {
        alert("Sexo inválido! Por favor, insira 'H' para homem ou 'M' para mulher.");
        i--; 
    }
}


passagHomens.sort();
passagMulheres.sort();

var listaMulheres = document.getElementById("Mulher");
var listaHomens = document.getElementById("Homem");

passagMulheres.forEach(function(nome) {
    var li = document.createElement("li");
    li.textContent = nome;
    listaMulheres.appendChild(li);
});

passagHomens.forEach(function(nome) {
    var li = document.createElement("li");
    li.textContent = nome;
    listaHomens.appendChild(li);
});
