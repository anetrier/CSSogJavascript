/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Der er kontakt til js/js.js')

/**variabler */

let a = "Ane" // streng
let b = 23 // tal
let c = false
let julemandenFindes = false

const and = "Peking"

alert("Hej " + a)

console.log(b * b)
console.log("Findes julemanden virkelig? " + julemandenFindes)

/**kontrolstrukturer */

if (julemandenFindes === true) {
    console.log("Ja")
  } else {
    console.log("Nej")
  }

/** InnerHTML: sådan */
document.getElementById("titel").innerHTML = "Mojn Do!"

/**
 * JavaScript Introduktion
 */

// let a = "Hej"
// console.log(a)

/** Øvelse: Toggle Class 
 * 
 * Lav en knap, der viser eller skuler en menu
 * 
*/
/*
// HTML:
// tilføj denne knap: <button onclick="viseSkjule()">Skjule eller vise</button>

// JavaScript:
function viseSkjule() {
    var element = document.getElementById("smaller");
    element.classList.toggle("skjuler");
    // flere toggles mv. kan tilføjes her
 }
 */

 function viseSkjule(){
    alert("Tak for i dag!")
    document.getElementById("titel").innerHTML = "Special for you my friend"

 }
