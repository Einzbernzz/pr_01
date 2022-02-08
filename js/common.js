document.addEventListener('DOMContentLoaded', function() {

	const showSlider = new Swiper('.showcase-carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1800,
		centeredSlides: true,
		navigation: {
			nextEl: '.showcase-navigation__next',
			prevEl: '.showcase-navigation__prev'
		}
	})

	document.querySelector('video').playbackRate = 2
})

let h = document.body.scrollHeight

document.getElementById('vid').style.height = h + 'px'

console.log(document.body.clientHeight)