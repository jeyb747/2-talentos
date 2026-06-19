// Animación al hacer scroll

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const posicion = card.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if(posicion < pantalla - 100){
            card.classList.add("mostrar");
        }

    });

});


// Contador regresivo

const fechaEvento = new Date("March 15, 2026 08:00:00").getTime();

const contador = setInterval(() => {

    const ahora = new Date().getTime();

    const distancia = fechaEvento - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (distancia % (1000 * 60))
        / 1000
    );

    const tiempo = document.getElementById("contador");

    if(tiempo){
        tiempo.innerHTML =
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

},1000);