document.addEventListener('DOMContentLoaded', function(){
	var slide_button = document.querySelectorAll('.next__slide ul li');
	var slides = document.querySelectorAll('.slide__content ul li');
	//xu ly button_click.
	for (var i = 0; i < slide_button.length; i++) 
	{
		slide_button[i].addEventListener('click', function() 
		{
			for (var i = 0; i < slide_button.length; i++) 
			{
				slide_button[i].classList.remove('button-active');
			}
			this.classList.add('button-active');
			var button_active = this;
			var location_button = 0;
			for (var location_button = 0; button_active = button_active.previousElementSibling; location_button++) {}
			for (var k = 0; k < slides.length; k++) {
				slides[k].classList.remove('slide-active');
				slides[location_button].classList.add('slide-active');
			}
		});
	}
	autoSlide();
	function autoSlide() 
	{
		var time_auto = setInterval(function() 
		{
			var locationSlide = 0;
			var slideShow = document.querySelector('.slide__content ul li.slide-active');
			// console.log(slideShow.previousElementSibling);
			for (var locationSlide = 0; slideShow = slideShow.previousElementSibling; locationSlide++){}
			if (locationSlide < (slides.length - 1)) 
			{
				for (var h = 0; h < slides.length; h++) 
				{
					slides[h].classList.remove('slide-active');	
					slide_button[h].classList.remove('button-active');	
				}
				slides[locationSlide].nextElementSibling.classList.add('slide-active');
				slide_button[locationSlide].nextElementSibling.classList.add('button-active');
			}
			else 
			{
				for (var h = 0; h < slides.length; h++) 
				{
					slides[h].classList.remove('slide-active');	
					slide_button[h].classList.remove('button-active');	
				}
				slides[0].classList.add('slide-active');
				slide_button[0].classList.add('button-active')
			}
			
		},5000);
	}
},false);