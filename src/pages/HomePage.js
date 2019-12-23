import React from "react";
import '../App.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return(
            <header className="text">
                This is a header for home page.
            </header>
        );
    }
}

export default HomePage;
