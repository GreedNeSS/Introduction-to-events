let selectedTd;
let table = document.querySelector('#bagua-table');

// table.onclick = function (event) {
// 	let target = event.target;

// 	if (target.tagName != 'TD') {
// 		return
// 	}

// 	highlight(target);
// }

// function highlight(td) {
// 	if (selectedTd) {
// 		selectedTd.classList.remove('highlight');
// 	}

// 	selectedTd = td;
// 	selectedTd.classList.add('highlight');
// }

//! Улучшеный вариант

table.onclick = function (event) {
	let target = event.target.closest('td');

	if (!target) {
		return
	}

	if (!table.contains(target)) {
		return
	}

	highlight(target);
}

function highlight(td) {
	if (selectedTd) {
		selectedTd.classList.remove('highlight');
	}

	selectedTd = td;
	selectedTd.classList.add('highlight');
}


//! Применение делегирования: действия в разметке

class Menu {
	constructor(elem) {
		this._elem = elem;
		// elem.onclick = this.onClick.bind(this);
		elem.addEventListener('click', this.onClick.bind(this));
	}

	save() {
		console.log('Сохраняю');
	}

	load() {
		console.log('Загружаю');
	}

	search() {
		console.log('Ищу');
	}

	onClick(event) {
		let action = event.target.dataset.action;
		if (action) {
			this[action]();
		}
	}
}

new Menu(menu);


document.addEventListener('click', function (event) {

	if (event.target.dataset.counter == undefined) {
		event.target.value++;
	}
})


document.addEventListener('click', function (event) {
	let id = event.target.dataset.toggleId;
	if (!id) {
		return
	}

	let elem = document.querySelector(`#${id}`);

	elem.hidden = !elem.hidden;
})