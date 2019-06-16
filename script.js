// // Can also be included with a regular script tag
// import Typed from "typed.js";

var options = {
	strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
	typeSpeed: 40
};

var typed = new Typed("#typed", {
	strings: [
		"Hello, World!",
		"My name is Tung",
		"Let's begin <i style='font-size: 30px' class='em em-100'></i>"
	],
	typeSpeed: 60,
	showCursor: true,
	startDelay: 700,
	backDelay: 950,
	backSpeed: 20,
	onComplete: self => {
		// setTimeout(() => {
		// 	const element = document.querySelector(".jumbotron");
		// 	element.classList.add("animated", "hinge", "slower");
		// 	element.addEventListener("animationend", function() {
		// 		element.style.display = "none";
		// 	});
		// }, 1500);
	}
});

$(".navbar-nav .nav-link").click(function() {
	$(".navbar-nav .nav-link").removeClass("active");
	$(this).addClass("active");
});

$(window).scroll(function() {
	const viewportHeight = $(window).height();
	$("nav").toggleClass("scrolled", $(this).scrollTop() > viewportHeight);
});
// const buttonHinge = document.querySelector("#hinge");
// buttonHinge.addEventListener("click", () => {
// 	const element = document.querySelector(".jumbotron");
// 	element.classList.add("animated", "hinge", "slower");
// 	element.addEventListener("animationend", function() {
// 		element.style.display = "none";
// 	});
// });
