const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
	if (!menuOpen) {
		menuOpen = true;
	} else {
		menuBtn.classList.remove("open");
		menuOpen = false;
	}
});
