const connection = require("../../models/db");




const createBook = (req, res) => {
    const { Title, book_img } = req.body;

    const query = `insert into books (Title, book_img) values (?,?);`;
    const data = [Title, book_img]
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(404).join({
                success: false,
                massage: "not found",
                err: err,
            });
        };
        res.status(201).join({
            success: true,
            massage: "book created",
            result: result,
        });
    });
};




