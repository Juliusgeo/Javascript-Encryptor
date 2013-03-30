//var declarations
var primeNum = 0
var finalMessage=[];


var checkPrime=function(x){
    for(i=0; i<x+1; i++){
        if(i%x=0){
            return false
        }
        else{
            return true;
            continue;
        }
    }
}
var GetPrime=function(lowBound, highBound){
var x = (Math.round(Math.random()*(highBound-lowBound))+lowBound);
if (checkPrime(x)===true){
primeNum = x;
}
else{
GetPrime(lowBound, highBound);
}
};
return true;
};
GetPrime(100000000000000, 999999999999999)
primeNumA = primeNum;
unencryptedMessage=prompt(“What do you want to encrypt?”)
var j = unencryptedMessage.length
for (i=1; i<j; 1++){
  unencryptedMessage.charCodeAt(i)*encryptorVar=q;
  finalMessage.append(q);

};
alert(finalMessage.toString(););
