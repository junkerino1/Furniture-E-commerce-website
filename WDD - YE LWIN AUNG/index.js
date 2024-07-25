function showPswd() {
    var x = document.getElementById("logPswd");
    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }