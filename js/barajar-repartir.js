
function barajaTarjetas() {
  let resultado;
  resultado = totalTarjetas.sort(() => 0.5 - Math.random());
  return resultado;
}

function reparteTarjetas() {
  const mesa = document.querySelector("#mesa");
  const tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";

  // EJERCICIO: recorre el array de tarjetasBarajadas y para cada
  // elemento, crea un div (cárgalo en una constiable) y declara que su
  // innerHTML es el div con la clase "tarjeta" y en el interior
  // del mismo, un div con la clase "tarjeta__contenido".
  // Añade además el valor del elemento como contenido de la tarjeta
  tarjetasBarajadas.forEach(elemento => {
    let divTarjeta = document.createElement("div")
    divTarjeta.innerHTML = `<div class="tarjeta" data-valor=\`${elemento}\`>
      <div class="tarjeta__contenido">
        ${elemento}
      </div>
    </div>
    `
    // console.log(divTarjetas);
    // EJERCICIO: una vez has creado la tarjeta, y todavía dentro del
    // loop, añade la tarjeta generada como "child" del nodo mesa.
    mesa.append(divTarjeta)
  })
}