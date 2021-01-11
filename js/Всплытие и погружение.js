let form = document.querySelector('.form');

form.onclick = function (event) {
	event.target.style.backgroundColor = 'yellow';

	setTimeout(() => {
		alert('target = ' + event.target.tagName + ', this = ' + this.tagName);
		event.target.style.backgroundColor = '';
	}, 0);
}

for (const elem of document.querySelectorAll('.bord')) {
	elem.addEventListener('click', () => console.log(`Погружение: ${elem.tagName}`), true);
	elem.addEventListener('click', e => console.log(`Всплытие: ${elem.tagName}, ${e.eventPhase}`));
}
