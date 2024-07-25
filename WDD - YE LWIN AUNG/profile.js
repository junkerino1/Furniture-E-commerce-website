function setting(){
    document.getElementById("box_1").style.width="90%";
    document.getElementById("box_3").style.width="90%";
    document.getElementById("box_2").style.width="95%";
    document.getElementById("box_5").style.display="none";
    document.getElementById("box_6").style.display="block";
    document.getElementById("box_7").style.display="none";
}

function security(){
    document.getElementById("box_1").style.width="90%";
    document.getElementById("box_2").style.width="90%";
    document.getElementById("box_3").style.width="95%";
    document.getElementById("box_5").style.display="none";
    document.getElementById("box_6").style.display="none";
    document.getElementById("box_7").style.display="block";
}
function profile(){
    document.getElementById("box_2").style.width="90%";
    document.getElementById("box_3").style.width="90%";
    document.getElementById("box_1").style.width="95%";
    document.getElementById("box_6").style.display="none";
    document.getElementById("box_7").style.display="none";
    document.getElementById("box_5").style.display="block";
}
function update(){
    alert("informations have updated");
}