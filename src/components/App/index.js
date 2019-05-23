import React from 'react';
import './index.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { FirstPage } from '../FirstPage';
import { SecondPage } from '../SecondPage';
import { ThirdPage } from '../ThirdPage';

const baseUrl = "http://localhost:8081/api"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      newUser: {
        name: ""
      }
    }
  }

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers() {
    fetch(`${baseUrl}/users`, {
      method: "GET",
    })
    .then(r => r.json())
    .then(data => {this.setState({ users: data })})
    .catch(err => {
      throw new Error(err)
    })
  };

  addUser(user) {
    fetch(`${baseUrl}/user`, {
      method: "POST",
      body: JSON.stringify({name: user})
    }).then(() => {
      this.loadUsers();
    })
    .catch(err => {
      throw new Error(err)
    });
  }

  handleInput = (event) => {
    this.setState({newUser: event.target.value});
  }

  handleSubmit = (event) => {
    this.addUser(this.state.newUser)
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Route
              exact
              path={["/page_1", "/"]}
              render={() => (<FirstPage handleInput={this.handleInput} handleSubmit={this.handleSubmit} />)}
            />
            <Route
              path="/page_2"
              render={() => (<SecondPage users={this.state.users} />)}
            />
            <Route
              path="/page_3"
              component={ThirdPage}
            />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
