"use strict";

const nav = document.getElementById("nav");
const burger = document.querySelector(".burger");
const productContent	= document.querySelector(".product-content");
const companyContent = document.querySelector(".company-content");
const connectContent = document.querySelector(".connect-content");

const responsiveMenu = () => {
	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");
	});
};
responsiveMenu();

// Display links dropdown menu
nav.addEventListener("click", displayMenu, false);

function displayMenu(e) {
if (e.target !== this) {
	let clickedItem = e.target.id;
	if (clickedItem === "product") {
		productContent.classList.toggle("content-active");
		companyContent.classList.remove("content-active");
		connectContent.classList.remove("content-active");
	}
	if (clickedItem === "company") {
		productContent.classList.remove("content-active");
		companyContent.classList.toggle("content-active");
		connectContent.classList.remove("content-active");
	}
	if (clickedItem === "connect") {
		productContent.classList.remove("content-active");
		companyContent.classList.remove("content-active");
		connectContent.classList.toggle("content-active");
	}
}	
e.stopPropagation();
}

