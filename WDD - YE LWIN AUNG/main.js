
    function login_function(){
        let username=document.getElementById("userName").value;
        let pswd=document.getElementById("logPswd").value;

        if(username=="yelwin" && pswd=="123"){
            window.open("profile.html","_self");
        }
        else if(username!="yelwin" || pswd!="123"){
            alert("Invalid username or password");
        }

    }
 