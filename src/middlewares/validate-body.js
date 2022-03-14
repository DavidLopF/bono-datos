const bodySubjects = (req, res, next) => {
    const { name, code, department } = req.body;

    if (name === '' || code === '' || department === '') {
        console.log("vacios");
        return res.status(400).json({
            message: 'El campo name y code no pueden estar vacios'
        });
    }

    if (!name || !code || !department) {
        console.log("no existen");
        return res.status(400).json({
            message: 'All fields are required'
        });
    }

    next();
}

module.exports = {
    bodySubjects
}