import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { login, logout } from "../../redux/reducers/user";

const Login = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);



    const { token, Islogin, role_id, username } = useSelector((state) => {
        return {
            token: state.auth.token,
            Islogin: state.auth.Islogin,
            role_id: state.auth.role_id,
            username: state.auth.username
        };
    });


    const loginss = () => {
        axios.post(`http://localhost:5000/login`, { email, password }).then((result) => {
            console.log(result);
            dispatch(login({ token: result.data.token, role_id: result.data.role_id, username: result.data.username }))
            role_id ==1 ?(navigate("/admin")):(navigate("/user"))
        }).catch((err) => {
            console.log(err);
            setMessage(err.response.data.message)
        })
    }

    return <>
        <div className="registerCont">
            <div className="register">
                <h2 className="titleR">Login Form</h2>
                <br></br>
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
                <button onClick={() => { loginss() 
                 }}>Sign in</button>
            </div>

        </div>
    </>
}

export default Login

