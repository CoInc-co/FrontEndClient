import React from "react";
import Heart from '../images/heart.png';
import HeartFlow from '../images/heartFlow.png';
import '../App.css';

class Hailey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heart: Heart,
            heartFlow: HeartFlow
        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <div>
                <div className="container containerMarker flex padding-top-30px">
                    <div className="triple-split containerItem">
                        <img src={this.state.heart} className="align-vertically" height="200px" width="200px"/>
                    </div>
                    <div className="triple-split containerItem">
                        <h1 className='hailey-text large-font'>Hailey</h1>
                    </div>
                    <div className="triple-split containerItem">
                        <img src={this.state.heartFlow} className="align-vertically" height="200px" width="110px"/>
                    </div>
                </div>

                <p className='hailey-text medium-font'>
                    This is a header for home page.
                </p>
            </div>
        );
    }
}

export default Hailey;
