import * as types from './actionTypes';

const initialState = {
    personList: {},
    loading: false,
    error: null,
    individualPerson: {}
}

const personReducer = (state = initialState, action) => {

    let { personList } = state;

    switch (action.type) {

        case types.FETCH_PERSON_LIST_START:

            return {
                ...state,
                loading: true
            };

        case types.FETCH_PERSON_LIST_SUCCESS:

            return {
                ...state,
                loading: false,
                personList: { ...action.payload }
            }

        case types.FETCH_PERSON_INDIVIDUAL_FAIL:
        case types.DELETE_PERSON_INDIVIDUAL_FAIL:
        case types.CREATE_PERSON_INDIVIDUAL_FAIL:
        case types.FETCH_PERSON_LIST_FAIL:

            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case types.FETCH_PERSON_INDIVIDUAL_START:

            let individualPerson = Object.values(personList).filter(person => person.id === Number(action.payload));

            return {
                ...state,
                loading: true,
                individualPerson: individualPerson
            }

        case types.FETCH_PERSON_INDIVIDUAL_SUCCESS:

            return {
                ...state,
                loading: false
            }

        case types.DELETE_PERSON_INDIVIDUAL_START:

            let filteredList = Object.values(personList).filter(person => person.id !== Number(action.payload));

            return {
                ...state,
                loading: true,
                personList: { ...filteredList }
            }

        case types.DELETE_PERSON_INDIVIDUAL_SUCCESS:

            return {
                ...state,
                loading: false
            }

        case types.CREATE_PERSON_INDIVIDUAL_SUCCESS:

            return {
                ...state,
                loading: false
            }

        case types.CREATE_PERSON_INDIVIDUAL_START:

            return {
                ...state,
                loading: true,
            }

        default:

            return state;
    }
}

export default personReducer;