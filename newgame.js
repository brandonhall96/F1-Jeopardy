const quizBox = document.getElementById('#quiz')  // Were taking the html elements and storing my
const resultsBox = document.getElementById('#results')  // references to them in variables like so
const submitButton = document.getElementById('#results')
const output = [];
const answers = [];



// here we have a function to build the quiz 
function buildingQuiz() {

    myQuestions.forEach(questions, answers) 

    for (let i = 0; i < myQuestions.length; i++)
    console.log(myQuestions);






}  
    


    
    










function showResults() {       // here we have a function to show the results





};




//displays quiz right away
buildingQuiz();

//on submit, show results. the event listener grabs our submit button and tells it what to do
//in this case its show results 
submitButton.addEventListener('click', showResults);




const myQuestions = [
    {
        question: "Which driver led Ferrari to 7 worlds championships?",
        answers: {
            a: 'Carlos Sainz',
            b: 'Niki Lauda',
            c: 'Michael Schumacher',
            d: 'Sebastian Vettel'
        },
        correctAnswer: 'c'
    },

    {
        question: 'Who is the #1 driver for Red Bull',
        answers: {
            a: 'Daniel Ricciardo',
            b: 'Max Verstappen',
            c: 'Sergio Perez',
            d: 'Alex Albon'
        },
        correctAnswer: 'b'
    },

    {
        question: 'Who won the 2016 World Championship?',
        answers: {
            a: 'Nico Rosberg',
            b: 'Lewis Hamilton',
            c: 'Kimi Raikkonen',
            d: 'Sebastian Vettel'
        },
        correctAnswer: 'a'
    },

    {
        question: 'Which team uses a bright orange livery on their car?',
        answers: {
            a: 'Haas',
            b: 'Williams',
            c: 'AlphaTauri',
            d: 'McLaren'
        },
        correctAnswer: 'd'
    },

    {
        question: 'Which car company made its return to F1 for 2020',
        answers: {
            a: 'Aston Martin',
            b: 'Mercedes',
            c: 'Alfa Romeo',
            d: 'Williams'
        },
        correctAnswer: 'a'
    },

    {
        question: 'Which team used a black and yellow livery for the 2019 season',
        answers: {
            a: 'Aston Martin',
            b: 'Ferrari',
            c: 'Renault',
            d: 'Haas'
        },
        correctAnswer: 'c'
    },

    {
        question: 'Which term is used to reference a pit stop',
        answers: {
            a: 'pit',
            b: 'box',
            c: 'break',
            d: 'scoop'
        },
        correctAnswer: 'b'
    },

    {
        question: 'Which F1 track hosts the best race of the year',
        answers: {
            a: 'Monaco',
            b: 'Imloa',
            c: 'Red Bull Ring',
            d: 'Nurburgring'
        },
        correctAnswer: 'a'
    }
];

console.log(myQuestions);














