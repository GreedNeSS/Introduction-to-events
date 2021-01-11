// function showMessage() {
// 	alert(this.tagName);
// }

function showMessage(event) {
	alert(event.currentTarget.tagName); //! вот так все работает
}

let inp = document.querySelector('input');
inp.onclick = showMessage;
inp.onclick = function () { //! Перезаписываем
	alert('Теперь так.');
}
inp.onclick = null; //! Теперь вообще стираем


function handler1() {
	alert('Спасибо!');
}

function handler2() {
	alert('Спасибо еще раз!');
}


let inp1 = document.querySelector('.inp1');

inp1.onclick = function () { console.log(this.tagName) };
inp1.addEventListener('click', handler1);
inp1.addEventListener('click', handler2);
inp1.addEventListener('click', () => alert('123'));
inp1.removeEventListener('click', () => alert('123')); //! не сработает так как функция не задана
inp1.removeEventListener('click', handler1); //! А вот это сработает


document.onDOMContentjLoaded = function () {
	alert('DOM построен');
}

document.addEventListener('DOMContentLoaded', function () { //! эта сработает
	alert('DOM построен');
})


inp.onclick = function (even) {
	console.log(even.type + ' на ' + even.currentTarget);
	console.log('Координаты: ' + event.clientX + ': ' + event.clientY);
}


let but = document.querySelector('.but');

class Menu {
	handleEvent(event) {
		switch (event.type) {
			case 'mousedown':
				but.innerHTML = 'Нажата кнопка мыши';
				break;

			case 'mouseup':
				but.innerHTML += '... и отжата.'
				break;
		}
	}
}

let menu = new Menu();
but.addEventListener('mousedown', menu);
but.addEventListener('mouseup', menu);


let but1 = document.querySelector('.but1');

class Menu1 {
	handleEvent(event) {
		let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
		this[method](event);
	}

	onMousedown() {
		but1.innerHTML = 'Кнопка мыши нажата';
	}

	onMouseup() {
		but1.innerHTML = '... и отжата.';
	}
}

let menu1 = new Menu1();
but1.addEventListener('mousedown', menu1);
but1.addEventListener('mouseup', menu1);
