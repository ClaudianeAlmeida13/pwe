window.onload = function() {
    const codigos = ["P2", "AP", "POO1", "FBD", "JSB"];
    const nomes = [
        "Projeto Sistema Web MVC e SQL",
        "Algoritmos e Programação",
        "Programação Orientada a Objetos 1",
        "Fundamentos de Banco de Dados",
        "JavaScript Básico"
    ];

    const tbody = document.querySelector("#disciplinas tbody");

    for (let i = 0; i < codigos.length; i++) {
        const tr = document.createElement("tr");

        const tdCodigo = document.createElement("td");
        tdCodigo.textContent = codigos[i];
        tr.appendChild(tdCodigo);

        const tdNome = document.createElement("td");
        tdNome.textContent = nomes[i];
        tr.appendChild(tdNome);

        tbody.appendChild(tr);
    }
};
