let nomeCompleto = prompt("Digite o seu nome completo:");
let idade = prompt("Digite a sua idade:");

if (idade >= 18) {
    alert(nomeCompleto + ", você já POSSUI idade para tirar carteira.");
} else {
    let anosFaltando = 18 - idade;
    alert(nomeCompleto + ", você ainda NÃO POSSUI idade para tirar carteira. Faltam " + anosFaltando + " ano(s).");
}
