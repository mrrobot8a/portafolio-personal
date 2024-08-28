document.addEventListener('DOMContentLoaded', function () {

    console.log('El DOM se ha cargado completamente');
    // Seleccionar el botón
    const button = document.querySelector('.sidebar-info__btn');
    // Agregar un evento al botón
    button.addEventListener('click', function () {
        // Seleccionar el sidebar
        const sidebar = document.querySelector('.sidebar');
        // // Agregar o quitar la clase 'sidebar-info--open'
        sidebar.classList.toggle('sidebar--open');

        const contacList = document.querySelectorAll('.contact-item');
        contacList.forEach(function (contactItem) {
            contactItem.classList.toggle('contact-item--visible');
        });


        console.log('Se ha hecho click en el botón');
    });






});


const navLinks = document.querySelectorAll('.footer nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        console.log('Se ha hecho click en un enlace');
        console.log(this);

        // Eliminar la clase activa de todos los enlaces
        navLinks.forEach(link => link.classList.remove('nav-active'));

        // Agregar la clase activa al enlace clicado
        this.classList.add('nav-active');
    });
});
