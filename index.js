console.log(document.getElementById("heading"));
var heading = document.getElementById("heading")
function evenodd() {
  var input = document.getElementById("number").value
  var para = document.getElementById("para")
 
  if (input.value % 2 == 0) {
   para.innerHtml="number is even"
  }
  else
 { para.innerHtml="number is odd"}
}

