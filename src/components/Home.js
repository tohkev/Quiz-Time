import React from 'react';

export default function Home(props) {
    return (
        <div className="home--block">
            <h1 className="home--heading">Quiz Time!</h1>
            <p className="home--description">Put your trivia skills to the test by answering 5 questions.</p>
            <div className="home--start-btn" onClick={props.onClick}>
                <h2>Start Quiz</h2>
            </div>
        </div>
    )
}