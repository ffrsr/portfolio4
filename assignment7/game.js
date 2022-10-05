window.onload = pageLoad;
function pageLoad(){
	document.getElementById("start").onclick= startGame;
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; //เวลาเริ่มต้น 30 วิ 
	var x = document.getElementById('clock');

	x.innerHTML = second; //แสดงเวลา
	timer = setInterval(timeCount,TIMER_TICK);
	
	//setting timer using setInterval function
	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		console.log(allbox.length);
		if (allbox.length != 0 && second != 0) // จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ
		{
			second = second - 1;
			x.innerHTML = second;
			
		}
		else if(allbox.length == 0 && second != 0) // ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		{
			clearInterval(timer);
			alert("You win!");
			
		}
		else if(allbox.length != 0 && second == 0) // ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		{
			clearInterval(timer);
			alert("Game over");			
			clearScreen(allbox);
		}
		
	}
	
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer"); 
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++)
	{
		var tempbox = document.createElement("div");
		tempbox.classList.add("square");
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";

		if (colorDrop == "red"){ //สร้างกล่องสีแดง
			tempbox.style.backgroundColor = "red";
			gameLayer.appendChild(tempbox);
		}
		else if (colorDrop == "blue"){ //สร้างกล่องสีน้ำเงิน
			tempbox.style.backgroundColor = "blue";
			gameLayer.appendChild(tempbox);
		}
		else if (colorDrop == "green"){ //สร้างกล่องสีเขียว
			tempbox.style.backgroundColor = "green";
			gameLayer.appendChild(tempbox);
		}		
		
		//add element to HTML node 
		bindBox(tempbox,i);
	}
}

function bindBox(box,i){
	//เมื่อกดแล้ว กล่องจะหายไป
	var box = document.getElementById("box" +i);
	box.onclick = function(){
		box.parentNode.removeChild(box); 
	}	
}

function clearScreen(allbox){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer div");

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);	
	}
}




