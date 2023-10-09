//Getting Text Element
var sehwagText = document.getElementById("sehwag-text")
var sachinText = document.getElementById("sachin-text")
var gambhirText = document.getElementById("gambhir-text")
var kohliText = document.getElementById("kohli-text")
var dhoniText = document.getElementById("dhoni-text")
var yuvrajText = document.getElementById("yuvraj-text")

var rainaText = document.getElementById("raina-text")
var harbhajanText = document.getElementById("harbhajan-text")
var zaheerText = document.getElementById("zaheer-text")
var munafText = document.getElementById("munaf-text")
var sreesanthText = document.getElementById("sreesanth-text")

//Getting image Element
var sehwag = document.getElementById("sehwag")
var sachin = document.getElementById("sachin")
var gambhir = document.getElementById("gambhir")
var kohli = document.getElementById("kohli")
var dhoni = document.getElementById("dhoni")
var yuvraj = document.getElementById("yuvraj")
var left = document.getElementsByClassName("left")
var top = document.getElementsByClassName("top")

var raina = document.getElementById("raina")
var harbhajan = document.getElementById("harbhajan")
var zaheer = document.getElementById("zaheer")
var munaf = document.getElementById("munaf")
var sreesanth = document.getElementById("sreesanth")
// var all = document.querySelectorAll("#sehwag,#sachin,#gambhir,#kohli,#dhoni,#yuvraj,#raina,#harbhajan,#zaheer,#munaf,#sreesanth")




//Defining Function
function show(a){
    
    // top.style.display="none";
    // left.style.display="none";

    // all.style.display="none";
    if (a.style.display=="none") {
        var check = "closed"
    } else if (a.style.display=="block") {
        var check = "opened"
    }
    if (check=="closed") {
        // top.style.display="none";
        // left.style.display="none";
        a.style.display="block"
    } else {
        a.style.display="none"
    }
}

//applying function
sachinText.onclick=()=>show(sachin)
sehwagText.onclick=()=>show(sehwag)
gambhirText.onclick=()=>show(gambhir)
kohliText.onclick=()=>show(kohli)
dhoniText.onclick=()=>show(dhoni)
yuvrajText.onclick=()=>show(yuvraj)

rainaText.onclick=()=>show(raina)
harbhajanText.onclick=()=>show(harbhajan)
zaheerText.onclick=()=>show(zaheer)
munafText.onclick=()=>show(munaf)
sreesanthText.onclick=()=>show(sreesanth)