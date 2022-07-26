// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import("./style.css");

// function BasicExample() {
//     return (
//         <div className='contaner'>
//             <div className='register container  border rounded border-success '>
//                 <Form container  >
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control type="email" placeholder="Enter email" />
//                         <Form.Text className="text-muted">
//                             We'll never share your email with anyone else.
//                         </Form.Text>
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" placeholder="Password" />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                         <Form.Check type="checkbox" label="Check me out" />
//                     </Form.Group>
//                     <Button variant="primary" type="submit">
//                         login
//                     </Button>
//                 </Form>
//             </div>
//         </div>);
// }

// export default BasicExample;


import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
        );
    }
}