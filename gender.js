
if(document.getElementById('male').checked) {
  //Male radio button is checked
    document.getElementById("WomensClasses").style.display = "none";
    document.getElementById("MensClasses").style.display = "block";
}  
    
document.getElementById("male").addEventListener("click", function(){
    document.getElementById("WomensClasses").style.display = "none";
    document.getElementById("MensClasses").style.display = "block";
});

document.getElementById("female").addEventListener("click", function(){
    document.getElementById("MensClasses").style.display = "none";
    document.getElementById("WomensClasses").style.display = "block";
});
