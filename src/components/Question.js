import React from 'react';
import Answer from './Answer.js'

export default function Question() {
    return (
        <div className="question--block">
            <h3 className="question--question">How would one say goodbye in Spanish?</h3>
            <div className="question--answer">
                <div className="question--choice">
                    <input type="radio" id="choice1" value="choice1" name="question1" className="question--radio" />
                    <label for="choice1" className="radio-label">Choice 1</label>
                </div>
                <div className="question--choice">
                    <input type="radio" id="choice2" value="choice2" name="question1" className="question--radio" />
                    <label for="choice2" className="radio-label">Choice 2</label>
                </div>
                <div className="question--choice">
                    <input type="radio" id="choice3" value="choice3" name="question1" className="question--radio" />
                    <label for="choice3" className="radio-label">Choice 3</label>
                </div>
                <div className="question--choice">
                    <input type="radio" id="choice4" value="choice4" name="question1" className="question--radio" />
                    <label for="choice4" className="radio-label">Choice 4</label>
                </div>
            </div>
        </div>
    )
}