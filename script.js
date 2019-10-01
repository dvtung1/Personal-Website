// // Can also be included with a regular script tag
// import Typed from "typed.js";

$(function() {
	window.sr = ScrollReveal();

	if ($(window).width() < 768) {
		sr.reveal(".js--fadeInRight", {
			origin: "right",
			distance: "30px",
			easing: "ease-in-out",
			duration: 800
		});
		sr.reveal(".js--fadeInLeft", {
			origin: "right",
			distance: "30px",
			easing: "ease-in-out",
			duration: 800
		});
	} else {
		sr.reveal(".js--fadeInLeft", {
			origin: "left",
			distance: "80px",
			easing: "ease-in-out",
			duration: 800
		});

		sr.reveal(".js--fadeInRight", {
			origin: "right",
			distance: "80px",
			easing: "ease-in-out",
			duration: 800
		});
	}
});

var options = {
	strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
	typeSpeed: 40
};

var typed = new Typed("#typed", {
	strings: ["Hello, World!", "My name is Tung", "Let's begin"],
	typeSpeed: 60,
	showCursor: true,
	startDelay: 2900,
	backDelay: 950,
	backSpeed: 20,
	onComplete: self => {}
});

//update the navbar based on corresponding section
var sections = $("section"),
	nav = $("nav"),
	nav_height = nav.outerHeight(),
	viewportHeight = $(window).height();

$(window).on("scroll", function() {
	var cur_pos = $(this).scrollTop();
	if (cur_pos < viewportHeight - nav_height) {
		$("nav").removeClass("scrolled");
	} else {
		$("nav").addClass("scrolled");
	}
	// $("nav").toggleClass("scrolled", $(this).scrollTop() >= viewportHeight);

	sections.each(function() {
		var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find("a").removeClass("active");
			nav.find('a[href="#' + $(this).attr("id") + '"]').addClass(
				"active"
			);
		}
	});
});
const headerElem = document.querySelector(".jumbotron .container");
headerElem.classList.add("animated", "bounceInUp", "delay-1s", "slow");

//copy to clipboard
$(".copy_text").click(function(e) {
	copyToClipboard(e.target);
});

function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
}

//show up "copied" dialog
$(".copy_text").click(showDialog);

function showDialog(e) {
	var popup = document.getElementById("myPopup");
	popup.classList.add("show");
	setTimeout(function() {
		popup.classList.remove("show");
	}, 700);
}

//particles in homepage
let particle_properties = {
	particles: {
		number: { value: 80, density: { enable: true, value_area: 800 } },
		color: { value: "#ffffff" },
		shape: {
			type: "circle",
			stroke: { width: 0, color: "#000000" },
			polygon: { nb_sides: 5 },
			image: { src: "img/github.svg", width: 100, height: 100 }
		},
		opacity: {
			value: 1,
			random: true,
			anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
		},
		size: {
			value: 3,
			random: true,
			anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: "#ffffff",
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 3,
			direction: "top",
			random: true,
			straight: true,
			out_mode: "out",
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 600 }
		}
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: true, mode: "grab" },
			onclick: { enable: true, mode: "repulse" },
			resize: true
		},
		modes: {
			grab: { distance: 100, line_linked: { opacity: 0.2 } },
			bubble: {
				distance: 250,
				size: 0,
				duration: 2,
				opacity: 0,
				speed: 3
			},
			repulse: { distance: 100, duration: 0.5 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 }
		}
	},
	retina_detect: true
};

//if the device is a phone, disable hover feature
if ($(window).width() < 768) {
	particle_properties["interactivity"]["events"]["onhover"]["enable"] = false;
}

particlesJS("particles-js", particle_properties);
