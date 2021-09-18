// My Questions , the array
const question = [
  {
    question: "What is the capital of California ?",
    answers: [
      { text: "Sacramento", correct: true },
      { text: "Los Angeles", correct: false },
      { text: "San Francisco", correct: false },
      { text: "San Diego", correct: false },
    ],
  },
  {
    question: "What is the capital of Nevada ?",
    answers: [
      { text: "Reno", correct: false },
      { text: "Carson City", correct: true },
      { text: "Las Vegas", correct: false },
      { text: "Laughlin", correct: false },
    ],
  },
  {
    question: "What is the capital of Arizona ?",
    answers: [
      { text: "Tucson", correct: false },
      { text: "Scottsdale", correct: false },
      { text: "Phoenix", correct: true },
      { text: "Sedona", correct: false },
    ],
  },
  {
    question: "What is the capital of Alaska ?",
    answers: [
      { text: "Ketchikan", correct: false },
      { text: "Anchorage", correct: false },
      { text: "Fairbanks", correct: false },
      { text: "Juneau", correct: true },
    ],
  },
  {
    question: "What is the capital of New Mexico ?",
    answers: [
      { text: "Santa Fe", correct: true },
      { text: "Albuquerque", correct: false },
      { text: "Roswell", correct: false },
      { text: "Las Cruces", correct: false },
    ],
  },
];

// Global Variables
var timer = 50;
var index = 0;
var totalPoints = 0;
var timerClock = null;
var score = new Array();

// Restarts the quiz and sets global variables to default values
function playAgain() {
  timer = 50;
  index = 0;
  totalPoints = 0;
  start();
}

// Creates the html elements for questions and options
function create() {
  let main = document.getElementById("quiz");
  main.innerHTML = "";
  if (index < question.length) {
    let q = document.createElement("p");
    q.setAttribute("id", "question");
    q.innerHTML = question[index]["question"];
    main.append(q);
    for (let i = 0; i < 4; i++) {
      let btn = document.createElement("button");
      btn.setAttribute("class", "option");
      btn.innerHTML = i + 1 + ". " + question[index]["answers"][i]["text"];
      btn.onclick = function () {
        check(question[index]["answers"][i]["correct"]);
      };
      main.append(btn);
    }
  } else {
    // Stops the Timer
    clearInterval(timerClock);
    scorePage();
  }
}

// Function is called when quiz is started. Starts timer as well.
function start() {
  timerClock = setInterval(startTimer, 1000);
  if (index < question.length) {
    create();
  }
}

// Function controls the timer and displays the current timer value on page.
function startTimer() {
  if (timer >= 0) {
    document.getElementById("timer").innerHTML = "Time: " + timer;
    timer--;
  } else {
    clearInterval(timerClock);
    scorePage();
  }
}

// Function checks option if right or wrong.
function check(result) {
  index++;
  // If selected option is right, add 10 points and print correct
  if (result) {
    document.getElementById("result").innerHTML = "Correct!";
    totalPoints = totalPoints + 10;
  }
  // If selected option is false, deduct 10 points and print wrong
  else {
    document.getElementById("result").innerHTML = "Wrong!";
    if (totalPoints > 0) {
      totalPoints = totalPoints - 10;
    }
    // in case of wrong, deduct 10 seconds
    if (timer - 10 > 0) {
      timer = timer - 10;
    } else {
      timer = 0;
    }
  }
  // displays the next question
  create();
}

// Function builds the elements for final page.
function finalPage() {
  let name = document.getElementById("initials").value;
  save(name, totalPoints);
  let main = document.getElementById("quiz");
  main.innerHTML = "";
  let h = document.createElement("h1");
  h.innerHTML = "High Scores";
  h.style.color = "purple";
  let initials = document.createElement("input");
  initials.setAttribute("type", "text");
  initials.setAttribute("disabled", "disabled");
  initials.value = name + " - " + totalPoints;
  let btn = document.createElement("button");
  btn.innerHTML = "Play Again";
  btn.id = "playagain";
  btn.onclick = function () {
    playAgain();
  };
  let btn2 = document.createElement("button");
  btn2.innerHTML = "Clear Score Data";
  btn2.id = "clear";
  btn2.onclick = function () {
    clearData();
  };

  main.append(h);
  main.append(initials);
  main.append(document.createElement("br"));
  main.append(document.createElement("br"));
  main.append(btn);
  main.append(btn2);
}

// Function builds elements for score page, where the final score is displayed and users can enter their initials.
function scorePage() {
  let main = document.getElementById("quiz");
  main.innerHTML = "";
  let h = document.createElement("h1");
  h.innerHTML = "All Done!";
  let q = document.createElement("p");
  q.innerHTML = "You Score is " + totalPoints;
  let initials = document.createElement("input");
  initials.setAttribute("id", "initials");
  initials.setAttribute("type", "text");
  initials.setAttribute("placeholder", "Enter your Initials");
  let btn = document.createElement("button");
  btn.id = "submit";
  btn.innerHTML = "Submit";
  btn.onclick = function () {
    finalPage();
  };
  main.append(h);
  main.append(q);
  main.append(initials);
  main.append(document.createElement("br"));
  main.append(document.createElement("br"));
  main.append(btn);
}

// Function saves the user score in local storage.
function save(name, points) {
  let entry = [{ name: name, points: points }];
  score.push(entry);
  localStorage.setItem("score", JSON.stringify(score));
}

// Function removes the score from local storage.
function clearData() {
  localStorage.removeItem("score");
}

// Function builds elements for high score page where scores are displayed
function scoreBoardPage() {
  let main = document.getElementById("quiz");
  main.innerHTML = "";
  let scores = JSON.parse(localStorage.getItem("score"));
  let h = document.createElement("h1");
  h.innerHTML = "High Scores";
  let table = document.createElement("table");
  table.setAttribute("border", 1);
  table.setAttribute("frame", "hsides");
  table.setAttribute("rules", "rows");
  let row = document.createElement("tr");
  let thead = document.createElement("th");
  let thead2 = document.createElement("th");
  let btn = document.createElement("button");
  btn.innerHTML = "Play";
  btn.id = "playagain";
  btn.onclick = function () {
    playAgain();
  };
  thead.innerHTML = "Initials";
  row.append(thead);
  thead2.innerHTML = "Score";
  row.append(thead2);
  table.append(row);
  for (let i = 0; i < scores.length; i++) {
    j = 0;
    let row1 = document.createElement("tr");
    let column1 = document.createElement("td");
    let column2 = document.createElement("td");
    column1.innerHTML = scores[i][j]["name"];
    column2.innerHTML = scores[i][j++]["points"];
    row1.append(column1);
    row1.append(column2);
    table.append(row1);
    j++;
  }
  main.append(h);
  main.append(table);
  main.append(document.createElement("br"));
  main.append(btn);
  document.getElementById("result").innerHTML = "";
}
