

const apiUrl = "https://joral325.pythonanywhere.com"; // Se cambia luego por la de PythonAnywhere
document.getElementById('formulario3').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitamos que se envie el form por ahora

    // Obtenemos los valores del formulario
       
    var materia = document.getElementById('tematica').value;


fetch(apiUrl+'/documentos/'+materia)
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#bodyDocumentos');
    tableBody.innerHTML=''
    // Recorrer los datos y crear las filas de la tabla
    data.forEach(item => {
      const row = document.createElement('tr');
      const codigoCell = document.createElement('td');
      const descargasCell = document.createElement('td');
      const descripcionCell = document.createElement('td');
      const tematicaCell = document.createElement('td');
      const tipoCell = document.createElement('td');
      const tituloCell = document.createElement('td');
      const accionCell=document.createElement('td');

      codigoCell.textContent = item.codigo;
      descargasCell.textContent = item.descargas;
      descripcionCell.textContent = item.descripcion;
      tematicaCell.textContent = item.tematica;
      tipoCell.textContent = item.tipo;
      tituloCell.textContent = item.titulo;
      accionCell.innerHTML='<button class="boton" type="button"  onclick="sumaDescargas('+ item.codigo+')">Descargar Documento</button>'

      row.appendChild(codigoCell);
      row.appendChild(descargasCell);
      row.appendChild(descripcionCell);
      row.appendChild(tematicaCell);
      row.appendChild(tipoCell);
      row.appendChild(tituloCell);
      row.appendChild(accionCell);

      tableBody.appendChild(row);
    });
 

  })
  .catch(error => console.error('Error:', error));
})
function sumaDescargas(codigo){
  var mensaje = {
      codigo: codigo}
      
  fetch(apiUrl+'/descargas/'+ codigo, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(mensaje)
  })
      .then(function (response) {
          // Código para manejar la respuesta
          if (response.ok) {
              return response.json(); // Parseamos la respuesta JSON
          } else {
              // Si hubo un error, lanzar explícitamente una excepción
              // para ser "catcheada" más adelante
              throw new Error('Error al descargar el documento');
          }
      })
      .then(function (data) {
          alert('Docuemnto descargado correctamente.');
     })
      .catch(function (error) {
          // Código para manejar errores
          alert('Error al descargar el documento.');
      });


}