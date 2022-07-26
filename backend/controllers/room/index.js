const connection = require("../../models/db");


const createRoom = (req, res) => {
    const book_id = req.params.id
    const { description, } = req.body;
    const admin_id = req.token.userId
    const query = `select * from books where id =? and  is_deleted=0 ;`;
    const data = [book_id];
    connection.query(query, data, (err, result) => {
        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                massage: "not found",
                err: err,
            });
        };
        const query = `insert into rooms (description,book_id,admin_id ) values (?,?,?);`
        const data2 = [description, book_id, admin_id]
        connection.query(query, data2, (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    massage: "not ",
                    err: err,
                });
            }
        })
        res.status(201).json({
            success: true,
            massage: "room created",
            result: result,
        });
    });
};


const getAllRoom = (req, res) => {
    const query = `select * from rooms where is_deleted=0; `;
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(404).json({
                success: false,
                massage: "not found",
                err: err,
            });
        }
        res.status(200).json({
            success: true,
            massage: "All the books",
            result: result,
        });
    });
};



const getRoomById = (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM rooms WHERE id = ? and is_deleted=0`
    const data = [id];
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                massage: "Server Error",
                err: err,
            });

        } if (!result.length) {
            return res.status(404).json({
                success: false,
                massage: "The boods is Not found",
            })
        }
        res.status(200).json({
            success: true,
            massage: `the books ${id}`,
            result: result,
        });
    });
};



const deleteRoomById = (req, res) => {
    const id = req.params.id;
    const query = `UPDATE rooms SET is_deleted=1 WHERE id=?;`;
    const data = [id];
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                massage: "Server error",
                err: err,
            });
        }
        if (!result.changedRows) {
            return res.status(404).json({
                success: false,
                massage: `The books ${id} is not found`,
                err: err,
            });
        }
        res.status(200).json({
            success: true,
            massage: `Succeeded to delete books with id : ${id}`,
            result: result,
        });
    });
};



module.exports = {
    createRoom,
    getAllRoom,
    getRoomById,
    deleteRoomById
}