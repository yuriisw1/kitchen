
let ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}


ready(() => {

	//MENU
		let iconMenu=document.querySelector(".icon-menu");
		let body=document.querySelector("body");
		let menuBody=document.querySelector(".menu__body");
		iconMenu.addEventListener("click", (e) => {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});

		//--spoiler--//
$(document).ready(function() {
	$(".footer__title").click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
	
});

//-----MENU-----//
$(document).ready(function() {
	$('.icon-menu').click(function(event) {
		$('.icon-menu,.menu__body').toggleClass('active');
		$('body').toggleClass('lock');

	});
});

		//--SLICK-SLIDER-OPTIONS--//		
	$(document).ready(function() {
	$(".slider").slick({
		//--стрелки
		arrows:true,
		//--точки
		dots:true,
		//--адаптив фото
		adaptiveHeight:true,
		//--количество слайдов к показу в линии 
		slidesToShow:1,
		//--количество прокручиваемых слайдов за один раз 
		slidesToScroll:1,
		//--скорость прокрутки слайдов
		speed:700,
		//--переход между прокрутами
		easing:'ease',
		//--бесконечный показ слайдов 
		infinite:true,
		//--начальный слайд
		initialSlide:3,
		//--автопрокрутка 
		autoplay:false,
		//--скорость автопрокрутки 
		autoplaySpeed:3000,
		//--остановка прокрутки при нажатии 
		pauseOnFocus:true,
		//--остановка прокрутки при наведении 
		pauseOnHover:true,
		//--остановка прокрутки при наведении на точки 
		pauseOnDotsHover:true,
		//--возможность прокрутки на мышью (только на пк)
		draggable:true,
		//--возможность прокрутки слайдом (только на моб)
		swipe: true ,
		//--клв пространства для задействования перехода при свайпе
		touchThreshold:10,
		//--включает возможности тачскрина
		touchMove:true,
		//--скорость перехода переключения при нажатии на стрелку
		waitForAnimate:true,
		//--центрует изображение по середине слайдера и создает класс -center
		centerMode:true,
		//--изменение относительная ширина 
		variableWidth:false,
		//--строки 
		rows:1,
		//--клв слайдов в строке
		slidesPerRow:2,
		//--вертикальный слайдер
		vertical:false,
		//--вертикальный свайп
		verticalSwiping:false,
		//--обмен классами
		asNavFor:"",
		//--адаптивность 
		responsive:[
		{
			breakpoint:768,
			settings:{
				slidesToShow:1,
				slidesPerRow:1,
				centerMode:true,
			}
		},{
			breakpoint:600,
			settings:{
				variableWidth:true,
				centerMode:true,
		}
		}
		]
	});
	});

	//IBG
	document.querySelectorAll(".ibg").forEach(el => {
		if(el.querySelector('img')){
			el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
			el.querySelector('img').style.display = 'none';
		}
	});
});


/*

		let element = document.createElement("div");
	element.classList.add("content", "active");
	element.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
	document.querySelector(".mainblock").append(element);

	if(iconMenu.classList.contains('active')){
		
	}
	document.querySelectorAll(".box")
		.forEach(el => {
			el.style.display = "none"
		});
*/