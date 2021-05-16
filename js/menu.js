const toggleMenu = document.getElementById('toggle-menu');
const menu = document.getElementById('menu');


toggleMenu.addEventListener('click', ( even ) => {
	menu.classList.toggle('menu--show');
	console.log( even );
});
