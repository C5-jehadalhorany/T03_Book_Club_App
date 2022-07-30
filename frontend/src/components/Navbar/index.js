import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { login, logout } from "../../redux/reducers/user";


function TextLinkExample() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { token, Islogin, role_id, username } = useSelector((state) => {
        return {
            token: state.auth.token,
            Islogin: state.auth.Islogin,
            role_id: state.auth.role_id,
            username: state.auth.username
        };
    });

    const logouts = () => {
        dispatch(logout())
        navigate("/")
    }


    useEffect(() => {
        logouts()
    }, [])

    return (
        <>
            {token ? (<> <Navbar className='color-nav ' variant="dark" >
                <Container fluid >
                    <Navbar.Brand onClick={() => {
                        navigate("/")
                    }}>RoomOfBooks</Navbar.Brand>
                    <Nav className="me-left">
                        <Nav.Link onClick={() => {
                            navigate("/room")
                        }}>Room</Nav.Link>
                        <Nav.Link onClick={() => {
                            logouts()
                        }}>logout</Nav.Link>
                        <Nav.Link > Signed in as: <a>{username}</a></Nav.Link>
                    </Nav>
                </Container>
            </Navbar></>) : (<>   <Navbar className='color-nav ' variant="dark" >
                <Container fluid >
                    <Navbar.Brand onClick={() => {
                        navigate("/")
                    }}>RoomOfBooks</Navbar.Brand>
                    <Nav className="me-left">
                        <Nav.Link onClick={() => {
                            navigate("/login")
                        }}>login</Nav.Link>
                        <Nav.Link onClick={() => {
                            navigate("/register")
                        }}>register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar></>)}
            {/* <Navbar className='color-nav ' variant="dark" >
                <Container fluid >
                    <Navbar.Brand onClick={() => {
                        navigate("/")
                    }}>RoomOfBooks</Navbar.Brand>
                    <Nav className="me-left">
                        <Nav.Link onClick={() => {
                            navigate("/room")
                        }}>Room</Nav.Link>
                        <Nav.Link onClick={() => {
                            logouts()
                        }}>logout</Nav.Link>
                        <Nav.Link onClick={() => {
                            navigate("/login")
                        }}>login</Nav.Link>
                        <Nav.Link onClick={() => {
                            navigate("/register")
                        }}>register</Nav.Link>
                        <Nav.Link > Signed in as: <a>{username}</a></Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
        </>
    );
}

export default TextLinkExample;