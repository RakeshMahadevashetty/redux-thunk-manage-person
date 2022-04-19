import { useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonList, deleteIndividualPerson } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const PersonOverview = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const { personList, loading } = useSelector((state) => ({ ...state.data }))

    useEffect(() => {
        dispatch(fetchPersonList())
    }, [])

    return <ReactBootstrap.Container>
        <ReactBootstrap.Row className='m-5 h1 text-danger justify-content-center'>Manage Persons</ReactBootstrap.Row>
        <ReactBootstrap.Row className='justify-content-center'>
            <ReactBootstrap.Col className='col-md-10'>
                <ReactBootstrap.Table>
                    <thead className='bg-info border border-primary'>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='border border-primary'>
                        {Object.keys(personList).length > 0 ? Object.values(personList).map(person => {
                            let { id, name, email, age } = person;
                            return <tr>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{age}</td>
                                <td className='flex'>
                                    <span className='m-2' onClick={e => dispatch(deleteIndividualPerson(id))}><i class="fas fa-trash-alt"></i></span>
                                    <span className='m-2' onClick={e => navigate(`/person/${id}`)}><i class="far fa-edit"></i></span>
                                </td>
                            </tr>
                        }) : <tr className='text-center'><td colspan="4">No data</td></tr>}
                    </tbody>
                </ReactBootstrap.Table>
            </ReactBootstrap.Col>
        </ReactBootstrap.Row>
    </ReactBootstrap.Container>
}

export default PersonOverview;