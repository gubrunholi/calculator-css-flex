const result = document.querySelector('.result')
const confirmar = document.querySelector('.igual')

function insert(valor) {
    result.innerHTML += valor;
}

function clean() {
    result.innerHTML = '';
}

function backspace() {
    if (result.textContent) {
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1);
        
    }
}

function confirma() {
    if(resultado.textContent != "Erro") {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }
}