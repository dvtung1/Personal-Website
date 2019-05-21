// // Can also be included with a regular script tag
// import Typed from "typed.js";

var options = {
	strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
	typeSpeed: 40
};

var typed = new Typed("#typed", {
	strings: ["Hello, World!", "My name is Tung", "Welcome to my website :D"],
	typeSpeed: 60,
	showCursor: true,
	startDelay: 800,
	backDelay: 800,
	backSpeed: 20
});
