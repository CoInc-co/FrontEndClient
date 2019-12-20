import React from 'react';
import './App.css';
import * as Constants from './utility/Constants';
import * as Utils from './utility/Utils';
import * as API from './api/SampleAPI';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "hey"
    };
  }


  componentDidMount() {
    document.title = Constants.TITLE;
    console.log("This browser " + (Utils.checkLocalStorage() ? "has HTML5 Local Storage!" : "does not support Local Storage..."));
    API.getSample().then(result => console.log(result));
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <p>
              The response from the API is {this.state.response}
            </p>
          </header>
        </div>
    );
  }
}

export default App;
