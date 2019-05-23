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
      user: {
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
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',                  
      },
      body: JSON.stringify(user)
    }).then(this.setState(state => {
      const users = [...state.users, state.user];
      return {
        users,
      };
    }))
    .catch(err => {
      throw new Error(err)
    });
  }

  handleInput = (event) => {
    this.setState({
      user: {
        name: event.target.value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addUser(this.state.user);
    this.setState({
      user: {
        name: ""
      }
    })
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Route
              exact
              path={["/page_1", "/"]}
              render={() => (<FirstPage handleInput={this.handleInput} value={this.state.user.name} handleSubmit={this.handleSubmit} />)}
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
