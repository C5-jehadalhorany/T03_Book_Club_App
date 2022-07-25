const connection = require("../../models/db");

const getAllUsers = (req, res) => {
    const query = `SELECT *,users.id FROM users INNER JOIN roles ON users.role_id=roles.id  WHERE is_deleted=0`;
  
    connection.query(query, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          massage: "Server error",
          err: err,
        });
      }
      res.status(200).json({
        success: true,
        massage: "All the users",
        result: result,
      });
    });
  };
  const getUserById = (req, res) => {
    
    const email = req.body.email
    const query = `SELECT *,users.id FROM users INNER JOIN roles ON users.role_id=roles.id  WHERE is_deleted=0 AND users.email=?`;
  const data =[email]
    connection.query(query,data, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          massage: "Server error",
          err: err,
        });
      }
      res.status(200).json({
        success: true,
        massage: "user",
        result: result,
      });
    });
  };
  
  const updateUser = (req, res) => {
    const userId = req.params.id;
    const query = `Update users SET role_id=2 WHERE id=? AND is_deleted=0`;
    const data = [userId];
  
    connection.query(query, data, (err, result) => {
      if (err) {
        return res.status(404).json({
          success: false,
          massage: `Server error`,
          err: err,
        });
      }
      if (!result.changedRows) {
        return res.status(404).json({
          success: false,
          massage: `The user: ${userId} is not found`,
          err: err,
        });
      }
      res.status(200).json({
        success: true,
        massage: `Succeeded to update user with id: ${userId}`,
        result: result,
      });
    });
  };
  
  const deleteUser = (req, res) => {
    const userId = req.params.id;
    const query = `Update users SET is_deleted=1 WHERE id=?`;
    const data = [userId];
  
    connection.query(query, data, (err, result) => {
      if (err) {
        return res.status(404).json({
          success: false,
          massage: `Server error`,
          err: err,
        });
      }
      if (!result.changedRows) {
        return res.status(404).json({
          success: false,
          massage: `The user: ${userId} is not found`,
          err: err,
        });
      }
      res.status(200).json({
        success: true,
        massage: `Succeeded to delete user with id: ${userId}`,
        result: result,
      });
    });
  };
  
  module.exports = {
    getAllUsers,
    updateUser,
    deleteUser,
    getUserById
  };