import * as types from './actionTypes';
import axios from 'axios';

const fetchPersonListStart = () => ({
    type: types.FETCH_PERSON_LIST_START,
});

const fetchPersonSuccess = (personList) => ({
    type: types.FETCH_PERSON_LIST_SUCCESS,
    payload: personList
});

const fetchPersonFail = (error) => ({
    type: types.FETCH_PERSON_LIST_FAIL,
    payload: error
});

const fetchIndividualPersonStart = (personId) => ({
    type: types.FETCH_PERSON_INDIVIDUAL_START,
    payload:personId
});

const fetchIndividualPersonSuccess = () => ({
    type: types.FETCH_PERSON_INDIVIDUAL_SUCCESS
});

const fetchIndividualPersonFail = (error) => ({
    type: types.FETCH_PERSON_INDIVIDUAL_FAIL,
    payload: error
});

const deleteIndividualPersonStart = (personId) => ({
    type: types.DELETE_PERSON_INDIVIDUAL_START,
    payload:personId
});

const deleteIndividualPersonSuccess = () => ({
    type: types.DELETE_PERSON_INDIVIDUAL_SUCCESS
});

const deleteIndividualPersonFail = (error) => ({
    type: types.DELETE_PERSON_INDIVIDUAL_FAIL,
    payload: error
});

const createIndividualPersonStart = (personData) => ({
    type: types.CREATE_PERSON_INDIVIDUAL_START,
    payload:{...personData}
});

const createIndividualPersonSuccess = () => ({
    type: types.CREATE_PERSON_INDIVIDUAL_SUCCESS
});

const createIndividualPersonFail = (error) => ({
    type: types.CREATE_PERSON_INDIVIDUAL_FAIL,
    payload: error
});


const updateIndividualPersonStart = (personData) => ({
    type: types.UPDATE_PERSON_INDIVIDUAL_START,
    payload:{...personData}
});

const updateIndividualPersonSuccess = () => ({
    type: types.UPDATE_PERSON_INDIVIDUAL_SUCCESS
});

const updateIndividualPersonFail = (error) => ({
    type: types.UPDATE_PERSON_INDIVIDUAL_FAIL,
    payload: error
});

export function fetchPersonList() {
    return function (dispatch) {
        dispatch(fetchPersonListStart())
        try {
            axios.get('http://localhost:5000/persons').then(response => {
                let PersonList = response.data;
                dispatch(fetchPersonSuccess(PersonList))
            })
        } catch (error) {
            dispatch(fetchPersonFail(error))
        }
    }
}

export function fetchIndividualPerson(personId) {
    return function (dispatch) {
        dispatch(fetchIndividualPersonStart(personId))
        dispatch(fetchIndividualPersonSuccess());
    }
}

export function deleteIndividualPerson(personId) {
    return function (dispatch) {
        dispatch(deleteIndividualPersonStart(personId))
        dispatch(deleteIndividualPersonSuccess());
    }
}

export function createIndividualPerson(personData) {
    return function (dispatch) {
        dispatch(createIndividualPersonStart(personData))
        try {
            axios.post('http://localhost:5000/persons', {...personData});
            dispatch(createIndividualPersonSuccess());
            fetchPersonList();
        } catch (error) {
            dispatch(fetchPersonFail(error))
        }
        dispatch(createIndividualPersonFail());
    }
}

export function updateIndividualPerson(personData) {
    return function (dispatch) {
        dispatch(updateIndividualPersonStart(personData))
        try {
            axios.put(`http://localhost:5000/persons/${personData.id}`, {...personData});
            dispatch(updateIndividualPersonSuccess());
            fetchPersonList();
        } catch (error) {
            dispatch(fetchPersonFail(error))
        }
        dispatch(updateIndividualPersonFail());
    }
}