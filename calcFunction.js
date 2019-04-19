function cryoCalc() {
  
  var newLhe = 0;
  var oldLhe = 0;
  var oldDate = 0;
      oldDate = document.getElementById("oldDate").value  
      newLhe = document.getElementById("newLhe").value
      oldLhe = document.getElementById("oldLhe").value
        
        if(newLhe < 0 || newLhe > 100) {
          alert("Please enter value between 1 and 100")
        return;
        } 
  
      oldLhe = Math.round(oldLhe*10)/10
      newLhe = Math.round(newLhe*10)/10
  
  var oneDay = 24*60*60*1000;
  var endDateEpoch = Date.now();
  var endDate = endDateEpoch.Date;
  var cryoDiff = Math.round((newLhe - oldLhe)*10)/10
  var beginDateEpoch = new Date(oldDate).getTime();
  var days = Math.round(Number(endDateEpoch - beginDateEpoch)/oneDay)
  var boilRate = Math.round((cryoDiff/days)*1000)/1000 + " %/day"
      cryoDiff = cryoDiff + " % Lhe"
  
        if(days<0) {
          days =1;
        return;
        } 
  
  var magData = { 
        "endDate": endDate,
	  		"newLhe": newLhe,
	  		"oldDate": oldDate,
	  		"oldLhe": oldLhe,
	  		"cryoDiff": cryoDiff,                                                                                                                                                                                                                                  
	  		"boilRate": boilRate
          }
  
  return magData;
}

console.log(magData.cryoDiff)

