
var records= document.getElementById('records');
var enviar = document.getElementById('enviar');
var nombre    = document.getElementById('nombre');
var apellido  = document.getElementById('apellido');
var dni       = document.getElementById('dni');
var direccion = document.getElementById('direccion');

enviar.addEventListener('click', function datos(event){
  event.preventDefault();
  var inputGeneral= document.getElementsByClassName('input');
  if(inputGeneral[0].value.length==0 || inputGeneral[1].value.length==0 || inputGeneral[2].value.length==0 || inputGeneral[3].value.length==0 ){
    alert('Falta Completar');
  }
  else{
    records.innerHTML = "<ul><li>"+ "Nombre: "    + nombre.value    +  "</li>"
                         + "<li>" + "Apellido: "  + apellido.value  + "</li>"
                         + "<li>" + "DNI: "       + dni.value       + "</li>"
                         + "<li>" + "Direccion: " + direccion.value + "</li></ul>";
  }
});
