import React from 'react';
import Answer from './Answer.js';
import { nanoid } from 'nanoid';

export default function Question(props) {

    const choiceElements = props.choices.map((choice, index) => {
        let id = nanoid();
        return <Answer
            key={id}
            id={`choice${index + 1}-${id}`}
            quizData={props.quizData}
            name={props.name}
            handleChange={props.handleChange}
            correctAns={props.correctAns}
            choice={choice}
            choiceNum={`choice${index + 1}`}
            gameState={props.gameState}
            index={index}
        />
    })

    return (
        <div className="question--block">
            <h3 className="question--question" dangerouslySetInnerHTML={{ __html: props.question }}></h3>
            <div className="question--answer">
                {choiceElements}
            </div>
        </div>
    )
}