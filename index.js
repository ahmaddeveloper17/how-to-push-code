// let yourpara = document.getElementById("your-para");
// // yourpara.innerHTML = ("Hello Ahmad");
// yourpara.innerHTML = ("<button> Submit </button>")// ,"<h1> hello </h1>" );
// let mypara = document.getElementById("my-para");
// mypara.innerHTML = ("<b>ZINDABAD</b>");
// mypara.style.backgroundColor = ("red");
// mypara.style.color=("purple");
// mypara.style.width =" 100%";
// setInterval(function () {
    // if (mypara.style.display === "block") {
    //     mypara.style.display = "none"
    // }
    // else{
    //     mypara.style.display =" block"
    // }
//     let width = mypara.style.width ;
//     if (width === "100%") {
//         mypara.style.width = "1%"
//     }
//     else{
//         width = +width.replace( "%" ,"");
//         mypara.style.width = width + 1 + "%" ;
//     }
// },10)

// const mypara = document.getElementById("my-para")

const myPara = document.getElementById("my-para");
myPara.innerHTML = "<b>Pakistan Zindabad</b>";
setInterval(function () {
  let color1 =Math.floor(Math.random()*16777215).toString(16);
  let color2 = Math.floor(Math.random()*16777215).toString(16);
  myPara.style.backgroundColor = "#" + color1;
  myPara.style.color = "#" + color2;
}, 500);
















