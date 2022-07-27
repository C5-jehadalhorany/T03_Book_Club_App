import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { login, logout } from "../../redux/reducers/user";



const BooksFunction = () => {

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


    const booksRender = () => {
        axios.get(`http://localhost:5000/book`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((result) => {
            console.log(result.data.result);

        }).catch((err) => {
            console.log(err);
        })
    }


    useEffect(() => {
        booksRender()
    }, [])

    return <button onClick={() => { booksRender() }}>as</button>
}

export default BooksFunction