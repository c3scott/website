let jstext = "And Javascript!";
let introtext = "Everything on this website is hand-coded by me using HTML and CSS. Click on me!"
let introappear = true;
console.log(introtext)


document.getElementById("introbutton").onclick = function(){
    if(introappear == true){
        document.getElementById("intro").innerHTML = jstext
        introappear = false
    }else{
document.getElementById("intro").innerHTML = introtext
introappear = true
    }
}
