const totalTicket = document.getElementById('totalTicket');
const opciones = document.getElementById('opcionesDescuento');
const tickets = document.getElementById('cTickets')
const resumen = document.getElementById('btnResumen');
const valorTicket = 200;
let total = 0;

function calcularTotal() {
    let cantidadTickets = tickets.value
    total = cantidadTickets * valorTicket;
    let nuevoTotal = total * opciones.value;
    totalTicket.innerText = `Total a pagar: $${nuevoTotal}`;
}

resumen.addEventListener('click', calcularTotal)
//tickets.addEventListener("change", calcularTotal);