// menu.onclick = function (event) {
// 	if (event.target.nodeName != 'A') {
// 		return;
// 	}

// 	let href = event.target.getAttribute('href');
// 	console.log(href);

// 	return false;
// }

let menu = document.querySelector('.menu');
menu.addEventListener('click', function (event) {
	if (event.target.nodeName != 'A') {
		return;
	}

	let href = event.target.getAttribute('href');
	console.log(href);

	event.preventDefault();
})


let contMenu = document.querySelector('.contMenu');

contMenu.addEventListener('contextmenu', function (event) {
	event.preventDefault();
	// event.stopPropagation(); //! но это хренова 
	console.log('Меню кнопки');
});

document.addEventListener('contextmenu', function (event) {
	if (event.defaultPrevented) {
		return; //! это правильное решение 
	}
	event.preventDefault();
	console.log('Меню документа');
}
	// , { passive: true } //! действие по умолчанию не будет отменено
);


//! Задание 1

function handler() {
	alert('...');
	return false;
}


// ! Задание 2

let contents = document.querySelector('#contents');
contents.addEventListener('click', handler);

function handler() {
	let a = event.target.closest('a');
	if (!a) {
		return;
	}

	let yes = confirm('Хотите перейти на сайт?');

	if (!yes) {
		event.preventDefault();
		return;
	}
}


// ! Задание 3

// let largeImg = document.querySelector('#largeImg');
// let thumbs = document.querySelector('#thumbs');

// thumbs.addEventListener('click', showThumbnail);

// function showThumbnail(event) {
// 	let img = event.target.closest('a');

// 	if (!img) {
// 		return;
// 	}

// 	let newSrc = img.getAttribute('href');
// 	largeImg.setAttribute('src', newSrc);
// 	event.preventDefault();
// }


// ! Второй выриант

let largeImg = document.querySelector('#largeImg');
let thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', showThumbnail);

function showThumbnail(event) {
	let img = event.target.closest('a');

	if (!img) {
		return;
	}

	let newSrc = img.href;
	largeImg.src = newSrc;
	event.preventDefault();
}


//! Решение сайта

// thumbs.onclick = function (event) {
// 	let thumbnail = event.target.closest('a');

// 	if (!thumbnail) {
// 		return;
// 	}

// 	showThumbnail(thumbnail.href, thumbnail.title);
// 	event.preventDefault();
// }

// function showThumbnail(href, title) {
// 	largeImg.src = href;
// 	largeImg.alt = title;
// }