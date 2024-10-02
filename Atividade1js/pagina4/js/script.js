let nota1 = parseFloat(prompt("Digite a nota do 1º bimestre:"));
let nota2 = parseFloat(prompt("Digite a nota do 2º bimestre:"));
let somaNotas = nota1 + nota2;

if (somaNotas >= 60) {
    alert("Você foi APROVADO! Sua nota final foi: " + somaNotas);
} else {
    let pontosFaltando = 60 - somaNotas;
    alert("Você foi REPROVADO! Faltaram " + pontosFaltando + " pontos para ser aprovado.");
}
