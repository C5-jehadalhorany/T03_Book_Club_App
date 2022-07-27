const connection = require("../../models/db");




const createBook = (req, res) => {
    const { Title, book_img } = req.body;

    const role = req.token.role

    if (role === 1) {
        const query = `INSERT INTO books (Title,book_img ,acsept) VALUES (?,?,?) `;
        const data = [Title, book_img, 1];
        connection.query(query, data, (err, result) => {
            console.log(result);
            if (err) {
                return res
                    .status(500)
                    .json({ success: false, message: "Server Error", err: err });
            }

            res.status(201).json({
                success: true,
                message: "book is added ",
                result: result,
            });
        });
    }

    else {

        res.status(201).json({
            success: true,
            message: "book is send to admin to add the book ",

        });
    };
}

const getAllBooks = (req, res) => {
    const query = `SELECT * from books where is_deleted=0;`;
    connection.query(query,(err, result) => {
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



const getBookById = (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM books WHERE id = ? and is_deleted=0`
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



const deleteBooksById = (req, res) => {
    const id = req.params.id;
    const query = `UPDATE books SET is_deleted=1 WHERE id=?;`;
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
    createBook,
    getAllBooks,
    getBookById,
    deleteBooksById
}