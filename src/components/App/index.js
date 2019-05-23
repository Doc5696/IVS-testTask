import React from 'react';
import './index.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import { FirstPage } from '../FirstPage';
import { SecondPage } from '../SecondPage';
import { ThirdPage } from '../ThirdPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Route exact path={["/page_1", "/"]} component={FirstPage} />
            <Route path="/page_2" component={SecondPage} />
            <Route path="/page_3" component={ThirdPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
