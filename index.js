function shout(string){

  return string.toUpperCase();

}

function whisper(string){

return string.toLowerCase();

}

function logShout(string){
  var UpperCaseStr = shout(string);
  console.log(UpperCaseStr)
}

function logWhisper(string){
  var LowerCaseStr = whisper(string);
  console.log(LowerCaseStr)
}


function sayHiToGrandma(string){
  return string.toLowerCase();
  return "I can\'t hear you!"
}
