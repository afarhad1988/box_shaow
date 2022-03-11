const box = document.querySelector('.box')
const offsetX = document.querySelector('.horizontal')
const offsetY = document.querySelector('.vertical')
const blur = document.querySelector('.blur')
const stretch = document.querySelector('.stretch')
const color = document.querySelector('.color')
const info = document.querySelector('.info')
const inset = document.querySelector('.inset')
const outset = document.querySelector('.outset')

function boxShadowGenerator () {
	let insetValue = ''
	if(inset.checked){
		insetValue = 'inset'
	}
	box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px  ${stretch.value}px ${color.value} ${insetValue}`
	info.textContent =  `${offsetX.value}px ${offsetY.value}px ${blur.value}px  ${stretch.value}px ${color.value}`
}

offsetX.addEventListener('input', boxShadowGenerator)
offsetY.addEventListener('input', boxShadowGenerator)
blur.addEventListener('input', boxShadowGenerator)
stretch.addEventListener('input', boxShadowGenerator)
color.addEventListener('input', boxShadowGenerator)
inset.addEventListener('input', boxShadowGenerator)
outset.addEventListener('input', boxShadowGenerator)