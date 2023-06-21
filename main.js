const menuPhoneNav = document.getElementById('menu-phone-nav')
const menuContact = document.getElementById('menu-contact')
const spanMenuNav = document.getElementById('span-menu-nav')
const exitAria = document.getElementById('exit-aria')
const menuBlock = document.getElementById('menu-block')
const menuGeneralBlock = document.getElementById('menu-general-block')
const menuContactBar = [
	document.getElementById('menu-contact-bar-one'),
	document.getElementById('menu-contact-bar-two')
]

const liMenuNavOne = document.getElementById('li-menu-nav-one')
const liMenuNavTwo = document.getElementById('li-menu-nav-two')
const liMenuNavThree = document.getElementById('li-menu-nav-three')
const liMenuNav = document.getElementById('li-menu-nav')
let count = 0

menuContact.addEventListener('click', e => {
	if (count == 0) {
		menuContact.style.borderRadius = '50px 50px 0 0' // Убрать закругление колобка снизу
		menuContactBar[0].style.transform = 'rotate(45deg)'
		menuContactBar[1].style.transform = 'rotate(-45deg)'
		menuContactBar.forEach(element => {
			element.classList.remove('menu-contact-bar')
			element.classList.add('menu-contact-bar-active')
		})


		setTimeout(() => {
			new Promise((resolve, reject) => {
				menuBlock.style.height = '124px'
				menuPhoneNav.style.visibility = 'visible' // Показать меню
				menuPhoneNav.style.height = '100%' // Выставить высоту меню
				exitAria.style.height = '100vh' // Выставить высоту закрытия
				exitAria.style.width = '100vw' // Выставить ширину закрытия
				exitAria.style.zIndex = '4'
				menuPhoneNav.style.borderRadius = '0 0 10px 10px' // Закруглить меню
				setTimeout(() => resolve(), 300)
			})
				.then(() => {
					menuBlock.style.width = '134.5px'
					menuPhoneNav.style.width = '100%' // Выставить ширину меню
					menuPhoneNav.style.borderRadius = '10px 0 10px 10px' // Закруглить меню
				})
			setTimeout(() => {
				spanMenuNav.style.visibility = 'visible' // Показать текст 
				liMenuNavOne.style.visibility = 'visible' // Показать текст
				liMenuNavTwo.style.visibility = 'visible' // Показать текст
				liMenuNavThree.style.visibility = 'visible' // Показать текст
				count = 1
			}, 400)
		}, 400)

	} else {
		menuContactBar[0].style.transform = 'rotate(0)'
		menuContactBar[1].style.transform = 'rotate(0)'
		menuContactBar.forEach(element => {
			element.classList.remove('menu-contact-bar-active')
			element.classList.add('menu-contact-bar')
		})


		new Promise((resolve) => {
			console.log(`${menuContact.offsetWidth}px`)
			menuBlock.style.width = `${menuContact.offsetWidth}px`
			menuPhoneNav.style.width = '100%'
			exitAria.style.width = '0vw'
			exitAria.style.height = '0vh'
			exitAria.style.zIndex = '-1'
			spanMenuNav.style.visibility = 'hidden' // Спрятать текст
			liMenuNavOne.style.visibility = 'hidden' // Спрятать текст
			liMenuNavTwo.style.visibility = 'hidden' // Спрятать текст
			liMenuNavThree.style.visibility = 'hidden' // Спрятать текст
			menuPhoneNav.style.borderRadius = '0 0 10px 10px'
			setTimeout(() => resolve(), 300)
		})
			.then(() => {
				menuPhoneNav.style.borderRadius = '0 0 50px 50px'
				menuPhoneNav.style.height = '0'
				exitAria.style.height = '0'
				menuBlock.style.height = '34.5px'
				menuPhoneNav.style.visibility = 'hidden'
			})
		setTimeout(() => {
			menuContact.style.borderRadius = '50px'
			count = 0
		}, 670)

		// }, 300)
	}
})

exitAria.addEventListener('click', event => {
	menuContactBar[0].style.transform = 'rotate(0)'
	menuContactBar[1].style.transform = 'rotate(0)'
	menuContactBar.forEach(element => {
		element.classList.remove('menu-contact-bar-active')
		element.classList.add('menu-contact-bar')
	})


	new Promise((resolve) => {
		menuBlock.style.width = '34.5px'
		menuPhoneNav.style.width = '100%'
		exitAria.style.width = '0vw'
		exitAria.style.height = '0vh'
		exitAria.style.zIndex = '-1'
		spanMenuNav.style.visibility = 'hidden' // Спрятать текст
		liMenuNavOne.style.visibility = 'hidden' // Спрятать текст
		liMenuNavTwo.style.visibility = 'hidden' // Спрятать текст
		liMenuNavThree.style.visibility = 'hidden' // Спрятать текст
		menuPhoneNav.style.borderRadius = '0 0 10px 10px'
		setTimeout(() => resolve(), 300)
	})
		.then(() => {
			menuPhoneNav.style.borderRadius = '0 0 50px 50px'
			menuPhoneNav.style.height = '0'
			exitAria.style.height = '0'
			menuBlock.style.height = '34.5px'
			menuPhoneNav.style.visibility = 'hidden'
		})
	setTimeout(() => {
		menuContact.style.borderRadius = '50px'
		count = 0
	}, 670)

	// }, 300)
})