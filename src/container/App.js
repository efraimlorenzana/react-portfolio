import React, { Component } from 'react';
import NavigationRoutes from '../components/js/navigation';

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
      	<NavigationRoutes />
      </div>
    );
  }
}

export default App;
