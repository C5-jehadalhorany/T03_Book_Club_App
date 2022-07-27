const connection = require("../../models/db");
const bcrypt = require("bcrypt");
const saltRounds = 8;

const register = async (req, res) => {
  const {username , email, password } = req.body;
  const role = 2;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  const data = [username, email, encryptedPassword, role];
  const query = `INSERT INTO users (username,email,password,role_id) VALUES (?,?,?,?)`;

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(409).json({
        success: false,
        message: "the email is already exist",
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      massage: "Account Created Successfully",
      result,
    });
  });
};
module.exports = {
  register,
};

