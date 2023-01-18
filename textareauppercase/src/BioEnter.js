import React from "react";
import "./BioEnter.css"


class BioEnter extends React.Component {
    constructor() {
        super();
        this.state = {
            data: "",
        }
    }
    UpperCase() {
        this.setState({
            data: this.state.data.toUpperCase()
        });
    }
    toLower() {
        this.setState({
            data: this.state.data.toLowerCase()
        });
    }
    changeInputValue(value) {
        this.setState({
            data: value,
        })
    }
    render() {
        return (
            <div className="Count">
                <textarea rows="4" cols="50" value={this.state.data} onChange={
                    (event) => this.changeInputValue(event.target.value)
                }/>
                <p>{this.state.data}</p>
                <textarea name="w3review" rows="4" cols="50" value={this.state.data} onChange={
                    (event) => this.changeInputValue(event.target.value)
                } >{this.state.data}</textarea>
                <button className="UpperCase"
                    onClick={() => {
                        this.UpperCase();
                    }}
                >+ UpperCase</button>
                <button className="toLower"
                    onClick={() => {
                        this.toLower();
                    }}
                >- toLower</button>

            </div>
        )


    }
}

export default BioEnter;