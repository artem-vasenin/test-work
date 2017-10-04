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

export default function reducer(state: IGlobalState = initialState, action: any) {
	let newState = {...state};

	switch (action.type) {
		case 'input': newState.searchValue = action.value; break;
		case 'search': 
		newState.findedItems = newState.list.filter((element) => {
				return element.toLowerCase().indexOf(action.value.toLowerCase()) >= 0;
			});
		break;
		default: return state;
	}

	return newState;
}