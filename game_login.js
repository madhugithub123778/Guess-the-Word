function addUser(){
name1= document.getElementById("player1_name").value;
name2= document.getElementById("player2_name").value;
localStorage.setItem("player1", name1);
localStorage.setItem("player2", name2);
window.location="game.html";}