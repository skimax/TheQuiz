$(document).ready(function() {

// Start of JS File
// http://codepen.io/anon/pen/KwJXGE
var count = 0,
    question_container, Quiz, choice, choices, question, part1, part2, part3, part4, part5, answer = 0;
var questions = [
    ["Which One of Them is Best Player in the NBA?", "Allen Iverson", "Lebron James", "Kobe Bryant", "Michael Jordan", "D"],
    ["Which Players Scored The Most Goal in the World Cup?", "Ronaldo da Lima", "Guer Muller", "Miroslav klose", "Pele", "C"],
    ["Which One of Those NFL Player Died in the Field", "Adrian Peterson", "Aaron Roger", "Peyton Manning", "Maxim Sylvain", "A"],
    ["Who had the greatest heavyweight boxer of all time", "Lenox Lewis", "Muhammad Ali", "Mike Tyson", "Evander Holyfield", "B"],
    ["Who had the MVP in 2000-2001", "Tim Duncan", "Shaquille O'Neal", "Allen Iverson", "Kobe Bryant", "C"]



];

function Ti(x) {
    return document.getElementById(x);

}

function renderquestion() {
    Quiz = Ti("quiz");
    if (count >= questions.length) {
        Quiz.innerHTML = "<h2> You got " + answer + " of " + questions.length + " Questions correct <h2>"
        Ti("question_container").innerHTML = "Completed";
        Quiz.innerHTML += "<button id ='again'>Try Again</button>"
        count = 0;
        answer = 0;
        return false;

    }

    Ti("question_container").innerHTML = "Question " + (count + 1) + " of " + questions.length;
    question = questions[count][0];
    part1 = questions[count][1];
    part2 = questions[count][2];
    part3 = questions[count][3];
    part4 = questions[count][4];
    part5 = questions[count][5];

    // I changed the logic a tiny bit. 
    // The browser was autoclosing the tag since we were using 
    // innerHTML on every line. It does not allow malformed tags to be 
    // added, so it would autoclose.
    // It now creates the complete HTML string, and THEN inserts 
    // it into the page.

    // Creating an empty string to store the html
    var quizHTMLString = "";

    // Adding all the content to the string
    quizHTMLString += "<h2>" + question + "</h2>";
    quizHTMLString += "<div class='quiz-answers'>";
    quizHTMLString += "<input type='radio' name='choices' value='A'>" + part1 + "<br>";
    quizHTMLString += "<input type='radio' name='choices' value='B'>" + part2 + "<br>";
    quizHTMLString += "<input type='radio' name='choices' value='C'>" + part3 + "<br>";
    quizHTMLString += "<input type='radio' name='choices' value='D'>" + part4 + "<br><br>";
    quizHTMLString += "<button id= 'check'>Submit Button</button>";
 


    quizHTMLString += "</div><!-- Closes quiz answers -->";

    // Adding the html string to the page
    Quiz.innerHTML = quizHTMLString;
}


function check_answer() {

choices = document.getElementsByName("choices");
 for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
   
   }


   if (choice == questions[count][5]) {
        answer++;
        Quiz.innerHTML = "<h2> ***Correct Answer*** <h2>";
        Quiz.innerHTML += "<button id = 'Conti'>Continue</button>"
    } 
    else {

        Quiz.innerHTML = "<h2> Ooops!!! Sorry Your answer is incorrect continue the quiz <h2>";
        Quiz.innerHTML += "<button id = 'Conti'>Continue</button>"

    }

}


function try_again() {

    renderquestion();

}

function Continue() {
    count++;
    renderquestion();

}


window.addEventListener("load", renderquestion, false);
$('body').on('click', '#check', check_answer );
 $('body').on('click', '#again', try_again);
$('body').on('click', '#Conti', Continue );

});

