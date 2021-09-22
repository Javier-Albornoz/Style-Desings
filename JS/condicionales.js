let edad = Number (prompt('que edad tienes?'));
if (edad < 18) {
    alert('Tomátelas! ¬¬')
} else {
    alert('Podes proceder con la compra :D !!!')
    const cantProductos = Number ( prompt('que cantidad de productos quieres adquirir?'));
    const precioProductos = Number(prompt('ingrese el precio del producto'));
    const precioFinal = (cantProductos * precioProductos);
    alert ('el costo total es ' + precioFinal);
    const quieroSeguir = confirm ('queres seguir comprando?');
if (quieroSeguir) {
    const nuevaCantidad =  Number(prompt('buenisimo!!! cuantos produtos mas deseas? '));
    const nuevoPrecio = Number (prompt('ingrese el precio:'));
    const precioFinal2 = (nuevaCantidad * nuevoPrecio);
    alert ('el precio total de su compra es =' + ( precioFinal + precioFinal2) );
    alert ('gracias por su compra, vuelva prontos...dijo Apu');
     } else {
    alert('gracias por su compra, vuelva prontos...dijo Apu');}
};

