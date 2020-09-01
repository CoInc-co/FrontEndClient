import React from "react";
import '../App.css';
import Footer from "../components/footer/Footer";
import NavBar from "../components/navigation/NavBar";

class HomePage extends React.Component {
    componentDidMount() {

    }

    render() {
        return(
            <div>
                <NavBar/>
                <p className='text'>
                    This is a header for home page.
                </p>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;
