import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root);

const isResizeable = interact(".notes__sidebar")
	.resizable({
		axis: "x",
		enabled: true,
	})
	.on("resizemove", function (event) {
		const target = event.target;
		const w = $(target).width() + event.dx;
		target.style.width = w + "px";
	});
