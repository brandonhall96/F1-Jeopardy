const quizBox = document.getElementById('#quiz')  // Were taking the html elements and storing my
const resultsBox = document.getElementById('#results')  // references to them in variables like so
const submitButton = document.getElementById('#results')

function buildingQuiz() {  // here we have a function to build the quiz 






}




function showResults() {       // here we have a function to show the results





}




//displays quiz right away
buildingQuiz();

//on submit, show results. the event listener grabs our submit button and tells it what to do
//in this case its show results 
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        questions: "Which driver led Ferrari to 7 worlds championships?",
        answers: {
            a: 'Carlos Sainz',
            b: 'Niki Lauda',
            c: 'Michael Schumacher',
            d: 'Sebastian Vettel'
        },
        CorrectAnswer: 'c'



    }












]

