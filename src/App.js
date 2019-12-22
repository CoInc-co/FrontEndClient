import React from 'react';
import NavBar from './components/navigation/NavBar';
import './App.css';
import * as Constants from './utility/Constants';
import * as Utils from './utility/Utils';
import * as API from './api/SampleAPI';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "hold pls"
    };
  }

  componentDidMount() {
    document.title = Constants.TITLE;
    console.log("This browser " + (Utils.checkLocalStorage() ? "has HTML5 Local Storage!" : "does not support Local Storage..."));
    API.getSample().then(result => result.json()).then(json => this.setState({response: JSON.stringify(json)}));
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
          </header>
          <NavBar/>
          <p>
            The response from the API is {this.state.response}
          </p>
        </div>
    );
  }
}

export default App;
