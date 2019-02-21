

(function(){
	
	var preload = document.getElementById("preload");
	var loading = 0;
	var id = setInterval(frame, 610);
	
	function frame(){
		if(loading == 10) {
			clearInterval(id);
			window.open("Home.html", "_self");
		} else{
			loading = loading +1;
			if(loading == 90){
				preload.style.animation = "fadeout 1s ease";
			}
		}
	}
})();