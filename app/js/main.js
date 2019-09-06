// slider add container 
let slider = document.querySelector('.slider');
let windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

let img = new Image();
img.src = 'img/slider-pic.png';
function resizeImg() {
	if (windowWidth < img.width) {
		slider.classList.add('container');
	} else {
		slider.classList.remove('container');
	}
}
window.onresize = resizeImg;

// menu toggle
let menuButton = document.getElementsByClassName('menu__icon')[0];
let menuList = document.getElementsByClassName('menu__list')[0];

function menu_hide() {
	menuButton.classList.toggle('menu__icon__active');
	if(menuButton.classList.contains('menu__icon__active')) {
		menuList.style.display = "block";	
	} else {
		menuList.style.display = "none";
	}
}


//!!!!!!Monday!!!!!!!
//let date = new Date();
let date = new Date();
function findMonday() {
	//let day = new Date();
	// let month = date.getMonth() + 1;
	// let year = date.getFullYear() % 100;
 	// let monday = new Date(date);
	// if(day > 23 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)) {
	// 	month++;
	// } else if (day > 23 && (month == 4 || month == 6 || month == 9 || month == 11)) {
	// 	month++;
	// } else if (day > 20 && month == 2 && date.getFullYear() % 4 != 0) {
	// 	month++;
	// } else if (day > 21 && month == 2 && date.getFullYear() % 4 == 0) {
	// 	month++;
	// }
	// if(day.getDay()) {
	// 	monday.setDate(day.getDate() + 8 - day.getDay()); 
	// 	//5 + 8 - 4 = 9 , 9 + 8 - 1 = 16
 //    } else {
	// 	monday.setDate(day.getDate() + 1);
 //    }
	let month = date.getMonth() + 1;
	let year = date.getFullYear() % 100;
 	let monday = new Date(date);
 	//console.log(monday.getDay());
 	//console.log(monday.getDate() +(7 - monday.getDay()) % 7 + 1);
    monday.setDate(monday.getDate() + (7 - monday.getDay()) % 7 + 1);
    monday = monday.getDate();

    if (monday < 10){
		monday = '0' + monday;
	} 
	if (month < 10) {
		month = '0' + month;
	} 
	if (year < 10) {
		year = '0' + year;
	}
    return monday + '.' + month + '.' + year;
}

let myDate = document.querySelector('.header__date');
myDate.innerHTML = findMonday() + "!";
