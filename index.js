

let numa;
let numb;
numa = parseFloat(document.getElementById("numa").value);
numb = parseFloat(document.getElementById("numb").value);

document.getElementById("submit").onclick = function() {

numa = document.getElementById("numa").value;
numb = document.getElementById("numb").value;
numa = numa**2
numb = numb**2
c = Math.sqrt(numa + numb)
document.getElementById("c").innerHTML = "The hypotenuse is " + c.toFixed(1);


}