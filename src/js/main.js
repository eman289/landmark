const navbar = document.getElementById("navbar");
const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");
const modeToggle = document.getElementById("modeToggle");
const modeIcon = document.getElementById("modeIcon");

const text = "Build the Next Great Thing";
const typewriterElement = document.getElementById("typewriter");

const slider = document.getElementById("reviews-slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const scrollUpButton = document.getElementById("scrollUpButton");

//navbar
function changeNavbarBackground() {
	if (window.scrollY > 50) {
		if (document.documentElement.classList.contains("dark")) {
			// Dark mode:
			navbar.classList.add("dark:bg-primary", "shadow-lg");
			navbar.classList.remove("dark:bg-transparent");
		} else {
			// Light mode:
			navbar.classList.add("bg-white", "shadow-lg");
			navbar.classList.remove("bg-transparent", "text-white");
			navbarToggle.classList.remove("text-purple-300");
			modeToggle.classList.remove("text-purple-300");
		}
	} else {
		if (document.documentElement.classList.contains("dark")) {
			// Dark mode:
			navbar.classList.remove("dark:bg-primary", "shadow-lg");
			navbar.classList.add("dark:bg-transparent");
		} else {
			// Light mode:
			navbar.classList.add("bg-transparent", "text-white");
			navbar.classList.remove("bg-white", "shadow-lg");
			navbarToggle.classList.add("text-purple-300");
			modeToggle.classList.add("text-purple-300");
		}
	}
}

window.addEventListener("scroll", changeNavbarBackground);
modeIcon.addEventListener("change", () => {
	changeNavbarBackground();
});

navbarToggle.addEventListener("click", () => {
	navbarMenu.classList.toggle("hidden");
});

//Mode
const isDarkMode = localStorage.getItem("dark-mode") === "true";

document.documentElement.classList.toggle("dark", isDarkMode);
modeIcon.classList.toggle("fa-sun", isDarkMode);
modeIcon.classList.toggle("fa-moon", !isDarkMode);

modeToggle.addEventListener("click", () => {
	document.documentElement.classList.toggle("dark");
	const isDark = document.documentElement.classList.contains("dark");
	localStorage.setItem("dark-mode", isDark);

	modeIcon.classList.toggle("fa-sun", isDark);
	modeIcon.classList.toggle("fa-moon", !isDark);
});

//typewriter effect
let index = 0;
let isDeleting = false;
let speed = 150;

function type() {
	if (!isDeleting) {
		// Typing text
		typewriterElement.textContent = text.substring(0, index + 1);
		index++;

		if (index === text.length) {
			isDeleting = true;
			speed = 3000; // Pause before deleting
		} else {
			speed = 150; // Typing speed
		}
	} else {
		// Deleting text
		typewriterElement.textContent = text.substring(0, index - 1);
		index--;

		if (index === 0) {
			isDeleting = false;
			speed = 1000; // Pause before re-typing
		} else {
			speed = 100; // Deleting speed
		}
	}

	setTimeout(type, speed);
}

type();

//slider
let currentIndex = 0;

function updateSliderPosition() {
	const width = slider.children[0].clientWidth;
	slider.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener("click", () => {
	if (currentIndex < slider.children.length - 1) {
		currentIndex++;
	} else {
		currentIndex = 0; // Loop back to the start
	}
	updateSliderPosition();
});

prevBtn.addEventListener("click", () => {
	if (currentIndex > 0) {
		currentIndex--;
	} else {
		currentIndex = slider.children.length - 1; // Loop back to the last
	}
	updateSliderPosition();
});

//recalculate positions
window.addEventListener("resize", updateSliderPosition);

setInterval(() => {
	nextBtn.click();
}, 5000); // Auto-slide every 5 seconds

//scroll-up button
window.addEventListener("scroll", () => {
	const firstSection = document.getElementById("home");
	const firstSectionHeight = firstSection.offsetHeight;

	if (window.scrollY > firstSectionHeight) {
		scrollUpButton.classList.remove("opacity-0", "pointer-events-none");
		scrollUpButton.classList.add("opacity-100");
	} else {
		scrollUpButton.classList.add("opacity-0", "pointer-events-none");
		scrollUpButton.classList.remove("opacity-100");
	}
});

scrollUpButton.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});
