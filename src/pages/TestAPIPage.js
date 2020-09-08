import React from "react";
import '../App.css';
import * as API from "../api/SampleAPI";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/footer/Footer";

class TestAPIPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null
        };
    }

    componentDidMount() {
        API.getAll().then(result => result.json()).then(json => {
            this.setState({response: JSON.stringify(json)})
            console.log(json);
        });
        //API.postSample().then(result => result.json()).then(json => console.log(json));
        //API.getAll().then(result => result.json()).then(json => console.log(json));
    }

    render() {
        return(
            <div>
                <NavBar/>
                <p className="text">
                    The response from the API is {this.state.response}
                </p>
                <Footer/>
            </div>
        );
    }
}

export default TestAPIPage;
