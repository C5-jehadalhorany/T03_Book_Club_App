import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { login, logout } from "../../redux/reducers/user";
import("./style.css")

const Register = () => {

    const [usernames, setUsernames] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");



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

    const register = () => {
        console.log(usernames, email, password);

        axios
      .post(`http://localhost:5000/register/`, { usernames, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
        setMessage("createing pass")
      })
      .catch((err) => {
        console.log(err.response.data.message);

        setMessage(err.response.data.message);
      });

/* 
        axios.post(`http://localhost:5000/register`, { username, email, password }).then((result) => {
            console.log(result);
            if (result.data.success) {
                setMessage("The user has been created successfully")
                console.log(result.data);
            }
        }).catch((err) => {
            setMessage(err)
        }) */
    }

    return (
        <>
            <div className="registerCont">
                <div className="register">
                    <h2 className="titleR">Register Form</h2>
                    <br></br>
                    <input
                        type={"text"}
                        placeholder="Enter userName"
                        onChange={(e) => {
                            setUsernames(e.target.value);
                        }}
                    />
                    <input
                        type={"email"}
                        placeholder="Enter Your email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        type={"password"}
                        placeholder="Enter Your Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <h1 className="mss">{message}</h1>
                    <button onClick={() => { register() }}>Sign Up</button>
                </div>
            </div>
        </>
    )
}


export default Register