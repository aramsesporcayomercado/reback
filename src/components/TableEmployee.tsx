import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Modal } from '@material-ui/core';

interface Data {
    id: number;
    nombre: string;
    apellidos: string;
    correo: string;
    roll: string;
    academia: string;
}


interface Props {
    data: Data[];
}

const TableComponent: React.FC<Props> = ({ data }) => {

    const [openModal, setOpenModal] = useState(false);
    const [selectOptionArea, setSelectOptionArea] = useState('');
    const [selectedOptionType, setselectedOptionType] = useState('');

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const getCurrentDateTime = () => {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        return `${date} - ${time}`;
    };

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setselectedOptionType(event.target.value);
    }

    const handleOptionChangeArea = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectOptionArea(event.target.value);
    }

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Apellidos</TableCell>
                        <TableCell>Correo</TableCell>
                        <TableCell>Roll</TableCell>
                        <TableCell>Academia</TableCell>
                        <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.nombre}</TableCell>
                            <TableCell>{item.apellidos}</TableCell>
                            <TableCell>{item.correo}</TableCell>
                            <TableCell>{item.roll}</TableCell>
                            <TableCell>{item.academia}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary">
                                    Editar
                                </Button>
                                <Button className="btn-delate" variant="contained" color="default" >
                                    Eliminar
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <div className="popup">
                    <div className='modal-header'>
                        <p>{getCurrentDateTime()}</p>
                    </div>
                    <h2>Agregar empleado</h2>
                    <form className='form'>
                        <label>
                            Nombre:
                            <input type="text" name="nombre" />
                        </label>
                        <br />
                        <label>
                            Apellidos:
                            <input type="text" name="apellidos" />
                        </label>
                        <br />
                        <label>
                            Correo:
                            <input type="email" name="correo" />
                        </label>
                        <br />
                        <div>
                            <select className='dropdown-select' value={selectedOptionType} onChange={handleOptionChange}>
                                <option value="">Tipo de empleado</option>
                                <option value="docente">Docente</option>
                                <option value="soportetec">Soporte Tecnico</option>
                                <option value="admin">Administrador</option>
                            </select>
                        </div>
                        <div>
                            <select className='dropdown-select' value={selectOptionArea} onChange={handleOptionChangeArea}>
                                <option value="">Academia</option>
                                <option value="DATID">DATID</option>
                                <option value="DAMI">DAMI</option>
                                <option value="DACEA">DACEA</option>
                            </select>
                        </div>
                        <br />
                        <button type="submit">Guardar</button>
                        <button className='btn-close' type="button" onClick={() => setOpenModal(false)}>Cancelar</button>
                    </form>
                </div>
            </Modal>
            <br />
            <div>
                <Button className='btn-add' variant="contained" color="primary" onClick={handleOpenModal} >Agregar</Button>
            </div>
        </div>

    );
};

export default TableComponent;
