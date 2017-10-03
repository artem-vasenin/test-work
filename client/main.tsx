import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';
import { IGlobalState } from './models';
import reducer from './reducer/reducer';
import App from './components/App';

const initialState: IGlobalState = {
  list: [
    'Татьяна Геннадиевна',
    'Светлана Дмитриевна',
    'Алевтина Павловна',
    'Игорь Прокофьевич',
    'Сергей Дмитриевич',
    'Артём Владимирович',
    'Светлана Евгеньевна',
    'Татьяна Владимировна',
    'Ольга Викторона',
    'Ирина Юрьевна',
    'Стас Анатольевич',
    'Семен Алексеевич',
    'Андрей Александрович',
    'Лада Артёмовна',
    'Виталий Прокофьевич',
    'Егор Афанасьевич',
    'Николай Владимирович',
    'Виктор Георгиевич',
    'Григорий Алексеевич',
    'Виталий Анатольевич',
    'Александр Александрович',
    'Снежана Бикмабетова',
    'Олег Тимофеевич',
    'Данил Станиславович',
  ],
    findedItems: [];
    searchValue: ''
};

const store: Store<any> = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);