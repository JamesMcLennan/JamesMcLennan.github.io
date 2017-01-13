function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "" && user == "CSJames") {
        alert("Welcome again " + user);
    }

    else {
       user = prompt("Please create your username:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

function termsAndConditions() {
  var checkTCs = getCookie("acceptT&C's");

  if (checkTCs != "") {
    checkCookie();
  }
  else {
    var answer = confirm("This website stores a basic cookie to remember your username. You must agree to continue otherwise you cannot save reference numbers.");
    if(answer) {
      checkCookie();
      setCookie("acceptT&C's", answer, 30);
      document.getElementById("confirmSave").setAttribute('onClick', 'saveLink()');
    }
    else {
      alert("You cannot save reference numbers, however you are free to use the website.");
    }
  }
}
