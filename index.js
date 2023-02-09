//function que busca el producto que pide el usuario y lo muestra en consola
function busquedaDelJuego() {
    let seleccionDelUsuario = listaDeJuegos.find((el) => el.juego == busqueda)
    console.log(seleccionDelUsuario)
};

//array que contiene lista de productos y sus precios como objetos

const listaDeJuegos = [

    { id: 1, juego: "kingdom hearts 4", precio: 4500, plataforma: "ps5" },
    { id: 2, juego: "final Fantasy 7", precio: 5000, plataforma: "ps5" },
    { id: 3, juego: "devil may cry 3", precio: 3000, plataforma: "ps5" },
    { id: 4, juego: "elden ring", precio: 7000, plataforma: "ps5" },
    { id: 5, juego: "resident evil 4", precio: 3500, plataforma: "ps4" },
    { id: 6, juego: "drakengard 3", precio: 4000, plataforma: "ps4" },
    { id: 7, juego: "nier Automata", precio: 2500, plataforma: "ps4" },
    { id: 8, juego: "never again", precio: 3000, plataforma: "ps4" },
]


//Interaccion con el usuario utliziando prompts y alerts (busqueda y seleccion de productos)
alert("Bienvenido a BIG BOSS GAMES");

let busqueda = prompt("que juego estas buscando?si quieres confirmar tu seleccion ingresa ").toLocaleLowerCase();

busquedaDelJuego(busqueda);

//carrito

let carrito = []

/*while (busqueda != "no".toLowerCase) {
    let busqueda = prompt("que juego estas buscando?si quieres confirmar tu seleccion ingresa ").toLocaleLowerCase();

    let precio = 0

    if (busqueda == "kingdom hearts 4" || busqueda == "final Fantasy 7" || busqueda == "devil may cry 3" || busqueda == "elden ring" || busqueda == "resident evil 4" || busqueda == "drakengard 3" || busqueda == "nier Automata" || busqueda == "never again") {
        switch (busqueda) {
            case "kingdom hearts 4":
                precio = 4500
                break

            case "final Fantasy 7":
                precio = 5000
                break

            case "divil may cry 3":
                precio = 3000
                break
            case "elden ring":
                precio = 7000
                break
            case "resident evil 4":
                precio = 3500
                break
            case "drakengard 3":
                precio = 4000
                break
            case "nier Automata":
                precio = 2500
                break
            case "never again":
                precio = 3000
                break
        }
    } else {
        alert("compra finalizada,muchas gracias por su dinero")

        carrito.forEach((carritoFinal) => {
            console.log(`juego: ${carritoFinal.juego}`, `precio: ${carritoFinal.precio}`)
        })
    }
}*/