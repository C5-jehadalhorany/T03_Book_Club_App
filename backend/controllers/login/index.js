const connection = require("../../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT *,users.id FROM users INNER JOIN roles ON users.role_id=roles.id WHERE email=?`;
    const data = [email];
    connection.query(query, data, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, response) => {
                if (err) {
                    res.status(403).json({
                        success: false,
                        message: `The password you’ve entered is incorrect`,
                    });
                }
                if (response) {
                    const query = `Update users SET userLoginTime=CURRENT_TIMESTAMP WHERE email=?  `;
                    const data = [email];
                    connection.query(query, data, (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                    })
                    const payload = {
                        username: result[0].username,
                        userId: result[0].id,
                        role: result[0].role_id,
                        email: result[0].email
                    };
                    const secret = process.env.SECRET;
                    const token = jwt.sign(payload, secret);
                    res.status(200).json({
                        success: true,
                        token,
                        userId: result[0].id,
                        username: result[0].username,
                        role_id: result[0].role_id
                    });
                } else {
                    res.status(403).json({
                        success: false,
                        message: `The password you’ve entered is incorrect`,
                    });
                }
            });
        } else {
            res.status(404).json({
                success: false,
                message: "The email doesn't exist"
            });
        }
    });
};

module.exports = {
    login,
};