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


    const canvas = document.getElementById('2dcanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");

    let numStars = 3000;
    const stars = [];
    let speed = 2;

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    function createStar() {
        let x, y;
        do {
            x = Math.random() * canvas.width;
            y = Math.random() * canvas.height;
        } while (Math.hypot(x - mouseX, y - mouseY) < 3);

        return {
            x,
            y,
            z: Math.random() * canvas.width,
            o: Math.random(),
            size: Math.random() * 3 + 2 // Zufällige Größe zwischen 3 und 6
        };
    }

    function populateStars() {
        stars.length = 0;
        for (let i = 0; i < numStars; i++) {
            stars.push(createStar());
        }
    }

    canvas.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowUp' || event.code === 'KeyW') {
            speed += 1;
        } else if (event.code === 'ArrowDown' || event.code === 'KeyS') {
            speed = Math.max(1, speed - 1);
        } else if (event.code === 'NumpadAdd') {
            numStars += 100;
            populateStars();
        } else if (event.code === 'NumpadSubtract') {
            numStars = Math.max(100, numStars - 100);
            populateStars();
        }
    });

    function updateStars() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (let star of stars) {
            star.z -= speed;

            if (star.z <= 0) {
                Object.assign(star, createStar());
                star.z = canvas.width;
            }

            const sx = (star.x - mouseX) * (canvas.width / star.z) + mouseX;
            const sy = (star.y - mouseY) * (canvas.width / star.z) + mouseY;
            const size = (1 - star.z / canvas.width) * star.size;
            context.fillStyle = "white";
            context.fillRect(sx, sy, size, size);
        }

        requestAnimationFrame(updateStars);
    }

    

    populateStars();
    updateStars();



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
