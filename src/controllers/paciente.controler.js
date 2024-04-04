import {getConnection} from "../database/database";

const getPacientes = async(req, res)=> {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT numero, nombre, apellido, direccion, tipo FROM pacientes");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const addPacientes = async(req, res)=> {
    try{
        const { numero, nombre, apellido, direccion, tipo } = req.body;

        if( numero == undefined || direccion == undefined || nombre == undefined || apellido == undefined || tipo == undefined) {
            res.status(400).json({message: "Bad request. Por favor llenar todos los campos"})
        };

        const pacientes = { numero, nombre, apellido, direccion, tipo };
        const connection = await getConnection();
        await connection.query("INSERT INTO pacientes SET ?", pacientes);
        res.json({message: "Paciente añadido"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const getPaciente = async(req, res)=> {
    try{
        const { numero } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT numero, nombre, apellido, direccion, tipo FROM pacientes WHERE numero = ?", numero);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const deletePacientes = async(req, res)=> {
    try{
        const { numero } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM pacientes WHERE numero = ?", numero);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

const updatePacientes = async(req, res)=> {
    try{
        const { numero } = req.params;
        const { nombre, apellido, direccion, tipo } = req.body;

        if( numero == undefined || nombre == undefined || apellido == undefined || direccion == undefined || tipo == undefined) {
            res.status(400).json({message: "Bad request. Por favor llenar todos los campos"})
        };

        const pacientes = { nombre, apellido, direccion, tipo };
        const connection = await getConnection();
        const result = await connection.query("UPDATE pacientes SET ? WHERE numero = ?", [pacientes, numero]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    };
};

export const methods = {
    getPacientes,
    addPacientes,
    getPaciente,
    deletePacientes,
    updatePacientes
};
