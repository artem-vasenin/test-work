import {createStore} from 'redux';
import reducer from '../reducer/reducer';
import {IGlobalState} from '../models';
  
const store = createStore(reducer);
  
export default store;