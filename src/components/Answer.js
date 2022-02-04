import React from 'react';

export default function Answer(props) {

    let resultStyle = "";
    if (props.gameState.gameOver) {
        if (props.choiceNum === props.correctAns) {
            resultStyle = "correct"
        } else if (props.quizData[props.name] === props.choiceNum && props.choiceNum !== props.correctAns) {
            resultStyle = "incorrect"
        } else {
            resultStyle = "gray-out"
        }
    }

    return (
        <div className={`question--choice ${props.quizData[props.name] === props.choiceNum ? "selected" : ""} ${resultStyle}`}>
            <input type="radio"
                id={props.id}
                value={props.choiceNum}
                name={props.name}
                className="question--radio"
                onChange={props.handleChange}
                checked={props.quizData[props.name] === props.choiceNum}
                disabled={props.gameState.gameOver}
            />
            <label htmlFor={props.id} className="radio-label" dangerouslySetInnerHTML={{ __html: props.choice }}></label>
        </div>
    )
}