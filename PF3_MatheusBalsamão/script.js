const calculate = document.getElementById('calcular');

function calcularTotal() {
    const nome = document.getElementById('nome').value;
    const num = document.getElementById('num').value;
    const j = document.getElementById('j').value;
    const m = document.getElementById('m').value;
    const result = document.getElementById('result');
    const jr = j / 100;
    if (nome !== '' && num !== '' && j !== '' && m !== '') {

        const valorFuturo = (num * ((1 + jr) ** m - 1) / jr).toFixed(2);

        result.textContent = `Olá, ${nome}!, se voce aplicar R$${num}, a taxa de juros de ${j}% ao mes,
                                durante ${m} meses, acumulara uma poupanca de R$${valorFuturo}`;


    } else {
        result.textContent =


        result.textContent = '';
    }
}

calculate.addEventListener('click', calcularTotal);