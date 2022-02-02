import React from 'react';
import Home from './components/Home.js';
import Question from './components/Question.js'


export default function App() {
  return (
    <main>
      {false && <Home />}
      <form className="quiz--block">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <button className="quiz--check-btn">Check Answers</button>
      </form>
    </main>
  )
}