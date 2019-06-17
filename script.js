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

//update the navbar based on corresponding section
var sections = $("section"),
	nav = $("nav"),
	nav_height = nav.outerHeight(),
	viewportHeight = $(window).height();

$(window).on("scroll", function() {
	var cur_pos = $(this).scrollTop();
	if ($(this).scrollTop() < viewportHeight) {
		$("nav").removeClass("navbar-dark scrolled");
		$("nav").addClass("navbar-light");
	} else {
		$("nav").removeClass("navbar-light");
		$("nav").addClass("navbar-dark scrolled");
	}
	// $("nav").toggleClass("scrolled", $(this).scrollTop() > viewportHeight);

	sections.each(function() {
		var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find("a").removeClass("active");
			sections.removeClass("active");

			$(this).addClass("active");
			nav.find('a[href="#' + $(this).attr("id") + '"]').addClass(
				"active"
			);
		}
	});
});

// const buttonHinge = document.querySelector("#hinge");
// buttonHinge.addEventListener("click", () => {
// 	const element = document.querySelector(".jumbotron");
// 	element.classList.add("animated", "hinge", "slower");
// 	element.addEventListener("animationend", function() {
// 		element.style.display = "none";
// 	});
// });
