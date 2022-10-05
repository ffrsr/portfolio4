window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;	//เรียก function checkLogin เมื่อกด Login
    onreset = "checkLogin()"; //ปุ่ม Clear     
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get("username");
	const password = urlParams.get("password");

	if (document.getElementById("usernameLogin").value == username && document.getElementById("passwordLogin").value == password) //เช็ค username password ว่าตรงกับ register หรือไม่
	{
		alert("Login success")
	}
	else
	{
		alert("Username หรือ Password ไม่ถูกต้อง")
		return false;
	}
	
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			