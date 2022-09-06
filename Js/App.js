let swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerview: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

addEventListener("DOMContentLoaded", () => {
    const contadores = document.querySelectorAll(".contador-cantidad");
    const velocidad = 600;
    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizar_contador = () => {
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                    valor_actual = +contador.innerText,
                    incremento = cantidad_maxima / velocidad;
                if (valor_actual < cantidad_maxima) {
                    contador.innerText = Math.ceil(valor_actual + incremento);
                    setTimeout(actualizar_contador, 2);
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
        threshold: 0.75,
    });
    const elementosHTML = document.querySelectorAll(".contador");
    elementosHTML.forEach(elementoHTML => {
        observer.observe(elementoHTML);
    });
});

// menu burger

const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

// let burger_nav = ()=>{
//     let menu = document.querySelector(".menu-burger");
//     let nav = document.querySelector(".nav-links");
//     let nav_list = document.querySelectorAll(".nav-links li");
//     //
//     menu.addEventListener("click", () =>{
//         nav.classList.toggle("nav-active");
//     //
//     nav_list.forEach((link, index) =>{
//         if(link.style.animation){
//             link.style.animation = "";
//         }
//         else{
//             link.style.animation =  `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
//         }
//     //
//     menu.classList.toggle(`toggle`)
//     })
// });}
// burger_nav();
