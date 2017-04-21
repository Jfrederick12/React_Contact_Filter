import React, { Component } from 'react';
import Header from './components/header';
import Inbox from './components/inbox';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        < Header />
        < Inbox />
      </div>
    );
  }
}

export default App;
