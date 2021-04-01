p1_name= localStorage.getItem("player1");
p2_name= localStorage.getItem("player2"); 

p1score= 0;
p2score= 0;

document.getElementById("name1").innerHTML=p1_name + " : ";
document.getElementById("name2").innerHTML=p2_name + " : ";

document.getElementById("p1_score").innerHTML= "  "+ p1score;
document.getElementById("p2_score").innerHTML= "  "+ p2score;

document.getElementById("player_question").innerHTML="Question turn: "+ p1_name;
document.getElementById("player_answer").innerHTML="Answer turn: "+ p2_name;

function send(){
get_word= document.getElementById("word").value;
word=get_word.toLowerCase();
console.log("Question in Lower Case is: "+word);

c1= word.charAt(1);
console.log(c1);
 
half= Math.floor(word.length/2);
c2= word.charAt(half);
console.log(c2);

last= word.length-1;
c3= word.charAt(last);
console.log(c3);

remove_c1= word.replace(c1, " _");
remove_c2= remove_c1.replace(c2, " _");
remove_c3= remove_c2.replace(c3, " _");

question_word= "<h4 id='q_display'>Q: " + remove_c3 + "</h4>";
input_box= "<br> Answer: <input type='text'id='check_box'>";
check_button= "<br><br> <button class='btn btn-info'onclick='check()'>CHECK </button>";

row= question_word + input_box + check_button;

document.getElementById("output").innerHTML= row;
document.getElementById("word").value= "";
}

function back(){
window.location="index.html";


}

q_turn= "player1";
ans_turn= "player2";

function check(){
get_answer= document.getElementById("check_box").value;
answer= get_answer.toLowerCase();
console.log("Answer in Lower Case is: " + answer);

if (answer==word){

if(ans_turn=="player1"){
p1score= p1score+1;
document.getElementById("p1_score").innerHTML=p1score;}
else{
p2score=p2score+1;
document.getElementById("p2_score").innerHTML=p2score;}

if(q_turn=="player1"){
q_turn="player2";
document.getElementById("player_question").innerHTML="Question turn: "+p2_name;}
else{
q_turn="player1";
document.getElementById("player_question").innerHTML="Question turn: "+p1_name;}

if(ans_turn=="player1"){
ans_turn= "player2";
document.getElementById("player_answer").innerHTML="Answer turn: "+p2_name;}
else{
ans_turn="player1";
document.getElementById("player_answer").innerHTML="Answer turn: "+p1_name;}

document.getElementById("output").innerHTML="";

}

























}


