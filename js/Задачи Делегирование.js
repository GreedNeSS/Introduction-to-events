//! Задание 1

// let container = document.querySelector('#container');

// container.addEventListener('click', function (event) {
// 	let button = event.target;

// 	if (!button.classList.contains('remove-button')) {
// 		return
// 	}

// 	clear(button);
// })

// function clear(elem) {
// 	elem.parentElement.remove()
// }


//! Вариант 2

// let container = document.querySelector('#container');

// container.addEventListener('click', function (event) {
// 	let button = event.target.closest('.remove-button');

// 	if (!button) {
// 		return
// 	}

// 	clear(button);
// })

// function clear(elem) {
// 	elem.parentElement.remove()
// }


//! Решение сайта


// container.onclick = function (event) {
// 	if (event.target.className != 'remove-button') {
// 		return;
// 	}

// 	let pane = event.target.closest('.pane');

// 	pane.remove();
// }


//! Задание 2

// let tree = document.querySelector('.tree');
// let list = tree.querySelectorAll('li');

// tree.addEventListener('click', function (event) {
// 	let target = event.target.closest('li');

// 	if (target.tagName != 'LI') {
// 		return;
// 	}

// 	let childs = target.querySelectorAll('li');

// 	if (!childs.length) {
// 		return;
// 	}

// 	for (const li of childs) {
// 		li.hidden = !li.hidden;
// 	}
// })


//! Решение сайта

let tree = document.querySelector('.tree');
let list = tree.querySelectorAll('li');

for (const li of list) {
	let span = document.createElement('span');
	li.prepend(span);
	span.append(span.nextSibling);
}

tree.onclick = function (event) {

	if (event.target.tagName != 'SPAN') {
		return;
	}
	console.log(event.target.parentNode);
	let childrenContainer = event.target.parentNode.querySelector('ul'); //! parentNode нужет чтоб из спана выйти в li и проверить есть ли у него дети ul

	if (!childrenContainer) return; // нет детей

	childrenContainer.hidden = !childrenContainer.hidden;
}


//! Задание 3

// let grid = document.querySelector('#grid');

// grid.addEventListener('click', function (event) {
// 	let type = event.target.dataset.type;
// 	if (type) {
// 		let i = event.target.cellIndex;
// 		sortObj[type](i);
// 	}
// })

// let sortObj = {

// 	number(i) {
// 		let sortedRows = Array.from(grid.tBodies[0].rows)
// 			.sort((rowA, rowB) => rowA.cells[i].innerHTML - rowB.cells[i].innerHTML);
// 		grid.tBodies[0].append(...sortedRows);
// 	},

// 	string(i) {
// 		let sortedRows = Array.from(grid.tBodies[0].rows)
// 			.sort((rowA, rowB) => {
// 				if (rowA.cells[i].innerHTML < rowB.cells[i].innerHTML) {
// 					return -1;
// 				} else if (rowA.cells[i].innerHTML > rowB.cells[i].innerHTML) {
// 					return 1;
// 				} else {
// 					return 0;
// 				}
// 			});
// 		grid.tBodies[0].append(...sortedRows);
// 	}

// }


//! Второй вариант решения

// class Table {
// 	constructor(elem) {
// 		this._elem = elem;
// 		elem.addEventListener('click', this.onClick.bind(this));
// 	}

// 	onClick(event) {
// 		let type = event.target.dataset.type;
// 		if (type) {
// 			let i = event.target.cellIndex;
// 			this[type](i);
// 		}
// 	}

// 	number(i) {
// 		let sortedRows = Array.from(this._elem.tBodies[0].rows)
// 			.sort((rowA, rowB) => rowA.cells[i].innerHTML - rowB.cells[i].innerHTML);
// 		this._elem.tBodies[0].append(...sortedRows);
// 	}

// 	string(i) {
// 		let sortedRows = Array.from(this._elem.tBodies[0].rows)
// 			.sort((rowA, rowB) => {
// 				if (rowA.cells[i].innerHTML < rowB.cells[i].innerHTML) {
// 					return -1;
// 				} else if (rowA.cells[i].innerHTML > rowB.cells[i].innerHTML) {
// 					return 1;
// 				} else {
// 					return 0;
// 				}
// 			});
// 		this._elem.tBodies[0].append(...sortedRows);
// 	}
// }

// new Table(grid);


//! Решение сайта

grid.onclick = function (e) {
	if (e.target.tagName != 'TH') {
		return;
	}

	let th = e.target;
	sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
	let tbody = grid.querySelector('tbody');
	let rowsArray = Array.from(tbody.rows);
	let compare;

	switch (type) {
		case 'number':
			compare = function (rowA, rowB) {
				return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
			};
			break;

		case 'string':
			compare = function (rowA, rowB) {
				return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
					? 1 : -1;
			};
			break;
	}

	rowsArray.sort(compare);
	tbody.append(...rowsArray);
}


//! Задание 4

document.addEventListener('mouseover', showTooltip);
document.addEventListener('mouseout', removeTooltip);

function showTooltip(event) {
	let tooltip = event.target.dataset.tooltip;

	if (tooltip) {
		let coords = event.target.getBoundingClientRect();
		let text = document.createElement('p');

		text.classList.add('tooltip');
		text.innerHTML = tooltip;

		let coordsTop;
		let coordsLeft;
		document.body.append(text);

		if (coords.top - text.offsetHeight - 5 < 0) {
			coordsTop = coords.bottom + 5;
		} else {
			coordsTop = coords.top - text.offsetHeight - 5;
		}

		if (coords.left - ((text.offsetWidth - coords.width) / 2) < 0) {
			coordsLeft = 0;
		} else {
			coordsLeft = coords.left - ((text.offsetWidth - coords.width) / 2);
		}

		text.style.top = coordsTop + 'px';
		text.style.left = coordsLeft + 'px';

		document.body.append(text);
	}

}

function removeTooltip(event) {
	let tooltip = event.target.dataset.tooltip;

	if (tooltip) {
		let text = document.querySelector('.tooltip');
		text.remove();
	}
}


//! Решение сайта

// let tooltipElem;

// document.onmouseover = function (event) {
// 	let target = event.target;

// 	let tooltipHtml = target.dataset.tooltip;
// 	if (!tooltipHtml) {
// 		return;
// 	}

// 	tooltipElem = document.createElement('div');
// 	tooltipElem.className = 'tooltip';
// 	tooltipElem.innerHTML = tooltipHtml;
// 	document.body.append(tooltipElem);

// 	let coords = target.getBoundingClientRect();

// 	let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
// 	if (left < 0) {
// 		left = 0;
// 	}

// 	let top = coords.top - tooltipElem.offsetHeight - 5;
// 	if (top < 0) {
// 		top = coords.top + target.offsetHeight + 5;
// 	}

// 	tooltipElem.style.left = left + 'px';
// 	tooltipElem.style.top = top + 'px';
// };

// document.onmouseout = function () {
// 	if (tooltipElem) {
// 		tooltipElem.remove();
// 		tooltipElem = null;
// 	}
// };