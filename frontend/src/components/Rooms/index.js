import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import { login, logout } from "../../redux/reducers/user";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";




const RoomsFunction = () => {

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


    const roomsRender = () => {
        axios.get(`http://localhost:5000/room`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((result) => {
            console.log(result.data.result);
            
            navigate("/room")
        }).catch((err) => {
            console.log(err);
        })
    }




    useEffect(() => {
        roomsRender()
    }, [])

    return <div>
        <h1>All-Rooms&</h1>
        <>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <h1>{"Room&" + (idx + 1)}</h1>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    <button onClick={() => {
                                        navigate("/book")
                                    }}>joinRoom</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <button onClick={() => { roomsRender() }}>"Out-Of-Room&"</button>
        </>
     
    </div>


}

export default RoomsFunction