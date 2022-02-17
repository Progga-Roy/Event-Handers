
// red backround button
function clicKRed (){
    document.body.style.backgroundColor = "red";
}
// blue backround button
const blueColor = document.getElementById('blueButton');
blueColor.onclick  = clickBlue;
function clickBlue(){
    document.body.style.backgroundColor = "blue";
}
// green backround button
const greenColor = document.getElementById ('greenButton');
greenColor.onclick = function green(){
    document.body.style.backgroundColor = "green"
}
// goldenRod backround button
const goldenColor = document.getElementById('goldenRodButton');
goldenColor.addEventListener('click',goldenColorButton);
function goldenColorButton(){
    document.body.style.backgroundColor ="goldenRod"
}
// hotPink backround button
const pinkColor = document.getElementById('hotpinkButton');
   pinkColor.addEventListener('click', function(){
       document.body.style.backgroundColor = "pink";
   })
//    lightBlue backround button
   const lightBlueColor = document.getElementById('lightBlueButton').addEventListener('click', function (){
    document.body.style.backgroundColor = "lightblue"
});