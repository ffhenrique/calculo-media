let inputP1 = document.getElementById('p1');
let inputP2 = document.getElementById('p2');
let inputAtividadeAvaliativa = document.getElementById('atividadeAvaliativa');

let calculo = document.getElementById('calculo');
let media = document.getElementById('media');

function calcular () {
    let p1 = Number(inputP1.value);
    let p2 = Number(inputP2.value);
    let atividadeAvaliativa = Number(inputAtividadeAvaliativa.value);
    let resultado = 0;
    calculo.classList.remove('hide');


    if (p2 == '') {
        let notaMedia = 14;
        resultado = ((notaMedia - (p1 + atividadeAvaliativa)).toFixed(1));
        if (resultado <= 8) {
            media.innerHTML = `O aluno precisa tirar ${resultado} na P2 para atingir a media de 7`;
        } else {
            media.innerHTML = 'O aluno esta de recuperação!'
        }
    } else {
        resultado = (((p1 + p2 + atividadeAvaliativa) / 2).toFixed(1));
        if (resultado >= 7) {
            media.innerHTML = `Média do aluno foi ${resultado}.`;
        } else {
            media.innerHTML = `Média do aluno foi ${resultado}. Esta de recuperação.`;
        }
    }

}
