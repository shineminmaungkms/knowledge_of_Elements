const questions = [
    {
        question: "What is the organization of chemical elements based on their atomic number and recurring chemical properties called?",
        optionA: "Atomic arragngement",
        optionB: " Elemental order",
        optionC: "Periodic table",
        optionD: "Chemical matrix",
        correctOption: "optionC"
    },

    {
        question: "What is the total number of known elements in the periodic table?",
        optionA: "80",
        optionB: "118",
        optionC: "92",
        optionD: "119",
        correctOption: "optionB"
    },

    {
        question: "The rows of the periodic table are called:",
        optionA: "Group",
        optionB: "Periods",
        optionC: "Series",
        optionD: "Families",
        correctOption: "optionB"
    },

    {
        question: "What are the columns of the periodic table known as?",
        optionA: "Groups",
        optionB: "Families",
        optionC: "Blocks",
        optionD: "Series",
        correctOption: "optionA"
    },

    {
        question: "The chemical symbol “Na” represents which element in the periodic table?",
        optionA: "Nitrogen",
        optionB: "Nickel",
        optionC: "Sodium",
        optionD: "Neon",
        correctOption: "optionC"
    },

    {
        question: "Which element has the chemical symbol “Fe” and is commonly used in making steel?",
        optionA: "Iron",
        optionB: "Silicon",
        optionC: "Indium",
        optionD: "Iodine",
        correctOption: "optionA"
    },

    {
        question: "Which element is essential for life and forms the basis of organic molecules?",
        optionA: "Oxygen",
        optionB: "Iron",
        optionC: "Carbon",
        optionD: "Calcium",
        correctOption: "optionC"
    },

    {
        question: "What element has the chemical symbol “He” and is a noble gas?",
        optionA: "Iron",
        optionB: "Hydrogen",
        optionC: "Helium",
        optionD: "Iron",
        correctOption: "optionC"
    },

    {
        question: " Elements in the same group of the periodic table have similar:",
        optionA: "Chemical Properties",
        optionB: "Number of Properties",
        optionC: "Atomic Number",
        optionD: "Atomic Masses",
        correctOption: "optionA"
    },

    {
        question: "What is the name of the elements in Group 1 of the periodic table?",
        optionA: "Noble Gases",
        optionB: "Alkaline earth metals",
        optionC: "Alkali meatals",
        optionD: "Transition Metals",
        correctOption: "optionC"
    },

    {
        question: "What is the symbol of Gold?",
        optionA: "Au",
        optionB: "He",
        optionC: "Be",
        optionD: "Li",
        correctOption: "optionA"
    },

    {
        question: "What is full name of symbol K?",
        optionA: "Helium",
        optionB: "Hydrogen",
        optionC: "Neon",
        optionD: "Potassium",
        correctOption: "optionD"
    },


    {
        question: "The name of Carbon Group Name?",
        optionA: "Reactive Non-Meatal",
        optionB: "Alkali Metals",
        optionC: "Noble Gases",
        optionD: "Meatalloids",
        correctOption: "optionA"
    },

    {
        question: "What is symbol of Titanium ?",
        optionA: "Fe",
        optionB: "Ti",
        optionC: "O",
        optionD: "Br",
        correctOption: "optionB"
    },

    {
        question: "What is the full name of symbol Cl",
        optionA: "Carbon",
        optionB: "Chlorine",
        optionC: "Caseium",
        optionD: "Cobalt",
        correctOption: "optionB"
    },

    {
        question: "How many periodic group?",
        optionA: "20",
        optionB: "10",
        optionC: "15",
        optionD: "18",
        correctOption: "optionD"
    },

    {
        question: "What is full name of symbol  Al?",
        optionA: "Silicon",
        optionB: "Alminium",
        optionC: "Florine",
        optionD: "Sodium",
        correctOption: "optionB"
    },

    {
        question: "What is symbol of Br? ",
        optionA: "Zinc",
        optionB: "Copper",
        optionC: "Bromine",
        optionD: "Mercury",
        correctOption: "optionC"
    },

    {
        question: "What the symbol of Platium?",
        optionA: "Br",
        optionB: "Pt",
        optionC: "Cl",
        optionD: "Fr",
        correctOption: "optionB"
    },

    {
        question: "What is the full name symbol of O?",
        optionA: "Oxygen",
        optionB: "Hydrogen",
        optionC: "Nitrogen",
        optionD: "Neon",
        correctOption: "optionA"
    },

    {
        question: "What the symbol of Lithium",
        optionA: "He",
        optionB: "Ne",
        optionC: "H",
        optionD: "Li",
        correctOption: "optionD"
    },

    {
        question: "What is the full name of symbol Xe?",
        optionA: "Xenon",
        optionB: "Neon",
        optionC: "Radon",
        optionD: "Argon",
        correctOption: "optionA"
    },

    {
        question: "What is the symbol of Argon?",
        optionA: "Ar",
        optionB: "Kr",
        optionC: "Sr",
        optionD: "Lr",
        correctOption: "optionA"
    },

    {
        question: "What is the symbol of Zinc?",
        optionA: "Zn",
        optionB: "Rn",
        optionC: "Cn",
        optionD: "Mn",
        correctOption: "optionA"
    },

    {
        question: "What is the full name of symbol Ca",
        optionA: "Magnesium",
        optionB: "Calcium",
        optionC: "Hassium",
        optionD: "Osmium",
        correctOption: "optionB"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}