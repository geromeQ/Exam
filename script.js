let quantity = 1;
let price = 52000;
let ship = 3000;

function add() {
	if(quantity >= 10) {
		document.getElementById('num1').innerHTML = 10;
		alert("Exceeded at available amount of stocks. " + quantity + ". That can be purchased.")
	}
	else {
		let a = quantity + 1;
		quantity = a
		document.getElementById('num1').innerHTML = quantity;
		document.getElementById('num2').innerHTML = quantity;

		let nprice = quantity * price
		let total = totalprice + ship

		document.getElementById('totalprice').innerHTML = totalprice;
		document.getElementById('total').innerHTML = total;
		document.getElementById('ship').innerHTML = ship;

		document.getElementById('finalnum').innerHTML = quantity;
		document.getElementById('finaltotal').innerHTML = total;
		document.getElementById('finalship').innerHTML = ship;
	}
}

function sub() {
	if(quantity <= 1) {
		document.getElementById('num1').innerHTML =1;
		alert("There's no way you can buy negative amount of items")

	}else{
		let a = quantity - 1;
		quantity = a
		document.getElementById('num1').innerHTML = quantity;
		document.getElementById('num2').innerHTML = quantity;

		let nprice = quantity * price
		let total = totalprice + ship

		document.getElementById('total').innerHTML = total;
		document.getElementById('ship').innerHTML = ship;
		document.getElementById('totalprice').innerHTML = totalprice;

		document.getElementById('finalnum').innerHTML = quantity;
		document.getElementById('finaltotal').innerHTML = total;
		document.getElementById('finalship').innerHTML = ship;
	}
}

function show1() {
	document.getElementById('box1').style.display = 'none';
	document.getElementById('box2').style.display = 'flex';
}

function show2() {
	document.getElementById('box2').style.display = 'none';
	document.getElementById('box4').style.display = 'flex';
}
