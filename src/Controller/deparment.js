const DB = require('../db/config');
const db = new DB();


const getAll = async (req, res) => {
    const query = `SELECT * FROM department`;
    const result = await db.query(query);
    
    res.status(200).json(result.rows);
}

module.exports = {
    getAll
}
