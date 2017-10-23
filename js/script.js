"use strict";

var mobMenuClick = document.querySelector(".mob-menu-click");
var mobMenuBlock = document.querySelector(".mob-menu-block");
var mobMenuClose = document.querySelector(".mob-menu-close");
mobMenuClick.addEventListener('click', function (e) {
	e.preventDefault();
	mobMenuBlock.classList.add('mob-menu-block-show');
	document.body.style.overflow = "hidden";
});
mobMenuClose.addEventListener('click', function () {
	mobMenuBlock.classList.remove('mob-menu-block-show');
	document.body.style.overflow = "";
});

var mobMenuListUlA = document.querySelector(".mob-menu-list-ul");
mobMenuListUlA.addEventListener('click', function (e) {
	e.preventDefault();
	var elementTopMenu = e.target.classList.contains("mob-menu-list-ul-top");
	var back = e.target.classList.contains("mob-menu-list-ul-back");
	if (elementTopMenu) {
		this.classList.add("mob-menu-hide");
		e.target.nextElementSibling.classList.remove("mob-menu-inner-hide");
	}
	if (back) {
		this.classList.remove("mob-menu-hide");
		e.target.closest('ul').classList.add('mob-menu-inner-hide');
	}
});