const DB = require('../db/config');
const db = new DB();

const postSubject = async (req, res) => {
    const { name, code, department } = req.body;

    db.query(`INSERT INTO subject (name, code, departmentid) VALUES ('${name}', '${code}', '${department}')`, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send({
                message: 'Error al crear el registro'
            });
        } else {
            res.status(200).json({
                message: 'Registro creado correctamente'
            });

        }
    }
    );

}


module.exports = {
    postSubject
}