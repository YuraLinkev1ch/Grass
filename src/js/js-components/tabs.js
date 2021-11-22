let tabs = document.querySelector('.container_services')
let btns = tabs.querySelectorAll('.services__tab-button')
let items = tabs.querySelectorAll('.tab-content')

function change(arr, i) {
	arr.forEach( item => {
		item.forEach( i => {i.classList.remove('tab-active')})
		item[i].classList.add('tab-active')
	})
}

for(let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', () => {
		change([btns, items], i)
	})
}

for(let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('keydown', function(event) {
		if (event.code == 'Enter'){
			change([btns, items], i)
		}

	})
}