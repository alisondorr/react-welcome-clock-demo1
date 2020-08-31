import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component

    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            jeopardyAnswer: "",

        }
    }
    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }
    //when the component mounts, get a the first question
    componentDidMount() {
        this.getNewQuestion();
    }
    handleChange = (event) => {
        this.setState({ jeopardyAnswer: event.target.value })

    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(currentState => {
            let score = currentState.score
            if (currentState.jeopardyAnswer.toLowerCase() === currentState.data.answer.toLowerCase()) {
                score = score + currentState.data.value
            }
            else { score = score - currentState.data.value }
            return { score, jeopardyAnswer: "" }
        })
        this.getNewQuestion()
    }
    //display the results on the screen
    render() {
        let category = "loading";
        if (this.state.data.category) {
            category = this.state.data.category.title
        }

        return (
            <div>
                <strong>Question: </strong> {this.state.data.question} <br />
                <strong>Value: $ </strong> {this.state.data.value} <br />
                <strong>Category: </strong> {category} <br />
                <strong>Total Winnings: $ </strong> {this.state.score} <br />

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Enter Jeopardy Answer:</label>
                            <input onChange={this.handleChange} type="text" name="jeopardyAnswer" value={this.state.jeopardyAnswer} />
                        </div>

                        <button>Submit Answer</button>
                        <br />
                        {this.state.jeopardyAnswer}
                        <br />
                    </form>
                </div>
            </div >
        );
    }
}
export default Jeopardy;