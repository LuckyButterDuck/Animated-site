const menuPhoneNav = document.getElementById('menu-phone-nav')
const menuContact = document.getElementById('menu-contact')
const spanMenuNav = document.getElementById('span-menu-nav')

const liMenuNavOne = document.getElementById('li-menu-nav-one')
const liMenuNavTwo = document.getElementById('li-menu-nav-two')
const liMenuNavThree = document.getElementById('li-menu-nav-three')
const liMenuNav = document.getElementById('li-menu-nav')
let count = 0

menuContact.addEventListener('click', e => {
	if (count == 0) {
		setTimeout(() => {
			menuPhoneNav.style.visibility = 'visible' // Показать меню
			menuPhoneNav.style.right = '0' // Отодвинуть меню на место
			menuContact.style.borderRadius = '50px 50px 0 0' // Убрать закругление колобка снизу
			menuPhoneNav.style.top = '100%' // Поставить меню вниз
			menuPhoneNav.style.height = '360%' // Выставить высоту меню
			menuPhoneNav.style.borderRadius = '10px 0 10px 10px' // Закруглить меню
			spanMenuNav.style.visibility = 'visible' // Показать текст 
			setTimeout(() => {
				liMenuNavOne.style.visibility = 'visible' // Показать текст
				liMenuNavTwo.style.visibility = 'visible' // Показать текст
				liMenuNavThree.style.visibility = 'visible' // Показать текст
				// liMenuNav.style.transition = '0s'
			}, 300)


			count = 1
		}, 300)
	} else {
		setTimeout(() => {
			spanMenuNav.style.visibility = 'hidden' // Спрятать текст
			liMenuNavOne.style.visibility = 'hidden' // Спрятать текст
			liMenuNavTwo.style.visibility = 'hidden' // Спрятать текст
			liMenuNavThree.style.visibility = 'hidden' // Спрятать текст
			menuPhoneNav.style.visibility = 'hidden'
			menuPhoneNav.style.right = '10%'
			menuContact.style.borderRadius = '50px'
			menuPhoneNav.style.top = '0'
			menuPhoneNav.style.height = '0'
			menuPhoneNav.style.borderRadius = '0'
			// liMenuNav.style.transition = '.3s'

			count = 0
		}, 300)
	}
})