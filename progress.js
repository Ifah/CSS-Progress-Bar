var bar = document.querySelector('.bar-fill'),
	width = 0,
	interval = setInterval(function(){
		width = width + 1;
		bar.style.width = width + '%';
		if(width>=100){
			clearInterval(interval);
			width = 0;
		}
	}, 50);