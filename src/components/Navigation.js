import * as ReactBootstrap from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const navigate = useNavigate();
    return <>
        <ReactBootstrap.Navbar className='bg-success'>
            <ReactBootstrap.Container>
                <ReactBootstrap.NavbarBrand className='text-dark'>
                    Redux - Thunk
                </ReactBootstrap.NavbarBrand>
                <ReactBootstrap.NavLink className='text-white' onClick={e => navigate(`/overview`)}>Overview</ReactBootstrap.NavLink>
                <ReactBootstrap.NavLink className='text-white' onClick={e => navigate(`/person`)}>Person</ReactBootstrap.NavLink>
            </ReactBootstrap.Container>
        </ReactBootstrap.Navbar>
        <Outlet />
    </>
}

export default Navigation;