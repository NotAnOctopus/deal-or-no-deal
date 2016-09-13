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
var sheep=false;
var rollercoastersarefun=0;
var existentialcrisis=false;
var platypus=0;

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
  if ((existentialcrisis==false) && (boxlist[k]!=0) && ((k<22) || (boxcount<=2))) {
    document.getElementById("reveal"+k).innerHTML=boxlist[k]>=1 ? "£ "+boxlist[k] : 100*boxlist[k]+"p";
    document.getElementById("reveal"+k).style.backgroundColor=(boxlist[k]>=1000 ? "orangered" : "blue");
    document.getElementById(""+boxlist[k]).style.opacity=0;
    setTimeout(function(){document.getElementById(""+boxlist[k]).style.visibility = "hidden";},1000); // is this line really necessary?
    boxlist[k]=0;
    boxcount--;
    if ((boxcount%3==2) && (boxcount<20)){
      if (sheep==false) {
        existentialcrisis=true;
        document.getElementById("thisbuttonisforwimps").style.visibility="visible";
        document.getElementById("nodeal").style.visibility="visible";
      }
      platypus = offer(boxlist, boxcount);
      document.getElementById("offer").innerHTML="Banker's Offer" + ((sheep==true) ? " would've been" : "") + ": £ " + +platypus.toPrecision(2);
    }
    else if ((boxcount>2) && (boxcount<20)) {
      document.getElementById("offer").innerHTML="Pick "+(boxcount+1)%3+" more box"+(boxcount%3==0 ? "" : "es");
    }
    else if (boxcount>=20) {
      document.getElementById("offer").innerHTML="Pick "+(boxcount-17)+" more boxes";
    }
    else {
      if ((sheep==false) && (rollercoastersarefun==0)) {
        rollercoastersarefun = boxlist[22];
      }
      document.getElementById("offer").innerHTML = "You won: " + (rollercoastersarefun>=1 ? "£ "+rollercoastersarefun : 100*rollercoastersarefun+"p");
    }
  }
}

function icecream(flavour) {
  if (document.getElementById("nodeal").style.visibility="visible") {
    existentialcrisis=false;
    document.getElementById("thisbuttonisforwimps").style.visibility="hidden";
    document.getElementById("nodeal").style.visibility="hidden";
    document.getElementById("offer").innerHTML= boxcount>2 ? "Pick 3 more boxes" : "Click on your box to reveal what was inside";
    if (flavour) {
      sheep=true;
      rollercoastersarefun = +platypus.toPrecision(2);
    }
  }
}
