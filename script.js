// Select the burger menu and the navigation links
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

// Create the close menu button dynamically
const closeMenu = document.createElement('div');
closeMenu.classList.add('close-menu');
closeMenu.innerHTML = '&times;';
document.body.appendChild(closeMenu);

// Toggle the navigation menu and the burger icon
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    closeMenu.style.display = 'block'; // Show close menu button when nav is active
});

// Close the navigation menu when the close button is clicked
closeMenu.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
    closeMenu.style.display = 'none'; // Hide close button when menu is closed
});
