// Dom Methods Here ! 

var body = document.body;

// View High Score
var aEl = document.createElement('a-href');
aEl.textContent = 'View High Score';
aEl.style.fontFamily = 'Arial, Helvetica, sans-serif';
body.appendChild(aEl);

// Timer
var timerDis = document.createElement('p');
timerDis.textContent = 'Time: 0';
timerDis.style.fontFamily = 'Arial, Helvetica, sans-serif';
body.appendChild(timerDis);

// Quiz 
var h1El = document.createElement('h1');
h1El.textContent = 'Coding Quiz Challenge';
h1El.setAttribute('style', 'margin:auto; width:100%; text-align:center; padding:20px');
h1El.style.fontFamily = 'Arial, Helvetica, sans-serif';
body.appendChild(h1El);

// Add a centered text
var pEl = document.createElement('p');
pEl.textContent =
  'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
pEl.setAttribute('style', 'margin:auto; width:100%; text-align:center; padding-bottom:20px');
pEl.style.fontFamily = 'Arial, Helvetica, sans-serif';
body.appendChild(pEl);

// Start Quiz Button
var btnEl = document.createElement('button');
btnEl.innerHTML = "Start Quiz";
btnEl.setAttribute('style', 'margin:auto; display:flex; border-radius:4px; background: mediumpurple; color:white;');
btnEl.style.fontFamily = 'Arial, Helvetica, sans-serif';
document.body.appendChild(btnEl);





// Array for Questions for Quiz
var myQuestions = [
  {
    question: "What is the capital of Nevada?",
    answers: {
      a: "Carson City",
      b: "Las Vegas",
      c: "Reno",
      d: "Sparks"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the capital of California?",
    answers: {
      a: "Los Angeles",
      b: "Sacramento",
      c: "San Diego",
      d: "San Francisco"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the capital of Texas?",
    answers: {
      a: "Dallas",
      b: "Houston",
      c: "Austin",
      d: "San Antonio"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the capital of Alaska?",
    answers: {
      a: "Anchorage",
      b: "Fairbanks",
      c: "Ketchikan",
      d: "Juneau"
    },
    correctAnswer: "d"
  },
  {
    question: "What is the capital of Arizona?",
    answers: {
      a: "Phoenix",
      b: "Tucson",
      c: "Mesa",
      d: "Scottsdale"
    },
    correctAnswer: "a"
  }
];