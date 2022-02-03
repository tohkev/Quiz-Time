import React from 'react';
import Answer from './Answer.js'

export default function Question(props) {
    return (
        <div className="question--block">
            <h3 className="question--question" dangerouslySetInnerHTML={{ __html: props.question }}></h3>
            <div className="question--answer">
                <div className={`question--choice ${props.quizData[props.name] === "choice1" ? "selected" : ""}`}>
                    <input type="radio" id={`choice1-${props.id}`} value="choice1" name={props.name} className="question--radio" onChange={props.handleChange} checked={props.quizData[props.name] === "choice1"} />
                    <label for={`choice1-${props.id}`} className="radio-label" dangerouslySetInnerHTML={{ __html: props.choice1 }}></label>
                </div>
                <div className={`question--choice ${props.quizData[props.name] === "choice2" ? "selected" : ""}`}>
                    <input type="radio" id={`choice2-${props.id}`} value="choice2" name={props.name} className="question--radio" onChange={props.handleChange} checked={props.quizData[props.name] === "choice2"} />
                    <label for={`choice2-${props.id}`} className="radio-label" dangerouslySetInnerHTML={{ __html: props.choice2 }}></label>
                </div>
                <div className={`question--choice ${props.quizData[props.name] === "choice3" ? "selected" : ""}`}>
                    <input type="radio" id={`choice3-${props.id}`} value="choice3" name={props.name} className="question--radio" onChange={props.handleChange} checked={props.quizData[props.name] === "choice3"} />
                    <label for={`choice3-${props.id}`} className="radio-label" dangerouslySetInnerHTML={{ __html: props.choice3 }}></label>
                </div>
                <div className={`question--choice ${props.quizData[props.name] === "choice4" ? "selected" : ""}`}>
                    <input type="radio" id={`choice4-${props.id}`} value="choice4" name={props.name} className="question--radio" onChange={props.handleChange} checked={props.quizData[props.name] === "choice4"} />
                    <label for={`choice4-${props.id}`} className="radio-label" dangerouslySetInnerHTML={{ __html: props.choice4 }}></label>
                </div>
            </div>
        </div>
    )
}