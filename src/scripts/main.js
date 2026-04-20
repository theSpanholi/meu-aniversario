const dia = 21;
const mes = 6; // dezembro (0-11)

function getProximoAniversario() {
    const hoje = new Date();
    let data = new Date(hoje.getFullYear(), mes, dia, 19, 0, 0);

    if (hoje > data) {
        data = new Date(hoje.getFullYear() + 1, mes, dia, 19, 0, 0);
    }

    return data.getTime();
}

let timeStampDoEvento = getProximoAniversario();

const contaAsHoras = setInterval(function() {
    const agora = new Date().getTime();

    const distanciaAteOEvento = timeStampDoEvento - agora;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const dias = Math.floor(distanciaAteOEvento / diaEmMs);
    const horas = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs);
    const minutos = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundos = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML =
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (distanciaAteOEvento < 0) {
        timeStampDoEvento = getProximoAniversario();
    }

}, 1000);