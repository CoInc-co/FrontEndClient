import React from "react";
import '../App.css';
import * as API from "../api/SampleAPI";

class TestAPIPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null
        };
    }

    componentDidMount() {
        API.getAll().then(result => result.json()).then(json => this.setState({response: JSON.stringify(json)}));
        API.postSample().then(result => result.json()).then(json => console.log(json));
        API.getAll().then(result => result.json()).then(json => console.log(json));
    }

    render() {
        return(
            <p className="text">
                The response from the API is {this.state.response}
            </p>
        );
    }
}

export default TestAPIPage;
