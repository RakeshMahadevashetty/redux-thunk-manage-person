import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIndividualPerson, createIndividualPerson, updateIndividualPerson } from '../redux/action'

const initialState = {
    name: '',
    age: '',
    email: ''
}

const PersonForm = () => {
    const [state, setState] = useState(initialState);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { individualPerson, loading } = useSelector((state) => ({ ...state.data }));

    useEffect(() => {
        id && dispatch(fetchIndividualPerson(id));
    }, [])

    useEffect(() => {
        Object.keys(individualPerson).length > 0 && setState(...individualPerson);
    }, [individualPerson])

    const { name, email, age } = state;

    const clearForm = () => {
        setState(initialState)
    }

    const submitForm = () => {
        if (name && email && age) {
            id ? dispatch(updateIndividualPerson(state)) : dispatch(createIndividualPerson(state));
            navigate('/overview')
        }
    }

    const onChangeValue = (event) => {
        let { name, value } = event.target;
        console.log(name, value);
        setState({
            ...state,
            [name]: value
        })
    }

    return <ReactBootstrap.Container  className='col-md-5 justify-content-center'>
        <ReactBootstrap.Row className='m-5 h1 text-danger justify-content-center'>{id ? "Update" : "Create"} Person</ReactBootstrap.Row>
        <ReactBootstrap.Form>
            <ReactBootstrap.FormGroup>
                <ReactBootstrap.FormLabel>Name</ReactBootstrap.FormLabel>
                <ReactBootstrap.Form.Control type='text' value={name} name="name" onChange={onChangeValue} />
            </ReactBootstrap.FormGroup>
            <ReactBootstrap.FormGroup>
                <ReactBootstrap.FormLabel>Email</ReactBootstrap.FormLabel>
                <ReactBootstrap.FormControl type='email' value={email} name="email" onChange={onChangeValue} />
            </ReactBootstrap.FormGroup>
            <ReactBootstrap.FormGroup>
                <ReactBootstrap.FormLabel>Age</ReactBootstrap.FormLabel>
                <ReactBootstrap.FormControl type='number' name="age" min="0" value={age} onChange={onChangeValue} />
            </ReactBootstrap.FormGroup>
            <ReactBootstrap.FormGroup className='row mt-2 d-flex justify-content-end'>
                <ReactBootstrap.ButtonGroup className="col-md-4" >
                    <ReactBootstrap.Button className="m-2" onClick={clearForm}>Cancel</ReactBootstrap.Button>
                    <ReactBootstrap.Button className="m-2" onClick={submitForm}>Submit</ReactBootstrap.Button>
                </ReactBootstrap.ButtonGroup>
            </ReactBootstrap.FormGroup>
        </ReactBootstrap.Form>
    </ReactBootstrap.Container>
}

export default PersonForm;