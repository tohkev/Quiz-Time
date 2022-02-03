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

  console.log(quizData);

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event.target)
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
        correctPlace: place,
        choices: choices
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('submitted!')
  }


  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&type=multiple')
      .then(res => res.json())
      .then(data => setQuestions(getChoices(data.results)))
  }, [])

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
        choice1={element.choices[0]}
        choice2={element.choices[1]}
        choice3={element.choices[2]}
        choice4={element.choices[3]}
        name={`question${index + 1}`}
        correct={`choice${element.correctPlace + 1}`}
        handleChange={handleChange}
        quizData={quizData}
      />
    }
  })

  return (
    <main>
      {false && <Home />}
      <form className="quiz--block">
        {questionElements}

        <div className="form--footer">
          <button className="quiz--check-btn" onClick={handleSubmit}>Check Answers</button>
        </div>
      </form>
    </main>
  )
}