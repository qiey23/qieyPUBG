function start(){
	let splash = document.getElementById("splash");

	splash.addEventListener("transitionend", () => {
		document.getElementById("bgm").play();
		splash.remove();
	});

	splash.classList.add("hide");
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", () => {
      const music = document.getElementById("bgm");
      music.play().catch(err => console.log("Autoplay blocked:", err));
    }, { once: true });
  });