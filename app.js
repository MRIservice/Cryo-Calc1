 var cryoList = document.getElementById("cryoList");
 var newLhe = document.getElementById("newLhe");
//var oldLhe = document.getElementById("oldLhe");
//var oldDate = document.getElementById("oldDate");

async function cryoCalc(){
	var response = await fetch("/cryo");
  	var json = await response.json();
  	var reversedcryo = json.cryo.reverse();

	for (var i in reversedcryo) {
    	var oldLhe = reversedcryo[0];
	
	//alert(oldLhe);
  }

alert(reversedcryo[0]);
};

async function submitCryo() {

  var endDateEpoch = Date.now();
  var endDate = new Date(endDateEpoch);
	endDate = endDate.toLocaleDateString('en-US');
   
  var magData = { 
	endDate: endDate,
	newLhe : newLhe.value
  };

  await fetch("/cryo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(magData)
  });
  loadcryo();
}

async function loadcryo() {
  var response = await fetch("/cryo");
  var json = await response.json();
  var reversedcryo = json.cryo.reverse();
	
  for (var i in reversedcryo) {
    	var cryo = reversedcryo[i];
    	var li = document.createElement("li");
    	var contents = cryo.endDate +  "  "  + cryo.newLhe + "% LHe";
   
    li.textContent = contents;
    cryoList.appendChild(li);
  }
}

window.onload = loadcryo;
