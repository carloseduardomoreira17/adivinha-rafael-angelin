let sort = Math.floor(Math.random() * 100) + 1;
let tentativas = 5;

document.getElementById("chances").innerHTML = "Tentativas restantes: " + tentativas;

function clique() {
    let valor = parseInt(document.getElementById("input").value);
    let saida = document.getElementById("output");

    if (valor > 0 && valor <= 100) {
        if (valor === sort) {
            saida.innerHTML = "Acertou!";
            document.getElementById("btn").disabled = true;
        } else if (valor < sort) {
            saida.innerHTML = "O número que voce procura é menor";
        } else {
            saida.innerHTML = "O número que voce procura é maior";
        }

        tentativas--;
        document.getElementById("chances").innerHTML = "Tentativas restantes: " + tentativas;

        if (tentativas === 0 && valor !== sort) {
            document.getElementById("btn").disabled = true;
            saida.innerHTML = "Acabaram as tentativas. O número sorteado era: " + sort;
        }
    } else {
        saida.innerHTML = "O valor está fora do intervalo (1 a 100).";
    }
}

function novo() {
    sort = Math.floor(Math.random() * 100) + 1;
    tentativas = 5;
    document.getElementById("chances").innerHTML = "Tentativas restantes: " + tentativas;
    document.getElementById("btn").disabled = false;

    let saida = document.getElementById("output");
    saida.innerHTML = "";
    document.getElementById("input").value = "";
}
