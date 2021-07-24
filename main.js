"use strict";

const responsiveMenu = () => {
	const burger = document.querySelector(".burger");
	const nav = document.getElementById("nav");
	const productContent = document.querySelector(".product-content");
	const companyContent = document.querySelector(".company-content");
	const connectContent = document.querySelector(".connect-content");
	burger.addEventListener("click", () => {
		// Toggle nav
		nav.classList.toggle("nav-active");
	});

	// Display links dropdown menu
	nav.addEventListener("click", displayMenu, false);

	function displayMenu(e) {
		if (e.target !== this) {
			let clickedItem = e.target.id;
			let menu = document.querySelector(`.${clickedItem}-content`);
			menu.classList.toggle("content-active");
		}
		e.stopPropagation();
	}

	// Hide links dropdown menu
	document.body.addEventListener("click", () => {
		productContent.classList.remove("content-active");
		companyContent.classList.remove("content-active");
		connectContent.classList.remove("content-active");
	});
};
responsiveMenu();

const signUp = document.querySelector(".sign");
const h1 = document.querySelector("h1");
const p = document.createElement("p");
p.textContent = "asdasdasd";
p.classList.add("js");

const addP = () => {
	h1.appendChild(p);
};

signUp.addEventListener("click", addP);

const button = document.querySelectorAll("button");
console.log(button);

button.forEach((button) => {
	button.addEventListener("click", () => {
		console.log("asdasd");
	});
});

const a = document.querySelectorAll("a");
a.forEach((a) => {
	a.setAttribute("target", "_blank");
	a.setAttribute("href", "http://www.google.com");
});

const myHTML = `
	
`;
