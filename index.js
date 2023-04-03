function evenodd() {
  var input = document.getElementById("number").value
  var para = document.getElementById("para")
  console.log("para",para);
  if (input%2==0) {
   para.innerHtml="number is even"
  }
  else
  para.innerHtml="number is odd"
}

