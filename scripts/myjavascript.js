var counter = 0;
var refNum;
var list = document.getElementById("savedDeets");
var lastid = 0;

function createLink() {
  var texto = this.redir.value;
  var textod = texto.replace(/^CRS/, '');
  var integered = parseInt(textod, 16);
  var errMsg = "The reference number is not in correct format. Please check the number, and try again...";
  var errMsg2 = "Assistance!: All InQuba Reference numbers will contain CRS as the first three letters.";
  var errMsg3 = "Assistance!: Generally InQuba Reference numbers will be 9 characters long.";
  var errMsg4 = "Assistance!: Please seek advice from CS.";

  if (texto.includes("CRS") && texto.length == 9) {
    document.getElementById("ErrorMessage").innerHTML = "";
    document.getElementById("CRSAssist").innerHTML = "";
    document.getElementById("CRSAssist2").innerHTML = "";
    document.getElementById("CRSAssist3").innerHTML = "";
    document.getElementById("CRSLink").innerHTML = texto;
    document.getElementById("CRSLink").href = "https://village.inqubacx.com/CEMS/#/Incident/" + integered;
    document.getElementById("CRSLink").target ="_main";
    document.getElementById("CRSLink").className ="button1";
    document.getElementById("offerSave").innerHTML = "Do you want to save the current reference number?";
    document.getElementById("confirmSave").style.display = "block";
    document.getElementById("fullName").innerHTML = "";
    document.getElementById("fnTextBox").style.display = "none";
    document.getElementById("saveButton").style.display = "none";

    counter = 0;
    refNum = texto;

    if(lastid == 0) {
      document.getElementById("savedRefNums").style.display = "none";
    }
    else {
      document.getElementById("savedRefNums").style.display = "block";
    }
  }

  else {
    document.getElementById("ErrorMessage").innerHTML = errMsg.bold().fontcolor("#d9e006");
    document.getElementById("CRSLink").innerHTML = "";
    document.getElementById("offerSave").innerHTML = "";
    document.getElementById("confirmSave").style.display = "none";
    counter++;
    if (counter > 1 || !texto.includes("CRS")) {
      document.getElementById("CRSAssist").innerHTML = errMsg2.bold().fontcolor("#d9e006");
    }
    if (counter > 2 || texto.length != 9) {
      document.getElementById("CRSAssist2").innerHTML = errMsg3.bold().fontcolor("#d9e006");
    }
    if (counter > 3) {
      document.getElementById("CRSAssist3").innerHTML = errMsg4.bold().fontcolor("#d9e006");
    }
  }
}

function saveLink() {
  document.getElementById("fullName").innerHTML = "Comments:";
  document.getElementById("fnTextBox").style.display = "block";
  document.getElementById("saveButton").style.display = "block";
  document.getElementById("offerSave").innerHTML = "";
  document.getElementById("confirmSave").style.display = "none";
}

function saved() {
  var fName = this.fnTextBox.value;
  var entry = document.createElement('li');
  var list = document.getElementById("savedDeets");
  entry.appendChild(document.createTextNode(fName + " - " + refNum + " "));
  entry.setAttribute('id', 'item'+lastid);

  var removeButton = document.createElement('button');
  removeButton.appendChild(document.createTextNode("Remove"));

  removeButton.setAttribute('onClick','removeRef("'+'item'+lastid+'")');
  removeButton.setAttribute('class','button');

  entry.appendChild(removeButton);
  lastid++;
  list.appendChild(entry);

  document.getElementById("fullName").innerHTML = "";
  document.getElementById("fnTextBox").style.display = "none";
  document.getElementById("saveButton").style.display = "none";
  document.getElementById("offerSave").innerHTML = "";
  document.getElementById("confirmSave").style.display = "none";

  if(lastid == 1) {
    document.getElementById("savedRefNums").style.display = "block";
  }
}

function removeRef(itemid) {
  var list = document.getElementById("savedDeets");
  var item = document.getElementById(itemid);
  list.removeChild(item);
  lastid--;
  if(lastid == 0) {
    document.getElementById("savedRefNums").style.display = "none";
  }
}

function clickedLink() {
  document.getElementById("CRSLink").className ="button2";
}
