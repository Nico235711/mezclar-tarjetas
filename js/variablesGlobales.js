let modoRelax = false;
let movimientos = 0;
let cronometro;
const grupoTarjetas = [
  ["🤡", "👹"], 
  ["👺", "👻", "👽"], 
  ["👾", "🤖", "💩"], 
  ["🐬", "🐳", "🐠", "🦉"], 
  ["🐙", "🦞", "🦈", "🦄", "🐉"]
];

let nivelActual = 0;
const niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 4,
    segundos: 10,
    minutos: 0
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 10,
    segundos: 17,
    minutos: 0
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 16,
    segundos: 33,
    minutos: 0
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1], grupoTarjetas[2], grupoTarjetas[3]
    ),
    movimientosMax: 24,
    segundos: 57,
    minutos: 0
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1], grupoTarjetas[2], grupoTarjetas[3], grupoTarjetas[4]
    ),
    movimientosMax: 34,
    segundos: 31,
    minutos: 1
  }
];