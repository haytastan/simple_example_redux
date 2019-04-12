import React, { Component } from 'react';
import TitlePanelContainer from './containers/TitlePanelContainer';
import FormContainer from './containers/FormContainer';

class App extends Component {
  render() {
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '500px', flexDirection: 'column'}}>
        <TitlePanelContainer />
        <FormContainer />
      </div>
    );
  }
}

export default App;
