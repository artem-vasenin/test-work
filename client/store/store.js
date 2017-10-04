import {createStore} from 'redux';
import reducer from '../reducer/reducer';
import {IGlobalState} from '../models';

const initialState = {
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
      'Данил Станиславович'
    ],
      findedItems: [],
      searchValue: ''
  };
  
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
  export default store;