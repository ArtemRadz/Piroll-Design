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

var index = 0;
var workInner = document.querySelector(".work__inner");
var imgArray = document.querySelectorAll(".img");
var openPhotoSwipe = function() {
    var pswpElement = document.querySelector('.pswp');
    var items = [];
    for (var i = 0; i < imgArray.length; i++) {
    	var backImg = getComputedStyle(imgArray[i]).backgroundImage.replace(/\(|\)|\"/g, "");
    	var href = backImg.substring(backImg.indexOf("img") - 1);
    	items.push({src: `.${href}`, w: 1500, h: 1500});
    }
    var options = {     
        index: index - 1,
    };
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};
workInner.addEventListener('click', function (e) {
	e.preventDefault();
	var shadow = e.target.classList.contains("shadow");
	if (shadow) {
		index = parseInt(e.target.getAttribute('href').replace(/\D+/g,""));
		openPhotoSwipe();
	}
});