let event1 = new Event('click');
element.dispatchEvent(event1);

console.log(event1.isTrusted);

document.addEventListener('hello', function (event) {
	console.log('Привет от ' + event.target.tagName);
})

let eventTwo = new Event('hello', { bubbles: true });
let elem = document.querySelector('#elem');
elem.dispatchEvent(eventTwo);


//! MouseEvent, keyboardEvent

let eventTree = new MouseEvent('click', {
	bubbles: true,
	cancelable: true,
	clientX: 100,
	clientY: 100
})

console.log(eventTree.clientX);

let eventFour = new Event('click', {
	bubbles: true,
	cancelable: true,
	clientX: 100,
	clientY: 100
})

console.log(eventFour.clientX);


//! CustomEvent

let h2 = document.querySelector('.h2');
h2.addEventListener('hello', function (event) {
	console.log(event.detail.name);
});

h2.dispatchEvent(new CustomEvent('hello', {
	detail: { name: 'Вася' }
}));


let rabbit = document.querySelector('.rabbit');
let button = document.querySelector('.buttonHide');
button.addEventListener('click', hide);

function hide() {
	let event = new CustomEvent('hide', {
		cancelable: true // без этого флага preventDefault не сработает
	});
	if (!rabbit.dispatchEvent(event)) {
		console.log('Действие отменено обработчиком');
	} else {
		rabbit.hidden = true;
	}
}

rabbit.addEventListener('hide', function (event) {
	if (confirm('Вызвать preventDefault?')) {
		event.preventDefault();
	}
});


//! Синхронная обработка событий 

// let menu = document.querySelector('.menu');
// menu.addEventListener('click', function () {
// 	console.log(1);

// 	menu.dispatchEvent(new CustomEvent('menu-open', {
// 		bubbles: true
// 	}));

// 	console.log(2);
// });

// document.addEventListener('menu-open', () => console.log('вложенное событие'));


// ! Асинхронная обработка событий

let menu = document.querySelector('.menu');
menu.addEventListener('click', function () {
	console.log(1);

	setTimeout(() => {
		menu.dispatchEvent(new CustomEvent('menu-open', {
			bubbles: true
		}))
	});

	console.log(2);
});

document.addEventListener('menu-open', () => console.log('вложенное событие'));
