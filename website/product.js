//product.js
let oldNum = 0;
function firstitem() {
	let four = document.getElementById('four').value;
	let result = document.getElementById('prod1');
	result.innerHTML = (4*four);
}
function seconditem() {
	let five = document.getElementById('five').value;
	let result = document.getElementById('prod2');
	result.innerHTML = (5*five);
}
function thirditem() {
	let six = document.getElementById('six').value;
	let result = document.getElementById('prod3');
	result.innerHTML = (6*six);
}
function totalOut() {
	let r1 = document.getElementById('prod1').value;
	let r2 = document.getElementById('prod2').value;
	let r3 = document.getElementById('prod3').value;
	let out = document.getElementById('totaloutput');

	let x1 = parseInt(r1);
	let x2 = parseInt(r2);
	let x3 = parseInt(r3);

	oldNum = (x1+x2+x3);

	out.innerHTML = (x1+x2+x3);
}
function deliveryType() {
	let out = document.getElementById('totaloutput');

	if(document.getElementById('p').checked) {
		out.innerHTML = oldNum;
	}
	else if(document.getElementById('d').checked) {
		out.innerHTML = oldNum+5;
	}
}

function receipt() {
	let x = document.forms[0];
	const out = document.getElementById('totaloutput').value;
	let r = document.getElementById('rOutput');
	let text = "<p class=\"alpha-font\" style=\"font-size:20px;\">Here is your receipt</p><br>";

	let valid = true;

	for (let i = 1; i < (x.elements.length)-2; i++) {
		if ((x.elements[i].value == "") || (x.elements[i].value == null)) {
			alert ("Please enter something for " + x.elements[i].name)
			x.elements[i].focus();
			x.elements[i].select();
			x.elements[i].style.backgroundColor="#FF0000";
			valid = false;
			break;
		}
		else {
			x.elements[i].style.backgroundColor="white";
			text += x.elements[i].name + ": " + x.elements[i].value + "<br>";
			if(x.elements[i].name === "Phone") {
				if(x.elements[i].value.length !== 10) {
					alert ("Invalid value for " + x.elements[i].name)
					x.elements[i].focus();
					x.elements[i].select();
					x.elements[i].style.backgroundColor="#FF0000";
					valid = false;
					break;
				}
				else
					x.elements[i].style.backgroundColor="white";
			}
			else if (x.elements[i].name === "Email") {
				let split1 = x.elements[i].value.split('@');
				if(split1.length !== 2) {
					alert ("Invalid value for " + x.elements[i].name)
					x.elements[i].focus();
					x.elements[i].select();
					x.elements[i].style.backgroundColor="#FF0000";
					valid = false;
					break;
				}
				else {
					let split2 = split1[1].split('.');
					if(split2.length < 2) {
						alert ("Invalid value for " + x.elements[i].name)
						x.elements[i].focus();
						x.elements[i].select();
						x.elements[i].style.backgroundColor="#FF0000";
						valid = false;
						break;
					}
					else
						x.elements[i].style.backgroundColor="white";
				}
			}
			else if (x.elements[i].name === "Zip") {
				if(x.elements[i].value.length !== 5) {
					alert ("Invalid value for " + x.elements[i].name)
					x.elements[i].focus();
					x.elements[i].select();
					x.elements[i].style.backgroundColor="#FF0000";
					valid = false;
					break;
				}
				else
					x.elements[i].style.backgroundColor="white";
			}
			else if (x.elements[i].name === "CC Number") {
				if(x.elements[i].value.length !== 16) {
					alert ("Invalid value for " + x.elements[i].name)
					x.elements[i].focus();
					x.elements[i].select();
					x.elements[i].style.backgroundColor="#FF0000";
					valid = false;
					break;
				}
				else
					x.elements[i].style.backgroundColor="white";
			}
			else if (x.elements[i].name === "CC Code") {
				if(x.elements[i].value.length !== 3) {
					alert ("Invalid value for " + x.elements[i].name)
					x.elements[i].focus();
					x.elements[i].select();
					x.elements[i].style.backgroundColor="#FF0000";
					valid = false;
					break;
				}
				else
					x.elements[i].style.backgroundColor="white";
			}
		}
	}

	if(valid) {
		text += "Total Amount: $" + out + "<br>";
		text += "<br><p class=\"alpha-font\" style=\"font-size:20px;\">Thanks for shopping with us!</p><br>"
		r.innerHTML = text;
	}
}