import React, { Component } from 'react';
import Header from 'components/header'
import Layout from 'components/layout'
import Footer from 'components/footer'
import { HashRouter as Router } from 'react-router-dom';
import RouteView from 'router'

import 'common/css/style.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Layout>
          <Router>
            <div>
              <RouteView />
              <Footer />
            </div>
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;
