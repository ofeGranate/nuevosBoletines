// let buscaTabla = document.querySelector(".table");
// console.log (buscaTabla);
/* let buscaContent = document.querySelector(".content");
 console.log (buscaContent);*/
/* let buscaLinks = document.querySelectorAll("a");
   buscaLinks.forEach(function(linkEncontrado){
   console.log (linkEncontrado);
  })*/
 /*let buscaCeldas = document.querySelectorAll("td");
 buscaCeldas.forEach(function(tdEncontrado){
   tdEncontrado.addEventListener("click", function(){
     console.log (this);
   })
 });*/

 /*let buscaClose = document.querySelectorAll(".close");
 buscaClose.forEach(function (closeEncontrado){
   closeEncontrado.addEventListener("click", function(ev){
     ev.preventDefault();
     console.log(this);
     // return false;
     // SÓLO VALE PARA CONTROLADOR ASIGNADO POR on<event>,
     //NO POR addEventListener
   });

 });
*/
/*let buscaIconos = document .querySelectorAll("i");
buscaIconos.forEach(function (iconoEncontrado){
  iconoEncontrado.classList.remove("fa-star-o");
  iconoEncontrado.classList.add("fa-star-o");
});*/

let buscaAnimacion = document.querySelectorAll(".content");
buscaAnimacion.forEach( function (cambiaAnimacion){
  cambiaAnimacion.classList.remove("animate__fadeInDown");
  cambiaAnimacion.classList.remove("animate__animated");
  console.log("clases eliminadas");
  cambiaAnimacion.classList.add("animate__fadeOutUp");
  cambiaAnimacion.classList.add("animate__animated");
  console.log("clases añadidas!")
});
