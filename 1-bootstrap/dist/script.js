
var modulo = document.querySelector("form");

if (modulo != null) {

    modulo.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Messaggio inviato! Grazie per avermi contattato.");

        modulo.reset();

    });

}
