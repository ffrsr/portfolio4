var Click = 0; //กำหนดค่าเริ่มต้นของ Click
function postFunction(){
    Click = Click + 1;
    var text1 = document.getElementById("text1").value; //ดึงค่าจาก text1
    if( Click == 1 ) //Click = 1
    {
        var topic1 = document.getElementById("topic1"); //ใส่ข้อมูลลงtopic1
        topic1.innerHTML = text1; //ใส่ค่าที่ได้จาก text1 ในช่อง topic1    
    }
    else if(Click == 2) //Click = 2
    {
        var comment1 = document.getElementById("comment1"); //ใส่ข้อมูลลงcomment1
        comment1.innerHTML = text1; //ใส่ค่าที่ได้จาก text1 ในช่อง comment1   
    }
    
    else if (Click == 3) //Click = 3
    {
        var comment2 = document.getElementById("comment2"); //ใส่ข้อมูลลงcomment2
        comment2.innerHTML = text1;  //ใส่ค่าที่ได้จาก text1 ในช่อง comment2
    }

}

function clearFunction(){
    document.getElementById("text1").value = "";
    document.getElementById("topic1").innerHTML ="";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML ="" ;
}

  