const totalTicket = document.getElementById('totalTicket');
const opciones = document.getElementById('opcionesDescuento');
const tickets = document.getElementById('cTickets')
const resumen = document.getElementById('btnResumen');
const valorTicket = 200;

function calcularTotal() {
    let cantidadTickets = tickets.value
    let total = cantidadTickets * valorTicket;
    let nuevoTotal = total * opciones.value;
    totalTicket.innerText = `Total a pagar: $${nuevoTotal}`;
}

resumen.addEventListener('click', calcularTotal)
/*  tanto aca como en el elemento select de tickets.html tenia un listener para actualizar y mostrar el precio con cada cambio,
    pero a pedido de la consigna lo comente para que solo muestre el precio a travez del boton resumen.
    tickets.addEventListener("change", calcularTotal); */