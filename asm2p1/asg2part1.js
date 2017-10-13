//1
function changeH1() {
	document.getElementById("h1-1").style.color = "red";
}

function changeBkgd() {
	document.getElementById("sectOne").style.background = "skyblue";
}

function changeBorder() {
	document.getElementById("parag").style.border = '3px solid green';
}

function changeText() {
	document.getElementById("parag").innerHTML = 'HELLOOOOOOO</p><p>THEREEEEE'
}

function changeFontSize() {
	document.getElementById("parag").style.fontSize = '20px';
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
	let num = Math.floor(Math.random()*5);

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


//5
function newdoc() {
	let d = new Date();
	let date = (d.getMonth()+1) + ' - ' + d.getDate() + ' - ' + d.getFullYear()
	let day = d.getDay();
	let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
	let img = document.getElementById("image")
	h = img.clientHeight;
	w = img.clientWidth;

	let text = '<div class = "containerDoc newdoc alpha-font"><img src="../website/img/matcha2.jpg" width="300" style="border-radius:25px;"><h1 class = "alpha-font">Matcha Tea</h1><p>This is a picture of a matcha drink I found online</p><br><p style="border-bottom:1px solid lightgray;width:150px;margin:0 auto;">Image Properties</p>';
	document.open();
	document.title = "Image Info";
	document.write("<html><head><title>Image Info</title><link rel='stylesheet' href='main.css' type='text/css'></head><body>");

	document.write(text);
	document.write('<p>' + w + ' X ' + h + '</p><br>');
	document.write('<p>Date: ' + date + '</p>');
	document.write('<p>Day: ' + days[day] + '</p>');
	document.write('<p><a href="asg2part1.html" class = "back alpha-font">Back</a><p>')
	document.write("</div></body></html>");
	document.close();
}

//6
function convert() {
	let cel = document.getElementById("cel").value;
	let fah = document.getElementById("fah")

	let c = parseInt(cel);
	let result = (1.8*c) + 32;
	fah.innerHTML = result + ' F';
}