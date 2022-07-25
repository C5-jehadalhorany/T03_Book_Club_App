const connection = require("../../models/db");




const createBook = (req, res) => {
    const { Title, book_img } = req.body;

    const query = `insert into books (Title, book_img) values (?,?);`;
    const data = [Title, book_img];
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(404).json({
                success: false,
                massage: "not found",
                err: err,
            });
        };
        res.status(201).json({
            success: true,
            massage: "book created",
            result: result,
        });
    });
};


const getAllBooks = (req, res) => {
    const query = `select * from books where is_deleted=0; `;
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