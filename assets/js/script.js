var body = document.body;



// High Scores
var h4El = document.createElement('h4');
h4El.textContent = 'High Scores :';
h4El.setAttribute('id', 'high-score');
h4El.style.fontFamily = 'Arial, Helvetica, sans-serif';
body.appendChild(h4El);

// Timer
var h4Timer = document.createElement('h4');
h4Timer.textContent = 'Time :';
h4Timer.setAttribute('id', 'timer-display');
h4Timer.style.fontFamily = 'Arial, Helvetica, sans-serif'
body.appendChild(h4Timer);

// Quiz 
var h1El = document.createElement('h1');
h1El.textContent = 'Coding Quiz Challenge';
h1El.setAttribute('id', 'front-header');
h1El.setAttribute('style', 'margin:auto; width:100%; text-align:center; padding:20px');
h1El.style.fontFamily = 'Arial, Helvetica, sans-serif';
body.appendChild(h1El);

// Add a centered text
var pEl = document.createElement('p');
pEl.textContent =
  'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
pEl.setAttribute('id', 'front-text');
pEl.setAttribute('style', 'margin:auto; width:100%; text-align:center; padding-bottom:20px');
pEl.style.fontFamily = 'Arial, Helvetica, sans-serif';
body.appendChild(pEl);

// Start Quiz Button
var btnEl = document.createElement('button');
btnEl.innerHTML = "Start Quiz";
btnEl.setAttribute('id', 'startBtn');
btnEl.setAttribute('style', 'margin:auto; display:flex; border-radius:4px; background: mediumpurple; color:white;');
btnEl.style.fontFamily = 'Arial, Helvetica, sans-serif';
document.body.appendChild(btnEl);


// Create Variable for timer

// onclick Event
btnEl.onclick = function() {
  var time = 0
  setInterval(function() {
    time ++
    console.log(time);
  }, 1000)
};

// Shows questions in array



// See the choices








var myQuestions = 
[
  {
    question: "What is the capital of Neveda?",
    choices: ["Carson City", "Las Vegas", "Reno", "Sparks"],
    answer: 1
  },

  {
    question: "What is the capital of California?",
    choices: ["Los Angeles", "Sacramento", "San Diego", "San Francisco"],
    answer: 2
  },
  {
    question: "What is the capital of Texas?",
    choices: ["Dallas", "Houston", "Austin", "San Antonio"],
    answer: 3
  },
  {
    question: "What is the capital of Alaska?",
    choices: ["Anchorage", "Fairbanks", "Ketchikan", "Juneau"],
    answer: 4
  },
  {
    question: "What is the capital of Arizona?",
    choices: ["Phoenix", "Tucson", "Mesa", "Scottsdale"],
    answer: 1
  },
];
