"strict mode";

let typeEntry = function (data) {
  console.log(typeof data);
};

typeEntry(42);
typeEntry("Veinticinco");
typeEntry(-666);
typeEntry(true);
typeEntry(0);
typeEntry("");
typeEntry(null);
typeEntry(undefined);
typeEntry(`asdf`);

let mensaje = function (nota) {
  if (0 > nota || nota > 100) {
    console.log("Ingresa un numero entre 0 y 100");
  } else if (nota >= 90) {
    console.log("Excelente");
  } else if (75 <= nota && nota <= 89) {
    console.log("Bien");
  } else if (60 <= nota && nota <= 74) {
    console.log("Suficiente");
  } else {
    console.log("No aprobado");
  }
};

mensaje(120);
mensaje(95);
mensaje(77);
mensaje(70);
mensaje(0);
mensaje(-3);
