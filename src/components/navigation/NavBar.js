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
            <div>
                <nav id = "navBar" className="menu">
                    <header id = "navHeader" className='header-tab'>Menu <span className='toggle-span'>×</span></header>
                    <ol id = "navElements" className='sub-menu'>
                        <li className="menu-item"><a href="/" className='text-format'>Home</a></li>
                        <li className="menu-item"><a className='text-format'>Connor Wolanski</a>
                            <ol className="sub-menu">
                                <li className="menu-item"><a href="/" className='text-format sub-menu-item'>About</a></li>
                                <li className="menu-item"><a href="/" className='text-format sub-menu-item'>Resume</a></li>
                                <li className="menu-item"><a href="/" className='text-format sub-menu-item'>Projects</a></li>
                            </ol>
                        </li>
                        <li className="menu-item"><a className='text-format'>Cody Alexander</a>
                            <ol className="sub-menu">
                                <li className="menu-item"><a href="/" className='text-format sub-menu-item'>About</a></li>
                                <li className="menu-item"><a href="/" className='text-format sub-menu-item'>Resume</a></li>
                                <li className="menu-item"><a href="/" className='text-format sub-menu-item'>Projects</a></li>
                            </ol>
                        </li>
                        <li className="menu-item"><a href="/" className='text-format'>Demo1</a></li>
                        <li className="menu-item"><a href="/Hailey" className='text-format'>Hailey</a></li>
                        <li className="menu-item"><a href="/testapi" className='text-format'>API Test Page</a></li>
                    </ol>
                    <footer>
                        <button aria-label="Toggle Menu" id= 'navButton' className='toggle-button'>Toggle</button>
                    </footer>
                </nav>
            </div>
        );
    }
}

/**
 * Creates the custom variables needed within the css for the close and open animation.
 */
function animation() {
    // Gets the number of items/group sizes of all the components being compressed.
    let count = document.getElementsByTagName("li").length + 1;
    let groupLength = Math.ceil(count / 3);
    let groupNumber = 0;
    document.getElementById("navElements").style.setProperty('--count', count+'');

    // Gets an array of all the elements being compressed.
    let elements = document.getElementsByTagName("li");
    let elementArray = [];
    elementArray[0] = document.getElementById("navHeader");
    for (let i = 0; i < elements.length; i++){
        elementArray[i+1] = elements[i];
    }

    // Sets what group each element is in.
    let ind = 1;
    elementArray.forEach(function (entry) {
        if ( ind > groupLength ) {
            groupNumber++;
            ind=1;
        }
        entry.setAttribute('data-group', groupNumber);
        ind++;
    });

    // OnClick function to open and close the navigation menu
    document.getElementById('navButton').onclick = function (e) {
        e.preventDefault();
        elementArray.forEach(function (entry) {
            // Sets top location custom variable for each element for transition
            entry.style.setProperty('--top', entry.getBoundingClientRect().top + (entry.getAttribute('data-group')*-15)-20);

            //sets the delay in and out time for each each element
            entry.style.setProperty('--delay-in', elementArray.indexOf(entry)*.05+'s');
            entry.style.setProperty('--delay-out', (count-elementArray.indexOf(entry))*.05+'s');
        });

        // Toggles the classList to be closed for css nav class
        let elements = document.getElementsByClassName('text-format');
        for (let i = 0; i < elements.length; i++) {
            elements.item(i).classList.toggle('closed');
        }

        document.getElementById('navHeader').classList.toggle('closed');
        document.getElementById('navButton').classList.toggle('closed');

        e.stopPropagation();
    }
}

export default NavBar;
