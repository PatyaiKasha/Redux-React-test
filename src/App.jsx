//Core
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//Instruments
import Header from './Components/Header';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Team from './Components/Team';
import Gallery from './Components/Gallery';

//Styles
import './App.css';

const menu = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/team',
    name: 'Team',
  },
  {
    path: '/gallery',
    name: 'Gallery',
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      gallery: [],
    };
  }

  componentWillMount() {
    const endPoint = 'https://pixabay.com/api/?key=';
    const apiKey = '5018958-ed49ccd90878e6614abdf24a6';
    fetch(endPoint + apiKey + '&category=food&order=popular&per_page=9')
      .then(res => {
        return res.json();
      })
      .then(
        data =>
          // console.log(data.hits)
          data.hits,
      )
      .then(result => {
        this.setState({
          gallery: [...this.state.gallery, ...result],
        });
      });
  }

  render() {
    return (
      <div>
        <Header>
          <Nav nav={menu} />
        </Header>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/team" component={Team} />
            {/* <Route path="/gallery" component={Gallery} /> */}
            <Route
              path="/gallery"
              render={() => <Gallery pictures={this.state.gallery} />}
            />
            <Redirect to="/" />
            {/* <Route render={() => <h2>PAGE NOT FOUND</h2>} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
