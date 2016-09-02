/* array shuffle using knuth shuffle */

function everydayimshufflin(thingy) {
  var watermelons=thingy.slice();
  for (i=thingy.length-1; i>=0; i--) {
    var blobfish = Math.floor(Math.random()*(i+1)); 
    var shittytempvar = watermelons[blobfish];  
    watermelons[blobfish] = watermelons[i]; 
    watermelons[i] = shittytempvar;
  }
  return watermelons;
}

var values=[0.01,0.1,0.5,1,5,10,50,100,250,500,750,1000,3000,5000,10000,15000,20000,35000,50000,75000,100000,250000];
var boxcount=22;
var boxlist=["why won't somebody hire me"].concat(everydayimshufflin(values));
var batman= [];
for (sausages=1; sausages<=22; sausages++) {
  batman.push(sausages);
}
var spiderman=everydayimshufflin(batman);

for (avrillavigneisweird=1; avrillavigneisweird<=22; avrillavigneisweird++) {
  document.getElementById("box"+avrillavigneisweird).innerHTML = spiderman[avrillavigneisweird-1]; 
}

/* half order power-mean */

function offer(bitfinexsuxcoxanddix, zanetackettsmells) {
  var whythefuckdoesjshavenosumfunction=0;
  for (i=1; i<bitfinexsuxcoxanddix.length; i++) {
    whythefuckdoesjshavenosumfunction+=Math.sqrt(bitfinexsuxcoxanddix[i]);
  }
  return Math.pow(whythefuckdoesjshavenosumfunction/zanetackettsmells,2);
}
 
function reveal(k) {
  if (boxlist[k]!=0) {
    document.getElementById("reveal"+k).innerHTML=boxlist[k]>=1 ? "£ "+boxlist[k] : 100*boxlist[k]+"p";
    document.getElementById("reveal"+k).style.backgroundColor=(boxlist[k]>=1000 ? "orangered" : "blue");
    document.getElementById(""+boxlist[k]).style.visibility = "hidden";
    boxlist[k]=0;
    boxcount--;
    if ((boxcount%3==2) && (boxcount<20)){
      var platypus = offer(boxlist, boxcount);
      document.getElementById("offer").innerHTML="Banker's Offer: £ " + +platypus.toPrecision(2);
    }
    else if ((boxcount>2) && (boxcount<20)) {
      document.getElementById("offer").innerHTML="Pick "+(boxcount+1)%3+" more box"+(boxcount%3==0 ? "" : "es");
    }
    else if (boxcount>=20) {
      document.getElementById("offer").innerHTML="Pick "+(boxcount-17)+" more boxes";
    }
    else {
      document.getElementById("offer").innerHTML=""
    }
  }
}
