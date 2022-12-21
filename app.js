const contenedorQR = document.getElementById('contenedorQR');
const btn = document.getElementById('btn');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    QR.makeCode(formulario.link.value);
    formulario.link.value = '';
    btn.disabled = true;

});

function activateBtn() {
    if (formulario.link.value == '') {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}

activateBtn();