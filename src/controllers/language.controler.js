import {getConnection} from "./../database/database";

const getLanguages = async(req, res)=> {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, apellido, contagiado, tipo FROM contagiados");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const addLanguage = async(req, res)=> {
    try{
        const { nombre, apellido, contagiado, tipo } = req.body;

        if( nombre == undefined || apellido == undefined || contagiado == undefined || tipo == undefined) {
            res.status(400).json({message: "Bad request. Por favor llenar todos los campos"})
        };

        const contagiados = { nombre, apellido, contagiado, tipo };
        const connection = await getConnection();
        await connection.query("INSERT INTO contagiados SET ?", contagiados);
        res.json({message: "Paciente añadido"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const getLanguage = async(req, res)=> {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, apellido, contagiado, tipo FROM contagiados WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const deleteLanguage = async(req, res)=> {
    try{
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM contagiados WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const updateLanguage = async(req, res)=> {
    try{
        const { id } = req.params;
        const { nombre, apellido, contagiado, tipo } = req.body;

        if( id == undefined || nombre == undefined || apellido == undefined || contagiado == undefined || tipo == undefined) {
            res.status(400).json({message: "Bad request. Por favor llenar todos los campos"})
        };

        const contagiados = { nombre, apellido, contagiado, tipo };
        const connection = await getConnection();
        const result = await connection.query("UPDATE contagiados SET ? WHERE id = ?", [contagiados, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

export const methods = {
    getLanguages,
    addLanguage,
    getLanguage,
    deleteLanguage,
    updateLanguage
};
