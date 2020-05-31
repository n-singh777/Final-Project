// QUIZ
//VARIABLES
let answer;
let points = 0;

//EVENT LISTENERS
document.getElementById("mark").addEventListener("click", displayResults);

//EVENT FUNCTIONS
function displayResults() {
  //Question 1

  //Input Value
  let answer = document.getElementById("Ans1").value;
  answer = answer.toLowerCase();

  //Use binary if statements
  if (answer == "1853") {
    points++;
  } else {
    document.getElementById("q1").style.color = "red";
    points += 0;
  }

  //Question 2

  //Input Value
  let answer2 = document.getElementById("Ans2").value;
  answer2 = answer2.toLowerCase();

  //Use binary if statements
  if (answer2 == "theodorus" || answer2 == "theodorus van gogh") {
    points++;
  } else {
    document.getElementById("q2").style.color = "red";
    points += 0;
  }

  //Question 3

  //Input Value
  let answer3 = document.getElementById("Ans3").value;
  answer3 = answer3.toLowerCase();

  //Use binary if statements
  if (answer3 == "anna" || answer3 == "anna cornelia carbentus") {
    points++;
  } else {
    document.getElementById("q3").style.color = "red";
    points += 0;
  }

  //Question 4

  //Input Value
  let answer4 = document.getElementById("Ans4").value;
  answer4 = answer4.toLowerCase();

  //Use binary if statements
  if ( answer4 == "netherlands") {
    points++;
  } else {
    document.getElementById("q4").style.color = "red";
    points += 0;
  }

  //Question 5

  //Input Value
  let answer5 = document.getElementById("Ans5").value;
  answer5 = answer5.toLowerCase();

  //Use binary if statements
  if (answer5 == "watercolour" || answer5 == "watercolours" || answer5 == "watercolors" || answer5 == "watercolor") {
    points++;
  } else {
    document.getElementById("q5").style.color = "red";
    points += 0;
  }

  //Question 6

  //Input Value
  let answer6 = document.getElementById("Ans6").value;
  answer6 = answer6.toLowerCase();

  //Use binary if statements
  if (answer6 == "oil painting" || answer6 == "oil paint" || answer6 == "oil paintings" || answer6 == "oil paints") {
    points++;
  } else {
    document.getElementById("q6").style.color = "red";
    points += 0;
  }

  //Question 7

  //Input Value
  let answer7 = document.getElementById("Ans7").value;
  answer7 = answer7.toLowerCase();

  //Use binary if statements
  if (answer7 == "yellow") {
    points++;
  } else {
    document.getElementById("q7").style.color = "red";
    points += 0;
  }

  //Question 8

  //Input Value
  let answer8 = document.getElementById("Ans8").value;
  answer8 = answer8.toLowerCase();

  //Use chain if statements
  if ( answer8 == "37" || answer8 == "thirty-seven" || answer8 == "thirty seven") {
    points++;
  } else {
    document.getElementById("q8").style.color = "red";
    points += 0;
  }

  //Mark Quiz (Build a message and calculate the total)

  //Calculate
  let percentage = (points / 8) * 100;
  let results = "Your total score is " + points + "/8 " +  percentage + "%.";
 
  //Build a message 
  document.getElementById("output").style.color = "blue";
  document.getElementById("output").innerHTML = results;
}
