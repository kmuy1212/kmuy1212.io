function cambiarEstilos() {
  var estilos1 = document.getElementById('styles');
  var estilos2 = document.getElementById('estilo2');

  if (estilos1.getAttribute('href') == 'styles.css') {
    estilos1.setAttribute('href', 'estilo2.css');
    estilos2.setAttribute('href', 'styles.css');
  } else {
    estilos1.setAttribute('href', 'styles.css');
    estilos2.setAttribute('href', 'estilo2.css');
  }
}
