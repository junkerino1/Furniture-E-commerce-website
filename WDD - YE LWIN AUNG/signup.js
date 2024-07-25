
function creatAccount(){
    
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let pswd=document.getElementById("cpswd").value;
    let cpswd=document.getElementById("cfmPswd").value;
    let address=document.getElementById("addrs").value;
    let postCode=document.getElementById("postCode").value;
    let email=document.getElementById("mail").value;
    let tel=document.getElementById("phNumber").value;
   /* let gender=$("input[name = 'gender']:checked").val();
    let citizen=document.getElementById("listOfNat").value;
    */
        if(fname=="" || lname=="" || pswd=="" || cpswd=="" || address=="" || email=="" || tel=="" || postCode==""){
        alert("You need to fill All required information");
        }
        else if(pswd!=cpswd){
        alert("Type the same password");
        }
        else{
        alert("Account created");
        window.open("profile.html","_self");
        }
    
    }
