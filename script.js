let sort = Math.floor(Math.random() * 100) + 1; 
console.log(sort);

let tentativas = 5; 
document.getElementById("chances").innerHTML = "Tentativas: " + tentativas;
let saida = document.getElementById("output");

function clique() {
    let valor = document.getElementById("input").value;
    

    if (valor > 0 && valor <= 100) {

            if (valor === sort) {
                saida.innerHTML = "Acertou!";
            } else if (valor < sort) {
                saida.innerHTML = "O valor é maior.";
            } else if (valor > sort) {
                saida.innerHTML = "O valor é menor.";
            }
        } else {
            saida.innerHTML = "Você está fora do intervalo";
        }

        tentativas--;
        document.getElementById("chances").innerHTML = "tentativas: " + tentativas;
        if (tentativas == 0){
            document.getElementById("btn").disabled = true;
            saida.innerHTML = "Acabaram as tentativas, o numero sorteado era: " + sort;
        }
    }
function novo(){
    sort = Math.floor(Math.random() * 100) + 1; 
    tentativas = 5;
    document.getElementById("btn").disabled = false;
     document.getElementById("chances").innerHTML = "tentativas: " + tentativas;
     saida.innerHTML = "&nbsp"
      console.log(sort);
}