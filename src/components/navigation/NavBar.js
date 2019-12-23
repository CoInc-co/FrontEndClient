import React from 'react';
import './NavBar.css';
class NavBar extends React.Component
{
    componentDidMount() {
        animation();
    }

    render()
    {
        return(
            <nav id = "navBar" className="menu">
                <header id = "navHeader">Menu <span>×</span></header>
                <ol id = "navElements">
                    <li className="menu-item"><a href="#0">Home</a></li>
                    <li className="menu-item"><a>Connor Wolanski</a>
                        <ol className="sub-menu">
                            <li className="menu-item"><a href="#0">About</a></li>
                            <li className="menu-item"><a href="#0">Resume</a></li>
                            <li className="menu-item"><a href="#0">Projects</a></li>
                        </ol>
                    </li>
                    <li className="menu-item"><a>Cody Alexander</a>
                        <ol className="sub-menu">
                            <li className="menu-item"><a href="#0">About</a></li>
                            <li className="menu-item"><a href="#0">Resume</a></li>
                            <li className="menu-item"><a href="#0">Projects</a></li>
                        </ol>
                    </li>
                    <li className="menu-item"><a href="#0">Demo1</a></li>
                    <li className="menu-item"><a href="#0">Demo2</a></li>
                </ol>
                <footer>
                    <button aria-label="Toggle Menu" id= 'navButton'>Toggle</button>
                </footer>
            </nav>
        );
    }
}

/**
 * Creates the custom variables needed within the css for the close and open animation.
 */
function animation(){
    //gets the number of items/group sizes of all the components being compressed.
    let count = document.getElementsByTagName("li").length+1;
    let groupLength = Math.ceil(count/3);
    let groupNumber = 0;
    document.getElementById("navElements").style.setProperty('--count', count+'');

    //gets an array of all the elements being compressed.
    let elements = document.getElementsByTagName("li");
    let elementArray = [];
    elementArray[0] = document.getElementById("navHeader");
    for (let i = 0; i < elements.length; i++){
        elementArray[i+1] = elements[i];
    }

    //sets what group each element is in.
    let ind = 1;
    elementArray.forEach(function (entry) {
        if ( ind > groupLength ) {
            groupNumber++;
            ind=1;
        }
        entry.setAttribute('data-group', groupNumber);
        ind++;
    });

    //on click function to open and close the navigation menu
    document.getElementById('navButton').onclick = function (e) {
        e.preventDefault();
        elementArray.forEach(function (entry) {
            //sets top location custom variable for each element for transition
            entry.style.setProperty('--top', entry.getBoundingClientRect().top + (entry.getAttribute('data-group')*-15)-20);

            //sets the delay in and out time for each each element
            entry.style.setProperty('--delay-in', elementArray.indexOf(entry)*.05+'s');
            entry.style.setProperty('--delay-out', (count-elementArray.indexOf(entry))*.05+'s');
        });
        //toggles the classList to be closed for css nav class
        document.getElementById('navBar').classList.toggle('closed');
        e.stopPropagation();
    }
}

export default NavBar;
