const apiUrl = "https://joral325.pythonanywhere.com/"; // Se cambia luego por la de PythonAnywhere
document.getElementById('formulario3').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitamos que se envie el form por ahora

    // Obtenemos los valores del formulario
       
    var materia = document.getElementById('tematica').value;

    fetch(apiUrl+'/documentos/'+materia)
    .then(function (response) {
        if (response.ok) {
            return response.json(); // Parseamos la respuesta JSON
        } else {
             throw new Error('Error al obtener los documentos.'); //si hay error
        }
    })
    .then(function(data){
        var tablaDocumentos=document.getElementById('tablaDocumentos');
        tablaDocumentos.innerHTML=''
        data.forEach(function(documento){
        var fila =document.createElement('tr');
        fila.innerHTML = '<td>' + documento.codigo + '</td>' +
        '<td>' + documento.titulo + '</td>' +                
        '<td>' + documento.tematica + '</td>' +
        '<td>' + documento.tipo + '</td>' +
                        '<td>' + documento.descripcion + '</td>' +'<td align="right">' + documento.descargas + '</td>' +
                        '<td>' + '<button class="boton" type="button"  onclick="sumaDescargas('+ documento.codigo+')">Descargar Tutoriales</button></td>';
                    tablaDocumentos.appendChild(fila);

    });
    })
    .catch(function(error){
    alert('Error al obtener los documentos')
    })
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
/* function mostrarDocumentos(documentos) {
    const listaDocumentos = document.getElementById('lista-documentos');
    listaDocumentos.innerHTML = '';

    documentos.forEach(documento => {
        const itemDocumento = document.createElement('li');
        itemDocumento.innerHTML = `
            <span>${documento.titulo}</span>
            <button onclick="descargarDocumento(${documento.codigo})">Descargar</button>
            <span>Descargas: ${documento.descargas}</span>
        `;
        listaDocumentos.appendChild(itemDocumento);
    });
}

function descargarDocumento(codigoDocumento) {
    fetch(`${apiUrl}${codigoDocumento}`, { method: 'PUT' })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
*/