import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            noOfButtons: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    createButtons = () => {
        this.inputRef.value = this.inputRef.value !== "" ? this.inputRef.value : 0
        let value = parseInt(this.inputRef.value)
        if (this.state.noOfButtons !== value) {
            this.setState({...this.state, noOfButtons: value})
        }else{
            if(!value || value < 0){
                alert('Please enter a valid number greater than 0 preferrably less than 1000')
            }
        }
    }

    handleChange(evt) {
        this.inputRef.value = evt.target.validity.valid ? evt.target.value : 0
    }

    render() {
        console.log(this.state)
        return (
            <div className="App">
                <div>
                    <input type="text" ref={(input) => {
                        this.inputRef = input
                    }} pattern="[0-9]*" defaultValue={0} onInput={this.handleChange}/>
                    <button onClick={this.createButtons}>Create Buttons</button>
                </div>
                <br/>
                <div>
                    {
                        [...Array(this.state.noOfButtons).keys()].map((i) => (<button key={i} onClick={() => {
                            alert(`You've clicked on ${i + 1}`)
                        }}>{i + 1}</button>))
                    }
                </div>
            </div>
        );
    }
}

export default App;
