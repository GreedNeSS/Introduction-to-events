//! Задание 1

// function hidden() {
// 	text.style.display = 'none';
// }

// hider.addEventListener('click', hidden);


//! Решение сайта

// document.getElementById('hider').onclick = function () {
// 	document.getElementById('text').hidden = 'true';
// }


//! Задание 2

// hider.addEventListener('click', hidden);

// function hidden() {
// 	this.hidden = 'true';
// }


//! Задание 4

// field.addEventListener('click', play);

// function play(event) {
// 	let ball = document.querySelector('#ball');
// 	let pageY;
// 	let pageX;
// 	let Y = event.clientY + pageYOffset;
// 	let X = event.clientX + pageXOffset;

// 	if (Y < (field.clientTop + ball.clientHeight / 2)) {
// 		pageY = field.clientTop + ball.clientHeight / 2;
// 	} else if (Y > (field.clientTop + (field.clientHeight - ball.clientHeight / 2))) {
// 		pageY = field.clientTop + (field.clientHeight - ball.clientHeight / 2);
// 	} else {
// 		pageY = Y;
// 	}

// 	if (X < (field.clientLeft + ball.clientWidth / 2)) {
// 		pageX = field.clientLeft + ball.clientWidth / 2;
// 	} else if (X > (field.clientLeft + (field.clientWidth - ball.clientWidth / 2))) {
// 		pageX = field.clientLeft + (field.clientWidth - ball.clientWidth / 2);
// 	} else {
// 		pageX = X;
// 	}

// 	pageY -= ball.clientHeight / 2;
// 	pageX -= ball.clientWidth / 2;
// 	console.log(event.clientX, event.clientY);



// 	ball.style.top = pageY + 'px';
// 	ball.style.left = pageX + 'px';
// }


//! решение сайта

field.onclick = function (event) {

	let fieldCoords = this.getBoundingClientRect();

	let ballCoords = {
		top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
		left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
	};

	if (ballCoords.top < 0) {
		ballCoords.top = 0;
	}

	if (ballCoords.left < 0) {
		ballCoords.left = 0;
	}

	if (ballCoords.top + ball.clientHeight > field.clientHeight) {
		ballCoords.top = field.clientHeight - ball.clientHeight;
	}

	if (ballCoords.left + ball.clientWidth > field.clientWidth) {
		ballCoords.left = field.clientWidth - ball.clientWidth;
	}

	ball.style.top = ballCoords.top + 'px';
	ball.style.left = ballCoords.left + 'px';
}


//! Задание 5

// let text = document.querySelector('.text');
// let spanOpen = document.querySelector('.spanOpen');
// let spanClose = document.querySelector('.spanClose');
// let ul = document.querySelector('.ul');

// function hidden() {
// 	spanOpen.classList.toggle('hidden');
// 	spanClose.classList.toggle('hidden');
// 	ul.classList.toggle('hidden');
// }

// text.addEventListener('click', hidden);


//! Задание 6

// let articles = document.querySelectorAll('.pane');

// for (let art of articles) {
// 	let buttonRemove = document.createElement('button');
// 	buttonRemove.innerHTML = '[x]';
// 	buttonRemove.classList.add('remove-button');
// 	buttonRemove.addEventListener('click', clear);
// 	art.append(buttonRemove);
// }

// function clear() {
// 	this.parentElement.remove()
// }


//! Решение сайта

let panes = document.querySelectorAll('.pane')

for (const pane of panes) {
	pane.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>');

	pane.firstChild.onclick = () => pane.remove();
}

//! Задание 7

// let arrowLeft = document.querySelector('.left');
// let arrowRight = document.querySelector('.right');
// let wraper = document.querySelector('.wraper');
// let lists = document.querySelectorAll('li');
// let ul = document.querySelector('ul');
// let width = 0;

// for (const li of lists) {
// 	width += li.scrollWidth;
// }

// ul.style.width = width + 'px';

// function scrollRight() {
// 	wraper.scrollLeft += 390;
// }

// function scrollLeft() {
// 	wraper.scrollLeft -= 390;
// }

// arrowRight.addEventListener('click', scrollRight);
// arrowLeft.addEventListener('click', scrollLeft);


//! Решение сайта

let i = 1;
for (const li of carousel.querySelectorAll('li')) {
	li.style.position = 'relative';
	li.insertAdjacentHTML('beforeend', '<span style="position:absolute;left:0;top:0">${i}</span>');
	i++;
}

let width = 130;
let count = 3;

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.left').onclick = function () {
	position += width * count;
	position = Math.min(position, 0);
	list.style.marginLeft = position + 'px';
};

carousel.querySelector('.right').onclick = function () {
	position -= width * count;
	position = Math.max(position, -width * (listElems.length - count));
	list.style.marginLeft = position + 'px';
};