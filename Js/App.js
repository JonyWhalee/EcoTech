let swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerview: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

addEventListener("DOMContentLoaded", () => {
    const contadores = document.querySelectorAll(".contador-cantidad");
    const velocidad = 300;
    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizar_contador = () => {
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                    valor_actual = +contador.innerText,
                    incremento = cantidad_maxima / velocidad;
                if (valor_actual < cantidad_maxima) {
                    contador.innerText = Math.ceil(valor_actual + incremento);
                    setTimeout(actualizar_contador, 1);
                } else {
                    contador.innerText = cantidad_maxima;
                }
            };
            actualizar_contador();
        }
    };
    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            if (elemento.isIntersecting) {
                elemento.target.classList.add("animar");
                elemento.target.classList.remove("ocultar");
                setTimeout(animarContadores, 400);
            }
        });
    };
    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.2,
    });
    const elementosHTML = document.querySelectorAll(".contador");
    elementosHTML.forEach(elementoHTML => {
        observer.observe(elementoHTML);
    });
});

//nav burger

const ul = document.getElementById("ul");
const body = document.getElementById("body");

let burger_nav = () => {
    let menu = document.querySelector(".menu-burger");
    //
    menu.addEventListener("click", () => {
        val();
        menu.classList.toggle(`toggle`);
    });
};

function val() {
    if (ul.classList.contains("show-menu")) {
        ul.classList.remove("show-menu");
        body.classList.remove("no-move");
    } else {
        ul.classList.add("show-menu");
        body.classList.add("no-move");
    }
}
burger_nav();
AOS.init({
    offset: 200,
    duration: 600,
});
