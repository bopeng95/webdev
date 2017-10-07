//1
function changeH1() {
	document.getElementById("h1-1").style.color = "red";
}

function changeBkgd() {
	document.getElementById("sectOne").style.background = "skyblue";
}

function changeBorder() {
	document.getElementById("parag").style.border = '3px solid red';
}

//2
function randarray() {
	let car1 = [
		['BMW', '2013 Model'],
		['Tesla', '2016 Model'],
		['Mercedes Benz', '2010 Model'],
		['Toyota', '2017 Model'],
		['Ford', '2014 Model']
	]
	let num = Math.floor(Math.random()*6);

	let user = document.getElementById("user");

	user.innerHTML = 'YOU\'VE WON A ' + car1[num][1] + ' ' + car1[num][0] + '!!!';
}

//3
function swapT() {
	let obj1 = document.getElementById("p1")
	let obj2 = document.getElementById("p2")
	let text1 = obj1.innerHTML
	let text2 = obj2.innerHTML

	obj2.innerHTML = text1
	obj1.innerHTML = text2
}

//4
function swapI() {
	let obj1 = document.getElementById("img1")
	let obj2 = document.getElementById("img2")
	let img1 = obj1.src
	let img2 = obj2.src

	obj2.src = img1
	obj1.src = img2
}
