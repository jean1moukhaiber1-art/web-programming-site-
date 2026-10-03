// ======================================================
// QUESTIONS
// ======================================================
const questions = [

// ======================================================
// QUESTION 1
// ======================================================
{
  question:
    "Which country has the longest total coastline in the world?",
  choices: ["Australia", "Russia", "Canada", "Indonesia"],
  answer: 2,
  explanation:
    "Canada's coastline stretches for approximately 202,080 kilometers (125,567 miles). Thanks to its thousands of Arctic islands and highly indented bays, its coastline is vastly longer than Russia's or Australia's."
},

// ======================================================
// QUESTION 2
// ======================================================
{
  question:
    "In HTML, what does the HTTP status code 418 famously mean?",
  choices: [
    "Server Timeout",
    "I'm a teapot",
    "Resource Locked",
    "Bad Gateway"
  ],
  answer: 1,
  explanation:
    "Defined in 1998 as part of an April Fools' joke specification called the Hyper Text Coffee Pot Control Protocol (HTCPCP/1.0), status code 418 specifies that the server refuses to brew coffee because it is, in fact, a teapot."
},

// ======================================================
// QUESTION 3
// ======================================================
{
  question:
    "What was the shortest war in recorded history?",
  choices: [
    "The Football War",
    "The Anglo-Zanzibar War",
    "The Six-Day War",
    "The Franco-Prussian War"
  ],
  answer: 1,
  explanation:
    "Fought on August 27, 1896, between the British Empire and the Sultanate of Zanzibar, the conflict lasted between 38 and 45 minutes before a truce was called following a naval bombardment of the palace."
},

// ======================================================
// QUESTION 4
// ======================================================
{
  question:
    "What is the only sea on Earth that does not have a land coastline?",
  choices: [
    "Caspian Sea",
    "Sargasso Sea",
    "Coral Sea",
    "Adriatic Sea"
  ],
  answer: 1,
  explanation:
    "Located entirely within the Atlantic Ocean, the Sargasso Sea is bounded not by land, but by four ocean currents forming an oceanic gyre."
},

// ======================================================
// QUESTION 5
// ======================================================
{
  question:
    "Which of these animals has the highest blood pressure in the world?",
  choices: [
    "Blue Whale",
    "Cheetah",
    "Giraffe",
    "Flea"
  ],
  answer: 2,
  explanation:
    "A giraffe's heart must pump blood up a 2-meter-long neck to reach its brain. To accomplish this, its systemic blood pressure is roughly double that of a healthy human, around 280/180 mmHg."
},

// ======================================================
// QUESTION 6
// ======================================================
{
  question:
    "Venus is the hottest planet in our solar system, but which planet is closest to the Sun?",
  choices: [
    "Venus",
    "Mercury",
    "Mars",
    "Jupiter"
  ],
  answer: 1,
  explanation:
    "Although Mercury is closest to the Sun, Venus holds the title of hottest planet, averaging 465°C / 870°F, because its dense atmosphere traps heat via an extreme greenhouse effect."
},

// ======================================================
// QUESTION 7
// ======================================================
{
  question:
    "Which programming language was originally named Mocha, then renamed LiveScript, before settling on its final name?",
  choices: [
    "Java",
    "Python",
    "JavaScript",
    "PHP"
  ],
  answer: 2,
  explanation:
    "Created by Brendan Eich at Netscape in 10 days in 1995, it was code-named Mocha, launched as LiveScript, and quickly rebranded to JavaScript to capitalize on Java's popularity at the time."
},

// ======================================================
// QUESTION 8
// ======================================================
{
  question:
    "What famous landmark was built as the temporary entrance arch for the 1889 World's Fair?",
  choices: [
    "Arc de Triomphe",
    "Empire State Building",
    "Eiffel Tower",
    "Gateway Arch"
  ],
  answer: 2,
  explanation:
    "Engineered by Gustave Eiffel's firm for the Exposition Universelle of 1889 marking the French Revolution centennial, it was initially intended to be dismantled after 20 years."
},

// ======================================================
// QUESTION 9
// ======================================================
{
  question:
    "Which artist famously painted The Starry Night while staying at a mental asylum in Saint-Rémy-de-Provence?",
  choices: [
    "Claude Monet",
    "Vincent van Gogh",
    "Pablo Picasso",
    "Salvador Dalí"
  ],
  answer: 1,
  explanation:
    "Van Gogh painted The Starry Night in June 1889 from his bedroom window at the Saint-Paul-de-Mausole asylum, depicting the view just before sunrise with an idealized village added from memory."
},

// ======================================================
// QUESTION 10
// ======================================================
{
  question:
    "What was the very first video uploaded to YouTube in April 2005?",
  choices: [
    "Charlie Bit My Finger",
    "Me at the zoo",
    "Evolution of Dance",
    "Keyboard Cat"
  ],
  answer: 1,
  explanation:
    "Uploaded on April 23, 2005, by YouTube co-founder Jawed Karim, the 19-second video features him standing in front of elephants at the San Diego Zoo."
},

// ======================================================
// QUESTION 11
// ======================================================
{
  question:
    "The Great Pyramid of Giza was built as a tomb for which Egyptian Pharaoh?",
  choices: [
    "Tutankhamun",
    "Ramesses II",
    "Khufu",
    "Cleopatra"
  ],
  answer: 2,
  explanation:
    "Commissioned during the Fourth Dynasty of the Old Kingdom around 2560 BC, the Great Pyramid was built for Pharaoh Khufu, known to the Greeks as Cheops."
},

// ======================================================
// QUESTION 12
// ======================================================
{
  question:
    "What is the hardest naturally occurring substance on Earth?",
  choices: [
    "Titanium",
    "Quartz",
    "Diamond",
    "Graphene"
  ],
  answer: 2,
  explanation:
    "On the Mohs scale of mineral hardness, diamond ranks at the maximum value of 10. Graphene is stronger in tensile strength, but diamond remains the hardest naturally occurring mineral."
},

// ======================================================
// QUESTION 13
// ======================================================
{
  question:
    "Which film was the first animated movie ever nominated for the Academy Award for Best Picture?",
  choices: [
    "Snow White and the Seven Dwarfs",
    "The Lion King",
    "Beauty and the Beast",
    "Toy Story"
  ],
  answer: 2,
  explanation:
    "At the 64th Academy Awards in 1992, Disney's Beauty and the Beast became the first animated feature nominated for Best Picture before the Best Animated Feature category existed."
},

// ======================================================
// QUESTION 14
// ======================================================
{
  question:
    "Born in Beirut in 1965, who was the first Lebanese-born player to ever be drafted and play in the NBA?",
  choices: [
    "Wael Arakji",
    "Fadi El Khatib",
    "Rony Seikaly",
    "Brian Beshara"
  ],
  answer: 2,
  explanation:
    "Rony Seikaly was born in Beirut, played college basketball at Syracuse, and was selected 9th overall in the 1988 NBA Draft as the first-ever draft pick for the Miami Heat."
},

// ======================================================
// QUESTION 15
// ======================================================
{
  question:
    "Lebanon made its Winter Olympic debut in 1948 in St. Moritz. In which sport did Lebanon win its first-ever Olympic medals (Summer Olympics)?",
  choices: [
    "Boxing",
    "Greco-Roman Wrestling",
    "Weightlifting",
    "Shooting"
  ],
  answer: 1,
  explanation:
    "Lebanon's first Olympic medals were won at the 1952 Helsinki Games in Greco-Roman Wrestling: Zakaria Chihab won Silver in bantamweight and Khalil Taha won Bronze in welterweight."
},

// ======================================================
// QUESTION 16
// ======================================================
{
  question:
    "In 1961, Soviet cosmonaut Yuri Gagarin became the first human in outer space aboard which spacecraft?",
  choices: [
    "Sputnik 1",
    "Vostok 1",
    "Soyuz 1",
    "Voskhod 1"
  ],
  answer: 1,
  explanation:
    "On April 12, 1961, Yuri Gagarin completed a single orbit around Earth aboard Vostok 1, a flight lasting 108 minutes that marked the beginning of human spaceflight."
},

// ======================================================
// QUESTION 17
// ======================================================
{
  question:
    "Widely considered the bloodiest battle in human history with around 2 million casualties, which 1942–1943 conflict marked the major turning point on WWII's Eastern Front?",
  choices: [
    "Battle of Kursk",
    "Battle of Stalingrad",
    "Siege of Leningrad",
    "Battle of Moscow"
  ],
  answer: 1,
  explanation:
    "The five-month battle concluded in February 1943 with the complete encirclement and surrender of Generalfeldmarschall Friedrich Paulus and the German 6th Army, halting the Axis expansion into the Soviet Union."
},

// ======================================================
// QUESTION 18
// ======================================================
{
  question:
    "In June 1942, the U.S. Navy ambushed and sank four Japanese aircraft carriers in a single battle, turning the tide of the Pacific War. What was this battle?",
  choices: [
    "Battle of the Coral Sea",
    "Battle of Leyte Gulf",
    "Battle of Midway",
    "Battle of Guadalcanal"
  ],
  answer: 2,
  explanation:
    "Thanks to American codebreakers cracking the Japanese naval code JN-25, U.S. forces anticipated the attack on Midway Atoll and destroyed all four participating Japanese Fleet Carriers: Akagi, Kaga, Soryu, and Hiryu."
},

// ======================================================
// QUESTION 19
// ======================================================
{
  question:
    "What was the code name given to the clandestine American-led scientific research project that developed the world's first nuclear weapons?",
  choices: [
    "The Manhattan Project",
    "Project RAND",
    "The Apollo Project",
    "Operation Paperclip"
  ],
  answer: 0,
  explanation:
    "Directed by Major General Leslie Groves and theoretical physicist J. Robert Oppenheimer, the Manhattan Project developed the atomic bomb, culminating in the Trinity test at Alamogordo, New Mexico, on July 16, 1945."
},

// ======================================================
// QUESTION 20
// ======================================================
{
  question:
    "Which iconic Queen song, released in 1975, features a six-minute suite combining a ballad, an opera section, and a heavy rock section?",
  choices: [
    "We Will Rock You",
    "Bohemian Rhapsody",
    "Don't Stop Me Now",
    "Another One Bites the Dust"
  ],
  answer: 1,
  explanation:
    "Written by Freddie Mercury, Bohemian Rhapsody had no formal chorus, yet it topped the charts worldwide and remains one of Queen's most defining tracks."
}

];


// ======================================================
// APPLICATION STATE
// ======================================================
let currentQuestion = 0;
const userAnswers = new Array(questions.length);


// ======================================================
// SAVE AN ANSWER
// ======================================================
function saveAnswer(choiceIndex) {
  // Save the user's answer for the current question.
  userAnswers[currentQuestion] = choiceIndex;
}


// ======================================================
// NAVIGATION
// ======================================================
function goNext() {
  // Move to the next question if not at the last question.
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  }
}


function goPrevious() {
  // Move to the previous question if not at the first question.
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}


function goFirst() {
  // Move to the first question.
  currentQuestion = 0;
  renderQuestion();
}


function goLast() {
  // Move to the last question.
  currentQuestion = questions.length - 1;
  renderQuestion();
}


// ======================================================
// CALCULATE SCORE
// ======================================================
function calculateScore() {
  // Calculate the user's score based on their answers.
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (userAnswers[i] === questions[i].answer) {
      score++;
    }
  }

  return score;
}


// ======================================================
// CALCULATE PERCENTAGE
// ======================================================
function calculatePercentage(score) {
  // Calculate the percentage score based on the total number of questions.
  let percentage = (score / questions.length) * 100;

  // Round the percentage to the nearest integer.
  return Math.round(percentage);
}


// ======================================================
// PERFORMANCE MESSAGE
// ======================================================
function getPerformanceMessage(percentage) {
  // Return a performance message based on the percentage score.

  if (percentage >= 80) {
    return "Excellent";
  }
  else if (percentage >= 60) {
    return "Good";
  }
  else if (percentage >= 50) {
    return "Pass";
  }
  else {
    return "Needs improvement";
  }
}


// ======================================================
// BUILD CORRECTION
// ======================================================
function buildCorrection() {
  let correction = "";

  // Build a correction string that includes:
  // - Question number
  // - Question
  // - User's answer
  // - Correct answer
  // - Result
  // - Explanation

  for (let i = 0; i < questions.length; i++) {

    let question = questions[i];

    let userAnswer;

    // Check if the question was answered.
    if (userAnswers[i] === undefined) {
      userAnswer = "Not Answered";
    }
    else {
      userAnswer = question.choices[userAnswers[i]];
    }

    // Get the correct answer.
    let correctAnswer = question.choices[question.answer];

    // Determine whether the answer is correct.
    let result;

    if (userAnswers[i] === question.answer) {
      result = "Correct";
    }
    else {
      result = "Incorrect";
    }

    // Add the question information to the correction.
    correction +=
      "Question " + (i + 1) + ": " + question.question + "\n\n";

    correction +=
      "Your answer: " + userAnswer + "\n";

    correction +=
      "Correct answer: " + correctAnswer + "\n";

    correction +=
      "Result: " + result + "\n";

    correction +=
      "Explanation: " + question.explanation + "\n\n";

    // Add a separator between questions.
    if (i < questions.length - 1) {
      correction +=
        "----------------------------------------------\n\n";
    }
  }

  return correction;
}


// ======================================================
// PROVIDED INTERFACE CODE
//
// DOM manipulation and events will be studied later.
// ======================================================


// ======================================================
// SUBMIT QUIZ
// ======================================================
function submitQuiz() {

  // Calculate the final score.
  const score = calculateScore();

  // Calculate the percentage.
  const percentage = calculatePercentage(score);

  // Get the performance message.
  const message = getPerformanceMessage(percentage);

  // Build the complete correction.
  const correction = buildCorrection();

  // Display the results.
  showResults(score, percentage, message, correction);
}


// ======================================================
// RENDER QUESTION
// ======================================================
function renderQuestion() {

  const q = questions[currentQuestion];

  // --------------------------------------------------
  // QUESTION NUMBER
  // --------------------------------------------------
  document.getElementById("progress").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;


  // --------------------------------------------------
  // QUESTION
  // --------------------------------------------------
  document.getElementById("questionText").textContent =
    q.question;


  // --------------------------------------------------
  // CHOICES
  // --------------------------------------------------
  const choicesContainer =
    document.getElementById("choices");

  choicesContainer.innerHTML = "";


  for (let i = 0; i < q.choices.length; i++) {

    const label = document.createElement("label");

    label.className = "choice";


    const radio = document.createElement("input");

    radio.type = "radio";

    radio.name = "answer";

    radio.value = i;


    // Restore an answer previously selected
    // by the user.
    if (userAnswers[currentQuestion] === i) {
      radio.checked = true;
    }


    // When the user selects this answer,
    // save its index.
    radio.onclick = function () {
      saveAnswer(i);
    };


    label.appendChild(radio);

    label.appendChild(
      document.createTextNode(" " + q.choices[i])
    );

    choicesContainer.appendChild(label);
  }


  // --------------------------------------------------
  // NAVIGATION BUTTONS
  // --------------------------------------------------
  document.getElementById("firstBtn").disabled =
    currentQuestion === 0;

  document.getElementById("previousBtn").disabled =
    currentQuestion === 0;

  document.getElementById("nextBtn").disabled =
    currentQuestion === questions.length - 1;

  document.getElementById("lastBtn").disabled =
    currentQuestion === questions.length - 1;
}


// ======================================================
// DISPLAY RESULTS
// ======================================================
function showResults(score, percentage, message, correction) {

  document.getElementById("quizPanel").style.display =
    "none";

  document.getElementById("resultsPanel").style.display =
    "block";


  document.getElementById("scoreText").textContent =
    `Score: ${score} / ${questions.length}`;


  document.getElementById("percentageText").textContent =
    `Percentage: ${percentage}%`;


  document.getElementById("performanceText").textContent =
    message;


  document.getElementById("correction").textContent =
    correction;
}


// ======================================================
// START APPLICATION
// ======================================================
renderQuestion();

