// const quizBox = document.getElementById('quiz')  // Were taking the html elements and storing my
// const resultsBox = document.getElementById('results')  // references to them in variables like so
// const submitButton = document.getElementById('submit')
// const theQuestion = document.getElementById('question')
// const theAnswers = document.querySelectorAll('input[type="radio"]')


// let theAnswersLabels = document.querySelectorAll('label')
// console.log(theAnswersLabels)






  


// function showResults() {       // here we have a function to show the results




// };






// //on submit, show results. the event listener grabs our submit button and tells it what to do
// //in this case its show results 
// submitButton.addEventListener('click', showResults);




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



// here we have a function to build the quiz 


let counter = 0;
const quizBox = document.getElementById('quiz')  // Were taking the html elements and storing my
const resultsBox = document.getElementById('answers')  // references to them in variables like so
const submitButton = document.getElementById('submit')
const theQuestion = document.getElementById('question')
const theAnswers = document.querySelectorAll('input[type="radio"]')
const myAnswers = document.getElementById('results')


let theAnswersLabels = document.querySelectorAll('label')
console.log(theAnswersLabels)


function buildingQuiz() {
    theQuestion.innerHTML = myQuestions[counter].question
    // console.log(myQuestions[counter].answers)

   theAnswersLabels[0].innerHTML = myQuestions[counter].answers.a
   theAnswersLabels[1].innerHTML = myQuestions[counter].answers.b
   theAnswersLabels[2].innerHTML = myQuestions[counter].answers.c   
   theAnswersLabels[3].innerHTML = myQuestions[counter].answers.d
theAnswers[0].value = 'a'
theAnswers[1].value = 'b'
theAnswers[2].value = 'c'
theAnswers[3].value = 'd'
   console.log(theAnswers[0].value)

}

buildingQuiz();
        
function showResults() {
    // if (myQuestions[counter].correctAnswer)
    console.log(myQuestions[counter].correctAnswer)
    // console.log(theAnswers[0].checked)

    for (let i = 0; i < theAnswers.length; i++) {
        if (theAnswers[i].checked) {
          if (theAnswers[i].value == myQuestions[counter].correctAnswer) {
            console.log("this is correct")
        }
        else {
            console.log('this is incorrect')
        }


    }

    }

}


submitButton.addEventListener('click', showResults)




        



//     for (let i = 0; i < myQuestions.length; i++) {

//         console.log(myQuestions[i].question) // thi sdictates where the qustions are in the array and is printing all of them

//         let question = document.createElement('p');
//         question.textContent = myQuestions[i].question;
//         quizBox.append(question);
// 0
//         let answer1 = document.createElement('input');
//         answer1.id = 'answer' + i.toString();
//         answer1.type = 'radio';
//         quizBox.append(answer1);
        
//         let answer2 = document.createElement('input');
//         answer2.id = 'answer' + i.toString();
//         answer2.type = 'radio';
//         quizBox.append(answer2);
        
//         let answer3 = document.createElement('input');
//         answer3.id = 'answer' + i.toString();
//         answer3.type = 'radio';
//         quizBox.append(answer3);
        
//         let answer4 = document.createElement('input');
//         answer4.id = 'answer' + i.toString();
//         answer4.type = 'radio';
//         quizBox.append(answer4);

//              //we can turn these into a loop to only have 1 each

    
//         let label1 = document.createElement('label');
//         label1.for = answer1.id;
//         label1.textContent = myQuestions[i].answers.a;
//         quizBox.append(label1)

//         let label2 = document.createElement('label');
//         label2.for = answer2.id;
//         label2.textContent = myQuestions[i].answers.b;
//         quizBox.append(label2)

//         let label3 = document.createElement('label');
//         label3.for = answer3.id;
//         label3.textContent = myQuestions[i].answers.c;
//         quizBox.append(label3)
        
//         let label4 = document.createElement('label');
//         label4.for = answer4.id;
//         label4.textContent = myQuestions[i].answers.d;
//         quizBox.append(label4)

//         console.log(myQuestions[i].answers.a)
        

        // Add answer2 and label2 
        //add answer 3 nd label 3
        //add answer 4 and label4
        
    
    
// }




//displays quiz right away







            // <input type="radio" name="team" id="mercedes" value="merc">
            // <label for="mercedes">Mercedes</label>
            // <input type="radio" name="team" id="redbull" value="rb">
            // <label for="redbull">Redbull</label>
            // <input type="radio" name="team" id="ferrari" value="fr">
            // <label for="ferrari">Ferrari</label>



    










