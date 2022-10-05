window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm; //เรียก function validateForm เมื่อกด Register	
    onreset = "validateForm()"; //ปุ่ม reset     
}

function validateForm() {
    if (document.getElementById("lastname").value == "") //เช็คค่าว่าง --> return false
    {
        alert ("Please input lastname");
        return false;
    }
    else if (document.getElementById("radio1").checked == false && document.getElementById("radio2").checked == false && document.getElementById("radio3").checked == false)
    {
        alert ("Please check gender");
        return false;
    }
    else if (document.getElementById("date").value == "")
    {
        alert ("Please choose date")
        return false;
    }
    else if (document.getElementById("email").value == "")
    {
        alert ("Please input email")
        return false;
    }
    else if (document.getElementById("username").value == "")
    {
        alert ("Please input username");
        return false;
    }
    else if (document.getElementById("password1").value != document.getElementById("password2").value ) //เช็ค password ตรงกันหรือไม่
    {
        document.getElementById("errormsg").innerHTML = "Passwordไม่ตรงกัน";
        return false;   
    }
    else if (document.getElementById("password1").value == document.getElementById("password2").value ) //password ตรงกัน alert OK
    {
        alert ("OK"); 
    }
   
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

