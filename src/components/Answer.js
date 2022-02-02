import React from 'react';

export default function Answer() {
    return (
        <div className="question--choice">
            <input type="radio" id="choice1" value="choice1" name="question1" className="question--radio" />
            <label for="choice1" className="radio-label">Choice 1</label>
        </div>
    )
}