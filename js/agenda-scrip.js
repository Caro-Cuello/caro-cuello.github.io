document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-abrir-popup')) {
            e.preventDefault();
            const botonabrir = e.target;
            const container = botonabrir.parentElement;
            const overlay = container.nextElementSibling;
            const popup = overlay.firstElementChild;
            popup.classList.add('active');
        }
        if (e.target.classList.contains('btn-cerrar-popup')) {
            e.preventDefault();
            const botonCerrar = e.target;
            const container = botonCerrar.closest('.popup');
            container.classList.remove('active');
        }
    });
});