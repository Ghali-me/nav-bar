const navToggle = document.getElementById('nav-toggle');
const links = document.getElementById('links');

navToggle.addEventListener('click', function() {
	links.classList.toggle('show-links');
});
