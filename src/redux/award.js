import axios from 'axios';

export const SAVE = 'myapp/award/SAVE';
export const UPDATE_VALUE = 'myapp/award/UPDATE_VALUE';
export const SAVE_PEOPLE = 'myapp/award/SAVE_PEOPLE';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SAVE:
      // payload is a promise
      console.log('award returned is ' + JSON.stringify(action.payload.data));
      return action.payload.data;
    case UPDATE_VALUE:
      let award = {...state};
      award[action.key] = action.value;
      return award;
    case SAVE_PEOPLE:
      return action.payload.data;
    default:
      return state;
  }
}

export function saveAward(award) {
  console.log('Posting award...' + JSON.stringify(award));
  const config = {
    headers: {
      'Authorization': 'Basic Y3JhcDphZG1pbg=='
    }
  };

  const data = axios.post('kc-dev/award/api/v2/awards/', award, config);

  return {
    type: SAVE,
    payload: data
  };
}

export function updateAwardValue(key, value) {
  console.log('Action - ' + key + ': ' + value);
  return {
    type: UPDATE_VALUE,
    key: key,
    value: value
  };
}

export function savePeople(award, people) {
  let awardPersons = people;
  awardPersons.map((awardPerson) => {
    awardPerson.personId = awardPerson.principalId;
    delete awardPerson.principalName;
    delete awardPerson.principalId;
  });

  console.log('people here is ' + JSON.stringify(awardPersons));
  const config = {
    headers: {
      'Authorization': 'Basic Y3JhcDphZG1pbg==',
      'content-type': 'application/json'
    }
  };

  const updatedAward = axios.post('kc-dev/award/api/v2/awards/'+ award.awardId + '/award-persons/', awardPersons, config);

  return {
    type: SAVE_PEOPLE,
    key: updatedAward,
  };
}