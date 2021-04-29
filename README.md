# F1 Jeopardy

My game is called **F1 Trivia**, which is based off the popular motorsport F1.
It will demonstrate a combination of HTML, CSS and Javascript.

The game is fairly easy to play and will depend of the users knowledge of the sport. The game will consist of 8 questions and a score of at least 50% will be needed to win.

# HOW TO PLAY

1. Choose your best answer to the question given
2. Click "Submit Answer" and you will get an instant result
3. Click "Next question" to move on to the next question.


## Start Up Screen:
![Starting screen](/example.jpeg)

# HOW TO INSTALL

1. *`Fork`* and *`Clone`* this respository to your local machine
2. Open `index.html` in your browser to play or 
3. Open the directory in your text editor of choice to view or edit the code



# HOW IT WORKS
The game uses DOM Manipulation to display all questions and answers. It also uses multiple functions to check the users submitted answers and runs them agianst the all the correct ones to verify.

# Examples

## Dom Manipulation

```function buildingQuiz() {
theQuestion.innerHTML = myQuestions[counter].question
theAnswersLabels[0].textContent = myQuestions[counter].answers.a
theAnswersLabels[1].innerHTML = myQuestions[counter].answers.b
theAnswersLabels[2].innerHTML = myQuestions[counter].answers.c   
theAnswersLabels[3].innerHTML = myQuestions[counter].answers.d
theAnswers[0].value = 'a'
theAnswers[1].value = 'b'
  console.log(theAnswers[0].value)

}

buildingQuiz();
```


## Loops

```function showResults() {
    for (let i = 0; i < theAnswers.length; i++) {
        if (theAnswers[i].checked) {
            if (theAnswers[i].value == myQuestions[counter].correctAnswer) {
                score ++ 
                theScore.textContent = score;
            myAnswers.textContent = 'Thats Correct!'
            }
        else { 
            console.log('this is incorrect')
            myAnswers2.textContent = 'Incorrect'
                }



    }

    }
    
    
}
```


# FUTURE CONSIDERATIONS

I would like to make the game process more automated so some of the buttons wont be needed.



