import React from 'react';
import Home from './components/Home.js';
import Question from './components/Question.js';
import { nanoid } from 'nanoid';


export default function App() {

  const [questions, setQuestions] = React.useState([])

  const [quizData, setQuizData] = React.useState({
    "question-1": null,
    "question-2": null,
    "question-3": null,
    "question-4": null,
    "question-5": null
  })

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  }, [])

  const questionElements = questions.map((element, index) => {
    let id = nanoid();

    if (element.type === "boolean") {
      return [];
    } else {
      let choices = element.incorrect_answers;
      let place = Math.floor(Math.random() * 4);
      choices.splice(place, 0, element.correct_answer);

      return <Question
        key={id}
        id={id}
        question={element.question}
        choice1={choices[0]}
        choice2={choices[1]}
        choice3={choices[2]}
        choice4={choices[3]}
        name={`question-${index + 1}`}
        correct={place}
      />
    }
  })

  console.log(questions)

  return (
    <main>
      {false && <Home />}
      <form className="quiz--block">
        {questionElements}
        <button className="quiz--check-btn">Check Answers</button>
      </form>
    </main>
  )
}