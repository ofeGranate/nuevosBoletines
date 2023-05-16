let buscaLinks = document.querySelectorAll (".close");
buscaLinks.forEach( function (closeEncontrado){
  closeEncontrado.addEventListener("click", function(evento){
    evento.preventDefault();
    let buscaAnimacion = document.querySelectorAll(".content");
    console.log(buscaAnimacion);
    buscaAnimacion.forEach( function (cambiaAnimacion){
      cambiaAnimacion.classList.remove("animate__animated");
      cambiaAnimacion.classList.remove("animate__fadeInDown");
      console.log("animaciones eliminadas");
      cambiaAnimacion.classList.add("animate__animated");
      cambiaAnimacion.classList.add("animate__fadeOutUp");
      console.log("animaciones añadidas!");
      setTimeout(function(){
        location.href = "../index.html";
      },600);
    });
  });
});
// busca la clase close en el document y elabora una lista en buscaLinks
//por cada elemento de buscaLinks ejecuta la función closeEncontrado
// la funcion closeEncontrado recibe un evento click que llama a función evento
//la funcion evento preventDefault cancela el evento si es cancelable (no cierra la ventana)
// busca la clase content (que tiene las animaciones) y elabora lista buscaAnimacion
//control para ver la lista buscaAnimacion imprime en consola
//para cada elemento de buscaAnimacion ejecuta la función cambiaAnimacion
//la función cambiaAnimacion elimina la clase animate__animated de buscaAnimacion (content)
//la función cambiaAnimacion elimina la clase animate__fadeInDown de buscaAnimacion (content)
//control para la evolución de cambiaAnimacion que imprime en consola animaciones eliminadas
//la función cambiaAnimacion añade la clase animate__animated de buscaAnimacion (content)
//la función cambiaAnimacion añade la clase animate__fadeOutUp de buscaAnimacion (content)
//control para la evolución de cambiaAnimacion imprime en consola animaciones añadidas!
/*setTimeout establece un temporizador de 0.6 seg para que de tiempo de verse la animacion
 y entonces nos devuelve a la página principal
 setTimeout se ejecuta una única vez y setInterval llamaría a la función repetidamente cada intervalo*/
