var rangeRed = document.querySelector('#rangeRed');
var rangeGreen = document.querySelector('#rangeGreen');
var rangeBlue = document.querySelector('#rangeBlue');
var square = document.querySelector('.square');

// Monitorar eventos de movimento do range e chamar changeColor
rangeRed.addEventListener('input', changeColor);
rangeGreen.addEventListener('input', changeColor);
rangeBlue.addEventListener('input', changeColor);

function changeColor(event) {
  // Associar a variáveis os elementos caixa de texto (input type=text)
  var textRedValue = document.querySelector('#inputRed');
  var textGreenValue = document.querySelector('#inputGreen');
  var textBlueValue = document.querySelector('#inputBlue');

  // Valores RGB das cores (i.e.,valores dos ranges) a serem usados na função rgb
  var redValue = rangeRed.value;
  var greenValue = rangeGreen.value;
  var blueValue = rangeBlue.value;

  // Imprimir o valor do range na caixa de texto
  // O 'target' do evento é o range representado pela variável rangeColor
  textRedValue.value = redValue;
  textGreenValue.value = greenValue;
  textBlueValue.value = blueValue;

  // Altera cores do quadrado
  /* A função rgb é uma função do CSS, por isso passada como string através do método square.style.backgroundColor */
  square.style.backgroundColor =
    'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
}
