import React from 'react';
import Home from './components/Home.js';
import Question from './components/Question.js';
import { nanoid } from 'nanoid';


export default function App() {

  const [questions, setQuestions] = React.useState([])

  const [quizData, setQuizData] = React.useState({
    "question1": "",
    "question2": "",
    "question3": "",
    "question4": "",
    "question5": ""
  })

  const [gameState, setGameState] = React.useState({
    gameStart: false,
    gameOver: false,
    score: 0
  })

  function startGame() {
    setGameState(prevState => {
      return {
        ...prevState,
        gameStart: !prevState.gameStart
      }
    })
    setQuestions([])
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setQuizData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  function getChoices(data) {
    return data.map((element, index) => {

      let choices = element.incorrect_answers;
      let place = Math.floor(Math.random() * 4);
      choices.splice(place, 0, element.correct_answer);

      return {
        id: nanoid(),
        type: element.type,
        question: element.question,
        correctValue: element["correct_answer"],
        correctAns: `choice${place + 1}`,
        choices: choices
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    let score = 0
    let questionIndex = 0;
    for (let answer in quizData) {
      if (quizData[answer] === questions[questionIndex].correctAns) {
        score++
      }
      questionIndex++
    }

    setGameState(prevState => {
      return {
        ...prevState,
        gameOver: true,
        score: score
      }
    })
  }

  function handleReset(event) {
    event.preventDefault();
    setQuizData({
      "question1": "",
      "question2": "",
      "question3": "",
      "question4": "",
      "question5": ""
    })
    setGameState({
      gameStart: false,
      gameOver: false,
      score: 0
    })
  }

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(res => res.json())
      .then(data => setQuestions(getChoices(data.results)))
  }, [gameState.gameStart])

  const questionElements = questions.map((element, index) => {

    //implementing boolean questions in the future
    if (element.type === "boolean") {
      return [];

      //multiple choice questions
    } else {
      return <Question
        key={element.id}
        id={element.id}
        question={element.question}
        choices={element.choices}
        name={`question${index + 1}`}
        correct={element.correctAns}
        handleChange={handleChange}
        quizData={quizData}
        gameState={gameState}
      />
    }
  })

  return (
    <main>
      {gameState.gameStart && <form className="quiz--block">
        {questionElements}
        <div className="form--footer">
          {gameState.gameOver && <h3 className="quiz--score">You scored {gameState.score}/5 correct answers</h3>}
          <button className="quiz--check-btn" onClick={gameState.gameOver ? handleReset : handleSubmit}>{gameState.gameOver ? "Play Again" : "Check Answers"}</button>
        </div>
      </form>}
      {!gameState.gameStart && <Home onClick={startGame} />}
    </main>
  )
}