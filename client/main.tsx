import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';
import { IGlobalState } from './models';
import reducer from './reducer/reducer';
import App from './components/App';

const initialState: IGlobalState = {
  list: [],
  searchValue: ''
};

const store: Store<any> = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);