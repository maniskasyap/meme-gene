import React, { Component } from 'react';
import './App.scss';
import { ListContainer } from './components/list-container';
import { CreateResult, CreateForm } from './components/create-container';
import { memeStore } from './redux/store';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
    this.unsubscribe = memeStore.subscribe(() => {
      const loading = memeStore.getState()['loader'].is;
      this.setState({
        loading
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const loading = this.state.loading;
    return (
      <div className="App">
        {loading && <div className="loader">Please wait...</div>}
        <ListContainer />
        <div className="create-container">
          <CreateResult />
          <CreateForm />
        </div>
      </div>
    );
  }
}
