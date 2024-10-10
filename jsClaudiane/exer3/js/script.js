window.onload = function() {
    const codigos = ["P2", "AP", "POO1", "FBD", "JSB"];
    const nomes = {
        "P2": "Projeto Sistema Web MVC e SQL",
        "AP": "Algoritmos e Programação",
        "POO1": "Programação Orientada a Objetos 1",
        "FBD": "Fundamentos de Banco de Dados",
        "JSB": "JavaScript Básico"
    };

    const tbody = document.querySelector("#disciplinas tbody");

    for (let codigo in nomes) {
        const tr = document.createElement("tr");

        const tdCodigo = document.createElement("td");
        tdCodigo.textContent = codigo; // Utiliza a chave do objeto
        tr.appendChild(tdCodigo);

        const tdNome = document.createElement("td");
        tdNome.textContent = nomes[codigo]; // Usa a chave para acessar o nome da disciplina
        tr.appendChild(tdNome);

        tbody.appendChild(tr);
    }
};
