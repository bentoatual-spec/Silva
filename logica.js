async function buscarClima() {
    const cidade = document.getElementById('Cidade').value;
    const url = `https://goweather.xyz/v2/weather/${cidade}`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log(cidade);
    console.log(dados);
    console.log(url);

    if (dados.message === "NOT_FOUND") {
        document.getElementById("resultado").innerHTML = `
            <p>Essa cidade não existe</p>
        `;
        return;
    }

    // Caso de SUCESSO
    document.getElementById("resultado").innerHTML = `
    <h2>Clima em ${cidade}</h2>
    <p>Temperatua: ${dados.temperature}</p>
    <p>Vento: ${dados.wind}</p>
    <p>Descrição: ${dados.description}</p>
    `;
}

document.getElementById("Cidade").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        buscarClima();
    }
});
