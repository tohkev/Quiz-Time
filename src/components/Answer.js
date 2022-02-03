import React from 'react';

export default function Answer(props) {
    return (
        <div className={`question--choice ${props.quizData[props.name] === props.choiceNum ? "selected" : ""}`}>
            <input type="radio" id={props.id} value={props.choiceNum} name={props.name} className="question--radio" onChange={props.handleChange} checked={props.quizData[props.name] === props.choiceNum} />
            <label htmlFor={props.id} className="radio-label" dangerouslySetInnerHTML={{ __html: props.choice }}></label>
        </div>
    )
}