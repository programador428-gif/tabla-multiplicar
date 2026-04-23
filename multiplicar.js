let titulo = document.getElementById("titulo");
let contenedor = document.getElementById("cuerpo-tabla");

function tablaMultiplicadora(valor) {
  let contenido = "";

  for (let i = 1; i <= 10; i++) {
    let resultado = i * valor;

    contenido += `
      <tr>
        <td>${valor} × ${i}</td>
        <td>${resultado}</td>
      </tr>
    `;
  }
  titulo.innerText = `Tabla del ${valor}`;
  contenedor.innerHTML = contenido;
}

document.getElementById('btnProbar').addEventListener('click', () => {
  let numeroUsuario = document.getElementById('inputTabla').value;

  if (numeroUsuario !== "") {
    tablaMultiplicadora(parseInt(numeroUsuario));
  } else {
    alert("Por favor, ingresa un número primero.");
  }
});