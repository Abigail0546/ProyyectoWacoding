// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('¡JavaScript cargado correctamente!');
    
    // Seleccionar el botón
    const miBoton = document.getElementById('miBoton');
    
    // Agregar evento click al botón
    miBoton.addEventListener('click', function() {
        // Cambiar el texto del botón
        this.textContent = '¡Gracias por hacer clic!';
        this.style.background = '#27ae60';
        
        // Mostrar alerta
        alert('¡Hola! JavaScript está funcionando correctamente.');
        
        // Cambiar el color de fondo del hero
        document.querySelector('.hero').style.background = '#ecf0f1';
    });
    
    // Efecto hover en las cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        });
    });
    
    // Contador de clicks
    let clickCount = 0;
    miBoton.addEventListener('click', function() {
        clickCount++;
        console.log(`Número de clicks: ${clickCount}`);
    });
    
    // Cambiar color del navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = '#34495e';
        } else {
            navbar.style.background = '#2c3e50';
        }
    });
});