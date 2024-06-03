const questions = [
    {
        question: "Im Jahr 1955 wurde Folgendes geschaffen:",
        answers: [
            { text: "Abteilung für innere Angelegenheiten", correct: true},
            { text: "UN", correct: false},
            { text: "NATO", correct: false},
            { text: "Liga der Nationen", correct: false},
    ]
    
    },
    {
        question: "Die Nordatlantikpakt-Organisation (NATO), gegründet von:",
        answers: [
            { text: "Mai 1945", correct: false},
            { text: "Mai 1955", correct: false},
            { text: "April 1949", correct: true},
            { text: "September 1948", correct: false},
    ]
    },
    {
        question: "Die zweite Berlin-Krise ist ein Konflikt zwischen:",
        answers: [
            { text: "UdSSR und Deutschland", correct: false},
            { text: "UdSSR und USA", correct: true},
            { text: "Deutschland und die USA", correct: false},
            { text: "DDR und BRD", correct: false},
    ]
    },
    {
        question: "Bei welchen Ereignissen bestand tatsächlich die Gefahr einer nuklearen Katastrophe:",
        answers: [
            { text: "Berlin-Krise", correct: false},
            { text: "Kubakrise", correct: true},
            { text: "Kriege in Vietnam", correct: false},
            { text: "Kriege in Afghanistan", correct: false},
    ]
    },
    {
        question: "In welchem ​​Jahr findet die Warschauer Pakt statt:",
        answers: [
            { text: "1955", correct: true},
            { text: "1949", correct: false},
            { text: "1963", correct: false},
            { text: "1947", correct: false},
    ]
    },
    {
        question: "Nennen Sie die politische Persönlichkeit, die als „Vater“ des „Kalten Krieges“ gilt:",
        answers: [
            { text: "G. Truman", correct: true},
            { text: "D. Eisenhower", correct: false},
            { text: "U. Churchill", correct: false},
            { text: "K. Adenauer", correct: false},
    ]
    },
    {
        question: "Der Eiserne Vorhang ist:",
        answers: [
            { text: "Spaltung der Welt in zwei feindliche Lager", correct: true},
            { text: "Mauer, die Ostberlin von Westberlin trennt", correct: false},
            { text: "Grenzsystem sozialistischer Länder", correct: false},
            { text: "Politik der Eindämmung der amerikanischen Demokratie", correct: false},
    ]
    },
    {
        question: "Welcher sowjetische Führer unter dem Motto „Helfen Sie dem afghanischen Bruder.“des Volkes „eine Entscheidung getroffen hat – Truppen nach Afghanistan zu schicken?",
        answers: [
            { text: "M. Gorbatschow", correct: false},
            { text: "N. Chruschtschow", correct: false},
            { text: "Y. Andropow", correct: false},
            { text: "L. Breschnew", correct: true},
    ]
    },
    {
        question: "„Von Stettin an der Ostsee bis Brest an der Adria senkte sich der „Eiserne Vorhang“ über den Kontinent“ – dazu gehört diese Aussage",
        answers: [
            { text: "V. Churchill", correct: true},
            { text: "H. Truman", correct: false},
            { text: "K. Adenauer", correct: false},
            { text: "J. Marshall", correct: false},
    ]
    },
    {
        question: "Nennen Sie die Führer der USA und der UdSSR, die während der Karibikkrise gezwungen waren, miteinander zu verhandeln, um den Ausbruch des Dritten Weltkriegs zu verhindern",
        answers: [
            { text: "H. Truman und N. Chruschtschow", correct: false},
            { text: "J. Kennedy und N. Chruschtschow", correct: true},
            { text: "J. Kennedy und Y. Stalin", correct: false},
            { text: "D. Eisenhower und L. Breschnew.", correct: false},
    ]
    },
 
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Sie haben ${score} von ${questions. 
        length} erreicht!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore()
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
})
startQuiz();
