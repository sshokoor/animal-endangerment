const gallery = document.querySelector('.gallery')
const galleryImages = document.querySelectorAll('.gallery img')

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

gallery.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners
nextBtn.addEventListener('click',()=>{
	gallery.style.transition = "transform 0.4s ease-in-out";
	counter++;
	gallery.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
