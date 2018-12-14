const arrow = document.querySelector(".arrow");
const nav = document.querySelector(".mainNav");
const underline = document.querySelector(".underline");
const burgerMenu = document.querySelector(".mainNav nav");

const menu = document.querySelectorAll('nav ul li');

/*wysokość sekcji*/
const heightHome = document.querySelector('#home').clientHeight;
const heightAbout = document.querySelector('#about').clientHeight;
const heightGallery = document.querySelector('#gallery').clientHeight;
const heightServices = document.querySelector('#services').clientHeight;
const heightTestimonials = document.querySelector('#testimonials').clientHeight;
const heightClients = document.querySelector('#clients').clientHeight;
const heightPricing = document.querySelector('#pricing').clientHeight;


/*odległość sekcji od początku strony*/
const distanceAbouToStart = document.querySelector('#about').offsetTop;
const distanceGalleryToStart = document.querySelector('#gallery').offsetTop;
const distanceServicesToStart = document.querySelector('#services').offsetTop;
const distanceTestimonialsToStart = document.querySelector('#testimonials').offsetTop;
const distanceClientsToStart = document.querySelector('#clients').offsetTop;
const distancePricingToStart = document.querySelector('#pricing').offsetTop;

/*pobranie elementów box sekcji about*/
const boxes = document.querySelectorAll('.box');

/*pobranie elementów images sekcji gallery*/
const images = [...document.querySelectorAll('.images')];

const backgroudImage = document.querySelector('#home');


//szerokość okna przeglądarki
const windowWidth = window.innerWidth;


function hideElements() {

	const scrollPosition = window.scrollY;

	home.style.backgroundPosition = "center " + (-scrollPosition / 2) + 'px';


	/*pokazanie strzałki i menu*/
	if (scrollPosition > heightHome - 10) {
		nav.classList.add("moveNav");
	} else {
		nav.classList.remove("moveNav");
	}

	if (scrollPosition > heightHome - 100) {
		underline.style.display = "block";
		nav.classList.add("fixed");
		arrow.classList.add("showArrow");
	} else {
		underline.style.display = "none";
		nav.classList.remove("fixed");
		arrow.classList.remove("showArrow");
	}

	/*podkreslenie menu - metoda 1 (działa)*/

	// const menuAbout = document.querySelector('nav ul li:nth-child(2) a');
	// const menuGallery = document.querySelector('nav ul li:nth-child(3) a');
	// const menuServices = document.querySelector('nav ul li:nth-child(4) a');
	// const menuTestimontials = document.querySelector('nav ul li:nth-child(5) a');
	// const menuClients = document.querySelector('nav ul li:nth-child(6) a');
	// const menuPricing = document.querySelector('nav ul li:nth-child(7) a');	

	// if(scrollPosition < heightHome) {
	// menuAbout.classList.remove("active");
	// } else if(scrollPosition < heightAbout + distanceAbouToStart) {
	// menuAbout.classList.add("active");
	// menuGallery.classList.remove("active");
	// } else if (scrollPosition < heightGallery + distanceGalleryToStart) {
	// menuGallery.classList.add("active");
	// menuAbout.classList.remove("active");
	// menuServices.classList.remove("active");
	// } else if (scrollPosition < heightServices + distanceServicesToStart) {
	// menuServices.classList.add("active");
	// menuGallery.classList.remove("active");
	// menuTestimontials.classList.remove("active");
	// } else if (scrollPosition < heightTestimonials + distanceTestimonialsToStart) {
	// menuTestimontials.classList.add("active");
	// menuClients.classList.remove("active");
	// menuServices.classList.remove("active");
	// } else if (scrollPosition < heightClients + distanceClientsToStart) {
	// menuClients.classList.add("active");
	// menuTestimontials.classList.remove("active");
	// menuPricing.classList.remove("active");
	// } else {
	// menuPricing.classList.add("active");
	// menuClients.classList.remove("active");		
	// }


	/*podkreślenie menu - metoda 2 (z querySelectorAll)*/

	function underLineMenu(i) {
		if (i != menu.length - 1) {
			menu[i - 1].classList.remove("active");
			menu[i + 1].classList.remove("active");
			menu[i].classList.add("active");
		} else {
			menu[i].classList.add("active");
			menu[i - 1].classList.remove("active");
		}
	}

	// zmiana coloru menu w mniejszych rozdzielczościach
	function removeColorMenu() {
		menu.forEach(menu => {
			menu.firstChild.classList.remove('activeMedia');
		});
	}

	if (windowWidth > 1024) {
		if (scrollPosition < heightHome) {
			menu[1].classList.remove("active");
		} else if (scrollPosition < heightAbout + distanceAbouToStart) {
			underLineMenu(1);
		} else if (scrollPosition < heightGallery + distanceGalleryToStart) {
			underLineMenu(2);
		} else if (scrollPosition < heightServices + distanceServicesToStart) {
			underLineMenu(3);
		} else if (scrollPosition < heightTestimonials + distanceTestimonialsToStart) {
			underLineMenu(4);
		} else if (scrollPosition < heightClients + distanceClientsToStart) {
			underLineMenu(5);
		} else {
			underLineMenu(6);
		}
	} else {
		removeColorMenu();
		if (scrollPosition < heightHome) {
			removeColorMenu();
		} else if (scrollPosition < heightAbout + distanceAbouToStart) {
			menu[1].firstChild.classList.add('activeMedia');
		} else if (scrollPosition < heightGallery + distanceGalleryToStart) {
			menu[2].firstChild.classList.add('activeMedia');
		} else if (scrollPosition < heightServices + distanceServicesToStart) {
			menu[3].firstChild.classList.add('activeMedia');
		} else if (scrollPosition < heightTestimonials + distanceTestimonialsToStart) {
			menu[4].firstChild.classList.add('activeMedia');
		} else if (scrollPosition < heightClients + distanceClientsToStart) {
			menu[5].firstChild.classList.add('activeMedia');
		} else {
			menu[6].firstChild.classList.add('activeMedia');
		}
	}

	/*pokazanie umiejętnoścui w sekcji about */
	if (scrollPosition > distanceAbouToStart - heightAbout) {
		boxes.forEach(box => {
			box.classList.add('showArticle');
		});
	} else {
		boxes.forEach(box => {
			box.classList.remove('showArticle')
		});
	}


	/*pokazanie galerii w sekcji gallery */
	if (scrollPosition > distanceGalleryToStart - heightGallery) {
		images.forEach(image => {
			image.classList.add('showImage');
		});
	} else {
		images.forEach(image => {
			image.classList.remove('showImage');
		});
	}
}

window.addEventListener("scroll", hideElements)

// obsługa menu rozwijanego
document.querySelector('.burger').addEventListener('click', () => {
	burgerMenu.style.display = 'block';
	document.querySelector('.burgerHidden').style.display = 'block';
	document.querySelector('.burger').style.display = 'none';
});

document.querySelector('.burgerHidden').addEventListener('click', () => {
	burgerMenu.style.display = 'none';
	document.querySelector('.burgerHidden').style.display = 'none';
	document.querySelector('.burger').style.display = 'block';
});

if (windowWidth <= 1024) {
	menu.forEach(menu => {
		menu.addEventListener('click', function () {
			burgerMenu.style.display = 'none';
			document.querySelector('.burgerHidden').style.display = 'none';
			document.querySelector('.burger').style.display = 'block';
		});
	});
}
// przeładowanie strony
// function reLoad() {
// 	window.location.reload();
// }

// window.addEventListener("resize", reLoad);