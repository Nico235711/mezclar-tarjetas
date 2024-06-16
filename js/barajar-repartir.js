
function barajarTarjetas(tarjetas) {
  let resultado;

  // EJERCICIO: concatena tarjetas consigo misma para duplicar
  // los valores
  const totalTarjetas = tarjetas.concat(tarjetas);
  resultado = totalTarjetas.sort(() => 0.5 - Math.random());
  return resultado;
}

function repartirTarjetas(tarjetas) {
  const mesa = document.querySelector("#mesa");
  const tarjetasBarajadas = barajarTarjetas(tarjetas);
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