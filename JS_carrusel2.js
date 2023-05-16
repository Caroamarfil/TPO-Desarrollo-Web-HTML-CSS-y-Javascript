const primero='<div class="clase1"><a href=""><img src="imagenes/física-e1534938838719.jpg" alt="pizarra con formulas de física" width="95%" height="82%" title="Física"><span>Física</span></a></div>        <div><a href=""><img src="imagenes/Matematicas.png" alt="pizarra con formulas matemática" width="95%"height="82%" title="Matemática"><span>Matemática</span></a></div>     <div><a href=""><img src="imagenes/Biología.jpg" alt="pizarra con formulas de física" width="95%" height="82%"        title="Biología"><span>Biología</span></a> </div><div> <a href=""><img src="imagenes/quimica.jpg"alt="ampolla con contenido y un esquema de estructura molecular de la sustancia" width="95%"height="82%" title="Química"><span>Química</span></a></div><div><a href=""><img src="imagenes/geografia.jpg" alt="Mapa y una brújula" width="95%"        height="82%" title="Geografía"><span>Geografía</span></a></div>    <div><a href=""><img src="imagenes/historia1.jpg" alt="Libros antiguos y una lupa" width="95%" height="82%"       title="Historia"><span>Historia</span></a> </div> <div><a href=""><img src="imagenes/Filosofia.jpg" alt="Bustos de filosofos" width="95%" height="82%"        title="Filosofía"><span>Filosofía</span></a></div> <div><a href=""><img src="imagenes/otras_disiplinas.jpg" alt="esquemas de sistintas diciplinas tecnológicas" width="95%" height="82%"    title="Otras Disiplinas"><span>Otras Disiplinas</span></a></div>'
const segundo='<div class="clase1"><iframe width="65%" height="85%" src="https://www.youtube.com/embed/Bvfn6eUhUAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="clase1"><iframe width="65%" height="85%" src="https://www.youtube.com/embed/yd1jx1DkXb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="clase1"><iframe width="65%" height="85%" src="https://www.youtube.com/embed/PTrOSGYC6BU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="clase1"><iframe width="65%" height="85%" src="https://www.youtube.com/embed/UF_yHrFP1Ls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="clase1"><iframe width="65%" height="85%" src="https://www.youtube.com/embed/vqGUvocEYAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="clase1" style="display:flex; align-items:center; justify-content: center; "><a href=""><span style="background-color: aquamarine;padding: 5px 5px; border-radius: 10px;" >Buscar Videos</span></a></div>'
const tercero='tercero'
const cuarto='cuarto'

function cambiaContenido(ene){
const actual=document.querySelector("#mostrado");
if (ene===1){
actual.innerHTML=primero
actual.className="contenidoUno"}
else {
     if (ene===2){
    actual.innerHTML=segundo
    actual.className="contenidoDos"} 
    else{
        if (ene===3){
    actual.innerHTML=tercero
    actual.className="contenidoTres"}
    else{
    actual.innerHTML=cuarto
    actual.className="contenidoCuatro"
    }
    }   
}}