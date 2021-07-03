document.body.onload = addElement;

function addElement () {
  
  const newDiv = document.createElement("div"); // crea un nuevo div
  const newContent = document.createTextNode("Hola!¿Qué tal?"); // añade contenido "texto"
  newDiv.appendChild(newContent); //añade contenido "texto" al div creado.

  // añade el elemento creado y su contenido al DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}


const btnprueba = document.getElementById('btnprueba');
btnprueba.addEventListener('click', () => {  

  const divCreado = document.createElement('div'); // crea un nuevo div
  divCreado.id="hijo";  // el div se llama hijo
  const newContent = document.createTextNode("imprime nombre"); // añade contenido "texto"
  divCreado.appendChild(newContent); //añade contenido "texto" al div creado.
  document.getElementById("container").appendChild(divCreado);

});