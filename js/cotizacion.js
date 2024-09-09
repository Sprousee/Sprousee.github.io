function solicitarCotizacion() {
    const malla = document.getElementById('malla').value || 0;
    const concertinas = document.getElementById('concertinas').value || 0;
    const tuberia = document.getElementById('tuberia').value || 0;
    const platinas = document.getElementById('platinas').value || 0;

    const productosSeleccionados = {
        malla: malla,
        concertinas: concertinas,
        tuberia: tuberia,
        platinas: platinas
    };

    // Convertimos el objeto a una cadena de texto y lo almacenamos en localStorage
    localStorage.setItem('productosCotizacion', JSON.stringify(productosSeleccionados));

    // Redirigimos a la página de contacto
    window.location.href = 'contacto.html';
}
