# F1 Trivia

My game is called **F1 Trivia**, which is based off the popular motorsport F1.
It will demonstrate a combination of HTML, CSS and Javascript.

The game is fairly easy to play and will depend of the users knowledge of the sport. The game will consist of 8 questions and a score of at least 50% will be needed to win.

https://brandonhall96.github.io/F1-Trivia/

# How to play

1. Choose your best answer to the question given
2. Click "Submit Answer" and you will get an instant result
3. Click "Next question" to move on to the next question.


## Start Up Screen:
![Starting screen](/example.jpeg)

# How to install

1. *`Fork`* and *`Clone`* this respository to your local machine
2. Open `index.html` in your browser to play or 
3. Open the directory in your text editor of choice to view or edit the code



# How it works
The game uses DOM Manipulation to display all questions and answers. It also uses functions to check the users submitted answers and runs them agianst the all the correct ones to see if they are correct. I used an If Else statement to display different messages depending on the users answer.


# Dom Manipulation to display questions

```
function buildingQuiz() {
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

# Checking answers and counting score

```
function showResults() {
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
## Example

![Starting screen](/example2.jpeg)
![Starting screen](/example3.jpeg)



# Game results
```
function gameFinal() {
    if (score >= 4) {
        endGame.textContent = 'You Win!'
        }
        else {
            endGame2.textContent = 'You lose, try again!'
             }
        }
```
        
        

## Example

![Starting screen](/example4.jpeg)
![Starting screen](/example5.jpeg)





# Restart

```
function restartGame() {
    counter = 0; 
    score = 0; 
    theScore.textContent = score;
    myAnswers.textContent = ''
    myAnswers2.textContent = ''
    endGame.textContent = ''
    endGame2.textContent = ''
    buildingQuiz();
}
```




# Future considerations

* More automated process
* Easy, Hard, and Legendary difficulties
* More Questions




