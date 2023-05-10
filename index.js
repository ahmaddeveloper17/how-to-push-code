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


