const hoteles=[
    {nombre:"Hotel Algeciras",precio:16000},
    {nombre:"Terrazas al Mar Pinamar Resort & Spa",precio:18000},
    {nombre:"Pinamar Beach Resort",precio:17000},
    {nombre:"Albar Club de Mar",precio:15000},
    {nombre:"Hotel Arenas",precio:20000},
    {nombre:"Hotel Las Araucarias",precio:21000},
    {nombre:"Hotel Playas ",precio:24000},
    {nombre:"Hotel Green Sea Apart",precio:27000}
]
let cantidad = 0
const ocultar=(item)=>item.className += " ocultar"
const mostrar=(item)=>item.classList.remove("ocultar")
const divsombra=document.querySelector("#sombra")
divsombra.onclick=()=>{
    ocultar(divcarrito)
    ocultar(divsombra)
    cantidad=0
}

const divcarrito=document.querySelector("#carrito")
let carrito={}

const agregarAlCarrito =(index) => {
    mostrar(divsombra)
    mostrar(divcarrito)
    carrito=hoteles[index]
    divcarrito.innerHTML=`
    <p class="fw-bolder"> ${carrito.nombre} </p>
    <p> Precio x noche: AR$${carrito.precio} </p>
    <p class="cantDias"> Duración de estadia: </p>
    <div> <button id="restarDias"> - </button> 
    <button id="sumarDias"> + </button> </div>
    <p id="total"> Precio total: </p>
    <button class="botonReservar" id="Reservar"> Reservar </button>
    `
    const cantDiasDisplay = document.querySelector(".cantDias")
    const botonRestar = document.querySelector("#restarDias")
    const botonSumar = document.querySelector("#sumarDias")
    botonRestar.onclick=(evt)=>{
        evt.preventDefault()
        cantidad-=1
        cantDiasDisplay.textContent= "Duración de estadia: " + cantidad
        document.querySelector("#total").textContent="Precio total: " + (cantidad*carrito.precio)
    }
    botonSumar.onclick=(evt)=>{
        evt.preventDefault()
        cantidad+=1
        cantDiasDisplay.textContent= "Duración de estadia: " + cantidad
        document.querySelector("#total").textContent="Precio total: " + (cantidad*carrito.precio)
    }
    document.querySelector("#Reservar").onclick=()=>{swal("Enhorabuena!", "Agendamos su reserva!", "success");}
}

const carrito1=document.querySelector("#carrito1")
const carrito2=document.querySelector("#carrito2")
const carrito3=document.querySelector("#carrito3")
const carrito4=document.querySelector("#carrito4")
const carrito5=document.querySelector("#carrito5")
const carrito6=document.querySelector("#carrito6")
const carrito7=document.querySelector("#carrito7")
const carrito8=document.querySelector("#carrito8")

carrito1.onclick=(evt) => {
    evt.preventDefault()
    agregarAlCarrito(0)

}
carrito2.onclick=(evt) => {
    evt.preventDefault()
    agregarAlCarrito(1)
}
carrito3.onclick=(evt) => {
    evt.preventDefault()
    agregarAlCarrito(2)
}
carrito4.onclick=(evt) => {
    evt.preventDefault()
    agregarAlCarrito(3)
}
carrito5.onclick=(evt) => {
    evt.preventDefault()
    agregarAlCarrito(4)
}
carrito6.onclick=(evt) => {
    evt.preventDefault()
    agregarAlCarrito(5)
}
carrito7.onclick=(evt) => {
    evt.preventDefault()
    agregarAlCarrito(6)
}
carrito8.onclick=(evt) => {
    evt.preventDefault()
    agregarAlCarrito(7)
}