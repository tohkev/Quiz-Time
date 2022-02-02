import React from 'react';
import Answer from './Answer.js'

export default function Question(props) {
    return (
        <div className="question--block">
            <h3 className="question--question" dangerouslySetInnerHTML={{ __html: props.question }}></h3>
            <div className="question--answer">
                <div className="question--choice">
                    <input type="radio" id={`choice1-${props.id}`} value="choice1" name={props.id} className="question--radio" />
                    <label for={`choice1-${props.id}`} className="radio-label" dangerouslySetInnerHTML={{ __html: props.choice1 }}></label>
                </div>
                <div className="question--choice">
                    <input type="radio" id={`choice2-${props.id}`} value="choice2" name={props.id} className="question--radio" />
                    <label for={`choice2-${props.id}`} className="radio-label" dangerouslySetInnerHTML={{ __html: props.choice2 }}></label>
                </div>
                <div className="question--choice">
                    <input type="radio" id={`choice3-${props.id}`} value="choice3" name={props.id} className="question--radio" />
                    <label for={`choice3-${props.id}`} className="radio-label" dangerouslySetInnerHTML={{ __html: props.choice3 }}></label>
                </div>
                <div className="question--choice">
                    <input type="radio" id={`choice4-${props.id}`} value="choice4" name={props.id} className="question--radio" />
                    <label for={`choice4-${props.id}`} className="radio-label" dangerouslySetInnerHTML={{ __html: props.choice4 }}></label>
                </div>
            </div>
        </div>
    )
}