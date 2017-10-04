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
      searchValue: '',
      isLoading: false
  };

export default function reducer(state: IGlobalState = initialState, action: any) {
	let newState = {...state};

	switch (action.type) {
		case 'input': newState.searchValue = action.value; break;
		case 'search': 
			newState.findedItems = newState.list.filter((element) => {
				return action.value !== '' && element.toLowerCase().indexOf(action.value.toLowerCase()) >= 0;
			});
    break;
    case 'getList_BEGIN':
      newState.isLoading = true;
    break;
		case 'getList_SUCCESS': 
			newState.findedItems = newState.list.filter((element) => {
				return action.value !== '' && element.toLowerCase().indexOf(action.value.toLowerCase()) >= 0;
      });
      newState.isLoading = false;
		break;
		default: return state;
	}

	return newState;
}