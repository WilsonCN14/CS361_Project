// ---------- TIMER ----------
document.addEventListener("click", function(event) {
	if (!event.target.matches("#button")) return;
	fetch("http://127.0.0.1:5000/get_current_time")
		.then((response) => response.json())
		.then((data) => clock(data));
});

function clock(data) {
	const time = document.getElementById("time");
	time.innerHTML = data.time;
} 
