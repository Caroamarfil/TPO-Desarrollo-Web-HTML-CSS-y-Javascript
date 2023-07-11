fetch("ej1.json")
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#bodyDocumentos');

    // Recorrer los datos y crear las filas de la tabla
    data.forEach(item => {
      const row = document.createElement('tr');
      const codigoCell = document.createElement('td');
      const descargasCell = document.createElement('td');
      const descripcionCell = document.createElement('td');
      const tematicaCell = document.createElement('td');
      const tipoCell = document.createElement('td');
      const tituloCell = document.createElement('td');

      codigoCell.textContent = item.codigo;
      descargasCell.textContent = item.descargas;
      descripcionCell.textContent = item.descripcion;
      tematicaCell.textContent = item.tematica;
      tipoCell.textContent = item.tipo;
      tituloCell.textContent = item.titulo;

      row.appendChild(codigoCell);
      row.appendChild(descargasCell);
      row.appendChild(descripcionCell);
      row.appendChild(tematicaCell);
      row.appendChild(tipoCell);
      row.appendChild(tituloCell);

      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error:', error));
