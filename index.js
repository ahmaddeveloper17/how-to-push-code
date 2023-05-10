//  function over() {
// document.write("<h1>hello pakistan</h1>");}
// function out() {
//    document.write("World Ends Tomorrow");
// }
function over() {
   document.getElementById("para").className = "changebg1"//style.backgroundColor= "red"
}
function out() {
   document.getElementById("para").className = "changebg2"//style.backgroundColor= "blue"
}
function over1() {
   document.getElementById("para1").className = "changebg3"//style.backgroundColor= "red"
}
function out1() {
   document.getElementById("para1").className = "changebg4"//style.backgroundColor= "blue"
}
function over2() {
   document.getElementById("para2").className = "changebg5"//style.backgroundColor= "red"
}
function out2() {
   document.getElementById("para2").className = "changebg6"//style.backgroundColor= "blue"
}
function over3() {
   document.getElementById("para3").className = "changebg7"//style.backgroundColor= "red"
}
function out3() {
   document.getElementById("para3").className = "changebg8"//style.backgroundColor= "blue"
}
function over4() {
   document.getElementById("para4").className = "changebg9"//style.backgroundColor= "red"
}
function out4() {
   document.getElementById("para4").className = "changebg10"//style.backgroundColor= "blue"
}
function over5() {
   document.getElementById("para5").className = "changebg11"//style.backgroundColor= "red"
}
function out5() {
   document.getElementById("para5").className = "changebg12"//style.backgroundColor= "blue"
}
function over6() {
   document.getElementById("para6").className = "changebg13"//style.backgroundColor= "red"
}
function out6() {
   document.getElementById("para6").className = "changebg14"//style.backgroundColor= "blue"
}
function over7() {
   document.getElementById("para7").className = "changebg15"//style.backgroundColor= "red"
}
function out7() {
   document.getElementById("para7").className = "changebg16"//style.backgroundColor= "blue"
}
function over8() {
   document.getElementById("para8").className = "changebg17"//style.backgroundColor= "red"
}
function out8() {
   document.getElementById("para8").className = "changebg18"//style.backgroundColor= "blue"
}
function over9() {
   document.getElementById("para9").className = "changebg19"//style.backgroundColor= "red"
}
function out9() {
   document.getElementById("para9").className = "changebg20"//style.backgroundColor= "blue"
}
function over10() {
   document.getElementById("para10").className = "changebg21"//style.backgroundColor= "red"
}
function out10() {
   document.getElementById("para10").className = "changebg22"//style.backgroundColor= "blue"
}
function over11() {
   document.getElementById("para11").className = "changebg23"//style.backgroundColor= "red"
}
function out11() {
   document.getElementById("para11").className = "changebg24"//style.backgroundColor= "blue"
}
function over12() {
   document.getElementById("para12").className = "changebg25"//style.backgroundColor= "red"
}
function out12() {
   document.getElementById("para12").className = "changebg26"//style.backgroundColor= "blue"
}
function over13() {
   document.getElementById("para13").className = "changebg27"//style.backgroundColor= "red"
}
function out13() {
   document.getElementById("para13").className = "changebg28"//style.backgroundColor= "blue"
}

function youtubepage() {
   window.location= "https://www.youtube.com/"
}
function mygithublink() {
   window.location= "https://github.com/ahmaddeveloper17"
}
function printpage() {
   window.print()
}
let car = [
   {
      color : "red",
      no : 2015 ,
      modal : "honda"
   },
   {
      color : "green",
      no : 2016 ,
      modal : "tayota"
   },
   {
      color : "blue",
      no : 2017 ,
      modal : "honda"
   },
   {
      color : "yellow",
      no : 2018 ,
      modal : "bmw"
   },
   {
      color : "gray",
      no : 2019 ,
      modal : "honda"
   },
   {
      color : "black",
      no : 2020 ,
      modal : "bugatti"
   },
   {
      color : "purple",
      no : 2021 ,
      modal : "bmw"
   },
   {
      color : "pink",
      modal : 2022 ,
      modal : "honda"
   },
      {
      color : "green",
      no : 2023,
      modal : "tayota"
   },
   {
      color : "red",
      no : 2023 ,
      modal : "honda"
   },
   {
      color : "purple",
      no : 2022 ,
      modal : "honda"
   },
   {
      color : "sky",
      no : 2022 ,
      modal : "tayota"
   },
   {
      color : "white",
      no : 2015 ,
      modal : "honda"
   }
]
for (let index = 0; index < car.length; index++) {
   const Element = car[index];
   if (Element.modal === "tayota") {
      console.log(Element. modal);
   }
}


