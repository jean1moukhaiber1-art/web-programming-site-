
/* ======================================================
   GIN446 - WEEK 7
   Live Quiz with Fetch API
   ====================================================== */


/* ======================================================
   APPLICATION STATE
   ====================================================== */

let total = 0;
let currentQuestion = 0;

let userAnswers = [];

const cache = {};


/* ======================================================
   FETCH A QUESTION FROM THE SERVER
   ====================================================== */

async function getQuestion(index) {

    // Return the cached question if it was already downloaded.
    if (cache[index]) {
        return cache[index];
    }

    // Request the question from the Flask API.
    const response = await fetch(`/api/question/${index}`);

    // Check whether the request succeeded.
    if (!response.ok) {
        throw new Error(`Failed to load question ${index + 1}.`);
    }

    // Convert the response into a JavaScript object.
    const question = await response.json();

    // Cache the downloaded question.
    cache[index] = question;

    return question;
}


/* ======================================================
   SAVE AN ANSWER
   ====================================================== */

function saveAnswer(choiceIndex) {

    // Save the selected choice index for this question.
    userAnswers[currentQuestion] = choiceIndex;
}


/* ======================================================
   NAVIGATION
   ====================================================== */

async function goFirst() {

    currentQuestion = 0;

    await renderQuestion();
}


async function goPrevious() {

    if (currentQuestion > 0) {
        currentQuestion--;

        await renderQuestion();
    }
}


async function goNext() {

    if (currentQuestion < total - 1) {
        currentQuestion++;

        await renderQuestion();
    }
}


async function goLast() {

    currentQuestion = total - 1;

    await renderQuestion();
}


/* ======================================================
   RENDER QUESTION
   ====================================================== */

async function renderQuestion() {

    const loading = document.getElementById("loading");
    const error = document.getElementById("error");

    loading.hidden = false;
    error.hidden = true;
    error.textContent = "";

    try {

        // Fetch the current question.
        const q = await getQuestion(currentQuestion);

        // Display question progress.
        document.getElementById("progress").textContent =
            `Question ${currentQuestion + 1} of ${total}`;

        // Display the question text.
        document.getElementById("questionText").textContent =
            q.question;

        // Get the choices container.
        const choicesContainer =
            document.getElementById("choices");

        // Remove the previous question's choices.
        choicesContainer.replaceChildren();

        // Display every choice.
        q.choices.forEach((choice, i) => {

            const label = document.createElement("label");

            label.className = "choice";

            const radio = document.createElement("input");

            radio.type = "radio";
            radio.name = "answer";
            radio.value = i;

            // Restore the previously selected answer.
            radio.checked = userAnswers[currentQuestion] === i;

            // Save the answer when the user selects it.
            radio.addEventListener("change", function () {
                saveAnswer(i);
            });

            label.appendChild(radio);

            label.appendChild(
                document.createTextNode(" " + choice)
            );

            choicesContainer.appendChild(label);

            // Put each choice on a separate line.
            choicesContainer.appendChild(
                document.createElement("br")
            );
        });

        // Disable navigation buttons at the boundaries.
        document.getElementById("firstBtn").disabled =
            currentQuestion === 0;

        document.getElementById("previousBtn").disabled =
            currentQuestion === 0;

        document.getElementById("nextBtn").disabled =
            currentQuestion === total - 1;

        document.getElementById("lastBtn").disabled =
            currentQuestion === total - 1;

    } catch (err) {

        // Display an error if the question cannot be loaded.
        error.textContent = err.message;
        error.hidden = false;

    } finally {

        // Always hide the loading message when finished.
        loading.hidden = true;
    }
}


/* ======================================================
   CALCULATE SCORE
   ====================================================== */

async function calculateScore() {

    let score = 0;

    for (let i = 0; i < total; i++) {

        // Obtain the question from the cache or API.
        const question = await getQuestion(i);

        // Compare the user's answer with the correct answer.
        if (userAnswers[i] === question.answer) {
            score++;
        }
    }

    return score;
}


/* ======================================================
   CALCULATE PERCENTAGE
   ====================================================== */

function calculatePercentage(score) {

    if (total === 0) {
        return 0;
    }

    return Math.round((score / total) * 100);
}


/* ======================================================
   PERFORMANCE MESSAGE
   ====================================================== */

function getPerformanceMessage(percentage) {

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


/* ======================================================
   BUILD CORRECTION
   ====================================================== */

async function buildCorrection() {

    let correction = "";

    for (let i = 0; i < total; i++) {

        // Get the question and its answer information.
        const q = await getQuestion(i);

        // Determine the user's answer.
        let userAnswer;

        if (userAnswers[i] === undefined) {
            userAnswer = "Not answered";
        }
        else {
            userAnswer = q.choices[userAnswers[i]];
        }

        // Get the correct answer.
        const correctAnswer = q.choices[q.answer];

        // Determine whether the user's answer is correct.
        const result =
            userAnswers[i] === q.answer
                ? "Correct"
                : "Incorrect";

        // Add the question and correction details.
        correction +=
            `Question ${i + 1}: ${q.question}\n\n`;

        correction +=
            `Your answer: ${userAnswer}\n`;

        correction +=
            `Correct answer: ${correctAnswer}\n`;

        correction +=
            `Result: ${result}\n`;

        correction +=
            `Explanation: ${q.explanation}\n\n`;

        // Separate the questions.
        if (i < total - 1) {
            correction +=
                "----------------------------------------------\n\n";
        }
    }

    return correction;
}


/* ======================================================
   DISPLAY RESULTS
   ====================================================== */

function showResults(score, percentage, message, correction) {
    const quizPanel = document.getElementById("quizPanel");
    const resultsPanel = document.getElementById("resultsPanel");

    quizPanel.hidden = true;
    quizPanel.style.display = "none";

    resultsPanel.hidden = false;
    resultsPanel.style.display = "block";

    document.getElementById("scoreText").textContent =
        `Score: ${score} / ${total}`;

    document.getElementById("percentageText").textContent =
        `Percentage: ${percentage}%`;

    document.getElementById("performanceText").textContent = message;

    document.getElementById("correction").textContent = correction;
}

/* ======================================================
   SUBMIT QUIZ
   ====================================================== */

async function submitQuiz() {
    const error = document.getElementById("error");
    error.hidden = false;
    error.textContent = "Calculating results...";

    try {
        console.log("Submit started");
        console.log("Total questions:", total);
        console.log("User answers:", userAnswers);

        const score = await calculateScore();
        console.log("Score:", score);

        const percentage = calculatePercentage(score);
        const message = getPerformanceMessage(percentage);
        const correction = await buildCorrection();

        console.log("Correction created");

        showResults(score, percentage, message, correction);

        console.log("Results displayed");
    } catch (err) {
        console.error("Quiz submission error:", err);
        error.textContent = "Error: " + err.message;
    }
}

/* ======================================================
   INITIALIZE THE APPLICATION
   ====================================================== */

async function init() {

    const loading = document.getElementById("loading");
    const error = document.getElementById("error");

    loading.hidden = false;
    error.hidden = true;
    error.textContent = "";

    try {

        // Fetch the number of questions from the server.
        const response = await fetch("/api/questions/count");

        if (!response.ok) {
            throw new Error("Failed to load the question count.");
        }

        // Read the JSON response.
        const data = await response.json();

        total = data.count;

        // Validate the question count.
        if (!Number.isInteger(total) || total <= 0) {
            throw new Error(
                "The server returned an invalid question count."
            );
        }

        // Prepare storage for the user's answers.
        userAnswers = new Array(total);

        // Start with the first question.
        currentQuestion = 0;

        // Display the first question.
        await renderQuestion();

    } catch (err) {

        // Display initialization errors.
        error.textContent = err.message;
        error.hidden = false;

    } finally {

        loading.hidden = true;
    }
}


/* ======================================================
   START THE QUIZ
   ====================================================== */

init();
