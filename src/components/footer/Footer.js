import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className='footer-layout'>
                <div id="container" className='half-width'>
                    <div id='card' className='card center half-width inline'>
                        <p> Card Title Here </p>
                    </div>
                    <div id='card' className='card center half-width inline'>
                        <p> Card Title Here </p>
                    </div>
                </div>
                <p className='center-align'>
                    This is a footer
                </p>
            </footer>
        );
    }
}

export default Footer;
