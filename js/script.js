let mobMenuClick = document.querySelector(".mob-menu-click");
let mobMenuBlock = document.querySelector(".mob-menu-block");
let mobMenuClose = document.querySelector(".mob-menu-close");
mobMenuClick.addEventListener('click', (e) => {
	e.preventDefault();
	mobMenuBlock.classList.add('mob-menu-block-show');
	document.body.style.overflow = "hidden";
});
mobMenuClose.addEventListener('click', () => {
	mobMenuBlock.classList.remove('mob-menu-block-show');
	document.body.style.overflow = "";
})

let mobMenuListUlA = document.querySelectorAll(".mob-menu-list-ul .mob-menu-list-ul-top");

for (let i = 0; i < mobMenuListUlA.length; i++) {
	mobMenuListUlA[i].addEventListener('click', function() {
		for (let i = 0; i < mobMenuListUlA.length; i++) {
			mobMenuListUlA[i].classList.add("hide");
		}
		let innerA = this.nextElementSibling.querySelectorAll('a');
		for (let i = 0; i < innerA.length; i++) {
			innerA[i].classList.add("show");
		}
	});
}

let mobMenuListUlBack = document.querySelectorAll(".mob-menu-list-ul-back");
for (let i = 0; i < mobMenuListUlBack.length; i++) {
	mobMenuListUlBack[i].addEventListener('click', () => {
		var parentUlA = mobMenuListUlBack[i].parentNode.parentNode.querySelectorAll('a');
		for (let i = 0; i < parentUlA.length; i++) {
			parentUlA[i].classList.remove('show');
		}
		for (let i = 0; i < mobMenuListUlA.length; i++) {
			mobMenuListUlA[i].classList.remove("hide");
		}
	});
}