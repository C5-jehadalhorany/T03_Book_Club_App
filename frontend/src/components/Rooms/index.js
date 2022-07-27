import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { login, logout } from "../../redux/reducers/user";



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

    return <button onClick={() => { roomsRender() }}>room</button>

}

export default RoomsFunction